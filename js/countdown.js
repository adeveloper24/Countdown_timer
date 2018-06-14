function calcDevideTime(endtime) {
    var time = Date.parse(endtime) - Date.parse(new Date());
    var days = Math.floor(time / (1000 * 60 * 60 * 24));
    var hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((time / 1000 / 60) % 60);
    var seconds = Math.floor((time / 1000) % 60);

    return {
      'alltime': time,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
}

function findWindows(endtime) {
    var pten_days = document.getElementById('ten_days');
    var pone_day = document.getElementById('one_day');
    var pten_hour = document.getElementById('ten_hour');
    var pone_hour = document.getElementById('one_hour');
    var pten_minutes = document.getElementById('ten_minutes');
    var pone_minute = document.getElementById('one_minute');
    var pten_seconds = document.getElementById('ten_seconds');
    var pone_second = document.getElementById('one_second');

    function updateWindows() {
        var time = calcDevideTime(endtime);
        var d = String(time.days);
        var h = String(time.hours);
        var m = String(time.minutes);
        var s = String(time.seconds);
        if (d.length == 1) {
            pten_days.innerHTML = '0';
            pone_day.innerHTML = d.substring(0,1);
        } else {
            pten_days.innerHTML = '' + d.substring(0,1);
            pone_day.innerHTML = '' + d.substring(1,2);
        }
        if (h.length == 1) {
            pten_hour.innerHTML = '0';
            pone_hour.innerHTML = '' + h.substring(0,1);
        } else {
            pten_hour.innerHTML = '' + h.substring(0,1);
            pone_hour.innerHTML = '' + h.substring(1,2);
        }
        if (m.length == 1) {
            pten_minutes.innerHTML = '0';
            pone_minute.innerHTML = '' + m.substring(0,1);
        } else {
            pten_minutes.innerHTML = '' + m.substring(0,1);
            pone_minute.innerHTML = '' + m.substring(1,2);
        }
        if (s.length == 1) {
            pten_seconds.innerHTML = '0';
            pone_second.innerHTML = '' + s.substring(0,1);
        } else {
            pten_seconds.innerHTML = '' + s.substring(0,1);
            pone_second.innerHTML = '' + s.substring(1,2);
        }

        if (time.alltime <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateWindows();
    var timeinterval = setInterval(updateWindows, 1000);
    }

var end = 'August 12 2018 8:59:59 GMT+0300';

function init() {
    findWindows(end);
}
window.onload = init;
