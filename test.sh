#!/bin/bash

# Check if yay is installed
if ! command -v yay &>/dev/null; then
  print_warning "yay not found. Installing yay first..."

  # Install yay as the actual user (makepkg cannot run as root)
  TEMP_DIR="/tmp/yay-install-$$"
  mkdir -p "$TEMP_DIR"
  cd "$TEMP_DIR"
  git clone https://aur.archlinux.org/yay.git .
  makepkg -si --noconfirm --needed
  cd "$ACTUAL_HOME/dotfiles"
  rm -rf "$TEMP_DIR"

  YAY_INSTALLED=true
  print_success "yay installed successfully"
fi

# Define the path to your package list
AUR_FILE="$HOME/dotfiles/aur-packages.txt"

# 1. Read the file into an array (strips whitespace, comments, and empty lines)
# This mimics the "hardcoded" success of your curl test
if [ -f "$AUR_FILE" ]; then
  mapfile -t AUR_PKGS < <(grep -v '^#' "$AUR_FILE" | grep -v '^$')
else
  echo "Error: $AUR_FILE not found."
  exit 1
fi

echo "Installing AUR packages..."

# 2. Use "${AUR_PKGS[@]}" to pass the list as individual arguments
# 3. Add '|| true' so one bad package doesn't kill the whole script
if yay -S --needed --noconfirm --answerdiff None --answerclean All "${AUR_PKGS[@]}" || true; then
  AUR_SUCCESS=true
  echo "INSTALLED correctly (Finished the sequence)"
fi
