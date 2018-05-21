// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});
changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.documentElement.webkitRequestFullscreen();var vetoed = ["social", "toolbar", "barRight", "controls", "banner", "tray"]; for (let i = 0; i < vetoed.length ;i++) {document.getElementsByClassName(vetoed[i])[0].style.display = "none";} document.getElementsByClassName("content")[0].style.maxWidth = "100%";document.body.className = document.body.className.replace("bannerVisible",""); document.getElementById("rabbitapp").classList.remove("toolbarVisible");document.getElementById("rabbitapp").focus();'
		  });
    });
};
