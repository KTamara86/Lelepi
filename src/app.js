
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