$(document).ready(()=>{


    $('#weather-form').submit(()=>{
        event.preventDefault();
        var zipCode = $('#zip-code').val();
        console.log(zipCode);
    })


    var canvas = $('#weather-canvas');
    var context = canvas[0].getContext('2d');

    var assumedTemperature = 65;

    var currentPercent = 0;

    function animateCircle(currentArc){
        context.fillStyle = '#ccc';
        context.beginPath();
        context.arc(155,175,70,Math.PI*0,Math.PI*2);
        context.closePath();
        context.fill();

        context.lineWidth = 20;
        context.strokeStyle = '#395E66';
        context.beginPath();
        context.arc(155,175,80,Math.PI*1.5,(Math.PI*2*currentArc)+(Math.PI*1.5));
        context.stroke();
        currentPercent++
        if(currentPercent < assumedTemperature){
            requestAnimationFrame(()=>{
                animateCircle(currentPercent/100);
            })
        }
    }
    animateCircle();
})
