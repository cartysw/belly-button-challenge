Hello!

This is a repository for the Module 14 Challenge for the UofM Data Analytics Bootcamp course.
This project focuses on a dataset concerning bacterial microbes found in the human navel. Given the data set, we were tasked with a few different things.

  - Firstly, create a function to build a metadata panel that shows all the categorical info for whichever sample ID you choose
  - Create another function to display 2 different graphs that change depending on the sample ID chosen:
    - 1 bar chart that shows the 10 most common microbes found for the chosen sample ID
    - 1 bubble graph that shows visualizes how common any microbe found in the chosen sample ID's data is
  - Create a function to grab all subject names from the data to store in the dropdown box for the user's choice, automatically display the first entry in the dataset for when the user first loads the page, and call the functions to create the charts
  - Finally, create a small function that changes the charts when the user chooses a different ID in the dropdown list

The initial page looks like this when you load it for the first time:
![bbbdashboard](https://github.com/user-attachments/assets/3db6cf5f-46d7-420b-b3e8-e98c9edbaefe)

Program Instructions:
  - Download all project files or clone the repository to your computer
  - Open project in Visual Studio Code (this is the program that was used to develop this project. if you have another one that has that same capabilities then that should also work.)
  - Run the HTML file called "index" using Visual Studio Code's Live Server add-on
  - View initial page results and/or choose various subject IDs from the dropdown list at your discretion
  - If you would like to open this project on a Github Pages web server, simply enter "cartysw.github.io/belly-button-challenge" into your web browser's search bar

I hope the analysis provided here proves to be helpful and insightful.


Some references were used during the development of this project:
Referenced the Object.entries() method documentation for help writing a loop to append new tags for each key-value in the filtered metadata:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

Referenced this site for syntax on using .reverse() to sort the bar chart results in descending order:
https://www.w3schools.com/jsref/jsref_reverse.asp

Got help from the XPert Learning Assistant provided through the bootcamp course to debug my lines of code that filter the data to find the specific id that gets passed into the buildCharts function. Here's the initial prompt i used:
im working with a belly button biodiversity data set using javascript. when creating a bar chart, i'm getting this error when running the program in my browser: Uncaught (in promise) TypeError: otuIDs is undefined
