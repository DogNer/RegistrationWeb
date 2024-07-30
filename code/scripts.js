const form = document.querySelector('.main-part');
var arrayRadius = [5, 10, 9, 6];
var arrayCircle = [];

// var circle = document.createElement("div");
// circle.innerHTML = '<div class="card-circle"></div>'
// form.appendChild(circle);
//
// var circle = document.createElement("div");
// circle.innerHTML = '<div class="card-circle"></div>'
// circle.style.transform = "translate(50px, 50px)";
// form.appendChild(circle);

let arr = [[0, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];
for(let i = 0; i < 5; ++i){
    var circle = document.createElement("div");
    circle.className = 'card-circle';
    circle.style.height = arrayRadius[i] * 2 + "px";
    circle.style.width = arrayRadius[i] * 2 + "px";

    let [m, n] = locationCircle(arrayRadius[i]);
    circle.style.transform = "translate(" + m + "px, " + n + "px)";
    form.appendChild(circle);
    arrayCircle.push(circle);
}

isIntersect(3, 3, 4);

function getRandomNumber(min, max){
    return Math.random() * (max - min) + min;
}

function locationCircle(radius){
    let length = getRandomNumber(20, 100);
    let angle = getRandomNumber(0, 360);

    let x = 0, y = 0;
    isIntersect(x, y, radius);
    //while () {
        x = length;
        y = length * Math.tan(angle * Math.PI / 180) * 2;
    //}

    return [x, y];
}

function isIntersect(x , y, radius){
    for (let i = 0; i < arrayCircle.length; ++i) {
        let cir = arrayCircle.at(i).getBoundingClientRect();
        let radiusCir = cir.width / 2;

        console.log(cir.left + " " + cir.top + " " + radiusCir);
        if (Math.sqrt(Math.pow(x - cir.left - radiusCir) +
                        Math.pow(y - cir.top - radiusCir)) < radius + radiusCir)
            return true;
    }

    return false;
}

