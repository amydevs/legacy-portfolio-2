@echo off
yarn build && cd dist && git init && git add -A && git commit -m 'deploy' && git push -f https://github.com/jy1263/jy1263.github.io.git master:gh-pages && cd ..