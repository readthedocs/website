#!/usr/bin/env bash
set -euo pipefail

# Build the assets
npm run build-assets

# Check if there are any changes in the static directory
if ! git diff --exit-code readthedocs_theme/static/ > /dev/null; then
    echo "Compiled assets are out of date. Please commit the updated assets in readthedocs_theme/static/."
    exit 1
fi
