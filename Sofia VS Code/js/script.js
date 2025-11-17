let mas = false 
let i = 0

while (mas == false) {
    mas = confirm("Если соня самая лучшая нажми 'Ок'")

    if (mas == true) {
        alert("Правильно :3")
    }

    else if (mas == false && i == 0) {
        alert("Ты ахуел?")
        
    }

    else if (mas == false && i == 1) {
        alert ("Ебать ты мразь")
    }

    else if (mas == false && i == 2) {
        alert ("Ты в край ахуел")
    }

    else if (mas == false && i == 3) {
        alert ("Я тебя найду")
    }

    else if (mas == false && i == 4) {
        alert ("Ты просто ничтожен")
    }

    else {
        alert("...")
    }

    i++
}
