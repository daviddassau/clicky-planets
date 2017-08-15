var planets = [{
  name: 'mercury',
  url: 'https://www.nasa.gov/sites/default/files/mercury_1.jpg'
}, {
  name: 'venus',
  url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg'
}, {
  name: 'earth',
  url: 'https://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg'
}, {
  name: 'mars',
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mars_23_aug_2003_hubble.jpg/275px-Mars_23_aug_2003_hubble.jpg'
}, {
  name: 'jupiter',
  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg/220px-Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg"
}, {
  name: 'saturn',
  url: 'http://nssdc.gsfc.nasa.gov/image/planetary/saturn/saturn.jpg'
}, {
  name: 'uranus',
  url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg'
}, {
  name: 'neptune',
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/260px-Neptune_Full.jpg'
}];

// Variable to grab the div with the planetHolder id
var planetHolderDiv = document.getElementById('planetHolder');
// Variable to grab the div with the showButton id
var getPlanetsButton = document.getElementById('showButton');
var inputField = document.getElementById('searchText');

// Function to write the content that will appear on the page
function domString(planetz) {
	var planetString = '';
	for(var i = 0; i < planetz.length; i++){
		var newPlanet = '';
		newPlanet += `<div class="planetBox" id="planetBox-${i}">`;
		newPlanet += `<div class="planetName hidden">${planetz[i].name}</div>`;
		newPlanet += `<img class="planetImage" src="${planetz[i].url}">`;
		newPlanet += `</div>`;
		planetString += newPlanet;
	}
	// 
	writeToDom(planetString);
}

// Function to write content to dom
function writeToDom(strang){
	planetHolderDiv.innerHTML = strang;
}

getPlanetsButton.addEventListener('mouseenter', function(){
	domString(planets);
});

function showMe(e) {
	e.target.previousSibling.classList.remove('hidden');

}

document.body.addEventListener('click', function(event){
	// console.log("click event", event);
	// console.log("click event", event.target.parentNode.parentNode.parentNode);
	if(event.target.className === 'planetImage') {
		console.log("yaaaaaaaa!");
		showMe(event);
	}
});

inputField.addEventListener('keypress', function(event){
	if(event.key === 'Enter') {
		var txt = inputField.value;
		// 1. filter planets array
		var results = planets.filter(function(thing){
			console.log("filter thing", thing);
			return thing.name.indexOf(txt)>-1;
		})
		// 2. rerun domstring
		domString(results);
	}
});
























