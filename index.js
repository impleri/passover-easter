var Hebcal = require('hebcal'),
    moment = require('moment-easter');

function getPassover(year) {
    var gregYear = new Hebcal.GregYear(year),
        pesach = new Hebcal.HDate('15 Nisan ' + gregYear.hebyears[0]);

    return moment(pesach.greg());
}

function getEaster(year) {
    return moment.easter(year);
}

function compareYear(year) {
    var passover = getPassover(year),
        easter = getEaster(year),
        match = easter.isSame(passover);

    if (match) {
        console.log(passover.format(), easter.format());
        return true;
    }

    return false;
}

for (var i = 2000; i > 0; i--) {
    if (compareYear(i)) {
        break;
    }
}
