//заголовок, текст, кнопка


nextDay()



function nextDay() {
    document.body.innerHTML = ""
    let h1 = document.createElement("h1")
    document.body.appendChild(h1)
    h1.classList.add("text-h1")
    h1.innerHTML = "Привет! Начинаем новый день!"

    let h3 = document.createElement("h3")
    document.body.appendChild(h3) 
    h3.classList.add("text-h3")
    h3.innerHTML = "День" + (parseFloat(localStorage.questionCount) + 1) 

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
                // строка удаляет все что было в body
                document.body.innerHTML = ""
                // на экране появляется надпись Молодец
                let p = document.createElement("p")
                document.body.appendChild(p)
                p.innerHTML = "Молодец!"
                p.classList.add("p-greatings")
                localStorage.questionCount++
                // переход на экран спорт через 3 сек
                setTimeout(function () {
                    sport(sportFacts[localStorage.questionCount])
                }, 3000)  
            }
            else {
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
            }
        })
       
    }
}




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
     // при выборе правильного ответа выходит экран Молодец
    //  button4.addEventListener("click", function() {
    //     // строка удаляет все что было в body
    //     document.body.innerHTML = ""
    //     // !!! на экране появляется  игра
        // })
// похвала за пройденную игру, факт о пище, кнопка следующий день. Функция должна включится по окончанию игры
    function onButton () {
        dayChange(dietFacts[localStorage.questionCount])
    }
    button4.addEventListener("click", onButton)
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
            p1.innerHTML = "Программа следующего дня будет доступна завтра"
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



