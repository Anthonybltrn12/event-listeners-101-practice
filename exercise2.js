// Let's also practice the different type of button press type of user events that can occur. 

// First, we'll do the regular click event. On the #circle-one element, set an event listener that when you click it, will turn its background color blue.
let circle1 = document.getElementById('circle-one')

circle1.addEventListener('click', event => {
    circle1.style.backgroundColor = 'blue'
})



// Next, we'll do the event when any key is pressed on the keyboard. On the #circle-two element, set an event listener that when you press any key on the keyboard, will turn its background color green.

let circle2 = document.getElementById('circle-two')

circle2.addEventListener('onkeypress', event => {
    circle2.style.backgroundColor = 'green'
})

// Lastly, we'll do the event when the user releases a key on the keyboard. On the #circle-three element, set an event listener that when you release any key on the keyboard, will turn its background color red. 

