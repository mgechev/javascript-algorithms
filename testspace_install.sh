#!/bin/bash

# Install the Testspace runner
mkdir ${HOME}/testspace
wget -N -P . https://testspace-runner.s3.amazonaws.com/testspace-linux-latest.tgz
tar -zxvf testspace-linux-latest.tgz -C ${HOME}/testspace
rm testspace-linux-latest.tgz
# export PATH=${HOME}/testspace:${PATH}