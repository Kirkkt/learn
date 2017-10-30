#!/bin/sh
pandoc -V geometry:margin=1in --toc --toc-depth=2 --no-tex-ligatures -o forever.pdf forever.mkd
