const timeSlots = () => {
    let x = 30; //minutes interval
    let times = []; // time array
    let tt = 60 * 10; // start time
    let ap = ["AM", "PM"]; // AM-PM

    //loop to increment the time and push results in array
    for (let i = 0; tt < 17 * 60; i++) {
        let hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
        let mm = tt % 60; // getting minutes of the hour in 0-55 format
        let hh12 = hh % 12;
        if (hh12 === 0) {
            hh12 = 12;
        }
        times[i] = { timeSlot: ("0" + (hh12)).slice(-2) + ":" + ("0" + mm).slice(-2) + ap[Math.floor(hh / 12)], totalSlot: 10, availableSlot: 10 }// pushing data in array in [00:00 - 12:00 AM/PM format]
        tt = tt + x;
    }
    return times
}

module.exports={timeSlots}