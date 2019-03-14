"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Diego Sandoval
   Date:   March 13, 2019 (03/13/19)
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

      */
// DDOES: load the int function when loaded
window.onload = int;
// DVARG: Global varible for all functions to use
var stars = document.querySelectorAll('span#stars img');
// DFUNC: intial funtion that is loaded
function int() {
      // DLOOP: loop through all the stars and adds an event listener and change the cursor to pointer
      for (var i = 0; i < stars.length; i++) {
            stars[i].addEventListener('mouseenter', lightStars);
            stars[i].style.cursor = "pointer";
      };
      // DDOES: adds an event listener to the comment box and runs the function updateCount when key is released.
      document.getElementById('comment').addEventListener('keyup', updateCount);
};
// DFUNC: lightStars to show rating
function lightStars(e) {
      // DVARL: Local variables
      var starNumber = e.target.alt,
            starSelected = e;
      // DLOOP: changes the number of colored star to which one is selected
      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      }
      // DLOOP: Changes the number of uncolored stars from the one that is selected
      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";
      }
      // DDOES: changes the value of the input box next to the stars to match which star is selected
      document.getElementById('rating').value = `${starNumber} stars`;
      // DDOES: Adds an event listener tor run turnOffStars when the mouse leave
      e.target.addEventListener('mouseleave', turnOffStars);
      // DDOES: removes the event listener above when a star is clicked
      e.target.addEventListener('click', function () {
            starSelected.target.removeEventListener('mouseleave', turnOffStars);
      });
};
// DFUNC: Gets ride of highlighted stars when runned
function turnOffStars() {
      // DLOOP: runs through all the stars and changes their src
      for (var i = 0; i < stars.length; i++) {
            stars[i].src = "bw_star.png";
      }
      // DDOES: change the value to an empty text string
      document.getElementById('rating').value = "";
};
// DFUNC: Updates the count of characters
function updateCount() {
      // DVARL: Local variables used in this function 
      var commentText = document.getElementById('comment').value,
            charCount = countCharacters(commentText);
      // DDOES: changes the value of the element with an ID of word count with the value of charCount
      document.getElementById('wordCount').value = `${charCount} / 1000`;
      // DIFDO: when charCount is abouve 1000 it changes the color of the text to white and the background color to red, if not then black text white background
      if (charCount > 1000) {
            document.getElementById('wordCount').style.color = "white";
            document.getElementById('wordCount').style.backgroundColor = "red";
      } else {
            document.getElementById('wordCount').style.color = "black";
            document.getElementById('wordCount').style.backgroundColor = "white";
      }
};

/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}