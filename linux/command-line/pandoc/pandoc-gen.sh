#!/bin/sh
pandoc -o command-line-applications.html command-line-applications.md
pandoc --toc --toc-depth=2 -o command-line-applications.pdf command-line-applications.md
