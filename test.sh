#!/bin/bash

# Simple AUR test script
set -e

GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}Starting isolated AUR test...${NC}"

# Define a small list of reliable packages
# - google-chrome: standard binary
# - visual-studio-code-bin: standard binary
# - spotify: requires a GPG key (good for testing if that's the hurdle)
TEST_PACKAGES=(
  "google-chrome"
  "visual-studio-code-bin"
  "spotify"
)

# Clear cache to ensure a fresh pull
echo "Cleaning yay cache..."
rm -rf ~/.cache/yay/*

echo "Installing: ${TEST_PACKAGES[*]}"

# Run the install
if yay -S --needed --noconfirm --answerdiff None --answerclean All "${TEST_PACKAGES[@]}"; then
  echo -e "${GREEN}✅ Test successful! The packages were installed.${NC}"
else
  echo -e "${RED}❌ Test failed. Check the output above.${NC}"
  exit 1
fi
