// Select color input

const colorPicker = document.querySelector('input[type="color"]');

let color = colorPicker.value;

colorPicker.addEventListener('input', function () {
    color = colorPicker.value;
});


// Select size input

let height = document.getElementById("inputHeight").value;
let width = document.getElementById('inputWidth').value;

const submit = document.querySelector('input[type="submit"]');


// When size is submitted by the user, call makeGrid()

submit.addEventListener('click', function(event){
  event.preventDefault(); //so it doesn't reload when i click submit
  makeGrid()
});



function makeGrid() {

// Your code goes here!

}
