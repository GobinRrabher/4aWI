let config = {

    offset: 0,

    month: [
        { name: "Jan", day: 31 },
        { name: "Feb", day: 28 },
        { name: "Mar", day: 31 },
        { name: "Apr", day: 30 },
        { name: "Mai", day: 31 },
        { name: "Jun", day: 30 },
        { name: "Jul", day: 31 },
        { name: "Aug", day: 31 },
        { name: "Sep", day: 30 },
        { name: "Okt", day: 31 },
        { name: "Nov", day: 30 },
        { name: "Dez", day: 31 }
    ],

    week: ["MO", "DI", "MI", "DO", "FR", "SA", "SO"],

}

let row = "";

function weekdays() {
    console.log("----------------------------------")
    console.log("MO | DI | MI | DO | FR | SA | SO |")
}


function printMonth() {
    for (i = 0; i < config.month.length; i++) {
        row += (j);
        row += (" | ");
        console.log(row);
        row = "";
        day = 1;
        weekdays();
        row = getOffsetString(config.offset, row, i);

        for (var j = 1; j < config.month[i].day; j++) {
            if (config.offset == 0 && j % 7 == 0) {
                row += (belowTen(j));
                row += (" | ");
                console.log(row);
                row = "";
            }
            else if ((7 - (j % 7) - config.offset) == 0) {
                row += (belowTen(j));
                row += (" | ");
                console.log(row);
                row = "";
            }
            else if (i == config.month[i].day) {
                console.log(row);
                row = "";
            }
            else {
                row += (belowTen(j));
                row += (" | ");
            }
        }
        setOffsetNumber(config.offset);
    }
}

function belowTen(currDay) {
    if (currDay < 10) {
        return ("0" + currDay);
    }
    else return currDay;
}

function getOffsetString(offset, row, k) {
    for (k = 0; k < offset; k++) {
        row += "   | ";
    }
    if ((offset + config.month[i].day % 7) >= 7) {
        offset += config.month[i].day % 7 - 7;
    }
    else {
        offset += config.month[i].day % 7;
    }
    //config.offset = offset;
    return row;
}

function setOffsetNumber(offset) {
    if ((offset + config.month[i].day % 7) >= 7) {
        offset += config.month[i].day % 7 - 7;
    }
    else {
        offset += config.month[i].day % 7;
    }
    config.offset = offset;
}

printMonth();