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
    var teoremeSection = document.getElementsByName("element_target")[0].offsetTop;
    var scrollTop = document.documentElement.scrollTop;

    if(scrollTop >= teoremeSection)
    {
        let currentCuprinsBtn = document.getElementsByClassName('cuprins-active')[0];
        currentCuprinsBtn.classList.remove('cuprins-active');

        let teoremeBtn = document.getElementById('cuprinsTeoreme');
        teoremeBtn.classList.add('cuprins-active');
    }
    else
    {
        let currentCuprinsBtn = document.getElementsByClassName('cuprins-active')[0];
        currentCuprinsBtn.classList.remove('cuprins-active');

        let principiiBtn = document.getElementById('cuprinsPrincipii');
        principiiBtn.classList.add('cuprins-active');
    }
}