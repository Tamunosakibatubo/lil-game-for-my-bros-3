// page 1
let size = 16;

function makeYesBigger() {
    const yesbtn = document.getElementById('yesbtn');
    size += 60;
    yesbtn.style.fontSize = size + 'px';
}

// page 2
const q1 = document.getElementsByClassName('q1')[0];

if (q1) {
    let countdown = 9;
    const counter = document.createElement('p');
    counter.style.cssText = 'color: white; font-size: 14px; margin-top: 12px; opacity: 0.6;';
    counter.textContent = 'revealing in 9...';
    q1.appendChild(counter);

    const tick = setInterval(() => {
        countdown--;
        counter.textContent = `revealing in ${countdown}...`;
        if (countdown <= 0) clearInterval(tick);
    }, 1000);

    setTimeout(function () {
        q1.innerHTML = `
            <h1 style='font-size: 100px; color: white;'>It's you</h1>
            <video src='hamster.mp4' autoplay loop muted playsinline style='width: 300px; border-radius: 12px;'></video>
            <a href="page3.html"><button style='margin-top: 20px;'>continue =></button></a>
        `;
    }, 9000);
}

// audio autoplay fix
document.addEventListener('click', () => {
    const audio = document.querySelector('audio');
    if (audio) audio.play();
}, { once: true });