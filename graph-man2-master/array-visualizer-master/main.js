// ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [400, 200, 200, 400, 200, 200, 200, 400, 200, 200, 200, 200, 400];


// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / myArray.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < myArray.length; i++) {
        ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
        ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);        
    }
    

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

document.addEventListener('keydown' , keyDownHandler2) 



function keyDownHandler2 (event) {
    
    console.log(event.code);
    if(event.code == 'Digit1') {
        let removed1 = [ 12 , 7 , 3 , 0];
        for (let i = 0; i < removed1.length; i++) {
            myArray.splice(removed1[i] , 1);

        }

    } else if (event.code == 'Digit2') {
        let removed2 = [11 , 10 , 9 , 8 , 6 , 5 , 4 , 2 , 1];
        for (let i = 0; i < removed2.length; i++) {
            myArray.splice(removed2[i] , 1);


            
        } 
    }   


}