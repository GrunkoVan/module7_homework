//Задание 7.1
const CarModel = {
    model: 'Mazda',
    version: 'Demio',
    year: 2005,
    price: 200000,
};

getObjectValues(CarModel);

function getObjectValues(obj) {
    for (var key in obj) {
        console.log(key + ' = ' + obj[key]);
    }
}
