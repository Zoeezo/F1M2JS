"use strict"   
let myText = document.getElementById('myText');
let myImage = document.getElementById('myImage');
let myButton = document.getElementById('myButton');
let myReset = document.getElementById('myReset');
let rateInput = document.getElementById('rateInput');
let pitchInput = document.getElementById('pitchInput');

let pitch = 1;
let rate = 1;

myButton.addEventListener('click', function(){
    main();
})

rateInput.addEventListener('change', () => {
    let newRate = parseFloat(rateInput.value);
    setRate(newRate);
});

pitchInput.addEventListener('change', () => {
    let newPitch = parseFloat(pitchInput.value);
    setPitch(newPitch);
});

myReset.addEventListener('click', function(){
    myText.innerHTML = '. . . . .';
    myImage.src = 'https://www.ma-web.nl/static/vector/Logo_blok.svg';
})

function main(){
     let dezeTextWordtHet = makeThisSentence();
     myText.innerHTML = dezeTextWordtHet;
     sayItLoud(dezeTextWordtHet); // say something nice say it loud
     selectThisImage(); // show a nice image
}

function setPitch(newPitch) {
    if(newPitch > 2 || newPitch < 0) {
        throw console.error('Invalid pitch amount');
    }

    pitch = newPitch;
}

function setRate(newRate) {
    newRate = parseFloat(newRate);

    if(newRate > 10.0 || newRate < 0.1) {
        throw console.error('Invalid rate amount');
    }

    rate = newRate;
}

function randomizer(range = 1){ 
    // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
    return Math.floor((Math.random() * range));
}


function makeThisSentence(){
    let woord1 = onderwerp[randomizer(onderwerp.length)];
    let woord2 = werkwoord[randomizer(werkwoord.length)];
    let woord3 = restwoord[randomizer(restwoord.length)];
    let outputString = woord1 + " " + woord2 + " " + woord3;
    return outputString;
}

function selectThisImage(){
    myImage.src = plaatjes[randomizer(plaatjes.length)]; 
}

function sayItLoud (textString) {
  let message = new SpeechSynthesisUtterance(textString);
  let voices = window.speechSynthesis.getVoices();
  message.voice = voices[1];
  message.pitch = pitch; // range between 0 and 2
  message.rate = rate; // range between 0.1 (lowest) and 10 (highest) 
  window.speechSynthesis.speak(message);
}



const onderwerp = ['She', 'He', 'Zoey'];
const werkwoord = ["runs", "draws", "fights"];
const restwoord = ["bravely", "fast", "smart"];
    
let plaatjes = ['images/running.gif', 'images/drawing.gif', 'images/fighting.gif', 'images/idek.gif'];