var togler=false;
function togleStyle(){
  togler=!togler;
  changeStyle();
}
function changeStyle() {
  if (togler === true)
  {
    var elem = document.getElementById("text").style.textDecoration = "line-through";
    }
    else{
    var elem = document.getElementById("text").style.textDecoration = "none";
    }
}
