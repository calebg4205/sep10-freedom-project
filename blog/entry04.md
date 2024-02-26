# Entry 4
##### 2/25/24


## Choosing a tool
Then the next step to completing the Freedom Project was choosing a framework to help build our websites. Since I believe chess websites are presented in an awful manner I chose a framework that would boost user interactiveness. I chose Jquery. With Jqeury I was able to create working buttons using a simplified version of javascript. This meant I was able to gain the benefits of javascript without all the syntax. At first I was delighted by the tool, I was able to create working buttons and make the webpage interactive. I soon learned how complicated Jquery actually is. In order to use the tool I had to develop a remedial understanding of Javascript. This almost made me quit the tool but I decided to persevere. I watched videos on Youtube and did [Free Code Camp lessons](https://www.freecodecamp.org/news/full-javascript-course-for-beginners/). This helped me understand how Jquery worked and how it affects web design. Then I went onto watching Jqeury video's like, [jQuery Tutorial](https://www.youtube.com/watch?v=QhQ4m5g2fhA&t=329s). This video was super helpful and super complicated. I was forced to take some [notes](https://docs.google.com/document/d/16rzi_H3RKKNlWsRQFzRV4a2fn851lnZeK8P0YXOqbOA/edit) on the video. The video was too long to watch, so I have to watch it in increments. I am still taking notes on the framework and how it works. Finally I opened up an IDE and began to try and make an image fade. I began the process of reading my notes and trying to understand what the guy in the video did, I came up with this:
``` HTML
<!DOCTYPE html>
<html>


<head>
  <meta charset="utf-8">
  <title>Jquery practice</title>
  <meta name="author" content="">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">


  <link href="css/bread.css" rel="stylesheet">
</head>


<body>


  <p>Hello, world!</p>
    <img src="FinishedJellowJacketLogo HSTAT  2.png" alt="yellowjacket" id="img1">
<button click="func1">fade</button>


</body>
  <script src="Jquery/jquery.js" type="text/javascript"></script>
  <script src="js/cheese.js" type="text/javascript"></script>
</html>
```
```javascript
function #func1
{
    $(#img1).fadetoggle(3000);
}
```
Now this code is very broken. I had slashes leading to the wrong places and very wrong syntax in the javascript section. I also had a problem in which I named the Jquery file "jquery" and had it listed as "Jquery". It took me a while to sort out all the bugs in the code. After about an hour of rewatching some videos and looking at my notes I found almost all my mistakes. I changed them all in an attempt to get the image to fade away. Essentially my code ended up like this:
```html
 <img src="FinishedJellowJacketLogo HSTAT  2.png" alt="yellowjacket" id="img1">
<button onclick="func1()">fade</button>


</body>
  <script src="jquery/jquery.js" type="text/javascript"></script>
```
```javascript
function func1()
{
    $("#img1").fadeToggle(3000);
}
```
Then came the moment of truth. I booted up the HTML file and clicked the button. The image quickly disappeared meaning my code had worked. I had finally understood how Jquery could be put into practice.


## Engineering design Process
I am currently in stage 4 of the engineering design process (Brainstorm and evaluate solution). I just finished working on a way I could put Jquery into use. I am beginning to work on how it could be of further help. I tinkered with jquery a little bit but I think it could really help my problem of how chess websites lack professionalism and character. I think jquery could be a real help especially with its use of javascript.


### Skills
While figuring out which tool to use two skills became the most important, research and discipline. Being able to research was especially hard while picking a tool. There was a lot of information at a lot of different skill levels. Some information was very advanced and almost impossible for a beginner to understand. Other pieces of information were useless to me. I ran into multiple pieces of information that required me to take multiple steps I didn't need. A lot of developers put out information that helped people in similar positions in tech companies. I however was not in a tech company and therefore the information was not as important. This made it hard to know which information was useful and useless. I had to learn how to understand information and separate it from pieces I don't need. The other skill I needed was discipline. It was very time consuming to learn how to set up Jquery. It took a lot of problem solving and patience. At points it was hard for me to sit in front of my computer and read articles on Jquery that ended up providing no new information. I had to set timers to be able to work for a certain amount of time. This helped my brain stay on track and be able to finally get a thorough understanding of Jquery.




[Previous](entry03.md) | [Next](entry05.md)


[Home](../README.md)



