const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');
const userNameSpan = document.querySelector('#user-name');
const storyParagraph = document.querySelector('#story');

form.addEventListener('submit', e => e.preventDefault());

submitBtn.addEventListener('click', () => {
  const name = nameInput.value;
  localStorage.setItem('name', name);
  nameDisplayCheck(name);
  updateStory(name);
  changeBackgroundColor('#5b95ff61');  
});

forgetBtn.addEventListener('click', () => {
  localStorage.removeItem('name');
  nameDisplayCheck('');
  updateStory('');
  changeBackgroundColor('#e0f7fa');
});

function nameDisplayCheck(name) {
  if (name) {
    h1.textContent = `Welcome, ${name}`;
    personalGreeting.textContent = `Welcome to Cyera, ${name}! We hope you have fun while you are here.`;
    forgetDiv.style.display = 'block';
    rememberDiv.style.display = 'none';
  } else {
    h1.textContent = 'Welcome to Cyera';
    personalGreeting.textContent = 'Welcome to Cyera, your gateway to cutting-edge technology and innovation!';
    forgetDiv.style.display = 'none';
    rememberDiv.style.display = 'block';
  }
}

function updateStory(name) {
  if (name) {
    userNameSpan.textContent = name;
    storyParagraph.innerHTML = `In the ever-evolving world of technology, there was a visionary innovator named <span>${name}</span>. Driven by Cyera's commitment to pushing the boundaries of tech, <span>${name}</span> embarked on a journey to explore new horizons. With every breakthrough, <span>${name}</span> contributed to shaping a future where technology transforms lives and inspires endless possibilities...`;
  } else {
    userNameSpan.textContent = '';
    storyParagraph.textContent = `In the ever-evolving world of technology, there was a visionary innovator. Driven by Cyera's commitment to pushing the boundaries of tech, they embarked on a journey to explore new horizons. With every breakthrough, they contributed to shaping a future where technology transforms lives and inspires endless possibilities...`;
  }
}

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

document.addEventListener('DOMContentLoaded', () => {
  const storedName = localStorage.getItem('name') || '';
  nameDisplayCheck(storedName);
  updateStory(storedName);
});
