export const DOM_EXAMPLE = `
<div id=\"gist119466881\" class=\"gist\">\n    <div class=\"gist-file\" translate=\"no\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-dom-js\" class=\"file my-2\">\n    \n    <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-javascript  \">\n\n        \n<div class=\"js-check-bidi js-blob-code-container blob-code-content\">\n\n  <template class=\"js-file-alert-template\">\n  <div data-view-component=\"true\" class=\"flash flash-warn flash-full d-flex flex-items-center\">\n  <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path fill-rule=\"evenodd\" d=\"M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z\"><\/path>\n<\/svg>\n  \n    <span>\n      This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.\n      <a href=\"https://github.co/hiddenchars\" target=\"_blank\">Learn more about bidirectional Unicode characters<\/a>\n    <\/span>\n\n\n  <div data-view-component=\"true\" class=\"flash-action\">        <a href=\"{{ revealButtonHref }}\" data-view-component=\"true\" class=\"btn-sm btn\">    Show hidden characters\n<\/a>\n<\/div>\n<\/div><\/template>\n<template class=\"js-line-alert-template\">\n  <span aria-label=\"This line has hidden Unicode characters\" data-view-component=\"true\" class=\"line-alert tooltipped tooltipped-e\">\n    <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path fill-rule=\"evenodd\" d=\"M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z\"><\/path>\n<\/svg>\n<\/span><\/template>\n\n  <table data-hpc class=\"highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file\" data-tab-size=\"8\" data-paste-markdown-skip data-tagsearch-lang=\"JavaScript\" data-tagsearch-path=\"dom.js\">\n        <tr>\n          <td id=\"file-dom-js-L1\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"1\"><\/td>\n          <td id=\"file-dom-js-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// Selectores<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-dom-js-L2\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"2\"><\/td>\n          <td id=\"file-dom-js-LC2\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-dom-js-L3\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"3\"><\/td>\n          <td id=\"file-dom-js-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>const<\/span> <span class=pl-s1>elementById<\/span> <span class=pl-c1>=<\/span> <span class=pl-smi>document<\/span><span class=pl-kos>.<\/span><span class=pl-en>getElementById<\/span><span class=pl-kos>(<\/span><span class=pl-s>&#39;id&#39;<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-dom-js-L4\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"4\"><\/td>\n          <td id=\"file-dom-js-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>const<\/span> <span class=pl-s1>elementByClassName<\/span> <span class=pl-c1>=<\/span> <span class=pl-smi>document<\/span><span class=pl-kos>.<\/span><span class=pl-en>getElementsByClassName<\/span><span class=pl-kos>(<\/span><span class=pl-s>&#39;class&#39;<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-dom-js-L5\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"5\"><\/td>\n          <td id=\"file-dom-js-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>const<\/span> <span class=pl-s1>elementByTagName<\/span> <span class=pl-c1>=<\/span> <span class=pl-smi>document<\/span><span class=pl-kos>.<\/span><span class=pl-en>getElementsByTagName<\/span><span class=pl-kos>(<\/span><span class=pl-s>&#39;div&#39;<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-dom-js-L6\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"6\"><\/td>\n          <td id=\"file-dom-js-LC6\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>const<\/span> <span class=pl-s1>elementByQuerySelector<\/span> <span class=pl-c1>=<\/span> <span class=pl-smi>document<\/span><span class=pl-kos>.<\/span><span class=pl-en>querySelector<\/span><span class=pl-kos>(<\/span><span class=pl-s>&#39;anySelector&#39;<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-dom-js-L7\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"7\"><\/td>\n          <td id=\"file-dom-js-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>const<\/span> <span class=pl-s1>elementsByQuerySelector<\/span> <span class=pl-c1>=<\/span> <span class=pl-smi>document<\/span><span class=pl-kos>.<\/span><span class=pl-c1>querySelectorAll<\/span><span class=pl-kos>(<\/span><span class=pl-s>&#39;anySelector);<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-dom-js-L8\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"8\"><\/td>\n          <td id=\"file-dom-js-LC8\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s>                                                          <\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-dom-js-L9\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"9\"><\/td>\n          <td id=\"file-dom-js-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s><\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-dom-js-L10\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"10\"><\/td>\n          <td id=\"file-dom-js-LC10\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s>const element = document.body;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-dom-js-L11\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"11\"><\/td>\n          <td id=\"file-dom-js-LC11\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s>                                                          <\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-dom-js-L12\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"12\"><\/td>\n          <td id=\"file-dom-js-LC12\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s>element.innerHTML = &#39;<\/span><span class=pl-c1>&lt;<\/span><span class=pl-s1>h1<\/span><span class=pl-c1>&gt;<\/span><span class=pl-v>Texto<\/span><span class=pl-c1>&lt;<\/span><span class=pl-c1>/<\/span>h1&gt;&#39;<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-dom-js-L13\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"13\"><\/td>\n          <td id=\"file-dom-js-LC13\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>element<\/span><span class=pl-kos>.<\/span><span class=pl-c1>classList<\/span><span class=pl-kos>.<\/span><span class=pl-en>add<\/span><span class=pl-kos>(<\/span><span class=pl-s>&#39;class&#39;<\/span><span class=pl-kos>)<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-dom-js-L14\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"14\"><\/td>\n          <td id=\"file-dom-js-LC14\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>element<\/span><span class=pl-kos>.<\/span><span class=pl-c1>style<\/span><span class=pl-kos>.<\/span><span class=pl-c1>width<\/span> <span class=pl-c1>=<\/span> <span class=pl-s>&#39;300px&#39;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-dom-js-L15\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"15\"><\/td>\n          <td id=\"file-dom-js-LC15\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-dom-js-L16\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"16\"><\/td>\n          <td id=\"file-dom-js-LC16\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>const<\/span> <span class=pl-s1>childElement<\/span> <span class=pl-c1>=<\/span> <span class=pl-smi>document<\/span><span class=pl-kos>.<\/span><span class=pl-en>createElement<\/span><span class=pl-kos>(<\/span><span class=pl-s>&#39;div&#39;<\/span><span class=pl-kos>)<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-dom-js-L17\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"17\"><\/td>\n          <td id=\"file-dom-js-LC17\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>element<\/span><span class=pl-kos>.<\/span><span class=pl-en>appendChild<\/span><span class=pl-kos>(<\/span><span class=pl-s1>childElement<\/span><span class=pl-kos>)<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-dom-js-L18\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"18\"><\/td>\n          <td id=\"file-dom-js-LC18\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-dom-js-L19\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"19\"><\/td>\n          <td id=\"file-dom-js-LC19\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-dom-js-L20\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"20\"><\/td>\n          <td id=\"file-dom-js-LC20\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// fin<\/span><\/td>\n        <\/tr>\n  <\/table>\n<\/div>\n\n\n    <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/jcapellanvasquez/7939cb4ac96e00a6f162267c3d61e6d5/raw/cd2c5f22f9a5624b052fe9659fadc339a5b188c5/dom.js\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/jcapellanvasquez/7939cb4ac96e00a6f162267c3d61e6d5#file-dom-js\">\n          dom.js\n        <\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n
`