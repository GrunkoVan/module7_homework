//Задание 7.4
function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
}

ElectricalAppliance.prototype.getPowerUsed = function() {
    return this.isPlugged ? this.power : 0;
}

const lampa = new ElectricalAppliance('lampa', 45);
const tv = new ElectricalAppliance('tv', 1000);

console.log(lampa.getPowerUsed() + tv.getPowerUsed());

lampa.plugIn();
console.log(lampa.getPowerUsed() + tv.getPowerUsed());

tv.plugIn();
console.log(lampa.getPowerUsed() + tv.getPowerUsed());