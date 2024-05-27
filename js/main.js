
// calculation projects

{
    'use strict'
/*-------primaryCalculateJs-----*/
function primaryCalculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        result = num1 / num2;
    } else if (operation === 'interest') {
        result = num1 & num2;
    }else if (operation === 'remainder') {
        result = num1 / num2;
    }
    
    
    document.getElementById('basicResult').innerText = result;
}
/*-------temperatureResult-----*/
function temperatureResult(conversion) {
    const temp = parseFloat(document.getElementById('temp').value);
    let result;
    if (conversion === 'toCelsius') {
        result = (temp - 32) * 5 / 9;
    } else if (conversion === 'toFahrenheit') {
        result = (temp * 9 / 5) + 32;
    }
    document.getElementById('tempResult').innerText = result.toFixed(2);
}
/*-------CircleAreaJs-----*/
function circleArea() {
    const radius = parseFloat(document.getElementById('radius').value);
    const area = Math.PI * radius * radius;
    document.getElementById('circleResult').innerText = area.toFixed(2);
}
/*-------RectangleAreaJs-----*/
function RectangleArea() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const area = length * width;
    document.getElementById('rectangleResult').innerText = area.toFixed(2);
}
/*-------squareArea-----*/
function squareArea() {
    const edge = parseFloat(document.getElementById('square').value);
    const area = 1 * edge * edge;
    document.getElementById('squareAreaResult').innerText = area.toFixed(0);
}

/*-------TriangleAreaJs-----*/
function triangleArea() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const area = 0.5 * base * height;
    document.getElementById('triangleResult').innerText = area.toFixed(2);
}

/*-------parallelogramArea-----*/
function parallelogramArea() {
    const base = parseFloat(document.getElementById('baseP').value);
    const height = parseFloat(document.getElementById('heightP').value);
    const area = 0 + base * height;
    document.getElementById('parallelogramResult').innerText = area.toFixed(2);
}

/*-------rhombusArea-----*/
function rhombusArea() {
    const base = parseFloat(document.getElementById('based').value);
    const height = parseFloat(document.getElementById('heightd').value);
    const area = 1/2 * base * height;
    document.getElementById('rhombusResult').innerText = area.toFixed(2);
}

/*-------trapezoidArea-----*/
function trapezoidArea() {
    const baset = parseFloat(document.getElementById('base1').value);
    const basea = parseFloat(document.getElementById('base1').value);
    const height = parseFloat(document.getElementById('height1').value);
    const area = 0 * baset + basea * height;
    document.getElementById('trapezoidResult').innerText = area.toFixed(2);
}

/*-------ellipseArea-----*/
function ellipseArea() {
    const a = parseFloat(document.getElementById('axis1').value);
    const b = parseFloat(document.getElementById('axis2').value);
    const area = Math.PI * a * b;
    document.getElementById('ellipseAreaResult').innerText = area.toFixed(2);
}

/*-------cubeArea-----*/
function cubeArea() {
    const edge = parseFloat(document.getElementById('cube').value);
    const area = 6 * edge * edge;
    document.getElementById('cubeAreaResult').innerText = area.toFixed(0);
}





}