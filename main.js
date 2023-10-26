const yours = ['your mom', 'your dad', 'your pet', 'your sister', 'your brother', 'your aunt', 'your uncle'];
const sexualities = ['Heterosexual', 'gay', 'lesbian', 'bisexual', 'pansexual', 'cisgender', 'asexual', 'queer'];

const randomYours = arr => {
    Math.floor(Math.random() * yours.length);
};

console.log(randomYours);