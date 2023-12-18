function check()
{
// grab values from user inputs
var firstName = document.getElementById("firstName").value
var lastName = document.getElementById("lastName").value
var zipCode = document.getElementById("zipCode").value

// combine first name + space + last name
var fullName = firstName + " " + lastName

// count the characters of the name!
if (fullName.length < 20) 
{    // verify if the zip code is the correct amount of characters
    if (zipCode.length == 5)
    {
        // if both the name and zip code verify it will reveal the secret phrase
     location.replace("strings2.html")
    }
    else
    {
        // if zipcode is not 5 characters it will give this alert 
        alert ("Warning -- Zipcode is Not a Valid Entry!")
    }
}
else
{
    // if the name is more than 20 chracters - it will show an alert
    alert ("Warning -- Name is Not a Valid Entry!")
}
}

// start sound function
function startSound()
{
    // grab MP3 file
    mySound = new sound("us-lab-background-1.mp3");
    mySound.play();
    
    // create button toggle
    //go to the element to see if it is not disabled (double negative)
    document.getElementById("endSound").disabled = false;
    // go to element to see if disable is turned on
    document.getElementById("startSound").disabled = true;
}

function sound(src)
{
    this.sound=document.createElement("audio");
    this.sound.src = src;
    this.play = function ()
    {
        this.sound.play()
    }
}

function endSound() 
{
    // create button toggle
    document.getElementById("endSound").disabled = true;
    document.getElementById("startSound").disabled = false;
    window.location.reload();
}
