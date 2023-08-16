// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World!";

// let myVariable = "Bob";

// //var varVariable = "old syntax";

// /*

// Montatako riviä kommenttia

// NaN -> ei tule numeroa

// */



// myVariable = "Steve"

// myVariable = myVariable + 15;

// myHeading.textContent = myVariable;

// if(2 === "2"){
//     meHeading.textContent = "ei toimi";
// }
// else if ("jatakin" === "muuta"){
//     // code missing
// }


// if(2 == "2"){
//     myHeading.textContent = "toimii";
// }

// // Luodaan funktio, mutta sitä ei sitä eim ole vielä käytetty.
// // Tässä määritellään mitä funktio voi tehdä, mutta sitä pitää erikseen kutsua.

// // ctrl +

// // ctrl +


// function multiply(num1, num2){
//     let result = num1 * num2;
//     return result; 
// }

// alert(multiply(2, 5)); // 10

// //alert(multiply(10, "moi")); // Tämä tuottaa arvon: NaN

// //document.querySelector("html").addEventListener("click", () => {
//  //   alert("Ouch!");
// // });

// // Viittaus html-documentin img-elementtiin.
// const myImage = document.querySelector("img");

// // Tallenetaan img-elementin onclick propertyyn nuoli funktio.
// myImage.onclick = () => {
//     // Määritellään mitä nuoli funktio tekee klikatessa.
//     // Klikkaus vaihtaa kahden kuvan välillä.
//     // if(kuvaA){
//     //    näytä kuva B
//     // }
//     // else{
//     //      näytä kuva A
//     // }
//     // Otetaan talteen mikä kuva näkyy ennen klikkausta.
//     const mySrc = myImage.getAttribute("src");

//     if(mySrc ==="images/firefox-icon.png"){
//         // Vaihdetaan kuvan src attribuutti toiseen kuvaan
//         myImage.setAttribute("src","images/firefox2.png");
//     }
//     else{ // Jos koodi tulee tänne asti, oli kyseessä kuva 2
//         myImage.setAttribute("src", "images/firefox-icon.png");
//     }
// }

// Otetaan talteen elementtien button ja h1 viittaukset muuttujiin.
let myButton = document.querySelector("button");
let myHeading2 = document.querySelector("h1");

function setUserName(){


    // Luetaan käyttäjältä nimi ja tallenetaan muuttujan myName
    const myName = prompt("Please enter your name.");
    if(!myName){
        setUserName();
    }else{

    
    // Tallenetaan käyttäjän syöttämä arvo muistiin selaimeen.
    localStorage.setItem("name", myName);
myHeading2.textContent = `Mozilla is cool, ${myName}`;
// ? oikealta puolelta, käytä shift myös.
// Kelpaa myös heittomerkki.
}
}
// Tarkistetaan onko nimi jo tallessa. Jos ei ole, suoritetaan nimen kysyminen.
if(!localStorage.getItem("name2")){
    setUserName(); // Suoritetaan funktio, joka pyytää käyttäjän nimen.
    
}

//Käyttäjä on jo antanut nimen, haetaan se selaimen muistista.
else{
    // Haetaan nimi.
    const storedName = localStorage.getItem("name");
    // Päivitetään nimi otsikkoon.
    myHeading2.textContent = `Mozilla is cool, ${storedName}`;

}

// Jos käyttäjä peruu nimen syötön. saadaan arvo null.
// null tarkoittaa, että kohdasta puuttuu arvo.

// Jos käyttäjä syöttää tyhjän boxin. Ei tule mitään näkyviin. Koska"".



myButton.onclick = () =>{
    setUserName();
}