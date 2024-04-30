const btn = document.getElementById('circle-icon')
const day = document.getElementById('form-dd')
const month = document.getElementById('form-mm')
const year = document.getElementById('form-yyyy')
const inputDay = document.getElementById('day')
const inputMonth = document.getElementById('month')
const inputYear = document.getElementById('year')
const form = document.getElementById('form')

btn.addEventListener('click', (e) => {
    e.preventDefault();

    isEmpty();
    isValed();
})

function isEmpty() {
    const inputDayValue = inputDay.value;
    const inputMonthValue = inputMonth.value;
    const inputYearValue = inputYear.value;

    if (inputDayValue === '') {
        setErrorFor(inputDay, 'This field is required');
        day.className = 'error active'
    }

    if (inputMonthValue === '') {
        setErrorFor(inputMonth, 'This field is required');
        month.className = 'error active'
    }

    if (inputYearValue === '') {
        setErrorFor(inputYear, 'This field is required');
        year.className = 'error active'
    }
}

let date = new Date()

function isValed() {
    const inputDayValue = inputDay.value;
    const inputMonthValue = inputMonth.value;
    const inputYearValue = inputYear.value;

    if (inputDayValue > 31) {
        setErrorFor(inputDay, 'Must be a valid day');
        day.className = 'active'
    }

    if (inputMonthValue > 12) {
        setErrorFor(inputMonth, 'Must be a valid month');
        month.className = 'error active'
    }

    if (inputYearValue > date.getFullYear()) {
        setErrorFor(inputYear, 'Must be in the past');
        year.className = 'error active'
    }
}

function setErrorFor(input, mensage) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    formControl.classList.add('error');
    small.innerText = mensage;
}