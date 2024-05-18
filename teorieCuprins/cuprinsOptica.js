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
    var ondulatorieSection = document.getElementsByName("element_target")[0].offsetTop;
    var cuanticaSection = document.getElementsByName("element_target2")[0].offsetTop;
    var scrollTop = document.documentElement.scrollTop;

    if(scrollTop >= ondulatorieSection)
    {
        let currentCuprinsBtn = document.getElementsByClassName('cuprins-active')[0];
        currentCuprinsBtn.classList.remove('cuprins-active');

        let btn = document.getElementById('cuprinsTeoreme');
        btn.classList.add('cuprins-active');
    }
    else if(scrollTop >= cuanticaSection)
    {
        let currentCuprinsBtn = document.getElementsByClassName('cuprins-active')[0];
        currentCuprinsBtn.classList.remove('cuprins-active');

        let btn = document.getElementById('cuprinsCuantica');
        btn.classList.add('cuprins-active');
    }
    else
    {
        let currentCuprinsBtn = document.getElementsByClassName('cuprins-active')[0];
        currentCuprinsBtn.classList.remove('cuprins-active');

        let btn = document.getElementById('cuprinsGeometrica');
        btn.classList.add('cuprins-active');
    }
}