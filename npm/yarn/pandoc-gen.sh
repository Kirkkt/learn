#!/bin/sh
pandoc -V geometry:margin=1in --toc --toc-depth=2 --no-tex-ligatures -o yarn.pdf yarn.mkd
