#!/bin/sh
cd browserify/; sh pandoc-gen.sh; cd ..
cd eslint; sh pandoc-gen.sh; cd ..
cd forever; sh pandoc-gen.sh; cd ..
cd general/; sh pandoc-gen.sh; cd ..
cd watchify/; sh pandoc-gen.sh; cd ..
cd webpack/; sh pandoc-gen.sh; cd ..
cd yarn/; sh pandoc-gen.sh; cd ..
