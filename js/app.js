// button target
const hamburger = document.querySelector('.hamburgerIcon') // hamburger icon
const cross = document.querySelector('.icon') // cross icon

// menu target
const slideMenu = document.querySelector('.menu')

// Header h1 target
const header = document.querySelector('.header')

// Hamburger Click Event
hamburger.onclick = function firstClick(){   // firstClick[ display: block ]
    if( slideMenu.style.display = "none" ){
        slideMenu.style.display = "block"
        header.style.visibility = 'none'
    }
}

// cross click event
cross.onclick = function secondClick(){  // secondClick [ display: none ]
    if( slideMenu.style.display = "block" ){
        slideMenu.style.display = "none"
        header.style.visibility = 'visible'
    }
}