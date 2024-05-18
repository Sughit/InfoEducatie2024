var cuprinsBtns = document.querySelectorAll('.cuprins');
var cuprinsBody = document.querySelector('.cuprins-body');

cuprinsBtns.forEach(el => {
    el.addEventListener('click', () => {
        let currentCuprinsBtn = document.getElementsByClassName('cuprins-active')[0];
        currentCuprinsBtn.classList.remove('cuprins-active');

        el.classList.add('cuprins-active');
    });
});

const principiuISection = document.getElementById('element_target').offsetTop;
const motoareSection = document.getElementById("element_target2").offsetTop;
const principiuIISection = document.getElementById("element_target3").offsetTop;

const notiuniBtn = document.getElementById('cuprinsNotiuni');
const principiuIBtn = document.getElementById('cuprinsPrincipiuI');
const motoareBtn = document.getElementById('cuprinsMotoare');
const principiuIIBtn = document.getElementById('cuprinsPrincipiuII');


window.onscroll = function nextChapter()
{
    var scrollTop = document.documentElement.scrollTop;

    if(scrollTop >= principiuISection && scrollTop < motoareSection)
    {
        principiuIBtn.classList.add('cuprins-active');

        notiuniBtn.classList.remove('cuprins-active');

        motoareBtn.classList.remove('cuprins-active');

        principiuIIBtn.classList.remove('cuprins-active');
    }
    else if(scrollTop >= motoareSection && scrollTop < principiuIISection)
    {
        motoareBtn.classList.add('cuprins-active');

        principiuIBtn.classList.remove('cuprins-active');

        notiuniBtn.classList.remove('cuprins-active');

        principiuIIBtn.classList.remove('cuprins-active');
    }
    else if(scrollTop >= principiuIISection)
    {
        principiuIIBtn.classList.add('cuprins-active');

        principiuIBtn.classList.remove('cuprins-active');

        motoareBtn.classList.remove('cuprins-active');

        notiuniBtn.classList.remove('cuprins-active');
    }
    else
    {
        notiuniBtn.classList.add('cuprins-active');

        principiuIBtn.classList.remove('cuprins-active');

        motoareBtn.classList.remove('cuprins-active');

        principiuIIBtn.classList.remove('cuprins-active');
    }
}