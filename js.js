const get = ['get married',
    'get divorced',
    'get drunk',
    'get old',
    'get cold',
    'get some shut-eye',
    'get out of my face',
    'get one’s teeth into something',
    'get one’s lumps',
]
const getTranslation = [
    'пожениться',
    'развестись',
    'напиться',
    'стареть',
    'замерзать',
    'наслаждаться',
    'вон с глаз моих',
    'уйти с головой в какое-либо занятие',
    'получить по заслугам, потерпеть поражение',
]
const take = [
    'Take off',
    'Take up',
    'Take after',
    'Take out',
    'Take in',
    'Take back',
    'Take down',
    'Take on',
    'Take over',
]
const takeTranslation = [
    'снимать одежду/взлетать',
    'начать заниматься чем-то',
    'быть похожим на',
    'вывести (в свет)',
    'понять, осознать',
    'возвращать',
    'снимать, убирать, записывать',
    'брать на работу',
    'вступать во владение',
]
const give = [
    'Give up',
    'Give away',
    'Give over',
    'Give over to',
    'Give in',
    'Give out',
    'Give back',
    'Give off ',
    'Give onto',
]
const giveTranslation = [
    'сдаваться, бросать',
    'выдавать (секрет)',
    'переставать, бросать',
    'посвящать (себя)',
    'уступать, сдаваться',
    'объявлять выдавать',
    'отдавать',
    'производить, вырабатывать',
    'выходить, иметь вид на',
]

const poslovica = [
    {
        poslov: 'Don’t cross the bridge until you come to it',
        transl: 'Не говори «гоп», пока не перепрыгнешь',
    },
    {
        poslov: 'Don’t make a mountain out of an anthill',
        transl: 'Не делай из мухи слона',
    },
    {
        poslov: 'The cat is out of the bag. / Truth will out',
        transl: 'Все тайное всегда становится явным',
    },
    {
        poslov: 'Put your best foot forward',
        transl: 'Пытайся произвести наилучшее впечатление (предстать в наилучшем свете)',
    },
    {
        poslov: 'It’s better to be safe than sorry',
        transl: 'Береженого Бог бережет',
    },
    {
        poslov: 'Don’t bite off more than you can chew',
        transl: 'Не зарься на кусок, который не проглотишь. / Не бери на себя слишком много',
    },
    {
        poslov: 'Still waters run deep',
        transl: 'В тихом омуте черти водятся',
    },
]

const btn = document.querySelector('.button')
const outPut = document.querySelector('.output')


btn.addEventListener('click', function () {

    const select = document.querySelector('#selectverb')
    switch (select.value) {
        case 'get': {
            const index = giveRandomIndex(get)
            outPut.innerHTML = get[index] + '  -  ' + getTranslation[index]

            break;
        }
        case 'take': {
        const index = giveRandomIndex(take)
        outPut.innerHTML = take[index] + '  -  ' + takeTranslation[index]

            break;
        }

        case 'give':{

            const index = giveRandomIndex(give)
             outPut.innerHTML = give[index] + '  -  ' + giveTranslation[index]

            break;}

        case 'proverb':
        const index = giveRandomIndex(poslovica)
        outPut.innerHTML =  poslovica[index].poslov + '  -  ' +  poslovica[index].transl

            break;


        default: outPut.innerHTML = "Sorry, there is nothing selected"

    }

})
function giveRandomIndex(arr) {
    let randNumber = Math.floor(Math.random() * arr.length);
    return randNumber;
}




