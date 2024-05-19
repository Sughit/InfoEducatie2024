var cuprinsBtns = document.querySelectorAll('.cuprins');
var cuprinsBody = document.querySelector('.cuprins-body');

cuprinsBtns.forEach(el => {
    el.addEventListener('click', () => {
        let currentCuprinsBtn = document.getElementsByClassName('cuprins-active')[0];
        currentCuprinsBtn.classList.remove('cuprins-active');

        el.classList.add('cuprins-active');
    });
});

const teoremeSection = document.getElementById("element_target").offsetTop;

const principiiBtn = document.getElementById('cuprinsPrincipii');
const teoremeBtn = document.getElementById('cuprinsTeoreme'); 

window.onscroll = function nextChapter()
{
    var scrollTop = document.documentElement.scrollTop;

    if(scrollTop >= teoremeSection)
    {
        teoremeBtn.classList.add('cuprins-active');
        principiiBtn.classList.remove('cuprins-active');
    }
    else
    {
        teoremeBtn.classList.remove('cuprins-active');
        principiiBtn.classList.add('cuprins-active');
    }
}