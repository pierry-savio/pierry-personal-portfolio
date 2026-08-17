const course_senai = document.getElementById('course_senai');
const course_fatec = document.getElementById('course_fatec');
const course_marlene = document.getElementById('course_marlene');

course_senai.addEventListener('click', () => {
    course_senai.classList.toggle('closed');
});

course_fatec.addEventListener('click', () => {
    course_fatec.classList.toggle('closed');
});

course_marlene.addEventListener('click', () => {
    course_marlene.classList.toggle('closed');
});


