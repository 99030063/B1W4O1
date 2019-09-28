var pickDoor;
var swapdoor;
var userChoice;
var winDoor;
var loseDoor; 
var swap;
var door1 = document.getElementsByClassName("1");
var door2 = document.getElementsByClassName("2");
var door3 = document.getElementsByClassName("3");
var secondChoice;
 
// function getRandomInt(max) { 
// return Math.floor(Math.random() * Math.floor(max)); 
// }
var doors = [false, false, false];
doors[getRandomInt(0,2)] = true;

//genereerd een willekeurige waarde tussen 0 en 2
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max+1 - min)) + min; //The maximum is exclusive and the minimum is inclusive
    console.log (doors); //voor testdoeleinden geeft dit de correcte antwoorden van de deuren weer
}

function pickDoor(userChoice){
    var openNewDoor = true;
    var numberInArray = 0;{
        alert ("Je hebt gekozen voor deur nummer " +  (eval(userChoice+1)));
        alert ("Ik zal je nu een deur laten zien waar een geit achter zit.")
    doors.forEach(function(i) { //line 27 to 49 opent een deur die niet gekozen is door de speler en die niet de auto bevat
        if(openNewDoor == true) {
            if(i == false){
                if(userChoice != numberInArray) {
                    console.log('deur '+eval(numberInArray+1));
                    // (numberInArray + 1).setAttribute('src='img/goat.png);
                    switch(numberInArray) {
                        case 0:
                            document.getElementById("door1").setAttribute('src', "img/goat.png");
                            document.getElementById("door1").removeAttribute('onclick');
                            swap1()
                            break;
                        case 1:
                            document.getElementById("door2").setAttribute('src', "img/goat.png");
                            document.getElementById("door2").removeAttribute('onclick');
                            swap2()
                            break;
                        case 2:
                            document.getElementById("door3").setAttribute('src', "img/goat.png");
                            document.getElementById("door3").removeAttribute('onclick');
                            swap3()
                            break;
                    }
                    openNewDoor = false;
                }
            }
            numberInArray += 1;
        };
    });
    }


    function swap1(){
        document.getElementById("door2").setAttribute('onclick', 'swapDoor(1)')
        document.getElementById("door3").setAttribute('onclick', 'swapDoor(2)')
            if(userChoice==1){
                console.log("userChoice = "+userChoice)
                setTimeout(function(){alert(swapAlert3)}, 1500)
            }else if(userChoice==2){
                console.log("userChoice = "+userChoice)
                setTimeout(function(){alert(swapAlert5)}, 1500)
            }
    }

    function swap2(){
        document.getElementById("door1").setAttribute('onclick', 'swapDoor(0)')
        document.getElementById("door3").setAttribute('onclick', 'swapDoor(2)')
            if(userChoice==0){
                console.log("userChoice = "+userChoice);
                setTimeout(function(){alert(swapAlert1)}, 1500);
            }else if(userChoice==2){
                console.log("userChoice = "+userChoice),
                setTimeout(function(){alert(swapAlert6)}, 1500);
            }  
    }

    function swap3(){
        document.getElementById("door1").setAttribute('onclick', 'swapDoor(0)')
        document.getElementById("door2").setAttribute('onclick', 'swapDoor(1)')
            if(userChoice==0){
                console.log("userChoice = "+userChoice);
                setTimeout(function(){alert(swapAlert2)},1500);
            }else if(userChoice==1){
                console.log("userChoice = "+userChoice),
                setTimeout(function(){alert(swapAlert4)},1500);
            }  
    }

    function swapDoor(secondChoice){
        console.log(secondChoice)
        if(secondChoice==userChoice){
            alert(swapDeny)
            doors.forEach(function(index){
                if(openLastDoor==true){
                    if(index=false){  
                       console.log("geit")
                    }else if(index==true){
                        console.log ("Auto")
                    }
                }
                openLastDoor==false;       
            })
        }else if(secondChoice != userChoice){
            alert(swapAccept)
        }
    }


}
