var date = new Date();
const todaydate = document.querySelector('.date');
const todayday = document.querySelector('.day');
const todaytime = document.querySelector('.time');
const noofday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function printDate(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    todaydate.innerHTML = day + "/" + month + "/" + year;
}
