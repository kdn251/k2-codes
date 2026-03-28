#!/bin/bash

# 1. Define missing functions so the script doesn't crash
print_warning() { echo -e "\033[1;33m[WARNING]\033[0m $1"; }
print_success() { echo -e "\033[0;32m[SUCCESS]\033[0m $1"; }

# 2. Install essential build tools (Fixes the fakeroot/debugedit errors)
echo "Ensuring build dependencies (base-devel) are installed..."
sudo pacman -S --needed --noconfirm base-devel

# 3. Check if yay is installed
if ! command -v yay &>/dev/null; then
  print_warning "yay not found. Installing yay first..."

  TEMP_DIR="/tmp/yay-install-$$"
  mkdir -p "$TEMP_DIR"
  cd "$TEMP_DIR"
  git clone https://aur.archlinux.org/yay.git .

  # This will now work because base-devel is present
  makepkg -si --noconfirm --needed

  cd "$HOME/dotfiles" || cd "$HOME"
  rm -rf "$TEMP_DIR"

  YAY_INSTALLED=true
  print_success "yay installed successfully"
fi

# 4. Define the path to your package list
AUR_FILE="$HOME/dotfiles/aur-packages.txt"

# 5. Read the file into an array
if [ -f "$AUR_FILE" ]; then
  mapfile -t AUR_PKGS < <(grep -v '^#' "$AUR_FILE" | grep -v '^$')
else
  echo "Error: $AUR_FILE not found."
  exit 1
fi

echo "Installing AUR packages from list..."

# 6. Run the installation with the array and '|| true' to bypass bad packages
if yay -S --needed --noconfirm --answerdiff None --answerclean All "${AUR_PKGS[@]}" || true; then
  AUR_SUCCESS=true
  echo "------------------------------------------"
  echo "SUCCESS: Finished the AUR installation sequence."
fi
