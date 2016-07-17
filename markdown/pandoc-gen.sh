#!/bin/sh
pandoc -o markdown.html markdown.md
pandoc --toc --toc-depth=1 -o markdown.pdf markdown.md
pandoc -o pandoc.html pandoc.md
pandoc --toc --toc-depth=1 -o pandoc.pdf pandoc.md
