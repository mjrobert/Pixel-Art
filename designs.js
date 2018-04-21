// Variables declaration

let color, width, height;

const table = document.getElementById('pixelCanvas');

const submit = document.querySelector('input[type="submit"]');

const colorPicker = document.querySelector('input[type="color"]');


// Get colour value chosen

color = colorPicker.value;

colorPicker.addEventListener('input', function () {
    color = colorPicker.value;
});




// When size is submitted by the user, call makeGrid() using input values

submit.addEventListener('click', function(event){
  event.preventDefault(); 
  height = Number(document.getElementById("inputHeight").value);
  width = Number(document.getElementById('inputWidth').value);

  makeGrid()
});



function makeGrid() {
	table.innerHTML="";  //empties table
	for (let m = 0; m < height; m++){
		const row = document.createElement("tr");
		table.appendChild(row);
			for (let n = 0; n < width; n++) {
				const column = document.createElement("td");
				row.appendChild(column);
			}
	}

}


// Change the colour of cells when clicked.

table.addEventListener('click', function (event) {
    if (event.target.nodeName === 'TD') {  
        event.target.style.backgroundColor = color;
    }
});
