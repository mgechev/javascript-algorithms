#!/bin/bash

# Build
npm install -g gulp
npm install

# Analysis and Test
gulp build

# Download and configure the Testspace client
mkdir -p $HOME/bin
curl -fsSL https://testspace-client.s3.amazonaws.com/testspace-linux.tgz | tar -zxvf- -C $HOME/bin
CI=true testspace config url samples.testspace.com

# Push content (refer to ".testspace.txt" for list of content)
testspace @.testspace.txt "#c9.Build" --repo git