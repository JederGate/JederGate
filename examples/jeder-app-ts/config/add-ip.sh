#!/bin/bash
# chmod +x add-ip.sh
# ./add-ip.sh
# Fetch the new IP address
new_ip=$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)

# Check if the IP address was successfully retrieved
if [ -z "$new_ip" ]; then
    echo "Failed to retrieve the new IP address."
    exit 1
fi

# File to be modified
file="server.ts"

# Backup the original file (optional but recommended)
cp "$file" "${file}.bak"

# Check if the url line exists
if grep -q "url:" "$file"; then
    # If url exists, replace the IP address
    sed -i "s|url: 'http://[^:]*:|url: 'http://${new_ip}:|" "$file"
else
    # If url does not exist, add the line
    # Assuming that it should be added after the 'port' line
    sed -i "/port:/a \  url: 'http://${new_ip}:8080'," "$file"
fi

echo "IP address updated to $new_ip in $file"
