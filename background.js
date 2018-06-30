// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("Then.");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
	  console.log('Baddie1');
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'www.rabb.it'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

var cleaned = false;
chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		//if (cleaned) {
			chrome.tabs.executeScript(
				tabs[0].id,
				{code: 'var vetoed = ["social", "toolbar", "barRight", "controls", "banner", "tray"]; if (document.getElementsByClassName(vetoed[0])[0].style.display == "none") { for (let i = 0; i < vetoed.length ;i++) {document.getElementsByClassName(vetoed[i])[0].style.display = null;} document.getElementById("rabbitapp").className += " toolbarVisible";document.getElementById("rabbitapp").focus(); } else {  document.documentElement.webkitRequestFullscreen(); for (let i = 0; i < vetoed.length ;i++) {document.getElementsByClassName(vetoed[i])[0].style.display = "none";} document.getElementsByClassName("content")[0].style.marginTop = "0"; document.getElementsByClassName("content")[0].style.maxWidth = "100%";document.body.className = document.body.className.replace("bannerVisible",""); document.getElementById("rabbitapp").classList.remove("toolbarVisible");document.getElementById("rabbitapp").focus(); } '

			});
		/*}
		else {
			chrome.tabs.executeScript(
				tabs[0].id,
				{code: 'document.documentElement.webkitRequestFullscreen();var vetoed = ["social", "toolbar", "barRight", "controls", "banner", "tray"]; for (let i = 0; i < vetoed.length ;i++) {document.getElementsByClassName(vetoed[i])[0].style.display = "none";} document.getElementsByClassName("content")[0].style.maxWidth = "100%";document.body.className = document.body.className.replace("bannerVisible",""); document.getElementById("rabbitapp").classList.remove("toolbarVisible");document.getElementById("rabbitapp").focus();'
			});
		}
		cleaned = !cleaned;*/
	});
});
