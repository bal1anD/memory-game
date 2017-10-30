ABOUT
------
This is a simple memory game created using pure JavaScript, HTML and CSS. It complies with the instructions mentioned in the "Takehome Engineering Screen - Memory Game.pdf" problem statement (this file is included in the package.)

There were some issues with JSfiddle so I am submitting the project as a .zip file named HBO.zip.

CONTENTS
--------
The HBO.zip file contains the following folders and files. 
1) css (folder)
2) js (folder)
3) images (folder)
4) style.css (this is within css folder) - this file contains the css styling and is linked to the index.html
5) script.js (this is within js folder) - this file contains the javascript and is linked to the index.html
6) index.html - the html file which renders the memory game
7) bow.jpeg (this is within images folder) - this is the image corresponding to &#x1f380 UTF-8 character which is used as the default icon of the face-down 	side of the cards
8) Takehome Engineering Screen - Memory Game.pdf - this is the problem statement that I have received from the recruiter.


INSTRUCTIONS TO RUN
--------------------
Please follow the steps below to run the project. 

NOTE: This project was tested using Chrome-61.0.3163.100 and Firefox-55.0.3.

1) Unzip the HBO.zip file.
2) Open the index.html file in a browser.
3) You will see a grid of size 4x4 squares with pink bows (corresponds to &#x1f380). One square represents 1 card.
4) To play the game click on a square, it will flip and display an icon, then click on another card.
   if the icons of the 1st and the 2nd cards match, then the square would turn green, else it will go back to the face-down 
   state, after 2 seconds, and the pink bow will be visible. Wait for 2 seconds before clicking on new cards.
5) Once you successfully finish the game, all the cards would face-up with their icons and their background will be green. 
   Below the grid, a message like this -> "Congratulations you have won in 13 tries" will be displayed and below the message
   there will be another button with the text "Try Again" on it.
6) If you want to play the game again, then click on "Try Again" and it will reshuffle the cards and set-up a 
   fresh board.

Feel free to reach out to the recruiter if you have any issues in playing the game.
Enjoy!