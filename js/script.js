// Copyright (c) 2022 Timothy Manwell All rights reserved
//
// Created by: Timothy Manwell
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-02/sw.js", {
    scope: "/ICS2O-Unit5-02/",
  })
}

//generates random positive number
const randomPosNum = Math.floor(Math.random() * 6) + 1

//generates random negative number
const randomNegNum = Math.floor(Math.random() * -6) + 1

function myButtonClicked() {
  buttonOnChecked = document.getElementById("flash1").checked

  if (buttonOnChecked == true) {
    document.getElementById("radio-button-value").innerHTML =
      "Your random positive number is: " + randomPosNum
  } else {
    document.getElementById("radio-button-value").innerHTML =
      "Your random negative number is: " + randomNegNum
  }
}
