export const PROMISE_EXAMPLE = `<div id=\"gist119415548\" class=\"gist\">\n    <div class=\"gist-file\" translate=\"no\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-promise-js\" class=\"file my-2\">\n    \n    <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-javascript  \">\n\n        \n<div class=\"js-check-bidi js-blob-code-container blob-code-content\">\n\n  <template class=\"js-file-alert-template\">\n  <div data-view-component=\"true\" class=\"flash flash-warn flash-full d-flex flex-items-center\">\n  <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path fill-rule=\"evenodd\" d=\"M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z\"><\/path>\n<\/svg>\n  \n    <span>\n      This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.\n      <a href=\"https://github.co/hiddenchars\" target=\"_blank\">Learn more about bidirectional Unicode characters<\/a>\n    <\/span>\n\n\n  <div data-view-component=\"true\" class=\"flash-action\">        <a href=\"{{ revealButtonHref }}\" data-view-component=\"true\" class=\"btn-sm btn\">    Show hidden characters\n<\/a>\n<\/div>\n<\/div><\/template>\n<template class=\"js-line-alert-template\">\n  <span aria-label=\"This line has hidden Unicode characters\" data-view-component=\"true\" class=\"line-alert tooltipped tooltipped-e\">\n    <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path fill-rule=\"evenodd\" d=\"M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z\"><\/path>\n<\/svg>\n<\/span><\/template>\n\n  <table data-hpc class=\"highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file\" data-tab-size=\"8\" data-paste-markdown-skip data-tagsearch-lang=\"JavaScript\" data-tagsearch-path=\"promise.js\">\n        <tr>\n          <td id=\"file-promise-js-L1\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"1\"><\/td>\n          <td id=\"file-promise-js-LC1\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L2\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"2\"><\/td>\n          <td id=\"file-promise-js-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>const<\/span> <span class=pl-en>accionDelay<\/span> <span class=pl-c1>=<\/span> <span class=pl-kos>(<\/span><span class=pl-s1>delayTime<\/span><span class=pl-kos>,<\/span> <span class=pl-s1>accion<\/span><span class=pl-kos>)<\/span> <span class=pl-c1>=&gt;<\/span> <span class=pl-kos>{<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L3\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"3\"><\/td>\n          <td id=\"file-promise-js-LC3\" class=\"blob-code blob-code-inner js-file-line\">     <span class=pl-k>return<\/span> <span class=pl-k>new<\/span> <span class=pl-v>Promise<\/span><span class=pl-kos>(<\/span><span class=pl-kos>(<\/span><span class=pl-s1>resolve<\/span><span class=pl-kos>)<\/span> <span class=pl-c1>=&gt;<\/span> <span class=pl-kos>{<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L4\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"4\"><\/td>\n          <td id=\"file-promise-js-LC4\" class=\"blob-code blob-code-inner js-file-line\">          <span class=pl-en>setTimeout<\/span><span class=pl-kos>(<\/span><span class=pl-kos>(<\/span><span class=pl-kos>)<\/span> <span class=pl-c1>=&gt;<\/span> <span class=pl-kos>{<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L5\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"5\"><\/td>\n          <td id=\"file-promise-js-LC5\" class=\"blob-code blob-code-inner js-file-line\">              <span class=pl-smi>console<\/span><span class=pl-kos>.<\/span><span class=pl-en>log<\/span><span class=pl-kos>(<\/span><span class=pl-s1>accion<\/span><span class=pl-kos>)<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L6\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"6\"><\/td>\n          <td id=\"file-promise-js-LC6\" class=\"blob-code blob-code-inner js-file-line\">              <span class=pl-s1>resolve<\/span><span class=pl-kos>(<\/span><span class=pl-s1>accion<\/span><span class=pl-kos>)<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L7\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"7\"><\/td>\n          <td id=\"file-promise-js-LC7\" class=\"blob-code blob-code-inner js-file-line\">          <span class=pl-kos>}<\/span><span class=pl-kos>,<\/span> <span class=pl-s1>delayTime<\/span><span class=pl-kos>)<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L8\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"8\"><\/td>\n          <td id=\"file-promise-js-LC8\" class=\"blob-code blob-code-inner js-file-line\">     <span class=pl-kos>}<\/span><span class=pl-kos>)<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L9\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"9\"><\/td>\n          <td id=\"file-promise-js-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-kos>}<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L10\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"10\"><\/td>\n          <td id=\"file-promise-js-LC10\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L11\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"11\"><\/td>\n          <td id=\"file-promise-js-LC11\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>const<\/span> <span class=pl-en>lavarseDientes<\/span> <span class=pl-c1>=<\/span> <span class=pl-kos>(<\/span><span class=pl-kos>)<\/span> <span class=pl-c1>=&gt;<\/span> <span class=pl-kos>{<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L12\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"12\"><\/td>\n          <td id=\"file-promise-js-LC12\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-k>const<\/span> <span class=pl-s1>delay<\/span> <span class=pl-c1>=<\/span> <span class=pl-c1>5000<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L13\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"13\"><\/td>\n          <td id=\"file-promise-js-LC13\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-k>const<\/span> <span class=pl-s1>msg<\/span> <span class=pl-c1>=<\/span> <span class=pl-s>&quot;Dientes limpios!&quot;<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L14\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"14\"><\/td>\n          <td id=\"file-promise-js-LC14\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-smi>console<\/span><span class=pl-kos>.<\/span><span class=pl-en>log<\/span><span class=pl-kos>(<\/span><span class=pl-s>&quot;Lavandose los dientes&quot;<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L15\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"15\"><\/td>\n          <td id=\"file-promise-js-LC15\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-k>return<\/span> <span class=pl-en>accionDelay<\/span><span class=pl-kos>(<\/span><span class=pl-s1>delay<\/span><span class=pl-kos>,<\/span> <span class=pl-s1>msg<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L16\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"16\"><\/td>\n          <td id=\"file-promise-js-LC16\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-kos>}<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L17\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"17\"><\/td>\n          <td id=\"file-promise-js-LC17\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L18\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"18\"><\/td>\n          <td id=\"file-promise-js-LC18\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>const<\/span> <span class=pl-en>banarse<\/span> <span class=pl-c1>=<\/span> <span class=pl-kos>(<\/span><span class=pl-kos>)<\/span> <span class=pl-c1>=&gt;<\/span> <span class=pl-kos>{<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L19\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"19\"><\/td>\n          <td id=\"file-promise-js-LC19\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-k>const<\/span> <span class=pl-s1>delay<\/span> <span class=pl-c1>=<\/span> <span class=pl-c1>10000<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L20\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"20\"><\/td>\n          <td id=\"file-promise-js-LC20\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-k>const<\/span> <span class=pl-s1>msg<\/span> <span class=pl-c1>=<\/span> <span class=pl-s>&quot;banado, a secarse!&quot;<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L21\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"21\"><\/td>\n          <td id=\"file-promise-js-LC21\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-smi>console<\/span><span class=pl-kos>.<\/span><span class=pl-en>log<\/span><span class=pl-kos>(<\/span><span class=pl-s>&quot;a banarse&quot;<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L22\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"22\"><\/td>\n          <td id=\"file-promise-js-LC22\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-k>return<\/span> <span class=pl-en>accionDelay<\/span><span class=pl-kos>(<\/span><span class=pl-s1>delay<\/span><span class=pl-kos>,<\/span> <span class=pl-s1>msg<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L23\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"23\"><\/td>\n          <td id=\"file-promise-js-LC23\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-kos>}<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L24\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"24\"><\/td>\n          <td id=\"file-promise-js-LC24\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L25\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"25\"><\/td>\n          <td id=\"file-promise-js-LC25\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>const<\/span> <span class=pl-en>vestirse<\/span> <span class=pl-c1>=<\/span> <span class=pl-kos>(<\/span><span class=pl-kos>)<\/span> <span class=pl-c1>=&gt;<\/span> <span class=pl-kos>{<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L26\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"26\"><\/td>\n          <td id=\"file-promise-js-LC26\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-k>const<\/span> <span class=pl-s1>delay<\/span> <span class=pl-c1>=<\/span> <span class=pl-c1>2000<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L27\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"27\"><\/td>\n          <td id=\"file-promise-js-LC27\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-k>const<\/span> <span class=pl-s1>msg<\/span> <span class=pl-c1>=<\/span> <span class=pl-s>&quot;Vestido, a desayunar!&quot;<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L28\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"28\"><\/td>\n          <td id=\"file-promise-js-LC28\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-smi>console<\/span><span class=pl-kos>.<\/span><span class=pl-en>log<\/span><span class=pl-kos>(<\/span><span class=pl-s>&quot;A ponerse algo bonito&quot;<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L29\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"29\"><\/td>\n          <td id=\"file-promise-js-LC29\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-k>return<\/span> <span class=pl-en>accionDelay<\/span><span class=pl-kos>(<\/span><span class=pl-s1>delay<\/span><span class=pl-kos>,<\/span> <span class=pl-s1>msg<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L30\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"30\"><\/td>\n          <td id=\"file-promise-js-LC30\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-kos>}<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L31\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"31\"><\/td>\n          <td id=\"file-promise-js-LC31\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L32\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"32\"><\/td>\n          <td id=\"file-promise-js-LC32\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-en>lavarseDientes<\/span><span class=pl-kos>(<\/span><span class=pl-kos>)<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L33\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"33\"><\/td>\n          <td id=\"file-promise-js-LC33\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-kos>.<\/span><span class=pl-en>then<\/span><span class=pl-kos>(<\/span><span class=pl-kos>(<\/span><span class=pl-kos>)<\/span> <span class=pl-c1>=&gt;<\/span> <span class=pl-en>banarse<\/span><span class=pl-kos>(<\/span><span class=pl-kos>)<\/span><span class=pl-kos>)<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L34\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"34\"><\/td>\n          <td id=\"file-promise-js-LC34\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-kos>.<\/span><span class=pl-en>then<\/span><span class=pl-kos>(<\/span><span class=pl-kos>(<\/span><span class=pl-kos>)<\/span> <span class=pl-c1>=&gt;<\/span> <span class=pl-en>vestirse<\/span><span class=pl-kos>(<\/span><span class=pl-kos>)<\/span><span class=pl-kos>)<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L35\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"35\"><\/td>\n          <td id=\"file-promise-js-LC35\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-kos>.<\/span><span class=pl-en>then<\/span><span class=pl-kos>(<\/span><span class=pl-kos>(<\/span><span class=pl-kos>)<\/span> <span class=pl-c1>=&gt;<\/span> <span class=pl-smi>console<\/span><span class=pl-kos>.<\/span><span class=pl-en>log<\/span><span class=pl-kos>(<\/span><span class=pl-s>&quot;Promise end&quot;<\/span><span class=pl-kos>)<\/span><span class=pl-kos>)<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L36\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"36\"><\/td>\n          <td id=\"file-promise-js-LC36\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-promise-js-L37\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"37\"><\/td>\n          <td id=\"file-promise-js-LC37\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// fin<\/span><\/td>\n        <\/tr>\n  <\/table>\n<\/div>\n\n\n    <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/jcapellanvasquez/99d0e24dd45fa6aa55bed070bcda3a3f/raw/f8cd997c71966cd062fd992240c354d32913abd4/promise.js\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/jcapellanvasquez/99d0e24dd45fa6aa55bed070bcda3a3f#file-promise-js\">\n          promise.js\n        <\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n`