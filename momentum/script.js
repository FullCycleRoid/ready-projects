// DOM Elements
const days = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
const months = ['января', 'февраля', 'марта', 'апреля', 'мая',
                'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus'),
  city = document.getElementById('city'),
  backgroundBtn = document.querySelectorAll('.btn')[0],
  jokeBtn = document.querySelectorAll('.btn')[1];

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),
    day = today.getDay(),
    date = today.getDate(),
    month = today.getMonth();


  // Output Time
  time.innerHTML = `${days[day]} ${date} ${months[month]} ${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}` //${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}


// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function getCity(e) {
  console.log(e.target.value)
  if (city.value === '') {
    showTime()
  } else {

  }
}

document.body.style.color = '#0ffb00';

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 6) {
    // Morning
    document.body.style.backgroundImage =
        "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.textContent = 'Ночь, ';
  } else if (hour>6 && hour<12) {
    document.body.style.backgroundImage =
        "url('assets/images/morning/01.jpg')";
    greeting.textContent = 'Утро, ';
  } else if (hour>12 && hour < 18) {
    // Afternoon
    document.body.style.backgroundImage =
      "url('assets/images/day/01.jpg')";
    greeting.textContent = 'День, ';
  } else if (hour>18) {
    // Evening
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = 'Вечер, ';

  }
}


// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}


// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else if (e.type === 'click') {
    if (name.innerHTML === '[Enter Name]') {
      name.textContent = ''
    }
  } else if (e.type === 'blur'){
      if (name.innerHTML === '') {
        name.textContent = '[Enter Name]';
        name.blur()
      }
    console.log(name.innerHTML)
    console.log(e.target.value)
    console.log(e.target.innerText)
    localStorage.setItem('name', e.target.innerText);
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}


// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === '') {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which === 13 || e.keyCode === 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else if (e.type === 'click') {
    if (focus.innerHTML === '[Enter Focus]') {
      focus.textContent = ''
    }
    localStorage.setItem('focus', e.target.innerText);
  } else if (e.type === 'blur') {
    if (focus.innerHTML === '') {
      focus.textContent = '[Enter Focus]';
    }
    localStorage.setItem('focus', e.target.innerText);
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('click', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('click', setFocus);
focus.addEventListener('blur', setFocus);
city.addEventListener('input', (e)=>{
  getCity(e)
})

// Run
showTime();
setBgGreet();
getName();
getFocus();