var cuprinsBtns = document.querySelectorAll('.cuprins');
var cuprinsBody = document.querySelector('.cuprins-body');

cuprinsBtns.forEach(el => {
    el.addEventListener('click', () => {
        let currentCuprinsBtn = document.getElementsByClassName('cuprins-active')[0];
        currentCuprinsBtn.classList.remove('cuprins-active');

        el.classList.add('cuprins-active');
    });
});

window.onscroll = function nextChapter()
{
    var principiuISection = document.getElementsByName("element_target")[0].offsetTop;
    var motoareSection = document.getElementsByName("element_target2")[0].offsetTop;
    var principiuIISection = document.getElementsByName("element_target3").offsetTop;

    var scrollTop = document.documentElement.scrollTop;

    if(scrollTop >= principiuISection && scrollTop < motoareSection)
    {
        let currentCuprinsBtn = document.getElementsByClassName('cuprins-active')[0];
        currentCuprinsBtn.classList.remove('cuprins-active');

        let btn = document.getElementById('cuprinsPrincipiuI');
        btn.classList.add('cuprins-active');
    }
    else if(scrollTop >= motoareSection && scrollTop < principiuIISection)
    {
        let currentCuprinsBtn = document.getElementsByClassName('cuprins-active')[0];
        currentCuprinsBtn.classList.remove('cuprins-active');

        let btn = document.getElementById('cuprinsMotoare');
        btn.classList.add('cuprins-active');
    }
    else if(scrollTop >= principiuIISection)
    {
        let currentCuprinsBtn = document.getElementsByClassName('cuprins-active')[0];
        currentCuprinsBtn.classList.remove('cuprins-active');

        let btn = document.getElementById('cuprinsPrincipiuII');
        btn.classList.add('cuprins-active');
    }
    else
    {
        let currentCuprinsBtn = document.getElementsByClassName('cuprins-active')[0];
        currentCuprinsBtn.classList.remove('cuprins-active');

        let btn = document.getElementById('cuprinsNotiuni');
        btn.classList.add('cuprins-active');
    }
}