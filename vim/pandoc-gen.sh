#!/bin/sh
pandoc -o vim.html vim.md
pandoc --toc --toc-depth=2 -o vim.pdf vim.md
