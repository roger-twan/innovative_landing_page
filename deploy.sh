#!/bin/sh

git checkout master
git pull origin master

rm -rf dist

npm install --production
npm run build
