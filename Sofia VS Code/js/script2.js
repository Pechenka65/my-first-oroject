const ButtonElement = document.querySelector('.yes')

const logMassage = () => {
    alert('Спасибо! :D')
}

ButtonElement.onclick = logMassage

const ButtonElement2 = document.querySelector('.no')

const logMassage2 = () => {
    alert('Спасибо, я ценю твое мнение! :3')
}

ButtonElement2.onclick = logMassage2