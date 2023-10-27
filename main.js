const yours = ['your mom', 'your dad', 'your pet', 'your sister', 'your brother', 'your aunt', 'your uncle'];
const sexualities = ['Heterosexual', 'gay', 'lesbian', 'bisexual', 'pansexual', 'cisgender', 'asexual', 'queer'];

const randomYours = arr1 => {
    const pronoms = arr1;
    const randomYours = Math.floor(Math.random() * arr1.length);
    return pronoms[randomYours];
};

const randomSexualities = arr2 => {
    const genders = arr2;
    const randomGenders = Math.floor(Math.random() * arr2.length);
    return genders[randomGenders];
};

const createRandomMessage = () => {
    const first = randomYours(yours);
    const second = randomSexualities(sexualities);
    const message = `${first} is ${second}`;
    return message;
};

console.log(createRandomMessage());