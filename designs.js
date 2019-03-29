// source: https://www.youtube.com/watch?v=BQTBUFKUd8o
var submit = document.getElementById("submit");

// When size is submitted by the user, call makeGrid()
submit.onclick = function() {
  // delete existing grid
  var table = document.getElementById('pixelCanvas')
  table.innerHTML = ''
  // get new width and height of grid
  var iColumn = document.getElementById('inputWidth').value;
  var iRow = document.getElementById('inputHeight').value;
  // make new grid
  makeGrid(iRow, iColumn);
  event.preventDefault();
}

/* source: https://developer.mozilla.org/en-US/docs/Web/
API/Document_Object_Model/Traversing_an_HTML_table_with_
JavaScript_and_DOM_Interfaces*/

function makeGrid(iRow, iColumn) {

  // get the reference for the body and table
  var body = document.getElementsByTagName("body")[0];
  var tbl = document.getElementsByTagName("table")[0];

  // creates a <tbody> element
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < iRow; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < iColumn; j++) {
      // Create a <td> element and put the <td> at
      // the end of the table row
      let cell = document.createElement("td");
      cell.addEventListener('click', function colorIn() {
        var colorCode = document.getElementById("colorPicker").value
        cell.style.backgroundColor = colorCode
        console.log(colorCode)
        console.log("cell " + i + ", " + j + " was clicked.")
      });
      //var cellText = document.createTextNode("");
      //cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 0;
  tbl.setAttribute("border", "0");
}
