let jsonList = [
    {
        "title": "Негрони",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/55/icon_1629728461-%D0%9D%D0%B5%D0%B3%D1%80%D0%BE%D0%BD%D0%B8.jpg"
    },
    {
        "title": "Апероль Шприц",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/1098/icon_1537863520-Aperol_spritz-HiRes.jpg"
    },
    {
        "title": "Джин тоник",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/368/icon_1629735247-%D0%94%D0%B6%D0%B8%D0%BD_%D1%82%D0%BE%D0%BD%D0%B8%D0%BA.jpg"
    },
    {
        "title": "Мохито",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/57/icon_Bacardi_shooting_5_800.jpg"
    },
    {
        "title": "Маргарита",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/39/icon_1629726330-%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0.jpg"
    },
    {
        "title": "Персиковый сауэр",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/1490/icon_1695557602-%D0%9F%D0%B5%D1%80%D1%81%D0%B8%D0%BA%D0%BE%D0%B2%D1%8B%D0%B8%CC%86_%D0%A1%D0%B0%D1%83%D1%8D%D1%80.jpg"
    },
    {
        "title": "Дайкири",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/22/icon_1629712406-%D0%94%D0%B0%D0%B8%CC%86%D0%BA%D0%B8%D1%80%D0%B8.jpg"
    },
    {
        "title": "Спасибо за прошлый раз",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/1414/icon_1557234426-Takk_for_sist_800.jpg"
    },
    {
        "title": "Ром с яблочным соком",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/777/icon_1540547877-Rum-with-Apple-Juice__highres.jpg"
    },
    {
        "title": "Шоколадный океан",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/1452/icon_1557236414-Chocolate_Ocean_800.jpg"
    },
    {
        "title": "Алко-шашки",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/142/icon_Alco-Checkers__highres.jpg"
    },
    {
        "title": "Мохито малиновый",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/634/icon_1557239259-Raspberry_mojito-highres.jpg"
    },
    {
        "title": "Розовый сад",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/1176/icon_1537775165-Rose_garden_800.jpg"
    },
    {
        "title": "Растафарай",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/744/icon_1556802015-Rastafari__highres.jpg"
    },
    {
        "title": "Кокосовое яблоко",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/490/icon_1557245644-Metropolis__highres.jpg"
    },
    {
        "title": "Бандунг свизл",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/1448/icon_1556304432-4_800.jpg"
    },
    {
        "title": "Куба либре",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/33/icon_1629717664-%D0%9A%D1%83%D0%B1%D0%B0_%D0%BB%D0%B8%D0%B1%D1%80%D0%B5.jpg"
    },
    {
        "title": "Северное сияние",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/808/icon_1556449126-Northern-Lights__highres.jpg"
    },
    {
        "title": "Выбор бармена",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/1308/icon_1556630210-Bartender_choice-HiREs.jpg"
    },
    {
        "title": "Олд фешен с текилой",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/669/icon_1556301873-The-Truman-Show__highres.jpg"
    },
    {
        "title": "Яблочный мармелад",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/1004/icon_1556463495-Apple-Marmalade__highres.jpg"
    },
    {
        "title": "Френч 75",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/42/icon_1629734008-%D0%A4%D1%80%D0%B5%D0%BD%D1%87_75.jpg"
    },
    {
        "title": "Тундра спритц",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/1488/icon_1695669055-%D0%A2%D1%83%D0%BD%D0%B4%D1%80%D0%B0_%D0%A8%D1%80%D0%B8%D1%86.jpg"
    },
    {
        "title": "Папочка",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/696/icon_1557229971-Daddy__highres.jpg"
    },
    {
        "title": "Отведи меня домой",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/1257/icon_1538166598-Take_me_home-HiRes.jpg"
    },
    {
        "title": "Тропический лимонад в кувшине",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/491/icon_tropical-lemonade-highres.jpg"
    },
    {
        "title": "Бьянко санрайз",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/237/icon_1557242288-Hachiko__highres.jpg"
    },
    {
        "title": "Сеньорита",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/821/icon_1540546248-Se_orita__highres.jpg"
    },
    {
        "title": "Писко сауэр",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/60/icon_1629732674-%D0%9F%D0%B8%D1%81%D0%BA%D0%BE_%D1%81%D0%B0%D1%83%D1%8D%D1%80.jpg"
    },
    {
        "title": "Малиновый пиджак шутер",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/569/icon_1556818115-Crimson-Jacket__highres.jpg"
    },
    {
        "title": "Бешеная собака",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/1477/icon_1570711820-6.jpg"
    },
    {
        "title": "Античный дайкири",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/81/icon_1556636531-Ancient-Daiquiri-w800px.jpg"
    },
    {
        "title": "Авиация",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/90/icon_1629707456-%D0%90%D0%B2%D0%B8%D0%B0%D1%86%D0%B8%D1%8F.jpg"
    },
    {
        "title": "Классический лимонад в кувшине",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/473/icon_just-lemonade-highres.jpg"
    },
    {
        "title": "Московская лихорадка",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/627/icon_1556725901-Sandthorn-Fever__highres.jpg"
    },
    {
        "title": "Маргарита клубничная",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/677/icon_1557231404-Strawberry_Margarita-highres.jpg"
    },
    {
        "title": "Крутая пощечина",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/1439/icon_1556637561-5_800.jpg"
    },
    {
        "title": "Джи&Ит",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/1133/icon_1556466812-G_IT-HiRes.jpg"
    },
    {
        "title": "Виски физз",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/266/icon_1557244467-Whisky-Collins__highres.jpg"
    },
    {
        "title": "Рафаэлло",
        "img": "https://ru.inshaker.com/uploads/cocktail/hires/746/icon_1556798951-Raffaello__highres.jpg"
    }
];

const form = document.querySelector('.main-part');
var arrayRadius = [30, 20, 50, 40];
var arrayCircle = [];

// var circle = document.createElement("div");
// circle.innerHTML = '<div class="card-circle"></div>'
// form.appendChild(circle);
//
// var circle = document.createElement("div");
// circle.innerHTML = '<div class="card-circle"></div>'
// circle.style.transform = "translate(50px, 50px)";
// form.appendChild(circle);

for(let i = 0; i < 5; ++i) {
    let circle = document.createElement("div");
    circle.className = 'card-circle';
    circle.style.height = 50 * 2 + "px";
    circle.style.width = 50 * 2 + "px";
    form.appendChild(circle);

    if (i != 0) {
        circle.style.transform = "translate(" + i * 100 + "px, 0px)";
    }

    let imageInside = document.createElement("img");
    imageInside.className = 'image-cocktails';
    circle.appendChild(imageInside);

    let list = document.getElementsByClassName('card-circle')[i];
    let item = list.getElementsByClassName('image-cocktails')[0]; // Changed this line
    item.src = jsonList[i].img;

    arrayCircle.push(circle);
}

// var list = document.getElementsByClassName('card-circle')[0];
// var item = list.getElementsByClassName('image-cocktails')[0];
// item.src = jsonList.at(0).img;
console.log();

// function getRandomNumber(min, max){
//     return Math.random() * (max - min) + min;
// }
//
// function locationCircle(circle){
//     let sizeRect = 200;
//     let x = getRandomNumber(-sizeRect, sizeRect);
//     let y = getRandomNumber(-sizeRect, sizeRect);
//
//     if (isIntersect(x, y, circle) == 1) {
//         x = getRandomNumber(-sizeRect, sizeRect);
//         y = getRandomNumber(-sizeRect, sizeRect);
//     }
//
//     return [x, y];
// }
//
// function isIntersect(x , y, circle){
//     let circleCheck = circle.getBoundingClientRect();
//     let radius = circleCheck.width / 2;
//     for (let i = 0; i < arrayCircle.length; ++i) {
//         let cir = arrayCircle.at(i).getBoundingClientRect();
//         let radiusCir = cir.width / 2;
//
//         //console.log(i);
//         console.log(Math.pow(circleCheck.x + radius - cir.x - radiusCir, 2) + " " +( radius + radiusCir));
//         if (Math.sqrt(Math.pow(circleCheck.x + radius - cir.x - radiusCir, 2) +
//                         Math.pow(circleCheck.y + radius - cir.y - radiusCir, 2)) < radius + radiusCir){
//             console.log("yes");
//             return 1;
//         }
//     }
//     return 0;
// }
