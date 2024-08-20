
const candle = document.querySelector('#candle');
const feild = document.querySelector('#feild');
const shabes = document.querySelector('#shabes');

shabes.addEventListener('click', () => {

    const roll_dinami = document.getElementById('roll_dinami');
    roll_dinami.style.visibility = 'visible';

    const x = document.createElement('p');
    x.classList.add('x');
    x.textContent = 'x';

    x.addEventListener('click', () => {
        roll_dinami.style.visibility = 'hidden';
        roll_dinami.removeChild(x);
        roll_dinami.removeChild(title);
        roll_dinami.removeChild(p_about_shabes);
        roll_dinami.removeChild(btn_seuda_1);
        roll_dinami.removeChild(btn_seuda_2);
        roll_dinami.removeChild(btn_seuda_3);
    })

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'שבת בישיבה';

    const p_disap = document.getElementById('p_disap');

    const p_about_shabes = document.createElement('p');
    p_about_shabes.classList.add('p_about_shabes')
    p_about_shabes.innerHTML = p_disap.textContent;

    const btn_seuda_1 = document.createElement('button');
    btn_seuda_1.classList.add('btn_seuda_1');
    btn_seuda_1.textContent = `סעודה אחת - 100$`;

    const btn_seuda_2 = document.createElement('button');
    btn_seuda_2.classList.add('btn_seuda_2');
    btn_seuda_2.textContent = `שתי סעודות - 200$`;

    const btn_seuda_3 = document.createElement('button');
    btn_seuda_3.classList.add('btn_seuda_3');
    btn_seuda_3.textContent = `שלוש סעודות - 300$`;

    roll_dinami.appendChild(x);
    roll_dinami.appendChild(title);
    roll_dinami.appendChild(p_about_shabes);
    roll_dinami.appendChild(btn_seuda_1);
    roll_dinami.appendChild(btn_seuda_2);
    roll_dinami.appendChild(btn_seuda_3);

});

feild.addEventListener('click', () => {

    const roll_dinami = document.getElementById('roll_dinami');
    roll_dinami.style.visibility = 'visible';

    const x = document.createElement('p');
    x.classList.add('x');
    x.textContent = 'x';

    x.addEventListener('click', () => {
        roll_dinami.style.visibility = 'hidden';
        roll_dinami.removeChild(x);
        roll_dinami.removeChild(title);
        roll_dinami.removeChild(p_about_shabes);
        roll_dinami.removeChild(btn_seuda_1);
        roll_dinami.removeChild(btn_seuda_2);
        roll_dinami.removeChild(btn_seuda_3);
    })

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'יציאה לשדה';

    const p_disap = document.getElementById('p_disap');

    const p_about_shabes = document.createElement('p');
    p_about_shabes.classList.add('p_about_shabes')
    p_about_shabes.innerHTML = 'יציאה לשדה זהו הקשר הישיר שלנו עם הקב"ה......';

    const first_diraction = document.createElement('button');
    first_diraction.classList.add('first_diraction');
    first_diraction.textContent = `הלוך / חזור - 15$`;

    const second_direction = document.createElement('button');
    second_direction.classList.add('second_direction');
    second_direction.textContent = ` שניי כיוונים - 30$`;

    const holyday = document.createElement('button');
    holyday.classList.add('holyday');
    holyday.textContent = `יציאה מיוחדת`;

    roll_dinami.appendChild(x);
    roll_dinami.appendChild(title);
    roll_dinami.appendChild(p_about_shabes);
    roll_dinami.appendChild(first_diraction);
    roll_dinami.appendChild(second_direction);
    roll_dinami.appendChild(holyday);

})
