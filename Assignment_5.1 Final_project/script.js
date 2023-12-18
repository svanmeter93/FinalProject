function Arrays()
{
    var arrayOfNames = ["Seth" , "Brigitte" , "Mav"];
    arrayOfNames.push("Richy");
    arrayOfNames.push("Vincent");
    var str = "";
    for (var i = 0; i <arrayOfNames.length; i++)
    {
        alert(arrayOfNames[i])
        str +=arrayOfNames[i];
        str += " ";
    } 
    document.getElementById("arrUpdate").innerHTML = "All names = " + str;
 
}