let phrase = document.getElementById('phrase');
let button = document.getElementById('button');


const yours = ['your mom', 'your dad', 'your pet', 'your sister', 'your brother', 'your aunt', 'your uncle'];
const sexualities = ['Heterosexual', 'gay', 'lesbian', 'bisexual', 'pansexual', 'cisgender', 'asexual', 'queer'];

function generateYours() {
    let randomYours = Math.floor(Math.random() * yours.length);
    return yours[randomYours];
};

function generateSexualities() {
    let randomGenders = Math.floor(Math.random() * sexualities.length);
    return sexualities[randomGenders];
};

function createRandomMessage() {
    let first = generateYours();
    let second = generateSexualities();
    let message = `${first} is ${second}`;
    phrase.innerHTML = message;
};

button.addEventListener('click', createRandomMessage);