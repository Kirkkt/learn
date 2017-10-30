#!/bin/sh
pandoc -V geometry:margin=1in --toc --toc-depth=2 --no-tex-ligatures -o js-npm-general.pdf js-npm-general.mkd
