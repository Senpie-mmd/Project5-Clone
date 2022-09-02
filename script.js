const mainImg = document.querySelector(".main-img");
const mainTxt = document.querySelector(".main-txt");

let load = 0;

window.onload = function () {
  mainImg.classList.add("onload");
  mainTxt.classList.add("onload");

  myInterval = setInterval(Onload,25)


  function Onload(){
    load ++;
    mainTxt.innerHTML = load +"%"
    if(load  > 99 ) {
      clearInterval(myInterval);
    }
  }
}