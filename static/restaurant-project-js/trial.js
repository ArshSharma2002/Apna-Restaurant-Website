// *********************** function for changing into dark theme *************************

preloader=()=>{
  const ani = document.getElementById('loader');
  ani.style.display = 'none';

}

Darktheme = () => {

  document.getElementById('navbar').style.cssText = 'background-color:#161b22;';
  document.querySelector('#foot').style.background = '#161b22';
  document.getElementById('body').style.cssText = 'background-color:#090c10; color:#8b949e;';

  const dark = document.getElementsByClassName('container_items');
  dark[0].style.background = '#090c10';
  dark[1].style.background = '#090c10';
  dark[2].style.background = '#090c10';
  dark[3].style.background = '#090c10';

  dark[0].style.border = '1px solid #8b949e';
  dark[1].style.border = '1px solid #8b949e';
  dark[2].style.border = '1px solid #8b949e';
  dark[3].style.border = '1px solid #8b949e';

  const heading = document.querySelectorAll('.headings');
  heading[0].style.background = "#161b22";
  heading[1].style.background = "#161b22";
  heading[2].style.background = "#161b22";
  heading[3].style.background = "#161b22";
  heading[4].style.background = "#161b22";

  const btn = document.getElementsByClassName('agrement');
  btn[0].style.background = '#090c10';
  btn[1].style.background = '#090c10';
  btn[0].style.color = '#8b949e';
  btn[1].style.color = '#8b949e';
  btn[0].style.border = '1px solid #8b949e';
  btn[1].style.border = '1px solid #8b949e';

  const menuBtn = document.getElementsByClassName('menu-btn');
  menuBtn[0].style.background = '#090c10';
  menuBtn[1].style.background = '#090c10';
  menuBtn[2].style.background = '#090c10';

  document.getElementById('chat').style.cssText = 'background-color:#090c10;';

}

// *********************** function for changing into light theme *************************

Lighttheme = () => {

  document.getElementById('navbar').style.cssText = 'background-color:#313e48;';
  document.querySelector('#foot').style.background = '#313e48';
  document.getElementById('body').style.cssText = 'background-color:rgb(219, 245, 253); color:black;';

  const dark = document.getElementsByClassName('container_items');
  dark[0].style.background = 'lightblue';
  dark[1].style.background = 'lightblue';
  dark[2].style.background = 'lightblue';
  dark[3].style.background = 'lightblue';


  dark[0].style.border = '1px solid black';
  dark[1].style.border = '1px solid black';
  dark[2].style.border = '1px solid black';
  dark[3].style.border = '1px solid black';



  const heading = document.querySelectorAll('.headings');
  heading[0].style.background = "lightblue";
  heading[1].style.background = "lightblue";
  heading[2].style.background = "lightblue";
  heading[3].style.background = "lightblue";
  heading[4].style.background = "lightblue";

  const btn = document.getElementsByClassName('agrement');
  btn[0].style.background = 'lightblue';
  btn[1].style.background = 'lightblue';
  btn[0].style.color = 'black';
  btn[1].style.color = 'black';
  btn[0].style.border = '1px solid black';
  btn[1].style.border = '1px solid black';

  const menuBtn = document.getElementsByClassName('menu-btn');
  menuBtn[0].style.background = '#313e48';
  menuBtn[1].style.background = '#313e48';
  menuBtn[2].style.background = '#313e48';

  document.getElementById('chat').style.cssText = 'background-color:#313e48;';


}


// *********************   function for hiding agreement button   ***********************

hide = () => {
  document.getElementById('agreement-container').style.cssText = 'display:none;';
  document.getElementById('agrement_btn').style.cssText = 'display:none;';
  alert("Thanks for Accepting our Policies :)");
}


// **************************   js for image slide-show   *******************************

var myIndex = 0;
ssMain();

function ssMain() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.display = "block";
  setTimeout(ssMain, 4000);
}


// ***************   js for changing text   *********************************************

var Index = 0;
textSlide();

function textSlide() {
  var i;
  var x = document.getElementsByClassName("text-slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  Index++;
  if (Index > x.length) { Index = 1 }
  x[Index - 1].style.display = "block";
  setTimeout(textSlide, 4000);
}

// ***************** js for changing offers  *********************************************

var offIndex = 0;
offersslide();

function offersslide() {
  var j;
  var m = document.getElementsByClassName("offers-Slides");
  for (j = 0; j < m.length; j++) {
    m[j].style.display = "none";
  }
  offIndex++;
  if (offIndex > m.length) { offIndex = 1 }
  m[offIndex - 1].style.display = "block";
  setTimeout(offersslide, 4000);
}


