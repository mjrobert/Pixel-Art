// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



$("#sizePicker").submit(function(event) {
  event.preventDefault();
  makeGrid();
});

function makeGrid() {
  // Select table elements from the DOM
  var table = $("#pixelCanvas");
  var rows = $("#inputHeight").val();
  var columns = $("#inputWidth").val();

  // Clear the previous table
  table.empty();

  // Create new table
  for (let n = 0; n < rows; n++) {
    table.append("<tr></tr>");
    for (let m = 0; m < columns; m++) {
      table.last().append("<td></td>");
    }
  }

}
