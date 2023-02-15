/*
File: app.js
Author: Kukta Tamara
Copyright: 2023, Kukta Tamara
Group: SZOFT I-1-E
Date: 2023-02-15
Github: https://github.com/KTamara86/
Licenc: GNU GPL
*/

const heightElem = document.querySelector('#height');
const widthElem = document.querySelector('#width');
const depthElem = document.querySelector('#depth');
const calcButtonElem = document.querySelector('#calcButton');
const areaElem = document.querySelector('#area');

calcButton.addEventListener('click',() => {
    let height = Number(heightElem.value);
    let width = Number(widthElem.value);
    let depth = Number(depthElem.value);
    let area = calcArea(height,width,depth);
    console.log(area);
    areaElem.value = area;
});

function calcArea(height,width,depth) {
    let area = (height*width*depth);
    return area;
}