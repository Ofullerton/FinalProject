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

var i = 0;
var current;
function displayHint()
{
  var index;
  do {
 index = Math.floor(Math.random() * giraffes.length);
  }
  while (index==current); // this is saying saying that the index has to be the
  //as the current in order to run again
  current = index;  //separately this is saying when current = index
console.log(giraffes[current]);
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
