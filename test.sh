#!/bin/bash

# 1. Define missing functions so the script doesn't crash
print_status() { echo -e "\033[0;34m[INFO]\033[0m $1"; }
print_warning() { echo -e "\033[1;33m[WARNING]\033[0m $1"; }
print_success() { echo -e "\033[0;32m[SUCCESS]\033[0m $1"; }

# -------------------------------------------------------------------
# THE "ONE-TIME PASSWORD" FIX
# -------------------------------------------------------------------
print_status "Authentication required for setup..."
sudo -v

# Create a temporary NOPASSWD rule so sudo never asks again during this script
echo "$USER ALL=(ALL) NOPASSWD: ALL" | sudo tee /etc/sudoers.d/temp-nopasswd >/dev/null
sudo chmod 0440 /etc/sudoers.d/temp-nopasswd

# Start a background "Heartbeat" to keep the sudo session from timing out
while true; do
  sudo -n true
  sleep 60
  kill -0 "$$" || exit
done 2>/dev/null &
# -------------------------------------------------------------------

# 2. Install essential build tools (Fixes the fakeroot/debugedit errors)
print_status "Ensuring build dependencies (base-devel) are installed..."
sudo pacman -S --needed --noconfirm base-devel

# 3. Check if yay is installed
if ! command -v yay &>/dev/null; then
  print_warning "yay not found. Installing yay from source..."

  TEMP_DIR="/tmp/yay-install-$$"
  mkdir -p "$TEMP_DIR"
  cd "$TEMP_DIR" || exit
  git clone https://aur.archlinux.org/yay.git .

  # This will now work without a password prompt because of the NOPASSWD rule
  makepkg -si --noconfirm --needed

  cd "$HOME/dotfiles" || cd "$HOME"
  rm -rf "$TEMP_DIR"
  print_success "yay installed successfully"
fi

# 4. Define the path to your package list
AUR_FILE="$HOME/dotfiles/aur-packages.txt"

# 5. Read the file into an array (strips whitespace/comments)
if [ -f "$AUR_FILE" ]; then
  mapfile -t AUR_PKGS < <(grep -v '^#' "$AUR_FILE" | grep -v '^$')
else
  print_warning "Error: $AUR_FILE not found."
  # Clean up before exiting
  sudo rm /etc/sudoers.d/temp-nopasswd
  exit 1
fi

print_status "Installing AUR packages from list..."

# 6. Run the installation with the array and '|| true' to bypass bad packages
# Note: No 'sudo' before yay. Yay calls sudo internally when it needs it.
if yay -S --needed --noconfirm --answerdiff None --answerclean All "${AUR_PKGS[@]}" || true; then
  echo "------------------------------------------"
  print_success "AUR installation sequence finished."
fi

# 7. CLEANUP: Remove the temporary sudo rule
print_status "Cleaning up temporary permissions..."
sudo rm /etc/sudoers.d/temp-nopasswd
