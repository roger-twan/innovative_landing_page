#!/bin/sh

git checkout master
git pull origin master

npm install --production
npm run build
