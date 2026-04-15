#!/bin/bash

# k2.codes VPS bootstrap
# Runs the full k2.codes/setup.sh flow on a machine where only root exists
# (e.g. a fresh Hostinger VPS) by creating a regular user, granting it
# passwordless sudo, and re-executing the standard setup script as that user.
set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() { echo -e "${BLUE}[INFO]${NC} $1"; }
print_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
print_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
print_error() { echo -e "${RED}[ERROR]${NC} $1"; }

BOOTSTRAP_USER="${K2_USER:-k2}"
SETUP_URL="${K2_SETUP_URL:-https://k2.codes/setup.sh}"

if [ "$EUID" -ne 0 ]; then
  # Already a regular user - just run setup.sh directly
  print_status "Running as $(whoami); executing setup.sh..."
  exec bash -c "curl -fsSL $SETUP_URL | bash"
fi

print_status "Running as root; bootstrapping non-root user '$BOOTSTRAP_USER'..."

# Ensure base tools exist (sudo, curl, base-devel for makepkg, git)
print_status "Installing prerequisites (sudo, curl, git, base-devel)..."
pacman -Sy --needed --noconfirm sudo curl git base-devel

# Create the user if it doesn't exist
if ! id "$BOOTSTRAP_USER" &>/dev/null; then
  print_status "Creating user '$BOOTSTRAP_USER'..."
  useradd -m -G wheel -s /bin/bash "$BOOTSTRAP_USER"
  # Lock out password login but allow sudo via NOPASSWD rule below
  passwd -d "$BOOTSTRAP_USER" >/dev/null
  print_success "User '$BOOTSTRAP_USER' created"
else
  print_warning "User '$BOOTSTRAP_USER' already exists; reusing it"
fi

# Grant temporary passwordless sudo so setup.sh can run unattended
SUDOERS_FILE="/etc/sudoers.d/99-k2-bootstrap"
print_status "Granting temporary passwordless sudo to '$BOOTSTRAP_USER'..."
echo "$BOOTSTRAP_USER ALL=(ALL) NOPASSWD: ALL" > "$SUDOERS_FILE"
chmod 440 "$SUDOERS_FILE"

cleanup() {
  if [ -f "$SUDOERS_FILE" ]; then
    print_status "Removing bootstrap sudoers entry..."
    rm -f "$SUDOERS_FILE"
  fi
}
trap cleanup EXIT

USER_HOME="$(getent passwd "$BOOTSTRAP_USER" | cut -d: -f6)"
print_status "Home directory: $USER_HOME"

print_status "Handing off to setup.sh as '$BOOTSTRAP_USER'..."
sudo -u "$BOOTSTRAP_USER" -H bash -lc "curl -fsSL $SETUP_URL | bash"

print_success "Bootstrap complete."
