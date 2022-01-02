var crewMembers = document.querySelector('.crew-members');
var boxes = document.querySelectorAll('.box');
var sliderBtnsBox = document.querySelector('#slider-btns');
var sliderBtns = document.querySelectorAll('#slider-btns a');


var xhr = new XMLHttpRequest();

xhr.open('GET','../data.json');

xhr.onload = function() {

    var response = JSON.parse(xhr.responseText);

   var memberImg = document.querySelector('.member-image img');
   var role = document.querySelector('.role');
   var memberName = document.querySelector('.member-name');
   var memberInfo = document.querySelector('.member-info');

   memberImg.src = response.crew[0].images.webp;
   role.innerText = response.crew[0].role;
   memberName.innerText = response.crew[0].name;
   memberInfo.innerText = response.crew[0].bio;
   sliderBtns[0].style.backgroundColor = '#fff';
  // crewMembers.style.opacity = '1';

   for(let i =0; i < sliderBtns.length; i++) {

    sliderBtns[i].addEventListener('click', function() {

        for(let k =0; k < sliderBtns.length; k++) {
            sliderBtns[k].style.backgroundColor = 'rgba(170, 170, 170, 0.596)';
            crewMembers.style.opacity = '.5';
        }

        sliderBtns[i].style.backgroundColor = '#fff';
    memberImg.src = response.crew[i].images.webp;
    role.innerText = response.crew[i].role;
    memberName.innerText = response.crew[i].name;
    memberInfo.innerText = response.crew[i].bio;

    setTimeout(function() {
        crewMembers.style.opacity = '1';
    }, 500)
    })
   }
};

xhr.send();


