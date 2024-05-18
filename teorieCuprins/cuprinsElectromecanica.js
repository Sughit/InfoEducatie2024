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
    var ohmSection = document.getElementsByName("element_target")[0].offsetTop;
    var kirchhoffSection = document.getElementsByName("element_target2")[0].offsetTop;
    var grupareaSection = document.getElementsByName("element_target3")[0].offsetTop;
    var energieSection = document.getElementsByName("element_target4")[0].offsetTop;

    var scrollTop = document.documentElement.scrollTop;

    if(scrollTop >= ohmSection)
    {
        let currentCuprinsBtn = document.getElementsByClassName('cuprins-active')[0];
        currentCuprinsBtn.classList.remove('cuprins-active');

        let btn = document.getElementById('cuprinsOhm');
        btn.classList.add('cuprins-active');
    }
    else if(scrollTop >= kirchhoffSection && scrollTop < grupareaSection)
    {
        let currentCuprinsBtn = document.getElementsByClassName('cuprins-active')[0];
        currentCuprinsBtn.classList.remove('cuprins-active');

        let btn = document.getElementById('cuprinsKirchhoff');
        btn.classList.add('cuprins-active');
    }
    else if(scrollTop >= grupareaSection && scrollTop < energieSection)
    {
        let currentCuprinsBtn = document.getElementsByClassName('cuprins-active')[0];
        currentCuprinsBtn.classList.remove('cuprins-active');
    
        let btn = document.getElementById('cuprinsGruparea');
        btn.classList.add('cuprins-active');
    }
    else if(scrollTop >= energieSection)
    {
        let currentCuprinsBtn = document.getElementsByClassName('cuprins-active')[0];
        currentCuprinsBtn.classList.remove('cuprins-active');
        
        let btn = document.getElementById('cuprinsEnergie');
        btn.classList.add('cuprins-active');
    }
    else
    {
        let currentCuprinsBtn = document.getElementsByClassName('cuprins-active')[0];
        currentCuprinsBtn.classList.remove('cuprins-active');
        
        let btn = document.getElementById('cuprinsCurentul');
        btn.classList.add('cuprins-active');
    }
}