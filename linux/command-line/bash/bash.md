<!-- bash -->
\pagebreak

Wildcards <!-- {{{1 -->
=========
- `*` : matches zero or more characters
    - `whereis ~/git/*e*`
- `?` : matches exactly 1 characters
    - `whereis ~/git/?e*`
- `[abc]` : matches any one of a, b or c, notice this doesn't work in fish
    - `whereis ~/git/[dl]*`
- `[e-m]` : matches any one of e to m, inclusive, notice this doesn't work in fish
    - `whereis ~/git/[e-m][a-g][d-h]*`

\pagebreak

lxsplit <!-- {{{1 -->
=======
- `lxsplit -s {file_name} 300m` : split huge.file into chunks not exceeding 300m
    - `cd resources/; lxsplit -s lxsplit-big-file 20k; cd ..`
- `lxsplit -j {file_name}.001` : join parts starting huge.file.001
    - `cd resources/; lxsplit -j lxsplit-parts.001; cd ..`
