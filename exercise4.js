// You now have a 3x3 grid. We want to configure this grid such that when the left 3 cells are clicked, the colors turn red, when the middle 3 cells are clicked, the color turns green, and when the last 3 cells are clicked, the color turns blue. 

// Write some JS code below such that event listeners are attached to all the correct elements following the specifications above.

// Hint: Some sort of loop may be helpful to you in this process!
let greenCell = document.getElementsByClassName('grid-cell green')
for(let i = 0; i <= greenCell.length - 1; i++){
    greenCell[i].addEventListener('click', event => {
        greenCell[i].style.backgroundColor = 'green'
    })
   
}

// greenCell.addEventListener('click', event =>{
//      greenCell.style.backgroundColor = 'green'})
  

let redCell = document.getElementsByClassName('grid-cell red')
for(let i = 0; i <= redCell.length - 1; i++){
    redCell[i].addEventListener('click', event => {
        redCell[i].style.backgroundColor = 'red'
    })
   
}

let blueCell = document.getElementsByClassName('grid-cell blue')
for(let i = 0; i <= blueCell.length - 1; i++){
    blueCell[i].addEventListener('click', event => {
        blueCell[i].style.backgroundColor = 'blue'
    })
   
}

// let box = document.getElementById("main-grid")
// box.addEventListener('click', event =>{
//     console.log('jello')


