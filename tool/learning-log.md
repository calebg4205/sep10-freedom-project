# Tool Learning Log 4

Tool: Jquery

---

3/20/2024:
* I began to read the [w3schools](https://www.w3schools.com/jquery/jquery_hide_show.asp) article on Jquery affects to see how they could spruce on my webpage
  * The fade and slide made me interested
  * It was challeging to try and work with Javascript with no prior experience
```javascript
$("#chess").click(function(){
  $("p").hide();
});

$("#knight").click(function(){
  $("p").show();
});
```
3/24/2024:
* I continued to tinker with the effect Jquery alloed me to play with
 * Perhaps my next learning log will include a tutorial on javascript
 * The effects bring a lot of cool things to my website
 * Can I include this in any projects to see it in a real workspace?

3/25/24
* I began to inspect what more widgets can do using [Widget factory](https://jqueryui.com/widget/)
    * This webiste showed the full extent to what Jquery could do
    * I am taken aback by the color chnage and the class change
        * With this I could make informtation

4/3/24
* I started to finish working on how animations work in Jqery
 * I used the Jqeury effects library [Jquery](https://api.jquery.com/category/effects/)
 * I created a webpage that made text show up and vanish
 ```js
$(document).ready(function(){
    $(".button1").click(function(){
      $("p").hide();
    });
  });

  $(document).ready(function(){
    $(".button2").click(function(){
      $("p").show();
    });
  });

  $(document).ready(function(){
    $(".button3").click(function(){
      $("h1").fadeOut();
    });
  });
  $(document).ready(function(){
    $(".button4").click(function(){
      $("h1").fadeIn();
    });
  });

```
```html
<body>
  <p>Hello world I am your master</p>
  <div class="box">
    <button class="button1">Hide</button>
    <button class="button2">Show</button>
</div>
<h1>MUWHAHAHA</h1>
<button class="button3">Fade Out</button>
<button class="button4">Fade In</button>
</body>
```
   I was able to code this from memory so I felt as if I had a pretty good grasp on animations

   4/4/24
   * 
