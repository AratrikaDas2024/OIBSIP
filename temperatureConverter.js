function convert_temperature() {
    document.getElementById("result").innerHTML = '';
    const input_temperature = parseFloat(document.getElementById('get_temp').value);
    if (isNaN(input_temperature)) {
        alert('Please enter a valid temperature !!');
        document.getElementById("result").innerHTML = '';
    }
    else {
        const unit = document.getElementById('unit').value;
        console.log(unit);
        let converted_temperature;
        if (unit === 'F') {
            converted_temperature = ((input_temperature - 32) / 9) * 5;
            document.getElementById("result").innerHTML = "Temperature in Celsius is : " + converted_temperature;
            console.log(converted_temperature);
        }
        else if (unit === 'C') {
            converted_temperature = ((input_temperature / 5) * 9) + 32;
            document.getElementById("result").innerHTML = "Temperature in Fahrenheit is : " + converted_temperature;
            console.log(converted_temperature);
        }
    }
}


