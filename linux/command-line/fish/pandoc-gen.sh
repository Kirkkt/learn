#!/bin/sh
pandoc -o fish.html fish.md
pandoc --toc --toc-depth=2 -o fish.pdf fish.md
