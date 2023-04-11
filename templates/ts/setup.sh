# 0. check if npm is installed
NODE=node
if ! [ -x "$(command -v $NODE)" ]; then
  echo 'Error: node is not installed.' >&2
  exit 1
fi

NPM=npm
if ! [ -x "$(command -v $NPM)" ]; then
  echo 'Error: npm is not installed.' >&2
  exit 1
fi

# 1. initializations
npm init -y

npm install typescript --save-dev

tsc --init

# 2. install dependencies

# install mocha's associated types
npm install -D @types/node

# install mocha
npm install mocha --save-dev

# install mocha's associated types
npm install @types/mocha --save-dev

# install types associated with Chai
npm install chai @types/chai --save-dev

# install Sinon and its associated types
npm install sinon @types/sinon --save-dev

# install TypeScript
npm install --save-dev typescript