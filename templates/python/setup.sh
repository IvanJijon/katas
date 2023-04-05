#!/bin/bash

# 0. verifications
PYTHON=python3
if ! [ -x "$(command -v $PYTHON)" ]; then
  echo 'Error: python3 is not installed.' >&2
  exit 1
fi

PIP=pip
if ! [ -x "$(command -v $PIP)" ]; then
  echo 'Error: pip is not installed.' >&2
  exit 1
fi

  # "venv is included in the Python standard library and requires no additional installation" - python.org
  # Nevertheless I had to install it for Ubuntu: sudo apt install python3.8-venv
  # We can check if the package is installed:

VENV=$(dpkg-query -Wf'${db:Status-abbrev}' python3-venv)
if [ $VENV == "ii " ]; then
  echo 'Error: maybe you need to install python3.8-venv or python3-venv.' >&2
  echo 'Run: sudo apt install python3.8-venv' >&2
  exit 1
fi

# 1. create a virtual environment and activate it for this script
python3 -m venv venv
source venv/bin/activate

# 2. install dependencies
pip install -r requirements.txt

# 3. ask the user to activate the virtual environment
echo "You can now activate the virtual environment by running:"
echo "  $ source venv/bin/activate"






