// function init() {
//     let planet = document.getElementById("greenplanet");
//     planet.innerHTML = "Red Alert: hit by physer fire!";
//     planet.setAttribute("c lass", "redtext");
// }

// window.onload = init;



// function lieDetectorTest() {
//     let lies = 0;

//     let stolenDiamond = {};
//     if (stolenDiamond) {
//         console.log("You stole the diamond");
//         lies++;
//     }


//     let car = {
//         keysInPocket: null
//     };
//     if (car.keysInPocket) {
//         console.log("Uh ou, guess you stole the car!");
//         liess++;
//     };
//     if (car.emptyGasTank) {
//         console.log("YOU drove the car after you stole it!");
//         lies++;
//     };
//     let foundYouAtTheCrimeScene = [];
//     if (foundYouAtTheCrimeScene) {
//         console.log("A sure sign of guilt");
//         lies++;
//     };
//     if (foundYouAtTheCrimeScene[0]) {
//         console.log("Caught you wuth a stolen item!");
//         lies++;
//     };
//     let yourName = " ";
//     if (yourName) {
//         console.log("Guess you lied about your name!");
//         lies++;
//     }
//     return lies;
// };

// let numberOfLies = lieDetectorTest();
// console.log("You told" + numberOfLies + " lies!");
// if (numberOfLies >= 3) {
//     console.log("Guilty as charged");
// }





// // Larry

// function validate(phoneNumber) {
//     if (phoneNumber.length > 8 || phoneNumber < 7) {
//         return false;
//     }


//     for (let i = 0; i < phoneNumber.length; i++) {
//         if (i === 3) {
//             if (phoneNumber.length === 8 && phoneNumber.charAt(i) !== '-') {
//                 return false;
//             } else if (phoneNumber.length === 7 && isNaN(phoneNumber.charAt(i))) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }








// // Brad

// function validate(phoneNumber) {
//     if (phoneNumber.length > 8 || phoneNumber < 7) {
//         return false;
//     }
//     let first = phoneNumber.substring(0.3);
//     let second = phoneNumber.substring(phoneNumber.length - 4);

//     if (isNaN(first) || isNaN(second)) {
//         return false;
//     }
//     if (phoneNumber.length === 8) {
//         return (phoneNumber.charAt(3) === "-");
//     }
//     return true;
// }







// // page 331 ХЗ непонял
// function Duck(sound) {
//     this.sound = sound;
//     this.quack = function () {
//         console.log(this.sound);
//     }
// }
// let toy = new Duck("quack quack");

// toy.quack();

// console.log(typeof toy);
// console.log(toy instanceof Duck);






