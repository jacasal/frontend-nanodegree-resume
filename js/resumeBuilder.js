//$("#main").append("Jose Andres");


//var firstName = "Jose Andres"
//var age =43;
//var awesomeThoughts = "I am Jose Andres and I am AWESOME!!"
//console.log(firstName);
//console.log(age);

//var funThoughts = 
//    awesomeThoughts.replace("AWESOME","FUN");

//$("#main").append(funThoughts);


//console.log (awesomeThoughts);


// Lesson 1 - Data types > Mixing.replace() and .append() ( como reeplazar una cadena por otra y añadirla en el html).

var NombreConformato = HTMLheaderName.replace("%data%", "Jose Andres C. N.");
$("#header").prepend(NombreConformato);
var PuestoConformato = HTMLheaderRole.replace("%data%", "Telecomunicaciones y Web");
$("#header").append(PuestoConformato);  

