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

/**
 * This funtion generates and displays random number
 */
function myButtonClicked() {
  buttonOnChecked = document.getElementById("flash1").checked

  if (buttonOnChecked == true) {
    //generates random positive number
    const randomPosNum = Math.floor(Math.random() * 6) + 1

    //displays random positive number
    document.getElementById("radio-button-value").innerHTML =
      "Your random number is: " + randomPosNum
  } else {
    //generates random negative number
    const randomNegNum = Math.floor(Math.random() * -6) + 1

    //displays random negative number
    document.getElementById("radio-button-value").innerHTML =
      "Your random number is: " + randomNegNum
  }
}
