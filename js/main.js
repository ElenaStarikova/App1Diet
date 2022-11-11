
function appDiet (parent) {   
//    window.addEventListener('hashchange', function(e) {
//         console.log(e);
//         openPage()
//     });
    // delete localStorage.page
    if (localStorage.page == undefined) {
        localStorage.page = ""
    }
    function openPage() {
        console.log(localStorage.page)
        if (localStorage.page == "#daySchedule") {
            console.log(2)
            daySchedule(questions[localStorage.questionCount])
        }
        else if (localStorage.page == "") {
            nextDay()
        } else if (localStorage.page == "#good") {
            good()
        } else if (localStorage.page == "#wrong") {
            wrong()
        } else if (localStorage.page == "#sport") {
            console.log(3)
            sport(sportFacts[localStorage.questionCount])
        } else if (localStorage.page == "#dayChange") {
            dayChange(dietFacts[localStorage.questionCount])
        } else if (localStorage.page == "#finish") {
            finish()
        }
        else if (localStorage.page == "#game") {
            game()
        }
        else if (localStorage.page == "#nextDay") {
            nextDay()
        }
    }



    if (!("questionCount" in localStorage)) { //есть ли в локалсторадж(объект встроен в браузер, всегда есть) ключ квестион каунт, ! false меняет на true, т.е  сначала нет квестионкаунт ! меняет это на true и запускает действие в условие.
        localStorage.questionCount = 0
        console.log(1)
    }


    openPage()


    //заголовок, текст, кнопка
    function nextDay() {
        parent.innerHTML = ""
        let h1 = document.createElement("h1")
        parent.appendChild(h1)
        h1.classList.add("text-h1")
        h1.innerHTML = "Привет! Начинаем новый день!"

    
        let h3 = document.createElement("h3")
        parent.appendChild(h3) 
        h3.classList.add("text-h3")
        h3.innerHTML = "День" + " " + (parseFloat(localStorage.questionCount) + 1) 

        let div = document.createElement("div")
        parent.appendChild(div)
        div.classList.add("pict")

        let button = document.createElement("button")
        parent.appendChild(button)
        button.classList.add("button")
        // button.innerHTML.classList.add("button-text")
        button.innerHTML = "Далее"

        // при нажатии на кнопку переходим в режим дня
        function onButtonClick () {
            // localStorage.page = "#daySchedule"
            localStorage.page = "#daySchedule"
            openPage()
        }
        button.addEventListener("click", onButtonClick)
        
    }

    function good () {
        // строка удаляет все что было в body
        parent.innerHTML = ""
        // на экране появляется надпись Молодец
        let p = document.createElement("p")
        parent.appendChild(p)
        p.innerHTML = "Молодец!"
        p.classList.add("p-greatings")

        let div = document.createElement('div')
        parent.appendChild(div)
        div.classList.add("pict_good")

        // переход на экран спорт через 3 сек
        
        
        setTimeout(function () {
            localStorage.page = "#sport"
            openPage()
        }, 3000)  
   
    }

    function wrong () {
        parent.innerHTML = ""
        // на экране появляется надпись Подумай еще
        let p = document.createElement("p")
        parent.appendChild(p)
        p.classList.add("p-greatings")
        p.innerHTML = "Подумай еще" 

        let div = document.createElement('div')
        parent.appendChild(div)
        div.classList.add("pict_wrong")
        // вновь появляется вопрос с выбором вариантов ответа
        
        setTimeout(function () {
            localStorage.page = "#daySchedule"
            openPage()
        }, 3000)
    }

    // в аргумент функции попадает первый элемент массива(вопрос со всеми вариантами ответов)
    function daySchedule (question) {
        console.log(1)
        parent.innerHTML = ""
        // режим дня: текст и 3 кнопки
        let p = document.createElement("p")
        parent.appendChild(p)
        p.classList.add("p-questions")
        p.innerHTML = question.text

        button(question.answers[0], "button1")
        button(question.answers[1], "button3")
        button(question.answers[2], "button4")



        function button (answer, className) {
            let button1 = document.createElement("button")
            parent.appendChild(button1)
            button1.classList.add(className)
            button1.innerHTML = answer.text
            // button1.dataset.isCorrect = answer.isCorrect
            // при выборе правильного ответа выходит экран Молодец
            button1.addEventListener("click", function() {
                if (answer.isCorrect) {
                    localStorage.page = "#good"
                    openPage()
                }
                else {
                    localStorage.page = "#wrong"
                    openPage()
                }
            })       
        }
    }
    function delay () {
        parent.innerHTML = ""
        let p1 = document.createElement("p")
        parent.appendChild(p1) 
        p1.classList.add("text-h1")
        p1.innerHTML = "Программа следующего дня будет доступна завтра"

    }

    // похвала за пройденную игру, факт о пище, кнопка следующий день. Функция должна включится по окончанию игры
    function dayChange (diet) {
        // строка удаляет все что было в body
        parent.innerHTML = ""
        let h1 = document.createElement("h1")
        parent.appendChild(h1)
        h1.classList.add("text-h1")
        h1.innerHTML = "Ты правильно выбрал продукты!"

        let p = document.createElement("p")
        parent.appendChild(p) 
        p.classList.add("text-h2")
        p.innerHTML = diet.text

        let div1 = document.createElement("div")
        parent.appendChild(div1)
        div1.classList.add("sport-pictures")
        div1.style.backgroundImage = "url(" + diet.picture + ")"

        // let img = document.createElement("img")
        // parent.appendChild(img)
        // img.src = diet.picture
        // img.classList.add("sport-pictures")

        let div = document.createElement("div")
        parent.appendChild(div) 
        div.classList.add("timer")
        
        

        let button5 = document.createElement("button")
        parent.appendChild(button5)
        button5.classList.add("button2")
        button5.classList.add("button2--disabled")
        // button.innerHTML.classList.add("button-text")
        button5.innerHTML = "Далее"

    

        // Таймер

        let timer = {
            elem: div,
            dateStart: localStorage.dayChangeDate,
            duration: 5000,
            // duration: 10 * 1000 * 60 * 60,
            hourLeft () {
                return Math.floor(this.minuteLeft() / 60) 
                //  милисек = 1000 умножить на 60 секунд умножить на 60 
            },
            minuteLeft () {
                return Math.floor(this.secundLeft() / 60)
            },
            secundLeft () {
                return Math.floor(this.milisecLeft() / 1000)
            },
            milisecGone () {
                return Date.now() - this.dateStart //этот объект
            },
            milisecLeft () {
                return this.duration - this.milisecGone()
            },
            timeString () {
                return Math.max(this.hourLeft(), 0) + ":" + Math.max(this.minuteLeft(), 0) + ":" + Math.max(this.secundLeft(), 0)
            },
            // (this.hourLeft(), 0) -выбирает максимальное , если ушло в минус выберет 0 
            start () {
                let self = this
                let intervalId = setInterval(timeShow, 1000)
                timeShow()
                
                function timeShow() {
                    self.elem.innerHTML = self.timeString()
                    if (self.milisecLeft() > 0) {
                        
                    }
                    else {
                        clearInterval(intervalId)
                        self.onEnd()
                    }
                }
            },
            onEnd () {
                button5.classList.remove("button2--disabled")
                // переход на экран номер дня с кнопкой Далее
                button5.addEventListener("click", onButton)
            }

        }
        timer.start() 

    } 
    // // функция onButton 2 раза в коде - из экрана Похвалы и из экрана Игры

    // задержка 3 секунды перед переходом на следующий экран о спорте
    function sport(sport) {
        console.log(1)
        
        // строка удаляет все что было в body
        parent.innerHTML = ""
        // на экране появляется факт о спорте
        let p = document.createElement("p")
        parent.appendChild(p)
        p.classList.add("p-sport")
        p.innerHTML = sport.text


        // кнопка Далее
        let button4 = document.createElement("button")
        parent.appendChild(button4)
        button4.classList.add("button")
        button4.innerHTML = "Далее"
        // экран игры
        button4.addEventListener("click", function() {
            localStorage.page = "#game"
            openPage()
            })
        // let img = document.createElement("img")
        // parent.appendChild(img)
        // img.src = sport.picture
        // img.classList.add("sport-pictures")
        
        let div1 = document.createElement("div")
        parent.appendChild(div1)
        div1.classList.add("sport-pictures")
        div1.style.backgroundImage = "url(" + sport.picture + ")"
        
    }        
            


    function game () {
        // строка удаляет все что было в body
        parent.innerHTML = "GAME"
        // !!! на экране появляется  игра


        let buttonGame = document.createElement("button")
        parent.appendChild(buttonGame)
        buttonGame.classList.add("button")
        buttonGame.innerHTML = "Далее"
        buttonGame.addEventListener("click", function () {
            localStorage.dayChangeDate = Date.now() //количество милисек которое прошло с 1 января 1970, меняем свойство объекта localStorage в глобальной области, поэтому к ней можно обращаться из любой области
            localStorage.page = "#dayChange"
            openPage()
    })
    }
        
    function onButton () {
        
            //вывод последнего экрана в зависимости от номера вопроса
            // если не последний день
        if (parseFloat(localStorage.questionCount) < questions.length - 1) {
            // if (Date.now() - localStorage.dayChangeDate > 5000) { -эта проверка уже не нужна тк кнопка не активна, когда активна всегда будет true
            localStorage.questionCount++  
            localStorage.page = "#nextDay"    
            openPage()           
            
        }
        else {
            localStorage.page = "#finish"
            openPage()
        }
            
    }    


    function finish () {
        parent.innerHTML = ""
        let h1 = document.createElement("h1")
        parent.appendChild(h1)
        h1.classList.add("text-h1")
        h1.innerHTML = "Поздравляю! Ты прошел весь путь!"

        let p = document.createElement("p")
        parent.appendChild(p) 
        p.classList.add("text-h3")
        p.innerHTML = "Помни, что правильное питание и режим дня - это залог твоей красоты, здоровья и успеха!"
    }

}

