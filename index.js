// ==UserScript==
// @name         PicMix Pro Unlocker
// @namespace    http://tampermonkey.net/
// @version      2025-09-24
// @description  an extremely simple picmix pro unlocker written in 2 minutes. someone tell them to make their site better
// @author       zyqunix
// @match        http*://*.picmix.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=picmix.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const selection = document.querySelector("select[id='mk-font-select'");

    selection.querySelectorAll("option").forEach(option => {
        option.setAttribute("data-vip", "0");
        option.innerText = option.innerText.replace(/ 🔒/,'');
    })
})();
