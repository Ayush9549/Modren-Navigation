let circle = document.getElementsByClassName('circle')[0];
let icon = document.getElementsByClassName('icon');
let text = document.getElementsByClassName('text');
// console.log(circle);
function profileCircle(value)
{
  if (value==0) 
  {
    circle.style.left = "25px";
    icon[0].style.transform = "translateY(-2px)";
    icon[1].style.transform = "translateY(0px)";
    icon[2].style.transform = "translateY(0px)";
    icon[3].style.transform = "translateY(0px)";
    icon[4].style.transform = "translateY(0px)";
    text[0].style.transform = "translateY(20px)";
    text[0].style.opacity = "1";
    text[1].style.opacity = "0";
    text[2].style.opacity = "0";
    text[3].style.opacity = "0";
    text[4].style.opacity = "0";

  } 
  if (value==1) 
  {
    circle.style.left = "95px";
    icon[1].style.transform = "translateY(-32px)";
    icon[0].style.transform = "translateY(35px)";
    icon[2].style.transform = "translateY(0px)";
    icon[3].style.transform = "translateY(0px)";
    icon[4].style.transform = "translateY(0px)";
    text[1].style.transform = "translateY(20px)";
    text[1].style.opacity = "1";
    text[0].style.opacity = "0";
    text[2].style.opacity = "0";
    text[3].style.opacity = "0";
    text[4].style.opacity = "0";
  }
   if (value==2) 
  {
    circle.style.left = "165px";
    icon[2].style.transform = "translateY(-32px)";
    icon[1].style.transform = "translateY(0px)";
    icon[0].style.transform = "translateY(35px)";
    icon[3].style.transform = "translateY(0px)";
    icon[4].style.transform = "translateY(0px)";
    text[2].style.transform = "translateY(20px)";
    text[2].style.opacity = "1";
    text[0].style.opacity = "0";
    text[1].style.opacity = "0";
    text[3].style.opacity = "0";
    text[4].style.opacity = "0";
  } 
  if (value==3) 
  {
    circle.style.left = "235px";
    icon[3].style.transform = "translateY(-32px)";
    icon[1].style.transform = "translateY(0px)";
    icon[2].style.transform = "translateY(0px)";
    icon[0].style.transform = "translateY(35px)";
    icon[4].style.transform = "translateY(0px)";
    text[3].style.transform = "translateY(20px)";
    text[3].style.opacity = "1";
    text[0].style.opacity = "0";
    text[1].style.opacity = "0";
    text[2].style.opacity = "0";
    text[4].style.opacity = "0";
  }
  if (value==4) 
  {
    circle.style.left = "305px";
    icon[4].style.transform = "translateY(-32px)";
    icon[1].style.transform = "translateY(0px)";
    icon[2].style.transform = "translateY(0px)";
    icon[3].style.transform = "translateY(0px)";
    icon[0].style.transform = "translateY(35px)";
    text[4].style.transform = "translateY(20px)";
    text[4].style.opacity = "1";
    text[0].style.opacity = "0";
    text[1].style.opacity = "0";
    text[2].style.opacity = "0";
    text[3].style.opacity = "0";
  }
}