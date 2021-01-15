const get = [
    "get married",
    "get divorced",
    "get drunk",
    "get old",
    "get cold",
    "get some shut-eye",
    "get out of my face",
    "get one’s teeth into something",
    "get one’s lumps",
];
const getTranslation = [
    "пожениться",
    "развестись",
    "напиться",
    "стареть",
    "замерзать",
    "наслаждаться",
    "вон с глаз моих",
    "уйти с головой в какое-либо занятие",
    "получить по заслугам, потерпеть поражение",
];
const take = [
    "Take off",
    "Take up",
    "Take after",
    "Take out",
    "Take in",
    "Take back",
    "Take down",
    "Take on",
    "Take over",
];
const takeTranslation = [
    "снимать одежду/взлетать",
    "начать заниматься чем-то",
    "быть похожим на",
    "вывести (в свет)",
    "понять, осознать",
    "возвращать",
    "снимать, убирать, записывать",
    "брать на работу",
    "вступать во владение",
];
const give = [
    "Give up",
    "Give away",
    "Give over",
    "Give over to",
    "Give in",
    "Give out",
    "Give back",
    "Give off ",
    "Give onto",
];
const giveTranslation = [
    "сдаваться, бросать",
    "выдавать (секрет)",
    "переставать, бросать",
    "посвящать (себя)",
    "уступать, сдаваться",
    "объявлять выдавать",
    "отдавать",
    "производить, вырабатывать",
    "выходить, иметь вид на",
];

const poslovica = [
    {
        poslov: "Don’t cross the bridge until you come to it",
        transl: "Не говори «гоп», пока не перепрыгнешь",
    },
    {
        poslov: "Don’t make a mountain out of an anthill",
        transl: "Не делай из мухи слона",
    },
    {
        poslov: "The cat is out of the bag. / Truth will out",
        transl: "Все тайное всегда становится явным",
    },
    {
        poslov: "Put your best foot forward",
        transl:
            "Пытайся произвести наилучшее впечатление (предстать в наилучшем свете)",
    },
    {
        poslov: "It’s better to be safe than sorry",
        transl: "Береженого Бог бережет",
    },
    {
        poslov: "Don’t bite off more than you can chew",
        transl:
            "Не зарься на кусок, который не проглотишь. / Не бери на себя слишком много",
    },
    {
        poslov: "Still waters run deep",
        transl: "В тихом омуте черти водятся",
    },
];

const btn = document.querySelector(".button");
const outPut = document.querySelector(".output");
const check = document.getElementById("checkbox2");
const count = document.getElementById("quantity");
console.log(count.value);
let verb = "";
let translate = "";
let result = "";
check.addEventListener("change", () => {
    outPut.innerHTML = "";
    if (verb) {
        if (check.checked == true) {
            showResult(verbTransArr);
        } else {
            showResult(verbArr);
        }
    } else {
        outPut.innerHTML = "";
    }
});
function showResult(arr) {
    arr.forEach((element) => {
        outPut.innerHTML += element;
    });
}
let verbArr = [];
let verbTransArr = [];
btn.addEventListener("click", function () {

    verbArr = [];
    verbTransArr = [];

    const select = document.querySelector("#selectverb");
    switch (select.value) {
        case "get": {
            for (let i = 0; i <= count.value - 1; i++) {
                const index = giveRandomIndex(get);
                verb = get[index];
                translate = getTranslation[index];
                verbTransArr.push("<p>" + verb + "  -  " + translate + "</p>");
                verbArr.push("<p>" + get[index] + "</p>");
                outPut.innerHTML = "";
            }
            if (check.checked) {
                showResult(verbTransArr);
            } else {
                showResult(verbArr);
            }

            break;
        }
        case "take": {
            for (let i = 0; i < count.value; i++) {
                const index = giveRandomIndex(take);
                verb = take[index];
                translate = takeTranslation[index];
                verbTransArr.push("<p>" + verb + "  -  " + translate + "</p>");
                verbArr.push("<p>" + verb + "</p>");
                outPut.innerHTML = "";
            }

            if (check.checked == true) {
                showResult(verbTransArr);
            } else {
                showResult(verbArr);
            }
            break;
        }

        case "give": {
            for (let i = 0; i < count.value; i++) {
                const index = giveRandomIndex(give);
                verb = give[index];
                translate = giveTranslation[index];
                verbTransArr.push("<p>" + verb + "  -  " + translate + "</p>");
                verbArr.push("<p>" + verb + "</p>");
                outPut.innerHTML = "";
            }

            if (check.checked == true) {
                showResult(verbTransArr);
            } else {
                showResult(verbArr);
            }
            break;
        }

        case "proverb":
            for (let i = 0; i < count.value; i++) {
                const index = giveRandomIndex(poslovica);
                verb = poslovica[index].poslov;
                translate = poslovica[index].transl;
                verbTransArr.push("<p>" + verb + "  -  " + translate + "</p>");
                verbArr.push("<p>" + verb + "</p>");
                outPut.innerHTML = "";
            }

            if (check.checked == true) {
                showResult(verbTransArr)
            } else {
                showResult(verbArr)
            }
            break;

        default:
            outPut.innerHTML = "Sorry, there is nothing selected";
    }
});
function giveRandomIndex(arr) {
    let randNumber = Math.floor(Math.random() * arr.length);
    return randNumber;
}

const changePage = document.getElementById("checkbox");
const content = document.querySelector(".content");
const content2 = document.querySelector(".content2");
const lebel= document.getElementById('lebel')
changePage.addEventListener("change", function () {
    if (changePage.checked) {
        document.body.style.background = "black";
        content.style.display = "none";
        content2.style.display = "block";
        lebel.innerHTML='Learn one phrase a day'
        lebel.style.color='#fff'
    } else {

        document.body.style.background = "";
        content.style.display = "";
        content2.style.display = "";
        lebel.innerHTML="Random words";
        lebel.style.color="";
    }

});
const arr = [
['red', 'green', 'yellow', 'white', 'brown', 'grey',],
['cat', 'dog', 'bird', 'lion', 'tiger', 'fly',],
['walk', 'go', 'sweem', 'jump', 'tun', 'sleep',]
]
const btn2=document.getElementById('btn2')
const outPut2=document.getElementById('output2')
const count2=document.getElementById('count2')
btn2.addEventListener('click', ()=>{
result='';
outPut2.innerHTML='';
    for (let i = 0; i < count2.value; i++) {

   result+='<p>'+arr[0][giveRandomIndex(arr)]+' - '+arr[1][giveRandomIndex(arr)]+ ' - '+arr[2][giveRandomIndex(arr)]+'</p>'

}
outPut2.innerHTML=result
})
