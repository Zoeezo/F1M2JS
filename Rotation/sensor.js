
// activeer de Device Orientation API
window.addEventListener('deviceorientation', handleOrientation);

// event handler
function handleOrientation(eventData){
    let alpha, beta, gamma;
    // alpha rotation compass rotation Z-axis
    alpha = Math.round(eventData.alpha);
    // beta rotation front back rotation X-axis
    beta = Math.round(eventData.beta);
    // gamma rotation left right rotation Y-axis
    gamma = Math.round(eventData.gamma);
    
    // doe iets met de data
    doSomething(alpha, beta, gamma);     
}   


function doSomething(alpha, beta, gamma){
    showDataColor(alpha, beta, gamma); // kleurtjes en tekst
    activateVoice(alpha, beta, gamma); // geluid
    showMyImage(alpha, beta, gamma);   // afbeelding  
}

function showDataColor(alpha, beta, gamma){
    document.getElementById('beta').innerHTML = beta;
    document.getElementById('gamma').innerHTML = gamma;
    document.getElementById('alpha').innerHTML = alpha;

    document.body.style.background = `rgb(150, ${Math.abs(gamma)*5}, 150)`;
}

function activateVoice(alpha, beta, gamma){
    if(alpha > 120 && alpha > beta && alpha > gamma) {
        let myTxt = "You're making me dizzy!";  
        sayItLoud(myTxt);
        document.getElementById('voice').innerHTML = myTxt;
    }
    else if(beta > 120 && beta > alpha && beta > gamma) {
        let myTxt = "Stop it!";  
        sayItLoud(myTxt);
        document.getElementById('voice').innerHTML = myTxt;
    }
    if(gamma > 120 && gamma > beta && gamma > alpha) {
        let myTxt = "You're making me dizzy!";  
        sayItLoud(myTxt);
        document.getElementById('voice').innerHTML = myTxt;
    }
    else{
        document.getElementById('voice').innerHTML = "";
    }
}

function showMyImage(alpha, beta, gamma){
    if(alpha > 40 && alpha > beta && alpha > gamma) {
        document.getElementById('myImage').src = "image.jpg";
    }
    else if(beta > 40 && beta > alpha && beta > gamma) {
        document.getElementById('myImage').src = "image2.jpg";
    }
    if(gamma > 40 && gamma > beta && gamma > alpha) {
        document.getElementById('myImage').src = "image3.gif";
    }
    else {
        document.getElementById('myImage').src = "";
    }
}