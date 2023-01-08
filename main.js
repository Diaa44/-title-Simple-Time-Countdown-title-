setInterval(timer);

function timer() {
    let hours = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.seconds');
    let am = document.querySelector('.ampm');





    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = h > 12 ? "PM" : "AM";




    let hh = document.querySelector('.hh');
    let mm = document.querySelector('.mm');
    let ss = document.querySelector('.ss');





    let hr_dot = document.querySelector('.hr-dot');
    let min_dot = document.querySelector('.min-dot');
    let sec_dot = document.querySelector('.sec-dot');




    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;




    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>";
    am.textContent = ampm;




    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;






    hr_dot.style.transform = `rotate($(h * 30)deg)`;
    min_dot.style.transform = `rotate($(m * 6)deg)`;
    sec_dot.style.transform = `rotate($(s * 6)deg)`;






























































































}