// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// source: https://www.youtube.com/watch?v=BQTBUFKUd8o
var submit = document.getElementById("submit");

submit.onclick = function() {
  var iRow = document.getElementById('inputWidth').value;
  var iColumn = document.getElementById('inputHeight').value;
  makeGrid(iRow, iColumn);
  event.preventDefault();
}

/* source: https://developer.mozilla.org/en-US/docs/Web/
API/Document_Object_Model/Traversing_an_HTML_table_with_
JavaScript_and_DOM_Interfaces*/

// Your code goes here!


function makeGrid(iRow, iColumn) {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < iRow; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < iColumn; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("");
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}
