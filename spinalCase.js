spinalCase.js

function spinalCase(str) {
  var regex = /([^A-Za-z0-9\.\$])|([A-Z])(?=[A-Z][a-z])|([^\-\$\.0-9])(?=\$?[0-9]+(?:\.[0-9]+)?)|([0-9])(?=[^\.0-9])|([a-z])(?=[A-Z])/g;
  str = str.replace(regex, '$2$3$4$5 ');
  return str.toLowerCase().replace(/[^a-z0-9]+|\s+/gmi, "-");
 
}
spinalCase("AllThe-small Things")
//spinalCase("Teletubbies say Eh-oh")
//spinalCase("This Is Spinal Tap")
//spinalCase("thisIsSpinalTap") //should return "this-is-spinal-tap"