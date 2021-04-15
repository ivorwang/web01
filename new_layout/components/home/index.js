var shotxt_ph = document.querySelectorAll("#showtxt_ph li");
var showtxt_pc = document.querySelectorAll("#showtxt_pc .intro__detail");
var intro__txt = document.querySelectorAll("#showtxt_pc .intro__txt");
var now_active = null;

for (let i = 0; i < showtxt_pc.length; i++) {
    const element = showtxt_pc[i];
    element.addEventListener('click', () => {
        showtxtHandler(i)
    });
}
for (let i = 0; i < shotxt_ph.length; i++) {
    const element = shotxt_ph[i];
    element.addEventListener('click', () => {
        showtxtHandler(i)
    });
}

function showtxtHandler(num) {
    if (now_active !== null) {
        intro__txt[now_active].classList.remove('--active');
    }
    intro__txt[num].classList.add('--active');
    now_active = num;
}