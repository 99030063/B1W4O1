var pickDoor;
var userChoice;
var winDoor;
var loseDoor; 
var swap;
var door1 = document.getElementsByClassName("1");
var door2 = document.getElementsByClassName("2");
var door3 = document.getElementsByClassName("3");
 
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
console.log (doors); //voor testdoeleinden geeft dit de correcte antwoorden van de deuren weer

function pickDoor(userChoice){
    var openNewDoor = true;
    var numberInArray = 0;{
        alert ("Je hebt gekozen voor deur nummer " +  (eval(userChoice+1)));
        alert ("Ik zal je nu een deur laten zien waar een geit achter zit.")
    doors.forEach(function(i) { //line 27 to 49 opent een deur die niet gekozen is door de speler en die niet de auto bevat
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

