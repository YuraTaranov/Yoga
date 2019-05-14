function calc() {
    
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.textContent = 0;

    persons.addEventListener('input', function () {
        personsSum = +this.value;

        if (personsSum == 0 || personsSum == '') {
            total = 0;
        } else {
            total = (daysSum + personsSum) * 4000;
        }

        if (restDays.value == '' || restDays.value < 0) {
            totalValue.textContent = 0;
            console.log('Не введено количество дней');
        } else {
            totalValue.textContent = total;
        }
    });

    restDays.addEventListener('input', function () {
        daysSum = +this.value;

        if (daysSum == 0 || daysSum == '') {
            total = 0;
        } else {
            total = (daysSum + personsSum) * 4000;
        }

        if (persons.value == '' || persons.value < 0) {
            totalValue.textContent = 0;
            console.log('Не введено количество человек');
        } else {
            totalValue.textContent = total;
        }
    });

    place.addEventListener('input', function () {
        if (restDays.value == '' || persons.value == '' || persons.value < 0 || restDays.value < 0) {
            totalValue.textContent = 0;
        } else {
            let a = total;
            totalValue.textContent = a * this.options[this.selectedIndex].value;
        }
    });
}

module.exports = calc;