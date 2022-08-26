function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("ouput").innerHTMl = 
"";snapshot.forEach(function(childSnapshot) {childKey = 
childSnapshot.key;
Room_names = childKey;
//start code

//end code})
});});}
getData();