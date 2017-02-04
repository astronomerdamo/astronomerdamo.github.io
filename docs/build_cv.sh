rm -f cv_content.html
pandoc cv_content.md -o cv.pdf -V geometry:margin=1in
pandoc cv_content.md -o cv_content.html
