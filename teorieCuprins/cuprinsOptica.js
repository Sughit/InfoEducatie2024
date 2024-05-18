var cuprinsBtns = document.querySelectorAll('.cuprins');
var cuprinsBody = document.querySelector('.cuprins-body');

cuprinsBtns.forEach(el => {
    el.addEventListener('click', () => {
        let currentCuprinsBtn = document.getElementsByClassName('cuprins-active')[0];
        currentCuprinsBtn.classList.remove('cuprins-active');

        el.classList.add('cuprins-active');
    });
});

const ondulatorieSection = document.getElementById("element_target").offsetTop;
const cuanticaSection = document.getElementById("element_target2").offsetTop;

const geometricaBtn = document.getElementById('cuprinsGeometrica');
const ondulatorieBtn = document.getElementById('cuprinsOndulatorie');
const cuanticaBtn = document.getElementById('cuprinsCuantica');

window.onscroll = function nextChapter()
{
    var scrollTop = document.documentElement.scrollTop;

    if(scrollTop >= ondulatorieSection && scrollTop < cuanticaSection)
    {
        ondulatorieBtn.classList.add('cuprins-active');

        geometricaBtn.classList.remove('cuprins-active');

        cuanticaBtn.classList.remove('cuprins-active');
    }
    else if(scrollTop >= cuanticaSection)
    {
        ondulatorieBtn.classList.remove('cuprins-active');

        geometricaBtn.classList.remove('cuprins-active');

        cuanticaBtn.classList.add('cuprins-active');
    }
    else
    {
        ondulatorieBtn.classList.remove('cuprins-active');

        geometricaBtn.classList.add('cuprins-active');

        cuanticaBtn.classList.remove('cuprins-active');
    }
}