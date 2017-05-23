$(document).ready(()=>{

    const weatherApi ='http://api.openweathermap.org/data/2.5/weather';

    var canvas = $('#weather-canvas');
    var context = canvas[0].getContext('2d');
    var assumedTemperature = 65;
    var currentPercent = 0;
    line = 10;

    $('#weather-form').submit(()=>{
        event.preventDefault();
        var zipCode = $('#zip-code').val();
        var weatherData = weatherApi + '?zip=' + zipCode + ',us&units=imperial&appid=' +apiKey;
        $.getJSON(weatherData, (weatherData)=>{
            var currTemp = weatherData.main.temp;
            var temps = weatherData.main;

            var name = weatherData.name;
            var icon = weatherData.weather[0].icon + '.png';
            var newHtml = '<img src="http://openweathermap.org/img/w/' +icon+ '">';
            newHtml +='<div>' +name+ ' is currently ' +currTemp+ '&deg; F</div>';
            $('#temp-info').html(newHtml);
            context.clearRect(0,0,1000,1000);
            currentPercent = 0;
            line = 10;
            animateCircle(0,currTemp);
        })
    })


    // var canvas = $('#weather-canvas');
    // var context = canvas[0].getContext('2d');
    // var assumedTemperature = 65;
    // var currentPercent = 0;
    // line = 2;

    function animateCircle(currentArc, currentTemp){
        context.fillStyle = '#395E66';
        context.beginPath();
        context.arc(155,175,70,Math.PI*0,Math.PI*2);
        context.closePath();
        context.fill();

        context.lineWidth = line;
        context.strokeStyle = '#32936F';
        context.beginPath();
        context.arc(155,175,80,Math.PI*1.5,(Math.PI*2*currentArc)+(Math.PI*1.5));
        context.stroke();
        currentPercent++
        line++
        if(currentPercent < currentTemp){
            requestAnimationFrame(()=>{
                animateCircle(currentPercent/100,currentTemp);
            })
        }
    }
    // animateCircle();
})
