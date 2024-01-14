//Задание 7.2
const CarModel = {
    model: 'Mazda',
    version: 'Demio',
    year: 2005,
    price: 200000,
};

console.log(isProperty(CarModel, 'price'));

function isProperty(object, property) {
    if (object.hasOwnProperty(property)) {
        return true;
    } else {
        return false;
    }
}
