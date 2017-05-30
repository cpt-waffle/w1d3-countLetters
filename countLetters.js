function countLetters(some_string)
 {
 var myObject =  {}
 var noSpaces = some_string.split(" ").join("");

 //loop to add each letter as a key
 for (var i of noSpaces)
 {

    if (typeof myObject[i] == 'undefined')
      myObject[i] = 1;
    else
      myObject[i]++;

 }

 //console.log(Object.keys(myObject));
 return myObject;
};



//main
var myObject = countLetters("lighthouse in the house");
console.log(myObject);
