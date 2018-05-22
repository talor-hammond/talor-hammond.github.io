// FUNCTION FOR CALCULATING CORRECTION-DOSE:
function calculateCorrection() {

    // String reference:
    var currentGlucose = document.getElementById('currentBG').value;
    var goalGlucose = document.getElementById('goalBG').value;
    var correctionFactor = document.getElementById('correction').value;

    // Number reference:
    var currentGlucoseNumber = Number(currentGlucose);
    var goalGlucoseNumber = Number(goalGlucose);
    var correctionFactorNumber = Number(correctionFactor);

    // LOG:
    console.log(currentGlucose);
    console.log(goalGlucose);
    console.log(correctionFactor);

    console.log(currentGlucoseNumber);
    console.log(goalGlucoseNumber);
    console.log(correctionFactorNumber);

    // Results panel:
    var results = document.getElementById('firstResults');

    // 1. IF ANY OF THE VALUES ARE AN EMPTY STRING...
    if ((currentGlucose || goalGlucose || correctionFactor) == '') {

        results.innerHTML = '<i>Please enter three valid numbers :~)</i>'
    
    // 2. IF ANY OF THE VALUES AREN'T AN EMPTY STRING, AND ANY OF WHICH ARE INVALID NUMBERS...
    } else if ((currentGlucose.length || goalGlucose.length || correctionFactor.length) > 0 && isNaN(Number(currentGlucose)) || isNaN(Number(goalGlucose)) || isNaN(Number(correctionFactor)) == true)  {

        results.innerHTML = '<i>Please enter three valid numbers :~)</i>'

    // 3. IF THE CORRECTION FACTOR IS INVALID; WHERE IT WOULD GIVE INFINITY UNITS
    } else if (correctionFactorNumber == 0) {

        results.innerHTML = '<i>Please enter a valid correction factor!</i>'

    // 4. ELSE, CALCULATE THE NUMBERS:
    } else {

        // calculating units to administer & rounding to lowest whole-number...
        var units = Math.floor((currentGlucoseNumber - goalGlucoseNumber) / correctionFactorNumber);

        // // rounding units to 1dp w .toFixed...
        // var roundedUnits = units.toFixed(1);

        // // LOG:
        // console.log(units);
        // console.log(roundedUnits);

        if (units == 1) { // for an individual unit:
            results.innerHTML = '<b>Take ' + units + ' unit :~)</b><br><br>All results are rounded <i>down</i> to the nearest whole number.';            
        } else {
            results.innerHTML = '<b>Take ' + units + ' units :~)</b><br><br>All results are rounded <i>down</i> to the nearest whole number.';
        }
    }
}

// FUNCTION FOR CALCULATION MADE WHEN EATING:
function calculateInsulin() {


    
}

// FUNCTION FOR SHOWING RESULTS:
// function showFirstResults() {

//     var firstResults = document.getElementById('firstResults');

//     // firstResults -- add css visibility: visible, here;
//     firstResults.style.visibility = 'visible';

// }

