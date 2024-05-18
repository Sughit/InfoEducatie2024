var cuprinsBtns = document.querySelectorAll('.cuprins');
var cuprinsBody = document.querySelector('.cuprins-body');

cuprinsBtns.forEach(el => {
    el.addEventListener('click', () => {
        let currentCuprinsBtn = document.getElementsByClassName('cuprins-active')[0];
        currentCuprinsBtn.classList.remove('cuprins-active');

        el.classList.add('cuprins-active');
    });
});

const ohmSection = document.getElementById("element_target").offsetTop;
const kirchhoffSection = document.getElementById("element_target2").offsetTop;
const grupareaSection = document.getElementById("element_target3").offsetTop;
const energieSection = document.getElementById("element_target4").offsetTop;

const curentulBtn = document.getElementById('cuprinsCurentul');
const ohmBtn = document.getElementById('cuprinsOhm');
const kirchhoffBnt = document.getElementById('cuprinsKirchhoff');
const grupareBtn = document.getElementById('cuprinsGrupare');
const energieBtn = document.getElementById('cuprinsEnergie');

window.onscroll = function nextChapter()
{
    var scrollTop = document.documentElement.scrollTop;

    if(scrollTop >= ohmSection && scrollTop < kirchhoffSection)
    {
        curentulBtn.classList.remove('cuprins-active');
        ohmBtn.classList.add('cuprins-active');
        kirchhoffBnt.classList.remove('cuprins-active');
        grupareBtn.classList.remove('cuprins-active');
        energieBtn.classList.remove('cuprins-active');
    }
    else if(scrollTop >= kirchhoffSection && scrollTop < grupareaSection)
    {
        curentulBtn.classList.remove('cuprins-active');
        ohmBtn.classList.remove('cuprins-active');
        kirchhoffBnt.classList.add('cuprins-active');
        grupareBtn.classList.remove('cuprins-active');
        energieBtn.classList.remove('cuprins-active');
    }
    else if(scrollTop >= grupareaSection && scrollTop < energieSection)
    {
        curentulBtn.classList.remove('cuprins-active');
        ohmBtn.classList.remove('cuprins-active');
        kirchhoffBnt.classList.remove('cuprins-active');
        grupareBtn.classList.add('cuprins-active');
        energieBtn.classList.remove('cuprins-active');
    }
    else if(scrollTop >= energieSection)
    {
        curentulBtn.classList.remove('cuprins-active');
        ohmBtn.classList.remove('cuprins-active');
        kirchhoffBnt.classList.remove('cuprins-active');
        grupareBtn.classList.remove('cuprins-active');
        energieBtn.classList.add('cuprins-active');
    }
    else
    {
        curentulBtn.classList.add('cuprins-active');
        ohmBtn.classList.remove('cuprins-active');
        kirchhoffBnt.classList.remove('cuprins-active');
        grupareBtn.classList.remove('cuprins-active');
        energieBtn.classList.remove('cuprins-active');
    }
}