var giraffes = [
  {
    description: "hint1",
    picture: "http://interesting-africa-facts.com/Images/Giraffe.jpg",
    source: "http://interesting-africa-facts.com/Africa-Animal-Facts/Africa-Giraffe-Facts.shtml",
  },

  {
    description: "hint2",
    picture:"https://static01.nyt.com/images/2014/10/07/science/07JPGIRA1/07JPGIRA1-master1050.jpg",
    source: "https://www.nytimes.com/2014/10/07/science/our-understanding-of-giraffes-does-not-measure-up.html?_r=0",
  },

  {
    description: "hint3",
    picture:"http://www.factzoo.com/sites/all/img/mammals/even-ungulates/tall-giraffe.jpg",
    souce:"http://www.factzoo.com/mammals/giraffe-long-neck-spots.html",
  }
];

var sun = [
{
  description:"hint4",
  picture:"https://pbs.twimg.com/profile_images/641353910561566720/VSxsyxs7.jpg",
  source:"https://twitter.com/sun",
},
{
  description:"hint5",
  picture:"http://static3.businessinsider.com/image/55c920c4371d2215008bea1d-1190-625/heres-what-would-happen-if-the-sun-disappeared-right-now.jpg",
  source:"http://www.businessinsider.com/what-would-happen-if-the-sun-disappeared-2015-8"
},
{
  description:"hint6",
  picture:"http://1000awesomethings.com/wp-content/uploads/2012/01/the-sun.jpg",
  source:"http://1000awesomethings.com/2012/01/19/66-the-sun/",
}
];

var wrench = [
{
  description:"hint7",
  picture:"https://public.snapon.com/R_RRD/Objects_lg/images/OES18B.jpg",
  source:"https://store.snapon.com/WRENCHES-C629061.aspx",
},
{
  description:"hint8",
  picture:"http://www.homedepot.com/catalog/productImages/1000/3a/3ae7feaf-1d21-4a3e-83ed-450a5a16ae20_1000.jpg",
  source:"http://www.homedepot.com/p/Crescent-6-in-and-10-in-Adjustable-Wrench-Set-AT2610CVS/203161685",
},
{
  description:"hint9",
  picture:"https://images.wihatoolsus.com/catalog/product/cache/1/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/4/0/40001_1.jpg",
  source:"https://www.wihatools.com/shop-tools/wrenches",
}
];

var i = 0;
var current;
function displayHint()
{
  var index;
  do {
 index = Math.floor(Math.random() * giraffes.length);
  }
  while (index==current);

  current = index;
console.log(giraffes[current]);
document.getElementById("hintPlace").src = giraffes.picture;
}

var i = 0;
var current;
function displayHint1()
{
  var index;
  do {
 index = Math.floor(Math.random() * sun.length);
  }
  while (index==current);
  current = index;
console.log(sun[current]);
document.getElementById("hintPlace").src = sun.picture;
}

var i = 0;
var current;
function displayHint2()
{
  var index;
  do {
 index = Math.floor(Math.random() * wrench.length);
  }
  while (index==current);
  current = index;
console.log(wrench[current]);
document.getElementById("hintPlace").src = wrench.picture;
}

function validatePic()
{
  if(input.question1 = "Giraffe")
  {
  document.getElementById('response').innerHTML = "correct!"
  }
  else
  {
    document.getElementById('reponse').innerHTML = "Wrong!"
  }
}
function nextPage(){
  window.location.href ="page1.html";
}
