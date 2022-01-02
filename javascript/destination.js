var planetNav = document.querySelector('#main-section ul');
var planetNavItems = document.querySelectorAll('#main-section ul li');


let xhr = new XMLHttpRequest();

xhr.open('GET','../data.json');

xhr.onload = function() {

    var response = JSON.parse(xhr.responseText);

    var planetImage = document.querySelector('#planet-image img');
    var destinationName = document.querySelector('#destination-name h1');
    var destinationInfo = document.querySelector('#destination-name p');
    var destinationDistance = document.querySelector('.distance p');
    var destinationTime = document.querySelector('.time p');

    planetImage.src = response.destinations[0].images.webp;
    destinationName.innerText = response.destinations[0].name;
    destinationInfo.innerText = response.destinations[0].description;
    destinationDistance.innerText = response.destinations[0].distance;
    destinationTime.innerText = response.destinations[0].travel;
    planetNavItems[0].style.borderBottomWidth = '1px';
    planetNavItems[0].style.color = '#fff';

    for(let i =0; i < planetNavItems.length; i++) {
        planetNavItems[i].addEventListener('click',function() {

            for(let k =0; k < planetNavItems.length; k++) {
                planetNavItems[k].style.borderBottomWidth = '0px';
                planetNavItems[k].style.color = '#aaa';
            }
    planetNavItems[i].style.borderBottomWidth = '1px';
    planetNavItems[i].style.color = '#fff';

    planetImage.src = response.destinations[i].images.webp;
    destinationName.innerText = response.destinations[i].name;
    destinationInfo.innerText = response.destinations[i].description;
    destinationDistance.innerText = response.destinations[i].distance;
    destinationTime.innerText = response.destinations[i].travel;
        })
    }
};

xhr.send();
