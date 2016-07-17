#!/bin/sh
pandoc -o bash.html bash.md
pandoc --toc --toc-depth=2 -o bash.pdf bash.md
