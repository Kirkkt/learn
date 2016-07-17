\pagebreak

Quotes
======
Backticks
---------
`**a** #pair ~~of~~ *backticks* <!--enclose--> <code> that cancels [most](special) [!characters]`

    `**a** #pair ~~of~~ *backticks* <!--enclose--> <code> that cancels [most](special) [!characters]`

### use double backtick to escape a backtick
a single backtick is always escaped `

    a single backtick is always escaped `

When trying to ``escape ` inside backtick quotes``, use double backtick to wrap it

    When trying to ``escape ` inside backtick quotes``, use double backtick to wrap it

### use triple backtick to force verbatim
```
    everything here _is_ *verbatim*, even double backticks `` or single backtick `
```

    ```
        everything here _is_ *verbatim*, even double backticks `` or single backtick `
    ```

Block quotes
------------
> a larger than symbol starts a block quote, whereas **styling** is ~~still~~ *available*

    > a larger than symbol starts a block quote, whereas **styling** is ~~still~~ *available*

Code blocks
-----------
***Indent four spaces for code blocks.***

    **like** *this* #most ~~special~~ *characters* <!--are--> <cancelled> [just](like) [!this]

\pagebreak

Headlines
=========
# h1

    # h1

## h2

    ## h2

### h3

    ### h3

#### h4

    #### h4

##### h5

    ##### h5

###### h6

    ###### h6

h1
==

    h1
    ==

h2
--

    h2
    --

When using = and - for headers, no need to make them the same length
----------------------

    When using = and - for headers, no need to make them the same length
    ----------------------

\pagebreak

Unnumbered bullets
==================
### Unnumbered bullet hello world
- bullet
    - point
- can
* be
- specified
- with
    - dash -
- or
    * asterisk *

###### source code
    - bullet
        - point
    - can
    * be
    - specified
    - with
        - dash -
    - or
        * asterisk *

### deep unnumbered bullet list
- this
    - is
        - very
            - deep

###### source code
    - this
        - is
            - very
                - deep

### asterisk * and dash - are interchangeable
- asterisk *
- and
* dash -
* can
* be
* mixed

###### source code
    - asterisk *
    - and
    * dash -
    * can
    * be
    * mixed

### four spaces of indentation
- four spaces of indentation
    - is necessary
  - while 2 spaces
  - aren't enough

###### source code
    - four spaces of indentation
        - is necessary
      - while 2 spaces
      - aren't enough

### separate two adjacent bullet lists
**Two bullet lists next to each other can cause rendering hiccups. It's better to put something in
between.**

\pagebreak

Numbered bullets
================
***pandoc starts the list with the first number, but retext and git@china always starts the list
with 1***

### Numbered bullet hello world
1. numbered
2. bullets
3. looks
4. like
5. this

###### source code
    1. numbered
    2. bullets
    3. looks
    4. like
    5. this

### The first number matters, but not the later ones
200. number
0. hello
6. hello

###### source code
    200. number
    0. hello
    6. hello

### four spaces of indentation, the first number of a mini-list matters
1. four
  3. spaces
    6. of indentation
    9. is recognized
0. the
  2. second
  4. number
0. onwards
0. within
0. the
0. same
0. level
0. is
0. ignored

###### source code
    1. four
      3. spaces
        6. of indentation
        9. is recognized
    0. the
      2. second
      4. number
    0. onwards
    0. within
    0. the
    0. same
    0. level
    0. is
    0. ignored

### Deep numbered bullet list
0. this
    0. is
        0. very
            0. deep

###### source code
    0. this
        0. is
            0. very
                0. deep

### mixed numbered and unnumbered bullet list
1. greetings
    - bonjour
    - bonsoir
    - bienvenue
2. food
    - fruits
        - pomme
        - orange
        - fraise
    - drinks
        1. eau
        2. vin
        3. lait

###### source code
    1. greetings
        - bonjour
        - bonsoir
        - bienvenue
    2. food
        - fruits
            - pomme
            - orange
            - fraise
        - drinks
            1. eau
            2. vin
            3. lait

\pagebreak

Comments
========
<!-- you can't see it, because it is a comment -->

    <!-- you can't see it, because it is a comment -->

\pagebreak

Hyperlinks
==========
[click me to baidu.com](http://www.baidu.com)

    [click me to baidu.com](http://www.baidu.com)

<http://www.baidu.com>

    <http://www.baidu.com>

![this is an online image](http://i.imgur.com/V7iWt2U.jpg)

    ![this is an online image](http://i.imgur.com/V7iWt2U.jpg)

\pagebreak

Word styling
============
*italics*

    *italics*

_another italics_

    _another italics_

**bold**

    **bold**

__another bold__

    __another bold__

***italics and bold***

    ***italics and bold***

___another italics and bold___

    ___another italics and bold___

***retext doesn't support this.***

~~crossover~~

    ~~crossover~~

\pagebreak

Line breaks
===========
***git@oschina doesn't support this.***

2 trailing spaces acts as a line break  
like this.

    2 trailing spaces acts as a line break  
    like this.                            ^ notice the trailing spaces here

But normal 
line breaks won't
work

    But normal 
    line breaks won't
    work

A completely empty line act as a hard line break,

like this.

    A completely empty line act as a hard line break,

    like this.

\pagebreak

Tables
======
First Header  | Second Header
--------------|--------------
Content Cell  | Content Cell
Content Cell  | Content Cell

    ignore this line
    First Header  | Second Header
    --------------|--------------
    Content Cell  | Content Cell
    Content Cell  | Content Cell

\pagebreak

Horizontal separator
====================
horizontal

*****

separator

    horizontal

    *****

    separator

horizontal

-----

separator another

    horizontal

    -----

    separator another

