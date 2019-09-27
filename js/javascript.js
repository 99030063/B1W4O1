var pickDoor;
var userChoice;
var winDoor;
var loseDoor; 
var swap;
var door1 = document.getElementsByClassName("door1");
var door2 = document.getElementsByClassName("door2");
var door3 = document.getElementsByClassName("door3");
 
// function getRandomInt(max) { 
// return Math.floor(Math.random() * Math.floor(max)); 
// }
var doors = [false, false, false];
doors[getRandomInt(0,2)] = true;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max+1 - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
console.log (doors);

function pickDoor(userChoice){
    var openNewDoor = true;
    var numberInArray = 0;{
        alert ("Ik laat je nu een deur zien die niet wint.");
    doors.forEach(function(i) {
        
        console.log(numberInArray + " Array number");
        console.log(userChoice + " User choice");
        if(openNewDoor == true) {
            if(i == false){
                if(userChoice != numberInArray) {
                    console.log(numberInArray + " last element");
                    // (numberInArray + 1).setAttribute('src='img/goat.png);
                    switch(numberInArray) {
                        case 0:
                            document.getElementById("door1").setAttribute('src', "img/goat.png");
                            break;
                        case 1:
                            document.getElementById("door2").setAttribute('src', "img/goat.png");
                            break;
                        case 2:
                            document.getElementById("door3").setAttribute('src', "img/goat.png");
                            break;

                    }
                    openNewDoor = false;

                }
            }
            numberInArray += 1;
        };
    });
}
}
