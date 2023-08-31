function calculateTriangleArea(){

    // get triangle base value 
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    // get triangle height value
    const hieghtField = document.getElementById('triangle-height');
    const heightValueText = hieghtField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    // calculate area
    const area = 0.5* base*height;
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

    // add area calculation entry

    addToCalculationEntry('Triangle', area);


}

function calculateRectangleArea(){
    // get rectangle width 

    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    // get rectangle lenght 

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    // validate input 

    if(isNaN(width) || isNaN(length)){
        alert('plesase insert a number');
        return ;
    }

    // calculate area
    const area = width*length;
    console.log(area);

    // show ractangle area 
    const ractangleAreaSpan = document.getElementById('rectangle-area');
    ractangleAreaSpan.innerText = area;

     // add area calculation entry
    
     addToCalculationEntry('Rectangle', area);


}

// reuseable Function ------> reduce duplicate code 

function calculatePrallelogramArea(){
    const base = getInputValue('parallelogram-base');
    console.log(base);

    const height = getInputValue('parallelogram-height');
    console.log(height);

    // validate 
    if(isNaN(base) || isNaN(height)){
        alert('please provide a number');
        return ;
    }

    const area = base*height;
    setElementInnerText('parallelogram-area', area);

    // add to calculation entry

    addToCalculationEntry('parallelogram',area);



}

   // Ellipse function

function calculateEllipseArea(){
    const firstRadius = getInputValue('ellipse-first-radius');
    const secondRadius = getInputValue('ellipse-second-radius');
    const area = 3.1416*firstRadius*secondRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);

    // add calculation area
 
    addToCalculationEntry('Ellipse', area);


}

// Rhombus  function

function calculateRhombusArea(){
    const d1 = getInputValue('rhombus-d1');
    const d2 = getInputValue('rhombus-d2');
    const area = 0.5*d1*d2;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('rhombus-area', areaTwoDecimal);

    // add calculation area
 
    addToCalculationEntry('Rhombus', area);


}

// Pentagon  function

function calculatePentagonArea(){
    const p = getInputValue('pentagon-p');
    const b = getInputValue('pentagon-b');
    const area = 0.5*p*b;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('pentagon-area', areaTwoDecimal);

    // add calculation area
 
    addToCalculationEntry('Pentagon', area);


}

// reuseable get input value field in number

function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reuseable set span, p, div , text, etc...

function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;


}

 // add to calculation entry
    /*
    1. get the element where you want to add
    2. create an element you want to add
    3. if needed add some class 
    4. set innerhtml it could be dynamic template string

    */


    function addToCalculationEntry(areaType, area){
        const calculationEntry = document.getElementById('calculation-entry');
        const count = calculationEntry.childElementCount;

        const p = document.createElement('p');
        p.innerHTML =`${count +1}. ${areaType} ${area} cm <sup>2 </sup>`;

        calculationEntry.appendChild(p);
    }





