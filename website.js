let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
 }   

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    
}
let slides = document.querySelectorAll('.home .slide');
let index = 0;


let img = document.querySelector('.img');
function equipe(equipee){
    img.src = equipee;
}


function deleteItem(elementToDelete) {
  elementToDelete.parentElement.remove()
}
document.getElementById("ajouter").addEventListener("click", () => {
  var li = document.createElement("li");
  var txt = document.getElementById("txt");
  li.innerText = txt.value;
  li.className = "ele"
  li.addEventListener("click", (event) => {
  event.target.parentNode.removeChild(event.target);
  });
  var ulEle = document.getElementById("liste");
  ulEle.appendChild(li);
  });
  var elements = document.getElementsByClassName("ele");
  for (const element of elements) {
  element.addEventListener("click", () => {
  document.getElementById("liste").removeChild(element);
  });
  }
