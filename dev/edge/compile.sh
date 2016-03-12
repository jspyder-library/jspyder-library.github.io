#!/bin/bash
# compiles all compilable projects in the directory

function help {
    echo "JSpyder Compiler Script"
    echo " "
    echo "./compile.sh [options]"
    echo " "
    echo "options:"
    echo "-?, --help                 show brief help"
    echo "-a, --all                  complete compilation"
    echo "-c, --css                  generate github css"
}

function install_css {
    echo " > Installing new CSS files..."
    rm -f ./css/gh-pages.css
    sass ./sass/gh-pages.scss ./css/gh-pages.css
}

test $# -eq "0" && help

DO_CSS=0

while test $# -gt 0; do
    case "$1" in
    	-c|--css)
            shift
            DO_CSS=1
            ;;

        -a|--all)
            shift
            DO_CSS=1
            ;;
            
        -?|--help)
            shift
            help
            ;;
            
        *)
            shift
            ;;
    esac
done

(test "$DO_CSS" -eq "1") && (install_css)
