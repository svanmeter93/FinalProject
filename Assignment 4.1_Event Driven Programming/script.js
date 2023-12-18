//global variable go here
var interValid = 0;
let change = 20;

function startMove(){ 

    // // create variable to grab image from HTML
var image = document.getElementById("imgmeme")
    interValid = setInterval(function() {
        image.style.left = change + "px";
        image.style.top = change + "px";
        document.getElementById("msg").innerHTML = "x = " + image.style.left + " y = " + image.style.top;
        change += 10;
    },50);
}


// create a function to enable/disable the stop Button 
// function in class did not work. Tried reloading the page to reset the image
function stopMove(){
    document.getElementById("stopBtn").disabled = true;
    document.getElementById("startBtn").disabled = false;
    window.location.reload();
}

