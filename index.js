
var drums = ['w','a','s','d','j','k','l'];
var i;

 document.addEventListener("keydown",function(event) {
   makeSound(event.key);
   btnAnim(event.key);
 });


 for(i=0; i<7; i++)
{
  document.querySelector("."+drums[i]).addEventListener("click", function() {
    var drumClicked = this.innerHTML;
    makeSound(drumClicked);
    btnAnim(drumClicked);
  });
}



function makeSound(key)
{
  // alert("clickRead");

  var j=0;
  var audio = [];
  for(j=0;j<7;j++)
  {
    audio[j] = new Audio("soundsT/"+(j+1)+".mp3")
  }
  for(j=0;j<7;j++)
  {
    if(key === drums[j])
    {
        audio[j].play();
    }
  }

}

function btnAnim(key) {
  var actvBtn = document.querySelector("."+key);
  actvBtn.classList.add("pressed");

  setTimeout( function() {
    actvBtn.classList.remove("pressed");
  },100);

}
