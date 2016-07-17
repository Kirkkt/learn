<!-- node -->
\pagebreak

Install NodeJS on linux <!-- {{{1 -->
=======================

    curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
    sudo apt-get install nodejs

Configure npmrc to point to cnpmjs.org <!-- {{{2 -->
--------------------------------------
### Problem
<http://npmjs.org> is sporadically blocked in China, and even when it's not, it's slow.

### Solution
<http://cnpmjs.org> is a mirror in China. It is much faster and never blocked.

### How-to

    echo 'registry=http://registry.cnpmjs.org' > ~/.npmrc

\pagebreak

Reasons to use NodeJS <!-- {{{1 -->
=====================
- Faster than Java and PHP
- Event-base, natural for API-based inquiry processing
- Mono-threaded
    - robust, programmers tend to make less mistakes when dealing with one thread
    - RAM efficient, eliminating overhead of thread management

\pagebreak

NPM <!-- {{{1 -->
===
    npm install / npm i : install npm modules as specified in package.json
    npm i {module_name} : install an npm module, leaving package.json intact
    npm i {module_name} --save : install an npm module and update package.json accordingly
    sudo npm link {module_name} : link npm modules, this is useful when the module directory resides
        in node_modules but node still complains module not found

\pagebreak

package.json <!-- {{{1 -->
============
    "scripts": {
      "start": "{bash_command}", // run with `npm start`, since start is an npm command key word
      "test": "{bash_command}", // `npm test`, since test is an npm command key word
      "build": "{bash_command}", // `npm run build`, since build is not an npm command key word
      "test:watch": "{bash_command}", // `npm run test:watch`
    },
