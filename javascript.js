// Select submit input type
const submitGridSize = document.getElementById('sizePicker');

// Add listener to submit click
submitGridSize.addEventListener('submit', makeGrid);

// Select colorPicker input type
let colourPicker = document.getElementById('colorPicker');

// Add listener to colorPicker type
colourPicker.addEventListener('input', updateColour);

// Assign initial colour
let colourChange = colourPicker.value = '#000000';

//Assign canvas title
let titleToggle = document.getElementById("canvasTitle");

//Hide canvas title on initial page load
window.onload = function(){    
    titleToggle.style.display = "none";
}

//Create the canvas
function makeGrid() {

    // Stop submit action from refreshing page and removing grid
    event.preventDefault();

    // Assign height of grid
    let height = document.getElementById('inputHeight').value;

    // Assign width of grid
    let width = document.getElementById('inputWidth').value;    

    // Get table element
    let grid = document.getElementById('pixelCanvas');
    
    // Check if there is already a grid. If there is, erase it then build it
    if (grid.childElementCount === 0) { // If there is no grid...
        let y = 0;
        for (i = 1; i <= height; i++) {
            const newRow = document.createElement('tr');
            grid.appendChild(newRow); // Create new row
            for (x = 1; x <= width; x++) {
               const newCol = document.createElement('td'); // Create new column
               const createdRow = document.getElementsByTagName('tr')[y];
               newCol.addEventListener('click', setColour); // Add listener to square
               createdRow.appendChild(newCol);
            }
            y++;
        }
    }
    else{
        // Remove grid if present
        while(grid.firstChild){
            grid.innerHTML = '';
        }
        makeGrid();
    }
    titleToggle.style.display = "block";
}

// Update colour from colorPicker
function updateColour(event){

    colourChange = event.target.value;

}

// Set colour of square when selected
function setColour(event){

    event.target.style.backgroundColor = colourChange;

}