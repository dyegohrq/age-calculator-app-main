const btn = document.getElementById('circle-icon')
const day = document.getElementById('form-dd')
const month = document.getElementById('form-mm')
const year = document.getElementById('form-yyyy')
const inputDay = document.getElementById('day')
const inputMonth = document.getElementById('month')
const inputYear = document.getElementById('year')
const form = document.getElementById('form')
const numberYear = document.getElementById('number-year')
const numberMonth = document.getElementById('number-month')
const numberDay = document.getElementById('number-day')

let date = new Date();
let todayDay = date.getDate();
let todayMonth = date.getMonth() + 1;
let todayYear = date.getFullYear();

const numberOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

btn.addEventListener('click', (e) => {
    e.preventDefault();

    isEmpty();
    isValed();
})

function isEmpty() {
    let inputDayValue = inputDay.value;
    let inputMonthValue = inputMonth.value;
    let inputYearValue = inputYear.value;

    if (inputDayValue === '') {
        setErrorFor(inputDay, 'This field is required');
        day.className = 'error active'
    } else {
        setSuccessFor(inputDay);
        day.className = '';
        calcAge();
    }

    if (inputMonthValue === '') {
        setErrorFor(inputMonth, 'This field is required');
        month.className = 'error active'
    } else {
        setSuccessFor(inputMonth);
        month.className = '';
        calcAge();
    }

    if (inputYearValue === '') {
        setErrorFor(inputYear, 'This field is required');
        year.className = 'error active'
    } else {
        setSuccessFor(inputYear);
        year.className = '';
        calcAge();
    }
}


function isValed() {
    let inputDayValue = inputDay.value;
    let inputMonthValue = inputMonth.value;
    let inputYearValue = inputYear.value;

    if (inputDayValue > 31) {
        setErrorFor(inputDay, 'Must be a valid day');
        day.className = 'error active'
    } else if (inputDayValue > 0) {
        setSuccessFor(inputDay);
        day.className = ''
    }

    if (inputMonthValue > 12) {
        setErrorFor(inputMonth, 'Must be a valid month');
        month.className = 'error active'
    } else if (inputMonthValue > 0) {
        setSuccessFor(inputMonth);
        month.className = ''
    }

    if (inputYearValue > date.getFullYear()) {
        setErrorFor(inputYear, 'Must be in the past');
        year.className = 'error active'
    } else if (inputYearValue > 0) {
        setSuccessFor(inputYear);
        year.className = ''
    }
}

function setErrorFor(input, mensage) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    formControl.classList.add('error');
    small.innerText = mensage;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.classList.remove('error');
}

function calcAge() {
    let inputDayValue = inputDay.value;
    let inputMonthValue = inputMonth.value;
    let inputYearValue = inputYear.value;

    let y = todayYear - inputYearValue;
    let m = todayMonth - inputMonthValue;
    let d = todayDay - inputDayValue;

    if (d < 0) {
        m -= 1
        d += numberOfMonth(Number(inputMonthValue) - 1)
    }

    if (m < 0) {
        y -= 1;
        m += 12;
    }

    numberDay.innerText = d
    numberMonth.innerText = m
    numberYear.innerText = y
}