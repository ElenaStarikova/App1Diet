//заголовок, текст, кнопка


nextDay()

function nextDay() {
    document.body.innerHTML = ""
    let h1 = document.createElement("h1")
    document.body.appendChild(h1)
    h1.classList.add("text-h1")
    h1.innerHTML = "Привет"

    let h3 = document.createElement("h3")
    document.body.appendChild(h3) 
    h3.classList.add("text-h3")
    h3.innerHTML = "Это приложение У нас День 1"

    let button = document.createElement("button")
    document.body.appendChild(button)
    button.classList.add("button")
    // button.innerHTML.classList.add("button-text")
    button.innerHTML = "Далее"

    // при нажатии на кнопку переходим в режим дня
    function onButtonClick () {
        if (!("questionCount" in localStorage)) {
            localStorage.questionCount = 0
            console.log(1)
        }
        daySchedule(questions[localStorage.questionCount])
    }
    button.addEventListener("click", onButtonClick)
}


// в аргумент функции попадает первый элемент массива(вопрос со всеми вариантами ответов)
function daySchedule (question) {
    document.body.innerHTML = ""
    // режим дня: текст и 3 кнопки
    let p = document.createElement("p")
    document.body.appendChild(p)
    p.classList.add("p-text")
    p.innerHTML = question.text

    let button1 = document.createElement("button")
    document.body.appendChild(button1)
    button1.classList.add('button1')
    button1.innerHTML = question.answers[0].text
    

    // при выборе правильного ответа выходит экран Молодец
    button1.addEventListener("click", function() {
        // строка удаляет все что было в body
        document.body.innerHTML = ""
        // на экране появляется надпись Молодец
        let p = document.createElement("p")
        document.body.appendChild(p)
        p.innerHTML = "Молодец!"
        p.classList.add("p-greatings")
        localStorage.questionCount++
        // переход на экран спорт через 3 сек
        setTimeout(sport, 3000)     
    })

    let button2 = document.createElement("button")
    document.body.appendChild(button2)
    button2.classList.add('button1')
    button2.innerHTML = question.answers[1].text
    // при выборе неправильного ответа выходит экран Подумай еще
    button2.addEventListener("click", function() {
        // строка удаляет все что было в body
        document.body.innerHTML = ""
        // на экране появляется надпись Подумай еще
        let p = document.createElement("p")
        document.body.appendChild(p)
        p.classList.add("p-greatings")
        p.innerHTML = "Подумай еще" 
        // вновь появляется вопрос с выбором вариантов ответа
        
        setTimeout(function () {
            daySchedule(questions[localStorage.questionCount])
        }, 3000)
    })

    let button3 = document.createElement("button")
    document.body.appendChild(button3)
    button3.classList.add('button1')
    button3.innerHTML = question.answers[2].text
    // при выборе неправильного ответа выходит экран Подумай еще
    button3.addEventListener("click", function() {
        // строка удаляет все что было в body
        document.body.innerHTML = ""
        // на экране появляется надпись Подумай еще
        let p = document.createElement("p")
        document.body.appendChild(p)
        p.classList.add("p-greatings")
        p.innerHTML = "Подумай еще"
        // вновь появляется вопрос с выбором вариантов ответа
        setTimeout(function () {
            daySchedule(questions[localStorage.questionCount])
        }, 3000)
    })
}



// задержка 3 секунды перед переходом на следующий экран о спорте
function sport() {
    // строка удаляет все что было в body
    document.body.innerHTML = ""
    // на экране появляется факт о спорте
    let p = document.createElement("p")
    document.body.appendChild(p)
    p.classList.add("p-sport")
    p.innerHTML = "Спорт это хорошо" 
    // кнопка Далее
    let button4 = document.createElement("button")
    document.body.appendChild(button4)
    button4.classList.add("button")
    button4.innerHTML = "Далее"
     // при выборе правильного ответа выходит экран Молодец
    //  button4.addEventListener("click", function() {
    //     // строка удаляет все что было в body
    //     document.body.innerHTML = ""
    //     // !!! на экране появляется  игра
        // })
// похвала за пройденную игру, факт о пище, кнопка следующий день. Функция должна включится по окончанию игры
    button4.addEventListener("click", dayChange)
    function dayChange () {
        // строка удаляет все что было в body
        document.body.innerHTML = ""
        let h1 = document.createElement("h1")
        document.body.appendChild(h1)
        h1.classList.add("text-h1")
        h1.innerHTML = "Ты правильно выбрал продукты!"

        let p = document.createElement("p")
        document.body.appendChild(p) 
        p.classList.add("text-h3")
        p.innerHTML = "Факт про полезные и вредные продукты"

        let button5 = document.createElement("button")
        document.body.appendChild(button5)
        button5.classList.add("button")
        // button.innerHTML.classList.add("button-text")
        button5.innerHTML = "Далее"

        // задержка 8 часов перед включением следующего дня
        function delay () {
            document.body.innerHTML = ""
            let p1 = document.createElement("p")
            document.body.appendChild(p1) 
            p1.classList.add("text-h1")
            p1.innerHTML = "программа следующего дня будет доступна завтра"
        }

        button5.addEventListener("click", delay)

        // function nextDay () {
        //     document.body.innerHTML = ""
        //     let h1 = document.createElement("h1")
        //     document.body.appendChild(h1)
        //     h1.classList.add("text-h1")
        //     h1.innerHTML = "Привет"

        //     let h3 = document.createElement("h3")
        //     document.body.appendChild(h3) 
        //     h3.classList.add("text-h3")
        //     h3.innerHTML = "Это приложение"

        //     let button = document.createElement("button")
        //     document.body.appendChild(button)
        //     button.classList.add("button")
        //     // button.innerHTML.classList.add("button-text")
        //     button.innerHTML = "День 2"

        //     // переход на следующий вопрос по режиму дня
        //     button.addEventListener("click", daySchedule)
        // }
        setTimeout(nextDay, 5000)
    } 
}



