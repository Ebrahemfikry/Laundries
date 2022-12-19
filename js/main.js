//scroll page ######################################
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// // Get the container element
// var btnContainer = document.getElementById("myDIV");

// // Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("btn");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");

//     // If there's no active class
//     if (current.length > 0) {
//         current[0].className = current[0].className.replace(" active", "");
//     }

//     // Add the active class to the current/clicked button
//     this.className += " active";
//     });
// }



// light and dark mood ##########################
let lamp = document.getElementById("moodLight");
let sun = document.getElementById("mood");
let lamp1 = document.getElementById("moodLight1");
let sun1 = document.getElementById("mood1");
lamp.onclick = function(){
    this.style.display = "none";
    sun.style.display = "inline-block";
    document.body.classList.toggle("darktheme");
}

sun.onclick = function(){
    this.style.display = "none";
    lamp.style.display = "inline-block";
    document.body.classList.toggle("darktheme");
}
lamp1.onclick = function(){
    this.style.display = "none";
    sun1.style.display = "inline-block";
    document.body.classList.toggle("darktheme");
}

sun1.onclick = function(){
    this.style.display = "none";
    lamp1.style.display = "inline-block";
    document.body.classList.toggle("darktheme");
}