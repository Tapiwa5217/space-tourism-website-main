var technologyContent = document.querySelector('#technology-content');
//var boxes = document.querySelectorAll('.box');
var switchBtnsBox = document.querySelector('#slider-btns');
var switchBtns = document.querySelectorAll('#slider-btns a');

var xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json');

xhr.onload = function() {

    var response = JSON.parse(xhr.responseText);

   var technologyImg = document.querySelector('#technology-image img');
   var technologyName = document.querySelector('#technology-name');
   var technologyInfo = document.querySelector('#technology-info');

   technologyImg.src = response.technology[0].images.landscape;
   technologyName.innerText = response.technology[0].name;
   technologyInfo.innerText = response.technology[0].description;
   switchBtns[0].style.backgroundColor = '#fff';
   switchBtns[0].style.color = '#000';
   //technologyContent.style.opacity = '1';

   for(let i =0; i < switchBtns.length; i++) {

    switchBtns[i].addEventListener('click', function() {

        for(let k =0; k < switchBtns.length; k++) {
            switchBtns[k].style.backgroundColor = 'transparent';
            switchBtns[k].style.color = '#fff';
           // technologyContent.style.opacity = '.3';
        }

        switchBtns[i].style.backgroundColor = '#fff';
        switchBtns[i].style.color = '#000';
    technologyImg.src = response.technology[i].images.landscape;
    technologyName.innerText = response.technology[i].name;
    technologyInfo.innerText = response.technology[i].description;

   // setTimeout(function() {
       // technologyContent.style.opacity = '1';
   // }, 500)
    })
   }
};

xhr.send();
