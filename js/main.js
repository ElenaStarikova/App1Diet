window.addEventListener('hashchange', function(e) {
    console.log(e);
    openPage()
});

function openPage() {
    if (location.hash == "#daySchedule") {
        daySchedule(questions[localStorage.questionCount])
    }
    else if (location.hash == "") {
        nextDay()
    } else if (location.hash == "#good") {
        good()
    } else if (location.hash == "#wrong") {
        wrong()
    } else if (location.hash == "#sport") {
        sport(sportFacts[localStorage.questionCount])
    } else if (location.hash == "#dayChange") {
        dayChange(dietFacts[localStorage.questionCount])
    } else if (location.hash == "#finish") {
        finish()
    }
    else if (location.hash == "#game") {
        game()
    }
    else if (location.hash == "#nextDay") {
        nextDay()
    }
}



if (!("questionCount" in localStorage)) { //есть ли в локалсторадж(объект встроен в браузер, всегда есть) ключ квестион каунт, ! false меняет на true, т.е  сначала нет квестионкаунт ! меняет это на true и запускает действие в условие.
    localStorage.questionCount = 0
    console.log(1)
}


openPage()
// nextDay()

//заголовок, текст, кнопка
function nextDay() {
    document.body.innerHTML = ""
    let h1 = document.createElement("h1")
    document.body.appendChild(h1)
    h1.classList.add("text-h1")
    h1.innerHTML = "Привет! Начинаем новый день!"

   
    let h3 = document.createElement("h3")
    document.body.appendChild(h3) 
    h3.classList.add("text-h3")
    h3.innerHTML = "День" + " " + (parseFloat(localStorage.questionCount) + 1) 

    let button = document.createElement("button")
    document.body.appendChild(button)
    button.classList.add("button")
    // button.innerHTML.classList.add("button-text")
    button.innerHTML = "Далее"

    // при нажатии на кнопку переходим в режим дня
    function onButtonClick () {
        location.hash = "#daySchedule"
    }
    button.addEventListener("click", onButtonClick)
    
}

function good () {
    // строка удаляет все что было в body
    document.body.innerHTML = ""
    // на экране появляется надпись Молодец
    let p = document.createElement("p")
    document.body.appendChild(p)
    p.innerHTML = "Молодец!"
    p.classList.add("p-greatings")
    // переход на экран спорт через 3 сек
    setTimeout(function () {
        location.hash = "#sport"
    }, 3000)  
}

function wrong () {
    document.body.innerHTML = ""
    // на экране появляется надпись Подумай еще
    let p = document.createElement("p")
    document.body.appendChild(p)
    p.classList.add("p-greatings")
    p.innerHTML = "Подумай еще" 
    // вновь появляется вопрос с выбором вариантов ответа
    
    setTimeout(function () {
        location.hash = "#daySchedule"
    }, 3000)
}

// в аргумент функции попадает первый элемент массива(вопрос со всеми вариантами ответов)
function daySchedule (question) {
    document.body.innerHTML = ""
    // режим дня: текст и 3 кнопки
    let p = document.createElement("p")
    document.body.appendChild(p)
    p.classList.add("p-text")
    p.innerHTML = question.text

    button(question.answers[0])
    button(question.answers[1])
    button(question.answers[2])



    function button (answer) {
        let button1 = document.createElement("button")
        document.body.appendChild(button1)
        button1.classList.add('button1')
        button1.innerHTML = answer.text
        // button1.dataset.isCorrect = answer.isCorrect
         // при выборе правильного ответа выходит экран Молодец
        button1.addEventListener("click", function() {
            if (answer.isCorrect) {
                location.hash = "#good"
            }
            else {
                location.hash = "#wrong"
            }
        })       
    }
}
function delay () {
    document.body.innerHTML = ""
    let p1 = document.createElement("p")
    document.body.appendChild(p1) 
    p1.classList.add("text-h1")
    p1.innerHTML = "Программа следующего дня будет доступна завтра"

}

// похвала за пройденную игру, факт о пище, кнопка следующий день. Функция должна включится по окончанию игры
function dayChange (diet) {
    // строка удаляет все что было в body
    document.body.innerHTML = ""
    let h1 = document.createElement("h1")
    document.body.appendChild(h1)
    h1.classList.add("text-h1")
    h1.innerHTML = "Ты правильно выбрал продукты!"

    let p = document.createElement("p")
    document.body.appendChild(p) 
    p.classList.add("text-h3")
    p.innerHTML = diet.text

    // let div = document.createElement("div")
    // document.body.appendChild(div) 
    // div.classList.add()
    
    

    let button5 = document.createElement("button")
    document.body.appendChild(button5)
    button5.classList.add("button")
    // button.innerHTML.classList.add("button-text")
    button5.innerHTML = "Далее"

    // переход на экран номер дня с кнопкой Далее
    button5.addEventListener("click", onButton)

//     // Таймер
//     let timer = {
//         elem: div,
//         dateStart: Date.now(),
//         duration: 5000,
//         hourLeft () {
//             return this.minuteLeft() / 60
//         },
//         minuteLeft () {
//             return this.secundLeft() / 60
//         },
//         secundLeft () {
//             return this.milisecLeft() / 1000
//         } ,
//         milisecGone () {
//             return Date.now() - this.dateStart //этот объект
//         },
//         milisecLeft () {
//             return this.duration - this.milisecGone
//         },
//         start () {

//         },
//         onEnd () {

//         }

//     }
//     timer.start() {

//     }
} 
// // функция onButton 2 раза в коде - из экрана Похвалы и из экрана Игры

// задержка 3 секунды перед переходом на следующий экран о спорте
function sport(sport) {
    
    // строка удаляет все что было в body
    document.body.innerHTML = ""
    // на экране появляется факт о спорте
    let p = document.createElement("p")
    document.body.appendChild(p)
    p.classList.add("p-sport")
    p.innerHTML = sport.text
    // кнопка Далее
    let button4 = document.createElement("button")
    document.body.appendChild(button4)
    button4.classList.add("button")
    button4.innerHTML = "Далее"
     // экран игры
     button4.addEventListener("click", function() {
        location.hash = "game"
        })
}        
        


function game () {
    // строка удаляет все что было в body
    document.body.innerHTML = "GAME"
    // !!! на экране появляется  игра
    let buttonGame = document.createElement("button")
    document.body.appendChild(buttonGame)
    buttonGame.classList.add("button")
    buttonGame.innerHTML = "Далее"
    buttonGame.addEventListener("click", function () {
        localStorage.dayChangeDate = Date.now() //количество милисек которое прошло с 1 января 1970
        location.hash = "#dayChange"
})
}
       
function onButton () {
    
        //вывод последнего экрана в зависимости от номера вопроса
        // если не последний день
    if (parseFloat(localStorage.questionCount) < questions.length - 1) {
        if (Date.now() - localStorage.dayChangeDate > 5000) {
           localStorage.questionCount++  
           location.hash = "#nextDay"               
        }  
        else {
            delay()
            //location.hash = "#dayChange"
        }
    }        
    else {
        location.hash = "#finish"
    }
        
}    


function finish () {
    document.body.innerHTML = ""
    let h1 = document.createElement("h1")
    document.body.appendChild(h1)
    h1.classList.add("text-h1")
    h1.innerHTML = "Поздравляю! Ты прошел весь путь!"

    let p = document.createElement("p")
    document.body.appendChild(p) 
    p.classList.add("text-h3")
    p.innerHTML = "Помни, что правильное питание и режим дня - это залог твоей красоты, здоровья и успеха!"
}



