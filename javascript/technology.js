var xhr = new XMLHttpRequest();

xhr.onload = function() {

    var response = JSON.parse(this.responseText);

   var technologyImg = document.querySelector('#technology-image img');
   var technologyName = document.querySelector('#technology-name');
   var technologyInfo = document.querySelector('#technology-info');

   technologyImg.src = response.technology[0].images.landscape;
   technologyName.innerText = response.technology[0].name;
   technologyInfo.innerText = response.technology[0].description;
   sliderBtns[0].style.backgroundColor = '#fff';
   sliderBtns[0].style.color = '#000';
   //technologyContent.style.opacity = '1';

   for(let i =0; i < sliderBtns.length; i++) {

    sliderBtns[i].addEventListener('click', function() {

        for(let k =0; k < sliderBtns.length; k++) {
            sliderBtns[k].style.backgroundColor = 'transparent';
            sliderBtns[k].style.color = '#fff';
           // technologyContent.style.opacity = '.3';
        }

        sliderBtns[i].style.backgroundColor = '#fff';
        sliderBtns[i].style.color = '#000';
    technologyImg.src = response.technology[i].images.landscape;
    technologyName.innerText = response.technology[i].name;
    technologyInfo.innerText = response.technology[i].description;

    setTimeout(function() {
       // technologyContent.style.opacity = '1';
    }, 500)
    })
   }
};

xhr.open("GET", "../data.json");

xhr.send();

var technologyContent = document.querySelector('#technology-content');
//var boxes = document.querySelectorAll('.box');
var sliderBtnsBox = document.querySelector('#slider-btns');
var sliderBtns = document.querySelectorAll('#slider-btns a');