#!/usr/bin/env sh

# Set the exit flag to exit immediately if any command fails
set -e

APP_PREFIX="FRAMESHELF_"
ASSET_DIR=/usr/share/nginx/html

# Iterate through each environment variable that starts with APP_PREFIX
env | grep "^${APP_PREFIX}" | while IFS='=' read -r key value; do
    # Use find and sed to replace the variable in all files within the directory
    find "$ASSET_DIR" -type f \
        -exec sed -i "s|${key}|${value}|g" {} +
done
