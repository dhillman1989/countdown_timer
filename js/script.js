const dayCount = document.querySelector('#day');
const hourCount = document.querySelector('#hour');
const minCount = document.querySelector('#min');
const secCount = document.querySelector('#sec');

var date = new Date('Aug 20, 2023 02:46:00').getTime();

var myfunc = setInterval(function() {
    var timeNow = new Date().getTime();
    var timeleft = date - timeNow;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    dayCount.innerText = days;
    hourCount.innerText = ('0' + hours).slice(-2);
    minCount.innerText = ('0' + minutes).slice(-2);
    secCount.innerText = ('0' + seconds).slice(-2);
}, 1000);
