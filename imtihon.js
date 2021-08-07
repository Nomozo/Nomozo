"use strict"

function dayOfWeek (dayNumber) {
    switch(dayNumber){
        case 1:
            return  "Dushanba";
            case 2:
      return  "Seshanba"; 
      case 3:
            return  "Chorshanba";
            case 4:
            return  "Payshanba";
            case 5:
            return  "Juma";
            case 6:
            return  "Shanba";
            case 7:
            return  "Yakshanaba";    
    }
}

function testDayOfweek() {
    try {
        var dayName = dayOfWeek(1);
        alert(dayName);
    }catch (e) {
        alert(e);
    }
}