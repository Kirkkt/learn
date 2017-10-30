# How to create a react web app and push it to github.io
1. `create-react-app your-app-name`
2. `cd your-app-name`
3. `yarn add gh-pages`
4. add new `package.json` scripts:
    - `"predeploy": "yarn run build",`
    - `"deploy": "gh-pages -d build",`
5. add `homepage` to `package.json`
    - `"homepage": "https://your-name.github.io/your-app-name/",`
6. `git init; git add .; git commit -m 'initial commit'`
7. create a new github repo with the name `your-app-name`
8. `git remote add origin https://github.com/your-name/your-app-name.git`
9. `git push -u origin master`
10. `yarn run deploy`
11. now you can visit <https://your-name.github.io/your-app-name>

## Move about create-react-app
- `create-react-app -h`
