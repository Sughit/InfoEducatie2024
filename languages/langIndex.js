const lagnEl = document.getElementById('langWrap');
const btns = document.querySelectorAll('#btn-lang');

btns.forEach(el => {
    el.addEventListener('click', () => {
        //asta contine limbi curenta
        const attribute = el.getAttribute('language');
        localStorage.setItem('limba', JSON.stringify(attribute));

        loadLanguages(JSON.parse(localStorage.getItem('limba')));
    });
});

window.onload = function()
{
    if(localStorage.getItem('limba') === undefined || localStorage.getItem('limba') == null)
    {
        localStorage.setItem('limba', "romana");
    }
    loadLanguages(JSON.parse(localStorage.getItem('limba')));
}

function loadLanguages(attr)
{
    //variabile din index.html
    const titleSet = document.getElementById('titleSet');
    const titleLogin = document.getElementById('titleLogin');
    const titleDisconnect = document.getElementById('titleDisconnect');
    const titleStatistica = document.getElementById('titleStatistica');
    const titleLang = document.getElementById('titleLang');
    const titleMec = document.getElementById('titleMec');
    const titleTer = document.getElementById('titleTer');
    const titleElec = document.getElementById('titleElec');
    const titleOp = document.getElementById('titleOp');

    //variabile din register.html
    const goBackReg = document.getElementById('goBackReg');
    const titleReg = document.getElementById('titleReg');
    const usernameReg = document.getElementById('usernameReg');
    const emailReg = document.getElementById('emailReg');
    const passwordReg = document.getElementById('passwordReg');
    const register = document.getElementById('register');
    const footerReg = document.getElementById('footerReg');
    const footerRegBtn = document.getElementById('footerRegBtn');

    //variabile din login.html
    const goBackLog = document.getElementById('goBackLog');
    const titleLog = document.getElementById('titleLog');
    const emailLog = document.getElementById('emailLog');
    const passwordLog = document.getElementById('passwordLog');
    const login = document.getElementById('login');
    const footerLog = document.getElementById('footerLog');
    const footerLogBtn = document.getElementById('footerLogBtn');

    //variabile din mecanica.html
    const mecanicaTitle = document.getElementById('mecanicaTitle');
    const principiiTitle = document.getElementById('principiiTitle');
    const teoremeTitle = document.getElementById('teoremeTitle');
    const principiiTitleModal = document.getElementById('principiiTitleModal');
    const teoremeTitleModal = document.getElementById('teoremeTitleModal');
    const principiiRez = document.getElementById('principiiRez');
    const teoremeRez = document.getElementById('teoremeRez');

    //variabile din termodinamica.html
    const termodinamicaTitle = document.getElementById('termodinamicaTitle');
    const notiuniTitle = document.getElementById('notiuniTitle');
    const principiuITitle = document.getElementById('principiuITitle');
    const motoareTitle = document.getElementById('motoareTitle');
    const principiuIITitle = document.getElementById('principiuIITitle');
    const notiuniTitleModal = document.getElementById('notiuniTitleModal');
    const principiuITitleModal = document.getElementById('principiuITitleModal');
    const motoareTitleModal = document.getElementById('motoareTitleModal');
    const principiuIITitleModal = document.getElementById('principiuIITitleModal'); 
    const notiuniRez = document.getElementById('notiuniRez');
    const principiuIRez = document.getElementById('principiuIRez');
    const motoareRez = document.getElementById('motoareRez');
    const principiuIIRez = document.getElementById('principiuIIRez');

    //variabile din electromecanica.html
    const electromecanicaTitle = document.getElementById('electromecanicaTitle');
    const curentulTitle = document.getElementById('curentulTitle');
    const ohmTitle = document.getElementById('ohmTitle');
    const kirchhoffTitle = document.getElementById('kirchhoffTitle');
    const grupareTitle = document.getElementById('grupareTitle');
    const energieTitle = document.getElementById('energieTitle');
    const curentulTitleModal = document.getElementById('curentulTitleModal');
    const ohmTitleModal = document.getElementById('ohmTitleModal');
    const kirchhoffTitleModal = document.getElementById('kirchhoffTitleModal');
    const grupareTitleModal = document.getElementById('grupareTitleModal');
    const energieTitleModal = document.getElementById('energieTitleModal');
    const curentulRez = document.getElementById('curentulRez');
    const ohmRez = document.getElementById('ohmRez');
    const kirchhoffRez = document.getElementById('kirchhoffRez');
    const grupareRez = document.getElementById('grupareRez');
    const energieRez = document.getElementById('energieRez');

    //variabile din optica.html
    const opticaTitle = document.getElementById('opticaTitle');
    const geometricaTitle = document.getElementById('geometricaTitle');
    const ondulatorieTitle = document.getElementById('ondulatorieTitle');
    const cuanticaTitle = document.getElementById('cuanticaTitle');
    const geometricaTitleModal = document.getElementById('geometricaTitleModal');
    const ondulatorieTitleModal = document.getElementById('ondulatorieTitleModal');
    const cuanticaTitleModal = document.getElementById('cuanticaTitleModal');
    const geometricaRez = document.getElementById('geometricaRez');
    const ondulatorieRez = document.getElementById('ondulatorieRez');
    const cuanticaRez = document.getElementById('cuanticaRez');

    //variabile din teorieMecanica.html
    const teorieMecanicaTitle = document.getElementById('teorieMecanicaTitle');
    const teorieMecanica = document.getElementById('teorieMecanica');

    //variabile din teorieTermodinamica.html
    const teorieTermodinamicaTitle = document.getElementById('teorieTermodinamicaTitle');
    const teorieTermodinamica = document.getElementById('teorieTermodinamica');

    //variabile din teorieElectromecanica.html
    const teorieElectromecanicaTitle = document.getElementById('teorieElectromecanicaTitle');
    const teorieElectromecanica = document.getElementById('teorieElectromecanica');

    //variabile din teorieOptica.html
    const teorieOpticaTitle = document.getElementById('teorieOpticaTitle');
    const teorieOptica = document.getElementById('teorieOptica');

    //variabile din cuprinsMecanica
    const cuprinsPrincipii = document.getElementById('cuprinsPrincipii');
    const cuprinsTeoreme = document.getElementById('cuprinsTeoreme');

    //variabile din cuprinsTermodinamica
    const cuprinsNotiuni = document.getElementById('cuprinsNotiuni');
    const cuprinsPrincipiuI = document.getElementById('cuprinsPrincipiuI');
    const cuprinsMotoare = document.getElementById('cuprinsMotoare');
    const cuprinsPrincipiuII = document.getElementById('cuprinsPrincipiuII');

    //variabile din cuprinsElectromecanica
    const cuprinsCurentul = document.getElementById('cuprinsCurentul');
    const cuprinsOhm = document.getElementById('cuprinsOhm');
    const cuprinsKirchhoff = document.getElementById('cuprinsKirchhoff');
    const cuprinsGrupare = document.getElementById('cuprinsGrupare');
    const cuprinsEnergie = document.getElementById('cuprinsEnergie');

    //variabile din cuprinsOptica
    const cuprinsGeometrica = document.getElementById('cuprinsGeometrica');
    const cuprinsOndulatorie = document.getElementById('cuprinsOndulatorie');
    const cuprinsCuantica = document.getElementById('cuprinsCuantica');

    //variabile comune din cele 4 teorii
    const teorieInapoiBtn = document.getElementById('teorieInapoiBtn');
    const cuprinsAcasaBtn = document.getElementById('cuprinsAcasaBtn');

    //variabile comune din cele 4 fisiere index
    const invataTitle = document.querySelectorAll('#invataTitle');
    const inchideBtn = document.querySelectorAll('#inchideBtn');
    const teorieBtn = document.querySelectorAll('#teorieBtn');
    const testBtn = document.querySelectorAll('#testBtn');
    const acasaBtn = document.getElementById('acasaBtn');

    //variabile din test.html
    const startTestBtn = document.getElementById('startTestBtn');
    const iesiBtn = document.getElementById('iesiBtn');
    const reguliTitle = document.getElementById('reguliTitle');
    const reguli = document.getElementById('reguli');
    const iesiTestBtn = document.querySelectorAll('#iesiTestBtn');
    const continuaTestBtn = document.getElementById('continuaTestBtn');
    const testTitle = document.getElementById('testTitle');
    const timpRamas = document.getElementById('timpRamas');
    const urmatorulTestBtn = document.getElementById('urmatorulTestBtn');
    const finalTestTitle = document.getElementById('finalTestTitle');
    const nouTestBtn = document.getElementById('nouTestBtn');
    const veziDeCeBtn = document.getElementById('veziDeCe');

    //index.html
    if(window.location.pathname == "/index.html")
    {
        titleSet.textContent = data[attr].titleSet;
        titleLogin.textContent = data[attr].titleLogin;
        titleDisconnect.textContent = data[attr].titleDisconnect;
        titleStatistica.textContent = data[attr].titleStatistica;
        titleLang.textContent = data[attr].titleLang;
        titleMec.textContent = data[attr].titleMec;
        titleTer.textContent = data[attr].titleTer;
        titleElec.textContent = data[attr].titleElec;
        titleOp.textContent = data[attr].titleOp;
    }

    //register.html
    if(window.location.pathname == "/register.html")
    {
        goBackReg.textContent = data[attr].goBackReg;
        titleReg.textContent = data[attr].titleReg;
        usernameReg.textContent = data[attr].usernameReg;
        emailReg.textContent = data[attr].emailReg;
        passwordReg.textContent = data[attr].passwordReg;
        register.textContent = data[attr].register;
        footerReg.textContent = data[attr].footerReg;
        footerRegBtn.textContent = data[attr].footerRegBtn;
    }

    //login.html
    if(window.location.pathname == "/login.html")
    {
        goBackLog.textContent = data[attr].goBackLog;
        titleLog.textContent = data[attr].titleLog;
        emailLog.textContent = data[attr].emailLog;
        passwordLog.textContent = data[attr].passwordLog;
        login.textContent = data[attr].login;
        footerLog.textContent = data[attr].footerLog;
        footerLogBtn.textContent = data[attr].footerLogBtn;
    }

    //mecanica.html
    if(window.location.pathname == "/mecanica.html")
    {
        mecanicaTitle.textContent = data[attr].mecanicaTitle;
        principiiTitle.textContent = data[attr].principiiTitle;
        teoremeTitle.textContent = data[attr].teoremeTitle;
        principiiTitleModal.textContent = data[attr].principiiTitleModal;
        teoremeTitleModal.textContent = data[attr].teoremeTitleModal;
        principiiRez.innerHTML = data[attr].principiiRez;
        teoremeRez.innerHTML = data[attr].teoremeRez;
        invataTitle.forEach(el => {
            el.textContent = data[attr].invataTitle;
        });
        inchideBtn.forEach(el => {
            el.textContent = data[attr].inchideBtn;
        });
        teorieBtn.forEach(el => {
            el.textContent = data[attr].teorieBtn;
        });
        testBtn.forEach(el => {
            el.textContent = data[attr].testBtn;
        });
        acasaBtn.textContent = data[attr].acasaBtn;
    }

    //termodinamica.html
    if(window.location.pathname == "/termodinamica.html")
    {
        termodinamicaTitle.textContent = data[attr].termodinamicaTitle;
        notiuniTitle.textContent = data[attr].notiuniTitle;
        principiuITitle.textContent = data[attr].principiuITitle;
        motoareTitle.textContent = data[attr].motoareTitle;
        principiuIITitle.textContent = data[attr].principiuIITitle;
        notiuniTitleModal.textContent = data[attr].notiuniTitleModal;
        principiuITitleModal.textContent = data[attr].principiuITitleModal;
        motoareTitleModal.textContent = data[attr].motoareTitleModal;
        principiuIITitleModal.textContent = data[attr].principiuIITitleModal;
        notiuniRez.innerHTML = data[attr].notiuniRez;
        principiuIRez.innerHTML = data[attr].principiuIRez;
        motoareRez.innerHTML = data[attr].motoareRez;
        principiuIIRez.innerHTML = data[attr].principiuIIRez;
        invataTitle.forEach(el => {
            el.textContent = data[attr].invataTitle;
        });
        inchideBtn.forEach(el => {
            el.textContent = data[attr].inchideBtn;
        });
        teorieBtn.forEach(el => {
            el.textContent = data[attr].teorieBtn;
        });
        testBtn.forEach(el => {
            el.textContent = data[attr].testBtn;
        });
        acasaBtn.textContent = data[attr].acasaBtn;
    }

    //electromecanica.html
    if(window.location.pathname == "/electromecanica.html")
    {
        electromecanicaTitle.textContent = data[attr].electromecanicaTitle;
        curentulTitle.textContent = data[attr].curentulTitle;
        ohmTitle.textContent = data[attr].ohmTitle;
        kirchhoffTitle.textContent = data[attr].kirchhoffTitle;
        grupareTitle.textContent = data[attr].grupareTitle;
        energieTitle.textContent = data[attr].energieTitle;
        curentulTitleModal.textContent = data[attr].curentulTitleModal;
        ohmTitleModal.textContent = data[attr].ohmTitleModal;
        kirchhoffTitleModal.textContent = data[attr].kirchhoffTitleModal;
        grupareTitleModal.textContent = data[attr].grupareTitleModal;
        energieTitleModal.textContent = data[attr].energieTitleModal;
        curentulRez.innerHTML = data[attr].curentulRez;
        ohmRez.innerHTML = data[attr].ohmRez;
        kirchhoffRez.innerHTML = data[attr].kirchhoffRez;
        grupareRez.innerHTML = data[attr].grupareRez;
        energieRez.innerHTML = data[attr].energieRez;
        invataTitle.forEach(el => {
            el.textContent = data[attr].invataTitle;
        });
        inchideBtn.forEach(el => {
            el.textContent = data[attr].inchideBtn;
        });
        teorieBtn.forEach(el => {
            el.textContent = data[attr].teorieBtn;
        });
        testBtn.forEach(el => {
            el.textContent = data[attr].testBtn;
        });
        acasaBtn.textContent = data[attr].acasaBtn;
    }

    //optica.html
    if(window.location.pathname == "/optica.html")
    {
        opticaTitle.textContent = data[attr].opticaTitle;
        geometricaTitle.textContent = data[attr].geometricaTitle;
        ondulatorieTitle.textContent = data[attr].ondulatorieTitle;
        cuanticaTitle.textContent = data[attr].cuanticaTitle;
        geometricaTitleModal.textContent = data[attr].geometricaTitleModal;
        ondulatorieTitleModal.textContent = data[attr].ondulatorieTitleModal;
        cuanticaTitleModal.textContent = data[attr].cuanticaTitleModal;
        geometricaRez.innerHTML = data[attr].geometricaRez;
        ondulatorieRez.innerHTML = data[attr].ondulatorieRez;
        cuanticaRez.innerHTML = data[attr].cuanticaRez;
        invataTitle.forEach(el => {
            el.textContent = data[attr].invataTitle;
        });
        inchideBtn.forEach(el => {
            el.textContent = data[attr].inchideBtn;
        });
        teorieBtn.forEach(el => {
            el.textContent = data[attr].teorieBtn;
        });
        testBtn.forEach(el => {
            el.textContent = data[attr].testBtn;
        });
        acasaBtn.textContent = data[attr].acasaBtn;
    }

    //teorieMecanica.html
    if(window.location.pathname == "/teorieMecanica.html")
    {
        teorieMecanicaTitle.textContent = data[attr].teorieMecanicaTitle;
        teorieMecanica.innerHTML = data[attr].teorieMecanica;
        teorieInapoiBtn.textContent = data[attr].teorieInapoiBtn;
        cuprinsPrincipii.textContent = data[attr].cuprinsPrincipii;
        cuprinsTeoreme.textContent = data[attr].cuprinsTeoreme;
        cuprinsAcasaBtn.textContent = data[attr].acasaBtn;
        
        var hash = window.location.hash;
        if(hash == "#1")
        {
            var test = document.getElementById('1');
            test.id = 'highlight'
            window.location.href = "/teorieMecanica.html#highlight";
        }
        else if(hash == "#2")
        {
            var test = document.getElementById('2');
            test.id = 'highlight'
            window.location.href = "/teorieMecanica.html#highlight";
        }
        else if(hash == "#3")
        {
            var test = document.getElementById('3');
            test.id = 'highlight'
            window.location.href = "/teorieMecanica.html#highlight";
        }
        else if(hash == "#4")
        {
            var test = document.getElementById('4');
            test.id = 'highlight'
            window.location.href = "/teorieMecanica.html#highlight";
        }
        else if(hash == "#5")
        {
            var test = document.getElementById('5');
            test.id = 'highlight'
            window.location.href = "/teorieMecanica.html#highlight";
        }
        else if(hash == "#6")
        {
            var test = document.getElementById('6');
            test.id = 'highlight'
            window.location.href = "/teorieMecanica.html#highlight";
        }
        else if(hash == "#7")
        {
            var test = document.getElementById('7');
            test.id = 'highlight'
            window.location.href = "/teorieMecanica.html#highlight";
        }
        else if(hash == "#8")
        {
            var test = document.getElementById('8');
            test.id = 'highlight'
            window.location.href = "/teorieMecanica.html#highlight";
        }
        else if(hash == "#9")
        {
            var test = document.getElementById('9');
            test.id = 'highlight'
            window.location.href = "/teorieMecanica.html#highlight";
        }
        else if(hash == "#10")
        {
            var test = document.getElementById('10');
            test.id = 'highlight'
            window.location.href = "/teorieMecanica.html#highlight";
        }
    }

    //teorieTermodinamica.html
    if(window.location.pathname == "/teorieTermodinamica.html")
    {
        teorieTermodinamicaTitle.textContent = data[attr].teorieTermodinamicaTitle;
        teorieTermodinamica.innerHTML = data[attr].teorieTermodinamica;
        teorieInapoiBtn.textContent = data[attr].teorieInapoiBtn;
        cuprinsNotiuni.textContent = data[attr].cuprinsNotiuni;
        cuprinsPrincipiuI.textContent = data[attr].cuprinsPrincipiuI;
        cuprinsMotoare.textContent = data[attr].cuprinsMotoare;
        cuprinsPrincipiuII.textContent = data[attr].cuprinsPrincipiuII;
        cuprinsAcasaBtn.textContent = data[attr].acasaBtn;

        var hash = window.location.hash;
        if(hash == "#1")
        {
            var test = document.getElementById('1');
            test.id = 'highlight'
            window.location.href = "/teorieTermodinamica.html#highlight";
        }
        else if(hash == "#2")
        {
            var test = document.getElementById('2');
            test.id = 'highlight'
            window.location.href = "/teorieTermodinamica.html#highlight";
        }
        else if(hash == "#3")
        {
            var test = document.getElementById('3');
            test.id = 'highlight'
            window.location.href = "/teorieTermodinamica.html#highlight";
        }
        else if(hash == "#4")
        {
            var test = document.getElementById('4');
            test.id = 'highlight'
            window.location.href = "/teorieTermodinamica.html#highlight";
        }
        else if(hash == "#5")
        {
            var test = document.getElementById('5');
            test.id = 'highlight'
            window.location.href = "/teorieTermodinamica.html#highlight";
        }
        else if(hash == "#6")
        {
            var test = document.getElementById('6');
            test.id = 'highlight'
            window.location.href = "/teorieTermodinamica.html#highlight";
        }
        else if(hash == "#7")
        {
            var test = document.getElementById('7');
            test.id = 'highlight'
            window.location.href = "/teorieTermodinamica.html#highlight";
        }
        else if(hash == "#8")
        {
            var test = document.getElementById('8');
            test.id = 'highlight'
            window.location.href = "/teorieTermodinamica.html#highlight";
        }
        else if(hash == "#9")
        {
            var test = document.getElementById('9');
            test.id = 'highlight'
            window.location.href = "/teorieTermodinamica.html#highlight";
        }
        else if(hash == "#10")
        {
            var test = document.getElementById('10');
            test.id = 'highlight'
            window.location.href = "/teorieTermodinamica.html#highlight";
        }
        if(hash == "#11")
        {
            var test = document.getElementById('11');
            test.id = 'highlight'
            window.location.href = "/teorieTermodinamica.html#highlight";
        }
        else if(hash == "#12")
        {
            var test = document.getElementById('12');
            test.id = 'highlight'
            window.location.href = "/teorieTermodinamica.html#highlight";
        }
        else if(hash == "#13")
        {
            var test = document.getElementById('13');
            test.id = 'highlight'
            window.location.href = "/teorieTermodinamica.html#highlight";
        }
        else if(hash == "#14")
        {
            var test = document.getElementById('14');
            test.id = 'highlight'
            window.location.href = "/teorieTermodinamica.html#highlight";
        }
        else if(hash == "#15")
        {
            var test = document.getElementById('15');
            test.id = 'highlight'
            window.location.href = "/teorieTermodinamica.html#highlight";
        }
        else if(hash == "#16")
        {
            var test = document.getElementById('16');
            test.id = 'highlight'
            window.location.href = "/teorieTermodinamica.html#highlight";
        }
        else if(hash == "#17")
        {
            var test = document.getElementById('17');
            test.id = 'highlight'
            window.location.href = "/teorieTermodinamica.html#highlight";
        }
    }

    //teorieElectromecanica.html
    if(window.location.pathname == "/teorieElectromecanica.html")
    {
        teorieElectromecanicaTitle.textContent = data[attr].teorieElectromecanicaTitle;
        teorieElectromecanica.innerHTML = data[attr].teorieElectromecanica;
        teorieInapoiBtn.textContent = data[attr].teorieInapoiBtn;
        cuprinsCurentul.textContent = data[attr].cuprinsCurentul;
        cuprinsOhm.textContent = data[attr].cuprinsOhm;
        cuprinsKirchhoff.textContent = data[attr].cuprinsKirchhoff;
        cuprinsGrupare.textContent = data[attr].cuprinsGrupare;
        cuprinsEnergie.textContent = data[attr].cuprinsEnergie;
        cuprinsAcasaBtn.textContent = data[attr].acasaBtn;

        var hash = window.location.hash;
        if(hash == "#1")
        {
            var test = document.getElementById('1');
            test.id = 'highlight'
            window.location.href = "/teorieElectromecanica.html#highlight";
        }
        else if(hash == "#2")
        {
            var test = document.getElementById('2');
            test.id = 'highlight'
            window.location.href = "/teorieElectromecanica.html#highlight";
        }
        else if(hash == "#3")
        {
            var test = document.getElementById('3');
            test.id = 'highlight'
            window.location.href = "/teorieElectromecanica.html#highlight";
        }
        else if(hash == "#4")
        {
            var test = document.getElementById('4');
            test.id = 'highlight'
            window.location.href = "/teorieElectromecanica.html#highlight";
        }
        else if(hash == "#5")
        {
            var test = document.getElementById('5');
            test.id = 'highlight'
            window.location.href = "/teorieElectromecanica.html#highlight";
        }
        else if(hash == "#6")
        {
            var test = document.getElementById('6');
            test.id = 'highlight'
            window.location.href = "/teorieElectromecanica.html#highlight";
        }
        else if(hash == "#7")
        {
            var test = document.getElementById('7');
            test.id = 'highlight'
            window.location.href = "/teorieElectromecanica.html#highlight";
        }
        else if(hash == "#8")
        {
            var test = document.getElementById('8');
            test.id = 'highlight'
            window.location.href = "/teorieElectromecanica.html#highlight";
        }
        else if(hash == "#9")
        {
            var test = document.getElementById('9');
            test.id = 'highlight'
            window.location.href = "/teorieElectromecanica.html#highlight";
        }
        else if(hash == "#10")
        {
            var test = document.getElementById('10');
            test.id = 'highlight'
            window.location.href = "/teorieElectromecanica.html#highlight";
        }
        if(hash == "#11")
        {
            var test = document.getElementById('11');
            test.id = 'highlight'
            window.location.href = "/teorieElectromecanica.html#highlight";
        }
        else if(hash == "#12")
        {
            var test = document.getElementById('12');
            test.id = 'highlight'
            window.location.href = "/teorieElectromecanica.html#highlight";
        }
        else if(hash == "#13")
        {
            var test = document.getElementById('13');
            test.id = 'highlight'
            window.location.href = "/teorieElectromecanica.html#highlight";
        }
        else if(hash == "#14")
        {
            var test = document.getElementById('14');
            test.id = 'highlight'
            window.location.href = "/teorieElectromecanica.html#highlight";
        }
        else if(hash == "#15")
        {
            var test = document.getElementById('15');
            test.id = 'highlight'
            window.location.href = "/teorieElectromecanica.html#highlight";
        }
        else if(hash == "#16")
        {
            var test = document.getElementById('16');
            test.id = 'highlight'
            window.location.href = "/teorieElectromecanica.html#highlight";
        }
        else if(hash == "#17")
        {
            var test = document.getElementById('17');
            test.id = 'highlight'
            window.location.href = "/teorieElectromecanica.html#highlight";
        }
        else if(hash == "#18")
            {
                var test = document.getElementById('18');
                test.id = 'highlight'
                window.location.href = "/teorieElectromecanica.html#highlight";
            }
            if(hash == "#19")
            {
                var test = document.getElementById('19');
                test.id = 'highlight'
                window.location.href = "/teorieElectromecanica.html#highlight";
            }
            else if(hash == "#20")
            {
                var test = document.getElementById('20');
                test.id = 'highlight'
                window.location.href = "/teorieElectromecanica.html#highlight";
            }
            else if(hash == "#21")
            {
                var test = document.getElementById('21');
                test.id = 'highlight'
                window.location.href = "/teorieElectromecanica.html#highlight";
            }
            else if(hash == "#22")
            {
                var test = document.getElementById('22');
                test.id = 'highlight'
                window.location.href = "/teorieElectromecanica.html#highlight";
            }
            else if(hash == "#23")
            {
                var test = document.getElementById('23');
                test.id = 'highlight'
                window.location.href = "/teorieElectromecanica.html#highlight";
            }
            else if(hash == "#24")
            {
                var test = document.getElementById('24');
                test.id = 'highlight'
                window.location.href = "/teorieElectromecanica.html#highlight";
            }
    }

    //teorieOptica.html
    if(window.location.pathname == "/teorieOptica.html")
    {
        teorieOpticaTitle.textContent = data[attr].teorieOpticaTitle;
        teorieOptica.innerHTML = data[attr].teorieOptica;
        teorieInapoiBtn.textContent = data[attr].teorieInapoiBtn;
        cuprinsGeometrica.textContent = data[attr].cuprinsGeometrica;
        cuprinsOndulatorie.textContent = data[attr].cuprinsOndulatorie;
        cuprinsCuantica.textContent = data[attr].cuprinsCuantica;
        cuprinsAcasaBtn.textContent = data[attr].acasaBtn;
    }

    //test.html
    if(window.location.pathname == "/test.html")
    {
        startTestBtn.textContent = data[attr].startTestBtn;
        iesiBtn.textContent = data[attr].iesiBtn;
        reguliTitle.textContent = data[attr].reguliTitle;
        reguli.innerHTML = data[attr].reguli;
        iesiTestBtn.forEach(el => {
            el.textContent = data[attr].iesiTestBtn;
        });
        continuaTestBtn.textContent = data[attr].continuaTestBtn;
        testTitle.textContent = data[attr].testTitle;
        timpRamas.textContent = data[attr].timpRamas;
        urmatorulTestBtn.textContent = data[attr].urmatorulTestBtn;
        finalTestTitle.textContent = data[attr].finalTestTitle;
        nouTestBtn.textContent = data[attr].nouTestBtn;
        veziDeCeBtn.textContent = data[attr].veziDeCeBtn;
    }
}

var data = {
    "engleza":
    {
        //index.html
        "titleSet": "Settings",
        "titleLogin": "Log in",
        "titleDisconnect": "Sign Out",
        "titleStatistica": "Your test results",
        "corecte": "Right",
        "gresite": "Wrong",
        "titleLang": "Languages",
        "titleMec": "Mechanics",
        "titleTer": "Thermodynamics",
        "titleElec": "Electromechanics",
        "titleOp": "Optics",

        //register.html
        "goBackReg": "go back",
        "titleReg": "Enter your registration credentials",
        "usernameReg": "Enter your username",
        "emailReg": "Enter your email",
        "passwordReg": "Enter your password",
        "register": "Register account",
        "footerReg": "Already have an account?",
        "footerRegBtn": "Log in",

        //login.html
        "goBackLog": "go back",
        "titleLog": "Enter your login credentials",
        "emailLog": "Enter your email",
        "passwordLog": "Enter your password",
        "login": "Log in",
        "footerLog": "Not registered?",
        "footerLogBtn": "Create an account",

        //test.html
        "startTestBtn": "Start",
        "iesiBtn": "Exit",
        "reguliTitle": "Some rules of this test",
        "reguli": ('<div class="info">1. You will only have <span>15 seconds</span> for each question.</div>'+
                    '<div class="info">2. Once you select an answer, you cannot change it.</div>'+
                    '<div class="info">3. You can no longer select answers once the time is up.</div>'+
                    '<div class="info">4. You cannot exit during the test.</div>'+
                    '<div class="info">5. You will receive points based on your answers.</div>'),
        "iesiTestBtn": "Exit the test",
        "continuaTestBtn": "Continue",
        "testTitle": "Test",
        "timpRamas": "Remaining time:",
        "gataTimpul": "Time finished",
        "urmatorulTestBtn": "Next",
        "finalTestTitle": "You have completed the test!",
        "nouTestBtn": "Take the test again",
        "veziDeCeBtn": "See why",

        //mecanica.html
        "mecanicaTitle": "Mechanics",
        "principiiTitle": "Principles and laws",
        "teoremeTitle": "Variation theorems and conservation laws",
        "principiiTitleModal": "Principles and laws of classical mechanics",
        "teoremeTitleModal": "Variation theorems and conservation laws",
        "principiiRez": ('<li>'+'Movement and rest'+'</li>'+
                         '<li>'+'First principle of mechanics'+'</li>'+
                         '<li>'+'Second principle of mechanics'+'</li>'+
                         '<li>'+'The third principle of mechanics'+'</li>'+
                         '<li>'+'Hooke\'s law and tension in the wire'+'</li>'+
                         '<li>'+'The laws of sliding friction'+'</li>'),
        "teoremeRez": ('<li>'+'Mechanical work and mechanical power'+'</li>'+
                        '<li>'+'Kinetic energy variation theorem'+'</li>'+
                        '<li>'+'Gravitational potential energy'+'</li>'+
                        '<li>'+'The law of conservation of mechanical energy'+'</li>'+
                        '<li>'+'The momentum variation theorem'+'</li>'+
                        '<li>'+'Law of conservation of momentum'+'</li>'),

        //termodinamica.html
        "termodinamicaTitle": "Thermodynamics",
        "notiuniTitle": "Getting started",
        "principiuITitle": "The first principle",
        "motoareTitle": "Thermal engines",
        "principiuIITitle": "The second principle",
        "notiuniTitleModal": "Basic concepts in thermodynamics",
        "principiuITitleModal": "The first principle of thermodynamics",
        "motoareTitleModal": "Thermal engines",
        "principiuIITitleModal": "The second principle of thermodynamics",
        "notiuniRez": ('<li>'+'Molecular mass'+'</li>'+
                        '<li>'+'Relative molecular mass'+'</li>'+
                        '<li>'+'Amount of substance'+'</li>'+
                        '<li>'+'Molar mass'+'</li>'+
                        '<li>'+'Molar volume'+'</li>'+
                        '<li>'+'Avogadro\'s number'+'</li>'+
                        '<li>'+'Thermal balance'+'</li>'+
                        '<li>'+'Correspondence between numerical value of temperature in Celsius scale and numerical value x'+'</li>'),
        "principiuIRez": ('<li>'+'Mechanical work in thermodynamics, process quantity'+'</li>'+
                        '<li>'+'Geometric interpretation of mechanical work in thermodynamics'+'</li>'+
                        '<li>'+'Internal energy of a thermodynamic system, state quantity'+'</li>'+
                        '<li>'+'Heat, process size'+'</li>'+
                        '<li>'+'Adiabatic shell'+'</li>'+
                        '<li>'+'The first principle of thermodynamics'+'</li>'+
                        '<li>'+'Caloric coefficients (definition relations, SI units)'+'</li>'+
                        '<li>'+'The Robert-Mayer relationship'+'</li>'+
                        '<li>'+'Application of the First Principle of thermodynamics to ideal gas transformations:'+'<br>'+
                            '<ul>'+
                                '<li>'+'Internal energy of ideal gas (monoatomic, diatomic, polyatomic)'+'</li>'+	
                                '<li>'+'Variation of internal energy, mechanical work and amount of heat for simple ideal gas transformations (isobaric, isochoric, isothermal, adiabatic)'+'</li>'+
                            '</ul>'+
                        '</li>'),
        "motoareRez": ('<li>'+'Explaining the functionality of a heat engine'+'</li>'+
                    '<li>'+'Description of the main thermodynamic cycles – Otto, Diesel – based on which heat engines work'+'</li>'+
                    '<li>'+'The efficiency of a heat engine'+'</li>'),
        "principiuIIRez": ('<li>'+'The Carnot cycle, the efficiency of the Carnot cycle'+'</li>'),

        //electromecanica.html
        "electromecanicaTitle": "Electromechanics",
        "curentulTitle": "Electricity",
        "ohmTitle": "Ohm's law",
        "kirchhoffTitle": "Kirchhoff's law",
        "grupareTitle": "Grouping of resistors and generators",
        "energieTitle": "Energy and electrical power",
        "curentulTitleModal": "Electricity",
        "ohmTitleModal": "Ohm's law",
        "kirchhoffTitleModal": "Kirchhoff's law",
        "grupareTitleModal": "Grouping of resistors and generators",
        "energieTitleModal": "Energy and electrical power",
        "curentulRez": ('<li>'+'Electricity'+'</li>'+
                        '<li>'+'The intensity of the electric current'+'</li>'+
                        '<li>'+'The unit of measurement of the intensity of the electric current'+'</li>'+
                        '<li>'+'Simple electrical circuit'+'</li>'+
                        '<li>'+'The electromotive voltage of an electric generator, the voltage at the generator terminals, the voltage drop inside the generator'+'</li>'),
        "ohmRez": ('<li>'+'Electrical resistance'+'</li>'+
                    '<li>'+'Ohm\'s law for a portion of a circuit and for the entire circuit'+'</li>'+
                    '<li>'+'The unit of measure for electrical resistance'+'</li>'+
                    '<li>'+'Electrical resistance, dependence of electrical resistivity on temperature'+'</li>'),
        "kirchhoffRez": ('<li>'+'The electrical network'+'</li>'+
                        '<li>'+'The network node'+'</li>'+
                        '<li>'+'The network eye'+'</li>'+
                        '<li>'+'Kirchhoff\'s laws'+'</li>'),
        "grupareRez": ('<li>'+'The equivalent electrical resistance of series, parallel or mixed grouping of several resistors'+'</li>'+
                        '<li>'+'The equivalent electrical resistance and the equivalent electromotive voltage corresponding to the series/parallel grouping of several electrical generators'+'</li>'),
        "energieRez": ('<li>'+'The expression of the energy transmitted by the generator to the consumer in a time interval'+'</li>'+
                        '<li>'+'Expression of the energy dissipated inside the generator'+'</li>'+
                        '<li>'+'The efficiency of a simple electric circuit'+'</li>'+
                        '<li>'+'Electric power, relationships that characterize electric power'+'</li>'),

        //optica.html
        "opticaTitle": "Optics",
        "geometricaTitle": "Geometric optics",
        "ondulatorieTitle": "Wave optics",
        "cuanticaTitle": "Elements of quantum physics",
        "geometricaTitleModal": "Geometric optics",
        "ondulatorieTitleModal": "Wave optics",
        "cuanticaTitleModal": "Elements of quantum physics",
        "geometricaRez": ('<li>'+'Light reflection'+'</li>'+
                            '<li>'+'Refraction of light'+'</li>'+
                            '<li>'+'The laws of reflection'+'</li>'+
                            '<li>'+'The laws of refraction'+'</li>'+
                            '<li>'+'Refractive index'+'</li>'+
                            '<li>'+'Conjugate points'+'</li>'+
                            '<li>'+'Fasciculele paraxiale'+'</li>'+
                            '<li>'+'Real/virtual images'+'</li>'+
                            '<li>'+'Optical lens'+'</li>'+
                            '<li>'+'The characteristic elements of a thin lens (axes, optical center, foci)'+'</li>'+
                            '<li>'+'Convergence of a thin lens'+'</li>'+
                            '<li>'+'Thin lens formulas'+'</li>'+
                            '<li>'+'Images of real/viral objects in thin lenses'+'</li>'+
                            '<li>'+'Lens systems'+'</li>'),
        "ondulatorieRez": ('<li>'+'Conditions for obtaining stationary interference'+'</li>'+
                            '<li>'+'The wavelength'+'</li>'+
                            '<li>'+'Components of Young\'s device'+'</li>'+
                            '<li>'+'Interference fringes'+'</li>'+
                            '<li>'+'Optical path difference'+'</li>'+
                            '<li>'+'Maximum and minimum interference conditions'+'</li>'+
                            '<li>'+'Interfringe'+'</li>'),
        "cuanticaRez": ('<li>'+'The laws of the external photoelectric effect'+'</li>'+
                        '<li>'+'Planck\'s hypothesis. Einstein\'s hypothesis. Einstein\'s equation'+'</li>'+
                        '<li>'+'Interpretation of the laws of the external photoelectric effect'+'</li>'),
        
        //teorieMecanica.html
        "teorieMecanicaTitle": "Mechanics theory",
        "teorieMecanica": ('<u>'+'<h2 class=\"p-3\" align = center>'+'Principles and laws'+'</h2>'+'<br>'+'<br>'+' <br>'+'</u>'+
                        '<h2 class=\"p-3\">'+'Speed'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Formula: '+'<b>'+'v = d/Δt'+'</b>'+'</li>'+
                            '<li>'+'Measurement unit: '+'<b>'+'&lt;'+'v'+'&gt;'+' = m/s'+'</b>'+'</li>'+
                                    '<li>'+'Average speed: '+'<b>'+'v'+'<small>'+'m'+'</small>'+' = Δd/Δt'+'</b>'+'</li>'+
                                    '<li>'+'Velocity vector has the same meaning as displacement: v'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>'+ ' = d'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>'+' /Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Acceleration'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Formula: '+'<b>'+'a = Δv/Δt'+'</b>'+'</li>'+
                            '<li>'+'Measurement unit: '+'<b>'+'&lt;'+'a'+'&gt;'+' = m/s'+'<sup>'+'2'+ '</sup>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'The Galileo formula:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v'+'<sup>'+'2'+'</sup>'+' = v'+'<sub>'+'0'+'</sub>'+'<sup>'+'2'+'</sup>'+' + 2a(x-x'+'<sub>'+'0'+'</sub>'+') '+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Speed ​​law: '+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v = v'+'<sub>'+'0'+'</sub>'+' + at'+'</b>'+'</li>'+
                        '</ul>'+    
                        '<h2 class=\"p-3\">'+'Law of motion:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'x = 1/2at'+'<sup>'+'2'+'</sup>'+' + v'+'<sub>'+'0 '+'</sub>'+'t + x'+'<sub>'+'0'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Principle I of mechanics:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Any body maintains its state of rest or uniform rectilinear motion as long as no other forces act on it or the sum of the forces acting on it is zero.'+'</li>'+
                            '<li>'+'In short: Velocity is '+'<b>'+'constant'+'</b>'+' if '+'<b>'+'the resultant of the forces applied to the body'+' </b>'+' is 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Second principle of mechanics:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'The change in the amount of motion of a body is directly proportional to the applied force and occurs in the direction in which the force acts.'+'</li>'+
                            '<li>'+'Said in other words: a force acting on a body gives it an acceleration, proportional to the force and inversely proportional to the mass of the body.'+'</li>'+
                            '<li>'+'Formula: F = ma'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Third principle of mechanics:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'When one body acts on another body with a force (called the action force), the second body also acts on the first body with a force (called the reaction force) of the same magnitude and direction, but opposite. This principle is also known as the Principle of Action and Reaction.'+'</li>'+
                            '<li>'+'Written as a formula: '+'<b>'+'F'+'<sub>'+'a'+'</sub>'+' = F'+'<sub>'+'r'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Hooke\'s law:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'The elongation of a spring is directly proportional to the deforming Force (F):'+'</li>'+'<br>'+
    
                            'Δl ~ F'+'<br>'+'<br>'+
    
                            '<li>'+'Directly proportional to the Initial Spring Length (l'+'<sub>'+'0'+'</sub>'+') :'+'</li>'+'<br>'+
                            
                            'Δl ~ l'+'<sub>'+'0'+'</sub>'+'<br>'+'<br>'+
    
                            '<li>'+'Inversely proportional to the cross-sectional area of ​​the spring:'+'</li>'+'<br>'+
    
                            'Δl ~ 1/S'+'<br>'+'<br>'+
    
                            '<li>'+'Hooke\'s law:'+'</li>'+'<br>'+
                            'F/S = E∙Δl/l'+'<sub>'+'0'+'</sub>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Wire tension:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'The tension in the wire ( T ) represents the reaction force of the inextensible wire (which does not elongate) to the force exerted on it.'+'</li>'+'<br>'+
                            '<li>'+'When we suspend a body from an inextensible thread, two paired forces appear:'+'<br>'+'<br>'+
    
                                'The pressing force of the body (F) is the force with which the body acts on the wire (it is equal to the weight of the body).'+'<br>'+'<br>'+
                                
                                'The tension in the wire (T) is the force with which the wire acts on the body suspended on it.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Laws of sliding friction:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'First Law of Friction:'+'<br>'+'<br>'+
                            
                                'The value of the sliding friction force depends on the nature and degree of processing of the surfaces in contact. The dependence is characterized by a dimensionless quantity, called sliding friction coefficient, which takes values ​​between 0 and 1 and is denoted by μ.'+'<br>'+'<br>'+
    
                                'Ff ~ μ'+'</li>'+'<br>'+
    
                            '<li>'+'The Second Law of Friction:'+'<br>'+'<br>'+
                                'The value of the sliding friction force does not depend on the area of ​​the contact surface between the bodies.'+'<br>'+'<br>'+'</li>'+
                                
                            '<li>'+'Third Law of Friction:'+'<br>'+'<br>'+
                                'The value of the sliding friction force depends on the pressing force exerted by the body on the sliding surface, which is equal in magnitude to the normal reaction force at the contact surface between the bodies.'+'<br>'+'<br>' +
    
                            'Ff ~ N'+'</li>'+'<br>'+
                            '<li>'+'The formula of the frictional force is given by the relation:'+'<br>'+'<br>'+
                                'Ff = μ ∙ N'+'</li>'+
                        '</ul>'+
    
                        //Teoreme de variatie si legi de conservare
                        
                        '<a name=\"element_target\">'+'</a>'+
                        '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center>'+'Theorems of variation and conservation laws'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                        
                        '<h2 class=\"p-3\">'+'Mechanical work:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'The mechanical work (L) of a constant force acting on a body in the direction and direction of the body\'s displacement is the scalar physical quantity equal to the product of the modulus of the force (F) and the modulus of the displacement of the body (d).' +'</li>'+'<br>'+
                            '<li>'+'Calculation formula: L = F ∙ d'+'</li>'+'<br>'+
                            '<li>'+'Sign conventions:'+'<br>'+
                                '1. The mechanical work of a force is positive if the force helps move the body. This happens if the force has the same direction and sense as the movement of the body.'+'<br>'+'<br>'+
                                '2. The mechanical work of a force is negative if the force opposes the motion of the body. This happens if the component of the force vector in the direction of motion is opposite to the body\'s motion.'+'<br>'+'<br>'+
                                '3. The mechanical work of a force is zero if the force neither helps the body move nor opposes the movement. This happens if the force vector is perpendicular to the direction of the body\'s movement.'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Mechanical power:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Mechanical power (P) is the scalar physical quantity equal to the ratio between the mechanical work (L) performed and the time (Δt) during which this mechanical work is performed.'+'</li>'+'<br>'+
                            '<li>'+'P = Mechanical work / time = L / Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Kinetic energy:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Mechanical energy (E) is the physical quantity that characterizes the ability of a body to perform mechanical work, the unit of measure being the joule (J).'+'</li>'+'<br>' +
                            '<li>'+'Kinetic energy (E'+'<sub>'+'c'+'</sub>'+') is the energy that a moving body has.'+'</li> '+'<br>'+
                            '<li>'+'The kinetic energy of a moving body with a certain speed is calculated with the formula:'+'<br>'+'<br>'+
                                'E'+'<sub>'+'c'+'</sub>'+' = m ∙ v'+'<sup>'+'2'+'</sup>'+' / 2 '+ '</li>'+'<br>'+
                            '<li>'+'The law of variation of kinetic energy:'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'c'+'</sub>'+' = L'+'<sub>'+'Total'+'</sub>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Gravitational potential energy:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Gravitational potential energy (E'+'<sub>'+'pg'+'</sub>'+') is the energy that a body has at a certain height from the ground. '+'</li>'+'<br>'+
                            '<li>'+'The gravitational potential energy of a body is equal to: E'+'<sub>'+'pg'+'</sub>'+' = m ∙ g ∙ h'+'</li>'+'<br>'+
                            '<li>'+'Law of variation of gravitational potential energy:'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'pg'+'</sub>'+' = -L'+'<sub>'+'G'+'</sub>'+'</li>' +'<br>'+
                            '<li>'+'A force that does mechanical work that is independent of the path traveled and depends only on the extreme positions (initial and final) is called a conservative force.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Conservation of mechanical energy:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'The law of conservation of mechanical energy:'+'<br>'+'<br>'+
    
                                '\"The mechanical energy of a body is conserved if only conservative forces act on it.\"'+'<br>'+'<br>'+
                            
                                'E = constant, if the body is isolated from the outside and F'+'<sub>'+'f'+'</sub>'+' = 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Momentum Variation Theorem:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'The momentum of the body is denoted by the Law of Conservation of Momentum and has the formula:'+'<br>'+'<br>'+
                            'p'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = m ∙ v'+'<span style=\" vertical-align : 4px;\">'+'&#8407;'+'</span>'+'</li>'+'<br>'+
                            '<li>'+'Theorem of variation of mechanical impulse'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<span style=\"vertical- align : 4px;\">'+'&#8407;'+'</span>'+' ∙ Δt'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'The law of conservation of momentum:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'When the mechanical system is isolated, the resultant force F'+'<sub>'+'R'+'</sub>'+'<span style=\"vertical-align : 4px; margin- left : -1.5px\">'+'&#8407;'+'</span> '+'is zero.'+'<br>'+'<br>'+
                            'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<sub>'+'R' +'</sub>'+'<span style=\"vertical-align : 4px; margin-left : -1.5px\">'+'&#8407;'+'</span>'+' ∙ Δt = 0 ∙ Δt = 0'+'</li>'+'<br>'+
                            '<li>'+'The law of conservation of mechanical momentum in SRI:'+'<br>'+'<br>'+
                                'The mechanical momentum of isolated mechanical systems is conserved.'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = 0, i.e. Δp'+'<span style=\ "vertical-align : 4px; \">'+'&#8407;'+'</span>'+' = const'+'<span style=\"vertical-align : 4px; margin-left : -25px \">'+'&#8407;'+'</span>'+'</li>'+'<br>'+
                                '<li>'+'In the case of isolated mechanical systems, their total momentum cannot change under the action of internal forces.'+'</li>'+
                        '</ul>'),

        //teorieTermodinamica.html
        "teorieTermodinamicaTitle": "Thermodynamic theory",
        "teorieTermodinamica": ('<u>'+'<h2 class=\"p-3\" align = center>'+'Basic thermodynamic concepts'+'</h2>'+'<br>'+'<br>'+ '<br>'+'</u>'+
                                '<ul>'+
                                    '<li>'+'<b>'+'Thermal agitation'+'</b>'+' is the disordered and continuous movement of the particles of a substance (atoms or molecules).'+'</li>'+' <br>'+
                                    '<li>'+'<b>'+'Diffusion'+'</b>'+' is the phenomenon of penetration of the molecules of one substance among the molecules of another substance, without the intervention of an external force (by itself).'+ '</li>'+'<br>'+
                                    '<li>'+'<b>'+'Atom'+'</b>'+' is the smallest particle of a substance that cannot be further divided by ordinary chemical processes.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Molecule'+'</b>'+' represents the smallest particle in a substance, which can also exist in a free state and which retains the properties of the substance from which it comes. '+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Molecular mass'+'</b>'+' is a dimensionless quantity (no unit of measure) that shows us how many times the real mass of a molecule is greater than atomic mass unit (u.a.m.).'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'The relative atomic mass (A)'+'</b>'+' is the number that shows how many times the mass of an atom is greater than the atomic mass unit.'+ '</li>'+'<br>'+
                                    '<li>'+'<b>'+'A mole of atoms'+'</b>'+' represents the amount, in grams, of a simple substance that contains 6.022 ∙ 10'+'<sup>' +'23'+'</sup>'+' atoms. It is written with the Greek letter "niu"= υ.'+'<br>'+'<br>'+
                                        'υ = m(g) / A(g/mol) = mass of simple substance(g) / atomic mass(g/mol)'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Avogadro\'s number'+'</b>'+', denoted by N'+'<sub>'+'A'+'</sub>'+' , is equal to 6.022 ∙10'+'<sup>'+'23'+'</sup>'+' mol'+'<sup>'+'-1'+'</sup>'+' atoms and represents the number of atoms contained in a mole of atoms of any simple substance.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Molar mass'+'</b>'+' (denoted by the Greek letter miu = μ) is the mass of one mole of substance. Its unit of measure is g/mol.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'The mole'+'</b>'+' is the unit of measure in the International System of the amount of substance that contains a number of particles equal to Avogadro\'s number, N'+ '<sub>'+'A.'+'</sub>'+'<br>'+'<br>'+
                                        'υ = m(g) / μ(g/mol) = Mass of compound(g) / Molar mass(g/mol)'+'<br>'+'<br>'+
                                        'υ = N / N'+'<sub>'+'A'+'</sub>'+' = Number of particles / Avogadro\'s number'+'</li>'+'<br>'+
                                    '<li>'+'One mole of any gas occupies under normal conditions of temperature (273 K) and pressure (10'+'<sup>'+'5'+'</sup>'+' Pa) a volume , called '+'<b>'+'molar volume'+'</b>'+' = V'+'<sub>'+'μ'+'</sub>'+' = 22.4 L /mol'+'<br>'+'<br>'+
                                        'v = V / V'+'<sub>'+'μ'+'</sub>'+' = Gas volume(L) / Molar volume(L/mol)'+'<br>'+'<br>'+
                                        'The relationship between the molar volume and the density of a substance is:'+'<br>'+'<br>'+
                                        'P = μ / V'+'<sub>'+'μ'+'</sub>'+'<br>'+'<br>'+
                                        'The volume number (n) represents the number of particles (atoms or molecules) in a m3 of substance:'+'<br>'+'<br>'+
                                        'n = N'+'<sub>'+'A'+'</sub>'+' / V'+'<sub>'+'μ'+'</sub>'+' = N / V '+'<br>'+'<br>'+'</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Thermodynamic equilibrium and thermodynamic processes:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'<b>'+'The state of a thermodynamic system'+'</b>'+', at a certain moment, is characterized by certain physical quantities called state parameters.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Principle of thermodynamic equilibrium'+'</b>'+':'+'<br>'+'<br>'+

                                        'An isolated thermodynamic system spontaneously evolves towards a state of thermodynamic equilibrium that it never leaves on its own.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'The state of thermodynamic equilibrium'+'</b>'+' of a system can be changed by contact :'+'<br>'+'<br>'+
                                        '- mechanical with the external environment'+'<br>'+
                                        '- thermal with another environment (when two bodies with different temperatures touch) or with the external environment'+'<br>'+
                                        '- substance exchange with the external environment or other environment'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'The thermodynamic process'+'</b>'+' (state transformation) represents the transition of the system from one state to another.'+'</li>'+' <br>'+
                                    '<li>'+'<b>'+'Quasi-static transformation'+'</b>'+' occurs when the intermediate states the system passes through are states of thermal equilibrium, when the state parameters vary very slowly.' +'</li>'+'<br>'+
                                    '<li>'+'<b>'+'The reversible process'+'</b>'+' is the quasi-static transformation that can occur in both directions, through the same intermediate states.'+'</li>'+ '<br>'+
                                    '<li>'+'The equation of state (called Clapeyron - Mendeleev) describes the dependence between the state parameters of a thermodynamic system:'+'<br>'+'<br>'+                                       'p ∙ V = ν ∙ R ∙ T'+'<br>'+'<br>'+
                                        'p = ideal gas pressure'+'<br>'+

                                        'V = ideal gas volume'+'<br>'+

                                        'ν = number of moles of ideal gas'+'<br>'+

                                        'R = universal gas constant = 8.3143 ∙ 10'+'<sup>'+'3'+'</sup>'+' J/kmol ∙ K'+'<br>'+

                                        'T = ideal gas temperature'+'</li>'+
                                '</ul>'+
                                '<h2 align = center>'+
                                '<img src = \"img/transformari.png\" width = 360>'+
                                '</h2>'+
                                '<h2 class=\"p-3\">'+'Empirical temperature. Temperature scales:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'Two closed thermodynamic systems adiabatically isolated from the outside that do not exchange energy with each other have the same temperature, called the '+'<b>'+'empirical temperature.'+'</b>'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Temperature'+'</b>'+' is a physical quantity of state measured with a thermometer, involving a thermometric body, a thermometric quantity, and a temperature scale.' +'</li>'+'<br>'+
                                    '<li>'+'<b>'+'The zero principle of thermodynamics'+'</b>'+' (transitivity of thermal equilibrium):'+'<br>'+'<br>'+
                                        'If system A is in thermal equilibrium with system B and system B is in thermal equilibrium with system C, then system A is also in thermal equilibrium with system C.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Transformation relation'+'</b>'+' between Celsius t(°C) and Fahrenheit tF (°F):'+'<br>'+ '<br>'+
                                        't'+'<sub>'+'F'+'</sub>'+' = 9/5 ∙ t(°C) + 32'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Kelvin scale'+'</b>'+' (absolute): '+'<br>'+'<br>'+
                                        '[T]'+'<sub>'+'SI'+'</sub>'+' = K (kelvin)'+'<br>'+'<br>'+
                                        'T(K) = t (°C) + 273.15'+'</li>'+
                                '</ul>'+

                                //Principiul I
                                '<a name=\"element_target\">'+'</a>'+
                                '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center>'+'The principle I'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                

                                '<h2 class=\"p-3\">'+'Mechanical work:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'The exchange of energy between a closed thermodynamic system and the external environment can take place in two ways:'+'<br>'+'<br>'+
                                        '- By performing mechanical work'+'<br>'+
                                        '- By heat transfer.'+'<br>'+'<br>'+
                                        
                                        'The measure of the energy transferred to the system under the conditions of the interactions that result in the variation of the position parameters under the action of some forces is called '+'<b>'+'mechanical work.'+'</b>'+'<br>'+' <br>'+
                                        'L = F ∙ d'+'</li>'+'<br>'+
                                    '<li>'+'The mechanical work done by the external force F'+'<sub>'+'e'+'</sub>'+' is :'+'<br>'+'<br>'+
                                        'L'+'<sub>'+'e'+'</sub>'+' = p'+'<sub>'+'e'+'</sub>'+' ∙ S ∙ (x1 - x2) = - p'+'<sub>'+'e'+'</sub>'+' ∙ ΔV'+'<br>'+'<br>'+
                                        'S = cross-sectional area of ​​cylinder'+'<br>'+
                                        'p'+'<sub>'+'e'+'</sub>'+' = external pressure'+'<br>'+

                                        'V2 = S ∙ x2'+'<br>'+
                                        'V1 = S ∙ x1'+'<br>'+
                                        
                                        'ΔV = V2 - V1'+'</li>'+'<br>'+
                                        '<li>'+'The mechanical work done by the thermodynamic system in an isobaric transformation is:'+'<br>'+'<br>'+
                                        'L = p ∙ ΔV'+'</li>'+'<br>'+
                                    
                                    '<li>'+'Sign conventions for the mechanical work done by the thermodynamic system:'+'<br>'+'<br>'+
                                    
                                        'a) If the gas expands (increases its volume), ΔV > 0, then L > 0 and the system performs mechanical work on the external medium (yields L).'+'<br>'+'<br>'+
                                    
                                        'b) If the gas is compressed (its volume decreases), ΔV < 0, then L < 0 and mechanical work is done on the system (receives L).'+'<br>'+'<br>'+
                                    
                                        'c) If there is no transfer of energy through mechanical work between the system and the outside (L = 0), then the gas does not change its volume (ΔV=0).'+'</li>'+'<br>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Mechanical work:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'The energy of the particles of a real gas is given by:'+'<br>'+'<br>'+
                                        '- External energy is given by the sum of the kinetic energy of the system as a whole and its potential energy in a force field.'+'<br>'+'<br>'+
                                        '- Internal energy (U) is given by the sum of the kinetic energies of the molecules (E'+'<sub>'+'c'+'</sub>'+') and the potential energies of interaction between the molecules of the thermodynamic system (E '+'<sub>'+'p'+'</sub>'+').'+'<br>'+'<br>'+
                                        'U = Ec + Ep'+'<br>'+'<br>'+
                                        '- But the internal energy variation (ΔU = U'+'<sub>'+'2'+'</sub>'+' – U'+'<sub>'+'1'+'</sub>' +') is a physical state quantity and does not depend on the intermediate states through which the system passes, but only on the initial state (U'+'<sub>'+'1'+'</sub>'+') and the final (U'+'<sub>'+'2'+'</sub>'+').'+

                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Heat:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Heat (Q) is a physical quantity that measures the energy transferred, only through the disordered movement of molecules between two bodies in thermal contact.'+'<br>'+'<br>'+

                                        '[Q]'+'<sub>'+'SI'+'</sub>'+' = J(joule)'+'<br>'+'<br>'+
                                        'Another tolerated unit of measure for heat is the calorie: 1cal = 4.18 J'+
                                    '</li>'+'<br>'+
                                    '<li>'+'Sign conventions for heat:'+'<br>'+'<br>'+
                                        'a) When the system receives heat from outside, then Q > 0'+'<br>'+'<br>'+
                                        'b) When the system gives off heat to the outside, then Q < 0'+'<br>'+'<br>'+
                                        'c) When the system is isolated adiabatically (does not exchange heat with the outside), then Q = 0'+
                                    '</li>'+'<br>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Consequences of the first principle of thermodynamics:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'State the first principle of thermodynamics:'+'<br>'+'<br>'+
                                        'The variation of the internal energy of a system in some process is:'+'<br>'+'<br>'+
                                        'ΔU = Q - L'+'</li>'+'<br>'+
                                    '<li>'+'If the system is isolated (it exchanges neither heat nor mechanical work with the outside), then'+'<br>'+'<br>'+
                                        'Q = L = 0, ΔU = U2 – U1 = 0 and U1 = U2, i.e. the internal energy of an isolated system is conserved.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'The equation of the first principle of thermodynamics can also be written in the form of the definition of heat:'+'<br>'+'<br>'+
                                        'Q = ΔU + L, i.e. the heat received by a system serves both to change the internal energy of the system and to perform mechanical work by the system.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'If the system is adiabatically isolated (does not exchange heat with the outside), then'+'<br>'+'<br>'+
                                        'Q = 0 and L = –ΔU = –(U2 – U1), i.e. an isolated adiabatic system exchanges mechanical work with the outside only due to the variation of internal energy.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'If the system does not exchange mechanical work with the outside (L= 0), but only heat then'+'<br>'+'<br>'+
                                        'ΔU = Q, i.e. the heat received by the system leads to an increase in the internal energy of the system.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'In a cyclic transformation, ΔU = U2 – U1 = 0 and L = Q, that is, the system can perform mechanical work only if it receives heat from the outside.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'From this follows the impossibility of the existence of a perpetuum mobile of the first kind (a device that produces mechanical work without consuming energy from the outside).'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Caloric coefficients:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'The specific heat (c) represents the physical quantity that characterizes the heat absorbed/given up by 1kg of substance to increase/decrease its temperature by one degree. It is a material constant and can be found in the table of constants at the end of this chapter.'+'<br>'+'<br>'+
                                        'c = 1 / m ∙ Q / ΔT'+'<br>'+'<br>'+
                                        '[c]'+'<sub>'+'SI'+'</sub>'+' = J/Kg∙K'+'<br>'+'<br>'+
                                        'Q = m ∙ c ∙ ΔT'+'<br>'+
                                        'm = body mass'+'<br>'+
                                        'c = specific heat'+'<br>'+
                                        'ΔT = T'+'<sub>'+'final'+'</sub>'+' – T'+'<sub>'+'initial'+'</sub>'+' , the body temperature variation '+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'received'+'</sub>'+' > 0'+'<br>'+
                                        'Q'+'<sub>'+'given'+'</sub>'+'< 0 '+'<br>'+'<br>'+
                                        'The calorimetric equation: '+'<br>'+'Q'+'<sub>'+'received'+'</sub>'+' = | Q'+'<sub>'+'given'+'</sub>'+' |'+'<br>'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'The heat capacity (C) represents the physical quantity that characterizes the amount of heat required by the thermodynamic system to vary its temperature by one degree.'+'<br>'+'<br>'+
                                        'C = Q / ΔT'+'<br>'+'<br>'+
                                        '[C]'+'<sub>'+'SI'+'</sub>'+' = J/Kg'+'<br>'+'<br>'+
                                        'Q = C ∙ ΔT'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Molar heat (C'+'<sub>'+'μ'+'</sub>'+') is the heat required to change the temperature of one mole of a substance by one degree.'+'<br>' +'<br>'+
                                        'C'+'<sub>'+'μ'+'</sub>'+' = Q / v ∙ ΔT'+
                                        '[C'+'<sub>'+'μ'+'</sub>'+'] = J/mol∙K'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Degrees of freedom:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'As in thermodynamics ideal gas molecules are considered material points, the independent coordinates that characterize the thermodynamic system are called degrees of freedom.'+'<br>'+'<br>'+
                                        '- For monatomic gases: i = 3'+'<br>'+
                                        '- For diatomic gases: i = 5'+'<br>'+
                                        '- For polyatomic gases: i = 6'+'<br>'+'<br>'+

                                        'The molar heat at constant volume is:'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'v'+'</sub>'+' = i/2 R'+'<br>'+'<br>'+
                                        'The molar heat at constant pressure is:'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = (i + 2)/2 R'+'<br>'+'<br>'+
                                        'R = 8.3143 ∙ 10'+'<sup>'+'3'+'</sup>'+' J/kmol ∙ K (universal gas constant)'+'</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Isochore transformation :'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'(ν and V const.) → ΔV = 0 → L'+'<sub>'+'V'+'</sub>'+' = p ∙ ΔV = 0'+'</li>'+'<br>'+
                                    '<li>'+'We have two cases:'+'<br>'+'<br>'+
                                        '- The gas enclosed in a constant volume is heated, absorbs heat → QV > 0 and ΔU > 0 (increases the internal energy of the gas).'+'<br>'+'<br>'+
                                        '- The gas enclosed in a constant volume is cooled, it gives up heat → QV < 0 and ΔU < 0 (the internal energy of the gas decreases)'+'</li>'+'<br>'+
                                    '<li>'+' Formulas: '+'<br>'+'<br>'+
                                        
                                        'ΔU = Q'+'<sub>'+'V'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ ΔT '+'<br>'+'<br>'+
                                        'ΔU = U – U'+'<sub>'+'0'+'</sub>'+' and ΔT = T – T'+'<sub>'+'0'+'</sub>' +', for T'+'<sub>'+'0'+'</sub>'+' = 0 K → U'+'<sub>'+'0'+'</sub>'+' = 0'+'<br>'+'<br>'+
                                        'The internal energy of a monatomic ideal gas is:'+'<br>'+
                                        'U = ν ∙ C'+'<sub>'+'V'+'</sub>'+'∙ T = 3/2 ∙ ν ∙ R ∙ T'+'</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Isobaric transformation:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        '(ν and p const.)'+'<br>'+'<br>'+
                                        'If the gas is heated, it absorbs heat → Qp > 0 and part of the energy is used to increase the internal energy of the gas ΔU > 0 and the other part is the mechanical work done by the gas on the outside, L > 0.'+
                                    '</li>'+'<br>'+
                                    '<li>'+' Formulas: '+'<br>'+'<br>'+
                                            'L = p ∙ ΔV'+'<br>'+'<br>'+
                                            'Q'+'<sub>'+'p'+'</sub>'+' = ν ∙ C'+'<sub>'+'p'+'</sub>'+' ∙ ΔT'+ '<br>'+'<br>'+
                                            'The internal energy variation does not depend on the process and we can write:'+'<br>'+
                                            'ΔU = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ ΔT'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Isothermal transformation:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        '(ν and T const.) → U = const. and ΔU = 0.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'When the gas is heated, it absorbs heat → QT > 0 and L > 0, being used entirely to perform mechanical work on the exterior.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'In an isothermal transformation, the pressure is inversely proportional to the volume of the gas and then we have mechanical work.'+
                                    '</li>'+'<br>'+
                                    '<li>'+' Formule: '+'<br>'+'<br>'+
                                        'L'+'<sub>'+'T'+'</sub>'+' = v ∙ R ∙ T ∙ ln(V'+'<sub>'+'2'+'</sub>' +' / V'+'<sub>'+'1'+'</sub>'+')'+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'T'+'</sub>'+' = L'+'<sub>'+'T'+'</sub>'+' = v ∙ R ∙ T ∙ ln(V'+'<sub>'+'2'+'</sub>'+' / V'+'<sub>'+'1'+'</sub>'+')'+' <br>'+'<br>'+
                                        'p'+'<sub>'+'1'+'</sub>'+' ∙ V'+'<sub>'+'1'+'</sub>'+' = p'+'<sub>'+'2'+'</sub>'+' ∙ V'+'<sub>'+'2'+'</sub>'+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'T'+'</sub>'+' = L'+'<sub>'+'T'+'</sub>'+' = v ∙ R ∙ T ∙ ln(V'+'<sub>'+'2'+'</sub>'+' / V'+'<sub>'+'1'+'</sub>'+') = v ∙ R ∙ T ∙ ln(p1 / p2)'+'<br>'+'<br>'+
                                        'U = const and ΔU = 0'+
                                    '</li>'+'<br>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Adiabatic transformation:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        '(ν const.) → Qad = 0'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Formula:'+'<br>'+'<br>'+
                                        'ΔU = - L'+'<sub>'+'ad'+'</sub>'+'<br>'+'<br>'+
                                        'ΔU = ν ∙ C'+'<sub>'+'v'+'</sub>'+' ∙ΔT'+'<br>'+'<br>'+
                                        'L'+'<sub>'+'ad'+'</sub>'+' = - ν ∙ C'+'<sub>'+'v'+'</sub>'+' ∙ ΔT' +'<br>'+'<br>'+
                                        'The equation of the adiabatic process is called Poisson\'s equation:'+'<br>'+
                                        'p ∙ V'+'<sup>'+'y'+'</sup>'+' = const.'+'<br>'+
                                        'y = adiabatic coefficient = C'+'<sub>'+'p'+'</sub>'+' / C'+'<sub>'+'V'+'</sub>'+'<br>'+
                                        'T ∙ V'+'<sup>'+'y-1'+'</sup>'+' - const'+
                                        'T'+'<sup>'+'y'+'</sup>'+' / p '+'<sup>'+'y-1'+'</sup>'+' = const'+
                                    '</li>'+
                                '</ul>'+
                                
                                '<h2 class=\"p-3\">'+'Robert – Mayer relationship:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'In case of isochore transformation:'+'<br>'+'<br>'+
                                        'ΔU = Q'+'<sub>'+'V'+'</sub>'+' = v ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ ΔT '+'<br>'+'<br>'+
                                        'C'+'<sub>'+'V'+'</sub>'+' = Q'+'<sub>'+'V'+'</sub>'+' / (v ∙ ΔT) = ΔU / (v ∙ ΔT)'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'In case of isobaric transformation:'+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'p'+'</sub>'+' = (v ∙ C'+'<sub>'+'p'+'</sub>'+' ∙ ΔT) = ΔU + p ∙ ΔV'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = Q'+'<sub>'+'p'+'</sub>'+' / (v ∙ ΔT) = (ΔU + p ∙ ΔV) / (v ∙ ΔT)'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Combining the two relations of Cp and CV we get:'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = C'+'<sub>'+'V'+'</sub>'+' + (p ∙ ΔV) / (v ∙ ΔT)'+'<br>'+'<br>'+
                                        'From the thermal equation of state:'+'<br>'+'<br>'+
                                        'p ∙ ΔV = ν ∙ R ∙ ΔT'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'The Robert–Mayer relation establishes the relationship between molar heats:'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = C'+'<sub>'+'V'+'</sub>'+' + R'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'The Robert–Mayer relation establishes the relationship between molar specific heats:'+'<br>'+'<br>'+
                                        'c'+'<sub>'+'p'+'</sub>'+' = c'+'<sub>'+'V'+'</sub>'+' + (R / μ) '+
                                    '</li>'+
                                '</ul>'+


                                //Motoare termice
                                '<a name=\"element_target2\">'+'</a>'+
                                '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center>'+'Engines thermal'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                
                                '<h2 class=\"p-3\">'+'Thermal machines:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'During a bithermal cyclic transformation, the thermodynamic system exchanges heats Q'+'<sub>'+'1'+'</sub>'+', respectively Q'+'<sub>'+'2'+'</sub>'+' with two heat sources whose temperatures are T'+'<sub>'+'1'+'</sub>'+' (hot source) and T'+'<sub>'+ '2'+'</sub>'+' (cold spring), with T'+'<sub>'+'1'+'</sub>'+' > T'+'<sub>'+' 2'+'</sub>'+' .'+'<br>'+'<br>'+
                                            'As cyclic transformations have ΔU = 0, according to the first principle of thermodynamics we have'+'<br>'+'<br>'+
                                            'Q'+'<sub>'+'1'+'</sub>'+' + Q'+'<sub>'+'2'+'</sub>'+' = L'+'<br>'+'<br>'+

                                            'The heat engine is a thermodynamic system that performs a cyclic transformation in which it exchanges heat and mechanical work with the external environment.'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Thermal engines:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        "The heat engine is a system that transforms the heat received, by burning a fuel (gasoline, diesel, methane gas, etc.) into mechanical work."+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'The Otto engine:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'The Otto engine uses as fuel a mixture of air with gasoline vapors that is created in the carburetor.'+'<br>'+'<br>'+
                                        '- The fuel mixture is sucked through the intake valve (S1) into the piston cylinder.'+'<br>'+'<br>'+
                                        '- The gases resulting from the combustion of the fuel mixture are eliminated through the exhaust valve (S2).'+'<br>'+'<br>'+
                                        '- Operating time is the period of displacement of the piston from top dead center = TDC (cylinder closes a minimum volume of substance) to bottom dead center = PMI (cylinder closes a maximum volume of substance) and vice versa.'+'<br>'+'<br>'+
                                        '- The piston is connected to a connecting rod-crank system (vilbrochen = crankshaft), to transform the rectilinear movement of the piston into rotational movement.'+'<br>'+'<br>'+
                                        '- The engine block consists of several cylinders connected in series. Each piston has a different deployment time to allow permanent and constant rotation of the vilborchen.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Otto engine running times:'+'<br>'+'<br>'+

                                        ' - '+'<b>'+'Time 1: Admission'+'</b>'+' - (isobar process):'+'<br>'+'<br>'+
                                        ' The intake valve opens, the gasoline-air mixture is drawn into the cylinder and the piston descends from TDC to TDC at constant pressure. It\'s the first descent of the piston.'+'<br>'+'<br>'+
                                        
                                        ' -'+'<b>'+'Time 2: Compression'+'</b>'+' - (adiabatic process):'+'<br>'+'<br>'+
                                        ' Both valves are closed. The piston moves up to TDC, so the fuel is highly compressed, in which case the pressure and temperature increase. Due to the high speed at which compression occurs, this process is adiabatic (no heat exchange with the outside). It is the first rise of the piston.'+'<br>'+'<br>'+

                                        ' -'+'<b>'+'Time 3 : Ignition'+'</b>'+' - (isochore process) and '+'<b>'+'detente'+'</b>'+ ' - (adiabatic process):'+'<br>'+'<br>'+
                                        ' Both valves are closed and the piston is at TDC. The electric spark produced by the spark plug ignites the mixture, which explodes and leads to a considerable increase in pressure at constant volume. The mixture burns with the release of heat (Q1 = heat received by the engine). The gases resulting from combustion expand adiabatically, pushing the piston into PMI with mechanical work performed. This is the second descent of the piston.'+'<br>'+'<br>'+

                                        ' -'+'<b>'+'Time 4 : Evacuation'+'</b>'+' - (isochoric process) and (isobaric process):'+'<br>'+'<br>'+
                                        ' The exhaust valve S2 opens, in which case the pressure suddenly drops to the value of the atmospheric pressure. In this isochoric process the mixture gives up the heat Q2 to the outside environment. The piston moves up to TDC pushing out the burnt gases at constant pressure. From here the cycle resumes.'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Efficiency of the Otto thermal engine:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'The efficiency of the Otto heat engine (η) is a physical quantity equal to the ratio between the mechanical work done by the engine (L) and the heat received (Q).'+'<br>'+'<br>'+
                                        'η = L / Q'+'<sub>'+'1'+'</sub>'+' = 1 - (|Q'+'<sub>'+'given'+'</sub>' +'|. / Q'+'<sub>'+'received'+'</sub>'+') = 1 - (|Q'+'<sub>'+'2'+'</sub>' +'|. / Q'+'<sub>'+'1'+'</sub>'+')'+'<br>'+'<br>'+

                                        'We assume that the working substance is an ideal gas and the compression ratio is ε = V'+'<sub>'+'1'+'</sub>'+'/V'+'<sub>'+'2 '+'</sub>'+'.'+'<br>'+'<br>'+

                                        'The heats in the four transformations are :'+'<br>'+'<br>'+
                                        ' - Q'+'<sub>'+'12'+'</sub>'+' = 0'+'<br>'+
                                        ' - Q'+'<sub>'+'23'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T '+'<sub>'+'3'+'</sub>'+' – T'+'<sub>'+'2'+'</sub>'+') = Q'+'<sub>'+'1'+'</sub>'+' > 0'+'<br>'+
                                        ' - Q'+'<sub>'+'34'+'</sub>'+' = 0'+'<br>'+
                                        ' - Q'+'<sub>'+'41'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T '+'<sub>'+'31'+'</sub>'+' – T'+'<sub>'+'4'+'</sub>'+') = Q'+'<sub>'+'2'+'</sub>'+' < 0'+'<br>'+'<br>'+

                                        ' η = 1 - (1 / ε'+'<sup>'+'y-1'+'</sup>'+')'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Diesel engine:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'The Diesel engine is an internal combustion, four-stroke engine with diesel injection ignition.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Diesel engine running times:'+'<br>'+'<br>'+

                                        '- '+'<b>'+'Time 1: Intake '+'</b>'+' - (isobar process):'+'<br>'+'<br>'+
                                        'The intake valve opens, air is drawn into the cylinder at atmospheric pressure and the piston descends from TDC to TDC at constant pressure (isobaric process). It\'s the first descent of the piston.'+'<br>'+'<br>'+
                                        '- '+'<b>'+'Time 2: Compression'+'</b>'+' - (adiabatic process):'+'<br>'+'<br>'+
                                        'Both valves are closed. The piston rises to TDC, so the air is strongly compressed, in which case the pressure and temperature increase considerably. Due to the high speed at which compression occurs, this process is adiabatic (no heat exchange with the outside). It is the first rise of the piston.'+'<br>'+'<br>'+
                                        '- '+'<b>'+'Time 3: Ignition'+'</b>'+' - (isobaric process) and '+'<b>'+'detente'+'</b>'+ ' - (adiabatic process):'+'<br>'+'<br>'+
                                        'Both valves are closed and the piston is at TDC. The injection pump sprays diesel fuel into the engine cylinder. The temperature of the air in the cylinder is higher than the ignition temperature of the diesel, so it ignites and burns at constant pressure, releasing heat (Q1 = heat received by the engine). The gases resulting from combustion expand adiabatically, pushing the piston into PMI with mechanical work performed. This is the second descent of the piston.'+'<br>'+'<br>'+
                                        '- '+'<b>'+'Time 4: Evacuation'+'</b>'+' - (isochoric process) and (isobaric process):'+'<br>'+'<br>'+
                                        'Exhaust valve S2 opens, in which case the pressure suddenly drops to atmospheric pressure. In this isochoric process (at constant volume) the mixture gives up heat Q2 to the outside environment. The piston moves up to TDC pushing out the burnt gases at constant pressure. From here the cycle resumes.'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Diesel thermal engine efficiency:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'The efficiency of the Diesel heat engine (η) is a physical quantity equal to the ratio between the mechanical work done by the engine (L) and the heat received (Q).'+'<br>'+'<br>'+
                                        'η = L / Q'+'<sub>'+'1'+'</sub>'+' = 1 - (|Q'+'<sub>'+'given'+'</sub>' +'|. / Q'+'<sub>'+'received'+'</sub>'+') = 1 - (|Q'+'<sub>'+'2'+'</sub>' +'|. / Q'+'<sub>'+'1'+'</sub>'+')'+'<br>'+'<br>'+

                                        'We assume that the working substance is an ideal gas and the compression ratio is ε = V'+'<sub>'+'1'+'</sub>'+'/V'+'<sub>'+'2 '+'</sub>'+' and α = V'+'<sub>'+'3'+'</sub>'+'/V'+'<sub>'+'2'+'</sub>'+'<br>'+'<br>'+

                                        'The heats in the four transformations are :'+'<br>'+'<br>'+
                                        '- Q'+'<sub>'+'12'+'</sub>'+' = 0 (adiabatic process)'+'<br>'+
                                        '- Q'+'<sub>'+'23'+'</sub>'+' = ν ∙ C'+'<sub>'+'p'+'</sub>'+' ∙ (T '+'<sub>'+'3'+'</sub>'+' – T'+'<sub>'+'2'+'</sub>'+') = Q'+'<sub>'+'1'+'</sub>'+' > 0 (isobaric process)'+'<br>'+
                                        '- Q'+'<sub>'+'34'+'</sub>'+' = 0 (adiabatic process)'+'<br>'+
                                        '- Q'+'<sub>'+'41'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T '+'<sub>'+'1'+'</sub>'+' – T'+'<sub>'+'4'+'</sub>'+') = Q'+'<sub>'+'2'+'</sub>'+' < 0 (isochoric process)'+'<br>'+'<br>'+

                                        'η = 1 - (1 / y) ∙ (a'+'<sup>'+'y-1'+'</sup>'+' / ε'+'<sup>'+'y-1' +'</sup>'+'(a-1))'+                                        
                                    '</li>'+
                                '</ul>'+
                                

                                //Principiul al II-lea

                                '<a name=\"element_target3\">'+'</a>'+
                                '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center>'+'Principiul al II-lea'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                
                                '<h2 class=\"p-3\">'+'Carnot\'s formulation of the second law of thermodynamics:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'The first formulation of the second law of thermodynamics belongs to Sadi Carnot, who in 1824 showed that there is an upper limit to the efficiency of the conversion of heat into mechanical energy in a heat engine, which involves the use of a thermodynamic cycle of a working fluid.' +
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Carnot was the first to show that it is not possible to operate a heat engine with a single thermostat, needing at least two thermostats. Thus, the system receives heat from a warm source (thermostat with T'+'<sub>'+'1'+'</sub>'+') and gives heat to a cold source (thermostat with T'+'<sub>'+'2'+'</sub>'+').'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Gas parameters in initial state are p'+'<sub>'+'1'+'</sub>'+', V'+'<sub>'+'1'+'</sub>'+' and T'+'<sub>'+'1'+'</sub>'+'.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'We bring the gas cylinder to a heater (thermostat with T'+'<sub>'+'1'+'</sub>'+'). The gas will absorb heat Q'+'<sub>'+'1'+'</sub>'+' from the hot source and expand isothermally (T'+'<sub>'+'1'+'</sub>'+' = const.) and quasi-static from V'+'<sub>'+'1'+'</sub>'+' to V'+'<sub>'+'2'+' </sub>'+', performing the mechanical work L'+'<sub>'+'1'+'</sub>'+'.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'We bring the gas cylinder on a heat-insulating support. The gas expands adiabatically to V'+'<sub>'+'3'+'</sub>'+', doing mechanical work L'+'<sub>'+'2'+'</sub>' +'. The gas cools down to temperature T'+'<sub>'+'2'+'</sub>'+' < T'+'<sub>'+'1'+'</sub>'+'.' +
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'We bring the gas cylinder to a cold source (thermostat with T'+'<sub>'+'2'+'</sub>'+'). The gas will give off heat Q'+'<sub>'+'2'+'</sub>'+' and will compress isothermally (T'+'<sub>'+'2'+'</sub>' +' = const.) and quasi-static from V'+'<sub>'+'3'+'</sub>'+' to V'+'<sub>'+'4'+'</sub> '+', receiving the mechanical work L'+'<sub>'+'3'+'</sub>'+'.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'We bring the gas cylinder on a heat-insulating support. The gas is compressed adiabatically from V'+'<sub>'+'4'+'</sub>'+' to '+'<sub>'+'1'+'</sub>'+'. Its temperature will increase from T'+'<sub>'+'2'+'</sub>'+' to T'+'<sub>'+'1'+'</sub>'+', receiving the mechanical work L'+'<sub>'+'4'+'</sub>'+'. The gas returns to its initial state.'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Carnot cycle yield:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'The efficiency of the Carnot cycle (η) is a physical quantity equal to the ratio between the mechanical work done by the engine (L) and the heat received (Q'+'<sub>'+'1'+'</sub>'+'). '+'<br>'+'<br>'+
                                        'η = L / Q'+'<sub>'+'1'+'</sub>'+'<br>'+'<br>'+
                                        'L = L'+'<sub>'+'1'+'</sub>'+' + L'+'<sub>'+'2'+'</sub>'+' + L'+ '<sub>'+'3'+'</sub>'+' + L'+'<sub>'+'4'+'</sub>'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Carnot\'s formulation of the second law of thermodynamics:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'The yield of the Carnot cycle is always subunit, because T'+'<sub>'+'2'+'</sub>'+' ≠ 0'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'The performance of the Carnot cycle depends only on the temperature of the hot source (T'+'<sub>'+'1'+'</sub>'+') and the cold one (T'+'<sub>'+'2' +'</sub>'+') and does not depend on the working substance.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        "The efficiency of an irreversible heat engine is always lower than the efficiency of a heat engine operating reversibly between the same temperature limits."+
                                    '</li>'+
                                '</ul>'),

        //teorieElectromecanica.html
        "teorieElectromecanicaTitle": "Electromechanics theory",
        "teorieElectromecanica": ('<u>' +'<h2 class="p-3" align = center>Electric Current</h2><br><br><br>' +'</u>'         
                                +'<ul>'
                                    +'<li>'
                                        +'<b>Electric current</b> is the organized movement of electric charge carriers through an electric circuit.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'<b>Electric charge carriers</b> whose movement causes the electric current to appear can be:<br><br>'
                                        +'a) Free electrons, in metals.<br><br>'
                                        +'b) Ions and electrons, in electrolytes (solutions or melts of acids, bases, or salts) and in gases.'
                                    +'</li>'
                                +'</ul>'
                                +'<h2 class="p-3">Components of an Electric Circuit:</h2>'
                                +'<ul>'
                                    +'<li>'
                                        +'Electric generators<br><br>'
                                        +'- Direct current generators<br><br>'
                                        +'- Alternating current generators'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Electric devices<br><br>'
                                        +'- Electric bulb<br><br>'
                                        +'- Electric resistor<br><br>'
                                        +'- Electric motor<br><br>'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Connecting conductors<br>'
                                        +'are wires made of aluminum or copper that connect the components of the circuit together.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Electric switches<br>'
                                        +'which are used to open and close the electric circuit. Only when the switch is in the closed position, the electric current flows through the circuit.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'The conventional direction of direct electric current through a circuit is from the positive terminal of the source to the negative terminal, through the external circuit (through consumers).'
                                    +'</li>'

                                    
                                    +'</ul>'
                                    +'<h2 class="p-3">Electric Current Intensity:</h2>'
                                    +'<ul>'
                                        +'<li>'
                                            +'When we apply an electric voltage between two points of a conductor, an electric current appears, meaning a directed movement of its free electrons, which carry a charge q = n ∙ e.'
                                        +'</li><br>'
                                        +'<li>'
                                            +'The electric current intensity (I) is a scalar physical quantity equal to the ratio between the electric charge (q) passing through the cross-sectional area of a conductor and the time interval (Δt).'
                                        +'</li><br>'
                                        +'<li>'
                                        +'Characterization of electric current intensity as a physical quantity:<br><br>'
                                        +'I = Electric Charge / Time = q / Δt = (n ∙ e) / Δt<br><br>'
                                        +'n - number of electrons<br><br>'
                                        +'e - charge of an electron (in magnitude)<br><br>'
                                        +'e = 1.6 ∙ 10<sup>-19</sup> C'
                                    +'</li>'
                                +'</ul>'
    
                            
                                +'<h2 class="p-3">Electric Voltage:</h2>'
                                +'<ul>'
                                    +'<li>'
                                        +'<b>Electric generators</b> (electric sources) are devices that produce and maintain electric current through a circuit, meaning they ensure the movement of electric charge carriers through the circuit. They perform mechanical work on these carriers to move them.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'<b>Electromotive force</b> (abbreviated EMF, symbol E) of a source is the scalar physical quantity that measures the mechanical work done by the source (L<sub>total</sub>) to move the unit of electric charge (q) along the entire circuit.<br><br>'
                                        +'E = L<sub>total</sub> / q<br><br>'
                                        +'The unit of measurement in the International System of Units (SI) for electric voltage is the volt (V):<br><br>'
                                        +'[E]<sub>SI</sub> = [L]<sub>SI</sub> / [q]<sub>SI</sub> = J / C = V (volt)'
                                    +'</li><br>'
                                    +'<li>'
                                        +'<b>Total mechanical work</b> done by the source to move the charge q through the entire circuit is equal to the external mechanical work done by the source to move the charge q through the external circuit (L<sub>ext</sub>) and the mechanical work done by the source to move the charge q through the internal circuit of the source (L<sub>int</sub>):<br><br>'
                                        +'L<sub>Total</sub> = L<sub>ext</sub> + L<sub>int</sub><br><br>'
                                        +'L<sub>Total</sub> / q = (L<sub>ext</sub> / q) + (L<sub>int</sub> / q)'
                                    +'</li><br>'
                                    +'<li>'
                                    +'<b>Electric voltage</b> at the terminals (symbol U) is the scalar physical quantity that measures the mechanical work done by the source (L<sub>ext</sub>) to move the unit of electric charge (q) along the external circuit.<br><br>'
                                    +'U = L<sub>ext</sub> / q'
                                +'</li><br>'
    
                                +'<li>'
                                +'<b>Internal voltage</b> (symbol u) is the scalar physical quantity that measures the mechanical work done by the source (L<sub>int</sub>) to move the unit of electric charge (q) along the internal circuit.<br><br>'
                                +'u = L<sub>int</sub> / q'
                            +'</li>'
                            +'<li>'
                                +'Thus, we obtain the relationship between the three electric voltages of an electric circuit:<br><br>'
                                +'E = U + u'
                            +'</li><br>'
                            +'<li>'
                                +'U = Mechanical work / Electric charge<br><br>'
                                +'U = L / q'
                            +'</li>'
                        +'</ul>'


                        //Legea lui Ohm
                        +'<a name="element_target"></a>'
                        +'<br><br><br><br><u><h2 class="p-3" align = center>Ohm\'s Law</h2><br><br><br></u>'
                        
                        +'<h2 class="p-3">Electric Voltage:</h2>'
                        +'<ul>'
                            +'<li>'
                                +'Measuring electrical resistance'
                            +'</li><br>'
                            +'<li>'
                            +'The constant of proportionality between the applied voltage (U) and the current intensity (I) is known as the electrical resistance of the conductor.'
                            +'</li><br>'
                            +'<li>'
                                +'Electric resistance is the physical quantity that shows how much a conductor opposes the flow of electric current through it.'
                            +'</li><br>'
                            +'<li>'
                                +'The electrical resistance of a conductor (R) is the scalar quantity equal to the ratio of the applied voltage (U) across the conductor and the current intensity (I) established through it, when the conductor\'s temperature remains constant.'
                            +'</li><br>'
                            +'<li>'
                                +'Characterization of electrical resistance as a physical quantity:<br><br>'
                                +'R = Electric Voltage / Electric Intensity = U / I<br><br>'
                                +'[R]<sub>SI</sub> = [U]<sub>SI</sub> / [I]<sub>SI</sub> = V / A = Ω (ohm)<br><br>'
                                +'The dependence of electrical resistance on the nature and dimensions of the conductor is:<br><br>'
                                +'R = ρ ∙ (l / s) <br><br>'
                                +'l - length of the conductor<br>'
                                +'S - cross-sectional area of the conductor<br>'
                                +'ρ - electrical resistivity of the conductor material:<br><br>'
                                +'[ρ]<sub>SI</sub> = 1Ω ∙ m'
                            +'</li>'
                        +'</ul>'

                        +'<h2 class="p-3">Ohm\'s Law for a Circuit Segment:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'The current intensity flowing through the resistor depends on:<br><br>'
                            +'1) The voltage across the resistor: as the voltage across the resistor terminals increases, the current intensity passing through it also increases.<br><br>'
                            +'2) Electrical resistance: as the resistance of the resistor increases, the current intensity passing through the resistor decreases.'
                        +'</li><br>'
                        +'<li>'
                            +'Ohm\'s Law for a Circuit Segment:<br><br>'
                            +'"If a voltage (U) is applied across the terminals of a circuit segment, then the electric current intensity (I) produced through that circuit segment is directly proportional to the applied electric voltage (U)." <br><br>'
                            +'I = U / R'
                        +'</li>'
                    +'</ul>'
                    +'<h2 class="p-3">Ohm\'s Law for the Entire Circuit:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Ohm\'s Law for the Entire Circuit:<br><br>'
                            +'"The electric current intensity through a simple circuit is directly proportional to the electromotive force of the source (E) and inversely proportional to the total resistance of the circuit (R+r)." <br><br>'
                            +'I = E / (R + r)<br><br>'
                            +'1) Ohm\'s Law is generally valid for chemical sources because they have low internal resistance, but it can also be applied to other sources.<br><br>'
                            +'2) If the external resistance (R) has very low values, obtained for example by short-circuiting the source with a short conductor, meaning R = 0, the current intensity supplied by the source becomes maximum:<br><br>'
                            +'I<sub>sc</sub> = E / r (short-circuit current)<br><br>'
                            +'This is not desirable, as high currents can cause damage, and the source depletes quickly.'
                        +'</li>'
                    +'</ul>'
                    +'<h2 class="p-3">Ohm\'s Law for a Circuit Segment:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Elements of electrical networks (branch circuits):<br><br>'
                            +'1. <b>Circuit Node</b> represents the intersection of at least three electrical conductors.<br><br>'
                            +'2. <b>Circuit Branch</b> is the portion of the circuit between two successive nodes, through which the same electric current flows.<br><br>'
                            +'3. <b>Circuit Loop</b> represents a circuit portion formed by at least two branches connected to form a closed loop (closed polygonal line).<br><br>'
                        +'</li><br>'
                    +'</ul>'


                    //Legea lui Kirchhoff
                    +'<a name="element_target2"></a>'
                    +'<br><br><br><br><u><h2 class="p-3" align = center>Kirchhoff\'s Law</h2><br><br><br></u>'
                    +'<h2 class="p-3">Kirchhoff\'s First Law:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'"The algebraic sum of the currents meeting at a circuit node is zero."<br><br>'
                        +'</li>'
                    +'</ul>'
                        +'<h2 align = center>'
                            +'<img src ="img/lege1.png" width = 240>'
                        +'</h2>'
                    +'<ul>'
                        +'The currents I<sub>k</sub> can be positive or negative, depending on how the current flows through the node (enters or exits the node).<br><br>'
                        +'<li>'
                            +'Another way to state Kirchhoff\'s first law:<br><br>'
                            +'"The algebraic sum of the currents entering a circuit node is equal to the sum of the currents leaving the node."'
                        +'</li>'
                    +'</ul>'

                    +'<h2 align = center>'
                        +'<img src ="img/lege1_alt.png" width = 240>'
                    +'</h2>'
                    +'<ul>'
                        +'I<sub>1</sub> + I<sub>2</sub> + I<sub>4</sub> = I<sub>3</sub> + I<sub>5</sub>'
                    +'</ul>'
                    +'<h2 class="p-3">Kirchhoff\'s Second Law:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'"The algebraic sum of the electromotive forces in a circuit loop is equal to the algebraic sum of the voltages across each branch in that circuit loop."'
                        +'</li>'
                    +'</ul>'
                    +'<h2 align = center>'
                        +'<img src ="img/lege2.png" width = 240>'
                    +'</h2>'
                    +'<ul>'
                        +'The terms in the sums can be positive or negative, depending on the direction of the voltage or current with respect to the arbitrarily chosen direction for the considered loop.<br><br>'
                        +'For m = number of simple loops, m equations are written using Kirchhoff\'s second law.'
                    +'</ul>'
                    +'<h2 class="p-3">Sign Conventions:</h2>'

                    +'<ul>'
                        +'<li>'
                            +'Electromotive Force:<br><br>'
                            +' - taken as positive if the direction of the electric current through the source is the same as the direction chosen arbitrarily for the loop: + E<br><br>'
                            +' - taken as negative if the direction of the electric current through the source is opposite to the direction chosen arbitrarily for the loop: - E<br><br>'
                        +'</li><br>'
                        +'<li>'
                            +'Electric Voltage:<br><br>'
                            +' - taken as positive if the direction of the electric current is the same as the reference direction chosen arbitrarily for the loop: + I ∙ R<br><br>'
                            +' - taken as negative if the direction of the electric current is opposite to the reference direction chosen arbitrarily for the loop: - I ∙ R<br><br>'
                        +'</li>'
                    +'</ul>'

                    //Gruparea rezistoarelor și generatoarelor electrice
                    +'<a name="element_target3"></a>'
                    +'<br><br><br><br><u><h2 class="p-3" align = center>Grouping of Resistors and Electric Generators</h2><br><br><br></u>'
                    +'<h2 class="p-3">Grouping of Resistors:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Any circuit element (electric generator, light bulb, resistor, motor, switch) can be connected (grouped) with another (of the same type or different) in two ways:<br><br>'
                            +'- In series<br><br>'
                            +'- In parallel<br><br>'
                            +'A group of resistors is replaced by a single one, called an equivalent resistor. Its resistance represents the equivalent of the resistances in that grouping.'
                        +'</li><br>'
                        +'<li>'
                            +'Resistors through which the same current passes and which are on the same side of a circuit form a series grouping, being equivalent to the resistor R<sub>s</sub>.<br><br>'
                            +'The equivalent resistance of a series grouping of resistors is equal to the sum of the resistances of each resistor:<br><br>'
                            +'R<sub>s</sub> = R<sub>1</sub> + R<sub>2</sub>'
                        +'</li><br>'
                        +'<li>'
                            +'Resistors located on different sides between the same two nodes of a circuit, having the same voltage across them, form a parallel grouping, being equivalent to the resistor R<sub>p</sub>.<br><br>'
                            +'The inverse of the equivalent resistance of a parallel grouping of resistors is equal to the sum of the inverses of the resistances of each resistor:<br><br>'
                            +'1 / R<sub>p</sub> = (1 / R<sub>1</sub>) + (1 / R<sub>2</sub>)'
                        +'</li>'
                    +'</ul>'

                    +'<h2 class="p-3">Grouping of Identical Generators:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'By grouping multiple sources, an "equivalent source" is obtained with an equivalent electromotive force and an equivalent internal resistance.'
                        +'</li><br>'
                        +'<li>'
                            +'For a series grouping of n identical sources: the electromotive force of the series grouping of electric generators:<br><br>'
                            +'E<sub>s</sub> = n · E'
                        +'</li><br>'
                        +'<li>'
                            +'The internal resistance of the series grouping of identical electric generators:<br><br>'
                            +'r<sub>s</sub> = n · r'
                        +'</li><br>'
                        +'<li>'
                            +'For a parallel grouping of n identical sources: the electromotive force of the parallel grouping of electric generators:<br><br>'
                            +'E<sub>p</sub> = E<sub>1</sub> = E<sub>2</sub> = … = E<sub>n</sub>'
                        +'</li><br>'
                        +'<li>'
                            +'The internal resistance of the parallel grouping of identical electric generators:<br><br>'
                            +'r<sub>p</sub> = r / n'
                        +'</li>'
                    +'</ul>'

                    //Eneriga si puterea electrica
                    +'<a name="element_target4"></a>'
                    +'<br><br><br><br><u><h2 class="p-3" align = center>Energy and Electric Power</h2><br><br><br></u>'
                    +'<h2 class="p-3">Electric Energy:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Electric energy (denoted by W) of a source measures the mechanical work done by it to move electric charge (q) through the cross-section of the circuit in a time interval (Δt):<br><br>'
                            +'W = L = E ∙ q<br><br>'
                            +'But q = I ∙ Δt (from the current formula)<br><br>'
                            +'W<sub>total</sub> = E ∙ I ∙ Δt (energy consumed over the entire circuit)<br><br>'
                            +'W<sub>external</sub> = U ∙ I ∙ Δt (energy consumed on the external circuit)<br><br>'
                            +'W<sub>internal</sub> = u ∙ I ∙ Δt (energy consumed on the internal circuit)<br><br>'
                            +'W = U ∙ I ∙ Δt = R ∙ I<sup>2</sup> ∙ Δt = (U<sup>2</sup> / R) ∙ Δt<br><br>'
                            +'[W]<sub>SI</sub> = J(joule)'
                        +'</li><br>'
                    +'</ul>'
                    +'<h2 class="p-3">Electric Power:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Electric power (P) is a physical quantity that measures the rate of transfer of electric energy in a unit of time.<br><br>'
                            +'P = W / Δt = U ∙ I = R ∙ I<sup>2</sup> = (U<sup>2</sup> / R)<br><br>'
                            +'[P]<sub>SI</sub> = J / s = W(watt)'
                        +'</li><br>'
                        +'<li>'
                            +'The electric power of an electric generator, with electromotive force E and internal resistance r is:<br><br>'
                            +'P = W<sub>total</sub> / Δt = E ∙ I = (R + r) ∙ I<sup>2</sup> = E<sup>2</sup> / (R + r)'
                        +'</li>'
                    +'</ul>'

                    +'<h2 class="p-3">Electric Efficiency:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'The electric energy of an electric generator is supplied to the external circuit (useful energy = external energy), while the rest of the energy is received by the interior of the generator (internal energy).<br><br>'
                            +'The electric efficiency of a receiver (consumer) is given by the relationship:<br><br>'
                            +'η = W<sub>useful</sub> / W<sub>total</sub> = P<sub>external</sub> / P<sub>total</sub>'
                        +'</li><br>'
                        +'<li>'
                            +'For a simple circuit consisting of a source with electromotive force E and internal resistance r, connected to a resistor of resistance R, the electric efficiency is given by the relationship:<br><br>'
                            +'η = (U ∙ I) / (E ∙ I) = U / E = R / (R + r)'
                        +'</li><br>'
                        +'<li>'
                            +'The power developed by the resistor is maximum when: <br><br>'
                            +'P (R) = E<sup>2</sup> / (4 ∙ r)<br><br>'
                            +'which occurs when:<br><br>'
                            +'R = r'
                        +'</li>'
                    +'</ul>'
                    +'<h2 class="p-3">Joule\'s Law:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'The thermal effect of electric current (Joule effect) consists of heating a conductor when an electric current passes through it.<br><br>'
                            +'Joule\'s Law quantitatively measures the heat produced when an electric current passes through a conductor.'
                        +'</li><br>'
                        +'<li>'
                            +'Joule\'s Law:<br><br>'
                            +'The heat Q produced when an electric current passes through a conductor is proportional to the resistance of the conductor R, the square of the electric current intensity I<sup>2</sup>, and the time interval Δt during which the electric current flows through it.<br><br>'
                            +'Q = R ∙ I<sup>2</sup> ∙ Δt'
                        +'</li>'
                    +'</ul>'),

        //teorieOptica.html
        "teorieOpticaTitle": "Optics theory",
        "teorieOptica": ('<u>' +
                            '<h2 class="p-3" align = center>Geometric Optics</h2><br><br><br>' +
                        '</u>' +
                        '<h2 class="p-3">Reflection of Light:</h2>' +
                        '<ul>' +
                            '<li>' +
                                'FERMAT\'S PRINCIPLE:<br><br>' +
                                '"Light propagates between two points A and B, so that its optical path and, implicitly, the time interval required to cover the distance AB are minimized."<br><br>' +
                                'Reflection of light is the phenomenon in which light returns to the first medium, with a change in the direction of propagation, when it encounters another medium (the interface between two different optical media).' +
                            '</li><br>' +
                            '<li>' +
                                'Laws of Reflection:<br><br>' +
                                '- Law I:<br><br>' +
                                'The incident ray, the normal, and the reflected ray are coplanar (they belong to the same plane).<br><br>' +
                                '- Law II:<br><br>' +
                                'The angle of incidence (i) is equal to the angle of reflection (r).' +
                            '</li><br>' +
                            '<li>' +
                                'Plane Mirrors<br><br>' +
                                'Mirrors are smooth and shiny surfaces on which light reflects.<br><br>' +
                                'Plane mirrors have a flat (straight) surface and are the ones we all have at home and look at daily.<br><br>' +
                                'Here is their symbol (the part that does not reflect light is shaded):<br><br>' +
                            '</li>' +
                        '</ul>'    
                        +'<h2 align = center>'
                            +'<img style = "border: 2px solid #1b4188" src ="img/optica1.png" width = 100>'
                        +'</h2><br>'
                        +'<ul>'
                            +'<li>'
                                +'Formation of an object\'s image in a flat mirror:<br><br>'
                                +'- The flat mirror is drawn vertically.<br><br>'
                                +'- The principal optical axis, perpendicular to the mirror (horizontally), is drawn through the mirror\'s center.<br><br>'
                                +'- The object AB is drawn as a segment with an arrow, in front of the mirror.<br><br>'
                                +'- The first ray is drawn from the object\'s tip (B) perpendicular to the mirror and extended dotted behind the mirror (being perpendicular to the mirror\'s surface, it does not change its propagation direction upon reflection).<br><br>'
                                +'- The second ray is drawn from the object\'s tip (B) obliquely to the mirror, and the reflected ray of it is drawn, respecting the laws of reflection (angle of incidence = angle of reflection).<br><br>'
                                +'- The reflected ray is extended behind the mirror until it meets the extension of the first ray. Their point of intersection is marked as B\', representing the tip of the object\'s image in the mirror.<br><br>'
                                +'- From point B\', a perpendicular is drawn to the principal optical axis, and the foot of the perpendicular is marked as A\', representing the base of the object\'s image in the mirror. The arrowhead is placed at B\'.'
                            +'</li>'
                        +'</ul>'
                        +'<h2 align = center>'
                            +'<img style = "border: 2px solid #1b4188" src ="img/optica2.png" width = 300>'
                        +'</h2><br>'
                        +'<ul>'
                            +'<li>'
                                +'Characteristics of the image A\'B\':<br><br>'
                                +'- Virtual, as it forms at the intersection of the extensions of the reflected rays (behind the mirror)<br><br>'
                                +'- Straight<br><br>'
                                +'- Equal to the object AB (y<sub>1</sub> = y<sub>2</sub>)<br><br>'
                                +'- Object and image are symmetrical with respect to the mirror<br><br>'
                                +'Formula of the flat mirror: x<sub>2</sub> = -x<sub>1</sub>, since R → ∞ (it has no focal points)<br><br>'
                                +'Transverse linear magnification: β = 1'
                            +'</li>'
                        +'</ul>'
                        +'<ul>'
                            +'<li>'
                                +'Characterization of the image (A\'B\') of the object in the flat mirror:<br><br>'
                                +'Object AB and image A\'B\' are symmetrical with respect to the mirror (the image is formed behind the mirror, at the same distance from the mirror as the object).<br><br>'
                                +'The image is virtual, as it forms at the intersection of the extensions of the reflected rays (it cannot be caught on a screen or photograph).<br><br>'
                                +'Image A\'B\' is as large as object AB.'
                            +'</li><br>'
                        +'</ul>'
                        +'<h2 class="p-3">Spherical Mirrors:</h2>'
                        +'<ul>'
                            +'<li>'
                                +'Spherical mirrors are portions of spheres (spherical caps) that reflect light falling on them.<br><br>'
                                +'Classification of spherical mirrors:<br><br>'
                                +'a) Concave mirrors reflect with the inner, curved part of the spherical surface (i.e., they have the shiny part on the inner side of the sphere). They transform a parallel beam of light into a convergent one.'
                            +'</li>'
                        +'</ul>'

                    +'<h2 align = center>' +
                    '<img style = "border: 2px solid #1b4188" src ="img/optica3.png" width = 300>' +
                '</h2><br>' +
                '<ul>' +
                    '<li>' +
                        'b) Convex mirrors reflect with the outer, bulging part of the spherical surface (i.e., they have the shiny part on the outer side of the sphere). They transform a parallel beam of light into a divergent one.' +
                    '</li>' +
                '</ul>' +
                '<h2 align = center>' +
                    '<img style = "border: 2px solid #1b4188" src ="img/optica4.png" width = 300>' +
                '</h2><br>' +
                '<ul>' +
                    '<li>' +
                        'Formation of an object\'s image in a spherical mirror<br><br>' +
                        'To form the image of an object in a spherical mirror, we need to draw at least two rays:<br><br>' +
                        'From the object\'s tip A, a line parallel to the principal optical axis must be drawn until it meets the mirror surface and then it reflects through the focal point.<br><br>' +
                        'From the object\'s tip A, a line must be drawn through the center of curvature until it intersects with the first ray (which reflects in the same direction).<br><br>' +
                        'Both rays are extended until they meet. Their point of intersection is the tip of the image, A\'. From this point, a perpendicular is drawn to the principal optical axis. The foot of the perpendicular, B\', is the base of the formed image.' +
                    '</li>' +
                '</ul>' +
                '<h2 align = center>' +
                    '<img style = "border: 2px solid #1b4188" src ="img/optica5.png" width = 300>' +
                '</h2><br>' +
                '<ul>' +
                    '<li>' +
                        'Formula of spherical mirrors:<br> (1 / x<sub>2</sub>) + (1 x<sub>1</sub>) = 1 / f = 2 / R<br><br>' +
                        'Transverse linear magnification:<br>' +
                        'β = y<sub>2</sub> / y<sub>1</sub> = - x<sub>2</sub> / x<sub>1</sub>' +
                    '</li>' +
                '</ul>' +
                '<ul>' +
                    '<li>' +
                        'The image of an object in a concave mirror depends on the distance from the object to the mirror.' +
                    '</li><br>' +
                    '<li>' +
                        'Mirror type:<br><br>' +
                        '- Concave:<br>' +
                        '|x<sub>1</sub>| > 2|f| - Real - Diminished - Inverted<br>' +
                        '|x<sub>1</sub>| = 2|f| - Real - Same Size - Inverted<br>' +
                        '2|f| > |x<sub>1</sub>| > |f| - Real - Enlarged - Inverted<br>' +
                        '|x<sub>1</sub>| < |f| - Virtual - Enlarged - Upright<br><br>' +
                        '- Convex:<br>' +
                        'Any |x<sub>1</sub>| - Virtual - Diminished - Upright' +
                    '</li><br>' +
                '</ul>'+
                '<h2 class="p-3">Refraction of Light:</h2>' +
                '<ul>' +
                    '<li>' +
                        'Laws of refraction of light:<br><br>' +
                        'The refractive index (denoted by n) of a transparent medium is given by the ratio of the speed of light in vacuum (c) and the speed of light in that medium (v).<br><br>' +
                        'n = c / v<br><br>' +
                        'Refraction of light is the phenomenon in which light changes its direction of propagation when it crosses the interface between two different transparent media.' +
                    '</li><br>' +
                    '<li>' +
                        'Laws of refraction:<br><br>' +
                        'Law I of refraction:<br>' +
                        'The incident ray (SI), the normal to the separating surface (NI), and the refracted ray (IR\') are coplanar.<br><br>' +
                        'Law II of refraction:<br>' +
                        'The ratio of the angle of incidence (i) to the sine of the angle of refraction (r\') is equal to the ratio of the absolute refractive index of the second medium to the absolute refractive index of the first medium:<br><br>' +
                        'sin i / sin r\' = n<sub>2</sub> / n<sub>1</sub> = n<sub>21</sub><br><br>' +
                        'n<sub>21</sub> = refractive index of the second medium relative to the first' +
                    '</li><br>' +
                    '<li>' +
                        'Consequences of refraction of light:<br><br>' +
                        'The consequences of refraction of light occur due to the change in the direction of the refracted ray compared to the direction of the incident ray, altering the image of objects immersed in water:<br><br>' +
                        '- An object in water appears broken at the water surface, as if the underwater part of the object is not in line with the part in air.<br><br>' +
                        '- An object in water is perceived by our eye closer to the surface than it actually is. Thus clear waters are much deeper than they appear.<br><br>' +
                        '- Objects in water appear larger than they actually are, with water behaving like a magnifying glass.<br><br>' +
                    '</li>'+
                '</ul>' +
                '<h2 class="p-3">Optical Prism:</h2>' +
                '<ul>' +
                    '<li>' +
                        'Monochromatic light refraction in an optical prism:<br><br>' +
                        'The prism is a transparent medium (with refractive index n) bounded by two plane faces, which form a dihedral angle, called the prism angle (A).<br><br>' +
                    '</li>' +
                '</ul>' +
                '<h2 align = center>' +
                    '<img style = "border: 2px solid #1b4188" src ="img/optica6.png" width = 300>' +
                '</h2><br>' +
                '<ul>' +
                    '<li>' +
                        'When the incident ray (SI) falls on face AB of the prism, it refracts (first refracted ray II\'), approaching the normal NI (n<sub>air</sub> < n<sub>prism</sub>) according to the law:<br>' +
                        'sin i = n ∙ sin r<br><br>' +
                        'Ray II\' refracts upon falling on face AC of the prism at point I\', moving away from the normal NN\' (n<sub>prism</sub> > n<sub>air</sub>), according to the law:<br>' +
                        'n ∙ sin r\' = sin i\'<br><br>' +
                        'The angle between the direction of the incident ray (SI) and the direction of the emergent ray (I\'R) is called the angle of deviation (δ) which has the value:<br>' +
                        'δ = i + i\' – (r + r\') = i + i\' – A<br><br>' +
                    '</li>' +
                '</ul>'+
                    '<ul>' + 
                        '<li>' + 
                            'To establish the condition for emergence (i.e., the incident ray to exit the prism), the total internal reflection of ray II\' on face AC must not occur, i.e.,:<br>' +
                            'r\' ≤ l (critical angle).<br><br>' +
                            'Since A = r + r\' → r\' = A – r<br>' +
                            'r ≥ A – l → sin r ≥ sin (A – l)<br><br>' +
                            'But from Snell\'s first law of refraction, we have:<br>' +
                            'sin r = sin i / n <br>' +
                            'sin i / n >= sin (A - l)<br><br>' +
                        '</li>' +
                        '<li>' +
                            'The maximum angle of incidence is<br>' +
                            'i = 90° → sin 90° = 1 <br>' +
                            '1 / n >= sin(A - l)<br>' +
                            'sin l = 1 / n<br>' +
                            'sin l >= sin(A-l) or A <= 2 ∙ 1<br>' +
                            'sin l = 1 / n → 1 = arcsin 1 / n<br>' +
                        '</li>' +
                        '<li>' +
                            'An incident ray on the prism can exit the prism if its refractive angle (A) satisfies the condition:<br>' +
                            'A ≤ 2 ∙ arcsin (1/n)<br><br>' +
                            'If the prism has A > 2 ∙ arcsin (1/n), all incident rays on the prism will undergo total reflection on face AC.' +
                        '</li><br>' +
                        '<li>' +
                            'When the angle of incidence (i) varies and the angle of deviation (δ) varies, always taking values greater than a certain minimum value (δ<sub>m</sub>).<br><br>' +
                            'When i = i\' and r = r\', we obtain the value of the minimum deviation angle (δ<sub>m</sub>):<br>' +
                            'δ<sub>m</sub> = 2 ∙ i – A<br><br>' +
                            'If we experimentally measure the minimum deviation angle, we can determine the refractive index of the prism using the formula:<br>' +
                            'n = sin((A + δ<sub>m</sub>) / 2) / sin (A / 2)' +
                        '</li><br>' +
                    '</ul>' +
                    '<h2 class="p-3">' + 'Types of Lenses:' + '</h2>' + 
                    '<ul>' + 
                        '<li>' + 
                            'Lenses are transparent bodies that have at least one spherical surface.<br><br>' + 
                            'The elements of a lens:<br><br>' + 
                            'The principal optical axis drawn through the center of the lens.<br><br>' + 
                            'The optical center of the lens (O) located at the intersection of the lens with the principal optical axis.<br><br>' + 
                            'Two foci placed on either side of the optical center of the lens, at equal distances.<br><br>' + 
                            'The focus located to the left of O is called the negative focus / object (F<sub>1</sub>), because it is on the axis of negative numbers.<br><br>' + 
                            'The focus located to the right of O is called the positive focus / image (F<sub>2</sub>), because it is on the axis of positive numbers.<br><br>' + 
                            'The centers of curvature (C<sub>1</sub> and C<sub>2</sub>) of the dioptrs that border the lens located on either side of O, at a double distance from OF.' + 
                        '</li>' + 
                    '</ul>'+

                    '<h2 class="p-3">' + 'Classification of lenses:' + '</h2>' + 
                    '<ul>' + 
                        '- <b>Converging lenses</b> (convex) are lenses that transform a parallel beam of light into a converging beam. They refract light through the positive focal point and therefore are also called positive lenses. They enlarge the writing. They are thicker in the middle and thinner at the edges.<br><br>' + 
                        '- <b>Diverging lenses</b> (concave) are lenses that transform a parallel beam of light into a diverging beam. They refract light through the negative focal point and therefore are also called negative lenses. They reduce the writing. They are thicker at the edges and thinner in the middle.<br><br>' + 
                        '<li>' + 
                            'Formation of an image of an object in lenses: <br><br>' + 
                            'To form the image of an object in a converging lens, we need to draw two rays:<br><br>' + 
                            '- Draw the symbol of the converging lens.<br>' + 
                            '- Draw the principal optical axis through its center.<br>' + 
                            '- Place the lens elements (O, F<sub>1</sub>, F<sub>2</sub>, C).<br>' + 
                            '- Draw the object (AB) in front of the lens (on the left side), with an arrow indicating its direction.<br>' + 
                            '- Draw a ray from the top of the object (B) parallel to the optical axis until it meets the lens, and then direct it through the positive focal point (F<sub>2</sub>), because the converging lens refracts light through the positive focal point.<br>' + 
                            '- Draw a second ray from the top of the object passing through the optical center of the lens (O). Extend these rays until they intersect. At their intersection, place B\' which is the top of the image (im) of the object (ob) AB.<br>' + 
                            '- From B\', draw a perpendicular to the optical axis, and denote its foot by A\', representing the base im A\'B\'.<br>' + 
                            '- Place the tip of the arrow at B\', and thus we obtain the image of the object AB in the converging lens.'+
                        '</li><br></br>'+                                       
                        '<li>' + 
                            'Depending on the distance of the object from the lens, we have three types of images in a converging lens.<br><br>' + 
                            'I. When the object is located in the interval (-∞) and C, the image of the object has the following characteristics:<br>' + 
                            '- Smaller than the object AB.<br>' + 
                            '- Inverted.<br>' + 
                            '- Real (formed at the intersection of refracted rays, can be projected onto a screen).<br><br>' + 
                            'II. When the object is located in the interval C and F1, the image of the object has the following characteristics:<br>' + 
                            '- Larger than the object AB.<br>' + 
                            '- Inverted.<br>' + 
                            '- Real (formed at the intersection of refracted rays, can be projected onto a screen).<br><br>' + 
                            'III. When the object is located in the interval F1 and O, the image of the object has the following characteristics:<br>' + 
                            '- Larger than the object.<br>' + 
                            '- Upright.<br>' + 
                            '- Virtual (formed at the intersection of extensions of refracted rays, cannot be projected onto a screen).' + 
                        '</li><br>' + 
                        '<li>' + 
                            'To form the image of an object in a diverging lens, we need to draw two rays:<br><br>' + 
                            '- Draw the symbol of the diverging lens.<br>' + 
                            '- Draw the principal optical axis through its center.<br>' + 
                            '- Mark the lens elements (O, F<sub>1</sub>, F<sub>2</sub>, C).<br>' + 
                            '- Draw the object (AB) in front of the lens (on the left) with an arrow.<br>' + 
                            '- Draw a ray from the tip of the object (B) parallel to the optical axis until it meets the lens and then pass it through the negative focal point (F<sub>1</sub>), as the diverging lens refracts light through the negative focal point.<br>' + 
                            '- Draw the second ray from the tip of the object passing through the optical center of the lens (O). Extend these rays until they intersect. At their intersection, mark B\', which is the tip of the image (im) of the object (ob) AB.<br>' + 
                            '- From B\', draw a perpendicular to the optical axis, mark its foot as A\', which represents the base of the image A\'B\'.<br>' + 
                            '- Place the tip of the arrow at B\', thus obtaining the image of the object AB in the diverging lens.<br>' + 
                        '</li><br>' + 
                        '<li>' + 
                            'In a diverging lens, we obtain an image that has the following characteristics regardless of the distance of the object from the lens:<br><br>' + 
                            '- Smaller than the object.<br>' + 
                            '- Upright.<br>' + 
                            '- Virtual (formed at the intersection of extensions of refracted rays, cannot be projected onto a screen).' + 
                        '</li>'+                        
                    '</ul>'+
                    '<h2 class="p-3">Thin Lens Formulas:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Sign conventions:<br><br>' +
                            'x<sub>1</sub> = the distance from the object AB to the lens, which is always taken as negative because it is on the negative number axis.<br><br>' +
                            'x<sub>2</sub> = the distance from the image A\'B\' to the lens, which is taken as positive when the image is real (formed behind the lens, on the positive number axis) and negative when the image is virtual (formed in front of the lens, on the negative number axis).<br><br>' +
                            'y<sub>1</sub> = the height of the object AB, which is taken as positive if the object is above the principal optical axis and negative if the object is below the principal optical axis.<br><br>' +
                            'y<sub>2</sub> = the height of the image A\'B\', which is taken as positive when the image is upright (above the principal optical axis) or negative when the image is inverted (below the principal optical axis).<br><br>' +
                            'The focal length is considered positive (f > 0) for converging lenses and negative (f < 0) for diverging lenses.' +
                        '</li><br>' +
                        '<li>' +
                            'The fundamental formula of thin lenses:<br><br>' +
                            '(1 / x<sub>2</sub>) - (1 / x<sub>1</sub>) = 1 / f' +
                        '</li><br>' +
                        '<li>' +
                            'The transverse linear magnification (β) is a dimensionless physical quantity equal to the ratio of the height of the image to the height of the object.<br><br>' +
                            'β = y<sub>2</sub> / y<sub>1</sub> = x<sub>2</sub> / x<sub>1</sub>' +
                        '</li><br>' +
                        '<li>' +
                            'The convergence of a lens (C) is a physical quantity equal to the inverse of the focal distance (f).<br><br>' +
                            'C = 1 / f<br><br>' +
                            '[C]<sub>SI</sub> = m<sup>-1</sup> = δ(dioptrie)<br>' +
                            'A converging lens has C > 0 <br><br>' +
                            'A diverging lens has C < 0' +
                        '</li><br>' +
                    '</ul>'+
                    '<h2 class="p-3">Lens associations:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'A system consisting of two or more lenses that have the same principal optical axis is called a <b>lens combination</b>.<br><br>' +
                            'The image formed by the first lens becomes the object for the next lens and so on until the last lens, which gives the final image.' +
                        '</li>' +
                        '<li>' +
                            'The most commonly used system is the one with lenses placed side by side (adjacent), where the distance (d) between lenses is zero, having the same optical center and the focal point of the image (F<sub>2</sub>) of the first lens (L) coincides with the object focus (F\'<sub>2</sub>).<br><br>' +
                            'For such a system consisting of k lenses, we have:<br><br>' +
                            '1. The inverse of the focal length of the lens system (F) equals the sum of the inverses of the focal lengths of the lenses in the combination:<br><br>' +
                            '1 / F = (1 / f<sub>1</sub>) + (1 / f<sub>2</sub>) + ... + (1 / f<sub>k</sub>)<br><br>' +
                            '2. The convergence of the system (C) equals the sum of the convergences of the component lenses:<br><br>' +
                            'C = C<sub>1</sub> + C<sub>2</sub> + ... + C<sub>k</sub><br><br>' +
                            '3. The transverse linear magnification of the system (β) equals the product of the transverse magnifications of the component lenses:<br><br>' +
                            'β = β<sub>1</sub> ∙ β<sub>2</sub> ∙ … β<sub>k</sub><br><br>' +
                            'If we denote with x\'2 the distance from the final image to the second lens L2 and with x1 the distance from the object to the first lens L1, we have the relation:<br><br>' +
                            '(1 / x\'<sub>2</sub>) - (1 / x<sub>1</sub>) = (1 / f<sub>1</sub>) + (1 / f<sub>2</sub>) = 1 / f = C<sub>1</sub> + C<sub>2</sub> = C' +
                        '</li>' +
                        '<li>' +
                            'Another lens system is the telescopic system which is an afocal system, where the output (emergent) beam, derived from a parallel beam, remains parallel. The image focal point of the first lens (F2) coincides with the object focal point of the second lens (F\'<sub>1</sub>).<br><br>' +
                            '1. The distance between lenses is:<br><br>' +
                            'd = f<sub>1</sub> + f<sub>2</sub><br><br>' +
                            '2. The transverse linear magnification is:<br><br>' +
                            'β = y<sub>2</sub> / y<sub>1</sub> = - f<sub>2</sub> / f<sub>1</sub><br><br>' +
                            'To find the position (x\'1) of the intermediate image relative to the first lens (L<sub>1</sub>) and the size of the image formed by the first lens, we apply the formula for conjugate points for L<sub>1</sub>:<br><br>' +
                            'x\'<sub>1</sub> = x<sub>2</sub>f<sub>1</sub> / (x<sub>1</sub> + f<sub>1</sub>)<br><br>' +
                            'y\'<sub>1</sub> = y<sub>1</sub>(x\'<sub>1</sub> / x<sub>1</sub>) = y<sub>1</sub> (f<sub>1</sub> / (x<sub>1</sub> + f<sub>1</sub>))<br><br>' +
                            'Knowing the distance between lenses, we can calculate the position of the intermediate image (formed by L<sub>1</sub>) relative to lens L<sub>2</sub>:<br><br>' +
                            'd = x\'<sub>1</sub> + (- x<sub>2</sub>)<br><br>' +
                            'x<sub>2</sub> = x\'<sub>1</sub> - d<br><br>' +
                            'To find the position (x\'2) of the final image relative to the second lens (L<sub>2</sub>) and the size of the image formed by the second lens, we apply the formula for conjugate points for L<sub>2</sub>:<br><br>' +
                            'x\'<sub>2</sub> = x<sub>2</sub>f<sub>2</sub> / (x<sub>2</sub> + f<sub>1</sub>)<br><br>' +
                            'y\'<sub>2</sub> = y<sub>1</sub>(x\'<sub>2</sub> / x<sub>2</sub>) = y<sub>1</sub> (f<sub>2</sub> / (x<sub>2</sub> + f<sub>2</sub>))<br><br>' +
                        '</li>'+                
                    '</ul>'+

                    //Optica ondulatorie
                    '<a name="element_target"></a>' +
                    '<br><br><br><br><u><h2 class="p-3" align = center>Wave optics</h2><br><br><br></u>' +
                    '<h2 class="p-3">Light dispersion:</h2>' +
                    '<ul>' +
                        '<li>' +
                            '<b>OPTICS</b> is a branch of physics that studies the nature, properties, and phenomena undergone by light.<br><br>' +
                            'Optics consists of three parts:<br><br>' +
                            '1. Geometric optics which operates with light rays (directions of light propagation), disregarding the nature of light. The studied phenomena include reflection, refraction, and total internal reflection of light.<br><br>' +
                            '2. Wave optics studies the phenomena of interference, diffraction, and polarization, revealing the wave nature of light, more precisely as an electromagnetic wave.<br><br>' +
                            '3. Photonic (corpuscular) optics studies the photoelectric effect, the Compton effect, light emission and absorption, etc., which highlight the corpuscular nature of light (photons).<br><br>' +
                            'The dispersion of white light was first studied by Newton in 1672, when he obtained the spectrum of white light on an optical prism.<br><br>' +
                            'The phenomenon of variation of the refractive index with the wavelength is called the dispersion of light.<br><br>' +
                            'Thus, when light passes through a prism, it decomposes into colored beams in the colors of the rainbow.<br><br>' +
                            'In a vacuum, all electromagnetic waves propagate at the same speed, regardless of their wavelength, and therefore we say that vacuum is a non-dispersive medium. If the prism were evacuated, a white light beam would not decompose, but would only be deviated from the incident direction by the phenomenon of refraction (i.e., changing the direction of propagation when passing from one medium to another).<br><br>' +
                            'The refractive index (denoted by n) of a transparent medium is given by the ratio between the speed of light in vacuum (c) and the speed of light in the respective medium (v).<br><br>' +
                            'n = c / v<br><br>' +
                            'c = speed of light in vacuum = 300,000,000 m/s<br><br>' +
                            'v = speed of light in the respective medium<br><br>' +
                            'All transparent media (water, glass, diamond, etc.) characterized by a refractive index greater than one, produce the dispersion of light.<br><br>' +
                            'But the refractive index is constant only for monochromatic light.<br><br>' +
                            'For white light, consisting of seven different color radiations and different wavelengths, the refractive index is no longer constant, but varies with the wavelength of these lights.<br><br>' +
                            'If the refractive index of a prism varies, the prism will refract these lights at different angles.<br><br>' +
                            'In general, under normal diffusion, in these transparent media the refractive index increases with decreasing wavelength, thus the violet rays (with a shorter wavelength, 400 nm) will be refracted more strongly than the red ones (with a longer wavelength, 700 nm, than the violet ones).<br><br>' +
                            'If λ<sub>violet</sub> < λ<sub>red</sub> → n<sub>violet</sub> > n<sub>red</sub> → v<sub>violet</sub> < v<sub>red</sub>.<br><br>' +
                            'The colored beams pass through the prism with different speeds and therefore exit the prism at different angles.<br><br>' +
                            'The violet rays emerge less inclined to the optical axis, because they propagate at a slower speed through the prism material than the red ray, while traveling a shorter distance than the red ray at the same time.<br><br>' +
                        '</li><br>'+
                    '</ul>' +
                    '<h2 class="p-3">Light Interference:</h2>'+
                    '<ul>' +
                    '<li>' +
                        'Non-localized light interference in the Young\'s apparatus.<br><br>' +
                        'INTERFERENCE is the phenomenon of overlap of two coherent waves (with the same frequency and phase difference) that meet at a point in space.<br><br>' +
                        'In certain points in space, interference fringes will form, i.e., a succession of bright and dark regions.<br><br>' +
                        'Coherent waves are obtained by separating from a light flux emitted by a monochromatic source, two beams of light which subsequently meet.<br><br>' +
                        'There are two ways to obtain coherent waves:<br><br>' +
                        '- Division of the wavefront in the Young\'s apparatus, Fresnel biprism, etc.<br><br>' +
                        '- Division of the wave amplitude in the parallel-faced plate, optical wedge, Newton\'s rings.' +
                    '</li><br>' +
                    '<li>' +
                        'The Young\'s apparatus uses a monochromatic light source S (laser), a screen with two rectangular slits (with a width smaller than 1 mm) and parallel with a maximum distance between them of 1 mm, and a screen (white sheet). For observing the interference pattern, there is no preferred position of the screen, it can be placed at a distance D between 1 m and 5 m from the slits, and for this reason it is called non-localized interference.<br><br>' +
                        'Both interference and diffraction are based on the Huygens-Fresnel principle, which states that each point on a wavefront behaves like a secondary source of wave with the same frequency and phase as the initial wave. The new wavefront is created by adding the amplitudes of the secondary waves.' +
                    '</li><br>' +
                    '<li>' +
                        'In the case of constructive interference, the two waves are in phase (zero phase difference) and their sum is greater, forming bright regions.<br><br>' +
                        'When the two waves vibrate in antiphase (180° phase difference) they will annihilate (their sum is zero), forming dark zones, in which case we speak of destructive interference.' +
                    '</li><br>' +
                    '<li>' +
                        'The electromagnetic wave (light) has two electric and magnetic components. Only the electric component (E) influences visual sensation.<br><br>' +
                        'Waves of the same amplitude emitted by the two sources have the equations:<br><br>' +
                        'E<sub>1</sub> = E<sub>0</sub>sin2π((t / T) - (r<sub>1</sub> / λ))<br><br>' +
                        'E<sub>2</sub> = E<sub>0</sub>sin2π((t / T) - (r<sub>2</sub> / λ))<br><br>' +
                        'The electromagnetic wave propagates with velocity c in the time interval Δt through the area surface S placed perpendicular to the propagation direction.<br><br>' +
                        'The energy carried by the wave is:<br><br>' +
                        'ΔW = w ΔV<br><br>' +
                        'ΔW = (ε<sub>0</sub> / μ<sub>0</sub>)<sup>1/2</sup>E<sup>2</sup>SΔt<br><br>' +
                        'I = 1/2 · (ε<sub>0</sub> / μ<sub>0</sub>)<sup>1/2</sup> ·E<sup>2</sup><sub>0</sub><br><br>' +
                        'E\'<sub>0</sub> = 2 E<sub>0</sub> cos (π(r<sub>2</sub> - r<sub>1</sub>) / λ)' +
                    '</li><br>'+
                    '<li>' +
                        'Interference conditions are:<br><br>' +
                        '- The waves have the same frequency<br><br>' +
                        '- Phase difference: ΔΦ = 2π(Δr / λ) = constant<br><br>' +
                        'The luminous intensity, I, at an interference point is proportional to the square of the amplitude of the resultant wave:<br><br>' +
                        'I = const 4E<sup>2</sup><sub>0</sub> cos<sup>2</sup>(πΔr / λ)<br><br>' +
                        'In constructive interference (with the formation of bright fringes) we have the condition for maximum illumination:<br><br>' +
                        'cos<sup>2</sup>(πΔr / λ)<br><br> = 1 → Δr = kλ = 2k(λ/2),<br><br>' +
                        'where k = integer<br><br>' +
                        'Points in the interference zone for which the path difference, Δr, is an even multiple of half-wavelength are on a bright fringe.<br><br>' +
                        'In destructive interference (with the formation of dark fringes) we have the condition for minimum illumination:<br><br>' +
                        'cos<sup>2</sup>(πΔr / λ) = 0 → Δr = kλ = 2(k+1)(λ/2)<br><br>' +
                        'Points in the interference zone for which the path difference, Δr, is an odd multiple of half-wavelength are on a dark fringe.' +
                    '</li><br>' +
                    '<li>' +
                        'Determining the positions of the fringes in the Young\'s apparatus<br><br>' +
                        'in ΔAEP we apply the Pythagorean theorem: r<sup>1</sup> = D<sup>2</sup> + (x-l)<sup>2</sup><br><br>' +
                        'in ΔBE\'P we apply the Pythagorean theorem: r<sup>2</sup> = D<sup>2</sup> + (x-l)<sup>2</sup><br><br>' +
                        'Δr = r<sub>2</sub> = r<sub>1</sub> = 4xl / (r<sub>1</sub> + r<sub>2</sub>)' +
                    '</li><br>' +
                    '<li>' +
                        'Determining the wavelength by measuring the fringe spacing<br><br>' +
                        'i = x<sub>k+1</sub> - x<sub>k</sub> = (k+1)λD / 2l - kλD / 2l = λD / 2l<br><br>' +
                        'i = λD / 2l' +
                    '</li>' +
                    '</ul>' +
                    '<h2 class="p-3">'+'Localized Interference on Parallel Faced Plate:'+'</h2>'+
                    '<ul>' +
                        '<li>' +
                            'Localized interference on the parallel-faced plate occurs when a beam of light is split into two coherent beams on reflecting surfaces, by light reflection on the upper face and by light transmission on the lower face of the thin plate.<br><br>' +
                            'The light reaching the upper face of the plate (film) is both reflected (IR) and refracted (IŔ ). The refracted ray through the plate is reflected on the lower face of the plate (MN). The two rays, IR and MN, interfere at the surface of the plate.<br><br>' +
                            'Interference fringes are located in the focal plane of the lens or, in its absence, at infinity. This explains the iridescences of soap bubbles and oil or petrol films on the street.' +
                        '</li>' +
                    '</ul>' +
                    '<h2 class="p-3">' +
                        'Newton\'s Rings in Air Wedge Interference:' +
                    '</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Newton\'s rings are obtained by perpendicular illumination with monochromatic light of a plano-convex lens with a large focal length placed with the curved face on a flat glass plate. A thin air wedge is formed between the lens and the plate resulting in the formation of circular bright and dark fringes, concentric with the point of contact between the lens and the plate.' +
                        '</li>' +
                    '</ul>'+


                    //Elemente de fizica cuantica
                    '<a name="element_target2"></a>' +
                    '<br><br><br><br><u><h2 class="p-3" align = center>Quantum Physics Elements</h2><br><br><br></u>' +
                    '<h2 class="p-3">' +
                        'Planck\'s Hypothesis on Light Quanta:' +
                    '</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Planck stated that the radiation emitted by a blackbody exists in the form of discrete packets of energy which he named quanta (later called photons), dependent on the frequency of the respective radiation.<br><br>' +
                            'The discrete values of energy of a harmonic oscillator are equidistant, so the difference between energy levels (ΔE) is proportional to the frequency (ν) of the oscillator and Planck\'s constant (h).<br><br>' +
                            'ΔE = h ∙ ν<br><br>' +
                            'h = Planck\'s constant = 6.62 ∙ 10<sup>-34</sup> J ∙ s<br><br>' +
                            'ν = frequency of the oscillator<br><br>' +
                            'Planck\'s constant is one of the smallest constants used in physics on a macroscopic scale, reflecting the microscopic scale at which quantum effects are observed.' +
                        '</li><br>' +
                    '</ul>'+
                    '<h2 class="p-3">' +
                        'Photoelectric Effect:' +
                    '</h2>' +
                    '<ul>' +
                        '<li>' +
                            'The photoelectric effect was experimentally discovered in 1887 by Heinrich Hertz (1857-1894) and in 1888 by W. Hallwachs (1859-1922), and it consists of the emission of electrons by a metal under the action of electromagnetic radiation.<br><br>' +
                            'In 1905, Albert Einstein (1879-1955) remarked that the explanation of the photoelectric effect could be resolved by generalizing the quantum hypothesis proposed by Planck regarding blackbody radiation to electromagnetic radiation.<br><br>' +
                            'Thus, electrons from the cathode receive only a single packet (photon) of light energy (E = h ∙ ν) from light to be accelerated and leave the metal.<br><br>' +
                            'Thus, the maximum kinetic energy of the emitted electrons will not exceed this received energy value, regardless of the intensity of the incident radiation.<br><br>' +
                            'Additionally, it explains why the maximum speed of electrons depends on the frequency of the radiation.' +
                            '</li><br>' +
                            '<li>' +
                            'First Law of External Photoelectric Effect:<br><br>' +
                            'The external photoelectric effect occurs only when the frequency of the incident radiation is higher than the characteristic threshold frequency of the metal from which the cathode is made.<br><br>' +
                            'To leave the metal, free electrons must receive an energy equal to the extraction work (L) for the threshold frequency (ν<sub>0</sub>):<br><br>' +
                            'L = h ∙ ν<sub>0</sub> h = Planck\'s constant = 6.62 ∙ 10<sup>-34</sup> m<sup>2</sup> ∙ kg/s<br><br>' +
                            'The photon of energy h ∙ ν transfers its energy to a conduction electron.<br><br>' +
                            'The electron can leave the metal only if h ∙ ν ≥ L.' +
                        '</li><br>' +
                    '</ul>'+
                    '<h2 class="p-3">Second Law of External Photoelectric Effect:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'The photoelectric effect occurs practically instantaneously.<br><br>' +
                            'The emission of an electron is the result of the collision between a photon and an electron in a time shorter than 10<sup>-9</sup> s.' +
                        '</li><br>' +
                    '</ul>' +
                    '<h2 class="p-3">Third Law of External Photoelectric Effect:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'The kinetic energy of the emitted electrons increases linearly with the frequency of the incident radiation.<br><br>' +
                            'If the energy of the photon h ∙ ν > L, then the electron has sufficient kinetic energy to leave the metal:<br><br>' +
                            'Ec = h ∙ ν – L = h ∙ ν – h ∙ ν<sub>0</sub> = h ∙ (ν – ν<sub>0</sub>)' +
                        '</li><br>' +
                    '</ul>' +
                    '<h2 class="p-3">Fourth Law of External Photoelectric Effect:</h2>' +
                    '<ul>' +
                    '<li>' +
                    'The number of photoelectrons emitted from the cathode per unit time is proportional to the number of incident photons in this time interval, which is proportional to the flux of light energy.' +
                    '</li>' +
                    '</ul>'),

        //cuprins
        "cuprinsPrincipii": "Principles and laws",
        "cuprinsTeoreme": "Variation theorems and conservation laws",
        "cuprinsNotiuni": "Getting started",
        "cuprinsPrincipiuI": "The first principle",
        "cuprinsMotoare": "Thermal engines",
        "cuprinsPrincipiuII": "The second principle",
        "cuprinsCurentul": "Electricity",
        "cuprinsOhm": "Ohm\'s law",
        "cuprinsKirchhoff": "Kirchhoff\'s law",
        "cuprinsGrupare": "Grouping of resistors and generators",
        "cuprinsEnergie": "Energy and electric power",
        "cuprinsGeometrica": "Geometric optics",
        "cuprinsOndulatorie": "Wave optics",
        "cuprinsCuantica": "Quantum physics",

        "teorieInapoiBtn": "Back to the selection menu",
        "invataTitle": "In this part of the chapter you will learn concepts such as:",
        "inchideBtn": "Close",
        "teorieBtn": "Theory",
        "testBtn": "Start a test",
        "acasaBtn": "Home",
    },
    "romana":
    {
        //index.html
        "titleSet": "Setări",
        "titleLogin": "Conectează-te",
        "titleDisconnect": "Deconectează-te",
        "titleStatistica": "Rezultatele tale de la teste",
        "corecte": "Corecte",
        "gresite": "Greșite",
        "titleLang": "Limbi",
        "titleMec": "Mecanică",
        "titleTer": "Termodinamică",
        "titleElec": "Electromecanică",
        "titleOp": "Optică",

        //register.html
        "goBackReg": "înapoi",
        "titleReg": "Introduceți acreditările dvs. de înregistrare",
        "usernameReg": "Introduceți numele dvs. de utilizator",
        "emailReg": "Introduceți adresa dvs. de email",
        "passwordReg": "Introduceți parola",
        "register": "Înregistrează-te",
        "footerReg": "Deja aveți un cont?",
        "footerRegBtn": "Conectați-vă",

        //login.html
        "goBackLog": "înapoi",
        "titleLog": "Introduceți datele dvs. de conectare",
        "emailLog": "Introduceți adresa dvs. de email",
        "passwordLog": "Introduceți parola",
        "login": "Autentifică-te",
        "footerLog": "Nu sunteți înregistrat?",
        "footerLogBtn": "Creați un cont",

        //test.html
        "startTestBtn": "Start",
        "iesiBtn": "Ieși",
        "reguliTitle": "Câteva reguli ale acestui test",
        "reguli": ('<div class="info">1. Vei avea doar <span>15 secunde</span> pentru fiecare întrebare.</div>'+
                    '<div class="info">2. Odată ce selectezi un răspuns, nu îl mai poți schimba.</div>'+
                    '<div class="info">3. Nu mai poți selecta răspunsuri odată ce timpul a expirat.</div>'+
                    '<div class="info">4. Nu poți ieși din timpul testului.</div>'+
                    '<div class="info">5. Vei primi puncte pe baza răspunsurilor tale.</div>'),
        "iesiTestBtn": "Ieși din test",
        "continuaTestBtn": "Continuă",
        "testTitle": "Test",
        "timpRamas": "Timp rămas:",
        "gataTimpul": "Gata timpul",
        "urmatorulTestBtn": "Urm.",
        "finalTestTitle": "Ai terminat testul!",
        "nouTestBtn": "Fă testul din nou",
        "veziDeCeBtn": "Vezi de ce",

        //mecanica.html
        "mecanicaTitle": "Mecanică",
        "principiiTitle": "Principii și legi",
        "teoremeTitle": "Teoreme de variație și legi de conservare",
        "principiiTitleModal": "Principii și legi ale mecanicii clasice",
        "teoremeTitleModal": "Teoreme de variație și legi de conservare",
        "principiiRez": ('<li>'+'Mișcare și repaus'+'</li>'+
                         '<li>'+'Principiul I al mecanicii'+'</li>'+
                         '<li>'+'Principiul al II-lea al mecanicii'+'</li>'+
                         '<li>'+'Principiul al III-lea al mecanicii'+'</li>'+
                         '<li>'+'Legea lui Hooke și tensiunea în fir'+'</li>'+
                         '<li>'+'Legile frecării la alunecare'+'</li>'),
        "teoremeRez": ('<li>'+'Lucrul mecanic și puterea mecanică'+'</li>'+
                        '<li>'+'Teorema variației energiei cinetice'+'</li>'+
                        '<li>'+'Energia potențială gravitațională'+'</li>'+
                        '<li>'+'Legea conservării energiei mecanice'+'</li>'+
                        '<li>'+'Teorema variației impulsului'+'</li>'+
                        '<li>'+'Legea conservării impulsului'+'</li>'),

        //termodinamica.html
        "termodinamicaTitle": "Termodinamică",
        "notiuniTitle": "Noțiuni de bază",
        "principiuITitle": "Principiul I",
        "motoareTitle": "Motoare termice",
        "principiuIITitle": "Principiul al II-lea",
        "notiuniTitleModal": "Noțiuni de bază în termodinamică",
        "principiuITitleModal": "Principiul I al termodinamicii",
        "motoareTitleModal": "Motoare termice",
        "principiuIITitleModal": "Principiul al II-lea al termodinamicii",
        "notiuniRez": ('<li>'+'Masă moleculară'+'</li>'+
                        '<li>'+'Masă moleculară relativă'+'</li>'+
                        '<li>'+'Cantitatea de substanță'+'</li>'+
                        '<li>'+'Masă molară'+'</li>'+
                        '<li>'+'Volumul molar'+'</li>'+
                        '<li>'+'Numărul lui Avogadro'+'</li>'+
                        '<li>'+'Echilibrul termic'+'</li>'+
                        '<li>'+'Corespondența între valoarea numerică a temperaturii în scara Celsius și valoarea numerică x'+'</li>'),
        "principiuIRez": ('<li>'+'Lucrul mecanic în termodinamică, mărime de proces'+'</li>'+
                        '<li>'+'Interpretarea geometrică a lucrului mecanic în termodinamică'+'</li>'+
                        '<li>'+'Energia internă a unui sistem termodinamic, mărime de stare'+'</li>'+
                        '<li>'+'Căldura, mărime de proces'+'</li>'+
                        '<li>'+'Înveliș adiabatic'+'</li>'+
                        '<li>'+'Principiul I al termodinamicii'+'</li>'+
                        '<li>'+'Coeficienți calorici (relații de definiție, unități de măsură în SI)'+'</li>'+
                        '<li>'+'Relația Robert-Mayer'+'</li>'+
                        '<li>'+'Aplicarea Principiului I al termodinamicii la transformările gazului ideal:'+'<br>'+
                            '<ul>'+
                                '<li>'+'Energia internă a gazului ideal (monoatomic, diatomic, poliatomic)'+'</li>'+	
                                '<li>'+'Variația energiei interne, lucrul mecanic și cantitatea de căldură pentru transformările simple ale gazului ideal (izobară, izocoră, izotermă, adiabatică)'+'</li>'+
                            '</ul>'+
                        '</li>'),
        "motoareRez": ('<li>'+'Explicarea funcționalității unui motor termic'+'</li>'+
                    '<li>'+'Descrierea principalelor cicluri termodinamice – Otto, Diesel – pe baza cărora funcționează motoarele termice'+'</li>'+
                    '<li>'+'Randamentul unui motor termic'+'</li>'),
        "principiuIIRez": ('<li>'+'Ciclul Carnot, randamentul ciclului Carnot'+'</li>'),

        //electromecanica.html
        "electromecanicaTitle": "Electromecanică",
        "curentulTitle": "Curentul electric",
        "ohmTitle": "Legea lui Ohm",
        "kirchhoffTitle": "Legea lui Kirchhoff",
        "grupareTitle": "Gruparea rezistoarelor si generatoarelor",
        "energieTitle": "Energia și puterea electrică",
        "curentulTitleModal": "Curentul electric",
        "ohmTitleModal": "Legea lui Ohm",
        "kirchhoffTitleModal": "Legea lui Kirchhoff",
        "grupareTitleModal": "Gruparea rezistoarelor și generatoarelor",
        "energieTitleModal": "Energia și puterea electrică",
        "curentulRez": ('<li>'+'Curentul electric'+'</li>'+
                        '<li>'+'Intensitatea curentului electric'+'</li>'+
                        '<li>'+'Unitatea de măsură a intensității curentului electric'+'</li>'+
                        '<li>'+'Circuitul electric simplu'+'</li>'+
                        '<li>'+'Tensiunea electromotoare a unui generator electric, tensiunea la bornele generatorului, căderea de tensiune în interiorul generatorului'+'</li>'),
        "ohmRez": ('<li>'+'Rezistența electrică'+'</li>'+
                    '<li>'+'Legea lui Ohm pentru o porțiune de circuit și pentru întreg circuitul'+'</li>'+
                    '<li>'+'Unitatea de măsură pentru rezistența electrică'+'</li>'+
                    '<li>'+'Rezistența electrică, dependența rezistivității electrice de temperatură'+'</li>'),
        "kirchhoffRez": ('<li>'+'Rețeaua electrică'+'</li>'+
                        '<li>'+'Nodul de rețea'+'</li>'+
                        '<li>'+'Ochiul de rețea'+'</li>'+
                        '<li>'+'Legile lui Kirchhoff'+'</li>'),
        "grupareRez": ('<li>'+'Rezistența electrică echivalentă a grupării serie, paralel sau mixtă a mai multor rezistori'+'</li>'+
                        '<li>'+'Rezistența electrică echivalentă și tensiunea electromotoare echivalentă corespunzătoare grupării serie/paralel a mai multor generatoare electrice'+'</li>'),
        "energieRez": ('<li>'+'Expresia energiei transmise de generator consumatorului într-un interval de timp'+'</li>'+
                        '<li>'+'Expresia energiei disipate în interiorul generatorului'+'</li>'+
                        '<li>'+'Randamentul unui circuit electric simplu'+'</li>'+
                        '<li>'+'Puterea electrică, relații ce caracterizează puterea electrică'+'</li>'),

        //optica.html
        "opticaTitle": "Optică",
        "geometricaTitle": "Optica geometrică",
        "ondulatorieTitle": "Optica ondulatorie",
        "cuanticaTitle": "Elemente de fizică cuantică",
        "geometricaTitleModal": "Optica geometrică",
        "ondulatorieTitleModal": "Optica ondulatorie",
        "cuanticaTitleModal": "Elemente de fizică cuantică",
        "geometricaRez": ('<li>'+'Reflexia luminii'+'</li>'+
                            '<li>'+'Refracția luminii'+'</li>'+
                            '<li>'+'Legile reflexiei'+'</li>'+
                            '<li>'+'Legile refracției'+'</li>'+
                            '<li>'+'Indicele de refracție'+'</li>'+
                            '<li>'+'Punctele conjugate'+'</li>'+
                            '<li>'+'Fasciculele paraxiale'+'</li>'+
                            '<li>'+'Imaginile reale/virtuale'+'</li>'+
                            '<li>'+'Lentila optică'+'</li>'+
                            '<li>'+'Elementele caracteristice ale unei lentile subțiri (axe, centru optic, focare)'+'</li>'+
                            '<li>'+'Convergența unei lentile subțiri'+'</li>'+
                            '<li>'+'Formulele lentilelor subțiri'+'</li>'+
                            '<li>'+'Imaginile obiectelor reale/virtuale în lentile subțiri'+'</li>'+
                            '<li>'+'Sisteme de lentile'+'</li>'),
        "ondulatorieRez": ('<li>'+'Condiții de obținere a interferenței staționare'+'</li>'+
                            '<li>'+'Lungimea de undă'+'</li>'+
                            '<li>'+'Elementele componente ale dispozitivului Young'+'</li>'+
                            '<li>'+'Franje de interferență'+'</li>'+
                            '<li>'+'Diferența de drum optic'+'</li>'+
                            '<li>'+'Condițiile de maxim, respectiv de minim de interferență'+'</li>'+
                            '<li>'+'Interfranja'+'</li>'),
        "cuanticaRez": ('<li>'+'Legile efectului fotoelectric extern'+'</li>'+
                        '<li>'+'Ipoteza lui Planck. Ipoteza lui Einstein. Ecuația lui Einstein'+'</li>'+
                        '<li>'+'Interpretarea legilor efectului fotoelectric extern'+'</li>'),

        //teorieMecanica.html
        "teorieMecanicaTitle": "Mecanică teorie",
        "teorieMecanica": ('<u>'+'<h2 class=\"p-3\" align = center>'+'Principii și legi'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                        '<h2 class=\"p-3\">'+'Viteza'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Formula: '+'<b>'+'v = d/Δt'+'</b>'+'</li>'+
                            '<li>'+'Unitate de măsură: '+'<b>'+'&lt;'+'v'+'&gt;'+' = m/s'+'</b>'+'</li>'+
                                    '<li>'+'Viteza medie: '+'<b>'+'v'+'<small>'+'m'+'</small>'+' = Δd/Δt'+'</b>'+'</li>'+
                                    '<li>'+'Vectorul viteză are același sens cu deplasarea: v'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>'+' = d'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>'+' /Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Accelerația'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Fomula: '+'<b>'+'a = Δv/Δt'+'</b>'+'</li>'+
                            '<li>'+'<a id ="2">'+'Unitatea de măsură: '+'<b>'+'&lt;'+'a'+'&gt;'+' = m/s'+'<sup>'+'2'+'</sup>'+'</b>'+'</a>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Formula Galilei:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'<a id="1">'+'v'+'<sup>'+'2'+'</sup>'+' = v'+'<sub>'+'0'+'</sub>'+'<sup>'+'2'+'</sup>'+' + 2a(x-x'+'<sub>'+'0'+'</sub>'+')'+'</a>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Legea vitezei: '+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v = v'+'<sub>'+'0'+'</sub>'+' + at'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Legea de mișcare:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'x = 1/2at'+'<sup>'+'2'+'</sup>'+' + v'+'<sub>'+'0'+'</sub>'+'t + x'+'<sub>'+'0'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Principiul I al mecanicii:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Orice corp își menține starea de repaus sau de mișcare rectilinie uniformă atât timp cât asupra sa nu acționează alte forțe sau suma forțelor care acționează asupra sa este nulă.'+'</li>'+
                            '<li>'+'Pe scurt: Viteza este '+'<b>'+'constantă'+'</b>'+' dacă '+'<b>'+'rezultanta forțelor aplicate asupra corpului'+'</b>'+' este 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Principiul al II-lea al mecanicii:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Modificarea cantității de mișcare a unui corp este direct proporțională cu forța aplicată și are loc pe direcția pe care acționează forța.'+'</li>'+
                            '<li>'+'Spus în alte cuvinte:  o forță care acționează asupra unui corp îi imprimă acestuia o accelerație, proporțională cu forța și invers proporțională cu masa corpului.'+'</li>'+
                            '<li>'+'Formulă: F = ma'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Principiul al III-lea al mecanicii:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<a id ="5">'+'Când un corp acționează asupra altui corp cu o forță (numită forță de acțiune), cel de-al doilea corp acționează și el asupra primului cu o forță (numită forță de reacțiune) de aceeași mărime și de aceeași direcție, dar de sens contrar. Acest principiu este cunoscut și sub numele de Principiul acțiunii și reacțiunii.'+'</li>'+'</a>'+
                            '<li>'+'Scris sub formă de formulă: '+'<b>'+'F'+'<sub>'+'a'+'</sub>'+' = F'+'<sub>'+'r'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Legea lui Hooke:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Alungirea unui resort este direct proporțională cu Forța deformatoare (F):'+'</li>'+'<br>'+
    
                            'Δl ~ F'+'<br>'+'<br>'+
    
                            '<li>'+'Direct proporțională cu Lungimea inițială a resortului (l'+'<sub>'+'0'+'</sub>'+') :'+'</li>'+'<br>'+
                            
                            'Δl ~ l'+'<sub>'+'0'+'</sub>'+'<br>'+'<br>'+
    
                            '<li>'+'Invers proporțională cu aria secțiunii transversale a resortului:'+'</li>'+'<br>'+
    
                            'Δl ~ 1/S'+'<br>'+'<br>'+
    
                            '<li>'+'Legea lui Hooke:'+'</li>'+'<br>'+
                            'F/S = E∙Δl/l'+'<sub>'+'0'+'</sub>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Tensiunea în fire:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Tensiunea din fir ( T ) reprezintă forța de reacțiune a firului inextensibil (care nu se alungește) la forța exercitată asupra lui.'+'</li>'+'<br>'+
                            '<li>'+'<a id ="4">'+'Când suspendăm un corp de un fir inextensibil apar două forțe pereche:'+'<br>'+'<br>'+'</a>'+
    
                                'Forța de apăsare a corpului (F) este forța cu care corpul acționează asupra firului (ea este egală cu greutatea corpului).'+'<br>'+'<br>'+
                                
                                'Tensiunea în fir (T) este forța cu care firul acționează asupra corpului suspendat pe el.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Legile frecării la alunecare:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Legea I a frecării:'+'<br>'+'<br>'+
                            
                                'Valoarea forței de frecare la alunecare depinde de natura și de gradul de prelucrare al suprafețelor aflate în contact. Dependența este caracterizată de o mărime adimensională, numită coeficient de frecare al alunecare, ce ia valori între 0 și 1 și se notează cu μ.'+'<br>'+'<br>'+
    
                                '<a id="3">'+'Ff ~ μ'+'</li>'+'<br>'+'</a>'+
    
                            '<li>'+'Legea II a frecării:'+'<br>'+'<br>'+
                                'Valoarea forței de frecare la alunecare nu depinde de aria suprafeței de contact dintre corpuri.'+'<br>'+'<br>'+'</li>'+
                                
                            '<li>'+'Legea a III-a a frecării:'+'<br>'+'<br>'+
                                'Valoarea forței de frecare la alunecare depinde de forța de apăsare exercitată de corp pe suprafața de alunecare, care este egală în mărime cu forța de reacțiune normală la suprafața de contact dintre corpuri.'+'<br>'+'<br>'+
    
                            'Ff ~ N'+'</li>'+'<br>'+
                            '<li>'+'Formula forței de frecare este dată de relația:'+'<br>'+'<br>'+
                                'Ff = μ ∙ N'+'</li>'+
                        '</ul>'+
    
                        //Teoreme de variatie si legi de conservare
                        
                        '<a name=\"element_target\">'+'</a>'+
                        '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center >'+'Teoreme de variație și legi de conservare'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                        
                        '<h2 class=\"p-3\">'+'Lucrul mecanic:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Lucrul mecanic (L) al unei forțe constante ce acționează asupra unui corp pe direcția și în sensul deplasării corpului este mărimea fizică scalară egală cu produsul dintre modulul forței (F) și modulul deplasării corpului (d).'+'</li>'+'<br>'+
                            '<li>'+'<a id="8">'+'Formula de calcul: L = F ∙ d'+'</li>'+'<br>'+'</a>'+
                            '<li>'+'Convenții de semne:'+'<br>'+
                                '1. Lucrul mecanic al unei forțe este pozitiv dacă forța ajută la deplasarea corpului. Aceasta se întâmplă în cazul în care forța are aceeași direcție și sens cu mișcarea corpului.'+'<br>'+'<br>'+
                                '2. Lucrul mecanic al unei forțe este negativ dacă forța se opune deplasării corpului. Aceasta se întâmplă în cazul în care componenta vectorului forță pe direcția mișcării are sens opus mișcării corpului.'+'<br>'+'<br>'+
                                '3. Lucrul mecanic al unei forțe este nul dacă forța nici nu ajută la deplasarea corpului, nici nu se opune deplasării. Aceasta se întâmplă în cazul în care vectorul forță este perpendicular pe direcția mișcării corpului.'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Puterea mecanică:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<a id="10">'+'Puterea mecanică (P) este mărimea fizică scalară egală cu raportul dintre lucrul mecanic (L) efectuat și timpul (Δt) în care se efectuează acest lucru mecanic.'+'</li>'+'<br>'+'</a>'+
                            '<li>'+'P = Lucru mecanic / timp = L / Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Energia cinetică:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Energia mecanică (E) este mărimea fizică ce caracterizează capacitatea unui corp de a efectua lucru mecanic, nitatea de măsură fiind este joulul (J).'+'</li>'+'<br>'+
                            '<li>'+'Energia cinetică (E'+'<sub>'+'c'+'</sub>'+') este energia pe care o are un corp în mișcare.'+'</li>'+'<br>'+
                            '<li>'+'Energia cinetică a unui corp în mișcare, cu o anumită viteză se calculează cu formula:'+'<br>'+'<br>'+
                                'E'+'<sub>'+'c'+'</sub>'+' = m ∙ v'+'<sup>'+'2'+'</sup>'+' / 2 '+'</li>'+'<br>'+
                            '<li>'+'Legea variației energiei cinetice:'+'<br>'+'<br>'+
                                '<a id ="9">'+'ΔE'+'<sub>'+'c'+'</sub>'+' = L'+'<sub>'+'Total'+'</sub>'+'</li>'+'</a>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Energia potențială gravitațională:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Energia potențială gravitațională (E'+'<sub>'+'pg'+'</sub>'+') este energia pe care o are un corp aflat la o anumită înălțime față de sol.'+'</li>'+'<br>'+
                            '<li>'+'<a id = "7">'+'Energia potențială gravitațională a unui corp este egală cu: E'+'<sub>'+'pg'+'</sub>'+' = m ∙ g ∙ h'+'</li>'+'<br>'+'</a>'+
                            '<li>'+'Legea variației energiei potențiale gravitaționale:'+'<br>'+'<br>'+
                                '<a id ="6">'+'ΔE'+'<sub>'+'pg'+'</sub>'+' = -L'+'<sub>'+'G'+'</sub>'+'</a>'+'</li>'+'<br>'+
                            '<li>'+'O forță care efectuează un lucru mecanic care este independent de drumul parcurs și depinde numai de pozițiile extreme (inițială și cea finală) se numește forță conservativă.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Conservarea energiei mecanice:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Legea conservării energiei mecanice:'+'<br>'+'<br>'+
    
                                '\“Energia mecanică a unui corp se conservă dacă asupra sa acționează numai forțe conservative.\“'+'<br>'+'<br>'+
                            
                                'E = constantă, dacă corpul este izolat de exterior și F'+'<sub>'+'f'+'</sub>'+' = 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Teorema variației impulsului:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Impulsul corpului este notat cu Legea conservării impulsului si are formula:'+'<br>'+'<br>'+
                            'p'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = m ∙ v'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+'</li>'+'<br>'+
                            '<li>'+'Teorema de variație a impulsului mecanic'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' ∙ Δt'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Legea conservării impulsului:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Când sistemul mecanic este izolat, forța rezultantă F'+'<sub>'+'R'+'</sub>'+'<span style=\"vertical-align : 4px; margin-left : -1.5px\">'+'&#8407;'+'</span> '+'este zero.'+'<br>'+'<br>'+
                            'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<sub>'+'R'+'</sub>'+'<span style=\"vertical-align : 4px; margin-left : -1.5px\">'+'&#8407;'+'</span>'+' ∙ Δt = 0 ∙ Δt = 0'+'</li>'+'<br>'+
                            '<li>'+'Legea conservării impulsului mecanic în SRI:'+'<br>'+'<br>'+
                                'Impulsul mecanic al sistemelor mecanice izolate se conservă.'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = 0, adică Δp'+'<span style=\"vertical-align : 4px; \">'+'&#8407;'+'</span>'+' = const'+'<span style=\"vertical-align : 4px; margin-left : -25px\">'+'&#8407;'+'</span>'+'</li>'+'<br>'+ 
                                '<li>'+'În cazul sistemelor mecanice izolate, impulsul total al acestora nu se poate modifica sub acțiunea forțelor interne.'+'</li>'+
                        '</ul>'),

        //teorieTermodinamica.html
        "teorieTermodinamicaTitle": "Termodinamică teorie",
        "teorieTermodinamica": ('<u>'+'<h2 class=\"p-3\" align = center>'+'Noțiuni termodinamice de bază'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                '<ul>'+
                                    '<li>'+'<b>'+'<a id="1">'+'Agitația termică'+'</b>'+' este mişcarea dezordonată şi continuă a particulelor unei substanţe (atomi sau molecule).'+'</a>'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Difuzia'+'</b>'+' este fenomenul de pătrundere a moleculelor unei substanțe printre moleculele altei substanțe, fără intervenţia unei forţe exterioare (de la sine).'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Atomul'+'</b>'+' este cea mai mică particulă dintr-o substanță care nu mai poate fi divizată prin procedee chimice obișnuite.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Molecula'+'</b>'+' reprezintă cea mai mică particulă dintr-o substanță, care poate exista și în stare liberă și care păstrează proprietățile substanței din care provine.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Masa moleculară'+'</b>'+' este o mărime adimensională (fără unitate de măsură) care ne arată de câte ori este mai mare masa reală a unei molecule decât unitatea atomică de masă (u.a.m.).'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Masa atomică relativă (A)'+'</b>'+' este numărul care arată de câte ori masa unui atom este mai mare decât unitatea atomică de masă.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Un mol de atomi'+'</b>'+' reprezintă cantitatea, în grame, dintr-o substanţă simplă care conţine 6,022 ∙ 10'+'<sup>'+'23'+'</sup>'+' de atomi. Se notează cu litera grecească ”niu”=  υ.'+'<br>'+'<br>'+

                                        'υ = m(g) / A(g/mol) = masa de substanță simplă(g) / masa atomică(g/mol)'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'<a id="2">'+'Numărul lui Avogadro'+'</b>'+', notat cu N'+'<sub>'+'A'+'</sub>'+', este egal cu 6,022 ∙10'+'<sup>'+'23'+'</sup>'+' mol'+'<sup>'+'-1'+'</sup>'+' atomi şi reprezintă numărul de atomi conţinuţi într-un mol de atomi din orice substanță simplă.'+'</a>'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Masa molară'+'</b>'+' (notată cu litera grecească miu = μ) este masa unui mol de substanță. Are ca unitate de măsură g/mol.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Molul'+'</b>'+' este unitatea de măsură în Sistemul Internațional a cantității de substanță care conține un număr de particule egal cu numărul lui Avogadro, N'+'<sub>'+'A.'+'</sub>'+'<br>'+'<br>'+
                                        'υ = m(g) / μ(g/mol) = Masa substanței compuse(g) / Masa molară(g/mol)'+'<br>'+'<br>'+
                                        'υ = N / N'+'<sub>'+'A'+'</sub>'+' = Număr de particule / Numărul lui Avogadro'+'</li>'+'<br>'+
                                    '<li>'+'Un mol din orice gaz ocupă în condiții normale de temperatură (273 K) și presiune (10'+'<sup>'+'5'+'</sup>'+' Pa) un volum, numit '+'<b>'+'<a id="5">'+'volum molar'+'</b>'+' = V'+'<sub>'+'μ'+'</sub>'+' = 22,4 L/mol'+'</a>'+'<br>'+'<br>'+
                                        'v = V / V'+'<sub>'+'μ'+'</sub>'+' = Volumul gazului(L) / Volumul molar(L/mol)'+'<br>'+'<br>'+
                                        'Relația între volumul molar și densitatea unei substanțe este:'+'<br>'+'<br>'+
                                        'P = μ / V'+'<sub>'+'μ'+'</sub>'+'<br>'+'<br>'+
                                        'Numărul volumic (n) reprezintă numărul de particule (atomi sau molecule) dintr-un m3 de substanță :'+'<br>'+'<br>'+
                                        'n = N'+'<sub>'+'A'+'</sub>'+' / V'+'<sub>'+'μ'+'</sub>'+' = N / V'+'<br>'+'<br>'+'</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Echilibrul termodinamic și procese termodinamice:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'<b>'+'Starea unui sistem termodinamic'+'</b>'+', la un anumit moment, este caracterizat de anumite mărimi fizice numite parametrii de stare.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Principiul echilibrului termodinamic'+'</b>'+':'+'<br>'+'<br>'+

                                        'Un sistem termodinamic izolat evoluează spontan spre o stare de echilibru termodinamic pe care nu o mai părăsește de la sine.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Starea de echilibru termodinamic'+'</b>'+' a unui sistem poate fi modificată prin contact :'+'<br>'+'<br>'+
                                        '- mecanic cu mediul exterior'+'<br>'+
                                        '- termic cu un alt mediu (când două corpuri cu temperaturi diferite se ating) sau cu mediul exterior'+'<br>'+
                                        '- schimb de substanță cu mediul exterior sau alt mediu'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Procesul termodinamic'+'</b>'+' (transformarea de stare) reprezintă trecerea sistemului dintr-o stare în alta.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Transformarea cvasistatică'+'</b>'+' are loc când stările intermediare prin care trece sistemul sunt stări de echilibru termic, atunci când parametrii de stare variază foarte lent.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Procesul reversibil'+'</b>'+' este transformarea cvasistatică care poate avea loc în ambele sensuri, prin aceleași stări intermediare.'+'</li>'+'<br>'+
                                    '<li>'+'Ecuația de stare (numită Clapeyron - Mendeleev) descrie dependența dintre parametrii de stare ai unui sistem termodinamic:'+'<br>'+'<br>'+
                                    '<a id="4">'+'p ∙ V = ν ∙ R ∙ T'+'</a>'+'<br>'+'<br>'+
                                        'p = presiunea gazului ideal'+'<br>'+

                                        'V = volumul gazului ideal'+'<br>'+

                                        'ν = numărul de moli ai gazului ideal'+'<br>'+

                                        'R = constanta universală a gazelor = 8,3143 ∙ 10'+'<sup>'+'3'+'</sup>'+' J/kmol ∙ K'+'<br>'+

                                        'T = temperatura gazului ideal'+'</li>'+
                                '</ul>'+
                                '<h2 align = center>'+
                                '<img src = \"img/transformari.png\" width = 360>'+
                                '</h2>'+
                                '<h2 class=\"p-3\">'+'Temperatura empirică. Scări de temperatură:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'Două sisteme termodinamice închise și izolate adiabatic de exterior care nu schimbă energie între ele au aceeași temperatură, numită '+'<b>'+'temperatură empirică.'+'</b>'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Temperatura'+'</b>'+' este o mărime fizică de stare măsurată cu termometru, care implică un corp termometric, o mărime termometrică și o scară de temperatură.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Principiul zero al termodinamicii'+'</b>'+' (tranzitivității echilibrului termic):'+'<br>'+'<br>'+
                                        'Dacă sistemul A este în echilibru termic cu sistemul B și sistemul B este în echilibru termic cu sistemul C, atunci și sistemul A este în echilibru termic cu sistemul C.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Relația de transformare'+'</b>'+' între scara Celsius t(°C) și Fahrenheit tF (°F):'+'<br>'+'<br>'+
                                        't'+'<sub>'+'F'+'</sub>'+' = 9/5 ∙ t(°C) + 32'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Scara Kelvin'+'</b>'+' (absolută): '+'<br>'+'<br>'+
                                        '[T]'+'<sub>'+'SI'+'</sub>'+' = K (kelvin)'+'<br>'+'<br>'+
                                        '<a id="3">'+'T(K) = t (°C) + 273,15'+'</a>'+'</li>'+
                                '</ul>'+

                                //Principiul I
                                '<a name=\"element_target\">'+'</a>'+
                                '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center>'+'Principiul I'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                

                                '<h2 class=\"p-3\">'+'Lucrul mecanic:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'Schimbul de energie dintre un sistem termodinamic închis și mediul exterior poate avea loc în două moduri:'+'<br>'+'<br>'+
                                        '- Prin efectuare de lucru mecanic'+'<br>'+
                                        '- Prin transfer de căldură.'+'<br>'+'<br>'+
                                        
                                        'Măsura energiei transferate sistemului în condițiile interacțiunilor care au drept rezultat variația parametrilor de poziție sub acțiunea unor forțe se numește '+'<b>'+'lucru mecanic.'+'</b>'+'<br>'+'<br>'+
                                        'L = F ∙ d'+'</li>'+'<br>'+
                                    '<li>'+'Lucrul mecanic efectuat de forța exterioară F'+'<sub>'+'e'+'</sub>'+' este :'+'<br>'+'<br>'+
                                        'L'+'<sub>'+'e'+'</sub>'+' = p'+'<sub>'+'e'+'</sub>'+' ∙ S ∙ (x1 - x2) = - p'+'<sub>'+'e'+'</sub>'+' ∙ ΔV'+'<br>'+'<br>'+
                                        'S = aria secțiunii transversale a cilindrului'+'<br>'+
                                        'p'+'<sub>'+'e'+'</sub>'+' = presiunea exterioară'+'<br>'+

                                        'V2 = S ∙ x2'+'<br>'+
                                        'V1 = S ∙ x1'+'<br>'+
                                        
                                        'ΔV = V2 - V1'+'</li>'+'<br>'+
                                    '<li>'+'Lucrul mecanic efectuat de sistemul termodinamic într-o transformare izobară este:'+'<br>'+'<br>'+
                                    '<a id="6">'+'L = p ∙ ΔV'+'</li>'+'<br>'+'</a>'+
                                    
                                    '<li>'+'Convenții de semne pentru lucrul mecanic efectuat de sistemul termodinamic:'+'<br>'+'<br>'+
                                    
                                        'a) Dacă gazul se destinde (îi crește volumul), ΔV > 0, atunci L > 0 și sistemul efectuează lucru mecanic asupra mediului exterior (cedează L).'+'<br>'+'<br>'+
                                    
                                        'b) Dacă gazul se comprimă (îi scade volumul), ΔV < 0, atunci L < 0 și asupra sistemului se efectuează lucru mecanic (primește L).'+'<br>'+'<br>'+
                                    
                                        'c) Dacă între sistem și exterior nu are loc transfer de energie prin lucru mecanic (L = 0), atunci gazul nu își modifică volumul (ΔV=0).'+'</li>'+'<br>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Lucrul mecanic:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Energia particulelor unui gaz real este dată:'+'<br>'+'<br>'+
                                        '- Energie externă este dată de suma energiei cinetică a sistemului ca întreg și energiei potențială a acestuia aflat într-un câmp de forțe.'+'<br>'+'<br>'+
                                        '- Energie internă (U) este dată de suma dintre energiile cinetice ale moleculelor (E'+'<sub>'+'c'+'</sub>'+') și energiile potențiale de interacțiune dintre moleculele sistemului termodinamic (E'+'<sub>'+'p'+'</sub>'+').'+'<br>'+'<br>'+
                                        'U = Ec + Ep'+'<br>'+'<br>'+
                                        '- Dar variația energiei interne (ΔU = U'+'<sub>'+'2'+'</sub>'+' – U'+'<sub>'+'1'+'</sub>'+') este o mărime fizică de stare și nu depinde de stările intermediare prin care trece sistemul, ci numai de starea inițială (U'+'<sub>'+'1'+'</sub>'+') și cea finală (U'+'<sub>'+'2'+'</sub>'+').'+

                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Căldura:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Căldura (Q) este o mărime fizică care măsoară energia transferată, numai prin mișcarea dezordonată a moleculelor dintre două corpuri aflate în contact termic.'+'<br>'+'<br>'+

                                        '<a id = "7">'+'[Q]'+'<sub>'+'SI'+'</sub>'+' = J(joule)'+'<br>'+'<br>'+'</a>'+
                                        'O altă unitate de măsură tolerată pentru căldură este caloria: 1cal = 4,18 J'+
                                    '</li>'+'<br>'+
                                    '<li>'+'Convenții de semne pentru căldură:'+'<br>'+'<br>'+
                                        'a) Când sistemul primește căldură din exterior, atunci Q > 0'+'<br>'+'<br>'+
                                        'b) Când sistemul cedează căldură în exterior, atunci Q < 0'+'<br>'+'<br>'+
                                        'c) Când sistemul este izolat adiabatic (nu schimbă căldură cu exteriorul), atunci Q = 0'+
                                    '</li>'+'<br>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Consecințe ale principiul întâi al termodinamicii:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'Enunțul principiul întâi al termodinamicii:'+'<br>'+'<br>'+
                                        'Variația energiei interne a unui sistem într-un proces oarecare este:'+'<br>'+'<br>'+
                                        'ΔU = Q - L'+'</li>'+'<br>'+
                                    '<li>'+'Dacă sistemul este izolat (nu schimbă nici căldură și nici lucru mecanic cu exteriorul), atunci'+'<br>'+'<br>'+
                                        'Q = L = 0, ΔU = U2 – U1 = 0 și U1 = U2, adică energia internă a unui sistem izolat se conservă.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Ecuația principiul întâi al termodinamicii mai poate fi scrisă și sub forma definiției căldurii:'+'<br>'+'<br>'+
                                        'Q = ΔU + L, adică căldura primită de un sistem servește atât la variația energiei interne a sistemului, cât și la efectuarea de lucru mecanic de către sistem.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Dacă sistemul este izolat adiabatic (nu schimbă căldură cu exteriorul), atunci'+'<br>'+'<br>'+
                                        'Q = 0 și L = –ΔU = –(U2 – U1), adică un sistem izolat adiabatic schimbă lucru mecanic cu exteriorul numai pe seama variației energiei interne.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Dacă sistemul nu schimbă lucru mecanic cu exteriorul (L= 0), ci numai căldură atunci'+'<br>'+'<br>'+
                                        'ΔU = Q, adică căldura primită de sistem duce la creșterea energiei interne a sistemului.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Într-o transformare ciclică, ΔU = U2 – U1 = 0 și L = Q, adică sistemul poate efectua lucru mecanic numai dacă el primește căldură din exterior.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'De aici rezultă și imposibilitatea existenței unui perpetuum mobile de speța întâi (dispozitiv care să producă lucru mecanic fără să consume energie din exterior).'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Coeficienții calorici:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Căldura specifică (c) reprezintă mărimea fizică ce caracterizează căldura absorbită /cedată de 1kg de substanță pentru a-și mări /micșora temperatura cu un grad. Ea este o constantă de material și o găsim în tabelul cu constante de la sfârșitul acestui capitol.'+'<br>'+'<br>'+
                                        'c = 1 / m ∙ Q / ΔT'+'<br>'+'<br>'+
                                        '[c]'+'<sub>'+'SI'+'</sub>'+' = J/Kg∙K'+'<br>'+'<br>'+
                                        'Q = m ∙ c ∙ ΔT'+'<br>'+
                                        'm = masa corpului'+'<br>'+
                                        'c = căldura specifică'+'<br>'+
                                        'ΔT = T'+'<sub>'+'finală'+'</sub>'+' – T'+'<sub>'+'inițială'+'</sub>'+' ,variația temperaturii corpului'+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'primită'+'</sub>'+' > 0'+'<br>'+
                                        'Q'+'<sub>'+'cedată'+'</sub>'+'< 0 '+'<br>'+'<br>'+
                                        'Ecuația calorimetrică: '+'<br>'+'Q'+'<sub>'+'primită'+'</sub>'+' = | Q'+'<sub>'+'cedată'+'</sub>'+' |'+'<br>'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Capacitatea calorică (C) reprezintă mărimea fizică ce caracterizează cantitatea de căldură necesară sistemului termodinamic pentru a-și varia temperatura cu un grad.'+'<br>'+'<br>'+
                                        'C = Q / ΔT'+'<br>'+'<br>'+
                                        '[C]'+'<sub>'+'SI'+'</sub>'+' = J/Kg'+'<br>'+'<br>'+
                                        'Q = C ∙ ΔT'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Căldura molară (C'+'<sub>'+'μ'+'</sub>'+') este căldura necesară pentru a modifica temperatura unui mol dintr-o substanță cu un grad.'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'μ'+'</sub>'+' = Q / v ∙ ΔT'+
                                        '[C'+'<sub>'+'μ'+'</sub>'+'] = J/mol∙K'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Grade de libertate:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'Cum în termodinamică moleculele gazului ideal sunt considerate puncte materiale, coordonatele independente ce caracterizează sistemul termodinamic se numesc grade de libertate.'+'<br>'+'<br>'+
                                    '<a id="8">'+'- Pentru gazele monoatomice: i = 3'+'<br>'+'</a>'+
                                        '- Pentru gazele diatomice: i = 5'+'<br>'+
                                        '- Pentru gazele poliatomice: i = 6'+'<br>'+'<br>'+

                                        'Căldura molară la volum constant este:'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'v'+'</sub>'+' = i/2 R'+'<br>'+'<br>'+
                                        'Căldura molară la presiune constantă este:'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = (i + 2)/2 R'+'<br>'+'<br>'+
                                        'R =  8,3143 ∙ 10'+'<sup>'+'3'+'</sup>'+' J/kmol ∙ K (constanta universală a gazelor)'+'</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Transformare izocoră :'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'(ν și' + '<a id="9">'+'V const.'+'</a>'+') → ΔV = 0 → L'+'<sub>'+'V'+'</sub>'+' = p ∙ ΔV = 0'+'</li>'+'<br>'+
                                    '<li>'+'Avem două cazuri:'+'<br>'+'<br>'+
                                        '- Gazul închis într-un de volum constant este încălzit, absoarbe căldură → QV > 0 și ΔU > 0 (crește energia internă a gazului).'+'<br>'+'<br>'+
                                        '- Gazul închis într-un de volum constant este răcit, cedează căldură → QV < 0 și ΔU < 0 (scade energia internă a gazului)'+'</li>'+'<br>'+
                                    '<li>'+' Formule: '+'<br>'+'<br>'+
                                        
                                        'ΔU = Q'+'<sub>'+'V'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ ΔT'+'<br>'+'<br>'+
                                        'ΔU = U – U'+'<sub>'+'0'+'</sub>'+' și ΔT = T – T'+'<sub>'+'0'+'</sub>'+', pentru T'+'<sub>'+'0'+'</sub>'+' = 0 K → U'+'<sub>'+'0'+'</sub>'+' = 0'+'<br>'+'<br>'+
                                        'Energia internă a unui gaz ideal monoatomic este:'+'<br>'+
                                        'U = ν ∙ C'+'<sub>'+'V'+'</sub>'+'∙ T = 3/2 ∙ ν ∙ R ∙ T'+'</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Transformare izobară:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        '(ν și p const.)'+'<br>'+'<br>'+
                                        'Dacă gazul este încălzit, absoarbe căldură → Qp > 0 și o parte din energie este folosită la creșterea energiei interne a gazului ΔU > 0 și cealaltă parte este lucrul mecanic efectuat de gaz asupra exteriorului, L > 0.'+
                                    '</li>'+'<br>'+
                                    '<li>'+' Formule: '+'<br>'+'<br>'+
                                            'L = p ∙ ΔV'+'<br>'+'<br>'+
                                            'Q'+'<sub>'+'p'+'</sub>'+' = ν ∙ C'+'<sub>'+'p'+'</sub>'+' ∙ ΔT'+'<br>'+'<br>'+
                                            'Variația energiei interne nu depinde de proces și putem scrie:'+'<br>'+
                                            'ΔU = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ ΔT'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Transformare izotermă:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        '(ν și T const.) → U = const. și ΔU = 0.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Când gazul este încălzit, absoarbe căldură → QT > 0 și L > 0, fiind folosită integral pentru efectuarea de lucru mecanic asupra exteriorului.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Într-o transformare izotermă, presiunea este invers proporțională cu volumul gazului și atunci avem lucrul mecanic.'+
                                    '</li>'+'<br>'+
                                    '<li>'+' Formule: '+'<br>'+'<br>'+
                                        'L'+'<sub>'+'T'+'</sub>'+' = v ∙ R ∙ T ∙ ln(V'+'<sub>'+'2'+'</sub>'+' / V'+'<sub>'+'1'+'</sub>'+')'+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'T'+'</sub>'+' = L'+'<sub>'+'T'+'</sub>'+' = v ∙ R ∙ T ∙ ln(V'+'<sub>'+'2'+'</sub>'+' / V'+'<sub>'+'1'+'</sub>'+')'+'<br>'+'<br>'+
                                        'p'+'<sub>'+'1'+'</sub>'+' ∙ V'+'<sub>'+'1'+'</sub>'+' = p'+'<sub>'+'2'+'</sub>'+' ∙ V'+'<sub>'+'2'+'</sub>'+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'T'+'</sub>'+' = L'+'<sub>'+'T'+'</sub>'+' = v ∙ R ∙ T ∙ ln(V'+'<sub>'+'2'+'</sub>'+' / V'+'<sub>'+'1'+'</sub>'+') = v ∙ R ∙ T ∙ ln(p1 / p2)'+'<br>'+'<br>'+
                                        'U = const și ΔU = 0'+
                                    '</li>'+'<br>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Transformare adiabatică:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        '(ν const.) → Qad = 0'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Formule:'+'<br>'+'<br>'+
                                        'ΔU = - L'+'<sub>'+'ad'+'</sub>'+'<br>'+'<br>'+
                                        'ΔU = ν ∙ C'+'<sub>'+'v'+'</sub>'+' ∙ΔT'+'<br>'+'<br>'+
                                        'L'+'<sub>'+'ad'+'</sub>'+' = - ν ∙ C'+'<sub>'+'v'+'</sub>'+' ∙ ΔT'+'<br>'+'<br>'+
                                        'Ecuația procesului adiabatic se numește ecuația Poisson:'+'<br>'+
                                        'p ∙ V'+'<sup>'+'y'+'</sup>'+' = const.'+'<br>'+
                                        'y = coeficient adiabatic = C'+'<sub>'+'p'+'</sub>'+' / C'+'<sub>'+'V'+'</sub>'+'<br>'+
                                        'T ∙ V'+'<sup>'+'y-1'+'</sup>'+' - const'+
                                        'T'+'<sup>'+'y'+'</sup>'+' / p '+'<sup>'+'y-1'+'</sup>'+' = const'+
                                    '</li>'+
                                '</ul>'+
                                
                                '<h2 class=\"p-3\">'+'Relația lui Robert – Mayer:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'În cazul transformării izocore:'+'<br>'+'<br>'+
                                        'ΔU = Q'+'<sub>'+'V'+'</sub>'+' = v ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ ΔT'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'V'+'</sub>'+' = Q'+'<sub>'+'V'+'</sub>'+' / (v ∙ ΔT) =  ΔU / (v ∙ ΔT)'+ 
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'În cazul transformării izobare:'+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'p'+'</sub>'+' = (v ∙ C'+'<sub>'+'p'+'</sub>'+' ∙ ΔT) = ΔU + p ∙ ΔV'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = Q'+'<sub>'+'p'+'</sub>'+' / (v ∙ ΔT) = (ΔU + p ∙ ΔV) / (v ∙ ΔT)'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Combinând cele două relații ale lui Cp și CV obținem:'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = C'+'<sub>'+'V'+'</sub>'+' + (p ∙ ΔV) / (v ∙ ΔT)'+'<br>'+'<br>'+
                                        'Din ecuația termică de stare:'+'<br>'+'<br>'+
                                        'p ∙ ΔV = ν ∙ R ∙ ΔT'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Relația lui Robert–Mayer stabilește relația între căldurile molare:'+'<br>'+'<br>'+
                                        '<a id="10">'+'C'+'<sub>'+'p'+'</sub>'+' = C'+'<sub>'+'V'+'</sub>'+' + R'+'</a>'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Relația lui Robert–Mayer stabilește relația între căldurile specifice molare:'+'<br>'+'<br>'+
                                        'c'+'<sub>'+'p'+'</sub>'+' = c'+'<sub>'+'V'+'</sub>'+' + (R / μ)'+
                                    '</li>'+
                                '</ul>'+


                                //Motoare termice
                                '<a name=\"element_target2\">'+'</a>'+
                                '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center>'+'Motoare termice'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                
                                '<h2 class=\"p-3\">'+'Mașini termice:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'În cursul unei transformări ciclice biterme, sistemul termodinamic schimbă căldurile Q'+'<sub>'+'1'+'</sub>'+', respectiv Q'+'<sub>'+'2'+'</sub>'+'  cu două izvoare de căldură ale căror temperaturi sunt T'+'<sub>'+'1'+'</sub>'+' (izvor cald) și T'+'<sub>'+'2'+'</sub>'+'  (izvor rece), cu T'+'<sub>'+'1'+'</sub>'+' > T'+'<sub>'+'2'+'</sub>'+' .'+'<br>'+'<br>'+
                                            'Cum transformările ciclice au ΔU = 0, conform principiului I al termodinamicii avem'+'<br>'+'<br>'+
                                            'Q'+'<sub>'+'1'+'</sub>'+' + Q'+'<sub>'+'2'+'</sub>'+' = L'+'<br>'+'<br>'+

                                            'Mașina termică este un sistem termodinamic care efectuează o transformare ciclică în care schimbă căldură și lucru mecanic cu mediul exterior.'+  
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Motoare termice:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                    '<a id="12">'+'Motorul termic este un sistem care transformă căldura primită, prin arderea unui combustibilul (benzina, motorina, gazul metan etc.) în lucru mecanic.'+'</a>'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Motorul Otto:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Motorul Otto folosește drept combustibil un amestec de aer cu vapori de benzină ce se realizează în carburator.'+'<br>'+'<br>'+
                                        '- Amestecul carburant este aspirat prin supapa de admisie (S1) în cilindru cu piston.'+'<br>'+'<br>'+
                                        '- Gazele rezultate în urma arderii amestecului carburant sunt eleminate prin supapa de evacuare (S2).'+'<br>'+'<br>'+
                                        '- Timpul de funcționare este perioada de deplasare a pistonului de la punctul mort superior = PMS (cilindru închide un volum minim de substanță) la punctul mort inferior = PMI (cilindru închide un volum maxim de substanță) și invers.'+'<br>'+'<br>'+
                                        '- Pistonul este legat de un sistem bielă-manivelă (vilbrochen = arbore cotit), pentru transformarea mișcării rectilinie a pistonului în mișcare de rotație.'+'<br>'+'<br>'+
                                        '- Blocul motor este format din mai mulți cilindri legați în serie. Fiecare piston are alt timp de desfășurare pentru a permite învârtirea permanentă și constantă a vilborchenului.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Timpii de funcționare ai motorului Otto:'+'<br>'+'<br>'+

                                        ' - '+'<b>'+'Timpul 1: Admisia'+'</b>'+' - (proces izobar):'+'<br>'+'<br>'+
                                        ' Supapa de admisie se deschide, în cilindru se aspiră amestecul de benzină-aer și pistonul coboară de la PMS la PMI, la presiune constantă. Este prima coborâre a pistonului.'+'<br>'+'<br>'+
                                        
                                        ' -'+'<b>'+'<a id ="11">'+'Timpul 2: Compresia'+'</b>'+' - (proces adiabatic):'+'</a>'+'<br>'+'<br>'+
                                        ' Ambele supape sunt închise. Pistonul urcă până la PMS, astfel încât combustibilul este puternic comprimat, caz în care presiunea și temperatura cresc. Datorită vitezei mari la care are loc compresia, acest proces este adiabatic (fără schimb de căldură cu exteriorul). Este prima urcare a pistonului.'+'<br>'+'<br>'+

                                        ' -'+'<b>'+'Timpul 3 : Aprinderea'+'</b>'+' - (proces izocor) și '+'<b>'+'detenta'+'</b>'+' - (proces adiabatic):'+'<br>'+'<br>'+
                                        ' Ambele supape sunt închise și pistonul se află la PMS. Scânteia electrică produsă de bujie aprinde amestecul, care explodează și duce la o creștere considerabilă a presiunii la volum constant. Amestecul arde cu degajare de căldură (Q1 = căldura primită de motor). Gazele rezultate din ardere se destind adiabatic, împing pistonul în PMI cu efectuare de lucru mecanic.Este a doua coborâre a pistonului.'+'<br>'+'<br>'+

                                        ' -'+'<b>'+'Timpul 4 : Evacuarea'+'</b>'+' - (proces izocor) și (proces izobar):'+'<br>'+'<br>'+
                                        ' Supapa de evacuare S2 se deschide, caz în care presiunea scade brusc până la valoarea presiunii atmosferice.În acest proces izocor amestecul cedează căldura Q2 în mediul exterior. Pistonul urcă până la PMS împingând afară gazele arse la presiune constantă. De aici ciclul se reia.'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Randamentul motorului termic Otto:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                    '<a id="13">'+'Randamentul motorului termic Otto (η) este o mărime fizică egală cu raportul dintre lucrul mecanic efectuat de motor (L) și căldura primită (Q).'+'</a>'+'<br>'+'<br>'+
                                        'η = L / Q'+'<sub>'+'1'+'</sub>'+' = 1 - (|Q'+'<sub>'+'cedată'+'</sub>'+'| / Q'+'<sub>'+'primită'+'</sub>'+') = 1 - (|Q'+'<sub>'+'2'+'</sub>'+'| / Q'+'<sub>'+'1'+'</sub>'+')'+'<br>'+'<br>'+

                                        'Presupunem că substanța de lucru este un gaz ideal și raportul de compresie este ε = V'+'<sub>'+'1'+'</sub>'+'/V'+'<sub>'+'2'+'</sub>'+'.'+'<br>'+'<br>'+

                                        'Căldurile în cele patru transformări sunt :'+'<br>'+'<br>'+
                                        ' - Q'+'<sub>'+'12'+'</sub>'+' = 0'+'<br>'+
                                        ' - Q'+'<sub>'+'23'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T'+'<sub>'+'3'+'</sub>'+' – T'+'<sub>'+'2'+'</sub>'+') = Q'+'<sub>'+'1'+'</sub>'+' > 0'+'<br>'+
                                        ' - Q'+'<sub>'+'34'+'</sub>'+' = 0'+'<br>'+
                                        ' - Q'+'<sub>'+'41'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T'+'<sub>'+'31'+'</sub>'+' – T'+'<sub>'+'4'+'</sub>'+') = Q'+'<sub>'+'2'+'</sub>'+' < 0'+'<br>'+'<br>'+

                                        ' η = 1 - (1 / ε'+'<sup>'+'y-1'+'</sup>'+')'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Motorul Diesel:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Motorul Diesel este un motor cu ardere internă, în patru timpi cu aprindere prin injecție a motorinei.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Timpii de funcționare ai motorului Diesel:'+'<br>'+'<br>'+

                                        '- '+'<b>'+'Timpul 1: Admisia '+'</b>'+' - (proces izobar):'+'<br>'+'<br>'+
                                        'Supapa de admisie se deschide, în cilindru se aspiră aer la presiunea atmosferică și pistonul coboară de la PMS la PMI, la presiune constantă (proces izobar). Este prima coborâre a pistonului.'+'<br>'+'<br>'+
                                        '- '+'<b>'+'Timpul 2: Compresia'+'</b>'+' - (proces adiabatic):'+'<br>'+'<br>'+
                                        'Ambele supape sunt închise. Pistonul urcă până la PMS, astfel încât aerul este puternic comprimat, caz în care presiunea și temperatura cresc considerabil. Datorită vitezei mari la care are loc compresia, acest proces este adiabatic (fără schimb de căldură cu exteriorul). Este prima urcare a pistonului.'+'<br>'+'<br>'+
                                        '- '+'<b>'+'Timpul 3: Aprinderea'+'</b>'+' - (proces izobar) și '+'<b>'+'detenta'+'</b>'+' - (proces adiabatic):'+'<br>'+'<br>'+
                                        'Ambele supape sunt închise și pistonul se află la PMS. Pompa de injecție pulverizează motorină în cilindrul motorului. Temperatura aerului din cilindru este mai mare decât temperatura de aprindere a motorinei, astfel încât aceasta se aprinde și arde la presiune constantă, cu degajare de căldură (Q1 = căldura primită de motor). Gazele rezultate din ardere se destind adiabatic, împing pistonul în PMI cu efectuare de lucru mecanic.Este a doua coborâre a pistonului.'+'<br>'+'<br>'+
                                        '- '+'<b>'+'Timpul 4: Evacuarea'+'</b>'+' - (proces izocor) și (proces izobar):'+'<br>'+'<br>'+
                                        'Supapa de evacuare S2 se deschide, caz în care presiunea scade brusc până la valoarea presiunii atmosferice. În acest proces izocor (la volum constant) amestecul cedează căldura Q2 în mediul exterior. Pistonul urcă până la PMS împingând afară gazele arse la presiune constantă. De aici ciclul se reia.'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Randamentul motorului termic Diesel:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Randamentul motorului termic Diesel (η) este o mărime fizică egală cu raportul dintre lucrul mecanic efectuat de motor (L) și căldura primită (Q).'+'<br>'+'<br>'+
                                        'η = L / Q'+'<sub>'+'1'+'</sub>'+' = 1 - (|Q'+'<sub>'+'cedată'+'</sub>'+'| / Q'+'<sub>'+'primită'+'</sub>'+') = 1 - (|Q'+'<sub>'+'2'+'</sub>'+'| / Q'+'<sub>'+'1'+'</sub>'+')'+'<br>'+'<br>'+

                                        'Presupunem că substanța de lucru este un gaz ideal și raportul de compresie este ε = V'+'<sub>'+'1'+'</sub>'+'/V'+'<sub>'+'2'+'</sub>'+' și α = V'+'<sub>'+'3'+'</sub>'+'/V'+'<sub>'+'2'+'</sub>'+'<br>'+'<br>'+

                                        'Căldurile în cele patru transformări sunt :'+'<br>'+'<br>'+
                                        '- Q'+'<sub>'+'12'+'</sub>'+' = 0 (proces adiabatic)'+'<br>'+
                                        '- Q'+'<sub>'+'23'+'</sub>'+' = ν ∙ C'+'<sub>'+'p'+'</sub>'+' ∙ (T'+'<sub>'+'3'+'</sub>'+' – T'+'<sub>'+'2'+'</sub>'+') = Q'+'<sub>'+'1'+'</sub>'+' > 0 (proces izobar)'+'<br>'+
                                        '- Q'+'<sub>'+'34'+'</sub>'+' = 0 (proces adiabatic)'+'<br>'+
                                        '- Q'+'<sub>'+'41'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T'+'<sub>'+'1'+'</sub>'+' – T'+'<sub>'+'4'+'</sub>'+') = Q'+'<sub>'+'2'+'</sub>'+' < 0 (proces izocor)'+'<br>'+'<br>'+

                                        '<a id="14">'+'η = 1 - (1 / y) ∙ (a'+'<sup>'+'y-1'+'</sup>'+' / ε'+'<sup>'+'y-1'+'</sup>'+'(a-1))'+'</a>'+
                                        
                                    '</li>'+
                                '</ul>'+
                                

                                //Principiul al II-lea

                                '<a name=\"element_target3\">'+'</a>'+
                                '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center>'+'Principiul al II-lea'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                
                                '<h2 class=\"p-3\">'+'Formularea Carnot a principiul al doilea al termodinamicii:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Prima formulare a principiul al doilea al termodinamicii îi aparține lui Sadi Carnot, care în 1824 arăta că există o limită superioară a eficienței conversiei căldurii în energie mecanică într-un motor termic, care implică folosirea unui ciclu termodinamic al unui fluid de lucru.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                    '<a id="17">'+'Carnot a fost primul care a arătat că nu este posibil să funcționeze o mașină termică cu un singur termostat, având nevoie de cel puțin două termostate.'+'</a>'+'Astfel, sistemul primește căldură de la o sursă caldă (termostat cu T'+'<sub>'+'1'+'</sub>'+') și cedează căldură unei surse reci (termostat cu T'+'<sub>'+'2'+'</sub>'+').'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Parametrii gazului în stare inițială sunt p'+'<sub>'+'1'+'</sub>'+', V'+'<sub>'+'1'+'</sub>'+' și T'+'<sub>'+'1'+'</sub>'+'.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Aducem cilindrul cu gaz pe un încălzitor (termostat cu T'+'<sub>'+'1'+'</sub>'+'). Gazul va absorbi căldură Q'+'<sub>'+'1'+'</sub>'+' de la sursa caldă și se va destinde izoterm (T'+'<sub>'+'1'+'</sub>'+' = const.) și cvasistatic de la V'+'<sub>'+'1'+'</sub>'+' la V'+'<sub>'+'2'+'</sub>'+', efectuând lucrul mecanic L'+'<sub>'+'1'+'</sub>'+'.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Aducem cilindrul cu gaz pe un suport termoizolator. Gazul se destinde adiabatic până la V'+'<sub>'+'3'+'</sub>'+', efectuând lucrul mecanic L'+'<sub>'+'2'+'</sub>'+'. Gazul se răcește având temperatura T'+'<sub>'+'2'+'</sub>'+' < T'+'<sub>'+'1'+'</sub>'+'.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Aducem cilindrul cu gaz pe o sursă rece (termostat cu T'+'<sub>'+'2'+'</sub>'+'). Gazul va ceda căldură Q'+'<sub>'+'2'+'</sub>'+' și se va comprima izoterm (T'+'<sub>'+'2'+'</sub>'+' = const.) și cvasistatic de la V'+'<sub>'+'3'+'</sub>'+' la V'+'<sub>'+'4'+'</sub>'+', primind lucrul mecanic L'+'<sub>'+'3'+'</sub>'+'.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Aducem cilindrul cu gaz pe un suport termoizolator. Gazul se comprimă adiabatic de la V'+'<sub>'+'4'+'</sub>'+' până la '+'<sub>'+'1'+'</sub>'+'. Temperatura lui va crește de la T'+'<sub>'+'2'+'</sub>'+' la T'+'<sub>'+'1'+'</sub>'+', primind lucrul mecanic L'+'<sub>'+'4'+'</sub>'+'. Gazul revine în starea inițială.'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Randamentul ciclului Carnot:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Randamentul ciclului Carnot (η) este o mărime fizică egală cu raportul dintre lucrul mecanic efectuat de motor (L) și căldura primită (Q'+'<sub>'+'1'+'</sub>'+').'+'<br>'+'<br>'+
                                        'η = L / Q'+'<sub>'+'1'+'</sub>'+'<br>'+'<br>'+
                                        'L = L'+'<sub>'+'1'+'</sub>'+' + L'+'<sub>'+'2'+'</sub>'+' + L'+'<sub>'+'3'+'</sub>'+' + L'+'<sub>'+'4'+'</sub>'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Formularea Carnot a principiul al doilea al termodinamicii:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                    '<a id="15">'+'Randamentul ciclului Carnot este întotdeauna subunitar,'+'</a>'+'deoarece T'+'<sub>'+'2'+'</sub>'+' ≠ 0'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                    '<a id="16">'+'Randamentul ciclului Carnot depinde numai de temperatura sursei calde (T'+'<sub>'+'1'+'</sub>'+') și a celei reci (T'+'<sub>'+'2'+'</sub>'+') și nu depinde de substanța de lucru.'+'</a>'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Randamentul unei mașini termice ireversibile este întotdeauna mai mic decît randamentul unei mașini termice care funcționează reversibil între aceleași limite de temperatură.'+
                                    '</li>'+
                                '</ul>'),

        //teorieElectromecanica.html
        "teorieElectromecanicaTitle": "Electromecanică teorie",
        "teorieElectromecanica": ('<u>' +'<h2 class="p-3" align = center>Curentul electric</h2><br><br><br>' +'</u>'         
                                +'<ul>'
                                    +'<li>'
                                        +'Curentul electric </b>este mișcarea ordonată a purtătorilor de sarcină electrică printr-un circuit electric.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'<b>Purtătorii de sarcină</b> electrică a căror mișcare determină apariția curentului electric pot fi:<br><br>'
                                        +'a) Electronii liberi, în metale.<br><br>'
                                        +'b) Ionii și electronii, în electroliți (soluții sau topituri de acizi, baze sau săruri) și în gaze.'
                                    +'</li>'
                                +'</ul>'
                                +'<h2 class="p-3">Componentele unui circuit electric:</h2>'
                                +'<ul>'
                                    +'<li>'
                                        +'Generatoare electrice<br><br>'
                                        +'- Generatoare de curent continuu<br><br>'
                                        +'- Generatoare de curent alternativ'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Aparate electrice<br><br>'
                                        +'- bec electric<br><br>'
                                        +'- rezistor electric<br><br>'
                                        +'- motor electric<br><br>'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Conductoare de legătură<br>'
                                        +'sunt fire confecționate din aluminiu sau cupru și care leagă componentele circuitului între ele.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Întrerupătoare electrice<br>'
                                        +'care au rolul de a închide și de a deschide circuitul electric. Numai când întrerupătorul este pe poziție închis, trece curentul electric prin circuit.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Sensul convențional al curentului electric continuu printr-un circuit este de la borna pozitivă a sursei spre borna negativă, prin circuitul exterior (prin consumatori).'
                                    +'</li>'
                                    
                                +'</ul>'
                                +'<h2 class="p-3">Intensitatea curentului electric:</h2>'
                                +'<ul>'
                                    +'<li>'
                                        +'Când aplicăm o tensiune electrică între două puncte ale unui conductor, apare un curent electric, adică o mișcare dirijată a electronilor săi liberi, care transportă o sarcină q = n ∙ e.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Intensitatea curentului electric (I) este o mărime fizică scalară numeric egală cu raportul dintre sarcina electrică (q) ce trece prin secțiunea transversală a unui conductor și intervalul de timp (Δt).'
                                    +'</li><br>'
                                    +'<li>'
                                    +'Caracterizarea intensității curentului electric ca mărime fizică:<br><br>'
                                    +'I = Sarcina electrică / Timp = q / Δt = (n ∙ e) / Δt<br><br>'
                                    +'n - numărul de electroni<br><br>'
                                    +'e - sarcina unui electron (în modul)<br><br>'
                                    +'e = 1,6 ∙ 10<sup>-19</sup> C'
                                +'</li>'
                            +'</ul>'
                            
                            +'<h2 class="p-3">Tensiunea electrică:</h2>'
                            +'<ul>'
                                +'<li>'
                                    +'<b>Generatoarele electrice</b> (sursele electrice) sunt dispozitive care au rolul de a produce și de a menține curentul electric printr-un circuit, adică asigură deplasarea purtătorilor de sarcină electrică prin circuit. Ele efectuează un lucru mecanic asupra acestor purtători pentru a-i deplasa.'
                                +'</li><br>'
                                +'<li>'
                                    +'<b>Tensiunea electromotoare</b> (prescurtată t.e.m., cu simbolul E) a unei surse este mărimea fizică scalară care măsoară lucrul mecanic efectuat de sursă (L<sub>total</sub>) pentru deplasarea unității de sarcină electrică (q) de-a lungul întregului circuit.<br><br>'
                                    +'E = L<sub>total</sub> / q<br><br>'
                                    +'<a id="1">Unitate de măsură în S.I pentru tensiunea electrică este voltul (V):</a><br><br>'
                                    +'[E]<sub>SI</sub> = [L]<sub>SI</sub> / [q]<sub>SI</sub> = J / C = V(volt)'
                                +'</li><br>'
                                +'<li>'
                                    +'<b>Lucrul mecanic total</b> efectuat de sursă pentru a deplasa sarcina q prin întreg circuitul este egal cu lucrul mecanic exterior efectuat de sursă pentru a deplasa sarcina q prin circuitul exterior (L<sub>ext</sub>) și lucrul mecanic efectuat de sursă pentru a deplasa sarcina q prin circuitul interior al sursei (L<sub>int</sub>):<br><br>'
                                    +'L<sub>Total</sub> = L<sub>ext</sub> + L<sub>int</sub><br><br>'
                                    +'L<sub>Total</sub> / q = (L<sub>ext</sub> / q) + (L<sub>int</sub> / q)'
                                +'</li><br>'
                                +'<li>'
                                +'<b> Tensiunea electrică</b> la borne (cu simbolul U ) este mărimea fizică scalară care măsoară lucrul mecanic efectuat de sursă (L<sub>ext</sub>) pentru deplasarea unității de sarcină electrică (q) de-a lungul circuitului exterior.<br><br>'
                                 +'U = L<sub>ext</sub> / q'
                             +'</li><br>'
                             +'<li>'
                                 +'<b>Tensiunea internă</b> (cu simbolul u) este mărimea fizică scalară care măsoară lucrul mecanic efectuat de sursă (L<sub>int</sub>) pentru deplasarea unității de sarcină electrică (q) de-a lungul circuitului interior.<br><br>'
                                 +'u = L<sub>int</sub> / q'
                             +'</li>'
                             +'<li>'
                                 +'Astfel obținem relația dintre cele trei tensiuni electrice ale unui circuit electric:<br><br>'
                                 +'E = U + u'
                             +'</li><br>'
                             +'<li>'
                                 +'U = Lucru mecanic / Sarcina electrică<br><br>'
                                 +'U = L / q'
                             +'</li>'
                         +'</ul>'

                        //Legea lui Ohm
                        +'<a name="element_target"></a>'
                        +'<br><br><br><br><u><h2 class="p-3" align = center>Legea lui Ohm</h2><br><br><br></u>'
                        
                        +'<h2 class="p-3">Tensiunea electrică:</h2>'
                        +'<ul>'
                            +'<li>'
                                +'Măsurarea rezistenței electrice'
                            +'</li><br>'
                            +'<li>'
                            +'Constanta de proporționalitate dintre tensiunea aplicată (U) și intensitatea curentului (I) este cunoscută sub numele de rezistența electrică a conductorului.'
                            +'</li><br>'
                            +'<li>'
                                +'Rezistenţa electrică este mărimea fizică ce ne arată cât de mult se opune un conductor la trecerea curentului electric prin el.'
                            +'</li><br>'
                            +'<li>'
                                +'Rezistența electrică a unui conductor (R) este mărimea scalară egală cu raportul dintre tensiunea aplicată (U) la capetele conductorului și intensitatea curentului (I) stabilit prin el, când temperatura conductorului rămâne constantă.'
                            +'</li><br>'
                            +'<li>'
                                +'Caracterizarea rezistenței electrice ca mărime fizică:<br><br>'
                                +'R = Tensiunea electrică / Intensitatea electrică = U / I<br><br>'
                                +'[R]<sub>SI</sub> = [U]<sub>SI</sub> / [I]<sub>SI</sub> = V / A = Ω(ohm)<br><br>'
                                +'Dependența rezistenței electrice de natura și de dimensiunile conductorului este:<br><br>'
                                +'R = ρ ∙ (l / s) <br><br>'
                                +'l - lungimea conductorului<br>'
                                +'S - aria secțiunii transversale a conductorului<br>'
                                +'ρ - rezistivitatea electrică a materialului conductor:<br><br>'
                                +'[ρ]<sub>SI</sub> = 1Ω ∙ m'
                            +'</li>'
                        +'</ul>'
                        +'<h2 class="p-3">Legea lui Ohm pentru o porțiune de circuit:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Intensitatea curentului ce traversează rezistorul depinde de :<br><br>'
                            +'1) Tensiunea de la capetele rezistorului: cu cât creşte tensiunea de la bornele rezistorului, cu atât creşte şi intensitatea curentului ce trece prin el.<br><br>'
                            +'2) Rezistenţa electrică: cu cât creşte rezistenţa rezistorului, cu atât scade intensitatea curentului ce trece prin rezistor.'
                        +'</li><br>'
                        +'<li>'
                            +'Legea lui Ohm pentru o porțiune de circuit:<br><br>'
                            +'“Dacă la capetele unei porțiuni de circuit se aplică o tensiune(U), atunci intensitatea curentului electric (I) produs prin porțiune respectivă de circuit este direct proporțională cu tensiunea electrică (U) aplicată acelei porțiuni.”<br><br>'
                            +'I = U / R'
                        +'</li>'
                    +'</ul>'
                    +'<h2 class="p-3">Legea lui Ohm pentru întregul circuit:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Legea lui Ohm pentru întregul circuit:<br><br>'
                            +'“Intensitatea curentului electric printr-un circuit simplu este direct proporțională cu tensiunea electromotoare a sursei (E) și invers proporțională cu rezistența totală a circuitului (R+r).“<br><br>'
                            +'I = E / (R + r)<br><br>'
                            +'1) Legea lui Ohm este valabilă în general pentru surse chimice deoarece au rezistența internă mică, dar poate fi particularizată și pentru alte surse.<br><br>'
                            +'2) Dacă rezistența exterioară (R) are valori foarte mici, obținută de exemplu prin scurtcircuitarea sursei cu un conductor scurt, adică dacă R = 0, intensitatea curentului debitat de sursă devine maximă:<br><br>'
                            +'I<sub>sc</sub> = E / r (curent de scurtcircuit)<br><br>'
                            +'Acest lucru nu este de dorit, deoarece curenții mari pot provoca daune, iar sursa se consumă rapid.'
                        +'</li>'
                    +'</ul>'
                    +'<h2 class="p-3">Legea lui Ohm pentru o porțiune de circuit:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Elementele rețelelor electrice (circuitelor ramificate):<br><br>'
                            +'1. <b>Nodul de circuit</b> reprezintă intersecția a cel puțin trei conductoare electrice.<br><br>'
                            +'2. <b>Latura de circuit</b> este porțiunea de circuit cuprinsă între două noduri succesive, astfel încât prin elementele ei să circule același curent electric.<br><br>'
                            +'3. <b>Ochiul de circuit</b> reprezintă porțiunea de circuit formată din cel puțin două laturi, conectate astfel încât să formeze un contur închis (linie poligonală închisă).<br><br>'
                        +'</li><br>'
                    +'</ul>'

                    //Legea lui Kirchhoff
                    +'<a name="element_target2"></a>'
                    +'<br><br><br><br><u><h2 class="p-3" align = center>Legea lui Kirchhoff</h2><br><br><br></u>'
                    +'<h2 class="p-3">Prima lege a lui Kirchhoff:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'“Suma algebrică a intensităților curenților care se întâlnesc într-un nod de circuit este nulă“.<br><br>'
                        +'</li>'
                    +'</ul>'
                        +'<h2 align = center>'
                            +'<img src ="img/lege1.png" width = 240>'
                        +'</h2>'
                    +'<ul>'
                        +'Intensitățile I<sub>k</sub> pot fi pozitive sau negative, în funcție de modul în care trece curentul prin nod (intră în nod sau iese din nod).<br><br>'
                        +'<li>'
                            +'O altă modalitate de enunțare a primei legi a lui Kirchhoff:<br><br>'
                            +'“Suma algebrică a intensităților curenților care intră într-un nod de circuit este egală cu suma intensităților curenților care ies din nodul de rețea“.'
                        +'</li>'
                    +'</ul>'
                    +'<h2 align = center>'
                        +'<img src ="img/lege1_alt.png" width = 240>'
                    +'</h2>'
                    +'<ul>'
                        +'I<sub>1</sub> + I<sub>2</sub> + I<sub>4</sub> = I<sub>3</sub> + I<sub>5</sub>'
                    +'</ul>'
                    +'<h2 class="p-3">A doua lege a lui Kirchhoff:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'“Suma algebrică a tensiunilor electromotoare dintr-un ochi de rețea este egală cu suma algebrică a tensiunilor de pe fiecare latură din acel ochi de circuit“.'
                        +'</li>'
                    +'</ul>'
                    +'<h2 align = center>'
                        +'<img src ="img/lege2.png" width = 240>'
                    +'</h2>'
                    +'<ul>'
                        +'Termenii sumelor pot fi pozitivi sau negativi, în funcție de sensul tensiunii sau al intensității în raport cu sensul ales arbitrar pentru ochiul considerat.<br><br>'
                        +'Pentru m = nr. ochiuri simple, se scriu m ecuații cu a doua teoremă a lui Kirchhoff.'
                    +'</ul>'
                    +'<h2 class="p-3">Convenții de semne:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Tensiunea electromotoare:<br><br>'
                            +' - se ia cu plus dacă sensul curentului electric prin sursă este identic cu cel al ochiului ales arbitrar : + E<br><br>'
                            +' - se ia cu minus dacă sensul curentului electric prin sursă este opus cu cel al ochiului ales arbitrar : - E<br><br>'
                        +'</li><br>'
                        +'<li>'
                            +'Tensiunea electrică:<br><br>'
                            +' - se ia cu plus dacă sensul curentului electric este același cu cel al ochiului ales arbitrar (sens de referință): + I ∙ R<br><br>'
                            +' - se ia cu minus dacă sensul curentului electric este opus cu cel al ochiului ales arbitrar (sens de referință): - I ∙ R<br><br>'
                        +'</li>'
                    +'</ul>'

                    //Gruparea rezistoarelor și generatoarelor electrice
                    +'<a name="element_target3"></a>'
                    +'<br><br><br><br><u><h2 class="p-3" align = center>Gruparea rezistoarelor și generatoarelor electrice</h2><br><br><br></u>'
                    +'<h2 class="p-3">Gruparea rezistoarelor:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Orice element de circuit (generator electric, bec, rezistor, motor, întrerupător) poate fi legat (grupat) cu un altul (de același fel sau diferit) în două moduri:<br><br>'
                            +'- În serie<br><br>'
                            +'- În paralel<br><br>'
                            +'Un grup de rezistoare se înlocuiește cu unul singur, denumit rezistor echivalent. Rezistența acestuia reprezintă echivalentul rezistențelor respectivei grupări.'
                        +'</li><br>'
                        +'<li>'
                            +'Rezistoarele prin care trece același curent și care se află pe aceeași latură a unui circuit formează o grupare în serie, fiind echivalate cu rezistorul R<sub>s</sub>.<br><br>'
                            +'Rezistența echivalentă a unei grupări serie de rezistoare este egală cu suma rezistențelor fiecărui rezistor:<br><br>'
                            +'R<sub>s</sub> = R<sub>1</sub> + R<sub>2</sub>'
                        +'</li><br>'
                        +'<li>'
                            +'Rezistoarele care se află pe laturi diferite între aceleași două noduri ale unui circuit, având aceeași tensiune la capete formează o grupare în paralel, fiind echivalate cu rezistorul R<sub>p</sub>.<br><br>'
                            +'Inversul rezistenței echivalente a unei grupări paralel de rezistoare este egal cu suma inverselor rezistențelor fiecărui rezistor:<br><br>'
                            +'1 / R<sub>p</sub> = (1 / R<sub>1</sub>) + (1 / R<sub>2</sub>)'
                        +'</li>'
                    +'</ul>'
                    +'<h2 class="p-3">Gruparea generatoarelor identice:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Prin gruparea mai multor surse se obține o „sursă echivalentă“ cu o tensiune electromotoare echivalentă și o rezistență internă echivalentă.'
                        +'</li><br>'
                        +'<li>'
                            +'Pentru o grupare în serie de n surse identice: tensiunea electromotoare a grupării serie de generatoare electrice:<br><br>'
                            +'E<sub>s</sub> = n · E'
                        +'</li><br>'
                        +'<li>'
                            +'Rezistența internă a grupării serie de generatoare electrice identice:<br><br>'
                            +'r<sub>s</sub> = n · r'
                        +'</li><br>'
                        +'<li>'
                            +'Pentru o grupare în paralel de n surse identice: tensiunea electromotoare a grupării paralel de generatoare electrice:<br><br>'
                            +'E<sub>p</sub> = E<sub>1</sub> = E<sub>2</sub> = … = E<sub>n</sub>'
                        +'</li><br>'
                        +'<li>'
                            +'Rezistența internă a grupării serie de generatoare electrice identice:<br><br>'
                            +'r<sub>p</sub> = r / n'
                        +'</li>'
                    +'</ul>'

                    //Eneriga si puterea electrica
                    +'<a name="element_target4"></a>'
                    +'<br><br><br><br><u><h2 class="p-3" align = center>Energia și puterea electrică</h2><br><br><br></u>'
                    +'<h2 class="p-3">Energia electrică:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Energia electrică (notată cu W) a unei surse măsoară lucrul mecanic efectuat de aceasta pentru a deplasa sarcina electrică (q) prin secțiunea transversală a circuitului, într-un interval de timp (Δt):<br><br>'
                            +'W = L = E ∙ q<br><br>'
                            +'Dar q = I ∙ Δt (din formula intensității)<br><br>'
                            +'W<sub>tot</sub> = E ∙ I ∙ Δt (energia consumată pe întreg circuitul)<br><br>'
                            +'W<sub>ext</sub> = U ∙ I ∙ Δt (energia consumată pe circuitul exterior)<br><br>'
                            +'W<sub>int</sub> = u ∙ I ∙ Δt (energia consumată pe circuitul interior)<br><br>'
                            +'W = U ∙ I ∙ Δt = R ∙ I<sup>2</sup> ∙ Δt = (U<sup>2</sup> / R) ∙ Δt<br><br>'
                            +'[W]<sub>SI</sub> = J(joule)'
                        +'</li><br>'
                    +'</ul>'
                    +'<h2 class="p-3">Puterea electrică:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Puterea electrică (P) este o mărime fizică ce măsoară viteza de transfer a energiei electrice în unitatea de timp.<br><br>'
                            +'P = W / Δt = U ∙ I = R ∙ I<sup>2</sup> = (U<sup>2</sup> / R)<br><br>'
                            +'[P]<sub>SI</sub> = J / s = W(watt)'
                        +'</li><br>'
                        +'<li>'
                            +'Puterea electrică a unui generator electric, cu t.e.m. E și rezistență interioară r este:<br><br>'
                            +'P = W<sub>tot</sub> / Δt = E ∙ I = (R + r) ∙ I<sup>2</sup> = E<sup>2</sup> / (R + r)'
                        +'</li>'
                    +'</ul>'
                    +'<h2 class="p-3">Randamentul electric:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Energia electrică a generatorului electric este furnizată circuitului exterior (W<sub>utilă</sub> - energie utilă = energia exterioară), restul energiei o primește interiorul generatorului (energie interioară).<br><br>'
                            +'Randamentul electric al unui receptor (consumator) este dat de relația:<br><br>'
                            +'η = W<sub>utilă</sub> / W<sub>totală</sub> = P<sub>exterioară</sub> / P<sub>totală>'
                        +'</li><br>'
                        +'<li>'
                            +'Pentru un circuit simplu format dintr-o sursă cu t.e.m. E și rezistență interioară r, legată la un rezistor de rezistență R, randamentul electric este dat de relația:<br><br>'
                            +'η = (U ∙ I) / (E ∙ I) = U / E = R / (R + r)'
                        +'</li><br>'
                        +'<li>'
                            +'Puterea dezvoltată de rezistor este maximă când: <br><br>'
                            +'P (R) = E<sup>2</sup> / (4 ∙ r)<br><br>'
                            +'adică atunci când:<br><br>'
                            +'R = r'
                        +'</li>'
                    +'</ul>'
                    +'<h2 class="p-3">Legea lui Joule:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Efectul termic al curentului electric (efectul Joule) constă în încălzirea unui conductor la trecerea curentului electric prin el.<br><br>'
                            +'Legea lui Joule măsoară cantitativ căldura degajată la trecerea curentului electric printr-un conductor.'
                        +'</li><br>'
                        +'<li>'
                            +'Legea lui Joule:<br><br>'
                            +'Căldura Q degajată la trecerea curentului electric printr-un conductor este proporțională cu rezistența conductorului R, cu pătratul intensității curentului electric I<sup>2</sup> și cu intervalul de timp Δt cât circulă curentul electric prin el.<br><br>'
                            +'Q = R ∙ I<sup>2</sup> ∙ Δt'
                        +'</li>'
                    +'</ul>'),

        //teorieOptica.html
        "teorieOpticaTitle": "Optică teorie",
        "teorieOptica": ('<u>' +'<h2 class="p-3" align = center>Optica geometrică</h2><br><br><br>' +'</u>'
                        +'<h2 class="p-3">Reflexia luminii:</h2>'
                        +'<ul>'
                            +'<li>'
                                +'PRINCIPIUL LUI FERMAT:<br><br>'
                                    +'“Lumina se propagă între două puncte A și B, astfel încât drumul său optic și, implicit, intervalul de timp necesar parcurgerii distanței AB să fie minim.”<br><br>'
                                    +'Reflexia luminii este fenomenul în care lumina se întoarce în primul mediu, cu schimbarea direcţiei de propagare, atunci când ea întâlneşte un alt mediu (suprafaţa de separare dintre două medii optice diferite).'
                            +'</li><br>'
                            +'<li>'
                                +'Legile reflexiei:<br><br>'
                                +'- Legea I:<br><br>'
                                +'Raza incidentă, normala și raza reflectată sunt coplanare (aparțin aceluiași plan).<br><br>'
                                +'- Legea a II a:<br><br>'
                                +'Unghiul de incidență (i) este egal cu unghiul de reflexie (r).'
                            +'</li><br>'
                            +'<li>'
                                +'Oglinzile plane<br><br>'
                                +'Oglinzile sunt corpuri netede și lucioase, în care lumina se reflectă.<br><br>'
                                +'Oglinzile plane au suprafața plană (dreaptă) și sunt cele pe care le avem cu toții acasă și în care ne uităm zilnic.<br><br>'
                                +'Iată simbolul ei (partea din spate care nu reflectă lumina se hașurează):<br><br>'
                            +'</li>'
                        +'</ul>'
                        +'<h2 align = center>'
                            +'<img style = "border: 2px solid #1b4188" src ="img/optica1.png" width = 100>'
                        +'</h2><br>'
                        +'<ul>'
                            +'<li>'
                                +'Formarea imaginii unui obiect într-o oglindă plană:<br><br>'
                                +'- Se desenează oglinda plană pe verticală.<br><br>'
                                +'- Se trasează prin mijlocul oglinzii axa optică principală, perpendiculară pe oglindă (pe orizontală).<br><br>'
                                +'- Se desenează obiectul AB sub forma unui segment cu săgeată, în fața oglinzii.<br><br>'
                                +'- Se duce prima rază din vârful obiectului (B) perpendiculară pe oglindă și se prelungește punctată în spatele oglinzii (fiind perpendiculară pe suprafața oglinzii nu își schimbă direcția de propagare când se reflectă).<br><br>'
                                +'- Se duce a doua rază din vârful obiectului (B) oblică pe oglindă se trasează raza reflectată a acesteia, respectând legile reflexiei (unghiul i = unghiul r)<br><br>'
                                +'- Se prelungește punctată în spatele oglinzii raza reflectată, până se întâlnește cu prelungirea primei raze. Punctul de intersecție al lor se notează cu B\', care reprezintă vârful imaginii obiectului în oglindă.<br><br>'
                                +'- Din punctul B\' se duce perpendiculară pe axa optică principală, iar piciorul perpendicularei se notează cu A\' și reprezintă baza imaginii obiectului în oglindă. Se pune vârful săgeții în B\'.'
                            +'</li>'
                        +'</ul>'
                        +'<h2 align = center>' +
                        '<img style = "border: 2px solid #1b4188" src ="img/optica2.png" width = 300>' +
                    '</h2><br>' +
                    '<ul>' +
                        '<li>' +
                            'Caracteristicile imaginii A\'B\':<br><br>' +
                            '- Virtuală, deoarece se formează la intersecția prelungirilor razelor reflectate (în spatele oglinzii)<br><br>' +
                            '- Dreaptă<br><br>' +
                            '- Egală cu obiectul AB (y<sub>1</sub> = y<sub>2</sub>)' +
                            '- Ob. și Im. sunt simetrice față de oglindă' +
                            'Formula oglinzii plane: x<sub>2</sub> = -x<sub>1</sub>, deoarece R → ∞(nu are focare)<br><br>' +
                            'Mărirea liniară transversală :	β = 1' +
                        '</li>' +
                    '</ul>' +
                    '<ul>' +
                        '<li>' +
                            'Caracterizarea imaginii (A\'B\') obiectului în oglinda plană:<br><br>' +
                            'Ob. AB și im. A\'B\' sunt simetrice față de oglindă (imaginea se formează în spatele oglinzii, la aceeaşi distanţă faţă de oglindă ca şi obiectul).<br><br>' +
                            'Imaginea este virtuală, deoarece se formează la intersecția prelungirilor razelor reflectate (ea nu poate fi prinsă pe ecran sau film foto).<br><br>' +
                            'Im. A\'B\' este la fel de mare ca ob. AB.' +
                        '</li><br>' +
                    '</ul>' +
                    '<h2 class="p-3">Oglinzile sferice:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Oglinzile sferice sunt porțiuni din sfere (calote sferice) care reflectă lumina ce cade pe ele.<br><br>' +
                            'Clasificarea oglinzilor sferice: <br><br>' +
                            'a) Oglinzile concave reflectă cu partea interioară, scobită a suprafeței sferice (adică au partea lucioasă pe partea interioară a sferei). Ele transformă un fascicul de lumină paralel într-unul convergent.' +
                        '</li>' +
                    '</ul>'
                    +'<h2 align = center>' +
                    '<img style = "border: 2px solid #1b4188" src ="img/optica3.png" width = 300>' +
                '</h2><br>' +
                '<ul>' +
                    '<li>' +
                        'b) Oglinzile convexe reflectă cu partea exterioară, bombată a suprafeței sferice (adică au partea lucioasă pe partea exterioară a sferei). Ele transformă un fascicul de lumină paralel într-unul divergent.' +
                    '</li>' +
                '</ul>' +
                '<h2 align = center>' +
                    '<img style = "border: 2px solid #1b4188" src ="img/optica4.png" width = 300>' +
                '</h2><br>' +
                '<ul>' +
                    '<li>' +
                        'Formarea imaginii unui obiect într-o oglindă sferică<br><br>' +
                        'Pentru a forma imaginea unui obiect într-o oglindă sferică trebuie să ducem minim două raze:<br><br>' +
                        'Din vârful ob. A se duce o dreaptă paralelă cu axa optică principală până întâlnește suprafața oglinzii și de acolo se reflectă prin focar.<br><br>' +
                        'Din vârful ob. A se duce o dreaptă prin centrul de curbură până se intersectează cu prima rază (aceasta se reflectă pe aceeași direcție).<br><br>' +
                        'Cele două raze se prelungesc până se întâlnesc. Punctul lor de intersecție este vârful imaginii, A\'. Din acest punct se duce o perpendiculară pe axa optică principală. Piciorul perpendicularei, B\', este baza imaginii formate.' +
                    '</li>' +
                '</ul>' +
                '<h2 align = center>' +
                    '<img style = "border: 2px solid #1b4188" src ="img/optica5.png" width = 300>' +
                '</h2><br>' +
                '<ul>' +
                    '<li>' +
                        'Formula oglinzilor sferice:<br> (1 / x<sub>2</sub>) + (1 x<sub>1</sub>) = 1 / f = 2 / R<br><br>' +
                        'Mărirea liniară transversală:<br>' +
                        'β = y<sub>2</sub> / y<sub>1</sub> = - x<sub>2</sub> / x<sub>1</sub>' +
                    '</li>' +
                '</ul>' +
                '<ul>' +
                    '<li>' +
                        'Imaginea unui obiect într-o oglindă concavă depinde de distanța de la ob. la oglindă.' +
                    '</li><br>' +
                    '<li>' +
                        'Tipul oglinzii:<br><br>' +
                        '- Concava:<br>' +
                        '|x<sub>1</sub>| > 2|f| - Reală - Micșorată - Răsturnată<br>' +
                        '|x<sub>1</sub>| = 2|f| - Reală - Egală - Răsturnată<br>' +
                        '2|f| > |x<sub>1</sub>| > |f| - Reală - Mărită - Răsturnată<br>' +
                        '|x<sub>1</sub>| < |f| - Virtuală - Mărită - Dreaptă<br><br>' +
                        '-Convexă:<br>' +
                        'Orice |x<sub>1</sub>| - Virtuală - Micșorată - Dreaptă' +
                    '</li><br>' +
                '</ul>' +
                '<h2 class="p-3">Refracția luminii:</h2>' +
                '<ul>' +
                    '<li>' +
                        'Legile refracției luminii:<br><br>' +
                        'Indicele de refracție (notat cu n) al unui mediu transparent este dat de raportul dintre viteza luminii în vid (c) și viteza luminii în mediul respectiv (v).<br><br>' +
                        'n = c / v<br><br>' +
                        'Refracția luminii este fenomenul în care lumina își schimbă direcția de propagare atunci când traversează suprafața de separație dintre două medii transparente diferite.' +
                    '</li><br>' +
                    '<li>' +
                        'Legile refracției<br><br>' +
                        'Legea I a refracției:<br>' +
                        'Raza incidentă (SI), normala la suprafața de separare (NI) și raza refractată (IR\') sunt coplanare.<br><br>' +
                        'Legea a II-a a refracției:<br>' +
                        'Raportul dintre unghiul de incidență(i) ș sinusul unghiului de refracție(r\') este egal cu raportul dintre indicele de refracție absolut al mediului al II-lea și indicele de refracție absolut al I mediu:<br><br>' +
                        'sin i / sin r\' = n<sub>2</sub> / n<sub>1</sub> = n<sub>21</sub><br><br>' +
                        'n<sub>21</sub> = indicele de refracție al mediului al II-lea față de primul' +
                    '</li><br>' +
                    '<li>' +
                        'Consecințele refracției luminii:<br><br>' +
                        'Consecințele refracției luminii au loc datorită schimbării direcţiei razei refractate faţă de direcţia razei incidente, modificând imaginea obiectelor aflate în apă:<br><br>' +
                        '- Un corp aflat în apă pare rupt la suprafața apei, ca și cum partea din apă a corpului nu este în continuarea celei din aer.<br><br>' +
                        '- Un corp aflat în apă este perceput de ochiul nostru mai la suprafaţă decât este el în realitate. Astfel apele limpezi sunt mult mai adânci decât par.<br><br>' +
                        '- Obiectele aflate în apă par mai mari decât în realitate, apa comportându-se ca o lupă.<br><br>'+
                        '</li>'+
                    '</ul>'
                    +'<h2 class="p-3">Prisma optică:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Refracția luminii monocromatice în prisma optică:<br><br>' +
                            'Prisma este un mediu transparent (cu indicele de refracție n) mărginit de două fețe plane, care fac între ele un unghi diedru, numit unghiul prismei (A).<br><br>' +
                        '</li>' +
                    '</ul>' +
                    '<h2 align = center>' +
                        '<img style = "border: 2px solid #1b4188" src ="img/optica6.png" width = 300>' +
                    '</h2><br>' +
                    '<ul>' +
                        '<li>' +
                            'Când raza incidentă (SI) cade pe fața AB a prismei se refractă (prima rază refractată II\'), apropiindu-se de normala NI (n<sub>aer</sub> < n<sub>prismă</sub>) după legea:<br>' +
                            'sin i = n ∙ sin r<br><br>' +
                            'Raza II\' se refractă la căderea pe fața AC a prismei în punctul I\', depărtându-se de normala NN\' (n<sub>prismă</sub> > n<sub>aer</sub>), după legea:<br>' +
                            'n ∙ sin r\' = sin i\'<br><br>' +
                            'Unghiul dintre direcția razei incidente (SI) și direcția razei emergente (I\'R) se numește unghi de deviație (δ) care are valoarea:<br>' +
                            'δ = i + i\' – (r + r\') = i + i\' – A<br><br>' +
                        '</li>' +
                    '</ul>' +
                    '<ul>' +
                        '<li>' +
                            'Pentru a stabili condiția de emergență (adică raza incidentă să iasă din prismă) trebuie să nu aibă loc reflexia totală a razei II\' pe fața AC, adică:<br>' +
                            'r\' ≤ l (unghiul limită).<br><br>' +
                            'Cum A = r + r\' → r\' = A – r<br>' +
                            'r ≥ A – l → sin r ≥ sin (A – l)<br><br>' +
                            'Dar din prima lege a refracției avem:<br>' +
                            'sin r = sin i / n <br>' +
                            'sin i / n >= sin (A - l)<br><br>' +
                        '</li>' +
                        '<li>' +
                            'Unghiul maxim de incidență este<br>' +
                            'i = 90° → sin 90° = 1 <br>' +
                            '1 / n >= sin(A - l)<br>' +
                            'sin l = 1 / n<br>' +
                            'sin l >= sin(A-l) sau A <= 2 ∙ 1<br>' +
                            'sin l = 1 / n → 1 = arc sin 1 / n<br>' +
                        '</li>' +
                        '<li>' +
                            'O rază incidentă pe prismă poate ieși din prismă dacă unghiul ei refringent (A) îndeplinește condiția:<br>' +
                            'A ≤ 2 ∙ arc sin 1/n<br><br>' +
                            'Dacă prisma are A > 2 ∙ arc sin 1/n, toate razele incidente pe prismă se vor reflecta total pe fața AC.' +
                        '</li><br>' +
                        '<li>' +
                            'Când unghiul de incidență (i) variază și unghiul de deviație (δ) variază, luând întotdeauna valori mai mari decât o anumită valoare minimă (δ<sub>m</sub>).<br><br>' +
                            'Când i = i\' și r = r\' obținem valoarea unghiul de deviație minimă (δ<sub>m</sub>):<br>' +
                            'δ<sub>m</sub> = 2 ∙ i – A<br><br>' +
                            'Dacă măsurăm experimental unghiul de deviație minimă se poate determina indicele de refracție al prismei cu formula:<br>' +
                            'n = sin((A + <sub>m</sub>) / 2) / sin (A / 2)' +
                        '</li><br>' +
                    '</ul>'
                    +'<h2 class="p-3">' + 'Tipuri de lentile:' + '</h2>' + 
                    '<ul>' + 
                        '<li>' + 
                            'Lentilele sunt corpuri transparente care au cel puțin o suprafață sferică.<br><br>' + 
                            'Elementele unei lentile :<br><br>' + 
                            'Axa optică principală care se trasează prin mijlocul lentilei.<br><br>' + 
                            'Centrul optic al lentilei (O) aflat la intersecția lentilei cu axa optică principală.<br><br>' + 
                            'Două focare așezate de-o parte și de alta față de centrul optic al lentilei, la distanțe egale.<br><br>' + 
                            'Focarul aflat în partea stângă față de O se numește focar negativ / obiect (F<sub>1</sub>), deoarece se află pe axa numerelor negative.<br><br>' + 
                            'Focarul aflat în partea dreaptă față de O se numește focar pozitiv / imagine (F<sub>2</sub>), deoarece se află pe axa numerelor pozitive.<br><br>' + 
                            'Centrele de curbură (C<sub>1</sub> și C<sub>2</sub>) ale dioptrilor care mărginesc lentila aflate de-o parte și de alta față de O, la o distanță dublă față de OF.' + 
                        '</li>' + 
                    '</ul>' + 
                    '<h2 class="p-3">' + 'Clasificarea lentilelor:' + '</h2>' + 
                    '<ul>' + 
                        '- <b>Lentile convergente</b> (convexe) sunt lentilele care transformă un fascicul de lumină paralel într-un fascicul convergent. Ele refractă lumina prin focarul pozitiv și de aceea se mai numesc și lentile pozitive. Ele măresc scrisul. Sunt mai groase la mijloc și mai subțiri la capete.<br><br>' + 
                        '- <b>Lentile divergente</b> (concave) sunt lentilele care transformă un fascicul de lumină paralel într-un fascicul divergent. Ele refractă lumina prin focarul negativ și de aceea se mai numesc și lentile negative. Ele micșorează scrisul. Sunt mai groase la capete și mai subțiri la mijloc.<br><br>' + 
                        '<li>' + 
                            'Formarea imaginii unui obiect în lentile: <br><br>' + 
                            'Pentru a forma imaginea unui obiect într-o lentilă convergentă trebuie să trasăm două raze:<br><br>' + 
                            '- Desenăm simbolul lentilei convergente.<br>' + 
                            '- Trasăm prin mijlocul ei axa optică principală.<br>' + 
                            '- Punem elementele lentilei (O, F<sub>1</sub>, F<sub>2</sub>, C).<br>' + 
                            '- Desenăm obiectul (AB) în fața lentilei (în partea stângă), printr-un segment cu săgeată.<br>' + 
                            '- Trasăm o rază care pleacă din vârful obiectului (B) paralelă cu axa optică până întâlnește lentila și apoi o ducem prin focarul pozitiv (F<sub>2</sub>), deoarece lentila convergentă refractă lumina prin focarul pozitiv.<br>' + 
                            '- Trasăm a doua rază din vârful obiectului care să treacă prin centrul optic al lentilei (O). Prelungim aceste raze până se intersectează. La intersecția lor punem B\' care este vârful imaginii (im) obiectului (ob) AB.<br>' + 
                            '- Din B\' trasăm o perpendiculară pe axa optică, piciorul acesteia îl notăm cu A\' și reprezintă baza im A\'B\'.<br>' + 
                            '- Punem vârful săgeții în B\' și așa obținem imaginea obiectului AB în lentila convergentă.'+
                            '</li><br></br>'+
                        '<li>' + 
                            'În funcție de distanța obiectului față de lentilă, avem trei tipuri de imagini în lentila convergentă.<br><br>' + 
                            'I. Când obiectul este situat în intervalul (-∞) și C, imaginea obiectului are următoarele caracteristici :<br>' + 
                            '- Mai mică decât obiectul AB.<br>' + 
                            '- Răsturnată<br>' + 
                            '- Reală (se formează la intersecția razelor refractate, poate fi proiectată pe un ecran).<br><br>' + 
                            'II. Când obiectul este situat în intervalul C și F1, imaginea obiectului are următoarele caracteristici:<br>' + 
                            '- Mai mare decât obiectul AB.<br>' + 
                            '- Răsturnată<br>' + 
                            '- Reală (se formează la intersecția razelor refractate, poate fi proiectată pe un ecran).<br><br>' + 
                            'III. Când obiectul este situat în intervalul F1 și O, imaginea obiectului are următoarele caracteristici:<br>' + 
                            '- Mai mare decât obiectul.<br>' + 
                            '- Dreaptă<br>' + 
                            '- Virtuală (se formează la intersecția prelungirilor razelor refractate, nu poate fi proiectată pe un ecran).' + 
                        '</li><br>' + 
                        '<li>' + 
                            'Pentru a forma imaginea unui obiect într-o lentilă divergentă trebuie să trasăm două raze:<br><br>' + 
                            '- Desenăm simbolul lentilei divergente.' + 
                            '- Trasăm prin mijlocul ei axa optică principală.' + 
                            '- Punem elementele lentilei (O, F<sub>1</sub>, F<sub>2</sub>, C).<br>' + 
                            '- Desenăm obiectul (AB) în fața lentilei (în partea stângă) printr-un segment cu săgeată.<br>' + 
                            '- Trasăm o rază care pleacă din vârful obiectului (B) paralelă cu axa optică până întâlnește lentila și apoi o ducem prin focarul negativ (F<sub>1</sub>), deoarece lentila divergentă refractă lumina prin focarul negativ.<br>' + 
                            '- Trasăm a doua rază din vârful obiectului care să treacă prin centrul optic al lentilei (O). Prelungim aceste raze până se intersectează. La intersecția lor punem B\' care este vârful imaginii (im) obiectului (ob) AB.<br>' + 
                            '- Din B\' trasăm o perpendiculară pe axa optică, piciorul acesteia îl notăm cu A\' și reprezintă baza im A\'B\'.<br>' + 
                            '- Punem vârful săgeții în B\' și așa obținem imaginea obiectului AB în lentila convergentă.<br>' + 
                        '</li><br>' + 
                        '<li>' + 
                            'În lentila divergentă obținem o imagine care are aceleași caracteristici indiferent de distanța obiectului față de lentilă:<br><br>' + 
                            '- Mai mică decât obiectul.<br>' + 
                            '- Dreaptă<br>' + 
                            '- Virtuală (se formează la intersecția prelungirilor razelor refractate, nu poate fi proiectată pe un ecran).' + 
                        '</li>'+
                    '</ul>'+
                    '<h2 class="p-3">Formulele lentilelor subțiri:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Convenții de semne:<br><br>' +
                            'x<sub>1</sub> = distanța de la obiectul AB la lentilă care se ia tot timpul negativă deoarece este pe axa numerelor negative.<br><br>' +
                            'x<sub>2</sub> = distanța de la imaginea A\'B\' la lentilă care se ia pozitivă când imaginea este reală (se formează în spatele lentilei, pe axa numerelor pozitive) și negativ când imaginea este virtuală (se formează în fața lentilei, pe axa numerelor negative).<br><br>' +
                            'y<sub>1</sub> = înălțimea obiectului AB care se ia pozitivă dacă obiectul este deasupra axei optice principale și negativă dacă obiectul este sub axa optică principală.<br><br>' +
                            'y<sub>2</sub> = înălțimea imaginii A\'B\' se ia pozitivă când imaginea este dreaptă (deasupra axei optice principale) sau negativă când imaginea este răsturnată (sub axa optică principală).<br><br>' +
                            'Distanța focală se consideră pozitivă (f > 0) pentru lentilele convergente și negativă (f < 0) pentru lentilele divergente.' +
                        '</li><br>' +
                        '<li>' +
                            'Formula fundamentală a lentilelor subțiri:<br><br>' +
                            '(1 / x<sub>2</sub>) -(1 / x<sub>1</sub>) = 1 / f' +
                        '</li><br>' +
                        '<li>' +
                            'Mărirea liniară transversală (β) este o mărime fizică adimensională egală cu raportul dintre înălțimea imaginii și înălțimea obiectului.<br><br>' +
                            'β = y<sub>2</sub> / y<sub>1</sub> = x<sub>2</sub> / x<sub>1</sub>' +
                        '</li><br>' +
                        '<li>' +
                            'Convergența unei lentile (C) este o mărime fizică egală cu inversul distanței focale (f).<br><br>' +
                            'C = 1 / f<br><br>' +
                            '[C]<sub>SI</sub> = m<sup>-1</sup> = δ(dioptrie)<br>' +
                            'Lentilă convergentă are C > 0 <br><br>' +
                            'Lentilă divergentă are C < 0' +
                        '</li><br>' +
                    '</ul>'+
                    '<h2 class="p-3">Asociații de lentile:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Un sistem format din două sau mai multe lentile care au aceeași axă optică principală se numește <b>asociație de lentile</b>.<br><br>' +
                            'Imaginea formată de prima lentilă devine obiect pentru lentila următoare și așa mai departe până la ultima lentilă care va da imaginea finală.' +
                        '</li>' +
                        '<li>' +
                            'Cel mai utilizat sistem este cel cu lentile alipite (acolate) în care distanța (d) dintre lentile este zero, având același centru optic și focarul imagine (F<sub>2</sub>) al primei lentile (L) coincide cu focarul obiect (F\'2).<br><br>' +
                            'Pentru un astfel de sistem format din k lentile avem:<br><br>' +
                            '1. Inversul distanței focale a sistemului de lentile (F) este egal cu suma inverselor distanțelor focale a lentilelor asociației:<br><br>' +
                            '1 / F = (1 / f<sub>1</sub>) + (1 / f<sub>2</sub>) + ... + (1 / f<sub>k</sub>)<br><br>' +
                            '2. Convergența sistemului (C) este egală cu suma convergențelor lentilelor componente:<br><br>' +
                            'C = C<sub>1</sub> + C<sub>2</sub> +...+ C<sub>k</sub><br><br>' +
                            '3. Mărirea liniară transversală a sistemului (β) este egală cu produsul măririlor transversale a lentilelor componente:<br><br>' +
                            'β = β<sub>1</sub> ∙ β<sub>2</sub> ∙… β<sub>k</sub><br><br>' +
                            'Dacă notăm cu x\'2 distanța de la imaginea finală la lentila a doua L2 și cu x1 distanța de la obiect la prima lentilă L1, avem relația :<br><br>' +
                            '(1 / x\'<sub>2</sub>) - (1 / x<sub>1</sub>) = (1 / f<sub>1</sub>) + (1 / f<sub>2</sub>) = 1 / f = C<sub>1</sub> + C<sub>2</sub> = C' +
                        '</li>' +
                        '<li>' +
                            'Un alt sistem de lentile este sistemul telescopic care este un sistem afocal, în care fasciculul de ieșire (emergent), provenit dintr-un fascicul paralel, este tot paralel. Focarul imagine al primei lentile (F2) coincide cu focarul obiect al celei de-a doua lentilă (F\'<sub>1</sub>).<br><br>' +
                            '1. Distanța dintre lentile este:<br><br>' +
                            'd = f<sub>1</sub> + f<sub>2</sub><br><br>' +
                            '2. Mărirea liniară transversală este:<br><br>' +
                            'β = y<sub>2</sub> / y<sub>1</sub> = - f<sub>2</sub> / f<sub>1</sub><br><br>' +
                            'Pentru a afla poziția (x\'1) a imaginii intermediare față de prima lentilă (L<sub>1</sub>) și dimensiunea imaginii formată de prima lentilă, aplicăm formula punctelor conjugate pentru L<sub>1</sub>:<br><br>' +
                            'x\'<sub>1</sub> = x<sub>2</sub>f<sub>1</sub> / (x<sub>1</sub> + f<sub>1</sub>)<br><br>' +
                            'y\'<sub>1</sub> = y<sub>1</sub>(x\'<sub>1</sub> / x<sub>1</sub>) = y<sub>1</sub> (f<sub>1</sub> / (x<sub>1</sub> + f<sub>1</sub>))<br><br>' +
                            'Știind distanța dintre lentile putem calcula poziția imaginii intermediare (formată de L<sub>1</sub>) față de lentila L<sub>2</sub>:<br><br>' +
                            'd = x\'<sub>1</sub> + (- x<sub>2</sub>)<br><br>' +
                            'x<sub>2</sub> = x\'<sub>1</sub> - d<br><br>' +
                            'Pentru a afla poziția (x\'2) a imaginii finale față de a doua lentilă (L<sub>2</sub>) și dimensiunea imaginii formată de a doua lentilă, aplicăm formula punctelor conjugate pentru L<sub>2</sub>:<br><br>' +
                            'x\'<sub>2</sub> = x<sub>2</sub>f<sub>2</sub> / (x<sub>2</sub> + f<sub>1</sub>)<br><br>' +
                            'y\'<sub>2</sub> = y<sub>1</sub>(x\'<sub>2</sub> / x<sub>2</sub>) = y<sub>1</sub> (f<sub>2</sub> / (x<sub>2</sub> + f<sub>2</sub>))<br><br>' +
                        '</li>' +
                    '</ul>'+

                    //Optica ondulatorie
                    '<a name="element_target"></a>' +
                    '<br><br><br><br><u><h2 class="p-3" align = center>Optica Ondulatorie</h2><br><br><br></u>' +
                    '<h2 class="p-3">Dispersia luminii:</h2>' +
                    '<ul>' +
                        '<li>' +
                            '<b>OPTICA</b> este o ramură a fizicii care studiază natura, proprietățile și fenomenele suferite de lumină.<br><br>' +
                            'Optica este alcătuită din trei părți:<br><br>' +
                            '1. Optica geometrică care operează cu raze de lumină (direcțiile de propagare ale luminii), neluând în considerare natura luminii. Ca fenomene studiate avem reflexia, refracția și reflexia totală a luminii.<br><br>' +
                            '2. Optica ondulatorie studiază fenomenele de interferență, difracție și polarizare, în care se relevă caracterul de undă al luminii, mai precis ca undă (radiație) electromagnetică.<br><br>' +
                            '3. Optica fotonică (corpusculară) studiază efectul fotoelectric, efectul Compton, emisia și absorbția luminii etc. care scot în evidență natura corpusculară a luminii (fotoni).<br><br>' +
                            'Dispersia luminii albe a fost studiată prima dată de către Newton în 1672, când a obținut spectrul luminii albe pe o prismă optică.<br><br>' +
                            'Fenomenul de variație a indicelui de refracție cu lungimea de undă se numește dispersia luminii.<br><br>' +
                            'Astfel, când lumina trece printr-o prismă, ea se descompune în fascicule colorate în culorile curcubeului.<br><br>' +
                            'Prin vid toate undele electromagnetice se propagă cu aceeași viteză, indiferent de lungimea lor de undă și prin urmare spunem că vidul este un mediu nedispersiv. Dacă prisma ar fi vidată, un fascicul de lumină albă nu s-ar descompune, ci numai ar fi deviat de la direcția incidentă prin fenomenul de refracție (adică schimbarea direcției de propagare la trecerea dintr-un mediu în altul).<br><br>' +
                            'Indicele de refracție (notat cu n) al unui mediu transparent este dat de raportul dintre viteza luminii în vid (c) și viteza luminii în mediul repectiv (v).<br><br>' +
                            'n = c / v<br><br>' +
                            'c = viteza luminii în vid = 300.000.000 m/s<br><br>' +
                            'v = viteza luminii în mediul respectiv<br><br>' +
                            'Toate mediile transparente (apa, sticla, diamantul etc.) caracterizate de un anumit indice de refracție mai mare decât unu, produc dispersia luminii.<br><br>' +
                            'Dar indicele de refracție este constant numai pentru lumina monocromatică.<br><br>' +
                            'Pentru lumina albă, alcătuită din șapte radiații de culori diferite și lungimi de undă diferite, indicele de refracție nu mai este constant, ci variază cu lungimea de undă a acestor lumini.<br><br>' +
                            'Dacă indicele de refracție al unei prisme variază, prisma va refracta sub diferite unghiuri aceste lumini.<br><br>' +
                            'În general, la difuzia normală, în aceste medii transparente indicele de refracție crește cu scăderea lungimii de undă, astfel razele violete (au o lungime de undă mai mică, 400 nm) vor fi refractate mai puternic decât cele roșii (cu lungimea de undă mai mare, 700 nm, decât cele violet).<br><br>' +
                            'Dacă λ<sub>violetă</sub> < λ<sub>roșie</sub> → n<sub>violetă</sub> > n<sub>roșie</sub> → v<sub>violetă</sub> < v<sub>roșie</sub>.<br><br>' +
                            'Fasciculele colorate trec prin prismă cu viteze diferite și de aceea ies din prismă sub unghiuri diferite.<br><br>' +
                            'Razele violet ies mai puțin înclinate față de axa optică, deoarece se propagă cu o viteză mai mică prin materialul prismei decât raza roșie, străbătând în același timp o distanță mai mică decât cea roșie.<br><br>' +
                        '</li><br>' +
                    '</ul>' +
                    '<h2 class="p-3">Interferența luminii:</h2>'+
                    '<ul>' +
                    '<li>' +
                        'Interferența luminii nelocalizată în dispozitivul Young.<br><br>' +
                        'INTERFERENȚA este fenomenul de suprapunere a două unde coerente (cu aceeași frecvență și aceeași diferență de fază) care se întâlnesc într-un punct din spațiu.<br><br>' +
                        'În anumite puncte din spațiu se vor forma franje de interferență, adică o succesiune de regiuni luminoase și întunecate.<br><br>' +
                        'Undele coerente se obțin prin separarea dintr-un flux luminos emis de o sursă monocromatică , două fascicule de lumină care ulterior se întâlnesc.<br><br>' +
                        'Există două modalități de obținere a undelor coerente :<br><br>' +
                        '- Divizarea frontului de undă în dispozitivul Young, biprisma Fresnel etc.<br><br>' +
                        '- Divizarea amplitudinii undei în lama cu fețe plan paralele, pana optică, inelele lui Newton.' +
                    '</li><br>' +
                    '<li>' +
                        'Dispozitivul Young folosește o sursă de lumină monocromatică S (laser), un paravan cu două fante dreptunghiulare (cu lățimea mai mică de 1 mm) și paralele cu o distanță între ele de maxim 1 mm, un ecran (coală albă). Pentru observarea figurii de interferență nu există o poziție preferențială a ecranului, putând fi plasat la o distanță D între 1 m și 5 m față de fante și din acest motiv se numește interferență nelocalizată.<br><br>' +
                        'Atât interferența, cât și difracția se bazează pe principiul lui Hyugens-Fresnel care spune că fiecare punct de pe un front de undă se comportă ca o sursă secundară de undă cu aceeași frecvență și fază cu unda inițială. Noul front de undă este creat prin însumarea amplitudinilor undelor secundare.' +
                    '</li><br>' +
                    '<li>' +
                        'În cazul interferenței constructive, cele două unde sunt în fază (defazaj zero) și suma lor este mai mare, formând regiuni luminoase.<br><br>' +
                        'Când cele două unde vibrează în antifază (defazaj 180°) se vor anihila (suma lor este zero), formând zone întunecate, caz în care vorbim de interferență distructivă.' +
                    '</li><br>' +
                    '<li>' +
                        'Unda electromagnetică (lumina) are două componente electrică și magnetică. Numai componenta electrică (E) influențează senzația vizuală.<br><br>' +
                        'Undele de aceeași amplitudine emise de cele două surse au ecuațiile :<br><br>' +
                        'E<sub>1</sub> = E<sub>0</sub>sin2π((t / T) - (r<sub>1</sub> / λ))<br><br>' +
                        'E<sub>2</sub> = E<sub>0</sub>sin2π((t / T) - (r<sub>2</sub> / λ))<br><br>' +
                        'Unda electromagnetică se propagă cu viteza c în intervalul de timp Δt prin suprafața de arie S așezată perpendicular pe direcția de propagare.<br><br>' +
                        'Energia transportată de undă este:<br><br>' +
                        'ΔW = w ΔV<br><br>' +
                        'ΔW = (ε<sub>0</sub> / μ<sub>0</sub>)<sup>1/2</sup>E<sup>2</sup>SΔt<br><br>' +
                        'I = 1/2 · (ε<sub>0</sub> / μ<sub>0</sub>)<sup>1/2</sup> ·E<sup>2</sup><sub>0</sub><br><br>' +
                        'E\'<sub>0</sub> = 2 E<sub>0</sub> cos (π(r<sub>2</sub> - r<sub>1</sub>) / λ)' +
                    '</li><br>'+
                    '<li>' +
                        'Condițiile de interferență sunt:<br><br>' +
                        '- Undele să aibă aceeași frecvență<br><br>' +
                        '- Diferența de fază : ΔΦ = 2π(Δr / λ) = constantă<br><br>' +
                        'Intensitatea luminoasă, I, într-un punct de interferență este proporțională cu pătratul amplitudinii undei rezultante:<br><br>' +
                        'I = const 4E<sup>2</sup><sub>0</sub> cos<sup>2</sup>(πΔr / λ)<br><br>' +
                        'În interferența constructivă (cu formarea de franje luminoase) avem condiția de maxim de iluminare:<br><br>' +
                        'cos<sup>2</sup>(πΔr / λ)<br><br> = 1 → Δr = kλ = 2k(λ/2),<br><br>' +
                        'unde k = nr.întreg<br><br>' +
                        'Punctele din zona de interferență pentru care diferența de drum, Δr, este un multiplu par de semiundă se află pe o franjă luminoasă.<br><br>' +
                        'În interferența distructivă (cu formarea de franje întunecoase) avem condiția de minim de iluminare:<br><br>' +
                        'cos<sup>2</sup>(πΔr / λ) = 0 → Δr = kλ = 2(k+1)(λ/2)<br><br>' +
                        'Punctele din zona de interferență pentru care diferența de drum, Δr, este un multiplu impar de semiundă se află pe o franjă întunecoasă.' +
                    '</li><br>' +
                    '<li>' +
                        'Determinarea pozițiilor franjelor în dispozitivul Young<br><br>' +
                        'în ΔAEP aplicăm Teorema lui Pitagora: r<sup>1</sup> = D<sup>2</sup> + (x-l)<sup>2</sup><br><br>' +
                        'în ΔBE\'P aplicăm Teorema lui Pitagora: r<sup>2</sup> = D<sup>2</sup> + (x-l)<sup>2</sup><br><br>' +
                        'Δr = r<sub>2</sub> = r<sub>1</sub> = 4xl / (r<sub>1</sub> + r<sub>2</sub>)' +
                    '</li><br>' +
                    '<li>' +
                        'Determinarea lungimii de undă prin măsurarea interfranjei<br><br>' +
                        'i = x<sub>k+1</sub> - x<sub>k</sub> = (k+1)λD / 2l - kλD / 2l = λD / 2l<br><br>' +
                        'i = λD / 2l' +
                    '</li>'+
                    '</ul>'+
                    '<h2 class="p-3">'+'Interferența localizată pe lama cu fețe plan paralele:'+'</h2>'+
                    '<ul>' +
                        '<li>' +
                            'Interferența localizată pe lama cu fețe plan paralele are loc atunci când un fascicul de lumină este divizat în două fascicule coerente pe suprafețe reflectătoare, prin reflexia luminii pe fața superioară și prin transmiterea luminii pe fața inferioară a lamei subțiri.<br><br>' +
                            'Lumina ajunsă pe fața superioară a lamei (peliculei) se și reflectă (IR), se și refractă (IŔ ). Raza refractată prin lamă se reflectă pe fața inferioară a lamei (MN). Cele două raze, IR și MN, vor interfera la suprafața lamei.<br><br>' +
                            'Franjele de interferență sunt localizate în planul focal al lentilei sau, în absența acesteia, la infinit. Așa explicăm irizațiile baloanelor de săpun și ale peliculelor de ulei sau petrol de pe stradă.' +
                        '</li>' +
                    '</ul>' +
                    '<h2 class="p-3">' +
                        'Inelele lui Newton la interferența pe o pană de aer:' +
                    '</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Inelele lui Newton se obțin prin iluminarea perpendiculară cu lumină monocromatică a unei lentile plan-convexă cu distanță focală mare și așezată cu fața curbă pe o placă de sticlă plană. Între lentilă și placă se formează o pană de aer subțire având ca rezultat formarea unor franje luminoase și întunecate circulare, concentrice cu punctul de contact între lentilă și placă.' +
                        '</li>' +
                    '</ul>'+

                    //Elemente de fizica cuantica
                    '<a name="element_target2"></a>' +
                    '<br><br><br><br><u><h2 class="p-3" align = center>Elemente de fizică cuantică</h2><br><br><br></u>' +
                    '<h2 class="p-3">' +
                        'Ipoteza lui Planck asupra cuantelor de lumină:' +
                    '</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Planck a afirmat că radiația emisă de corpul negru există sub forma unor pachețele discrete de energie pe care le-a numit cuante (numite ulterior fotoni), dependente de frecvența radiației respective.<br><br>' +
                            'Valorile discrete ale energiei unui oscilator armonic sunt echidistante, astfel încât diferența dintre nivelurile de energie ( ΔE) este proporțională cu frecvența (ν) a oscilatorului și constanta lui Planck (h).<br><br>' +
                            'ΔE = h ∙ ν<br><br>' +
                            'h = constanta lui Planck = 6,62 ∙ 10<sup>-34</sup> J ∙ s<br><br>' +
                            'ν = frecvența oscilatorului<br><br>' +
                            'Constanta lui Planck este una dintre cele mai mici constante folosite în fizică la scară macroscopică, reflectând scara microscopică la care se observă efectele cuantice.' +
                        '</li><br>' +
                    '</ul>' +
                    '<h2 class="p-3">' +
                        'Efectul fotoelectric:' +
                    '</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Efectul fotoelectric a fost descoperit experimental în anul 1887 de către Heinrich Hertz (1857-1894) și în anul 1888 de către W. Hallwachs (1859-1922) și constă în emiterea de electroni de către un metal sub acțiunea unei radiații electromagnetice.<br><br>' +
                            'În 1905, Albert Einstein (1879-1955) a remarcat că explicația efectului fotoelectric ar putea fi rezolvată, generalizând ipoteza cuantică propusă de Planck privind radiația corpului negru la radiația electromagnetică.<br><br>' +
                            'Astfel, electronii din catod primesc de la lumină numai un singur pachet (foton) de energie luminoasă (E = h ∙ ν) pentru a fi accelerați și să părăsească metalul.<br><br>' +
                            'Astfel energia cinetică maximă a electronilor emiși nu va depăși această valoare de energie primită, indiferent de intensitatea radiației incidente.<br><br>' +
                            'În plus explică de ce viteza maximă a electronilor depinde de frecvența radiației.' +
                        '</li><br>' +
                        '<li>' +
                            'Prima lege a efectului fotoelectric extern:<br><br>' +
                            'Efectul fotoelectric extern se produce numai când frecvența radiației incidente este mai mare decât frecvența de prag caracteristică metalului din care este confecționat catodul.<br><br>' +
                            'Pentru a părăsi metalul electronii liberi trebuie să primească o energie egală cu lucrul mecanic de extracție (L) pentru frecvența de prag (ν<sub>0</sub>):<br><br>' +
                            'L = h ∙ ν<sub>0</sub> h = constanta lui Planck = 6,62 ∙ 10<sup>-34</sup> m<sup>2</sup> ∙ kg/s<br><br>' +
                            'Fotonul de energie h ∙ ν cedează energia sa unui electron de conducție.<br><br>' +
                            'Electronul poate părăsi metalul numai dacă h ∙ ν ≥ L.' +
                        '</li><br>' +
                    '</ul>'+
                    '<h2 class="p-3">A doua lege a efectului fotoelectric extern:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Efectul fotoelectric se produce practic instantaneu.<br><br>' +
                            'Emisia unui electron este rezultatul ciocnirii dintre un foton și un electron într-un timp mai mic de 10<sup>-9</sup> s.' +
                        '</li><br>' +
                    '</ul>' +
                    '<h2 class="p-3">A treia lege a efectului fotoelectric extern:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Energia cinetică a electronilor emiși crește liniar cu frecvența radiației incidente.<br><br>' +
                            'Dacă energia fotonului h ∙ ν > L, atunci electronul are o energie cinetică suficientă pentru a părăsi metalul:<br><br>' +
                            'Ec = h ∙ ν – L = h ∙ ν – h ∙ ν<sub>0</sub> = h ∙ (ν – ν<sub>0</sub>)' +
                        '</li><br>' +
                    '</ul>' +
                    '<h2 class="p-3">A patra lege a efectului fotoelectric extern:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Numărul de fotoelectroni emiși de catod în unitatea de timp este proporțional cu numărul de fotoni incidenți în acest interval de timp, care este proporțional cu fluxul de energie luminoasă.' +
                        '</li>' +
                    '</ul>'),

        //cuprins
        "cuprinsPrincipii": "Principii și legi",
        "cuprinsTeoreme": "Teoreme de variație și legi de conservare",
        "cuprinsNotiuni": "Noțiuni de bază",
        "cuprinsPrincipiuI": "Principiul I",
        "cuprinsMotoare": "Motoare termice",
        "cuprinsPrincipiuII": "Principiul al II-lea",
        "cuprinsCurentul": "Curentul electric",
        "cuprinsOhm": "Legea lui Ohm",
        "cuprinsKirchhoff": "Legea lui Kirchhoff",
        "cuprinsGrupare": "Gruparea rezistoarelor și generatoarelor",
        "cuprinsEnergie": "Energia și puterea electrică",
        "cuprinsGeometrica": "Optică geometrică",
        "cuprinsOndulatorie": "Optică ondulatorie",
        "cuprinsCuantica": "Fizică cuantică",

        "teorieInapoiBtn": "Înapoi la meniul de selecție",
        "invataTitle": "În această parte a capitolului vei învăța noțiuni precum:",
        "inchideBtn": "Închide",
        "teorieBtn": "Teorie",
        "testBtn": "Începe un test",
        "acasaBtn": "Acasă",
    },
    "maghiara":
    {
        //index.html
        "titleSet": "Beállítások",
        "titleLogin": "Bejelentkezés",
        "titleDisconnect": "Kijelentkezés",
        "titleStatistica": "A teszteredményeid",
        "corecte": "Becsületes",
        "gresite": "Rossz",
        "titleLang": "Nyelvek",
        "titleMec": "Mechanika",
        "titleTer": "Termodinamika",
        "titleElec": "Elektromechanikai",
        "titleOp": "Optikai",

        //register.html
        "goBackReg": "vissza",
        "titleReg": "Adja meg regisztrációs hitelesítő adatait",
        "usernameReg": "Írd be a felhasználóneved",
        "emailReg": "Írd be az email címed",
        "passwordReg": "Írja be a jelszót",
        "register": "Regisztrálj",
        "footerReg": "Már van fiókja?",
        "footerRegBtn": "Bejelentkezés",

        //login.html
        "goBackLog": "vissza",
        "titleLog": "Adja meg bejelentkezési adatait",
        "emailLog": "Írd be az email címed",
        "passwordLog": "Írja be a jelszót",
        "login": "Bejelentkezés",
        "footerLog": "Nem regisztrált?",
        "footerLogBtn": "Hozzon létre egy fiókot",

        //test.html
        "startTestBtn": "Rajt",
        "iesiBtn": "menj ki",
        "reguliTitle": "A teszt néhány szabálya",
        "reguli": ('<div class="info">1. Minden kérdésre csak <span>15 másodperced</span> lesz.</div>'+
                    '<div class="info">2. Miután kiválasztotta a választ, nem módosíthatja azt.</div>'+
                    '<div class="info">3. Az idő lejárta után már nem választhat válaszokat.</div>'+
                    '<div class="info">4. A teszt alatt nem léphet ki.</div>'+
                    '<div class="info">5. A válaszai alapján pontokat kap.</div>'),
        "iesiTestBtn": "Lépjen ki a tesztből",
        "continuaTestBtn": "Folytasd",
        "testTitle": "Teszt",
        "timpRamas": "Hátralévő idő:",
        "gataTimpul": "Készenléti idő",
        "urmatorulTestBtn": "Köv.",
        "finalTestTitle": "Elvégezte a tesztet!",
        "nouTestBtn": "Csináld újra a tesztet",
        "veziDeCeBtn": "Nézze meg, miért",

        //mecanica.html
        "mecanicaTitle": "Mechanika",
        "principiiTitle": "Elvek és törvények",
        "teoremeTitle": "Variációs tételek és megmaradási törvények",
        "principiiTitleModal": "A klasszikus mechanika alapelvei és törvényei",
        "teoremeTitleModal": "Variációs tételek és megmaradási törvények",
        "principiiRez": ('<li>'+'Mozgás és pihenés'+'</li>'+
                         '<li>'+'A mechanika első elve'+'</li>'+
                         '<li>'+'A mechanika második elve'+'</li>'+
                         '<li>'+'A mechanika harmadik alapelve'+'</li>'+
                         '<li>'+'Hooke törvénye és a vezeték feszültsége'+'</li>'+
                         '<li>'+'A csúszósúrlódás törvényei'+'</li>'),
        "teoremeRez": ('<li>'+'Mechanikai munka és mechanikai teljesítmény'+'</li>'+
                        '<li>'+'A mozgási energia változásának tétele'+'</li>'+
                        '<li>'+'Gravitációs potenciális energia'+'</li>'+
                        '<li>'+'A mechanikai energia megmaradásának törvénye'+'</li>'+
                        '<li>'+'Az impulzusváltozás tétele'+'</li>'+
                        '<li>'+'A lendület megmaradásának törvénye'+'</li>'),

        //termodinamica.html
        "termodinamicaTitle": "Termodinamika",
        "notiuniTitle": "Elkezdeni",
        "principiuITitle": "I. alapelv",
        "motoareTitle": "Hőmotorok",
        "principiuIITitle": "A második elv",
        "notiuniTitleModal": "Termodinamikai alapfogalmak",
        "principiuITitleModal": "A termodinamika első elve",
        "motoareTitleModal": "Hőmotorok",
        "principiuIITitleModal": "A termodinamika második elve",
        "notiuniRez": ('<li>'+'Molekulatömeg'+'</li>'+
                        '<li>'+'Relatív molekulatömeg'+'</li>'+
                        '<li>'+'Anyagmennyiség'+'</li>'+
                        '<li>'+'Moláris tömeg'+'</li>'+
                        '<li>'+'Moláris térfogat'+'</li>'+
                        '<li>'+'Avogadro száma'+'</li>'+
                        '<li>'+'Termikus egyensúly'+'</li>'+
                        '<li>'+'A hőmérséklet Celsius-skálán mért számértéke és x számértéke közötti megfelelés'+'</li>'),
        "principiuIRez": ('<li>'+'Termodinamikai mechanikai munka, folyamatmennyiség'+'</li>'+
                        '<li>'+'Mechanikai munka geometriai értelmezése a termodinamikában'+'</li>'+
                        '<li>'+'Termodinamikai rendszer belső energiája, állapotmennyiség'+'</li>'+
                        '<li>'+'Hő, folyamat mérete'+'</li>'+
                        '<li>'+'Adiabatikus héj'+'</li>'+
                        '<li>'+'A termodinamika első elve'+'</li>'+
                        '<li>'+'Kalóriaegyütthatók (definíciós összefüggés, mértékegységek SI-ben)'+'</li>'+
                        '<li>'+'A Robert-Mayer kapcsolat'+'</li>'+
                        '<li>'+'A termodinamika első elvének alkalmazása ideális gázátalakításokra:'+'<br>'+
                            '<ul>'+
                                '<li>'+'Ideális gáz belső energiája (egyatomos, kétatomos, többatomos)'+'</li>'+	
                                '<li>'+'A belső energia, a mechanikai munka és a hőmennyiség változása egyszerű ideális gázátalakításokhoz (izobár, izochor, izoterm, adiabatikus)'+'</li>'+
                            '</ul>'+
                        '</li>'),
        "motoareRez": ('<li>'+'A hőgép működésének magyarázata'+'</li>'+
                    '<li>'+'A főbb termodinamikai ciklusok – Otto, Diesel – leírása, amelyek alapján a hőmotorok működnek'+'</li>'+
                    '<li>'+'A hőmotor hatásfoka'+'</li>'),
        "principiuIIRez": ('<li>'+'A Carnot-ciklus, a Carnot-ciklus hatékonysága'+'</li>'),

        //electromecanica.html
        "electromecanicaTitle": "Elektromechanikai",
        "curentulTitle": "Elektromosság",
        "ohmTitle": "Ohm törvénye",
        "kirchhoffTitle": "Kirchhoff törvénye",
        "grupareTitle": "Az ellenállások és generátorok csoportosítása",
        "energieTitle": "Energia és elektromos energia",
        "curentulTitleModal": "Elektromosság",
        "ohmTitleModal": "Ohm törvénye",
        "kirchhoffTitleModal": "Kirchhoff törvénye",
        "grupareTitleModal": "Az ellenállások és generátorok csoportosítása",
        "energieTitleModal": "Energia és elektromos energia",
        "curentulRez": ('<li>'+'Elektromosság'+'</li>'+
                        '<li>'+'Az elektromos áram intenzitása'+'</li>'+
                        '<li>'+'Az elektromos áram intenzitásának mértékegysége'+'</li>'+
                        '<li>'+'Egyszerű elektromos áramkör'+'</li>'+
                        '<li>'+'Az elektromos generátor elektromotoros feszültsége, a feszültség a generátor kapcsain, a feszültségesés a generátor belsejében'+'</li>'),
        "ohmRez": ('<li>'+'Elektromos ellenállás'+'</li>'+
                    '<li>'+'Ohm törvénye az áramkör egy részére és az egész áramkörre'+'</li>'+
                    '<li>'+'Az elektromos ellenállás mértékegysége'+'</li>'+
                    '<li>'+'Elektromos ellenállás, az elektromos ellenállás függése a hőmérséklettől'+'</li>'),
        "kirchhoffRez": ('<li>'+'Az elektromos hálózat'+'</li>'+
                        '<li>'+'A hálózati csomópont'+'</li>'+
                        '<li>'+'A hálózati szem'+'</li>'+
                        '<li>'+'Kirchhoff törvényei'+'</li>'),
        "grupareRez": ('<li>'+'Több ellenállás soros, párhuzamos vagy vegyes csoportosításának egyenértékű elektromos ellenállása'+'</li>'+
                        '<li>'+'Több villamos generátor soros/párhuzamos csoportosításának megfelelő egyenértékű elektromos ellenállás és egyenértékű elektromotoros feszültség'+'</li>'),
        "energieRez": ('<li>'+'A generátor által a fogyasztónak adott időintervallumban továbbított energia kifejezése'+'</li>'+
                        '<li>'+'A generátoron belül disszipált energia kifejezése'+'</li>'+
                        '<li>'+'Egy egyszerű elektromos áramkör hatásfoka'+'</li>'+
                        '<li>'+'Villamos teljesítmény, a villamos energiát jellemző összefüggések'+'</li>'),

        //optica.html
        "opticaTitle": "Optikai",
        "geometricaTitle": "Geometrikus optika",
        "ondulatorieTitle": "Hullám optika",
        "cuanticaTitle": "A kvantumfizika elemei",
        "geometricaTitleModal": "Geometrikus optika",
        "ondulatorieTitleModal": "Hullám optika",
        "cuanticaTitleModal": "A kvantumfizika elemei",
        "geometricaRez": ('<li>'+'Fényvisszaverődés'+'</li>'+
                            '<li>'+'Fénytörés'+'</li>'+
                            '<li>'+'A tükrözés törvényei'+'</li>'+
                            '<li>'+'A fénytörés törvényei'+'</li>'+
                            '<li>'+'Törésmutató'+'</li>'+
                            '<li>'+'Konjugált pontok'+'</li>'+
                            '<li>'+'Paraxiális facsontok'+'</li>'+
                            '<li>'+'Valós/virtuális képek'+'</li>'+
                            '<li>'+'Optikai lencse'+'</li>'+
                            '<li>'+'A vékony lencse jellemző elemei (tengelyek, optikai középpont, gócok)'+'</li>'+
                            '<li>'+'Vékony lencse konvergenciája'+'</li>'+
                            '<li>'+'Vékony lencse formulák'+'</li>'+
                            '<li>'+'Valós/virtuális tárgyak képei vékony lencsékkel'+'</li>'+
                            '<li>'+'Lencserendszerek'+'</li>'),
        "ondulatorieRez": ('<li>'+'Stacionárius interferencia keletkezésének feltételei'+'</li>'+
                            '<li>'+'A hullámhossz'+'</li>'+
                            '<li>'+'Young készülékének alkatrészei'+'</li>'+
                            '<li>'+'Interferencia peremek'+'</li>'+
                            '<li>'+'Optikai út különbség'+'</li>'+
                            '<li>'+'Maximális és minimális interferencia feltételek'+'</li>'+
                            '<li>'+'Interfringe'+'</li>'),
        "cuanticaRez": ('<li>'+'A külső fotoelektromos hatás törvényei'+'</li>'+
                        '<li>'+'Planck hipotézise. Einstein hipotézise. Einstein egyenlete'+'</li>'+
                        '<li>'+'A külső fotoelektromos hatás törvényeinek értelmezése'+'</li>'),

        //teorieMecanica.html
        "teorieMecanicaTitle": "Mechanika elmélet",
        "teorieMecanica": ('<u>'+'<h2 class=\"p-3\" align = center>'+'Elvek és törvények'+'</h2>'+'<br>'+'<br>'+' <br>'+'</u>'+
                        '<h2 class=\"p-3\">'+'Sebesség'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Képlet: '+'<b>'+'v = d/Δt'+'</b>'+'</li>'+
                            '<li>'+'Mérési egység: '+'<b>'+'&lt;'+'v'+'&gt;'+' = m/s'+'</b>'+'</li >'+
                                    '<li>'+'Átlagsebesség: '+'<b>'+'v'+'<small>'+'m'+'</small>'+' = Δd/Δt'+'</b>'+'</li>'+
                                    '<li>'+'A sebességvektor jelentése ugyanaz, mint az elmozdulás: v'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>' + ' = d'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>'+' /Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Gyorsulás'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Képlet: '+'<b>'+'a = Δv/Δt'+'</b>'+'</li>'+
                            '<li>'+'Mérési egység: '+'<b>'+'&lt;'+'a'+'&gt;'+' = m/s'+'<sup>'+'2'+' </sup>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'A Galileo képlet:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v'+'<sup>'+'2'+'</sup>'+' = v'+'<sub>'+'0'+'</sub>'+'<sup>'+'2'+'</sup>'+' + 2a(x-x'+'<sub>'+'0'+'</sub>'+') '+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Sebességszabály: '+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v = v'+'<sub>'+'0'+'</sub>'+' + at'+'</b>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Mozgás törvénye:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'x = 1/2at'+'<sup>'+'2'+'</sup>'+' + v'+'<sub>'+'0 '+'</sub>'+'t + x'+'<sub>'+'0'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'A mechanika I. elve:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Minden test megtartja nyugalmi állapotát vagy egyenletes egyenes vonalú mozgását mindaddig, amíg semmilyen más erő nem hat rá, vagy a rá ható erők összege nulla.'+'</li>'+
                            '<li>'+'Röviden: A sebesség '+'<b>'+'konstans'+'</b>'+', ha '+'<b>'+'az erőkre kifejtett erők eredője. body'+' </b>'+' értéke 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'A mechanika második elve:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Egy test mozgási mennyiségének változása egyenesen arányos az alkalmazott erővel, és abban az irányban következik be, amelyben az erő hat.'+'</li>'+
                            '<li>'+'Más szavakkal mondva: a testre ható erő az erővel arányos és a test tömegével fordítottan arányos gyorsulást ad.'+'</li>'+
                            '<li>'+'Képlet: F = ma'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'A mechanika harmadik alapelve:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Amikor az egyik test egy másik testre erővel hat (amelyet cselekvési erőnek neveznek), akkor a második test is ugyanolyan nagyságú és irányú erővel (úgynevezett reakcióerővel) hat az első testre, de szemben. Ez az elv a cselekvés és reakció elveként is ismert.'+'</li>'+
                            '<li>'+'Képletként írva: '+'<b>'+'F'+'<sub>'+'a'+'</sub>'+' = F'+'<sub> '+'r'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Hooke törvénye:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Egy rugó megnyúlása egyenesen arányos a deformáló erővel (F):'+'</li>'+'<br>'+
    
                            'Δl ~ F'+'<br>'+'<br>'+
    
                            '<li>'+'Közvetlenül arányos a rugó kezdeti hosszával (l'+'<sub>'+'0'+'</sub>'+') :'+'</li>'+'<br>'+
                            
                            'Δl ~ l'+'<sub>'+'0'+'</sub>'+'<br>'+'<br>'+
    
                            '<li>'+'A rugó keresztmetszeti területével fordítottan arányos:'+'</li>'+'<br>'+
    
                            'Δl ~ 1/S'+'<br>'+'<br>'+
    
                            '<li>'+'Hooke törvénye:'+'</li>'+'<br>'+
                            'F/S = E∙Δl/l'+'<sub>'+'0'+'</sub>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Vezeték feszültsége:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'A huzalban lévő feszültség ( T ) a nyújthatatlan huzal (amely nem nyúlik meg) reakcióerejét jelenti a rá kifejtett erőre.'+'</li>'+'<br>' +
                            '<li>'+'Ha egy testet felfüggesztünk egy nyújthatatlan szálra, két páros erő jelenik meg:'+'<br>'+'<br>'+
    
                                'A test nyomóereje (F) az az erő, amellyel a test a huzalra hat (ez egyenlő a test súlyával).'+'<br>'+'<br>'+
                                
                                'A huzalban lévő feszültség (T) az az erő, amellyel a huzal a rajta felfüggesztett testre hat.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'A csúszósúrlódás törvényei:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'A súrlódás első törvénye:'+'<br>'+'<br>'+
                            
                                'A csúszó súrlódási erő értéke az érintkező felületek jellegétől és megmunkáltságának mértékétől függ. A függőséget egy dimenzió nélküli mennyiség, az úgynevezett csúszósúrlódási tényező jellemzi, amely 0 és 1 közötti értékeket vesz fel, és μ-vel jelöljük.'+'<br>'+'<br>'+
    
                                'Ff ~ μ'+'</li>'+'<br>'+
    
                            '<li>'+'A súrlódás második törvénye:'+'<br>'+'<br>'+
                                'A csúszó súrlódási erő értéke nem függ a testek közötti érintkezési felület területétől.'+'<br>'+'<br>'+'</li>'+
                                
                            '<li>'+'A súrlódás harmadik törvénye:'+'<br>'+'<br>'+
                                'A csúszó súrlódási erő értéke a test által a csúszófelületre kifejtett nyomóerőtől függ, amely nagysága megegyezik a testek érintkezési felületén fellépő normál reakcióerővel.'+'<br>'+'<br>' +
    
                            'Ff ~ N'+'</li>'+'<br>'+
                            '<li>'+'A súrlódási erő képletét a következő összefüggés adja meg:'+'<br>'+'<br>'+
                                'Ff = μ ∙ N'+'</li>'+
                        '</ul>'+
    
                        //Teoreme de variatie si legi de conservare
                        
                        '<a name=\"element_target\">'+'</a>'+
                        '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center >'+'Tételek változatossági és természetvédelmi törvényei'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                        
                        '<h2 class=\"p-3\">'+'Gépészeti munka:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'A testre a test elmozdulásának irányában és irányában ható állandó erő mechanikai munkája (L) az a skaláris fizikai mennyiség, amely egyenlő az erő modulusának (F) és a a test elmozdulási modulusa (d).' +'</li>'+'<br>'+
                            '<li>'+'Számítási képlet: L = F ∙ d'+'</li>'+'<br>'+
                            '<li>'+'Aláírási konvenciók:'+'<br>'+
                                '1. Egy erő mechanikai munkája akkor pozitív, ha az erő segíti a test mozgatását. Ez akkor fordul elő, ha az erőnek ugyanolyan iránya és értelme van, mint a test mozgásának.'+'<br>'+'<br>'+
                                '2. Egy erő mechanikai munkája negatív, ha az erő ellentétes a test mozgásával. Ez akkor fordul elő, ha az erővektor mozgási irányú komponense ellentétes a test mozgásával.'+'<br>'+'<br>'+
                                '3. Egy erő mechanikai munkája nulla, ha az erő sem nem segíti a testet mozgásban, sem nem áll ellen a mozgásnak. Ez akkor történik, ha az erővektor merőleges a test mozgási irányára.'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Mechanikai teljesítmény:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'A mechanikai teljesítmény (P) az a skaláris fizikai mennyiség, amely megegyezik az elvégzett mechanikai munka (L) és a mechanikai munka elvégzésének időtartama (Δt) arányával.'+'</li> '+'<br>'+
                            '<li>'+'P = Mechanikai munka / idő = L / Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Kinetikus energia:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'A mechanikai energia (E) az a fizikai mennyiség, amely a test mechanikai munkavégzésére való képességét jellemzi, mértékegysége a joule (J).'+'</li>'+'<br>' +
                            '<li>'+'A kinetikus energia (E'+'<sub>'+'c'+'</sub>'+') az az energia, amellyel egy mozgó test rendelkezik.'+'</li> '+ '<br>'+
                            '<li>'+'Egy bizonyos sebességgel mozgó test mozgási energiáját a következő képlettel számítjuk ki:'+'<br>'+'<br>'+
                                'E'+'<sub>'+'c'+'</sub>'+' = m ∙ v'+'<sup>'+'2'+'</sup>'+' / 2 '+ '</li>'+'<br>'+
                            '<li>'+'A mozgási energia változásának törvénye:'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'c'+'</sub>'+' = L'+'<sub>'+'Összesen'+'</sub>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Gravitációs potenciálenergia:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'A gravitációs potenciálenergia (E'+'<sub>'+'pg'+'</sub>'+') az az energia, amellyel egy test a talajtól egy bizonyos magasságban rendelkezik. '+'</li>'+'<br>'+
                            '<li>'+'Egy test gravitációs potenciálenergiája egyenlő: E'+'<sub>'+'pg'+'</sub>'+' = m ∙ g ∙ h'+'</li>'+'<br>'+
                            '<li>'+'A gravitációs potenciálenergia változásának törvénye:'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'pg'+'</sub>'+' = -L'+'<sub>'+'G'+'</sub>'+'</li>' +'<br>'+
                            '<li>'+'Azt az erőt, amely a megtett úttól független mechanikai munkát végez, és csak a szélső pozícióktól (kezdeti és végső) függ, konzervatív erőnek nevezzük.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Mechanikai energia megőrzése:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'A mechanikai energia megmaradásának törvénye:'+'<br>'+'<br>'+
    
                                '\"Egy test mechanikai energiája megmarad, ha csak konzervatív erők hatnak rá.\"'+'<br>'+'<br>'+
                            
                                'E = állandó, ha a test kívülről el van szigetelve, és F'+'<sub>'+'f'+'</sub>'+' = 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Momentum variációs tétel:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'A test lendületét a lendület megmaradásának törvénye jelöli, és a képlete:'+'<br>'+'<br>'+
                            'p'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = m ∙ v'+'<span style=\" vertical-align : 4px;\">'+'&#8407;'+'</span>'+'</li>'+'<br>'+
                            '<li>'+'A mechanikai impulzus változásának tétele'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' ∙ Δt'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'A lendület megmaradásának törvénye:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Ha a mechanikai rendszer le van választva, az eredő erő F'+'<sub>'+'R'+'</sub>'+'<span style=\"vertical-align : 4px; margó balra : -1.5px\">'+'&#8407;'+'</span> '+' nulla.'+'<br>'+'<br>'+
                            'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<sub>'+'R' +'</sub>'+'<span style=\"vertical-align : 4px; margin-left : -1.5px\">'+'&#8407;'+'</span>'+' ∙ Δt = 0 ∙ Δt = 0'+'</li>'+'<br>'+
                            '<li>'+'A mechanikai impulzus megmaradásának törvénye az SRI-ben:'+'<br>'+'<br>'+
                                'Az izolált mechanikai rendszerek mechanikai lendülete megmarad.'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = 0, azaz Δp'+'<span style=\ "vertical-align : 4px; \">'+'&#8407;'+'</span>'+' = const'+'<span style=\"vertical-align : 4px; margin-left : -25px \">'+'&#8407;'+'</span>'+'</li>'+'<br>'+
                                '<li>'+'Izolált mechanikai rendszerek esetében a teljes impulzus nem változhat belső erők hatására.'+'</li>'+
                        '</ul>'),

        //teorieTermodinamica.html
        "teorieTermodinamicaTitle": "Termodinamikai elmélet",
        "teorieTermodinamica": ('<u>'+'<h2 class=\"p-3\" align = center>'+'Termodinamikai alapfogalmak'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                '<ul>'+
                                '<li>'+'<b>'+'Thermal agitation'+'</b>'+' egy anyag részecskéinek (atomok vagy molekulák) rendezetlen és folyamatos mozgása.'+'</li> '+' <br>'+
                                '<li>'+'<b>'+'Diffúzió'+'</b>'+' az a jelenség, amikor egy anyag molekulái behatolnak egy másik anyag molekulái közé, külső erő beavatkozása nélkül ( önmagában).'+ '</li>'+'<br>'+
                                '<li>'+'<b>'+'Atom'+'</b>'+' egy anyag legkisebb részecskéje, amely szokásos kémiai folyamatokkal nem osztható tovább.'+'</li >'+ '<br>'+
                                '<li>'+'<b>'+'Molekula'+'</b>'+' az anyag legkisebb részecskéje, amely szabad állapotban is létezhet, és amely megtartja annak az anyagnak a tulajdonságait, amelyből jön a '+'</li>'+'<br>'+
                                '<li>'+'<b>'+'Molekulatömeg'+'</b>'+' egy dimenzió nélküli mennyiség (mértékegység nélkül), amely megmutatja, hogy egy molekula valós tömege hányszor nagyobb, mint atomtömeg egység (u.a.m.).'+'</li>'+'<br>'+
                                '<li>'+'<b>'+'A relatív atomtömeg (A)'+'</b>'+' az a szám, amely megmutatja, hogy egy atom tömege hányszor nagyobb az atomtömeg egységénél .'+ '</li>'+'<br>'+
                                '<li>'+'<b>'+'Egy mól atom'+'</b>'+' egy egyszerű anyag mennyiségét jelöli grammban, amely 6,022 ∙ 10'+'<sup>' +'23'+'</sup>'+' atomok. A görög "niu"= υ betűvel írják.'+'<br>'+'<br>'+
                                    'υ = m(g) / A(g/mol) = egyszerű anyag tömege (g) / atomtömeg (g/mol)'+'</li>'+'<br>'+
                                        '<li>'+'<b>'+'Avogadro száma'+'</b>'+', N'+'<sub>'+'A'+'</sub>'+' , egyenlő 6,022 ∙10'+'<sup>'+'23'+'</sup>'+' mol'+'<sup>'+'-1'+'</sup>'+' atommal és bármely egyszerű anyag egy móljában található atomok számát jelenti.'+'</li>'+'<br>'+
                                        '<li>'+'<b>'+'Móltömeg'+'</b>'+' (a görög miu = μ betűvel jelölve) egy mól anyag tömege. Mértékegysége g/mol.'+'</li>'+'<br>'+
                                        '<li>'+'<b>'+'A mól'+'</b>'+' az Avogadro számával megegyező számú részecskét tartalmazó anyag mennyiségének mértékegysége a Nemzetközi Rendszerben, N'+ '<sub>'+'A.'+'</sub>'+'<br>'+'<br>'+
                                            'υ = m(g) / μ(g/mol) = vegyület tömege (g) / moláris tömege (g/mol)'+'<br>'+'<br>'+
                                            'υ = N / N'+'<sub>'+'A'+'</sub>'+' = Részecskék száma / Avogadro száma'+'</li>'+'<br>'+
                                        '<li>'+'Egy mól gázt foglal el normál hőmérsékleti (273 K) és nyomási körülmények között (10'+'<sup>'+'5'+'</sup>'+' Pa) egy térfogatot '+'<b>'+'molar volume'+'</b>'+' = V'+'<sub>'+'μ'+'</sub>'+' = 22,4 L /mol '+'<br>'+'<br>'+
                                            'v = V / V'+'<sub>'+'μ'+'</sub>'+' = Gáztérfogat (L) / Moláris térfogat (L/mol)'+'<br>'+'<br>'+
                                            'Az anyag moláris térfogata és sűrűsége közötti kapcsolat:'+'<br>'+'<br>'+
                                            'P = μ / V'+'<sub>'+'μ'+'</sub>'+'<br>'+'<br>'+
                                            'A térfogatszám (n) a részecskék (atomok vagy molekulák) számát jelenti egy m3 anyagban:'+'<br>'+'<br>'+
                                            'n = N'+'<sub>'+'A'+'</sub>'+' / V'+'<sub>'+'μ'+'</sub>'+' = N / V '+'<br>'+'<br>'+'</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Termodinamikai egyensúlyi és termodinamikai folyamatok:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'<b>'+'Egy termodinamikai rendszer állapotát'+'</b>'+' egy bizonyos pillanatban bizonyos fizikai mennyiségek jellemzik, amelyeket állapotparamétereknek nevezünk.'+'</li >'+'<br>'+
                                    '<li>'+'<b>'+'A termodinamikai egyensúly elve'+'</b>'+':'+'<br>'+'<br>'+

                                        'Egy izolált termodinamikai rendszer spontán módon fejlődik a termodinamikai egyensúlyi állapot felé, amelyet soha nem hagy ki magától.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Egy rendszer termodinamikai egyensúlyi állapota'+'</b>'+' a következő kapcsolattal módosítható:'+'<br>'+'<br>' +
                                        '- mechanikus a külső környezettel'+'<br>'+
                                        '- termikus egy másik környezettel (ha két különböző hőmérsékletű test érintkezik) vagy a külső környezettel'+'<br>'+
                                        '- anyagcsere a külső környezettel vagy más környezettel'+'</li>'+'<br>'+
                                        '<li>'+'<b>'+'A termodinamikai folyamat'+'</b>'+' (állapottranszformáció) a rendszer átmenetét jelenti egyik állapotból a másikba.'+'</li>' +' <br>'+
                                        '<li>'+'<b>'+'Kvázistatikus transzformáció'+'</b>'+' akkor fordul elő, ha a rendszer által áthaladó köztes állapotok termikus egyensúlyi állapotok, amikor az állapotparaméterek nagyon lassan változnak. ' +'</li>'+'<br>'+
                                        '<li>'+'<b>'+'A reverzibilis folyamat'+'</b>'+' az a kvázi statikus átalakulás, amely mindkét irányban, ugyanazon köztes állapotokon keresztül történhet.'+'</li>'+ '<br>'+
                                        '<li>'+'Az állapotegyenlet (Clapeyron – Mengyelejev) egy termodinamikai rendszer állapotparaméterei közötti függést írja le:'+'<br>'+'<br>'+
                                            'p ∙ V = ν ∙ R ∙ T'+'<br>'+'<br>'+
                                            'p = ideális gáznyomás'+'<br>'+
    
                                            'V = ideális gáztérfogat'+'<br>'+
    
                                            'ν = az ideális gáz móljainak száma'+'<br>'+
    
                                            'R = univerzális gázállandó = 8,3143 ∙ 10'+'<sup>'+'3'+'</sup>'+' J/kmol ∙ K'+'<br>'+
    
                                            'T = ideális gázhőmérséklet'+'</li>'+
                                '</ul>'+
                                '<h2 align = center>'+
                                '<img src = \"img/transformari.png\" width = 360>'+
                                '</h2>'+
                                '<h2 class=\"p-3\">'+'Tapasztalati hőmérséklet. Hőmérséklet-skálák:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'Két kívülről adiabatikusan elszigetelt, egymással energiát nem cserélő zárt termodinamikai rendszer hőmérséklete azonos, ezt nevezzük '+'<b>'+'empirikus hőmérsékletnek.'+'</b> '+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Hőmérséklet'+'</b>'+' egy hőmérővel mért fizikai állapotmennyiség, amely magában foglal egy hőmérőtestet, egy hőmérős mennyiséget és egy hőmérsékleti skálát.' +'</li>'+'<br>'+
                                    '<li>'+'<b>'+'A termodinamika nulla elve'+'</b>'+' (a termikus egyensúly tranzitivitása):'+'<br>'+'<br>'+
                                        'Ha az A rendszer termikus egyensúlyban van B rendszerrel, és B rendszer termikus egyensúlyban van a C rendszerrel, akkor az A rendszer a C rendszerrel is termikus egyensúlyban van.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Transformációs reláció'+'</b>'+' Celsius t(°C) és Fahrenheit tF (°F) között:'+'<br>'+ '<br>'+
                                        't'+'<sub>'+'F'+'</sub>'+' = 9/5 ∙ t(°C) + 32'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Kelvin skála'+'</b>'+' (abszolút érték): '+'<br>'+'<br>'+
                                        '[T]'+'<sub>'+'SI'+'</sub>'+' = K (kelvin)'+'<br>'+'<br>'+
                                        'T(K) = t (°C) + 273,15'+'</li>'+
                                '</ul>'+

                                //Principiul I
                                '<a name=\"element_target\">'+'</a>'+
                                '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center>'+'I. alapelv'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                

                                '<h2 class=\"p-3\">'+'Gépészeti munka:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'A zárt termodinamikai rendszer és a külső környezet közötti energiacsere kétféleképpen mehet végbe:'+'<br>'+'<br>'+
                                        '- Gépészeti munka elvégzésével'+'<br>'+
                                        '- Hőátadással.'+'<br>'+'<br>'+
                                        
                                        'Az egyes erők hatására a helyzetparaméterek változását eredményező kölcsönhatások körülményei között a rendszerbe átvitt energia mértékét '+'<b>'+'mechanikai munkának nevezzük.'+'</b>'+'<br>'+' <br>'+
                                        'L = F ∙ d'+'</li>'+'<br>'+
                                    '<li>'+'Az F'+'<sub>'+'e'+'</sub>'+' külső erő által végzett mechanikai munka:'+'<br>'+'<br> '+
                                        'L'+'<sub>'+'e'+'</sub>'+' = p'+'<sub>'+'e'+'</sub>'+' ∙ S ∙ (x1 - x2) = - p'+'<sub>'+'e'+'</sub>'+' ∙ ΔV'+'<br>'+'<br>'+
                                        'S = a henger keresztmetszete'+'<br>'+
                                        'p'+'<sub>'+'e'+'</sub>'+' = külső nyomás'+'<br>'+

                                        'V2 = S ∙ x2'+'<br>'+
                                        'V1 = S ∙ x1'+'<br>'+
                                        
                                        'ΔV = V2 - V1'+'</li>'+'<br>'+
                                    '<li>'+'A termodinamikai rendszer izobár átalakulás során végzett mechanikai munkája:'+'<br>'+'<br>'+
                                        'L = p ∙ ΔV'+'</li>'+'<br>'+
                                    
                                    '<li>'+'A termodinamikai rendszer által végzett mechanikai munkára vonatkozó előjelek:'+'<br>'+'<br>'+
                                    
                                        'a) Ha a gáz kitágul (növeli a térfogatát), ΔV > 0, majd L > 0 és a rendszer mechanikai munkát végez a külső közegen (L hozam).'+'<br>'+'<br>'+
                                    
                                        'b) Ha a gáz összenyomódik (a térfogata csökken), ΔV < 0, akkor L < 0 és mechanikai munka folyik a rendszeren (L-t kap).'+'<br>'+'<br>'+
                                    
                                        'c) Ha a rendszer és a külső között mechanikai munkával nem történik energiaátadás (L = 0), akkor a gáz térfogata nem változik (ΔV=0).'+'</li>'+'<br>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Gépészeti munka:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Egy valódi gáz részecskéinek energiáját a következő képlet adja meg:'+'<br>'+'<br>'+
                                        '- A külső energiát a rendszer egészének kinetikus energiájának és az erőtérben lévő potenciális energiájának összege adja meg.'+'<br>'+'<br>'+
                                        '- A belső energiát (U) a molekulák kinetikus energiáinak (E'+'<sub>'+'c'+'</sub>'+') és a molekulák közötti kölcsönhatás potenciális energiáinak összege adja meg. a termodinamikai rendszer molekulái (E '+'<sub>'+'p'+'</sub>'+').'+'<br>'+'<br>'+
                                        'U = Ec + Ep'+'<br>'+'<br>'+
                                        '- De a belső energiaváltozás (ΔU = U'+'<sub>'+'2'+'</sub>'+' – U'+'<sub>'+'1'+'</sub> ' +') egy fizikai állapotmennyiség, és nem függ a köztes állapotoktól, amelyeken a rendszer áthalad, hanem csak a kezdeti állapottól (U'+'<sub>'+'1'+'</sub>'+ ') és az utolsó (U'+'<sub>'+'2'+'</sub>'+').'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Heat:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'A hő (Q) egy fizikai mennyiség, amely csak a molekulák rendezetlen mozgása révén méri át az energiát két termikus érintkező test között.'+'<br>'+'<br>'+

                                        '[Q]'+'<sub>'+'SI'+'</sub>'+' = J(joule)'+'<br>'+'<br>'+
                                        "A hő másik megengedett mértékegysége a kalória: 1cal = 4,18 J"+
                                    '</li>'+'<br>'+
                                    '<li>'+'A hő előírásai:'+'<br>'+'<br>'+
                                        'a) Ha a rendszer kívülről kap hőt, akkor Q > 0'+'<br>'+'<br>'+
                                        'b) Ha a rendszer hőt bocsát ki a kültérbe, akkor Q < 0'+'<br>'+'<br>'+
                                        'c) Ha a rendszer adiabatikusan le van választva (nem cserél hőt a külsővel), akkor Q = 0'+
                                    '</li>'+'<br>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'A termodinamika első főtételének következményei:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'Adja meg a termodinamika első elvét:'+'<br>'+'<br>'+
                                        'Egy rendszer belső energiájának változása valamilyen folyamatban:'+'<br>'+'<br>'+
                                        'ΔU = Q - L'+'</li>'+'<br>'+
                                    '<li>'+'Ha a rendszer le van szigetelve (sem hőt, sem mechanikai munkát nem cserél ki a külsővel), akkor'+'<br>'+'<br>'+
                                        'Q = L = 0, ΔU = U2 – U1 = 0 és U1 = U2, azaz egy elszigetelt rendszer belső energiája megmarad.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'A termodinamika első elvének egyenlete a hő definíciójának formájában is felírható:'+'<br>'+'<br>'+
                                        "Q = ΔU + L, azaz a rendszer által kapott hő egyrészt a rendszer belső energiájának megváltoztatására, másrészt a rendszer mechanikai munkájának elvégzésére szolgál."+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Ha a rendszer adiabatikusan le van szigetelve (nem cserél hőt a külsővel), akkor'+'<br>'+'<br>'+
                                        'Q = 0 és L = –ΔU = –(U2 – U1), azaz egy izolált adiabatikus rendszer csak a belső energia változása miatt cserél mechanikai munkát a külsővel.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Ha a rendszer nem cserél mechanikai munkát a külsővel (L=0), hanem csak hőt, akkor'+'<br>'+'<br>'+
                                        'ΔU = Q, azaz a rendszer által kapott hő a rendszer belső energiájának növekedéséhez vezet.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Ciklikus transzformációban ΔU = U2 – U1 = 0 és L = Q, vagyis a rendszer csak akkor tud mechanikai munkát végezni, ha kívülről kap hőt.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Ebből az következik, hogy lehetetlen létezni egy első típusú örökmobil (olyan eszköz, amely mechanikai munkát végez anélkül, hogy kívülről energiát fogyasztana).'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Kalóriaegyütthatók:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'A fajhő (c) azt a fizikai mennyiséget jelöli, amely 1 kg anyag által felvett/leadott hőt jellemzi, hogy a hőmérsékletét egy fokkal növelje/csökkentse. Ez egy anyagi állandó, és a fejezet végén található állandó táblázatban található.'+'<br>'+'<br>'+
                                        'c = 1 / m ∙ Q / ΔT'+'<br>'+'<br>'+
                                        '[c]'+'<sub>'+'SI'+'</sub>'+' = J/Kg∙K'+'<br>'+'<br>'+
                                        'Q = m ∙ c ∙ ΔT'+'<br>'+
                                        'm = testtömeg'+'<br>'+
                                        'c = fajhő'+'<br>'+
                                        'ΔT = T'+'<sub>'+'final'+'</sub>'+' – T'+'<sub>'+'initial'+'</sub>'+' , a testhőmérséklet '+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'kapott'+'</sub>'+' > 0'+'<br>'+
                                        'Q'+'<sub>'+'átadva'+'</sub>'+'< 0 '+'<br>'+'<br>'+
                                        'A kalorimetrikus egyenlet: '+'<br>'+'Q'+'<sub>'+'received'+'</sub>'+' = | Q'+'<sub>'+'átadva'+'</sub>'+' |'+'<br>'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'A hőkapacitás (C) azt a fizikai mennyiséget jelöli, amely jellemzi azt a hőmennyiséget, amelyre a termodinamikai rendszernek szüksége van ahhoz, hogy hőmérsékletét egy fokkal változtassa.'+'<br>'+'<br>'+
                                        'C = Q / ΔT'+'<br>'+'<br>'+
                                        '[C]'+'<sub>'+'SI'+'</sub>'+' = J/Kg'+'<br>'+'<br>'+
                                        'Q = C ∙ ΔT'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Mólhő (C'+'<sub>'+'μ'+'</sub>'+') az a hő, amely egy mól anyag hőmérsékletének egy fokkal történő megváltoztatásához szükséges.'+'<br> ' +'<br>'+
                                        'C'+'<sub>'+'μ'+'</sub>'+' = Q / v ∙ ΔT'+
                                        '[C'+'<sub>'+'μ'+'</sub>'+'] = J/mol∙K'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'A szabadság fokai:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'Mivel a termodinamikában az ideális gázmolekulákat anyagi pontoknak tekintjük, a termodinamikai rendszert jellemző független koordinátákat szabadsági fokoknak nevezzük.'+'<br>'+'<br>'+
                                        '- Egyatomos gázok esetén: i = 3'+'<br>'+
                                        '- Kétatomos gázok esetén: i = 5'+'<br>'+
                                        '- Többatomos gázok esetén: i = 6'+'<br>'+'<br>'+

                                        'A moláris hő állandó térfogaton:'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'v'+'</sub>'+' = i/2 R'+'<br>'+'<br>'+
                                        'A moláris hő állandó nyomáson:'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = (i + 2)/2 R'+'<br>'+'<br>'+
                                        'R = 8,3143 ∙ 10'+'<sup>'+'3'+'</sup>'+' J/kmol ∙ K (univerzális gázállandó)'+'</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Isochore transzformáció :'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'(ν és V állandó) → ΔV = 0 → L'+'<sub>'+'V'+'</sub>'+' = p ∙ ΔV = 0'+'</li>'+'<br>'+
                                    '<li>'+'Két esetünk van:'+'<br>'+'<br>'+
                                        '- Az állandó térfogatú gáz felmelegszik, hőt vesz fel → QV > 0 és ΔU > 0 (növeli a gáz belső energiáját).'+'<br>'+'<br>'+
                                        '- Az állandó térfogatba zárt gáz lehűl, hőt ad fel → QV < 0 és ΔU < 0 (a gáz belső energiája csökken)'+'</li>'+'<br>'+
                                    '<li>'+' Képletek: '+'<br>'+'<br>'+
                                        
                                        'ΔU = Q'+'<sub>'+'V'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ ΔT '+'<br>'+'<br>'+
                                        'ΔU = U – U'+'<sub>'+'0'+'</sub>'+' és ΔT = T – T'+'<sub>'+'0'+'</sub>' +', T'+'<sub>'+'0'+'</sub>'+' = 0 K → U'+'<sub>'+'0'+'</sub>'+' = 0'+'<br>'+'<br>'+
                                        'Egy monatomikus ideális gáz belső energiája:'+'<br>'+
                                        'U = ν ∙ C'+'<sub>'+'V'+'</sub>'+'∙ T = 3/2 ∙ ν ∙ R ∙ T'+'</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Izobár transzformáció:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        '(ν és p konst.)'+'<br>'+'<br>'+
                                        'Ha a gázt felmelegítjük, hőt vesz fel → Qp > 0 és az energia egy része a gáz belső energiájának növelésére szolgál ΔU > 0, másik része pedig a gáz által a külső oldalon végzett mechanikai munka, L > 0.'+
                                    '</li>'+'<br>'+
                                    '<li>'+' Képletek: '+'<br>'+'<br>'+
                                            'L = p ∙ ΔV'+'<br>'+'<br>'+
                                            'Q'+'<sub>'+'p'+'</sub>'+' = ν ∙ C'+'<sub>'+'p'+'</sub>'+' ∙ ΔT'+ '<br>'+'<br>'+
                                            'A belső energiaváltozás nem függ a folyamattól, és ezt írhatjuk:'+'<br>'+
                                            'ΔU = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ ΔT'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Izotermikus transzformáció:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        '(ν és T állandó) → U = állandó. és ΔU = 0.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        "A gáz felmelegítésekor hőt nyel el → QT > 0 és L > 0, és teljes egészében a külső mechanikai munkák elvégzésére szolgál."+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        "Izoterm átalakulásnál a nyomás fordítottan arányos a gáz térfogatával, és akkor mechanikai munkánk van."+
                                    '</li>'+'<br>'+
                                    '<li>'+' Képletek: '+'<br>'+'<br>'+
                                        'L'+'<sub>'+'T'+'</sub>'+' = v ∙ R ∙ T ∙ ln(V'+'<sub>'+'2'+'</sub>' +' / V'+'<sub>'+'1'+'</sub>'+')'+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'T'+'</sub>'+' = L'+'<sub>'+'T'+'</sub>'+' = v ∙ R ∙ T ∙ ln(V'+'<sub>'+'2'+'</sub>'+' / V'+'<sub>'+'1'+'</sub>'+')'+' <br>'+'<br>'+
                                        'p'+'<sub>'+'1'+'</sub>'+' ∙ V'+'<sub>'+'1'+'</sub>'+' = p'+'<sub>'+'2'+'</sub>'+' ∙ V'+'<sub>'+'2'+'</sub>'+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'T'+'</sub>'+' = L'+'<sub>'+'T'+'</sub>'+' = v ∙ R ∙ T ∙ ln(V'+'<sub>'+'2'+'</sub>'+' / V'+'<sub>'+'1'+'</sub>'+') = v ∙ R ∙ T ∙ ln(p1 / p2)'+'<br>'+'<br>'+
                                        'U = állandó és ΔU = 0'+
                                    '</li>'+'<br>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Adiabatikus transzformáció:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        '(ν const.) → Qad = 0'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Képlet:'+'<br>'+'<br>'+
                                        'ΔU = - L'+'<sub>'+'ad'+'</sub>'+'<br>'+'<br>'+
                                        'ΔU = ν ∙ C'+'<sub>'+'v'+'</sub>'+' ∙ΔT'+'<br>'+'<br>'+
                                        'L'+'<sub>'+'ad'+'</sub>'+' = - ν ∙ C'+'<sub>'+'v'+'</sub>'+' ∙ ΔT' +'<br>'+'<br>'+
                                        'Az adiabatikus folyamat egyenletét Poisson-egyenletnek nevezik:'+'<br>'+
                                        'p ∙ V'+'<sup>'+'y'+'</sup>'+' = konst.'+'<br>'+
                                        'y = adiabatikus együttható = C'+'<sub>'+'p'+'</sub>'+' / C'+'<sub>'+'V'+'</sub>'+'<br>'+
                                        'T ∙ V'+'<sup>'+'y-1'+'</sup>'+' - const'+
                                        'T'+'<sup>'+'y'+'</sup>'+' / p '+'<sup>'+'y-1'+'</sup>'+' = const'+
                                    '</li>'+
                                '</ul>'+
                                
                                '<h2 class=\"p-3\">'+'Robert – Mayer kapcsolat:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Izochore transzformáció esetén:'+'<br>'+'<br>'+
                                        'ΔU = Q'+'<sub>'+'V'+'</sub>'+' = v ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ ΔT '+'<br>'+'<br>'+
                                        'C'+'<sub>'+'V'+'</sub>'+' = Q'+'<sub>'+'V'+'</sub>'+' / (v ∙ ΔT) = ΔU / (v ∙ ΔT)'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Izobár transzformáció esetén:'+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'p'+'</sub>'+' = (v ∙ C'+'<sub>'+'p'+'</sub>'+' ∙ ΔT) = ΔU + p ∙ ΔV'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = Q'+'<sub>'+'p'+'</sub>'+' / (v ∙ ΔT) = (ΔU + p ∙ ΔV) / (v ∙ ΔT)'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'A Cp és CV két relációját kombinálva a következőt kapjuk:'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = C'+'<sub>'+'V'+'</sub>'+' + (p ∙ ΔV) / (v ∙ ΔT)'+'<br>'+'<br>'+
                                        'A termikus állapotegyenletből:'+'<br>'+'<br>'+
                                        'p ∙ ΔV = ν ∙ R ∙ ΔT'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'A Robert–Mayer reláció megállapítja a moláris hőek közötti kapcsolatot:'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = C'+'<sub>'+'V'+'</sub>'+' + R'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'A Robert–Mayer reláció megállapítja a kapcsolatot a moláris fajhők között:'+'<br>'+'<br>'+
                                        'c'+'<sub>'+'p'+'</sub>'+' = c'+'<sub>'+'V'+'</sub>'+' + (R / μ) '+
                                    '</li>'+
                                '</ul>'+


                                //Motoare termice
                                '<a name=\"element_target2\">'+'</a>'+
                                '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center>'+'Hőmotorok'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                
                                '<h2 class=\"p-3\">'+'Hőgépek:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'A bitermikus ciklikus átalakulás során a termodinamikai rendszer hőt cserél Q'+'<sub>'+'1'+'</sub>'+', illetve Q'+'<sub>'+'2'+'</sub>'+' két hőforrással, amelyek hőmérséklete T'+'<sub>'+'1'+'</sub>'+' (forró forrás) és T'+'<sub>'+'2 '+'</sub>'+' (hideg tavasz), T'+'<sub>'+'1'+'</sub>'+' > T'+'<sub>'+' 2' +'</sub>'+' .'+'<br>'+'<br>'+
                                            'Mivel a ciklikus transzformációk ΔU = 0, a termodinamika első elve szerint van'+'<br>'+'<br>'+
                                            'Q'+'<sub>'+'1'+'</sub>'+' + Q'+'<sub>'+'2'+'</sub>'+' = L'+'<br>'+'<br>'+

                                            "A hőmotor egy termodinamikai rendszer, amely ciklikus átalakulást hajt végre, amelyben hőt és mechanikai munkát cserél ki a külső környezettel."+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Hőmotorok:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        "A hőmotor olyan rendszer, amely a kapott hőt egy üzemanyag (benzin, gázolaj, metángáz stb.) elégetésével mechanikai munkává alakítja."+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Az Otto motor:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Az Otto motor üzemanyagként levegő és benzingőz keverékét használja, amely a karburátorban keletkezik.'+'<br>'+'<br>'+
                                        '- Az üzemanyag-keveréket a szívószelepen (S1) keresztül szívja be a dugattyús hengerbe.'+'<br>'+'<br>'+
                                        '- Az üzemanyag-keverék égéséből származó gázok a kipufogószelepen (S2) keresztül távoznak.'+'<br>'+'<br>'+
                                        '- A működési idő a dugattyú elmozdulásának időtartama a felső holtponttól = TDC (a henger minimális mennyiségű anyagot zár) az alsó holtpontig = PMI (a henger maximális mennyiségű anyagot zár) és fordítva.'+'<br>'+'<br>'+
                                        '- A dugattyú össze van kötve egy hajtókar-forgattyús rendszerrel (vilbrochen = főtengely), hogy a dugattyú egyenes vonalú mozgását forgó mozgássá alakítsa át.'+'<br>'+'<br>'+
                                        '- A motorblokk több sorba kapcsolt hengerből áll. Minden dugattyúnak eltérő kioldási ideje van, hogy lehetővé tegye a vilborchen állandó és állandó forgását.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                    'Otto motor futási idők:'+'<br>'+'<br>'+

                                        '-'+'<b>'+'1. időpont: Belépés'+'</b>'+' - (izobar folyamat):'+'<br>'+'<br>'+
                                        'A szívószelep kinyílik, a benzin-levegő keverék beszívódik a hengerbe, és a dugattyú állandó nyomáson leereszkedik a TDC-ről a TDC-re. Ez a dugattyú első leereszkedése.'+'<br>'+'<br>'+
                                    
                                        '-'+'<b>'+'2. idő: tömörítés'+'</b>'+' - (adiabatikus folyamat):'+'<br>'+'<br>'+
                                        'Mindkét szelep zárva van. A dugattyú a TDC-ig mozog, így az üzemanyag erősen összenyomódik, ilyenkor a nyomás és a hőmérséklet nő. A tömörítés nagy sebessége miatt ez a folyamat adiabatikus (nincs hőcsere a külsővel). Ez a dugattyú első felemelkedése.'+'<br>'+'<br>'+
                                        '-'+'<b>'+'3. idő: gyújtás'+'</b>'+' - (izokhor folyamat) és '+'<b>'+'detente'+'</b>'+ ' - (adiabatikus folyamat):'+'<br>'+'<br>'+
                                        'Mindkét szelep zárva van, és a dugattyú TDC-n van. A gyújtógyertya által keltett elektromos szikra meggyújtja a keveréket, amely felrobban, és állandó térfogat mellett jelentős nyomásnövekedést okoz. A keverék hő leadásával ég (Q1 = a motor által kapott hő). Az égés során keletkező gázok adiabatikusan tágulnak, mechanikai munkával a dugattyút a PMI-be nyomják. Ez a dugattyú második leereszkedése.'+'<br>'+'<br>'+

                                        '-'+'<b>'+'4. időpont : Kiürítés'+'</b>'+' - (izokór folyamat) és (izobár folyamat):'+'<br>'+'<br>'+
                                        'Kinyílik az S2 kipufogószelep, ekkor a nyomás hirtelen a légköri nyomás értékére esik le. Ebben az izokhorikus folyamatban a keverék a Q2 hőt a külső környezetnek adja át. A dugattyú felfelé halad a TDC-re, és állandó nyomáson nyomja ki az égett gázokat. Innentől a ciklus folytatódik.'+                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Az Otto hőmotor hatásfoka:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Az Otto hőmotor hatásfoka (η) a motor által végzett mechanikai munka (L) és a kapott hő (Q) arányával egyenlő fizikai mennyiség.'+'<br>'+'<br> '+
                                        'η = L / Q'+'<sub>'+'1'+'</sub>'+' = 1 - (|Q'+'<sub>'+'hozamos'+'</sub>'+'|)'+

                                        'Feltételezzük, hogy a munkaanyag ideális gáz, és a kompressziós arány ε = V'+'<sub>'+'1'+'</sub>'+'/V'+'<sub>'+'2 '+'</sub>'+'.'+'<br>'+'<br>'+

                                        'A négy transzformáció hőfoka:'+'<br>'+'<br>'+
                                        ' - Q'+'<sub>'+'12'+'</sub>'+' = 0'+'<br>'+
                                        ' - Q'+'<sub>'+'23'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T'+'<sub>'+'3'+'</sub>'+' – T'+'<sub>'+'2'+'</sub>'+') = Q'+'<sub>'+'1'+'</sub>'+' > 0'+'<br>'+
                                        ' - Q'+'<sub>'+'34'+'</sub>'+' = 0'+'<br>'+
                                        ' - Q'+'<sub>'+'41'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T'+'<sub>'+'31'+'</sub>'+' – T'+'<sub>'+'4'+'</sub>'+') = Q'+'<sub>'+'2'+'</sub>'+' < 0'+'<br>'+'<br>'+

                                        ' η = 1 - (1 / ε'+'<sup>'+'y-1'+'</sup>'+')'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Motorul Diesel:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                    "A dízelmotor belső égésű, négyütemű motor dízel befecskendezésű gyújtással."+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Dízelmotor futási idők:'+'<br>'+'<br>'+

                                        '- '+'<b>'+'1. idő: Beszívás '+'</b>'+' - (izobar folyamat):'+'<br>'+'<br>'+
                                        'A szívószelep kinyílik, levegő szívódik be a hengerbe atmoszférikus nyomáson, és a dugattyú a TDC-ről a TDC-re ereszkedik le állandó nyomáson (izobár folyamat). Ez a dugattyú első leereszkedése.'+'<br>'+'<br>'+
                                        '- '+'<b>'+'2. idő: tömörítés'+'</b>'+' - (adiabatikus folyamat):'+'<br>'+'<br>'+                                        '– Mindkét szelep zárva van. A dugattyú TDC-re emelkedik, így a levegő erősen összenyomódik, ilyenkor a nyomás és a hőmérséklet jelentősen megnő. A tömörítés nagy sebessége miatt ez a folyamat adiabatikus (nincs hőcsere a külsővel). Ez a dugattyú első felemelkedése.'+'<br>'+'<br>'+
                                        '- '+'<b>'+'3. idő: gyújtás'+'</b>'+' - (izobár folyamat) és '+'<b>'+'detente'+'</b>'+ ' - (adiabatikus folyamat):'+'<br>'+'<br>'+
                                        '– Mindkét szelep zárva van, a dugattyú pedig TDC-n van. A befecskendező szivattyú dízel üzemanyagot permetez a motor hengerébe. A hengerben lévő levegő hőmérséklete magasabb, mint a gázolaj gyulladási hőmérséklete, ezért állandó nyomáson meggyullad és ég, hőt bocsát ki (Q1 = a motor által kapott hő). Az égés során keletkező gázok adiabatikusan tágulnak, mechanikai munkával a dugattyút a PMI-be nyomják. Ez a dugattyú második leereszkedése.'+'<br>'+'<br>'+
                                        '- '+'<b>'+'4. időpont: Kiürítés'+'</b>'+' - (izokór folyamat) és (izobár folyamat):'+'<br>'+'<br>'+
                                        'Az S2 kipufogószelep kinyílik, ekkor a nyomás hirtelen atmoszférikus nyomásra csökken. Ebben az izokoros folyamatban (állandó térfogat mellett) a keverék Q2 hőt ad le a külső környezetnek. A dugattyú felfelé halad a TDC-re, és állandó nyomáson nyomja ki az égett gázokat. Innentől a ciklus folytatódik.'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Dízel termikus motor hatásfoka:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                    'A dízel hőmotor hatásfoka (η) a motor által végzett mechanikai munka (L) és a kapott hő (Q) arányával egyenlő fizikai mennyiség.'+'<br>'+'<br> '+
                                    'η = L / Q'+'<sub>'+'1'+'</sub>'+' = 1 - (|Q'+'<sub>'+'hozamos'+'</sub>'+'|)'+

                                    'Feltételezzük, hogy a munkaanyag ideális gáz, és a kompressziós arány ε = V'+'<sub>'+'1'+'</sub>'+'/V'+'<sub>'+'2 '+'</sub>'+' és α = V'+'<sub>'+'3'+'</sub>'+'/V'+'<sub>'+'2'+'</sub>'+'<br>'+'<br>'+

                                    'A négy transzformáció hőfoka:'+'<br>'+'<br>'+
                                    '- Q'+'<sub>'+'12'+'</sub>'+' = 0 (adiabatikus folyamat)'+'<br>'+
                                    '- Q'+'<sub>'+'23'+'</sub>'+' = ν ∙ C'+'<sub>'+'p'+'</sub>'+' ∙ (T '+'<sub>'+'3'+'</sub>'+' – T'+'<sub>'+'2'+'</sub>'+') = Q'+'<sub >'+'1'+'</sub>'+' > 0 (izobár folyamat)'+'<br>'+
                                    '- Q'+'<sub>'+'34'+'</sub>'+' = 0 (adiabatikus folyamat)'+'<br>'+
                                    '- Q'+'<sub>'+'41'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T '+'<sub>'+'1'+'</sub>'+' – T'+'<sub>'+'4'+'</sub>'+') = Q'+'<sub >'+'2'+'</sub>'+' < 0 (izokór folyamat)'+'<br>'+'<br>'+

                                    'η = 1 - (1/y) ∙ (a'+'<sup>'+'y-1'+'</sup>'+' / ε'+'<sup>'+'y-1' +'</sup>'+'(a-1))'+
                                    
                                '</li>'+
                                '</ul>'+
                                

                                //Principiul al II-lea

                                '<a name=\"element_target3\">'+'</a>'+
                                '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center>'+'A második elv'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                
                                '<h2 class=\"p-3\">'+'A termodinamika második főtételének Carnot-féle megfogalmazása:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'A termodinamika második főtételének első megfogalmazása Sadi Carnoté, aki 1824-ben kimutatta, hogy van egy felső határa a hő mechanikai energiává alakításának hatékonyságának egy hőgépben, ami egy termodinamikai ciklus alkalmazását foglalja magában. munkafolyadék.' +
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Carnot mutatta be először, hogy nem lehet egyetlen termosztáttal üzemeltetni egy hőmotort, amelyhez legalább két termosztát szükséges. Így a rendszer meleg forrásból kap hőt (termosztát T'+'<sub>'+'1'+'</sub>'+') és hőt ad egy hideg forrásnak (T'+'<sub>'+'2'+'</sub>'+').'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'A gázparaméterek kezdeti állapotban: p'+'<sub>'+'1'+'</sub>'+', V'+'<sub>'+'1'+'</sub>'+' és T'+'<sub>'+'1'+'</sub>'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'A gázpalackot egy fűtőtestbe visszük (termosztát T'+'<sub>'+'1'+'</sub>'+'-val). A gáz elnyeli a Q'+'<sub>'+'1'+'</sub>'+' hőt a forró forrásból, és izotermikusan kitágul (T'+'<sub>'+'1'+'</sub>'+' = állandó) és kvázi statikus V'+'<sub>'+'1'+'</sub>'+'-tól V'+'<sub>'+'2'+'-ig </sub>'+', L'+'<sub>'+'1'+'</sub>'+'.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'A gázpalackot hőszigetelő tartón hozzuk. A gáz adiabatikusan kitágul V'+'<sub>'+'3'+'</sub>'+'-ig, mechanikai munkát végezve L'+'<sub>'+'2'+'</sub>' + '. A gáz lehűl T'+'<sub>'+'2'+'</sub>'+' < T'+'<sub>'+'1'+'</sub>'+'. ' +
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'A gázpalackot hideg forrásba visszük (termosztát T'+'<sub>'+'2'+'</sub>'+'-val). A gáz Q'+'<sub>'+'2'+'</sub>'+' hőt ad le, és izotermikusan összenyomódik (T'+'<sub>'+'2'+'</sub> ' +' = állandó) és kvázi statikus V'+'<sub>'+'3'+'</sub>'+'-tól V'+'<sub>'+'4'+'</sub> '+', megkapja a mechanikai munkát L'+'<sub>'+'3'+'</sub>'+'.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'A gázpalackot hőszigetelő tartón hozzuk. A gázt adiabatikusan sűrítjük V'+'<sub>'+'4'+'</sub>'+'-ról '+'<sub>'+'1'+'</sub>'+'-ra. Hőmérséklete T'+'<sub>'+'2'+'</sub>'+'-ról T'+'<sub>'+'1'+'</sub>'+'-ra emelkedik, fogadva a mechanikai munka L'+'<sub>'+'4'+'</sub>'+'. A gáz visszatér eredeti állapotába.'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Carnot ciklus hozama:'+'</h2>'+
                                '<ul>'+
                                '<li>'+
                                    'A Carnot-ciklus hatásfoka (η) egy fizikai mennyiség, amely egyenlő a motor által végzett mechanikai munka (L) és a kapott hő (Q'+'<sub>'+'1'+'</sub>'+') '+'<br>'+'<br>'+
                                    'η = L / Q'+'<sub>'+'1'+'</sub>'+'<br>'+'<br>'+
                                    'L = L'+'<sub>'+'1'+'</sub>'+' + L'+'<sub>'+'2'+'</sub>'+' + L'+ '<sub>'+'3'+'</sub>'+' + L'+'<sub>'+'4'+'</sub>'+
                                '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'A termodinamika második főtételének Carnot-féle megfogalmazása:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'A Carnot-ciklus hozama mindig alegység, mert T'+'<sub>'+'2'+'</sub>'+' ≠ 0'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'A Carnot-ciklus teljesítménye csak a meleg forrás (T'+'<sub>'+'1'+'</sub>'+') és a hideg (T'+'<sub>'+'2' +'</sub>'+'), és nem függ a munkaanyagtól.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        "Egy irreverzibilis hőmotor hatásfoka mindig alacsonyabb, mint az azonos hőmérsékleti határok között reverzibilisen működő hőmotoré."+
                                    '</li>'+
                                '</ul>'),

        //teorieElectromecanica.html
        "teorieElectromecanicaTitle": "Elektromechanika elmélet",
        "teorieElectromecanica": ('<u>' +'<h2 class="p-3" align = center>Villamos áram</h2><br><br><br>' +'</u>'         
                                +'<ul>'
                                    +'<li>'
                                        +'<b>Villamos áram</b> az elektromos töltéshordozók rendezett mozgása egy villamos áramkörben.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'<b>Töltéshordozók</b>, akik mozgása az elektromos áram megjelenését eredményezi, lehet:<br><br>'
                                        +'a) Szabad elektronok, fémekben.<br><br>'
                                        +'b) Ionok és elektronok, elektrolitokban (savak, bázisok vagy sók oldataiban vagy olvadt állapotban) és gázokban.'
                                    +'</li>'
                                +'</ul>'
                                +'<h2 class="p-3">Egy villamos áramkör összetevői:</h2>'
                                +'<ul>'
                                    +'<li>'
                                        +'<b>Villamos generátorok</b><br><br>'
                                        +'- Folyamatos áram generátorok<br><br>'
                                        +'- Váltóáram generátorok'
                                    +'</li><br>'
                                    +'<li>'
                                        +'<b>Villamos készülékek</b><br><br>'
                                        +'- Elektromos izzók<br><br>'
                                        +'- Elektromos ellenállások<br><br>'
                                        +'- Elektromos motorok<br><br>'
                                    +'</li><br>'
                                    +'<li>'
                                        +'<b>Kapcsolók</b><br>'
                                        +'ezeknek a szerepe az elektromos áramkör nyitása és zárása. Csak akkor halad áram az áramkörben, ha a kapcsoló be van kapcsolva.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'A villamos áram hagyományos iránya egy áramkörön belül a forrás pozitív pólusáról a negatív pólusra halad, a külső áramkörön keresztül (a fogyasztók által).'
                                    +'</li>'
                                +'</ul>'
                                +'<h2 class="p-3">A villamos áram intenzitása:</h2>'
                                +'<ul>'
                                    +'<li>'
                                        +'Ha egy vezető két pontja között villamos feszültséget alkalmazunk, villamos áram jelenik meg, azaz az elektronok rendezett mozgása, akik szabadon mozognak, és töltést q = n ∙ e szállítanak.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'<b>A villamos áram intenzitása</b> (I) egy skalár fizikai mennyiség, amely egy vezető keresztmetszetén áthaladó töltés (q) és időtartam (Δt) hányadosával egyenlő.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'<b>A villamos áram intenzitásának jellemzése fizikai mennyiségként:</b><br><br>'
                                        +'I = Töltés / Idő = q / Δt = (n ∙ e) / Δt<br><br>'
                                        +'n - elektronok száma<br><br>'
                                        +'e - egy elektron töltése (abszolút értékben)<br><br>'
                                        +'e = 1,6 ∙ 10<sup>-19</sup> C'
                                    +'</li>'
                                +'</ul>'
                            
                                + '<h2 class="p-3">Elektromos feszültség:</h2>'
                                + '<ul>'
                                    + '<li>'
                                        + '<b>Elektromos generátorok</b> (elektromos források) olyan eszközök, amelyek villamos áramot termelnek és fenntartanak egy áramkörben, vagyis biztosítják a töltéshordozók áramlását az áramkörön keresztül. Mechanikai munkát végeznek ezekkel a hordozókkal, hogy azokat mozgásba hozzák.'
                                    + '</li><br>'
                                    + '<li>'
                                        + '<b>Elektromos feszültség</b> (rövidítve: VEM, szimbólum: E) egy skalár fizikai mennyiség, amely a forrás (L<sub>total</sub>) által végzett mechanikai munkát méri a villamos töltéshordozó (q) egységnyi távolságban (q) az egész áramkör mentén.<br><br>'
                                        + 'E = L<sub>total</sub> / q<br><br>'
                                        + 'Az SI-ben az elektromos feszültség mértékegysége a volt (V):<br><br>'
                                        + '[E]<sub>SI</sub> = [L]<sub>SI</sub> / [q]<sub>SI</sub> = J / C = V (volt)'
                                    + '</li><br>'
                                    + '<li>'
                                        + '<b>A forrás által teljesített összes mechanikai munka</b> a teljes áramkört áthaladó töltés (q) mentén egyenlő a forrás által kívülről végzett mechanikai munkával (L<sub>ext</sub>) és a forrás belsejében végzett mechanikai munkával (L<sub>int</sub>):<br><br>'
                                        + 'L<sub>Total</sub> = L<sub>ext</sub> + L<sub>int</sub><br><br>'
                                        + 'L<sub>Total</sub> / q = (L<sub>ext</sub> / q) + (L<sub>int</sub> / q)'
                                    + '</li><br>'
                                    + '<li>'
                                    + '<b> Az elektromos feszültség</b> a terminálokon (szimbólummal U ) egy skalár fizikai mennyiség, amely méri a forrás (L<sub>ext</sub>) által végzett mechanikai munkát a villamos töltéshordozó (q) egységnyi távolságban az áramkörön keresztül.<br><br>'
                                     +'U = L<sub>ext</sub> / q'
                                 +'</li><br>'
                                 +'<li>'
                                     +'<b>Belső feszültség</b> (szimbólummal u) egy skalár fizikai mennyiség, amely méri a forrás (L<sub>int</sub>) által végzett mechanikai munkát a villamos töltéshordozó (q) egységnyi távolságban az áramkörön belül.<br><br>'
                                     +'u = L<sub>int</sub> / q'
                                 +'</li>'
                                 +'<li>'
                                     +'Így a villamos áramkör három feszültségének a kapcsolata:<br><br>'
                                     +'E = U + u'
                                 +'</li><br>'
                                 +'<li>'
                                     +'U = Mechanikai munka / Elektromos töltés<br><br>'
                                     +'U = L / q'
                                 +'</li>'
                                +'</ul>'                                

                        //Legea lui Ohm
                        +'<a name="element_target"></a>'
                        +'<br><br><br><br><u><h2 class="p-3" align = center>Ohm törvénye</h2><br><br><br></u>'
                        +'<h2 class="p-3">Elektromos feszültség:</h2>'
                        +'<ul>'
                            +'<li>'
                                +'Az elektromos ellenállás mérése'
                            +'</li><br>'
                            +'<li>'
                            +'Az alkalmazott feszültség (U) és az áramerősség (I) közötti arányállandó ismert neve az adott vezető elektromos ellenállása.'
                            +'</li><br>'
                            +'<li>'
                                +'Az elektromos ellenállás olyan fizikai méret, amely azt mutatja meg, hogy egy vezető mennyire ellenáll az elektromos áram áthaladásának.'
                            +'</li><br>'
                            +'<li>'
                                +'A vezető elektromos ellenállása (R) egy skalár mennyiség, amely egy vezető végpontjainak alkalmazott feszültsége (U) és az áram (I) hányadosával egyenlő, amikor a vezető hőmérséklete állandó marad.'
                            +'</li><br>'
                            +'<li>'
                                +'Az elektromos ellenállás jellemzése fizikai méretként:<br><br>'
                                +'R = Elektromos feszültség / Elektromos áramerősség = U / I<br><br>'
                                +'[R]<sub>SI</sub> = [U]<sub>SI</sub> / [I]<sub>SI</sub> = V / A = Ω(ohm)<br><br>'
                                +'Az elektromos ellenállás függése a vezető anyagától és méretétől:<br><br>'
                                +'R = ρ ∙ (l / s) <br><br>'
                                +'l - vezető hossza<br>'
                                +'S - vezető keresztmetszetének területe<br>'
                                +'ρ - vezető anyagának ellenállása:<br><br>'
                                +'[ρ]<sub>SI</sub> = 1Ω ∙ m'
                            +'</li>'
                        +'</ul>'
                        +'<h2 class="p-3">Ohm törvénye egy áramkör szakaszára:</h2>'
                        +'<ul>'
                            +'<li>'
                                +'A rezisztorn áthaladó áramerősség attól függ:<br><br>'
                                +'1) A rezisztorn végpontjain mért feszültségtől: minél magasabb a rezisztornál mért feszültség, annál magasabb az áramerősség, amely átáramlik rajta.<br><br>'
                                +'2) Az elektromos ellenállástól: minél nagyobb a rezisztornál mért ellenállás, annál kisebb az átáramló áramerősség.'
                            +'</li><br>'
                            +'<li>'
                                +'Ohm törvénye egy áramkör szakaszára:<br><br>'
                                +'“Ha egy áramkör szakaszának végpontjaira egy feszültséget (U) alkalmaznak, akkor az ezen áramkör szakaszon átáramló elektromos áramerősség (I) közvetlen arányban van az alkalmazott elektromos feszültséggel (U).”<br><br>'
                                +'I = U / R'
                            +'</li>'
                        +'</ul>'
                        +'<h2 class="p-3">Ohm törvénye az egész áramkörre:</h2>'
                        +'<ul>'
                            +'<li>'
                                +'Ohm törvénye az egész áramkörre:<br><br>'
                                +'“Egy egyszerű áramkörben az elektromos áramerősség közvetlen arányban áll a forrás elektromotoros erejével (E) és fordítottan arányos az áramkör teljes ellenállásával (R + r).“<br><br>'
                                +'I = E / (R + r)<br><br>'
                                +'1) Az Ohm törvény általában érvényes a kémiai forrásokra, mert alacsony a belső ellenállásuk, de más forrásokra is alkalmazható.<br><br>'
                                +'2) Ha a külső ellenállás (R) nagyon kicsi értékeket vesz fel, például a forrás rövidzárlatosodásával, azaz ha R = 0, akkor a forrásból kifolyó áramerősség maximális lesz:<br><br>'
                                +'I<sub>sc</sub> = E / r (rövidzárlatos áram)<br><br>'
                                +'Ez nem kívánatos, mert a nagy áramerősségek károsíthatják a rendszert, és a forrás gyorsan elfogy.'
                            +'</li>'
                        +'</ul>'
                        +'<h2 class="p-3">Ohm törvénye egy áramkör szakaszára:</h2>'
                        +'<ul>'
                            +'<li>'
                                +'Elektromos hálózatok elemzése (elágazó áramkörök):<br><br>'
                                +'1. <b>Áramkör csomópontja</b> legalább három elektromos vezeték metszéspontját jelenti.<br><br>'
                                +'2. <b>Áramkör oldala</b> az az áramkör szakasz, amely két egymást követő csomópont között helyezkedik el, úgy, hogy ugyanazon elemein ugyanaz az elektromos áramerősség áramlik át.<br><br>'
                                +'3. <b>Áramkör huroka</b>'

                    //Legea lui Kirchhoff
                    +'<a name="element_target2"></a>'
                    +'<br><br><br><br><u><h2 class="p-3" align = center>Kirchhoff törvénye</h2><br><br><br></u>'
                    +'<h2 class="p-3">Kirchhoff első törvénye:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'“Egy áramköri csomópontba be- és kifolyó áramerősségek algebrai összege nulla“.<br><br>'
                        +'</li>'
                    +'</ul>'
                    +'<h2 align = center>'
                        +'<img src ="img/lege1.png" width = 240>'
                    +'</h2>'
                    +'<ul>'
                        +'Az I<sub>k</sub> áramerősségek lehetnek pozitívak vagy negatívak, attól függően, hogy az áram hogyan halad át a csomóponton (bemenő vagy kimenő áram).<br><br>'
                        +'<li>'
                            +'Kirchhoff első törvényének egy másik megfogalmazása:<br><br>'
                            +'“Egy áramköri csomópontba bemenő áramerősségek algebrai összege megegyezik a csomópontból kimenő áramerősségek algebrai összegével“.'
                        +'</li>'
                    +'</ul>'
                    +'<h2 align = center>'
                        +'<img src ="img/lege1_alt.png" width = 240>'
                    +'</h2>'
                    +'<ul>'
                        +'I<sub>1</sub> + I<sub>2</sub> + I<sub>4</sub> = I<sub>3</sub> + I<sub>5</sub>'
                    +'</ul>'
                    +'<h2 class="p-3">Kirchhoff második törvénye:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'“Egy áramköri hurokban az elektromotoros erők algebrai összege egyenlő az áramköri elemeken mért feszültségek algebrai összegével“.'
                        +'</li>'
                    +'</ul>'
                    +'<h2 align = center>'
                        +'<img src ="img/lege2.png" width = 240>'
                    +'</h2>'
                    +'<ul>'
                        +'Az összegek tagjai lehetnek pozitívak vagy negatívak, a feszültség vagy áramerősség irányától függően az önkényesen választott hurok irányához viszonyítva.<br><br>'
                        +'m = egyszerű hurkok száma esetén m egyenlet írható fel Kirchhoff második törvénye alapján.'
                    +'</ul>'
                    +'<h2 class="p-3">Előjelkonvenciók:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Elektromotoros erő:<br><br>'
                            +' - pozitív előjellel vesszük, ha az áram iránya a forráson keresztül megegyezik az önkényesen választott hurok irányával : + E<br><br>'
                            +' - negatív előjellel vesszük, ha az áram iránya a forráson keresztül ellentétes az önkényesen választott hurok irányával : - E<br><br>'
                        +'</li><br>'
                        +'<li>'
                            +'Elektromos feszültség:<br><br>'
                            +' - pozitív előjellel vesszük, ha az áram iránya megegyezik az önkényesen választott hurok irányával (referencia irány): + I ∙ R<br><br>'
                            +' - negatív előjellel vesszük, ha az áram iránya ellentétes az önkényesen választott hurok irányával (referencia irány): - I ∙ R<br><br>'
                        +'</li>'
                    +'</ul>'

                    //Gruparea rezistoarelor și generatoarelor electrice
                    +'<a name="element_target3"></a>'
                    +'<br><br><br><br><u><h2 class="p-3" align = center>Az ellenállások és az elektromos generátorok csoportosítása</h2><br><br><br></u>'
                    +'<h2 class="p-3">Az ellenállások csoportosítása:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Bármely áramköri elem (elektromos generátor, izzó, ellenállás, motor, kapcsoló) kétféleképpen kapcsolható össze egy másikkal (azonos vagy különböző típusúval):<br><br>'
                            +'- Soros kapcsolás<br><br>'
                            +'- Párhuzamos kapcsolás<br><br>'
                            +'Egy csoport ellenállás helyettesíthető egyetlen ellenállással, amelyet ekvivalens ellenállásnak nevezünk. Ennek az ellenállása a csoportosítás megfelelő ellenállásainak megfelelője.'
                        +'</li><br>'
                        +'<li>'
                            +'Az ellenállások, amelyeken ugyanaz az áram folyik át, és amelyek az áramkör ugyanazon ágában találhatók, soros csoportosítást alkotnak, és az ekvivalens ellenállásuk R<sub>s</sub>.<br><br>'
                            +'A soros csoportosítás ekvivalens ellenállása egyenlő az egyes ellenállások összegével:<br><br>'
                            +'R<sub>s</sub> = R<sub>1</sub> + R<sub>2</sub>'
                        +'</li><br>'
                        +'<li>'
                            +'Az ellenállások, amelyek az áramkör két különböző ágában találhatók ugyanazon két csomópont között, és amelyeken ugyanaz a feszültség van a végükön, párhuzamos csoportosítást alkotnak, és az ekvivalens ellenállásuk R<sub>p</sub>.<br><br>'
                            +'A párhuzamos csoportosítás ekvivalens ellenállásának reciproka egyenlő az egyes ellenállások reciprokának összegével:<br><br>'
                            +'1 / R<sub>p</sub> = (1 / R<sub>1</sub>) + (1 / R<sub>2</sub>)'
                        +'</li>'
                    +'</ul>'
                    +'<h2 class="p-3">Azonos generátorok csoportosítása:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Több forrás csoportosításával egy „ekvivalens forrás” keletkezik, amelynek ekvivalens elektromotoros ereje és ekvivalens belső ellenállása van.'
                        +'</li><br>'
                        +'<li>'
                            +'Az azonos források soros csoportosításánál: az elektromotoros erő a soros csoportosításnál:<br><br>'
                            +'E<sub>s</sub> = n · E'
                        +'</li><br>'
                        +'<li>'
                            +'Az azonos generátorok soros csoportosításának belső ellenállása:<br><br>'
                            +'r<sub>s</sub> = n · r'
                        +'</li><br>'
                        +'<li>'
                            +'Az azonos források párhuzamos csoportosításánál: az elektromotoros erő a párhuzamos csoportosításnál:<br><br>'
                            +'E<sub>p</sub> = E<sub>1</sub> = E<sub>2</sub> = … = E<sub>n</sub>'
                        +'</li><br>'
                        +'<li>'
                            +'Az azonos generátorok párhuzamos csoportosításának belső ellenállása:<br><br>'
                            +'r<sub>p</sub> = r / n'
                        +'</li>'
                    +'</ul>'

                    //Eneriga si puterea electrica
                    +'<a name="element_target4"></a>'
                    +'<br><br><br><br><u><h2 class="p-3" align = center>Elektromos energia és teljesítmény</h2><br><br><br></u>'
                    +'<h2 class="p-3">Elektromos energia:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Az elektromos energia (jele: W) egy forrás által végzett mechanikai munka, amely a töltést (q) egy időintervallum alatt (Δt) mozgatja a kör átmérőjén keresztül:<br><br>'
                            +'W = L = E ∙ q<br><br>'
                            +'De q = I ∙ Δt (az áramerősség képletéből)<br><br>'
                            +'W<sub>tot</sub> = E ∙ I ∙ Δt (az egész áramkörben felhasznált energia)<br><br>'
                            +'W<sub>ext</sub> = U ∙ I ∙ Δt (a külső áramkörben felhasznált energia)<br><br>'
                            +'W<sub>int</sub> = u ∙ I ∙ Δt (a belső áramkörben felhasznált energia)<br><br>'
                            +'W = U ∙ I ∙ Δt = R ∙ I<sup>2</sup> ∙ Δt = (U<sup>2</sup> / R) ∙ Δt<br><br>'
                            +'[W]<sub>SI</sub> = J(joule)'
                        +'</li><br>'
                    +'</ul>'
                    +'<h2 class="p-3">Elektromos teljesítmény:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Az elektromos teljesítmény (P) egy fizikai mennyiség, amely az elektromos energia átadásának sebességét méri egy időegység alatt.<br><br>'
                            +'P = W / Δt = U ∙ I = R ∙ I<sup>2</sup> = (U<sup>2</sup> / R)<br><br>'
                            +'[P]<sub>SI</sub> = J / s = W(watt)'
                        +'</li><br>'
                        +'<li>'
                            +'Az elektromos generátor teljesítménye, t.e.m. E és belső ellenállás r:<br><br>'
                            +'P = W<sub>tot</sub> / Δt = E ∙ I = (R + r) ∙ I<sup>2</sup> = E<sup>2</sup> / (R + r)'
                        +'</li>'
                    +'</ul>'
                    +'<h2 class="p-3">Elektromos hatásfok:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Az elektromos generátor energiáját a külső áramkörnek szolgáltatja (W<sub>hasznos</sub> - hasznos energia = külső energia), a maradék energiát a generátor belseje kapja (belső energia).<br><br>'
                            +'Az elektromos hatásfok egy vevő (fogyasztó) esetében az alábbi képlettel adható meg:<br><br>'
                            +'η = W<sub>hasznos</sub> / W<sub>összes</sub> = P<sub>külső</sub> / P<sub>összes>'
                        +'</li><br>'
                        +'<li>'
                            +'Egy egyszerű áramkör esetében, amely egy t.e.m. E és belső ellenállás r forrásból, valamint egy R ellenállásból áll, az elektromos hatásfok az alábbi képlettel adható meg:<br><br>'
                            +'η = (U ∙ I) / (E ∙ I) = U / E = R / (R + r)'
                        +'</li><br>'
                        +'<li>'
                            +'Az ellenállás által kifejtett teljesítmény akkor a legnagyobb, amikor:<br><br>'
                            +'P (R) = E<sup>2</sup> / (4 ∙ r)<br><br>'
                            +'azaz amikor:<br><br>'
                            +'R = r'
                        +'</li>'
                    +'</ul>'
                    +'<h2 class="p-3">Joule törvénye:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Az elektromos áram hőhatása (Joule-effektus) abban áll, hogy az áram egy vezetőn való áthaladása során az felmelegszik.<br><br>'
                            +'A Joule törvénye mennyiségileg méri a hőmennyiséget, amely az elektromos áram egy vezetőn való áthaladásakor felszabadul.'
                        +'</li><br>'
                        +'<li>'
                            +'Joule törvénye:<br><br>'
                            +'Az elektromos áram egy vezetőn való áthaladásakor felszabaduló hő Q arányos a vezető ellenállásával R, az áramerősség négyzetével I<sup>2</sup> és az időintervallummal Δt, amely alatt az áram átfolyik rajta.<br><br>'
                            +'Q = R ∙ I<sup>2</sup> ∙ Δt'
                        +'</li>'
                    +'</ul>'),

        //teorieOptica.html
        "teorieOpticaTitle": "Optika elmélet",
        "teorieOptica": ('<u>' +'<h2 class="p-3" align = center>Geometriai optika</h2><br><br><br>' +'</u>'
                        +'<h2 class="p-3">Fényvisszaverődés:</h2>'
                        +'<ul>'
                            +'<li>'
                                +'FERMAT ELVE:<br><br>'
                                +'“A fény két pont között terjed úgy, hogy az optikai útja, és így az AB távolság megtételéhez szükséges idő minimális legyen.”<br><br>'
                                +'A fényvisszaverődés olyan jelenség, amelyben a fény visszatér az első közegbe, megváltoztatva terjedési irányát, amikor más közeggel találkozik (a két különböző optikai közeg határán).'
                            +'</li><br>'
                            +'<li>'
                                +'A visszaverődés törvényei:<br><br>'
                                +'- I. törvény:<br><br>'
                                +'Az beesési sugár, a merőleges és a visszavert sugár ugyanabban a síkban vannak (ugyanazon a síkon vannak).<br><br>'
                                +'- II. törvény:<br><br>'
                                +'Az beesési szög (i) egyenlő a visszaverődési szöggel (r).'
                            +'</li><br>'
                            +'<li>'
                                +'Síktükrök<br><br>'
                                +'A tükrök sima és fényes testek, amelyekben a fény visszaverődik.<br><br>'
                                +'A síktükrök sík (egyenes) felületűek, és ezeket mindennap otthonunkban és mindennap nézzük.<br><br>'
                                +'Itt van a szimbóluma (a hátsó rész, amely nem tükrözi a fényt, csíkozott):<br><br>'
                            +'</li>'
                        +'</ul>'
                            +'<h2 align = center>'
                                +'<img style = "border: 2px solid #1b4188" src ="img/optica1.png" width = 100>'
                            +'</h2><br>'
                            +'<ul>'
                                +'<li>'
                                    +'Egy tárgy képének kialakítása síktükörben:<br><br>'
                                    +'- Rajzoljunk egy függőleges síktükröt.<br><br>'
                                    +'- Az optikai főtengelyt húzzuk a tükör közepén, amely merőleges a tükörre (vízszintesen).<br><br>'
                                    +'- Rajzoljuk le az AB tárgyat egy nyíllal a tükör előtt.<br><br>'
                                    +'- Az első sugár a tárgy csúcsából (B) merőlegesen érkezik a tükörre, és pontozottan továbbhúzódik a tükör mögött (mivel merőleges a tükör felületére, nem változtatja meg terjedési irányát a visszaverődéskor).<br><br>'
                                    +'- A második sugár az oblikus tárgy csúcsából (B) érkezik a tükörre, és lehúzzuk az erre visszaverődött sugárt, a visszaverődés törvényeit követve (a beütési szög egyenlő a visszaverődési szöggel).<br><br>'
                                    +'- A visszaverődött sugárt továbbhúzzuk pontozottan, amíg el nem éri az első sugár hosszabbítását. Az ő találkozási pontjukat B\'-vel jelöljük, ami a tárgy képének csúcsát jelöli a tükörben.<br><br>'
                                    +'- B\'-ből merőlegesen lehúzzuk az optikai főtengelyre, és a merőleges talppontját A\'-val jelöljük, ami a tárgy képének alapját jelöli a tükörben. Az iránytű hegyét B\'-re helyezzük.'
                                +'</li>'
                            +'</ul>'
                        +'<h2 align = center>' +
                        '<img style = "border: 2px solid #1b4188" src ="img/optica2.png" width = 300>' +
                    '</h2><br>' +
                    '<ul>' +
                        '<li>' +
                            'A\'B\' kép jellemzői:<br><br>' +
                            '- Virtuális, mert azon a ponton képződik, ahol a tükrözött sugarakat tovább hosszabbítjuk (a tükör mögött)<br><br>' +
                            '- Egyenes<br><br>' +
                            '- Egyenlő az AB tárggyal (y<sub>1</sub> = y<sub>2</sub>)<br>' +
                            '- A tárgy és a kép szimmetrikusak a tükörrel szemben<br>' +
                            'Síktükör képlet: x<sub>2</sub> = -x<sub>1</sub>, mivel R → ∞ (nincsenek fókuszok)<br><br>' +
                            'A lineáris transzverzális nagyítás :	β = 1' +
                        '</li>' +
                    '</ul>' +
                    '<ul>' +
                        '<li>' +
                            'A tárgy (A\'B\') jellemzése a síktükörben:<br><br>' +
                            'Az AB tárgy és az A\'B\' kép szimmetrikusak a tükörrel szemben (a kép ugyanolyan távolságra képződik a tükörtől, mint a tárgy).<br><br>' +
                            'A kép virtuális, mert azon a ponton képződik, ahol a tükrözött sugarakat tovább hosszabbítjuk (nem lehet egy képernyőn vagy fényképfilmeken megörökíteni).<br><br>' +
                            'Az A\'B\' kép ugyanolyan nagy, mint az AB tárgy.' +
                        '</li><br>' +
                    '</ul>' +
                    '<h2 class="p-3">Gömbi tükrök:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'A gömbi tükrök gömbök részei (gömbkalapok), amelyek visszaverik a rájuk eső fényt.<br><br>' +
                            'A gömbi tükrök osztályozása: <br><br>' +
                            'a) A domború tükrök a gömbfelület belső, kiálló részével visszatükrözik a fényt (azaz a gömb belsejében visszaverődő fénytörő felülettel rendelkeznek). Ezek egy párhuzamos fényfascikulumot egy konvergensé alakítanak át.' +
                        '</li>' +
                    '</ul>'
                    +'<h2 align = center>' +
                    '<img style = "border: 2px solid #1b4188" src ="img/optica3.png" width = 300>' +
                '</h2><br>' +
                '<ul>' +
                    '<li>' +
                        'b) A domború tükrök a gömbfelület külső, kiálló részével visszatükrözik a fényt (azaz a gömb külső részén visszaverődő fénytörő felülettel rendelkeznek). Ezek egy párhuzamos fényfascikulumot egy divergense alakítanak át.' +
                    '</li>' +
                '</ul>' +
                '<h2 align = center>' +
                    '<img style = "border: 2px solid #1b4188" src ="img/optica4.png" width = 300>' +
                '</h2><br>' +
                '<ul>' +
                    '<li>' +
                        'Egy gömbi tükörben történő kép kialakítása<br><br>' +
                        'Ahhoz, hogy egy tárgy képét egy gömbi tükörben kialakítsuk, legalább két sugarat kell vezetnünk:<br><br>' +
                        'Az A tárgy csúcsából egy egyeneset kell vezetni, amely párhuzamos az optikai tengellyel, amíg el nem éri a tükörfelületet, és onnan visszaverődik a fókuszon keresztül.<br><br>' +
                        'Az A tárgy csúcsából egy egyeneset kell vezetni a görbület középpontjáig, amíg keresztezi az első sugarat (ez ugyanabba az irányba tükröződik vissza).<br><br>' +
                        'A két sugarat tovább kell hosszabbítani, amíg össze nem érnek. Az ő kereszteződési pontjuk az ábra csúcsa, A\'. Erről a pontból egy merőlegeset kell vezetni az optikai tengelyre. A merőleges talpa, B\', a képzett kép alapja.' +
                    '</li>' +
                '</ul>' +
                '<h2 align = center>' +
                    '<img style = "border: 2px solid #1b4188" src ="img/optica5.png" width = 300>' +
                '</h2><br>' +
                '<ul>' +
                    '<li>' +
                        'A gömbi tükrök képlete:<br> (1 / x<sub>2</sub>) + (1 x<sub>1</sub>) = 1 / f = 2 / R<br><br>' +
                        'A lineáris transzverzális nagyítás:<br>' +
                        'β = y<sub>2</sub> / y<sub>1</sub> = - x<sub>2</sub> / x<sub>1</sub>' +
                    '</li>' +
                '</ul>' +
                '<ul>' +
                    '<li>' +
                        'Egy tárgy képe egy domború tükörben attól függ, hogy milyen távolságra van a tárgytól a tükör.' +
                    '</li><br>' +
                    '<li>' +
                        'A tükör típusa:<br><br>' +
                        '- Domború:<br>' +
                        '|x<sub>1</sub>| > 2|f| - Valós - Kisebbített - Fordított<br>' +
                        '|x<sub>1</sub>| = 2|f| - Valós - Egyenlő - Fordított<br>' +
                        '2|f| > |x<sub>1</sub>| > |f| - Valós - Nagyított - Fordított<br>' +
                        '|x<sub>1</sub>| < |f| - Virtuális - Nagyított - Egyenes<br><br>' +
                        '- Domború:<br>' +
                        'Bármely |x<sub>1</sub>| - Virtuális - Kisebbített - Egyenes' +
                    '</li><br>' +
                '</ul>' +
                '<h2 class="p-3">Fénytörés:</h2>' +
                '<ul>' +
                    '<li>' +
                        'A fény törvényei:<br><br>' +
                        'Egy átlátszó közeg abszolút törésmutatója (jelölve n) a fény sebességének (c) és a közegben való fénysebesség arányának a reciproka.<br><br>' +
                        'n = c / v<br><br>' +
                        'A fénytörés az a jelenség, amikor a fény iránya megváltozik, amikor áthalad két különböző átlátszó közeg határának felületén.' +
                    '</li><br>' +
                    '<li>' +
                        'Fénytörés törvényei<br><br>' +
                        'Fénytörés I. törvénye:<br>' +
                        'Az incidens sugár (SI), a határfelülethez normális sugár (NI), és a tört sugár (IR\') azonos síkban vannak.<br><br>' +
                        'Fénytörés II. törvénye:<br>' +
                        'Az incidencia szög (i) és a törési szög (r\') sinuszának aránya megegyezik a második közeg abszolút törésmutatójának és az első közeg abszolút törésmutatójának arányával:<br><br>' +
                        'sin i / sin r\' = n<sub>2</sub> / n<sub>1</sub> = n<sub>21</sub><br><br>' +
                        'n<sub>21</sub> = a második közeg abszolút törésmutatója az elsőhöz képest' +
                    '</li><br>' +
                    '<li>' +
                        'Fénytörés következményei:<br><br>' +
                        'A fénytörés következményei a törött sugár irányának megváltozása miatt jönnek létre az incidens sugárhoz képest, megváltoztatva a vízben lévő tárgyak képét:<br><br>' +
                        '- Egy vízben lévő test a víz felszínén megtörtnek tűnik, mintha a test vízbeli része nem folytatódna a levegőbeli részével.<br><br>' +
                        '- Egy vízben lévő testet a saját szemünk felszínen magasabbnak lát, mint amilyen valójában. Így a tiszta vizek sokkal mélyebbeknek tűnnek, mint amilyenek valójában.<br><br>' +
                        '- A vízben lévő tárgyak nagyobbnak tűnnek, mint amilyenek valójában, mivel a víz egy nagyítóként működik.<br><br>'+
                        '</li>'+
                    '</ul>'
                    +'<h2 class="p-3">Optikai prizma:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Monokromatikus fénytörés az optikai prizmában:<br><br>' +
                            'A prizma egy átlátszó közeg (n törésmutatóval) két sík felülettel, amelyek között egy diédert szög található, amit prizma szögnek (A) nevezünk.<br><br>' +
                        '</li>' +
                    '</ul>' +
                    '<h2 align = center>' +
                        '<img style = "border: 2px solid #1b4188" src ="img/optica6.png" width = 300>' +
                    '</h2><br>' +
                    '<ul>' +
                        '<li>' +
                            'Amikor az incidens sugár (SI) az AB síkra esik, megtörik (az első tört sugár II\'), közeledve a normál NN\'-hez (n<sub>levegő</sub> < n<sub>prizma</sub>), a törvény szerint:<br>' +
                            'sin i = n ∙ sin r<br><br>' +
                            'Az II\' sugár, amikor az AC síkra esik a prizma, az I\' pontban tör, távolodva a normáltól NN\' (n<sub>prizma</sub> > n<sub>levegő</sub>), a törvény szerint:<br>' +
                            'n ∙ sin r\' = sin i\'<br><br>' +
                            'Az incidens sugár (SI) és a kilépő sugár (I\'R) közötti szög az úgynevezett deviációs szög (δ), amelynek az értéke:<br>' +
                            'δ = i + i\' – (r + r\') = i + i\' – A<br><br>' +
                        '</li>' +
                    '</ul>' +
                    '<ul>' +
                        '<li>' +
                            'Az emergencia feltételeinek megállapításához (azaz az I\' sugarat kell kikerülni a prizmából), nem szabad, hogy a II\' sugarat teljes reflexió érje el az AC síkon, vagyis:<br>' +
                            'r\' ≤ l (határszög).<br><br>' +
                            'Mivel A = r + r\' → r\' = A – r<br>' +
                            'r ≥ A – l → sin r ≥ sin (A – l)<br><br>' +
                            'De az első törvény szerint:<br>' +
                            'sin r = sin i / n <br>' +
                            'sin i / n >= sin (A - l)<br><br>' +
                        '</li>' +
                        '<li>' +
                            'Az incidencia maximális szöge<br>' +
                            'i = 90° → sin 90° = 1 <br>' +
                            '1 / n >= sin(A - l)<br>' +
                            'sin l = 1 / n<br>' +
                            'sin l >= sin(A-l) vagy A <= 2 ∙ 1<br>' +
                            'sin l = 1 / n → 1 = arc sin 1 / n<br>' +
                        '</li>' +
                        '<li>' +
                            'Egy sugarat ki lehet hozni a prizmából, ha a refringens szöge (A) teljesíti a következő feltételt:<br>' +
                            'A ≤ 2 ∙ arc sin 1/n<br><br>' +
                            'Ha a prizma A > 2 ∙ arc sin 1/n, akkor az összes sugarat teljes reflexióval fognak tükrözni az AC síkra.' +
                        '</li><br>' +
                        '<li>' +
                            'Amikor az incidencia szöge (i) és a deviációs szög (δ) változik, mindig nagyobb értékeket vesz fel, mint egy bizonyos minimális érték (δ<sub>m</sub>).<br><br>' +
                            'Amikor i = i\' és r = r\', akkor kapjuk meg a minimális deviációs szög értékét (δ<sub>m</sub>):<br>' +
                            'δ<sub>m</sub> = 2 ∙ i – A<br><br>' +
                            'Ha kísérleti úton meghatározzuk a minimális deviációs szöget, akkor a prizma törésmutatóját a következő képlettel meghatározhatjuk:<br>' +
                            'n = sin((A + <sub>m</sub>) / 2) / sin (A / 2)' +
                        '</li><br>' +
                    '</ul>'
                    +'<h2 class="p-3">' + 'Lencsék típusai:' + '</h2>' + 
                    '<ul>' + 
                        '<li>' + 
                            'A lencsék átlátszó testek, amelyek legalább egy gömbfelülettel rendelkeznek.<br><br>' + 
                            'A lencsék elemzése:<br><br>' + 
                            'A fő optikai tengely, amelyet a lencse közepén húznak.<br><br>' + 
                            'A lencse optikai központja (O), amely a lencse és a fő optikai tengely metszéspontja.<br><br>' + 
                            'Két fókuszpont, amelyek az optikai központ mindkét oldalán azonos távolságra vannak.<br><br>' + 
                            'Az O bal oldalán lévő fókuszpontot negatív fókuszpont / tárgy (F<sub>1</sub>) néven ismerjük el, mert a negatív számok tengelyén helyezkedik el.<br><br>' + 
                            'Az O jobb oldalán lévő fókuszpontot pozitív fókuszpont / kép (F<sub>2</sub>) néven ismerjük el, mert a pozitív számok tengelyén helyezkedik el.<br><br>' + 
                            'Az O-tól kettőzött távolságra levő dioptriumok központi pontjai (C<sub>1</sub> és C<sub>2</sub>) a lencse peremén, O-tól mindkét oldalon, egyenlő távolságra vannak OF-től.' + 
                        '</li>' + 
                    '</ul>' + 
                    '<h2 class="p-3">' + 'A lencsék osztályozása:' + '</h2>' + 
                    '<ul>' + 
                        '- <b>Konvergens lencsék</b> (konvexek) azok a lencsék, amelyek egy párhuzamos fénysugarat konvergens sugarúvá alakítanak. Ezek a lencsék a pozitív fókuszponton keresztül törnek és ezért pozitív lencséknek is nevezik őket. Nagyítják a képet. Középen vastagabbak és a végük felé vékonyabbak.<br><br>' + 
                        '- <b>Divergens lencsék</b> (konkáv) azok a lencsék, amelyek egy párhuzamos fénysugarat divergens sugarúvá alakítanak. Ezek a lencsék a negatív fókuszponton keresztül törnek és ezért negatív lencséknek is nevezik őket. Kicsinyítik a képet. A végük felé vastagabbak és középen vékonyabbak.<br><br>' + 
                        '<li>' + 
                            'Egy objektum képének kialakítása lencsékben: <br><br>' + 
                            'Egy objektum képének kialakításához egy konvergens lencsében két sugarat kell húznunk:<br><br>' + 
                            '- Rajzoljuk meg a konvergens lencse szimbólumát.<br>' + 
                            '- Húzzuk meg a fő optikai tengelyét a közepén.<br>' + 
                            '- Helyezzük el a lencse elemeit (O, F<sub>1</sub>, F<sub>2</sub>, C).<br>' + 
                            '- Rajzoljuk meg az objektumot (AB) a lencse előtt (bal oldalon) egy nyíllal.<br>' + 
                            '- Húzzunk egy sugarat, amely a tárgy hegyétől (B) párhuzamos az optikai tengellyel, amíg el nem éri a lencsét, majd vezessük át a pozitív fókuszponton (F<sub>2</sub>), mivel a konvergens lencse a pozitív fókuszponton keresztül törli a fényt.<br>' + 
                            '- Húzzunk egy második sugarat a tárgy hegyétől, amely áthalad a lencse optikai központján (O). Ezeket a sugarakat hosszabbítsuk meg, amíg nem metszik egymást. A metszéspontba helyezzük az B\', ami az AB tárgy képének csúcsa (im).<br>' + 
                            '- Az B\'-ből húzzunk egy merőlegest az optikai tengelyre, lábát jelöljük A\'-val, ami az A\'B\' alapja.<br>' + 
                            '- Helyezzük a nyíl hegyét az B\'-be, és így kapjuk meg az objektum AB képét a konvergens lencsében.'+
                        '</li><br></br>'+
                        '<li>' + 
                            'A tárgy távolságától függően háromféle képet kapunk a konvergens lencsében.<br><br>' + 
                            'I. Ha a tárgy az (-∞) és C tartományban van, akkor a tárgy képe a következő jellemzőkkel rendelkezik:<br>' + 
                            '- Kisebb, mint az AB tárgy.<br>' + 
                            '- Fejjel lefelé fordított.<br>' + 
                            '- Valós (a törött sugarak metszéspontjában képződik, vetítővászonra vetíthető).<br><br>' + 
                            'II. Ha a tárgy a C és F1 tartományban van, akkor a tárgy képe a következő jellemzőkkel rendelkezik:<br>' + 
                            '- Nagyobb, mint az AB tárgy.<br>' + 
                            '- Fejjel lefelé fordított.<br>' + 
                            '- Valós (a törött sugarak metszéspontjában képződik, vetítővászonra vetíthető).<br><br>' + 
                            'III. Ha a tárgy az F1 és O tartományban van, akkor a tárgy képe a következő jellemzőkkel rendelkezik:<br>' + 
                            '- Nagyobb, mint az objektum.<br>' + 
                            '- Egyenes<br>' + 
                            '- Virtuális (a törött sugarak hosszabbításának metszéspontjában képződik, nem vetíthető vetítővászonra).' + 
                        '</li><br>' + 
                        '<li>' + 
                            'A tárgy képének kialakításához egy divergens lencsében két sugarat kell húznunk:<br><br>' + 
                            '- Rajzoljuk meg a divergens lencse szimbólumát.' + 
                            '- Húzzuk meg a fő optikai tengelyét a közepén.' + 
                            '- Helyezzük el a lencse elemeit (O, F<sub>1</sub>, F<sub>2</sub>, C).<br>' + 
                            '- Rajzoljuk meg a tárgyat (AB) a lencse előtt (bal oldalon) egy nyíllal.<br>' + 
                            '- Húzzunk egy sugarat, amely a tárgy hegyétől (B) párhuzamos az optikai tengellyel, amíg el nem éri a lencsét, majd vezessük át a negatív fókuszponton (F<sub>1</sub>), mivel a divergens lencse a negatív fókuszponton keresztül törli a fényt.<br>' + 
                            '- Húzzunk egy második sugarat a tárgy hegyétől, amely áthalad a lencse optikai központján (O). Ezeket a sugarakat hosszabbítsuk meg, amíg nem metszik egymást. A metszéspontba helyezzük az B\', ami az AB tárgy képének csúcsa (im).<br>' + 
                            '- Az B\'-ből húzzunk egy merőlegest az optikai tengelyre, lábát jelöljük A\'-val, ami az A\'B\' alapja.<br>' + 
                            '- Helyezzük a nyíl hegyét az B\'-be, és így kapjuk meg az AB tárgy képét a konvergens lencsében.<br>' + 
                        '</li><br>' + 
                        '<li>' + 
                            'A divergens lencsében az objektumtól való távolságtól függetlenül ugyanazokat a jellemzőket kapjuk a képnek:<br><br>' + 
                            '- Kisebb, mint az objektum.<br>' + 
                            '- Egyenes<br>' + 
                            '- Virtuális (a törött sugarak hosszabbításának metszéspontjában képződik, nem vetíthető vetítővászonra).' + 
                        '</li>'+                        
                    '</ul>'+
                    '<h2 class="p-3">A vékony lencsék formulái:</h2>'+
                    '<ul>'+
                        '<li>'+
                            'Konvenciók aláírása:<br><br>'+
                            'x<sub>1</sub> = távolság az AB objektumtól a lencséig, mindig negatív, mert a negatív számok tengelyén van.<br><br>'+
                            'x<sub>2</sub> = távolság az A\'B\' képtől a lencséig, pozitív, ha a kép valós (a lencse mögött, a pozitív számok tengelyén) és negatív, ha a kép virtuális (a lencse előtt, a negatív számok tengelyén).<br><br>'+
                            'y<sub>1</sub> = AB objektum magassága, pozitív, ha az objektum a fő optikai tengely felett van, és negatív, ha az objektum a fő optikai tengely alatt van.<br><br>'+
                            'y<sub>2</sub> = A\'B\' kép magassága, pozitív, ha a kép egyenes (a fő optikai tengely felett) vagy negatív, ha a kép fordított (a fő optikai tengely alatt).<br><br>'+
                            'A fókusztávolságot pozitívnak tekintik (f > 0) a konvergens lencsék esetén, és negatívnak (f < 0) a divergens lencsék esetén.'+
                        '</li><br>'+
                        '<li>'+
                            'A vékony lencsék alapvető képlete:<br><br>'+
                            '(1 / x<sub>2</sub>) -(1 / x<sub>1</sub>) = 1 / f'+
                        '</li><br>'+
                        '<li>'+
                            'A transzverzális lineáris nagyítás (β) egy dimenzió nélküli fizikai méret, amely a kép magasságának és az objektum magasságának arányát jelöli.<br><br>'+
                            'β = y<sub>2</sub> / y<sub>1</sub> = x<sub>2</sub> / x<sub>1</sub>'+
                        '</li><br>'+
                        '<li>'+
                            'A lencse konvergenciája (C) egy fizikai méret, amely a fókusztávolság inverze (f) egyenlő.<br><br>'+
                            'C = 1 / f<br><br>'+
                            '[C]<sub>SI</sub> = m<sup>-1</sup> = δ(diópteria)<br>'+
                            'A konvergens lencse esetén C > 0 <br><br>'+
                            'A divergens lencse esetén C < 0'+
                        '</li><br>'+
                    '</ul>'+
                    '<h2 class="p-3">Lencse társulatok:</h2>'+
                    '<ul>'+
                        '<li>'+
                            'Egy olyan rendszer, amely két vagy több lencsét tartalmaz, és azoknak azonos fő optikai tengelye van, <b>lencsetársulatnak</b> nevezhető.<br><br>'+
                            'Az első lencse által létrehozott kép válik a következő lencse objektumává, és így tovább egészen az utolsó lencséig, amely a végső képet adja.<br><br>'+
                        '</li>'+
                        '<li>'+
                            'A leggyakrabban használt rendszer az azonosított lencsekombináció (akoplett), ahol a lencsék közötti távolság (d) nulla, és ugyanaz az optikai középpont és a lencse képfókusza (F<sub>2</sub>) az első lencse (L) objektumfókuszával (F\'<sub>2</sub>) egybeesik.<br><br>'+
                            'Egy ilyen rendszer esetén, amely k lencséből áll:<br><br>'+
                            '1. A lencsetársulat fókusztávolságának fordítottja (F) egyenlő a lencsék fókusztávolságának fordított összegével:<br><br>'+
                            '1 / F = (1 / f<sub>1</sub>) + (1 / f<sub>2</sub>) + ... + (1 / f<sub>k</sub>)<br><br>'+
                            '2. A rendszer összkonvergenciája (C) egyenlő a komponens lencsék összkonvergenciájával:<br><br>'+
                            'C = C<sub>1</sub> + C<sub>2</sub> +...+ C<sub>k</sub><br><br>'+
                            '3. A rendszer transzverzális lineáris nagyítása (β) egyenlő a komponens lencsék transzverzális nagyításainak szorzatával:<br><br>'+
                            'β = β<sub>1</sub> ∙ β<sub>2</sub> ∙… β<sub>k</sub><br><br>'+
                            'Ha x\'2 jelöli a végső kép távolságát a második lencsétől, L2-től, és x1 a távolság az objektumtól az első lencséig, L1-ig, akkor az alábbi összefüggés áll fenn:<br><br>'+
                            '(1 / x\'<sub>2</sub>) - (1 / x<sub>1</sub>) = (1 / f<sub>1</sub>) + (1 / f<sub>2</sub>) = 1 / f = C<sub>1</sub> + C<sub>2</sub> = C<br><br>'+
                        '</li>'+
                        '<li>'+
                            'Egy másik lencseszerkezet a teleszkóp, amely egy afokális rendszer, ahol a kimenő (emergent) fókuszált függvény (a kiinduló párhuzamos függvényből származik) továbbra is párhuzamos marad. Az első lencse képének fókusza (F<sub>2</sub>) megegyezik a második lencse tárgyfókuszával (F\'<sub>1</sub>).<br><br>'+
                            '1. A lencsék közötti távolság:<br><br>'+
                            'd = f<sub>1</sub> + f<sub>2</sub><br><br>'+
                            '2. A transzverzális lineáris nagyítás:<br><br>'+
                            'β = y<sub>2</sub> / y<sub>1</sub> = - f<sub>2</sub> / f<sub>1</sub><br><br>'+
                            'Az első lencse (L<sub>1</sub>) által alkotott köztes kép pozíciójának (x\'<sub>1</sub>) és a kép méretének meghatározásához alkalmazzuk az L<sub>1</sub>-hez tartozó konjugált pontok képletét:<br><br>'+
                            'x\'<sub>1</sub> = x<sub>2</sub>f<sub>1</sub> / (x<sub>1</sub> + f<sub>1</sub>)<br><br>'+
                            'y\'<sub>1</sub> = y<sub>1</sub>(x\'<sub>1</sub> / x<sub>1</sub>) = y<sub>1</sub> (f<sub>1</sub> / (x<sub>1</sub> + f<sub>1</sub>))<br><br>'+
                            'A lencsék közötti távolság ismeretében kiszámíthatjuk az első lencse által alkotott köztes kép (amelyet L<sub>1</sub> hoz létre) pozícióját az L<sub>2</sub> lencsehez képest:<br><br>'+
                            'd = x\'<sub>1</sub> + (- x<sub>2</sub>)<br><br>'+
                            'x<sub>2</sub> = x\'<sub>1</sub> - d<br><br>'+
                            'A második lencse (L<sub>2</sub>) által alkotott végső kép (x\'<sub>2</sub>) pozíciójának és méretének meghatározásához alkalmazzuk az L<sub>2</sub>-hez tartozó konjugált pontok képletét:<br><br>'+
                            'x\'<sub>2</sub> = x<sub>2</sub>f<sub>2</sub> / (x<sub>2</sub> + f<sub>1</sub>)<br><br>'+
                            'y\'<sub>2</sub> = y<sub>1</sub>(x\'<sub>2</sub> / x<sub>2</sub>) = y<sub>1</sub> (f<sub>2</sub> / (x<sub>2</sub> + f<sub>2</sub>))<br><br>'+
                        '</li>'+
                    '</ul>'+

                    //Optica ondulatorie
                    '<a name="element_target"></a>' +
                    '<br><br><br><br><u><h2 class="p-3" align = center>Hullámoptika</h2><br><br><br></u>' +
                    '<h2 class="p-3">Fénydiszperzió:</h2>' +
                    '<ul>' +
                        '<li>' +
                            '<b>OPTIKA</b> a fizika egy ága, amely a fény természetét, tulajdonságait és általános jelenségeit tanulmányozza.<br><br>' +
                            'Az optika három részből áll:<br><br>' +
                            '1. Geometriai optika, amely a fény sugarainak (a fény terjedési irányainak) viselkedésével foglalkozik, anélkül, hogy figyelembe venné a fény természetét. Ezen jelenségek közé tartozik a tükröződés, a törés és a teljes tükröződés.<br><br>' +
                            '2. Hullámoptika tanulmányozza az interferencia, a diffrakció és a polarizáció jelenségeit, amelyekben a fény hullámtermészetét hangsúlyozzák, pontosabban az elektromágneses hullámot.<br><br>' +
                            '3. Fotónikus (korpuszkuláris) optika vizsgálja a fotoelektromos hatást, a Compton-hatást, a fény kibocsátását és elnyelését stb., amelyek kiemelik a fény korpuszkuláris természetét (fotonok).<br><br>' +
                            'Az fehér fény diszperzióját először Newton tanulmányozta 1672-ben, amikor megfigyelte a fehér fény spektrumát egy optikai prizmán keresztül.<br><br>' +
                            'A törésmutató változásának jelensége hullámhosszfüggő fénydiszperziónak nevezhető.<br><br>' +
                            'Így amikor a fény áthalad egy prizmán, szivárvány színekké bontja a színes sugarakat.<br><br>' +
                            'Az elektromágneses hullámok mindegyike ugyanazzal a sebességgel terjed a vákuumban, függetlenül a hullámhossztól, így a vákuumot nem diszperzív közegnek nevezzük. Ha a prizma vákuumból lenne, egy fehér fényes sugarakból álló csokor nem bontódna szét, csak elhajlana a beesési iránytól a törés jelensége révén (azaz a terjedési irány megváltoztatása egy közegből a másikba történő áthaladáskor).<br><br>' +
                            'Az átlátszó közeg (víz, üveg, gyémánt stb.) törési mutatója (n-el jelölve) az a sebességarány, amelyet a fény sebessége vákuumban (c) és a megfelelő közegben (v) között kapunk.<br><br>' +
                            'n = c / v<br><br>' +
                            'c = a fény sebessége vákuumban = 300.000.000 m/s<br><br>' +
                            'v = a fény sebessége a megfelelő közegben<br><br>' +
                            'Az összes átlátszó közeg (víz, üveg, gyémánt stb.), amelynek a törési mutatója nagyobb, mint egy, diszperziót okoz a fényben.<br><br>' +
                            'De a törési mutató csak a monokromatikus fényre konstans.<br><br>' +
                            'A fehér fény esetében, amely hét különböző színű és különböző hullámhosszú sugárzásból áll, a törési mutató már nem konstans, hanem változik ezeknek a fényeknek a hullámhossza szerint.<br><br>' +
                            'Ha egy prizma törési mutatója változik, akkor a prizma különböző szögekben fogja megtörni ezeket a sugarakat.<br><br>' +
                            'Általánosan elmondható, hogy a normális diszperzió esetén ezekben az átlátszó közegben a törési mutató a hullámhossz csökkenésével nő, így az ibolya sugarak (amelyeknek kisebb a hullámhossza, 400 nm) erőteljesebben lesznek törve, mint a vörösek (amelyeknek nagyobb a hullámhossza, 700 nm, mint a lila sugár).<br><br>' +
                            'Ha λ<sub>lila</sub> < λ<sub>vörös</sub> → n<sub>lila</sub> > n<sub>vörös</sub> → v<sub>lila</sub> < v<sub>vörös</sub>.<br><br>' +
                            'A színes sugarak különböző sebességekkel haladnak át a prizmán, és ezért különböző szögekkel lépnek ki a prizmából.<br><br>' +
                            'Az ibolya sugarak kevésbé meredekek az optikai tengelyhez képest, mert kisebb sebességgel terjednek a prizma anyagában, mint a vörös sugarak, ugyanakkor kevesebb távolságot tesznek meg, mint a vörös sugarak.<br><br>' +
                        '</li><br>' +
                    '</ul>' +
                    '<h2 class="p-3">Fény interferencia:</h2>'+
                    '<ul>' +
                    '<li>' +
                        'A fény interferenciája nem lokalizált a Young-féle kísérletben.<br><br>' +
                        'AZ INTERFERENCIA az a jelenség, amikor két koherens hullám (ugyanolyan frekvenciával és ugyanazzal a fáziseltéréssel) átfedik egymást egy térbeli pontban.<br><br>' +
                        'Bizonyos térbeli pontokban interferencia csíkok fognak kialakulni, azaz egy világos és egy sötét terület sorozata.<br><br>' +
                        'A koherens hullámokat úgy kapjuk, hogy kettéválasztjuk egy monokromatikus fényforrásból származó fényáramot, majd két fényfre osztjuk, amelyek később találkoznak.<br><br>' +
                        'Két módja van a koherens hullámok előállításának:<br><br>' +
                        '- A hullámfront felosztása a Young-féle kísérlet, a Fresnel biprismája stb.<br><br>' +
                        '- A hullám amplitúdójának felosztása a párhuzamos síkú lemezeken, optikai pánán, Newton gyűrűin.' +
                    '</li><br>' +
                    '<li>' +
                        'A Young-féle kísérlet egy monokromatikus fényforrást (láser) (S), egy két egyenes nyílással ellátott (kisebb mint 1 mm széles) és egymással párhuzamosan lévő táblát (legfeljebb 1 mm távolsággal), valamint egy képernyőt (fehér papírlap). Az interferencia mintázat megfigyeléséhez nincs preferált képernyőhelyzet, ezért a képernyőt 1 m és 5 m közötti távolságba helyezhetjük a nyílásoktól, és ezért nevezik a helyi interferenciát nem lokalizáltnak.<br><br>' +
                        'Mind az interferencia, mind a diffrakció Huygens-Fresnel elvére épül, amely szerint az összes hullámeloszlás pontja viselkedik egy másodlagos hullámforrásként, ugyanazzal a frekvenciával és fázissal, mint az eredeti hullám. Az új hullámfrontot a másodlagos hullámok amplitúdóinak összege alkotja.' +
                    '</li><br>' +
                    '<li>' +
                        'A konstruktív interferenciában a két hullám fázisban van (nulla fáziskülönbség) és az összeg nagyobb, világos területeket alkotva.<br><br>' +
                        'Amikor a két hullám antifázisban rezeg (180°-os fáziskülönbség), akkor megsemmisülnek (az összeg nulla), sötét területeket képezve, ezt nevezzük destruktív interferenciának.' +
                    '</li><br>' +
                    '<li>' +
                        'Az elektromágneses hullám (fény) két elektromos és mágneses komponensből áll. Csak az elektromos komponens (E) befolyásolja a vizuális érzékelést.<br><br>' +
                        'Azonos amplitúdójú hullámok, amelyeket a két forrásból sugároznak, az alábbi egyenletekkel rendelkeznek:<br><br>' +
                        'E<sub>1</sub> = E<sub>0</sub>sin2π((t / T) - (r<sub>1</sub> / λ))<br><br>' +
                        'E<sub>2</sub> = E<sub>0</sub>sin2π((t / T) - (r<sub>2</sub> / λ))<br><br>' +
                        'Az elektromágneses hullám a c sebességgel terjed a Δt időintervallum alatt, egy S keresztmetszetű felületen, amely merőleges a terjedési irányra.<br><br>' +
                        'Az általuk szállított energia:<br><br>' +
                        'ΔW = w ΔV<br><br>' +
                        'ΔW = (ε<sub>0</sub> / μ<sub>0</sub>)<sup>1/2</sup>E<sup>2</sup>SΔt<br><br>' +
                        'I = 1/2 · (ε<sub>0</sub> / μ<sub>0</sub>)<sup>1/2</sup> ·E<sup>2</sup><sub>0</sub><br><br>' +
                        'E\'<sub>0</sub> = 2 E<sub>0</sub> cos (π(r<sub>2</sub> - r<sub>1</sub>) / λ)' +
                    '</li><br>'+ 
                    '<li>' +
                        'Az interferencia feltételei:<br><br>' +
                        '- Az hullámoknak azonos frekvenciával kell rendelkezniük<br><br>' +
                        '- Fáziskülönbség: ΔΦ = 2π(Δr / λ) = állandó<br><br>' +
                        'A fény intenzitása, I, egy interferenciapontban arányos a rezultáló hullám amplitúdójának négyzetével:<br><br>' +
                        'I = konst 4E<sup>2</sup><sub>0</sub> cos<sup>2</sup>(πΔr / λ)<br><br>' +
                        'A konstruktív interferenciában (fénycsíkok kialakulásával) az intenzitás maximális feltétele:<br><br>' +
                        'cos<sup>2</sup>(πΔr / λ)<br><br> = 1 → Δr = kλ = 2k(λ/2),<br><br>' +
                        'ahol k = egész szám<br><br>' +
                        'Az interferencia területén azok a pontok, amelyekben az út különbsége, Δr, egy páros számú félföldet tesz ki, világos csíkon helyezkednek el.<br><br>' +
                        'A destruktív interferenciában (sötét csíkok kialakulásával) az intenzitás minimális feltétele:<br><br>' +
                        'cos<sup>2</sup>(πΔr / λ) = 0 → Δr = kλ = 2(k+1)(λ/2)<br><br>' +
                        'Az interferencia területén azok a pontok, amelyekben az út különbsége, Δr, egy páratlan számú félföldet tesz ki, sötét csíkon helyezkednek el.' +
                    '</li><br>' +
                    '<li>' +
                        'A csíkok pozícióinak meghatározása a Young-rendszerben<br><br>' +
                        'ΔAEP háromszögében alkalmazzuk Pitagorasz tételét: r<sup>1</sup> = D<sup>2</sup> + (x-l)<sup>2</sup><br><br>' +
                        'ΔBE\'P háromszögében alkalmazzuk Pitagorasz tételét: r<sup>2</sup> = D<sup>2</sup> + (x-l)<sup>2</sup><br><br>' +
                        'Δr = r<sub>2</sub> = r<sub>1</sub> = 4xl / (r<sub>1</sub> + r<sub>2</sub>)' +
                    '</li><br>' +
                    '<li>' +
                        'A hullámhossz meghatározása a köztes terek mérésével<br><br>' +
                        'i = x<sub>k+1</sub> - x<sub>k</sub> = (k+1)λD / 2l - kλD / 2l = λD / 2l<br><br>' +
                        'i = λD / 2l' +
                    '</li>'+
                    '</ul>'+
                    '<h2 class="p-3">'+'A párhuzamos síkú lemezeken megjelenő interferencia:'+'</h2>'+
                    '<ul>' +
                        '<li>' +
                            'Az interferencia megjelenése párhuzamos síkú lemezen akkor következik be, amikor egy fényf két koherens f束re oszlik tükröző felületeken, a felső felületen történő fényvisszaverődés és az alsó lemez síkjában történő fényátvezetés révén.<br><br>' +
                            'A lemez felső felületére érkező fény (film) részben visszaverődik (IR), részben pedig törődik (IŔ ). A lemezen keresztül történő törött sugár a lemez alsó felületén visszaverődik (MN). Az IR és az MN két sugara interferál a lemez felületén.<br><br>' +
                            'Az interferencia csíkok a lencse fókuszpontjában vagy annak hiányában a végtelenben helyezkednek el. Így magyarázhatjuk meg a szappanbuborékok és az utcai olaj- vagy benzinrétegek irizációját.' +
                        '</li>' +
                    '</ul>' +
                    '<h2 class="p-3">' +
                        'Newton gyűrűi a levegőpárán való interferencia során:' +
                    '</h2>' +
                    '<ul>' +
                        '<li>' +
                            'A Newton gyűrűit egy nagy fókusztávolságú sík-konvex lencsével való merőleges monokromatikus fény megvilágításával kapjuk meg, amelyet egy lapos üveglapra helyezünk. A lencse és a lap között vékony légburok keletkezik, amelynek eredményeként kör alakú, koherens fény- és sötétcsíkok jönnek létre a lencse és a lap érintkezési pontja körül.' +
                        '</li>' +
                    '</ul>'+

                    //Elemente de fizica cuantica
                    '<a name="element_target2"></a>' +
                    '<br><br><br><br><u><h2 class="p-3" align = center>Kvantumfizika alapjai</h2><br><br><br></u>' +
                    '<h2 class="p-3">' +
                        'Planck hipotézise a fény kvantumairól:' +
                    '</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Planck azt állította, hogy a fekete test által kibocsátott sugárzás diszkrét energiaegységek formájában létezik, amelyeket kvantumoknak nevezett el (később fotonoknak nevezett el), a sugárzás frekvenciájától függően.<br><br>' +
                            'Az oszcillátor energia diszkrét értékei egyenlő távolságra vannak egymástól, így az energia szintjei közötti különbség (ΔE) arányos az oszcillátor frekvenciájával (ν) és a Planck-állandóval (h).<br><br>' +
                            'ΔE = h ∙ ν<br><br>' +
                            'h = Planck-állandó = 6,62 ∙ 10<sup>-34</sup> J ∙ s<br><br>' +
                            'ν = az oszcillátor frekvenciája<br><br>' +
                            'A Planck-állandó az egyik legkisebb állandó, amelyet a fizikában makroszkopikus méretarányokban használnak, ami a kvantumhatásokat mikroszkopikus szinten tükrözi.' +
                        '</li><br>' +
                    '</ul>' +
                    '<h2 class="p-3">' +
                        'Fotoelektromos hatás:' +
                    '</h2>' +
                    '<ul>' +
                        '<li>' +
                            'A fotoelektromos hatást kísérletileg 1887-ben Heinrich Hertz (1857-1894) fedezte fel, és 1888-ban W. Hallwachs (1859-1922), és az elektromágneses sugárzás hatására elektronok kibocsátásából áll.<br><br>' +
                            '1905-ben Albert Einstein (1879-1955) megjegyezte, hogy a fotoelektromos hatás magyarázata megoldható, ha általánosítják Planck által javasolt kvantum hipotézist a fekete test sugárzására az elektromágneses sugárzásra.<br><br>' +
                            'Így a katód elektronjai csak egyetlen energiacsomagot (fotont) kapnak a fénytől (E = h ∙ ν), hogy felgyorsítsák és elhagyják a fémet.<br><br>' +
                            'Így az emitált elektronok maximális kinetikus energiája nem fogja túllépni ezt az energiát, függetlenül a beeső sugárzás intenzitásától.<br><br>' +
                            'Ezen felül megmagyarázza, hogy az elektronok maximális sebessége miért függ a sugárzás frekvenciájától.' +
                        '</li><br>' +
                        '<li>' +
                            'A fotoelektromos hatás első törvénye:<br><br>' +
                            'A külső fotoelektromos hatás akkor következik be, ha a beeső sugárzás frekvenciája nagyobb, mint a katód jellemző küszöbfrekvenciája.<br><br>' +
                            'A fémből szabad elektronoknak a kinyerési munka (L) egyenlő energiát kell kapniuk a küszöbfrekvenciához (ν<sub>0</sub>):<br><br>' +
                            'L = h ∙ ν<sub>0</sub> h = Planck-állandó = 6,62 ∙ 10<sup>-34</sup> m<sup>2</sup> ∙ kg/s<br><br>' +
                            'A foton h ∙ ν energiáját az elektromos vezetőnek adja át.<br><br>' +
                            'Az elektron csak akkor hagyhatja el a fémet, ha h ∙ ν ≥ L.' +
                        '</li><br>' +
                    '</ul>'+
                    '<h2 class="p-3">A fotoelektromos hatás második törvénye:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'A fotoelektromos hatás gyakorlatilag azonnal megtörténik.<br><br>' +
                            'Az elektron emissziója egy foton és egy elektron ütközése eredményeként történik egy 10<sup>-9</sup> s-nál rövidebb idő alatt.' +
                        '</li><br>' +
                    '</ul>' +
                    '<h2 class="p-3">A fotoelektromos hatás harmadik törvénye:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Az emissziós elektronok kinetikus energiája lineárisan nő a beeső sugárzás frekvenciájával.<br><br>' +
                            'Ha a foton energia h ∙ ν > L, akkor az elektron elegendő kinetikus energiával rendelkezik a fémből történő kilépéshez:<br><br>' +
                            'Ec = h ∙ ν – L = h ∙ ν – h ∙ ν<sub>0</sub> = h ∙ (ν – ν<sub>0</sub>)' +
                        '</li><br>' +
                    '</ul>' +
                    '<h2 class="p-3">A fotoelektromos hatás negyedik törvénye:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'A katód által egységnyi idő alatt kibocsátott fotoelektronok száma arányos a beeső fotonok számával ebben az időintervallumban, ami arányos a fényenergia áramlásával.' +
                        '</li>' +
                    '</ul>'),

        //cuprins
        "cuprinsPrincipii": "Elvek és törvények",
        "cuprinsTeoreme": "Variációs tételek és megmaradási törvények",
        "cuprinsNotiuni": "Elkezdeni",
        "cuprinsPrincipiuI": "I. alapelv",
        "cuprinsMotoare": "Hőmotorok",
        "cuprinsPrincipiuII": "A második elv",
        "cuprinsCurentul": "Elektromosság",
        "cuprinsOhm": "Ohm törvénye",
        "cuprinsKirchhoff": "Kirchhoff törvénye",
        "cuprinsGrupare": "Az ellenállások és generátorok csoportosítása",
        "cuprinsEnergie": "Energia és elektromos energia",
        "cuprinsGeometrica": "Geometrikus optika",
        "cuprinsOndulatorie": "Hullám optika",
        "cuprinsCuantica": "Kvantumfizika",

        "teorieInapoiBtn": "Vissza a kiválasztási menühöz",
        "invataTitle": "A fejezet ezen részében olyan fogalmakat fogsz megtanulni, mint például:",
        "inchideBtn": "Rakd le",
        "teorieBtn": "Elmélet",
        "testBtn": "Kezdj el egy tesztet",
        "acasaBtn": "Az otthon",
    },
    "germana":
    {
        //index.html
        "titleSet": "Einstellungen",
        "titleLogin": "Anmelden",
        "titleDisconnect": "Abmelden",
        "titleStatistica": "Ihre Testergebnisse",
        "corecte": "Gerecht",
        "gresite": "Falsch",
        "titleLang": "Fremdsprachen",
        "titleMec": "Mechanik",
        "titleTer": "Thermodynamik",
        "titleElec": "Elektromechanisch",
        "titleOp": "Optisch",

        //register.html
        "goBackReg": "zurück",
        "titleReg": "Geben Sie Ihre Anmeldedaten ein",
        "usernameReg": "Geben Sie Ihren Benutzernamen ein",
        "emailReg": "Geben sie ihre E-Mailadresse ein",
        "passwordReg": "Geben Sie das Passwort ein",
        "register": "Melden Sie sich an",
        "footerReg": "Sie haben bereits ein Konto?",
        "footerRegBtn": "Anmelden",

        //login.html
        "goBackLog": "zurück",
        "titleLog": "Geben Sie Ihre Anmeldedaten ein",
        "emailLog": "Geben sie ihre E-Mailadresse ein",
        "passwordLog": "Geben Sie das Passwort ein",
        "login": "Anmelden",
        "footerLog": "Nicht registriert?",
        "footerLogBtn": "Ein Konto erstellen",

        //test.html
        "startTestBtn": "Start",
        "iesiBtn": "Hinausgehen",
        "reguliTitle": "Einige Regeln dieses Tests",
        "reguli": ('<div class="info">1. Sie haben für jede Frage nur <span>15 Sekunden</span> Zeit.</div>'+
                    '<div class="info">2. Sobald Sie eine Antwort ausgewählt haben, können Sie diese nicht mehr ändern.</div>'+
                    '<div class="info">3. Sobald die Zeit abgelaufen ist, können Sie keine Antworten mehr auswählen.</div>'+
                    '<div class="info">4. Sie können den Test während des Tests nicht beenden.</div>'+
                    '<div class="info">5. Sie erhalten Punkte basierend auf Ihren Antworten.</div>'),
        "iesiTestBtn": "Beenden Sie den Test",
        "continuaTestBtn": "Weitermachen",
        "testTitle": "Prüfen",
        "timpRamas": "Verbleibende Zeit:",
        "gataTimpul": "Bereitschaftszeit",
        "urmatorulTestBtn": "Nächste",
        "finalTestTitle": "Sie haben den Test abgeschlossen!",
        "nouTestBtn": "Machen Sie den Test noch einmal",
        "veziDeCeBtn": "Siehst du warum",

        //mecanica.html
        "mecanicaTitle": "Mechanik",
        "principiiTitle": "Prinzipien und Gesetze",
        "teoremeTitle": "Variationssätze und Erhaltungssätze",
        "principiiTitleModal": "Prinzipien und Gesetze der klassischen Mechanik",
        "teoremeTitleModal": "Variationssätze und Erhaltungssätze",
        "principiiRez": ('<li>'+'Bewegung und Ruhe'+'</li>'+
                         '<li>'+'Erstes Prinzip der Mechanik'+'</li>'+
                         '<li>'+'Zweites Prinzip der Mechanik'+'</li>'+
                         '<li>'+'Das dritte Prinzip der Mechanik'+'</li>'+
                         '<li>'+'Hookesches Gesetz und Spannung im Draht'+'</li>'+
                         '<li>'+'Die Gesetze der Gleitreibung'+'</li>'),
        "teoremeRez": ('<li>'+'Mechanische Arbeit und mechanische Kraft'+'</li>'+
                        '<li>'+'Satz der Variation der kinetischen Energie'+'</li>'+
                        '<li>'+'Gravitationspotentialenergie'+'</li>'+
                        '<li>'+'Das Gesetz der Erhaltung der mechanischen Energie'+'</li>'+
                        '<li>'+'Der Impulsvariationssatz'+'</li>'+
                        '<li>'+'Gesetz der Impulserhaltung'+'</li>'),

        //termodinamica.html
        "termodinamicaTitle": "Thermodynamik",
        "notiuniTitle": "Erste Schritte",
        "principiuITitle": "Prinzip I",
        "motoareTitle": "Wärmekraftmaschinen",
        "principiuIITitle": "Das zweite Prinzip",
        "notiuniTitleModal": "Grundbegriffe der Thermodynamik",
        "principiuITitleModal": "Das erste Prinzip der Thermodynamik",
        "motoareTitleModal": "Wärmekraftmaschinen",
        "principiuIITitleModal": "Das zweite Prinzip der Thermodynamik",
        "notiuniRez": ('<li>'+'Molekulare Masse'+'</li>'+
                        '<li>'+'Relative Molekülmasse'+'</li>'+
                        '<li>'+'Menge der Substanz'+'</li>'+
                        '<li>'+'Molmasse'+'</li>'+
                        '<li>'+'Molares Volumen'+'</li>'+
                        '<li>'+'Avogadros Nummer'+'</li>'+
                        '<li>'+'Wärmehaushalt'+'</li>'+
                        '<li>'+'Entsprechung zwischen Zahlenwert der Temperatur in Celsius-Skala und Zahlenwert x'+'</li>'),
        "principiuIRez": ('<li>'+'Mechanische Arbeit in der Thermodynamik, Prozessgröße'+'</li>'+
                        '<li>'+'Geometrische Interpretation mechanischer Arbeit in der Thermodynamik'+'</li>'+
                        '<li>'+'Innere Energie eines thermodynamischen Systems, Zustandsgröße'+'</li>'+
                        '<li>'+'Wärme, Prozessgröße'+'</li>'+
                        '<li>'+'Adiabatische Schale'+'</li>'+
                        '<li>'+'Das erste Prinzip der Thermodynamik'+'</li>'+
                        '<li>'+'Kalorienkoeffizienten (Definitionsrelationen, SI-Einheiten)'+'</li>'+
                        '<li>'+'Die Robert-Mayer-Beziehung'+'</li>'+
                        '<li>'+'Anwendung des ersten Prinzips der Thermodynamik auf ideale Gasumwandlungen:'+'<br>'+
                            '<ul>'+
                                '<li>'+'Innere Energie des idealen Gases (einatomig, zweiatomig, mehratomig)'+'</li>'+	
                                '<li>'+'Variation der inneren Energie, der mechanischen Arbeit und der Wärmemenge für einfache ideale Gasumwandlungen (isobar, isochor, isotherm, adiabatisch)'+'</li>'+
                            '</ul>'+
                        '</li>'),
        "motoareRez": ('<li>'+'Erklären der Funktionsweise einer Wärmekraftmaschine'+'</li>'+
                    '<li>'+'Beschreibung der wichtigsten thermodynamischen Kreisläufe – Otto, Diesel – auf deren Grundlage Wärmekraftmaschinen funktionieren'+'</li>'+
                    '<li>'+'Der Wirkungsgrad einer Wärmekraftmaschine'+'</li>'),
        "principiuIIRez": ('<li>'+'Der Carnot-Zyklus, die Effizienz des Carnot-Zyklus'+'</li>'),

        //electromecanica.html
        "electromecanicaTitle": "Elektromechanisch",
        "curentulTitle": "Elektrizität",
        "ohmTitle": "Ohm'sches Gesetz",
        "kirchhoffTitle": "Kirchhoffs Gesetz",
        "grupareTitle": "Gruppierung von Widerständen und Generatoren",
        "energieTitle": "Energie und Strom",
        "curentulTitleModal": "Elektrizität",
        "ohmTitleModal": "Ohm'sches Gesetz",
        "kirchhoffTitleModal": "Kirchhoffs Gesetz",
        "grupareTitleModal": "Gruppierung von Widerständen und Generatoren",
        "energieTitleModal": "Energie und Strom",
        "curentulRez": ('<li>'+'Elektrizität'+'</li>'+
                        '<li>'+'Die Intensität des elektrischen Stroms'+'</li>'+
                        '<li>'+'Die Maßeinheit für die Intensität des elektrischen Stroms'+'</li>'+
                        '<li>'+'Einfacher Stromkreis'+'</li>'+
                        '<li>'+'Die elektromotorische Spannung eines elektrischen Generators, die Spannung an den Generatorklemmen, der Spannungsabfall innerhalb des Generators'+'</li>'),
        "ohmRez": ('<li>'+'Elektrischer Wiederstand'+'</li>'+
                    '<li>'+'Ohmsches Gesetz für einen Teil eines Stromkreises und für den gesamten Stromkreis'+'</li>'+
                    '<li>'+'Die Maßeinheit für den elektrischen Widerstand'+'</li>'+
                    '<li>'+'Elektrischer Widerstand, Abhängigkeit des elektrischen Widerstands von der Temperatur'+'</li>'),
        "kirchhoffRez": ('<li>'+'Das Stromnetz'+'</li>'+
                        '<li>'+'Der Netzwerkknoten'+'</li>'+
                        '<li>'+'Das Netzwerkauge'+'</li>'+
                        '<li>'+'Kirchhoffs Gesetze'+'</li>'),
        "grupareRez": ('<li>'+'Der äquivalente elektrische Widerstand einer Reihen-, Parallel- oder Mischgruppierung mehrerer Widerstände'+'</li>'+
                        '<li>'+'Der äquivalente elektrische Widerstand und die äquivalente elektromotorische Spannung entsprechen der Reihen-/Parallelschaltung mehrerer elektrischer Generatoren'+'</li>'),
        "energieRez": ('<li>'+'Der Ausdruck der Energie, die der Generator in einem Zeitintervall an den Verbraucher überträgt'+'</li>'+
                        '<li>'+'Ausdruck der im Generator abgegebenen Energie'+'</li>'+
                        '<li>'+'Der Wirkungsgrad eines einfachen Stromkreises'+'</li>'+
                        '<li>'+'Elektrische Energie, Beziehungen, die elektrische Energie charakterisieren'+'</li>'),

        //optica.html
        "opticaTitle": "Optisch",
        "geometricaTitle": "Geometrische Optik",
        "ondulatorieTitle": "Wellenoptik",
        "cuanticaTitle": "Elemente der Quantenphysik",
        "geometricaTitleModal": "Geometrische Optik",
        "ondulatorieTitleModal": "Wellenoptik",
        "cuanticaTitleModal": "Elemente der Quantenphysik",
        "geometricaRez": ('<li>'+'Lichtreflexion'+'</li>'+
                            '<li>'+'Lichtbrechung'+'</li>'+
                            '<li>'+'Die Gesetze der Reflexion'+'</li>'+
                            '<li>'+'Die Brechungsgesetze'+'</li>'+
                            '<li>'+'Brechungsindex'+'</li>'+
                            '<li>'+'Konjugierte Punkte'+'</li>'+
                            '<li>'+'Paraxiale Faszikel'+'</li>'+
                            '<li>'+'Reale/virtuelle Bilder'+'</li>'+
                            '<li>'+'Optische Linse'+'</li>'+
                            '<li>'+'Die charakteristischen Elemente einer dünnen Linse (Achsen, optisches Zentrum, Brennpunkte)'+'</li>'+
                            '<li>'+'Konvergenz einer dünnen Linse'+'</li>'+
                            '<li>'+'Formeln für dünne Linsen'+'</li>'+
                            '<li>'+'Bilder realer/virtueller Objekte in dünnen Linsen'+'</li>'+
                            '<li>'+'Linsensysteme'+'</li>'),
        "ondulatorieRez": ('<li>'+'Bedingungen für den Erhalt stationärer Interferenzen'+'</li>'+
                            '<li>'+'Die Wellenlänge'+'</li>'+
                            '<li>'+'Komponenten von Youngs Gerät'+'</li>'+
                            '<li>'+'Interferenzstreifen'+'</li>'+
                            '<li>'+'Optischer Wegunterschied'+'</li>'+
                            '<li>'+'Maximale und minimale Interferenzbedingungen'+'</li>'+
                            '<li>'+'Eingreifen'+'</li>'),
        "cuanticaRez": ('<li>'+'Die Gesetze des äußeren photoelektrischen Effekts'+'</li>'+
                        '<li>'+'Plancks Hypothese. Einsteins Hypothese. Einsteins Gleichung'+'</li>'+
                        '<li>'+'Interpretation der Gesetze des externen photoelektrischen Effekts'+'</li>'),

        //teorieMecanica.html
        "teorieMecanicaTitle": "Theorie der Mechanik",
        "teorieMecanica": ('<u>'+'<h2 class=\"p-3\" align = center>'+'Prinzipien und Gesetze'+'</h2>'+'<br>'+'<br>'+' <br>'+'</u>'+
                        '<h2 class=\"p-3\">'+'Geschwindigkeit'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Formel: '+'<b>'+'v = d/Δt'+'</b>'+'</li>'+
                            '<li>'+'Maßeinheit: '+'<b>'+'&lt;'+'v'+'&gt;'+' = m/s'+'</b>'+'</li>'+
                                    '<li>'+'Durchschnittsgeschwindigkeit: '+'<b>'+'v'+'<small>'+'m'+'</small>'+' = Δd/Δt'+'</b>'+'</li>'+
                                    '<li>'+'Geschwindigkeitsvektor hat die gleiche Bedeutung wie Verschiebung: v'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>' + ' = d'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>'+' /Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Acceleration'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Formel: '+'<b>'+'a = Δv/Δt'+'</b>'+'</li>'+
                            '<li>'+'Maßeinheit: '+'<b>'+'&lt;'+'a'+'&gt;'+' = m/s'+'<sup>'+'2'+ ' </sup>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Die Galileo-Formel:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v'+'<sup>'+'2'+'</sup>'+' = v'+'<sub>'+'0'+'</sub>'+'<sup>'+'2'+'</sup>'+' + 2a(x-x'+'<sub>'+'0'+'</sub>'+') '+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Geschwindigkeitsgesetz: '+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v = v'+'<sub>'+'0'+'</sub>'+' + at'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Bewegungsgesetz:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'x = 1/2at'+'<sup>'+'2'+'</sup>'+' + v'+'<sub>'+'0 '+'</sub>'+'t + x'+'<sub>'+'0'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Prinzip I der Mechanik:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Jeder Körper behält seinen Ruhezustand oder seine gleichförmige geradlinige Bewegung bei, solange keine anderen Kräfte auf ihn einwirken oder die Summe der auf ihn einwirkenden Kräfte Null ist.'+'</li>'+
                            '<li>'+'Kurz gesagt: Die Geschwindigkeit ist '+'<b>'+'konstant'+'</b>'+', wenn '+'<b>'+'die Resultierende der auf sie ausgeübten Kräfte ist body'+' </b>'+' ist 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Zweites Prinzip der Mechanik:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Die Änderung der Bewegungsmenge eines Körpers ist direkt proportional zur ausgeübten Kraft und erfolgt in der Richtung, in die die Kraft wirkt.'+'</li>'+
                            '<li>'+'Mit anderen Worten ausgedrückt: Eine auf einen Körper einwirkende Kraft verleiht ihm eine Beschleunigung, die proportional zur Kraft und umgekehrt proportional zur Masse des Körpers ist.'+'</li>'+
                            '<li>'+'Formel: F = ma'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Drittes Prinzip der Mechanik:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Wenn ein Körper mit einer Kraft (Aktionskraft genannt) auf einen anderen Körper einwirkt, wirkt der zweite Körper ebenfalls mit einer Kraft (Reaktionskraft genannt) gleicher Größe und Richtung auf den ersten Körper ein, aber Gegenteil. Dieses Prinzip ist auch als Aktions- und Reaktionsprinzip bekannt.'+'</li>'+
                            '<li>'+'Als Formel geschrieben: '+'<b>'+'F'+'<sub>'+'a'+'</sub>'+' = F'+'<sub> '+'r'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Hookes Gesetz:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Die Dehnung einer Feder ist direkt proportional zur Verformungskraft (F):'+'</li>'+'<br>'+
    
                            'Δl ~ F'+'<br>'+'<br>'+
    
                            '<li>'+'Direkt proportional zur anfänglichen Federlänge (l'+'<sub>'+'0'+'</sub>'+') :'+'</li>'+'<br>'+
                            
                            'Δl ~ l'+'<sub>'+'0'+'</sub>'+'<br>'+'<br>'+
    
                            '<li>'+'Umgekehrt proportional zur Querschnittsfläche der Feder:'+'</li>'+'<br>'+
    
                            'Δl ~ 1/S'+'<br>'+'<br>'+
    
                            '<li>'+'Hookes Gesetz:'+'</li>'+'<br>'+
                            'F/S = E∙Δl/l'+'<sub>'+'0'+'</sub>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Drahtspannung:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Die Spannung im Draht (T) stellt die Reaktionskraft des nicht dehnbaren Drahtes (der sich nicht verlängert) auf die auf ihn ausgeübte Kraft dar.'+'</li>'+'<br>' +
                            '<li>'+'Wenn wir einen Körper an einem nicht dehnbaren Faden aufhängen, treten zwei gepaarte Kräfte auf:'+'<br>'+'<br>'+
    
                                'Die Druckkraft des Körpers (F) ist die Kraft, mit der der Körper auf den Draht einwirkt (sie ist gleich dem Gewicht des Körpers).'+'<br>'+'<br>'+
                                
                                'Die Spannung im Draht (T) ist die Kraft, mit der der Draht auf den daran hängenden Körper einwirkt.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Gleitreibungsgesetze:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Erstes Reibungsgesetz:'+'<br>'+'<br>'+
                            
                                'Der Wert der Gleitreibungskraft hängt von der Art und dem Grad der Bearbeitung der sich berührenden Oberflächen ab. Die Abhängigkeit wird durch eine dimensionslose Größe, den sogenannten Gleitreibungskoeffizienten, charakterisiert, der Werte zwischen 0 und 1 annimmt und mit μ bezeichnet wird.'+'<br>'+'<br>'+
    
                                'Ff ~ μ'+'</li>'+'<br>'+
    
                            '<li>'+'Das Zweite Gesetz der Reibung:'+'<br>'+'<br>'+
                                'Der Wert der Gleitreibungskraft hängt nicht von der Fläche der Kontaktfläche zwischen den Körpern ab.'+'<br>'+'<br>'+'</li>'+
                                
                            '<li>'+'Drittes Reibungsgesetz:'+'<br>'+'<br>'+
                                '„Der Wert der Gleitreibungskraft hängt von der Anpresskraft ab, die der Körper auf die Gleitfläche ausübt und deren Größe der normalen Reaktionskraft an der Kontaktfläche zwischen den Körpern entspricht.“'+'<br>'+'<br>' +
    
                            'Ff ~ N'+'</li>'+'<br>'+
                            '<li>'+'Die Formel der Reibungskraft ergibt sich aus der Beziehung:'+'<br>'+'<br>'+
                                'Ff = μ ∙ N'+'</li>'+
                        '</ul>'+
    
                        //Teoreme de variatie si legi de conservare
                        
                        '<a name=\"element_target\">'+'</a>'+
                        '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center>'+'Theoreme der Variations- und Erhaltungsgesetze'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                        
                        '<h2 class=\"p-3\">'+'Mechanische Arbeit:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Die mechanische Arbeit (L) einer konstanten Kraft, die auf einen Körper in Richtung und Richtung der Verschiebung des Körpers wirkt, ist die skalare physikalische Größe, die dem Produkt des Moduls der Kraft (F) und der entspricht Modul der Verschiebung des Körpers (d).' +'</li>'+'<br>'+
                            '<li>'+'Berechnungsformel: L = F ∙ d'+'</li>'+'<br>'+
                            '<li>'+'Zeichenkonventionen:'+'<br>'+
                                '1. Die mechanische Arbeit einer Kraft ist positiv, wenn die Kraft dabei hilft, den Körper zu bewegen. Dies geschieht, wenn die Kraft die gleiche Richtung und den gleichen Sinn hat wie die Bewegung des Körpers.'+'<br>'+'<br>'+
                                '2. Die mechanische Arbeit einer Kraft ist negativ, wenn die Kraft der Bewegung des Körpers entgegenwirkt. Dies geschieht, wenn die Komponente des Kraftvektors in Bewegungsrichtung der Bewegung des Körpers entgegengesetzt ist.'+'<br>'+'<br>'+
                                '3. Die mechanische Arbeit einer Kraft ist Null, wenn die Kraft weder zur Bewegung des Körpers beiträgt noch der Bewegung entgegenwirkt. Dies geschieht, wenn der Kraftvektor senkrecht zur Bewegungsrichtung des Körpers steht.'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Mechanische Leistung:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Mechanische Leistung (P) ist die skalare physikalische Größe, die dem Verhältnis zwischen der geleisteten mechanischen Arbeit (L) und der Zeit (Δt) entspricht, während der diese mechanische Arbeit verrichtet wird.'+'</li> '+'<br>'+
                            '<li>'+'P = Mechanische Arbeit / Zeit = L / Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Kinetische Energie:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Mechanische Energie (E) ist die physikalische Größe, die die Fähigkeit eines Körpers charakterisiert, mechanische Arbeit zu verrichten. Die Maßeinheit ist Joule (J).'+'</li>'+'<br>' +
                            '<li>'+'Kinetische Energie (E'+'<sub>'+'c'+'</sub>'+') ist die Energie, die ein sich bewegender Körper hat.'+'</li> '+ '<br>'+
                            '<li>'+'Die kinetische Energie eines sich bewegenden Körpers mit einer bestimmten Geschwindigkeit wird mit der Formel berechnet:'+'<br>'+'<br>'+
                                'E'+'<sub>'+'c'+'</sub>'+' = m ∙ v'+'<sup>'+'2'+'</sup>'+' / 2 '+ '</li>'+'<br>'+
                            '<li>'+'Das Gesetz der Variation der kinetischen Energie:'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'c'+'</sub>'+' = L'+'<sub>'+'Total'+'</sub>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Gravitationspotentialenergie:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Gravitationspotentialenergie (E'+'<sub>'+'pg'+'</sub>'+') ist die Energie, die ein Körper in einer bestimmten Höhe über dem Boden hat'+'</li>'+'<br>'+
                            '<li>'+'Die potentielle Gravitationsenergie eines Körpers ist gleich: E'+'<sub>'+'pg'+'</sub>'+' = m ∙ g ∙ h'+'</li>'+'<br>'+
                            '<li>'+'Gesetz der Variation der potentiellen Gravitationsenergie:'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'pg'+'</sub>'+' = -L'+'<sub>'+'G'+'</sub>'+'</li>' +'<br>'+
                            '<li>'+'Eine Kraft, die mechanische Arbeit verrichtet, die unabhängig vom zurückgelegten Weg ist und nur von den Extrempositionen (Anfangs- und Endposition) abhängt, wird als konservative Kraft bezeichnet.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Erhaltung der mechanischen Energie:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Das Gesetz der Erhaltung der mechanischen Energie:'+'<br>'+'<br>'+
    
                                '\"Die mechanische Energie eines Körpers bleibt erhalten, wenn nur konservative Kräfte auf ihn einwirken.\"'+'<br>'+'<br>'+
                            
                                'E = konstant, wenn der Körper von außen isoliert ist und F'+'<sub>'+'f'+'</sub>'+' = 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Momentum Variation Theorem:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Der Impuls des Körpers wird durch das Gesetz der Impulserhaltung beschrieben und hat die Formel:'+'<br>'+'<br>'+
                            'p'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = m ∙ v'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+'</li>'+'<br>'+
                            '<li>'+'Theorem der Variation des mechanischen Impulses'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' ∙ Δt'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Das Gesetz der Impulserhaltung:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Wenn das mechanische System isoliert ist, beträgt die resultierende Kraft F'+'<sub>'+'R'+'</sub>'+'<span style=\"vertical-align : 4px; margin- left : -1.5px\">'+'&#8407;'+'</span> '+'ist Null.'+'<br>'+'<br>'+
                            'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<sub>'+'R' +'</sub>'+'<span style=\"vertical-align : 4px; margin-left : -1.5px\">'+'&#8407;'+'</span>'+' ∙ Δt = 0 ∙ Δt = 0'+'</li>'+'<br>'+
                            '<li>'+'Das Gesetz der Erhaltung des mechanischen Impulses im SRI:'+'<br>'+'<br>'+
                                'Der mechanische Impuls isolierter mechanischer Systeme bleibt erhalten.'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = 0, d. h. Δp'+'<span style=\ "vertical-align : 4px; \">'+'&#8407;'+'</span>'+' = const'+'<span style=\"vertical-align : 4px; margin-left : -25px \">'+'&#8407;'+'</span>'+'</li>'+'<br>'+
                                '<li>'+'Bei isolierten mechanischen Systemen kann sich ihr Gesamtimpuls unter Einwirkung innerer Kräfte nicht ändern.'+'</li>'+
                        '</ul>'),

        //teorieTermodinamica.html
        "teorieTermodinamicaTitle": "Theorie der Thermodynamische",
        "teorieTermodinamica": ('<u>'+'<h2 class=\"p-3\" align = center>'+'Grundlegende thermodynamische Konzepte'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                '<ul>'+
                                '<li>'+'<b>'+'Thermische Bewegung'+'</b>'+' ist die ungeordnete und kontinuierliche Bewegung der Teilchen einer Substanz (Atome oder Moleküle).'+'</li> '+' <br>'+
                                '<li>'+'<b>'+'Diffusion'+'</b>'+' ist das Phänomen des Eindringens der Moleküle einer Substanz in die Moleküle einer anderen Substanz, ohne dass eine äußere Kraft eingreift ( von selbst).'+ '</li>'+'<br>'+
                                '<li>'+'<b>'+'Atom'+'</b>'+' ist das kleinste Teilchen einer Substanz, das durch gewöhnliche chemische Prozesse nicht weiter zerlegt werden kann.'+'</li>'+ '<br>'+
                                '<li>'+'<b>'+'Molekül'+'</b>'+' stellt das kleinste Teilchen in einem Stoff dar, das auch in freiem Zustand existieren kann und die Eigenschaften des Stoffes behält, aus dem es stammt es kommt. '+'</li>'+'<br>'+
                                '<li>'+'<b>'+'Molekularmasse'+'</b>'+' ist eine dimensionslose Größe (keine Maßeinheit), die uns zeigt, wie oft die tatsächliche Masse eines Moleküls größer ist als Atomare Masseneinheit (u.a.m.).'+'</li>'+'<br>'+
                                '<li>'+'<b>'+'Die relative Atommasse (A)'+'</b>'+' ist die Zahl, die angibt, wie oft die Masse eines Atoms größer als die Atommasseneinheit ist .'+ '</li>'+'<br>'+
                                '<li>'+'<b>'+'Ein Mol Atome'+'</b>'+' stellt die Menge einer einfachen Substanz in Gramm dar, die 6,022 ∙ 10'+'<sup>'+'23'+'</sup>'+' Atome. Es wird mit dem griechischen Buchstaben „niu“= υ.'+'<br>'+'<br>'+
                                        'υ = m(g) / A(g/mol) = Masse der einfachen Substanz (g) / Atommasse (g/mol)'+'</li>'+'<br>'+
                                        '<li>'+'<b>'+'Avogadros Zahl'+'</b>'+', bezeichnet durch N'+'<sub>'+'A'+'</sub>'+' , ist gleich 6,022 ∙10'+'<sup>'+'23'+'</sup>'+' mol'+'<sup>'+'-1'+'</sup>'+' Atome und stellt die Anzahl der Atome dar, die in einem Mol Atome einer einfachen Substanz enthalten sind.'+'</li>'+'<br>'+
                                        '<li>'+'<b>'+'Molmasse'+'</b>'+' (gekennzeichnet durch den griechischen Buchstaben miu = μ) ist die Masse eines Mols einer Substanz. Seine Maßeinheit ist g/mol.'+'</li>'+'<br>'+
                                        '<li>'+'<b>'+'Das Mol'+'</b>'+' ist im Internationalen System die Maßeinheit für die Stoffmenge, die eine Anzahl von Teilchen enthält, die der Avogadro-Zahl entspricht. N'+ '<sub>'+'A.'+'</sub>'+'<br>'+'<br>'+
                                        'υ = m(g) / μ(g/mol) = Masse der Verbindung (g) / Molmasse (g/mol)'+'<br>'+'<br>'+
                                        'υ = N / N'+'<sub>'+'A'+'</sub>'+' = Anzahl der Teilchen / Avogadro-Zahl'+'</li>'+'<br>'+
                                        '<li>'+'Ein Mol eines beliebigen Gases nimmt unter normalen Bedingungen von Temperatur (273 K) und Druck (10'+'<sup>'+'5'+'</sup>'+' Pa) ein Volumen ein , genannt '+'<b>'+'molares Volumen'+'</b>'+' = V'+'<sub>'+'μ'+'</sub>'+' = 22,4 L /mol '+'<br>'+'<br>'+
                                        'v = V / V'+'<sub>'+'μ'+'</sub>'+' = Gasvolumen (L) / Molvolumen (L/mol)'+'<br>'+'<br>'+
                                        'Die Beziehung zwischen dem Molvolumen und der Dichte einer Substanz ist:'+'<br>'+'<br>'+
                                        'P = μ / V'+'<sub>'+'μ'+'</sub>'+'<br>'+'<br>'+
                                        'Die Volumenzahl (n) stellt die Anzahl der Teilchen (Atome oder Moleküle) in einem m3 Substanz dar:'+'<br>'+'<br>'+
                                        'n = N'+'<sub>'+'A'+'</sub>'+' / V'+'<sub>'+'μ'+'</sub>'+' = N / V '+'<br>'+'<br>'+'</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Thermodynamisches Gleichgewicht und thermodynamische Prozesse:'+'</h2>'+
                                '<ul>'+
                                '<li>'+'<b>'+'Der Zustand eines thermodynamischen Systems'+'</b>'+' wird zu einem bestimmten Zeitpunkt durch bestimmte physikalische Größen, sogenannte Zustandsparameter, charakterisiert.'+'</li>'+'<br>'+
                                '<li>'+'<b>'+'Prinzip des thermodynamischen Gleichgewichts'+'</b>'+':'+'<br>'+'<br>'+
                                        'Ein isoliertes thermodynamisches System entwickelt sich spontan zu einem thermodynamischen Gleichgewichtszustand, den es nie von selbst verlässt.'+'</li>'+'<br>'+
                                        '<li>'+'<b>'+'Der Zustand des thermodynamischen Gleichgewichts'+'</b>'+' eines Systems kann durch Kontakt geändert werden:'+'<br>'+'<br>' +
                                        '- mechanisch mit der äußeren Umgebung'+'<br>'+
                                        '- thermisch mit einer anderen Umgebung (wenn sich zwei Körper mit unterschiedlichen Temperaturen berühren) oder mit der äußeren Umgebung'+'<br>'+
                                        '- Stoffaustausch mit der äußeren Umgebung oder einer anderen Umgebung'+'</li>'+'<br>'+
                                        '<li>'+'<b>'+'Der thermodynamische Prozess'+'</b>'+' (Zustandstransformation) stellt den Übergang des Systems von einem Zustand in einen anderen dar.'+'</li>' +' <br>'+
                                        '<li>'+'<b>'+'Quasistatische Transformation'+'</b>'+' tritt auf, wenn die Zwischenzustände, die das System durchläuft, Zustände des thermischen Gleichgewichts sind, wenn die Zustandsparameter sehr langsam variieren. ' +'</li>'+'<br>'+
                                        '<li>'+'<b>'+'Der reversible Prozess'+'</b>'+' ist die quasistatische Transformation, die in beide Richtungen über dieselben Zwischenzustände erfolgen kann.'+'</li>'+ '<br>'+
                                        '<li>'+'Die Zustandsgleichung (genannt Clapeyron - Mendeleev) beschreibt die Abhängigkeit zwischen den Zustandsparametern eines thermodynamischen Systems:'+'<br>'+'<br>'+
                                            'p ∙ V = ν ∙ R ∙ T'+'<br>'+'<br>'+
                                            'p = idealer Gasdruck'+'<br>'+
    
                                            'V = ideales Gasvolumen'+'<br>'+
    
                                            'ν = Anzahl der Mol des idealen Gases'+'<br>'+
    
                                            'R = universelle Gaskonstante = 8,3143 ∙ 10'+'<sup>'+'3'+'</sup>'+' J/kmol ∙ K'+'<br>'+
    
                                            'T = ideale Gastemperatur'+'</li>'+
                                '</ul>'+
                                '<h2 align = center>'+
                                '<img src = \"img/transformari.png\" width = 360>'+
                                '</h2>'+
                                '<h2 class=\"p-3\">'+'Empirische Temperatur. Temperaturskalen:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'Zwei von außen adiabatisch isolierte geschlossene thermodynamische Systeme, die keine Energie miteinander austauschen, haben die gleiche Temperatur, die sogenannte '+'<b>'+'empirische Temperatur.'+'</b> '+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Temperatur'+'</b>'+' ist eine physikalische Zustandsgröße, die mit einem Thermometer gemessen wird und einen thermometrischen Körper, eine thermometrische Größe und eine Temperaturskala umfasst.' +'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Das Nullprinzip der Thermodynamik'+'</b>'+' (Transitivität des thermischen Gleichgewichts):'+'<br>'+'<br>'+
                                        'Wenn System A im thermischen Gleichgewicht mit System B und System B im thermischen Gleichgewicht mit System C steht, dann befindet sich System A auch im thermischen Gleichgewicht mit System C.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Transformationsbeziehung'+'</b>'+' zwischen Celsius t(°C) und Fahrenheit tF (°F):'+'<br>'+ '<br>'+
                                        't'+'<sub>'+'F'+'</sub>'+' = 9/5 ∙ t(°C) + 32'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Kelvin-Skala'+'</b>'+' (absolut): '+'<br>'+'<br>'+
                                        '[T]'+'<sub>'+'SI'+'</sub>'+' = K (Kelvin)'+'<br>'+'<br>'+
                                        'T(K) = t (°C) + 273,15'+'</li>'+
                                '</ul>'+

                                //Principiul I
                                '<a name=\"element_target\">'+'</a>'+
                                '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center>'+'The Prinzip I'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                

                                '<h2 class=\"p-3\">'+'Mechanische Arbeit:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'Der Energieaustausch zwischen einem geschlossenen thermodynamischen System und der äußeren Umgebung kann auf zwei Arten erfolgen:'+'<br>'+'<br>'+
                                        '- Durch die Ausführung mechanischer Arbeit'+'<br>'+
                                        '- Durch Wärmeübertragung.'+'<br>'+'<br>'+
                                        
                                        'Das Maß für die Energie, die unter den Bedingungen der Wechselwirkungen, die zur Variation der Positionsparameter unter der Wirkung einiger Kräfte führen, auf das System übertragen wird, wird als '+'<b>'+'mechanische Arbeit.'+'</b>'+'<br>'+' <br>'+
                                        'L = F ∙ d'+'</li>'+'<br>'+
                                    '<li>'+'Die mechanische Arbeit, die von der äußeren Kraft F'+'<sub>'+'e'+'</sub>'+' verrichtet wird, ist:'+'<br>'+'<br>'+
                                        'L'+'<sub>'+'e'+'</sub>'+' = p'+'<sub>'+'e'+'</sub>'+' ∙ S ∙ (x1 - x2) = - p'+'<sub>'+'e'+'</sub>'+' ∙ ΔV'+'<br>'+'<br>'+
                                        'S = Querschnittsfläche des Zylinders'+'<br>'+
                                        'p'+'<sub>'+'e'+'</sub>'+' = äußerer Druck'+'<br>'+

                                        'V2 = S ∙ x2'+'<br>'+
                                        'V1 = S ∙ x1'+'<br>'+
                                        
                                        'ΔV = V2 - V1'+'</li>'+'<br>'+
                                    '<li>'+'Die mechanische Arbeit, die das thermodynamische System bei einer isobaren Transformation leistet, ist:'+'<br>'+'<br>'+
                                        'L = p ∙ ΔV'+'</li>'+'<br>'+
                                    
                                    '<li>'+'Vorzeichenkonventionen für die mechanische Arbeit des thermodynamischen Systems:'+'<br>'+'<br>'+
                                    
                                        'a) Wenn sich das Gas ausdehnt (sein Volumen vergrößert), ΔV > 0, dann ist L > 0 und das System verrichtet mechanische Arbeit am externen Medium (ergibt L).'+'<br>'+'<br>'+
                                    
                                        'b) Wenn das Gas komprimiert wird (sein Volumen abnimmt), ΔV < 0, dann ist L < 0 und es wird mechanische Arbeit am System verrichtet (erhält L).'+'<br>'+'<br>'+
                                    
                                        'c) Wenn keine Energieübertragung durch mechanische Arbeit zwischen dem System und der Außenwelt stattfindet (L = 0), ändert das Gas sein Volumen nicht (ΔV=0).'+'</li>'+'<br>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Mechanische Arbeit:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Die Energie der Teilchen eines realen Gases ist gegeben durch:'+'<br>'+'<br>'+
                                        '- Äußere Energie ergibt sich aus der Summe der kinetischen Energie des Gesamtsystems und seiner potentiellen Energie in einem Kraftfeld.'+'<br>'+'<br>'+
                                        '- Die innere Energie (U) ergibt sich aus der Summe der kinetischen Energien der Moleküle (E'+'<sub>'+'c'+'</sub>'+') und der potentiellen Wechselwirkungsenergien zwischen ihnen Moleküle des thermodynamischen Systems (E '+'<sub>'+'p'+'</sub>'+').'+'<br>'+'<br>'+
                                        'U = Ec + Ep'+'<br>'+'<br>'+
                                        '- Aber die interne Energieschwankung (ΔU = U'+'<sub>'+'2'+'</sub>'+' – U'+'<sub>'+'1'+'</sub> ' +') ist eine physikalische Zustandsgröße und hängt nicht von den Zwischenzuständen ab, die das System durchläuft, sondern nur vom Anfangszustand (U'+'<sub>'+'1'+'</sub>'+ ') und das Finale (U'+'<sub>'+'2'+'</sub>'+').'+

                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Die Hitze:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                    'Wärme (Q) ist eine physikalische Größe, die die Energie misst, die nur durch die ungeordnete Bewegung von Molekülen zwischen zwei Körpern in thermischem Kontakt übertragen wird.'+'<br>'+'<br>'+

                                    '[Q]'+'<sub>'+'SI'+'</sub>'+' = J(Joule)'+'<br>'+'<br>'+
                                    'Eine weitere tolerierte Maßeinheit für Wärme ist die Kalorie: 1cal = 4,18 J'+
                                '</li>'+'<br>'+
                                '<li>'+'Vorzeichenkonventionen für Wärme:'+'<br>'+'<br>'+
                                    'a) Wenn das System Wärme von außen erhält, dann ist Q > 0'+'<br>'+'<br>'+
                                    'b) Wenn das System Wärme nach außen abgibt, dann ist Q < 0'+'<br>'+'<br>'+
                                    'c) Wenn das System adiabatisch isoliert ist (keine Wärmeaustausch mit der Außenwelt), dann ist Q = 0'+
                                '</li>'+'<br>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Konsequenzen des ersten Prinzips der Thermodynamik:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'Beschreiben Sie das erste Prinzip der Thermodynamik:'+'<br>'+'<br>'+
                                        'Die Variation der inneren Energie eines Systems in einem Prozess ist:'+'<br>'+'<br>'+
                                        'ΔU = Q - L'+'</li>'+'<br>'+
                                    '<li>'+'Wenn das System isoliert ist (es tauscht weder Wärme noch mechanische Arbeit mit der Außenwelt aus), dann'+'<br>'+'<br>'+
                                        'Q = L = 0, ΔU = U2 – U1 = 0 und U1 = U2, d. h. die innere Energie eines isolierten Systems bleibt erhalten.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Die Gleichung des ersten Prinzips der Thermodynamik kann auch in Form der Definition von Wärme geschrieben werden:'+'<br>'+'<br>'+
                                        'Q = ΔU + L, d. h. die von einem System aufgenommene Wärme dient sowohl der Veränderung der inneren Energie des Systems als auch der Verrichtung mechanischer Arbeit durch das System.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Wenn das System adiabatisch isoliert ist (keine Wärmeaustausch mit der Außenwelt), dann'+'<br>'+'<br>'+
                                        'Q = 0 und L = –ΔU = –(U2 – U1), d. h. ein isoliertes adiabatisches System tauscht nur aufgrund der Variation der inneren Energie mechanische Arbeit mit der Außenwelt aus.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Wenn das System keine mechanische Arbeit mit der Außenwelt austauscht (L= 0), sondern nur Wärme, dann'+'<br>'+'<br>'+
                                        'ΔU = Q, d. h. die vom System aufgenommene Wärme führt zu einer Erhöhung der inneren Energie des Systems.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Bei einer zyklischen Transformation ist ΔU = U2 – U1 = 0 und L = Q, das heißt, das System kann nur dann mechanische Arbeit leisten, wenn es Wärme von außen erhält.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Daraus folgt die Unmöglichkeit der Existenz eines Perpetuum Mobile erster Art (ein Gerät, das mechanische Arbeit leistet, ohne Energie von außen zu verbrauchen).'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Kalorische Koeffizienten:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Die spezifische Wärme (c) stellt die physikalische Größe dar, die die Wärme charakterisiert, die von 1 kg Stoff aufgenommen/abgegeben wird, um seine Temperatur um ein Grad zu erhöhen/zu senken. Sie ist eine Materialkonstante und kann in der Konstantentabelle am Ende dieses Kapitels gefunden werden.'+'<br>'+'<br>'+
                                        'c = 1 / m ∙ Q / ΔT'+'<br>'+'<br>'+
                                        '[c]'+'<sub>'+'SI'+'</sub>'+' = J/Kg∙K'+'<br>'+'<br>'+
                                        'Q = m ∙ c ∙ ΔT'+'<br>'+
                                        'm = Körpermasse'+'<br>'+
                                        'c = spezifische Wärme'+'<br>'+
                                        'ΔT = T'+'<sub>'+'final'+'</sub>'+' – T'+'<sub>'+'initial'+'</sub>'+' , die Körpertemperatur Variation '+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'erhalten'+'</sub>'+' > 0'+'<br>'+
                                        'Q'+'<sub>'+'datum'+'</sub>'+'< 0 '+'<br>'+'<br>'+
                                        'Die kalorimetrische Gleichung: '+'<br>'+'Q'+'<sub>'+'erhalten'+'</sub>'+' = | Q'+'<sub>'+'datum'+'</sub>'+' |'+'<br>'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Die Wärmekapazität (C) stellt die physikalische Größe dar, die die Wärmemenge charakterisiert, die das thermodynamische System benötigt, um seine Temperatur um ein Grad zu ändern.'+'<br>'+'<br>'+
                                        'C = Q / ΔT'+'<br>'+'<br>'+
                                        '[C]'+'<sub>'+'SI'+'</sub>'+' = J/Kg'+'<br>'+'<br>'+
                                        'Q = C ∙ ΔT'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Molare Wärme (C'+'<sub>'+'μ'+'</sub>'+') ist die Wärme, die erforderlich ist, um die Temperatur eines Mols einer Substanz um ein Grad zu ändern.'+'<br> ' +'<br>'+
                                        'C'+'<sub>'+'μ'+'</sub>'+' = Q / v ∙ ΔT'+
                                        '[C'+'<sub>'+'μ'+'</sub>'+'] = J/mol∙K'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Freiheitsgrade:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'Da in der Thermodynamik ideale Gasmoleküle als materielle Punkte gelten, werden die unabhängigen Koordinaten, die das thermodynamische System charakterisieren, Freiheitsgrade genannt.'+'<br>'+'<br>'+
                                        '- Für einatomige Gase: i = 3'+'<br>'+
                                        '- Für zweiatomige Gase: i = 5'+'<br>'+
                                        '- Für mehratomige Gase: i = 6'+'<br>'+'<br>'+

                                        'Die molare Wärme bei konstantem Volumen beträgt:'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'v'+'</sub>'+' = i/2 R'+'<br>'+'<br>'+
                                        'Die molare Wärme bei konstantem Druck beträgt:'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = (i + 2)/2 R'+'<br>'+'<br>'+
                                        'R = 8,3143 ∙ 10'+'<sup>'+'3'+'</sup>'+' J/kmol ∙ K (universelle Gaskonstante)'+'</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Isochorentransformation :'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'(ν und V const.) → ΔV = 0 → L'+'<sub>'+'V'+'</sub>'+' = p ∙ ΔV = 0'+'</li>'+'<br>'+
                                    '<li>'+'Wir haben zwei Fälle:'+'<br>'+'<br>'+
                                        '- Das in einem konstanten Volumen eingeschlossene Gas wird erhitzt, nimmt Wärme auf → QV > 0 und ΔU > 0 (erhöht die innere Energie des Gases).'+'<br>'+'<br>'+
                                        '- Das in einem konstanten Volumen eingeschlossene Gas wird abgekühlt, es gibt Wärme ab → QV < 0 und ΔU < 0 (die innere Energie des Gases nimmt ab)'+'</li>'+'<br>'+
                                    '<li>'+' Formeln: '+'<br>'+'<br>'+
                                        
                                        'ΔU = Q'+'<sub>'+'V'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ ΔT '+'<br>'+'<br>'+
                                        'ΔU = U – U'+'<sub>'+'0'+'</sub>'+' und ΔT = T – T'+'<sub>'+'0'+'</sub>' +', für T'+'<sub>'+'0'+'</sub>'+' = 0 K → U'+'<sub>'+'0'+'</sub>'+' = 0'+'<br>'+'<br>'+
                                        'Die innere Energie eines einatomigen idealen Gases ist:'+'<br>'+
                                        'U = ν ∙ C'+'<sub>'+'V'+'</sub>'+'∙ T = 3/2 ∙ ν ∙ R ∙ T'+'</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Isobare Transformation:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        '(ν und p const.)'+'<br>'+'<br>'+
                                        'Wenn das Gas erhitzt wird, nimmt es Wärme auf → Qp > 0 und ein Teil der Energie wird zur Erhöhung der inneren Energie des Gases verwendet ΔU > 0 und der andere Teil ist die mechanische Arbeit, die das Gas außen verrichtet, L > 0.'+
                                    '</li>'+'<br>'+
                                    '<li>'+' Formeln: '+'<br>'+'<br>'+
                                            'L = p ∙ ΔV'+'<br>'+'<br>'+
                                            'Q'+'<sub>'+'p'+'</sub>'+' = ν ∙ C'+'<sub>'+'p'+'</sub>'+' ∙ ΔT'+ '<br>'+'<br>'+
                                            'Die interne Energieschwankung hängt nicht vom Prozess ab und wir können schreiben:'+'<br>'+
                                            'ΔU = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ ΔT'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Isotherme Transformation:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        '(ν und T const.) → U = const. und ΔU = 0.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Wenn das Gas erhitzt wird, nimmt es Wärme auf → QT > 0 und L > 0 und wird vollständig zur Verrichtung mechanischer Arbeit an der Außenseite verwendet.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Bei einer isothermen Umwandlung ist der Druck umgekehrt proportional zum Volumen des Gases und wir haben dann mechanische Arbeit.'+
                                    '</li>'+'<br>'+
                                    '<li>'+' Formeln: '+'<br>'+'<br>'+
                                        'L'+'<sub>'+'T'+'</sub>'+' = v ∙ R ∙ T ∙ ln(V'+'<sub>'+'2'+'</sub>' +' / V'+'<sub>'+'1'+'</sub>'+')'+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'T'+'</sub>'+' = L'+'<sub>'+'T'+'</sub>'+' = v ∙ R ∙ T ∙ ln(V'+'<sub>'+'2'+'</sub>'+' / V'+'<sub>'+'1'+'</sub>'+')'+' <br>'+'<br>'+
                                        'p'+'<sub>'+'1'+'</sub>'+' ∙ V'+'<sub>'+'1'+'</sub>'+' = p'+'<sub>'+'2'+'</sub>'+' ∙ V'+'<sub>'+'2'+'</sub>'+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'T'+'</sub>'+' = L'+'<sub>'+'T'+'</sub>'+' = v ∙ R ∙ T ∙ ln(V'+'<sub>'+'2'+'</sub>'+' / V'+'<sub>'+'1'+'</sub>'+') = v ∙ R ∙ T ∙ ln(p1 / p2)'+'<br>'+'<br>'+
                                        'U = const und ΔU = 0'+
                                    '</li>'+'<br>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Adiabatische Transformation:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        '(ν const.) → Qad = 0'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Formel:'+'<br>'+'<br>'+
                                        'ΔU = - L'+'<sub>'+'ad'+'</sub>'+'<br>'+'<br>'+
                                        'ΔU = ν ∙ C'+'<sub>'+'v'+'</sub>'+' ∙ΔT'+'<br>'+'<br>'+
                                        'L'+'<sub>'+'ad'+'</sub>'+' = - ν ∙ C'+'<sub>'+'v'+'</sub>'+' ∙ ΔT' +'<br>'+'<br>'+
                                        'Die Gleichung des adiabatischen Prozesses heißt Poisson-Gleichung:'+'<br>'+
                                        'p ∙ V'+'<sup>'+'y'+'</sup>'+' = const.'+'<br>'+
                                        'y = adiabatischer Koeffizient = C'+'<sub>'+'p'+'</sub>'+' / C'+'<sub>'+'V'+'</sub>'+'<br>'+
                                        'T ∙ V'+'<sup>'+'y-1'+'</sup>'+' - const'+
                                        'T'+'<sup>'+'y'+'</sup>'+' / p '+'<sup>'+'y-1'+'</sup>'+' = const'+
                                    '</li>'+
                                '</ul>'+
                                
                                '<h2 class=\"p-3\">'+'Robert-Mayer-Beziehung:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Im Falle einer Isochorentransformation:'+'<br>'+'<br>'+
                                        'ΔU = Q'+'<sub>'+'V'+'</sub>'+' = v ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ ΔT '+'<br>'+'<br>'+
                                        'C'+'<sub>'+'V'+'</sub>'+' = Q'+'<sub>'+'V'+'</sub>'+' / (v ∙ ΔT) = ΔU / (v ∙ ΔT)'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Im Falle einer isobaren Transformation:'+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'p'+'</sub>'+' = (v ∙ C'+'<sub>'+'p'+'</sub>'+' ∙ ΔT) = ΔU + p ∙ ΔV'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = Q'+'<sub>'+'p'+'</sub>'+' / (v ∙ ΔT) = (ΔU + p ∙ ΔV) / (v ∙ ΔT)'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Wenn wir die beiden Beziehungen von Cp und CV kombinieren, erhalten wir:'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = C'+'<sub>'+'V'+'</sub>'+' + (p ∙ ΔV) / (v ∙ ΔT)'+'<br>'+'<br>'+
                                        'Aus der thermischen Zustandsgleichung:'+'<br>'+'<br>'+
                                        'p ∙ ΔV = ν ∙ R ∙ ΔT'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Die Robert-Mayer-Beziehung stellt die Beziehung zwischen molaren Wärmen her:'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = C'+'<sub>'+'V'+'</sub>'+' + R'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Die Robert-Mayer-Beziehung stellt die Beziehung zwischen molaren spezifischen Wärmen her:'+'<br>'+'<br>'+
                                        'c'+'<sub>'+'p'+'</sub>'+' = c'+'<sub>'+'V'+'</sub>'+' + (R / μ) '+
                                    '</li>'+
                                '</ul>'+


                                //Motoare termice
                                '<a name=\"element_target2\">'+'</a>'+
                                '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center>'+'Engines Thermal'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                
                                '<h2 class=\"p-3\">'+'Thermische Maschinen:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Während einer bithermischen zyklischen Transformation tauscht das thermodynamische System Wärme Q'+'<sub>'+'1'+'</sub>'+' bzw. Q'+'<sub>'+'2'+'</sub>'+' mit zwei Wärmequellen, deren Temperaturen T'+'<sub>'+'1'+'</sub>'+' (heiße Quelle) und T'+'<sub>'+ '2 sind '+'</sub>'+' (kalte Quelle), mit T'+'<sub>'+'1'+'</sub>'+' > T'+'<sub>'+' 2' +'</sub>'+' .'+'<br>'+'<br>'+
                                            'Da zyklische Transformationen ΔU = 0 haben, gilt nach dem ersten Prinzip der Thermodynamik'+'<br>'+'<br>'+
                                            'Q'+'<sub>'+'1'+'</sub>'+' + Q'+'<sub>'+'2'+'</sub>'+' = L'+'<br>'+'<br>'+

                                            'Die Wärmekraftmaschine ist ein thermodynamisches System, das eine zyklische Umwandlung durchführt, bei der es Wärme und mechanische Arbeit mit der äußeren Umgebung austauscht.'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Wärmekraftmaschinen:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Die Wärmekraftmaschine ist ein System, das die aufgenommene Wärme durch die Verbrennung eines Kraftstoffs (Benzin, Diesel, Methangas usw.) in mechanische Arbeit umwandelt.'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Die Otto-Engine:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Der Ottomotor nutzt als Kraftstoff ein Gemisch aus Luft und Benzindämpfen, das im Vergaser entsteht.'+'<br>'+'<br>'+
                                        '- Das Kraftstoffgemisch wird durch das Einlassventil (S1) in den Kolbenzylinder gesaugt.'+'<br>'+'<br>'+
                                        '- Die bei der Verbrennung des Kraftstoffgemisches entstehenden Gase werden durch das Auslassventil (S2) ausgeschieden.'+'<br>'+'<br>'+
                                        '- Betriebszeit ist die Zeitspanne der Verschiebung des Kolbens vom oberen Totpunkt = TDC (Zylinder schließt ein minimales Substanzvolumen) zum unteren Totpunkt = PMI (Zylinder schließt ein maximales Substanzvolumen) und umgekehrt.'+'<br>'+'<br>'+
                                        '- Der Kolben ist mit einem Pleuel-Kurbel-System (vilbrochen = Kurbelwelle) verbunden, um die geradlinige Bewegung des Kolbens in eine Drehbewegung umzuwandeln.'+'<br>'+'<br>'+
                                        '- Der Motorblock besteht aus mehreren in Reihe geschalteten Zylindern. Jeder Kolben hat eine unterschiedliche Auslösezeit, um eine dauerhafte und konstante Drehung des Vilborchens zu ermöglichen.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Otto-Motorlaufzeiten:'+'<br>'+'<br>'+

                                        ' - '+'<b>'+'Zeitpunkt 1: Einlass'+'</b>'+' - (Isobarenverfahren):'+'<br>'+'<br>'+
                                        ' Das Einlassventil öffnet sich, das Benzin-Luft-Gemisch wird in den Zylinder gesaugt und der Kolben senkt sich bei konstantem Druck von OT zu OT. Es ist der erste Abstieg des Kolbens.'+'<br>'+'<br>'+
                                        
                                        ' -'+'<b>'+'Zeit 2: Kompression'+'</b>'+' - (adiabatischer Prozess):'+'<br>'+'<br>'+
                                        ' Beide Ventile sind geschlossen. Der Kolben bewegt sich bis zum oberen Totpunkt, wodurch der Kraftstoff stark komprimiert wird. Dabei steigen Druck und Temperatur. Aufgrund der hohen Kompressionsgeschwindigkeit ist dieser Prozess adiabatisch (kein Wärmeaustausch mit der Außenwelt). Es ist der erste Anstieg des Kolbens.'+'<br>'+'<br>'+
                                        ' -'+'<b>'+'Zeit 3: Zündung'+'</b>'+' - (Isochorenprozess) und '+'<b>'+'Entspannung'+'</b>'+ ' - (adiabatischer Prozess):'+'<br>'+'<br>'+
                                        ' Beide Ventile sind geschlossen und der Kolben steht im oberen Totpunkt. Der von der Zündkerze erzeugte elektrische Funke entzündet das Gemisch, das explodiert und bei konstantem Volumen zu einem erheblichen Druckanstieg führt. Das Gemisch verbrennt unter Freisetzung von Wärme (Q1 = vom Motor aufgenommene Wärme). Die bei der Verbrennung entstehenden Gase dehnen sich adiabatisch aus und drücken den Kolben durch die geleistete mechanische Arbeit in den PMI.'+'<br>'+'<br>'+

                                        ' -'+'<b>'+'Zeit 4: Evakuierung'+'</b>'+' - (isochorischer Prozess) und (isobarer Prozess):'+'<br>'+'<br>'+
                                        ' Das Auslassventil S2 öffnet, wobei der Druck schlagartig auf den Wert des Atmosphärendrucks abfällt. Bei diesem isochoren Prozess gibt das Gemisch die Wärme Q2 an die Außenumgebung ab. Der Kolben bewegt sich bis zum oberen Totpunkt und drückt die verbrannten Gase bei konstantem Druck heraus. Von hier aus wird der Zyklus fortgesetzt.'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Wirkungsgrad der Otto-Wärmekraftmaschine:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Der Wirkungsgrad der Otto-Wärmekraftmaschine (η) ist eine physikalische Größe, die dem Verhältnis zwischen der vom Motor geleisteten mechanischen Arbeit (L) und der aufgenommenen Wärme (Q) entspricht.'+'<br>'+'<br> '+
                                        'η = L / Q'+'<sub>'+'1'+'</sub>'+' = 1 - (|Q'+'<sub>'+'datum'+'</sub>' +'|. / Q'+'<sub>'+'erhalten'+'</sub>'+') = 1 - (|Q'+'<sub>'+'2'+'</sub> ' +'|. / Q'+'<sub>'+'1'+'</sub>'+')'+'<br>'+'<br>'+

                                        'Wir gehen davon aus, dass der Arbeitsstoff ein ideales Gas ist und das Kompressionsverhältnis ε = V'+'<sub>'+'1'+'</sub>'+'/V'+'<sub>'+'2 beträgt '+'</sub>'+'.'+'<br>'+'<br>'+

                                        'Die Wärmemengen in den vier Transformationen sind:'+'<br>'+'<br>'+
                                        ' - Q'+'<sub>'+'12'+'</sub>'+' = 0'+'<br>'+
                                        ' - Q'+'<sub>'+'23'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T '+'<sub>'+'3'+'</sub>'+' – T'+'<sub>'+'2'+'</sub>'+') = Q'+'<sub>'+'1'+'</sub>'+' > 0'+'<br>'+
                                        ' - Q'+'<sub>'+'34'+'</sub>'+' = 0'+'<br>'+
                                        ' - Q'+'<sub>'+'41'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T '+'<sub>'+'31'+'</sub>'+' – T'+'<sub>'+'4'+'</sub>'+') = Q'+'<sub>'+'2'+'</sub>'+' < 0'+'<br>'+'<br>'+

                                        ' η = 1 - (1 / ε'+'<sup>'+'y-1'+'</sup>'+')'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Dieselmotor:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Der Dieselmotor ist ein Viertakt-Verbrennungsmotor mit Dieseleinspritzung.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                    'Laufzeiten Dieselmotor:'+'<br>'+'<br>'+
                                        '- '+'<b>'+'Zeitpunkt 1: Aufnahme '+'</b>'+' - (Isobarenprozess):'+'<br>'+'<br>'+
                                        'Das Einlassventil öffnet sich, Luft wird bei Atmosphärendruck in den Zylinder gesaugt und der Kolben senkt sich bei konstantem Druck von OT zu OT (isobarer Prozess). Es ist der erste Abstieg des Kolbens.'+'<br>'+'<br>'+
                                        '- '+'<b>'+'Zeit 2: Kompression'+'</b>'+' - (adiabatischer Prozess):'+'<br>'+'<br>'+
                                        'Beide Ventile sind geschlossen.“ Der Kolben steigt auf den oberen Totpunkt, die Luft wird also stark komprimiert, wodurch Druck und Temperatur deutlich ansteigen. Aufgrund der hohen Kompressionsgeschwindigkeit ist dieser Prozess adiabatisch (kein Wärmeaustausch mit der Außenwelt). Es ist der erste Anstieg des Kolbens.'+'<br>'+'<br>'+                                        '- '+'<b>'+'Zeit 3: Zündung'+'</b>'+' - (isobarer Prozess) und '+'<b>'+'Entspannung'+'</b>'+ ' - (adiabatischer Prozess):'+'<br>'+'<br>'+
                                        'Beide Ventile sind geschlossen und der Kolben steht im OT.“ Die Einspritzpumpe spritzt Dieselkraftstoff in den Motorzylinder. Die Temperatur der Luft im Zylinder ist höher als die Zündtemperatur des Diesels, daher zündet und verbrennt er bei konstantem Druck und setzt dabei Wärme frei (Q1 = vom Motor aufgenommene Wärme). Die bei der Verbrennung entstehenden Gase dehnen sich adiabatisch aus und drücken den Kolben durch die geleistete mechanische Arbeit in den PMI.'+'<br>'+'<br>'+
                                        '- '+'<b>'+'Zeit 4: Evakuierung'+'</b>'+' - (isochorischer Prozess) und (isobarer Prozess):'+'<br>'+'<br>'+
                                        'Das Auslassventil S2 öffnet, wodurch der Druck schlagartig auf Atmosphärendruck absinkt.“ Bei diesem isochoren Prozess (bei konstantem Volumen) gibt das Gemisch Wärme Q2 an die Außenumgebung ab. Der Kolben bewegt sich bis zum oberen Totpunkt und drückt die verbrannten Gase bei konstantem Druck heraus. Von hier aus wird der Zyklus fortgesetzt.'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Wirkungsgrad des Diesel-Wärmemotors:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Der Wirkungsgrad der Diesel-Wärmekraftmaschine (η) ist eine physikalische Größe, die dem Verhältnis zwischen der vom Motor geleisteten mechanischen Arbeit (L) und der aufgenommenen Wärme (Q) entspricht.'+'<br>'+'<br> '+
                                        'η = L / Q'+'<sub>'+'1'+'</sub>'+' = 1 - (|Q'+'<sub>'+'datum'+'</sub>' +'|. / Q'+'<sub>'+'erhalten'+'</sub>'+') = 1 - (|Q'+'<sub>'+'2'+'</sub> ' +'|. / Q'+'<sub>'+'1'+'</sub>'+')'+'<br>'+'<br>'+

                                        'Wir gehen davon aus, dass der Arbeitsstoff ein ideales Gas ist und das Kompressionsverhältnis ε = V'+'<sub>'+'1'+'</sub>'+'/V'+'<sub>'+'2 beträgt '+'</sub>'+' und α = V'+'<sub>'+'3'+'</sub>'+'/V'+'<sub>'+'2'+'</sub>'+'<br>'+'<br>'+

                                        'Die Wärmemengen in den vier Transformationen sind:'+'<br>'+'<br>'+
                                        '- Q'+'<sub>'+'12'+'</sub>'+' = 0 (adiabatischer Prozess)'+'<br>'+
                                        '- Q'+'<sub>'+'23'+'</sub>'+' = ν ∙ C'+'<sub>'+'p'+'</sub>'+' ∙ (T '+'<sub>'+'3'+'</sub>'+' – T'+'<sub>'+'2'+'</sub>'+') = Q'+'<sub>'+'1'+'</sub>'+' > 0 (isobarer Prozess)'+'<br>'+
                                        '- Q'+'<sub>'+'34'+'</sub>'+' = 0 (adiabatischer Prozess)'+'<br>'+
                                        '- Q'+'<sub>'+'41'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T '+'<sub>'+'1'+'</sub>'+' – T'+'<sub>'+'4'+'</sub>'+') = Q'+'<sub>'+'2'+'</sub>'+' < 0 (isochorischer Prozess)'+'<br>'+'<br>'+

                                        'η = 1 - (1 / y) ∙ (a'+'<sup>'+'y-1'+'</sup>'+' / ε'+'<sup>'+'y-1' +'</sup>'+'(a-1))'+
                                        
                                    '</li>'+
                                '</ul>'+
                                

                                //Principiul al II-lea

                                '<a name=\"element_target3\">'+'</a>'+
                                '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center>'+'The Prinzip II'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                '<h2 class=\"p-3\">'+'Carnots Formulierung des zweiten Hauptsatzes der Thermodynamik:'+'</h2>'+
                                '<ul>'+
                                '<li>'+
                                        'Die erste Formulierung des zweiten Hauptsatzes der Thermodynamik stammt von Sadi Carnot, der 1824 zeigte, dass es eine Obergrenze für die Effizienz der Umwandlung von Wärme in mechanische Energie in einer Wärmekraftmaschine gibt, die die Verwendung eines thermodynamischen Kreisprozesses beinhaltet.“ eine Arbeitsflüssigkeit.' +
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Carnot hat als erster gezeigt, dass es nicht möglich ist, eine Wärmekraftmaschine mit einem einzigen Thermostat zu betreiben, sondern dass mindestens zwei Thermostate erforderlich sind.“ Somit erhält das System Wärme von einer warmen Quelle (Thermostat mit T'+'<sub>'+'1'+'</sub>'+') und gibt Wärme an eine kalte Quelle (Thermostat mit T'+'<sub>'+'2'+'</sub>'+').'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Gasparameter im Ausgangszustand sind p'+'<sub>'+'1'+'</sub>'+', V'+'<sub>'+'1'+'</sub>'+' und T'+'<sub>'+'1'+'</sub>'+'.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Wir bringen die Gasflasche zu einer Heizung (Thermostat mit T'+'<sub>'+'1'+'</sub>'+'). Das Gas absorbiert Wärme Q'+'<sub>'+'1'+'</sub>'+' von der heißen Quelle und dehnt sich isotherm aus (T'+'<sub>'+'1'+'</sub>'+' = const.) und quasistatisch von V'+'<sub>'+'1'+'</sub>'+' bis V'+'<sub>'+'2'+' </sub>'+', Verrichtung der mechanischen Arbeit L'+'<sub>'+'1'+'</sub>'+'.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Wir bringen die Gasflasche auf eine wärmeisolierende Unterlage. Das Gas dehnt sich adiabatisch auf V'+'<sub>'+'3'+'</sub>'+' aus und verrichtet dabei mechanische Arbeit L'+'<sub>'+'2'+'</sub>' + '. Das Gas kühlt auf die Temperatur T'+'<sub>'+'2'+'</sub>'+' < T'+'<sub>'+'1'+'</sub>'+' ab. ' +
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Wir bringen die Gasflasche zu einer Kältequelle (Thermostat mit T'+'<sub>'+'2'+'</sub>'+'). Das Gas gibt Wärme Q'+'<sub>'+'2'+'</sub>'+' ab und verdichtet sich isotherm (T'+'<sub>'+'2'+'</sub> ' +' = const.) und quasistatisch von V'+'<sub>'+'3'+'</sub>'+' bis V'+'<sub>'+'4'+'</sub> '+', Empfang der mechanischen Arbeit L'+'<sub>'+'3'+'</sub>'+'.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Wir bringen die Gasflasche auf eine wärmeisolierende Unterlage. Das Gas wird adiabatisch von V'+'<sub>'+'4'+'</sub>'+' auf '+'<sub>'+'1'+'</sub>'+' komprimiert. Seine Temperatur wird von T'+'<sub>'+'2'+'</sub>'+' auf T'+'<sub>'+'1'+'</sub>'+' ansteigen und empfangen die mechanische Arbeit L'+'<sub>'+'4'+'</sub>'+'. Das Gas kehrt in seinen Ausgangszustand zurück.'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Carnot-Zyklus-Ausbeute:'+'</h2>'+
                                '<ul>'+
                                '<li>'+
                                    'Der Wirkungsgrad des Carnot-Zyklus (η) ist eine physikalische Größe, die dem Verhältnis zwischen der vom Motor geleisteten mechanischen Arbeit (L) und der aufgenommenen Wärme (Q'+'<sub>'+'1'+'</sub>'+'). '+'<br>'+'<br>'+
                                    'η = L / Q'+'<sub>'+'1'+'</sub>'+'<br>'+'<br>'+
                                    'L = L'+'<sub>'+'1'+'</sub>'+' + L'+'<sub>'+'2'+'</sub>'+' + L'+ '<sub>'+'3'+'</sub>'+' + L'+'<sub>'+'4'+'</sub>'+
                                '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Carnots Formulierung des zweiten Hauptsatzes der Thermodynamik:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Die Ausbeute des Carnot-Zyklus ist immer Untereinheit, weil T'+'<sub>'+'2'+'</sub>'+' ≠ 0'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Die Leistung des Carnot-Zyklus hängt nur von der Temperatur der heißen Quelle (T'+'<sub>'+'1'+'</sub>'+') und der kalten Quelle (T'+'<sub>'+'2' +'</sub>'+') und ist unabhängig vom Arbeitsstoff.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Der Wirkungsgrad einer irreversiblen Wärmekraftmaschine ist immer geringer als der Wirkungsgrad einer Wärmekraftmaschine, die reversibel zwischen denselben Temperaturgrenzen arbeitet.'+
                                    '</li>'+
                                '</ul>'),

        //teorieElectromecanica.html
        "teorieElectromecanicaTitle": "Theorie der Elektromechanik",
        "teorieElectromecanica": ('<u>' +'<h2 class="p-3" align = center>Elektrischer Strom</h2><br><br><br>' +'</u>'         
                                +'<ul>'
                                    +'<li>'
                                        +'Elektrischer Strom ist die geordnete Bewegung von Ladungsträgern durch einen Stromkreis.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'<b>Ladungsträger</b>, deren Bewegung den elektrischen Strom verursacht, können sein:<br><br>'
                                        +'a) Freie Elektronen in Metallen.<br><br>'
                                        +'b) Ionen und Elektronen in Elektrolyten (Lösungen oder Schmelzen von Säuren, Basen oder Salzen) und in Gasen.'
                                    +'</li>'
                                +'</ul>'
                                +'<h2 class="p-3">Komponenten eines Stromkreises:</h2>'
                                +'<ul>'
                                    +'<li>'
                                        +'Elektrische Generatoren<br><br>'
                                        +'- Gleichstromgeneratoren<br><br>'
                                        +'- Wechselstromgeneratoren'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Elektrische Geräte<br><br>'
                                        +'- Glühbirne<br><br>'
                                        +'- Elektrischer Widerstand<br><br>'
                                        +'- Elektromotor<br><br>'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Verbindungsdrähte<br>'
                                        +'sind aus Aluminium oder Kupfer hergestellt und verbinden die Komponenten des Stromkreises miteinander.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Elektrische Schalter<br>'
                                        +'die den Stromkreis öffnen und schließen. Nur wenn der Schalter geschlossen ist, fließt der elektrische Strom durch den Stromkreis.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Die konventionelle Richtung des Gleichstroms in einem Stromkreis ist von der positiven Klemme der Quelle zur negativen Klemme durch den äußeren Stromkreis (durch die Verbraucher).'
                                    +'</li>'
                                +'</ul>'
                                +'<h2 class="p-3">Stromstärke:</h2>'
                                +'<ul>'
                                    +'<li>'
                                        +'Wenn wir eine elektrische Spannung zwischen zwei Punkten eines Leiters anlegen, entsteht ein elektrischer Strom, d. h. eine gerichtete Bewegung der freien Elektronen, die eine Ladung q = n ∙ e transportieren.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Die Stromstärke (I) ist eine skalare physikalische Größe, die gleich dem Verhältnis zwischen der elektrischen Ladung (q), die durch den Querschnitt eines Leiters fließt, und dem Zeitintervall (Δt) ist.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Charakterisierung der Stromstärke als physikalische Größe:<br><br>'
                                        +'I = Elektrische Ladung / Zeit = q / Δt = (n ∙ e) / Δt<br><br>'
                                        +'n - Anzahl der Elektronen<br><br>'
                                        +'e - Ladung eines Elektrons (im Betrag)<br><br>'
                                        +'e = 1,6 ∙ 10<sup>-19</sup> C'
                                    +'</li>'
                                +'</ul>'
                                +'<h2 class="p-3">Elektrische Spannung:</h2>'
                                +'<ul>'
                                    +'<li>'
                                        +'<b>Elektrische Generatoren</b> (Stromquellen) sind Geräte, die den elektrischen Strom in einem Stromkreis erzeugen und aufrechterhalten, d. h. sie bewirken die Bewegung der Ladungsträger durch den Stromkreis. Sie verrichten mechanische Arbeit an diesen Ladungsträgern, um sie zu bewegen.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'<b>Elektromotorische Kraft</b> (abgekürzt EMK, Symbol E) einer Quelle ist eine skalare physikalische Größe, die die mechanische Arbeit misst, die von der Quelle (L<sub>total</sub>) verrichtet wird, um eine Einheit elektrischer Ladung (q) durch den gesamten Stromkreis zu bewegen.<br><br>'
                                        +'E = L<sub>total</sub> / q<br><br>'
                                        +'Die Maßeinheit für die elektrische Spannung im SI ist das Volt (V):<br><br>'
                                        +'[E]<sub>SI</sub> = [L]<sub>SI</sub> / [q]<sub>SI</sub> = J / C = V (Volt)'
                                    +'</li><br>'
                                    +'<li>'
                                        +'<b>Die gesamte mechanische Arbeit</b>, die von der Quelle verrichtet wird, um die Ladung q durch den gesamten Stromkreis zu bewegen, ist gleich der äußeren mechanischen Arbeit, die von der Quelle verrichtet wird, um die Ladung q durch den äußeren Stromkreis zu bewegen (L<sub>ext</sub>), und der mechanischen Arbeit, die von der Quelle verrichtet wird, um die Ladung q durch den inneren Stromkreis der Quelle zu bewegen (L<sub>int</sub>):<br><br>'
                                        +'L<sub>total</sub> = L<sub>ext</sub> + L<sub>int</sub><br><br>'
                                        +'L<sub>total</sub> / q = (L<sub>ext</sub> / q) + (L<sub>int</sub> / q)'
                                    +'</li><br>'
                                    +'<li>'
                                        +'<b>Die Klemmenspannung</b> (Symbol U) ist eine skalare physikalische Größe, die die mechanische Arbeit misst, die von der Quelle (L<sub>ext</sub>) verrichtet wird, um eine Einheit elektrischer Ladung (q) durch den äußeren Stromkreis zu bewegen.<br><br>'
                                        +'U = L<sub>ext</sub> / q'
                                    +'</li><br>'
                                    +'<li>'
                                        +'<b>Die innere Spannung</b> (Symbol u) ist eine skalare physikalische Größe, die die mechanische Arbeit misst, die von der Quelle (L<sub>int</sub>) verrichtet wird, um eine Einheit elektrischer Ladung (q) durch den inneren Stromkreis zu bewegen.<br><br>'
                                        +'u = L<sub>int</sub> / q'
                                    +'</li>'
                                    +'<li>'
                                        +'So erhalten wir die Beziehung zwischen den drei elektrischen Spannungen eines Stromkreises:<br><br>'
                                        +'E = U + u'
                                    +'</li><br>'
                                    +'<li>'
                                        +'U = Mechanische Arbeit / Elektrische Ladung<br><br>'
                                        +'U = L / q'
                                    +'</li>'
                                +'</ul>'        

                        //Legea lui Ohm
                        +'<a name="element_target"></a>'
                        +'<br><br><br><br><u><h2 class="p-3" align = center>Ohms Gesetz</h2><br><br><br></u>'

                        +'<h2 class="p-3">Elektrische Spannung:</h2>'
                        +'<ul>'
                            +'<li>'
                                +'Messung des elektrischen Widerstands'
                            +'</li><br>'
                            +'<li>'
                                +'Die Proportionalitätskonstante zwischen der angelegten Spannung (U) und der Stromstärke (I) ist als der elektrische Widerstand des Leiters bekannt.'
                            +'</li><br>'
                            +'<li>'
                                +'Der elektrische Widerstand ist die physikalische Größe, die zeigt, wie stark sich ein Leiter dem Fluss des elektrischen Stroms widersetzt.'
                            +'</li><br>'
                            +'<li>'
                                +'Der elektrische Widerstand eines Leiters (R) ist die skalare Größe, die gleich dem Verhältnis zwischen der angelegten Spannung (U) an den Enden des Leiters und der Stromstärke (I) ist, die durch ihn fließt, wenn die Temperatur des Leiters konstant bleibt.'
                            +'</li><br>'
                            +'<li>'
                                +'Charakterisierung des elektrischen Widerstands als physikalische Größe:<br><br>'
                                +'R = Elektrische Spannung / Elektrische Stromstärke = U / I<br><br>'
                                +'[R]<sub>SI</sub> = [U]<sub>SI</sub> / [I]<sub>SI</sub> = V / A = Ω (Ohm)<br><br>'
                                +'Die Abhängigkeit des elektrischen Widerstands von der Beschaffenheit und den Abmessungen des Leiters ist:<br><br>'
                                +'R = ρ ∙ (l / S) <br><br>'
                                +'l - Länge des Leiters<br>'
                                +'S - Querschnittsfläche des Leiters<br>'
                                +'ρ - Elektrische Resistivität des Leiterwerkstoffs:<br><br>'
                                +'[ρ]<sub>SI</sub> = 1Ω ∙ m'
                            +'</li>'
                        +'</ul>'
                        +'<h2 class="p-3">Ohms Gesetz für einen Teil eines Stromkreises:</h2>'
                        +'<ul>'
                            +'<li>'
                                +'Die Stromstärke, die durch den Widerstand fließt, hängt ab von:<br><br>'
                                +'1) Der Spannung an den Enden des Widerstands: Je höher die Spannung an den Klemmen des Widerstands, desto höher die Stromstärke, die durch ihn fließt.<br><br>'
                                +'2) Dem elektrischen Widerstand: Je höher der Widerstand des Widerstands, desto geringer die Stromstärke, die durch den Widerstand fließt.'
                            +'</li><br>'
                            +'<li>'
                                +'Ohms Gesetz für einen Teil eines Stromkreises:<br><br>'
                                +'„Wenn an den Enden eines Teils eines Stromkreises eine Spannung (U) angelegt wird, ist die Stromstärke (I), die durch diesen Teil des Stromkreises fließt, direkt proportional zur angelegten elektrischen Spannung (U)“.<br><br>'
                                +'I = U / R'
                            +'</li>'
                        +'</ul>'
                        +'<h2 class="p-3">Ohms Gesetz für den gesamten Stromkreis:</h2>'
                        +'<ul>'
                            +'<li>'
                                +'Ohms Gesetz für den gesamten Stromkreis:<br><br>'
                                +'„Die Stromstärke (I) durch einen einfachen Stromkreis ist direkt proportional zur elektromotorischen Kraft (E) der Quelle und umgekehrt proportional zum Gesamtwiderstand des Stromkreises (R+r).“<br><br>'
                                +'I = E / (R + r)<br><br>'
                                +'1) Ohms Gesetz gilt im Allgemeinen für chemische Quellen, da diese einen geringen Innenwiderstand haben, kann jedoch auch für andere Quellen angepasst werden.<br><br>'
                                +'2) Wenn der Außenwiderstand (R) sehr kleine Werte hat, zum Beispiel durch Kurzschließen der Quelle mit einem kurzen Leiter, also wenn R = 0 ist, wird die Stromstärke, die von der Quelle geliefert wird, maximal:<br><br>'
                                +'I<sub>sc</sub> = E / r (Kurzschlussstrom)<br><br>'
                                +'Dies ist nicht wünschenswert, da große Ströme Schäden verursachen können und die Quelle schnell verbraucht wird.'
                            +'</li>'
                        +'</ul>'
                        +'<h2 class="p-3">Ohms Gesetz für einen Teil eines Stromkreises:</h2>'
                        +'<ul>'
                            +'<li>'
                                +'Elemente elektrischer Netzwerke (verzweigte Stromkreise):<br><br>'
                                +'1. <b>Stromknoten</b> ist der Schnittpunkt von mindestens drei elektrischen Leitern.<br><br>'
                                +'2. <b>Stromzweig</b> ist der Teil des Stromkreises zwischen zwei aufeinanderfolgenden Knoten, so dass in seinen Elementen derselbe elektrische Strom fließt.<br><br>'
                                +'3. <b>Strommasche</b> ist der Teil des Stromkreises, der aus mindestens zwei Zweigen besteht, die so verbunden sind, dass sie eine geschlossene Schleife (geschlossene Polygonlinie) bilden.<br><br>'
                            +'</li><br>'
                        +'</ul>'

                    //Legea lui Kirchhoff
                    +'<a name="element_target2"></a>'
                    +'<br><br><br><br><u><h2 class="p-3" align = center>Kirchhoffs Gesetz</h2><br><br><br></u>'
                    +'<h2 class="p-3">Erstes Kirchhoffsches Gesetz:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'„Die algebraische Summe der Ströme, die an einem Knotenpunkt eines Stromkreises zusammentreffen, ist null“.<br><br>'
                        +'</li>'
                    +'</ul>'
                    +'<h2 align = center>'
                        +'<img src ="img/lege1.png" width = 240>'
                    +'</h2>'
                    +'<ul>'
                        +'Die Ströme I<sub>k</sub> können positiv oder negativ sein, abhängig davon, wie der Strom durch den Knoten fließt (in den Knoten hinein oder aus dem Knoten heraus).<br><br>'
                        +'<li>'
                            +'Eine andere Formulierung des ersten Kirchhoffschen Gesetzes:<br><br>'
                            +'„Die algebraische Summe der Ströme, die in einen Knoten eines Stromkreises hineinfließen, ist gleich der Summe der Ströme, die aus dem Knoten herausfließen“.'
                        +'</li>'
                    +'</ul>'
                    +'<h2 align = center>'
                        +'<img src ="img/lege1_alt.png" width = 240>'
                    +'</h2>'
                    +'<ul>'
                        +'I<sub>1</sub> + I<sub>2</sub> + I<sub>4</sub> = I<sub>3</sub> + I<sub>5</sub>'
                    +'</ul>'
                    +'<h2 class="p-3">Zweites Kirchhoffsches Gesetz:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'„Die algebraische Summe der elektromotorischen Kräfte in einer Masche ist gleich der algebraischen Summe der Spannungen an den einzelnen Zweigen dieser Masche“.'
                        +'</li>'
                    +'</ul>'
                    +'<h2 align = center>'
                        +'<img src ="img/lege2.png" width = 240>'
                    +'</h2>'
                    +'<ul>'
                        +'Die Terme der Summen können positiv oder negativ sein, abhängig von der Richtung der Spannung oder des Stroms im Vergleich zur willkürlich gewählten Richtung der betrachteten Masche.<br><br>'
                        +'Für m = Anzahl der einfachen Maschen werden m Gleichungen mit dem zweiten Kirchhoffschen Gesetz aufgestellt.'
                    +'</ul>'
                    +'<h2 class="p-3">Vorzeichenkonventionen:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Elektromotorische Kraft:<br><br>'
                            +' - wird als positiv genommen, wenn die Richtung des elektrischen Stroms durch die Quelle mit der willkürlich gewählten Richtung der Masche übereinstimmt: + E<br><br>'
                            +' - wird als negativ genommen, wenn die Richtung des elektrischen Stroms durch die Quelle entgegengesetzt zur willkürlich gewählten Richtung der Masche ist: - E<br><br>'
                        +'</li><br>'
                        +'<li>'
                            +'Elektrische Spannung:<br><br>'
                            +' - wird als positiv genommen, wenn die Richtung des elektrischen Stroms mit der willkürlich gewählten Richtung der Masche (Referenzrichtung) übereinstimmt: + I ∙ R<br><br>'
                            +' - wird als negativ genommen, wenn die Richtung des elektrischen Stroms entgegengesetzt zur willkürlich gewählten Richtung der Masche (Referenzrichtung) ist: - I ∙ R<br><br>'
                        +'</li>'
                    +'</ul>'

                    //Gruparea rezistoarelor și generatoarelor electrice
                    +'<a name="element_target3"></a>'
                    +'<br><br><br><br><u><h2 class="p-3" align = center>Gruppierung von Widerständen und elektrischen Generatoren</h2><br><br><br></u>'
                    +'<h2 class="p-3">Gruppierung von Widerständen:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Jedes Schaltungselement (elektrischer Generator, Glühbirne, Widerstand, Motor, Schalter) kann mit einem anderen (gleichen oder unterschiedlichen) auf zwei Arten verbunden (gruppiert) werden:<br><br>'
                            +'- In Reihe<br><br>'
                            +'- Parallel<br><br>'
                            +'Eine Gruppe von Widerständen wird durch einen einzigen ersetzt, der als äquivalenter Widerstand bezeichnet wird. Sein Widerstand stellt das Äquivalent der Widerstände der jeweiligen Gruppierung dar.'
                        +'</li><br>'
                        +'<li>'
                            +'Widerstände, durch die derselbe Strom fließt und die sich auf derselben Seite einer Schaltung befinden, bilden eine Reihenschaltung und werden mit dem Widerstand R<sub>s</sub> gleichgesetzt.<br><br>'
                            +'Der äquivalente Widerstand einer Reihenschaltung von Widerständen ist gleich der Summe der Widerstände jedes einzelnen Widerstands:<br><br>'
                            +'R<sub>s</sub> = R<sub>1</sub> + R<sub>2</sub>'
                        +'</li><br>'
                        +'<li>'
                            +'Widerstände, die sich auf verschiedenen Seiten zwischen denselben zwei Knotenpunkten einer Schaltung befinden und dieselbe Spannung an den Enden haben, bilden eine Parallelschaltung und werden mit dem Widerstand R<sub>p</sub> gleichgesetzt.<br><br>'
                            +'Der Kehrwert des äquivalenten Widerstands einer Parallelschaltung von Widerständen ist gleich der Summe der Kehrwerte der Widerstände jedes einzelnen Widerstands:<br><br>'
                            +'1 / R<sub>p</sub> = (1 / R<sub>1</sub>) + (1 / R<sub>2</sub>)'
                        +'</li>'
                    +'</ul>'
                    +'<h2 class="p-3">Gruppierung identischer Generatoren:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Durch das Gruppieren mehrerer Quellen wird eine „äquivalente Quelle“ mit einer äquivalenten elektromotorischen Kraft und einem äquivalenten Innenwiderstand erhalten.'
                        +'</li><br>'
                        +'<li>'
                            +'Für eine Reihenschaltung von n identischen Quellen: die elektromotorische Kraft der Reihenschaltung von elektrischen Generatoren:<br><br>'
                            +'E<sub>s</sub> = n · E'
                        +'</li><br>'
                        +'<li>'
                            +'Der Innenwiderstand der Reihenschaltung von identischen elektrischen Generatoren:<br><br>'
                            +'r<sub>s</sub> = n · r'
                        +'</li><br>'
                        +'<li>'
                            +'Für eine Parallelschaltung von n identischen Quellen: die elektromotorische Kraft der Parallelschaltung von elektrischen Generatoren:<br><br>'
                            +'E<sub>p</sub> = E<sub>1</sub> = E<sub>2</sub> = … = E<sub>n</sub>'
                        +'</li><br>'
                        +'<li>'
                            +'Der Innenwiderstand der Parallelschaltung von identischen elektrischen Generatoren:<br><br>'
                            +'r<sub>p</sub> = r / n'
                        +'</li>'
                    +'</ul>'

                    //Eneriga si puterea electrica
                    +'<a name="element_target4"></a>'
                    +'<br><br><br><br><u><h2 class="p-3" align = center>Energie und elektrische Leistung</h2><br><br><br></u>'
                    +'<h2 class="p-3">Elektrische Energie:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Die elektrische Energie (bezeichnet als W) einer Quelle misst die mechanische Arbeit, die sie leistet, um die elektrische Ladung (q) durch den Querschnitt des Stromkreises in einem Zeitintervall (Δt) zu bewegen:<br><br>'
                            +'W = L = E ∙ q<br><br>'
                            +'Aber q = I ∙ Δt (aus der Formel für die Stromstärke)<br><br>'
                            +'W<sub>gesamt</sub> = E ∙ I ∙ Δt (die Energie, die im gesamten Stromkreis verbraucht wird)<br><br>'
                            +'W<sub>außen</sub> = U ∙ I ∙ Δt (die Energie, die im äußeren Stromkreis verbraucht wird)<br><br>'
                            +'W<sub>innen</sub> = u ∙ I ∙ Δt (die Energie, die im inneren Stromkreis verbraucht wird)<br><br>'
                            +'W = U ∙ I ∙ Δt = R ∙ I<sup>2</sup> ∙ Δt = (U<sup>2</sup> / R) ∙ Δt<br><br>'
                            +'[W]<sub>SI</sub> = J (Joule)'
                        +'</li><br>'
                    +'</ul>'
                    +'<h2 class="p-3">Elektrische Leistung:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Die elektrische Leistung (P) ist eine physikalische Größe, die die Geschwindigkeit des Energieübertrags elektrischer Energie in einer Zeiteinheit misst.<br><br>'
                            +'P = W / Δt = U ∙ I = R ∙ I<sup>2</sup> = (U<sup>2</sup> / R)<br><br>'
                            +'[P]<sub>SI</sub> = J / s = W (Watt)'
                        +'</li><br>'
                        +'<li>'
                            +'Die elektrische Leistung eines elektrischen Generators mit Leerlaufspannung E und Innenwiderstand r ist:<br><br>'
                            +'P = W<sub>gesamt</sub> / Δt = E ∙ I = (R + r) ∙ I<sup>2</sup> = E<sup>2</sup> / (R + r)'
                        +'</li>'
                    +'</ul>'
                    +'<h2 class="p-3">Elektrischer Wirkungsgrad:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Die elektrische Energie des Generators wird dem äußeren Stromkreis zugeführt (W<sub>nutz</sub> - Nutzenergie = äußere Energie), der Rest der Energie wird vom Inneren des Generators empfangen (innere Energie).<br><br>'
                            +'Der elektrische Wirkungsgrad eines Empfängers (Verbrauchers) wird durch die Beziehung gegeben:<br><br>'
                            +'η = W<sub>nutz</sub> / W<sub>gesamt</sub> = P<sub>äußere</sub> / P<sub>gesamt>'
                        +'</li><br>'
                        +'<li>'
                            +'Für einen einfachen Stromkreis, bestehend aus einer Spannungsquelle mit einer Leerlaufspannung E und einem Innenwiderstand r, der mit einem Widerstand R verbunden ist, wird der elektrische Wirkungsgrad durch die Beziehung gegeben:<br><br>'
                            +'η = (U ∙ I) / (E ∙ I) = U / E = R / (R + r)'
                        +'</li><br>'
                        +'<li>'
                            +'Die Leistung, die vom Widerstand entwickelt wird, ist maximal, wenn: <br><br>'
                            +'P (R) = E<sup>2</sup> / (4 ∙ r)<br><br>'
                            +'das heißt, wenn:<br><br>'
                            +'R = r'
                        +'</li>'
                    +'</ul>'
                    +'<h2 class="p-3">Joulesches Gesetz:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Die thermische Wirkung des elektrischen Stroms (Joule-Effekt) besteht darin, dass ein Leiter beim Durchgang des elektrischen Stroms durch ihn erwärmt wird.<br><br>'
                            +'Das Joulesche Gesetz quantifiziert die Wärme, die beim Durchgang des elektrischen Stroms durch einen Leiter freigesetzt wird.'
                        +'</li><br>'
                        +'<li>'
                            +'Das Joulesche Gesetz:<br><br>'
                            +'Die Wärme Q, die beim Durchgang des elektrischen Stroms durch einen Leiter freigesetzt wird, ist proportional zum Widerstand des Leiters R, zum Quadrat des elektrischen Stroms I<sup>2</sup> und zur Zeitdauer Δt, in der der elektrische Strom fließt.<br><br>'
                            +'Q = R ∙ I<sup>2</sup> ∙ Δt'
                        +'</li>'
                    +'</ul>'),

        //teorieOptica.html
        "teorieOpticaTitle": "Optiktheorie",
        "teorieOptica": ('<u>' +
                            '<h2 class="p-3" align = center>Geometrische Optik</h2><br><br><br>' +
                        '</u>' +
                        '<h2 class="p-3">Lichtreflexion:</h2>' +
                        '<ul>' +
                            '<li>' +
                                'FERMATSCHES PRINZIP:<br><br>' 
                                    +'"Licht breitet sich zwischen zwei Punkten A und B so aus, dass seine optische Weglänge und damit die benötigte Zeit, um die Strecke AB zurückzulegen, minimal ist."<br><br>' 
                                    +'Lichtreflexion ist das Phänomen, bei dem Licht in das erste Medium zurückkehrt, wobei sich die Ausbreitungsrichtung ändert, wenn es auf ein anderes Medium trifft (Trennfläche zwischen zwei verschiedenen optischen Medien).' +
                            '</li><br>' +
                            '<li>' +
                                'Reflexionsgesetze:<br><br>' +
                                '- Gesetz I:<br><br>' 
                                +'Der einfallende Strahl, die Normale und der reflektierte Strahl liegen in einer Ebene (gehören zu derselben Ebene).<br><br>' +
                                '- Gesetz II:<br><br>' 
                                +'Der Einfallswinkel (i) ist gleich dem Reflexionswinkel (r).' +
                            '</li><br>' +
                            '<li>' +
                                'Ebene Spiegel<br><br>' 
                                +'Spiegel sind glatte und glänzende Oberflächen, auf denen Licht reflektiert wird.<br><br>' 
                                +'Ebene Spiegel haben eine ebene (gerade) Oberfläche und sind diejenigen, die wir alle zu Hause haben und täglich betrachten.<br><br>' 
                                +'Hier ist ihr Symbol (der Teil auf der Rückseite, der kein Licht reflektiert, ist schattiert):<br><br>' +
                            '</li>' +
                        '</ul>'    
                        +'<h2 align = center>'
                            +'<img style = "border: 2px solid #1b4188" src ="img/optica1.png" width = 100>'
                        +'</h2><br>'
                        +'<ul>'
                            +'<li>'
                                +'Bildbildung in einem ebenen Spiegel:<br><br>'
                                +'- Der ebene Spiegel wird vertikal gezeichnet.<br><br>'
                                +'- Die Hauptachse wird durch die Mitte des Spiegels gezeichnet, senkrecht zur Spiegeloberfläche (horizontal).<br><br>'
                                +'- Das Objekt AB wird als Pfeil unter der Form eines Segments vor dem Spiegel gezeichnet.<br><br>'
                                +'- Die erste Strahl von der Spitze des Objekts (B) wird senkrecht auf den Spiegel geführt und gestrichelt hinter den Spiegel verlängert (da sie senkrecht zur Spiegeloberfläche ist, ändert sie ihre Ausbreitungsrichtung nicht, wenn sie reflektiert wird).<br><br>'
                                +'- Die zweite Strahl von der Spitze des Objekts (B) wird schräg auf den Spiegel geführt, und der reflektierte Strahl wird unter Beachtung der Reflexionsgesetze gezeichnet (Einfallswinkel = Reflexionswinkel).<br><br>'
                                +'- Der reflektierte Strahl wird gestrichelt hinter den Spiegel verlängert, bis er sich mit der Verlängerung des ersten Strahls trifft. Der Schnittpunkt wird als B\' bezeichnet und stellt die Spitze des Bildes des Objekts im Spiegel dar.<br><br>'
                                +'- Von B\' wird senkrecht zur Hauptachse geführt, und der Fuß des Senkrechten wird als A\' bezeichnet und stellt die Basis des gebildeten Bildes des Objekts im Spiegel dar. Die Spitze des Pfeils wird in B\' platziert.'
                            +'</li>'
                        +'</ul>'
                        +'<h2 align = center>' +
                        '<img style = "border: 2px solid #1b4188" src ="img/optica2.png" width = 300>' +
                        '</h2><br>' +
                        '<ul>' +
                            '<li>' +
                                'Merkmale des Bildes A\'B\':<br><br>' +
                                '- Virtuell, da es sich an der Schnittstelle der verlängerten reflektierten Strahlen bildet (hinter dem Spiegel)<br><br>' +
                                '- Gerade<br><br>' +
                                '- Gleich dem Objekt AB (y<sub>1</sub> = y<sub>2</sub>)<br>' +
                                '- Objekt und Bild sind symmetrisch zur Spiegelachse<br>' +
                                'Formel für ebenen Spiegel: x<sub>2</sub> = -x<sub>1</sub>, da R → ∞ (keine Brennpunkte)<br><br>' +
                                'Transversale lineare Vergrößerung :	β = 1' +
                            '</li>' +
                        '</ul>' +
                        '<ul>' +
                            '<li>' +
                                'Charakterisierung des Bildes (A\'B\') des Objekts im ebenen Spiegel:<br><br>' +
                                'Das Objekt AB und das Bild A\'B\' sind symmetrisch zum Spiegel (das Bild bildet sich hinter dem Spiegel an derselben Stelle wie das Objekt).<br><br>' +
                                'Das Bild ist virtuell, da es sich an der Schnittstelle der verlängerten reflektierten Strahlen bildet (es kann nicht auf einem Bildschirm oder einem Foto festgehalten werden).<br><br>' +
                                'Das Bild A\'B\' ist genauso groß wie das Objekt AB.' +
                            '</li><br>' +
                        '</ul>' +
                        '<h2 class="p-3">Sphärische Spiegel:</h2>' +
                        '<ul>' +
                            '<li>' +
                                'Sphärische Spiegel sind Abschnitte von Kugeln (sphärische Schalen), die das auf sie fallende Licht reflektieren.<br><br>' +
                                'Klassifizierung der sphärischen Spiegel: <br><br>' +
                                'a) Konkave Spiegel reflektieren mit der inneren, eingedellten Seite der sphärischen Oberfläche (dh sie haben die glänzende Seite auf der inneren Seite der Kugel). Sie verwandeln einen parallelen Lichtstrahl in einen konvergenten Lichtstrahl.' +
                            '</li>' +
                        '</ul>'
                        +'<h2 align = center>' +
                        '<img style = "border: 2px solid #1b4188" src ="img/optica3.png" width = 300>' +
                        '</h2><br>' +
                        '<ul>' +
                            '<li>' +
                                'b) Konvexe Spiegel reflektieren mit der äußeren, gewölbten Seite der sphärischen Oberfläche (dh sie haben die glänzende Seite auf der äußeren Seite der Kugel). Sie verwandeln einen parallelen Lichtstrahl in einen divergenten Lichtstrahl.' +
                            '</li>' +
                        '</ul>'+
                '<h2 align = center>' +
                    '<img style = "border: 2px solid #1b4188" src ="img/optica4.png" width = 300>' +
                '</h2><br>' +
                '<ul>' +
                    '<li>' +
                        'Bildbildung in einem sphärischen Spiegel<br><br>' +
                        'Um ein Bild in einem sphärischen Spiegel zu erzeugen, müssen mindestens zwei Strahlen gezogen werden:<br><br>' +
                        'Vom Ob. A wird eine Linie parallel zur Hauptachse bis zur Spiegeloberfläche geführt und von dort aus durch den Brennpunkt reflektiert.<br><br>' +
                        'Vom Ob. A wird eine Linie durch den Krümmungsmittelpunkt geführt, bis sie sich mit dem ersten Strahl schneidet (dieser wird in dieselbe Richtung reflektiert).<br><br>' +
                        'Die beiden Strahlen werden verlängert, bis sie sich treffen. Ihr Schnittpunkt ist der Bildpunkt, A\'. Von diesem Punkt wird eine Senkrechte zur Hauptachse gezogen. Der Fuß der Senkrechten, B\', ist die Basis des gebildeten Bildes.' +
                    '</li>' +
                '</ul>' +
                '<h2 align = center>' +
                    '<img style = "border: 2px solid #1b4188" src ="img/optica5.png" width = 300>' +
                '</h2><br>' +
                '<ul>' +
                    '<li>' +
                        'Formel für sphärische Spiegel:<br> (1 / x<sub>2</sub>) + (1 x<sub>1</sub>) = 1 / f = 2 / R<br><br>' +
                        'Transversale lineare Vergrößerung:<br>' +
                        'β = y<sub>2</sub> / y<sub>1</sub> = - x<sub>2</sub> / x<sub>1</sub>' +
                    '</li>' +
                '</ul>' +
                '<ul>' +
                    '<li>' +
                        'Das Bild eines Objekts in einem konkaven Spiegel hängt von der Entfernung des Objekts zum Spiegel ab.' +
                    '</li><br>' +
                    '<li>' +
                        'Art des Spiegels:<br><br>' +
                        '- Konkav:<br>' +
                        '|x<sub>1</sub>| > 2|f| - Real - Verkleinert - Auf dem Kopf<br>' +
                        '|x<sub>1</sub>| = 2|f| - Real - Gleich - Auf dem Kopf<br>' +
                        '2|f| > |x<sub>1</sub>| > |f| - Real - Vergrößert - Auf dem Kopf<br>' +
                        '|x<sub>1</sub>| < |f| - Virtuell - Vergrößert - Aufrecht<br><br>' +
                        '- Konvex:<br>' +
                        'Beliebiges |x<sub>1</sub>| - Virtuell - Verkleinert - Aufrecht' +
                    '</li><br>' +
                '</ul>'+
                '<h2 class="p-3">Brechung des Lichts:</h2>' +
                '<ul>' +
                    '<li>' +
                        'Gesetze der Lichtbrechung:<br><br>' +
                        'Der Brechungsindex (notiert als n) eines transparenten Mediums wird durch das Verhältnis der Lichtgeschwindigkeit im Vakuum (c) zur Lichtgeschwindigkeit im jeweiligen Medium (v) gegeben.<br><br>' +
                        'n = c / v<br><br>' +
                        'Die Brechung des Lichts ist das Phänomen, bei dem Licht seine Ausbreitungsrichtung ändert, wenn es die Trennfläche zwischen zwei verschiedenen transparenten Medien durchläuft.' +
                    '</li><br>' +
                    '<li>' +
                        'Gesetze der Lichtbrechung:<br><br>' +
                        'Erstes Brechungsgesetz:<br>' +
                        'Der einfallende Strahl (SI), die Senkrechte zur Trennfläche (NI) und der gebrochene Strahl (IR\') liegen in einer Ebene.<br><br>' +
                        'Zweites Brechungsgesetz:<br>' +
                        'Das Verhältnis zwischen dem Einfallswinkel (i) und dem Sinus des Brechungswinkels (r\') ist gleich dem Verhältnis zwischen dem absoluten Brechungsindex des zweiten Mediums und dem absoluten Brechungsindex des ersten Mediums:<br><br>' +
                        'sin i / sin r\' = n<sub>2</sub> / n<sub>1</sub> = n<sub>21</sub><br><br>' +
                        'n<sub>21</sub> = Brechungsindex des zweiten Mediums zum ersten' +
                    '</li><br>' +
                    '<li>' +
                        'Konsequenzen der Lichtbrechung:<br><br>' +
                        'Die Konsequenzen der Lichtbrechung treten aufgrund der Änderung der Richtung des gebrochenen Strahls im Vergleich zur Richtung des einfallenden Strahls auf und ändern das Bild von Objekten im Wasser:<br><br>' +
                        '- Ein Objekt im Wasser erscheint an der Wasseroberfläche gebrochen, als ob der im Wasser befindliche Teil des Körpers nicht mit dem in der Luft befindlichen Teil verbunden wäre.<br><br>' +
                        '- Ein im Wasser befindliches Objekt wird von unserem Auge oberflächlicher wahrgenommen, als es tatsächlich ist. Daher wirken klare Gewässer viel tiefer als sie erscheinen.<br><br>' +
                        '- Objekte im Wasser erscheinen größer als sie tatsächlich sind, da sich das Wasser wie eine Lupe verhält.<br><br>' +
                    '</li>'+
                '</ul>' +
                '<h2 class="p-3">Optisches Prisma:</h2>' +
                '<ul>' +
                    '<li>' +
                        'Brechung von monochromatischem Licht im optischen Prisma:<br><br>' +
                        'Ein Prisma ist ein transparentes Medium (mit dem Brechungsindex n), begrenzt durch zwei plane Flächen, die einen dihedralen Winkel bilden, genannt der Prismenwinkel (A).<br><br>' +
                    '</li>' +
                '</ul>' +
                '<h2 align = center>' +
                    '<img style = "border: 2px solid #1b4188" src ="img/optica6.png" width = 300>' +
                '</h2><br>' +
                '<ul>' +
                    '<li>' +
                        'Wenn der einfallende Strahl (SI) auf die Fläche AB des Prismas fällt, wird er (erster gebrochener Strahl II\') in Richtung der Senkrechten NI (n<sub>Luft</sub> < n<sub>Prisma</sub>) gebrochen gemäß dem Gesetz:<br>' +
                        'sin i = n ∙ sin r<br><br>' +
                        'Der Strahl II\' wird beim Auftreffen auf die Fläche AC des Prismas am Punkt I\' gebrochen und entfernt sich von der Senkrechten NN\' (n<sub>Prisma</sub> > n<sub>Luft</sub>), gemäß dem Gesetz:<br>' +
                        'n ∙ sin r\' = sin i\'<br><br>' +
                        'Der Winkel zwischen der Richtung des einfallenden Strahls (SI) und der Richtung des austretenden Strahls (I\'R) wird als Ablenkwinkel (δ) bezeichnet, der den Wert hat:<br>' +
                        'δ = i + i\' – (r + r\') = i + i\' – A<br><br>' +
                    '</li>' +
                '</ul>'+
                    '<ul>' +
                        '<li>' +
                            'Um die Austrittsbedingung festzulegen (dh dass der einfallende Strahl das Prisma verlässt), darf keine Totalreflexion des Strahls II\' an der Fläche AC auftreten, dh:<br>' +
                            'r\' ≤ l (Grenzwinkel).<br><br>' +
                            'Da A = r + r\' → r\' = A – r<br>' +
                            'r ≥ A – l → sin r ≥ sin (A – l)<br><br>' +
                            'Aber gemäß dem ersten Brechungsgesetz haben wir:<br>' +
                            'sin r = sin i / n <br>' +
                            'sin i / n >= sin (A - l)<br><br>' +
                        '</li>' +
                        '<li>' +
                            'Der maximale Einfallswinkel ist<br>' +
                            'i = 90° → sin 90° = 1 <br>' +
                            '1 / n >= sin(A - l)<br>' +
                            'sin l = 1 / n<br>' +
                            'sin l >= sin(A-l) oder A <= 2 ∙ 1<br>' +
                            'sin l = 1 / n → 1 = arc sin 1 / n<br>' +
                        '</li>' +
                        '<li>' +
                            'Ein einfallender Strahl auf das Prisma kann das Prisma verlassen, wenn sein Brechungswinkel (A) die Bedingung erfüllt:<br>' +
                            'A ≤ 2 ∙ arc sin 1/n<br><br>' +
                            'Wenn das Prisma A > 2 ∙ arc sin 1/n hat, werden alle auf das Prisma auftreffenden Strahlen vollständig an der Fläche AC reflektiert.' +
                        '</li><br>' +
                        '<li>' +
                            'Wenn der Einfallswinkel (i) und der Ablenkwinkel (δ) variieren und immer Werte größer als einen bestimmten minimalen Wert (δ<sub>m</sub>) annehmen.<br><br>' +
                            'Wenn i = i\' und r = r\', erhalten wir den Wert des minimalen Ablenkwinkels (δ<sub>m</sub>):<br>' +
                            'δ<sub>m</sub> = 2 ∙ i – A<br><br>' +
                            'Wenn wir experimentell den minimalen Ablenkwinkel messen, kann der Brechungsindex des Prismas mit der Formel bestimmt werden:<br>' +
                            'n = sin((A + <sub>m</sub>) / 2) / sin (A / 2)' +
                        '</li><br>' +
                    '</ul>'+
                    '<h2 class="p-3">' + 'Arten von Linsen:' + '</h2>' + 
                    '<ul>' + 
                        '<li>' + 
                            'Linsen sind transparente Körper, die mindestens eine sphärische Oberfläche haben.<br><br>' + 
                            'Die Elemente einer Linse:<br><br>' + 
                            'Die Hauptoptikachse, die durch die Mitte der Linse gezogen wird.<br><br>' + 
                            'Das optische Zentrum der Linse (O), das sich am Schnittpunkt der Linse mit der Hauptoptikachse befindet.<br><br>' + 
                            'Zwei Brennpunkte, die jeweils auf einer Seite des optischen Zentrums der Linse in gleicher Entfernung liegen.<br><br>' + 
                            'Der Brennpunkt auf der linken Seite von O wird als negativer Brennpunkt / Objekt (F<sub>1</sub>) bezeichnet, da er sich auf der negativen Zahlenachse befindet.<br><br>' + 
                            'Der Brennpunkt auf der rechten Seite von O wird als positiver Brennpunkt / Bild (F<sub>2</sub>) bezeichnet, da er sich auf der positiven Zahlenachse befindet.<br><br>' + 
                            'Die Krümmungszentren (C<sub>1</sub> und C<sub>2</sub>) der Dioptrien, die die Linse begrenzen, befinden sich jeweils auf einer Seite von O, in doppelter Entfernung von OF.' + 
                        '</li>' + 
                    '</ul>' + 
                    '<h2 class="p-3">' + 'Klassifizierung der Linsen:' + '</h2>' + 
                    '<ul>' + 
                        '- <b>Konvergente Linsen</b> (konvex) sind Linsen, die einen parallelen Lichtstrahl in einen konvergenten Lichtstrahl umwandeln. Sie brechen das Licht durch den positiven Brennpunkt und werden daher auch als positive Linsen bezeichnet. Sie vergrößern das Schreiben. Sie sind in der Mitte dicker und an den Enden dünner.<br><br>' + 
                        '- <b>Divergente Linsen</b> (konkav) sind Linsen, die einen parallelen Lichtstrahl in einen divergenten Lichtstrahl umwandeln. Sie brechen das Licht durch den negativen Brennpunkt und werden daher auch als negative Linsen bezeichnet. Sie verkleinern das Schreiben. Sie sind an den Enden dicker und in der Mitte dünner.<br><br>' + 
                        '<li>' + 
                            'Bildung des Bildes eines Objekts in Linsen: <br><br>' + 
                            'Um das Bild eines Objekts in einer konvergenten Linse zu erzeugen, müssen wir zwei Strahlen zeichnen:<br><br>' + 
                            '- Wir zeichnen das Symbol der konvergenten Linse.<br>' + 
                            '- Wir zeichnen die Hauptoptikachse durch ihre Mitte.<br>' + 
                            '- Wir setzen die Elemente der Linse (O, F<sub>1</sub>, F<sub>2</sub>, C).<br>' + 
                            '- Wir zeichnen das Objekt (AB) vor der Linse (auf der linken Seite) als Segment mit einem Pfeil.<br>' + 
                            '- Wir ziehen einen Strahl vom oberen Ende des Objekts (B) parallel zur Hauptoptikachse, bis er auf die Linse trifft, und lenken ihn dann durch den positiven Brennpunkt (F<sub>2</sub>), da die konvergente Linse das Licht durch den positiven Brennpunkt bricht.<br>' + 
                            '- Wir ziehen einen zweiten Strahl vom oberen Ende des Objekts, der durch das optische Zentrum der Linse (O) verläuft. Wir verlängern diese Strahlen, bis sie sich schneiden. An ihrem Schnittpunkt setzen wir B\', das der obere Punkt des Bildes (im) des Objekts (ob) AB ist.<br>' + 
                            '- Von B\' ziehen wir eine Senkrechte zur Hauptoptikachse, deren Fuß wir mit A\' bezeichnen, und dies bildet die Basis im A\'B\'.<br>' + 
                            '- Wir setzen den Pfeilkopf in B\' und erhalten so das Bild des Objekts AB in der konvergenten Linse.'+
                        '</li><br></br>'+
                        '<li>' + 
                            'In Abhängigkeit von der Entfernung des Objekts von der Linse gibt es drei Arten von Bildern in einer konvergierenden Linse.<br><br>' + 
                            'I. Wenn sich das Objekt im Bereich (-∞) bis C befindet, hat das Bild des Objekts folgende Eigenschaften:<br>' + 
                            '- Kleiner als das Objekt AB.<br>' + 
                            '- Verkehrt herum<br>' + 
                            '- Real (es entsteht an der Schnittstelle der gebrochenen Strahlen und kann auf einen Bildschirm projiziert werden).<br><br>' + 
                            'II. Wenn sich das Objekt im Bereich von C bis F1 befindet, hat das Bild des Objekts folgende Eigenschaften:<br>' + 
                            '- Größer als das Objekt AB.<br>' + 
                            '- Verkehrt herum<br>' + 
                            '- Real (es entsteht an der Schnittstelle der gebrochenen Strahlen und kann auf einen Bildschirm projiziert werden).<br><br>' + 
                            'III. Wenn sich das Objekt im Bereich von F1 bis O befindet, hat das Bild des Objekts folgende Eigenschaften:<br>' + 
                            '- Größer als das Objekt.<br>' + 
                            '- Aufrecht<br>' + 
                            '- Virtual (es entsteht an der Schnittstelle der Verlängerungen der gebrochenen Strahlen und kann nicht auf einen Bildschirm projiziert werden).' + 
                        '</li><br>' + 
                        '<li>' + 
                            'Um das Bild eines Objekts in einer divergierenden Linse zu erzeugen, müssen wir zwei Strahlen zeichnen:<br><br>' + 
                            '- Zeichnen Sie das Symbol der divergierenden Linse.<br>' + 
                            '- Zeichnen Sie durch ihre Mitte die Hauptoptikachse.<br>' + 
                            '- Legen Sie die Elemente der Linse fest (O, F<sub>1</sub>, F<sub>2</sub>, C).<br>' + 
                            '- Zeichnen Sie das Objekt (AB) vor der Linse (links) als Segment mit Pfeil.<br>' + 
                            '- Zeichnen Sie einen Strahl, der vom Spitze des Objekts (B) parallel zur Hauptachse ausgeht, bis er die Linse trifft, und führen Sie ihn dann durch den negativen Brennpunkt (F<sub>1</sub>), da die divergierende Linse das Licht durch den negativen Brennpunkt bricht.<br>' + 
                            '- Zeichnen Sie den zweiten Strahl von der Spitze des Objekts, der durch das optische Zentrum der Linse (O) verläuft. Verlängern Sie diese Strahlen, bis sie sich schneiden. An ihrem Schnittpunkt setzen wir B\', das der Spitze des Bildes (im) des Objekts (ob) AB entspricht.<br>' + 
                            '- Von B\' aus ziehen wir eine Senkrechte zur Hauptachse, deren Fuß wir mit A\' bezeichnen, und dies entspricht der Basis im A\'B\'.<br>' + 
                            '- Legen Sie den Pfeilkopf in B\', und so erhalten Sie das Bild des Objekts AB in der konvergierenden Linse.<br>' + 
                        '</li><br>' + 
                        '<li>' + 
                            'In einer divergierenden Linse erhalten wir ein Bild, das unabhängig von der Entfernung des Objekts von der Linse die folgenden Merkmale aufweist:<br><br>' + 
                            '- Kleiner als das Objekt.<br>' + 
                            '- Aufrecht<br>' + 
                            '- Virtual (es entsteht an der Schnittstelle der Verlängerungen der gebrochenen Strahlen und kann nicht auf einen Bildschirm projiziert werden).' + 
                        '</li>'+                        
                    '</ul>'+
                    '<h2 class="p-3">Formeln für dünne Linsen:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Vorzeichenkonventionen:<br><br>' +
                            'x<sub>1</sub> = Abstand vom Objekt AB zur Linse, der immer negativ genommen wird, da er auf der Achse der negativen Zahlen liegt.<br><br>' +
                            'x<sub>2</sub> = Abstand vom Bild A\'B\' zur Linse, der positiv genommen wird, wenn das Bild real ist (es hinter der Linse entsteht, auf der Achse der positiven Zahlen) und negativ, wenn das Bild virtuell ist (es vor der Linse entsteht, auf der Achse der negativen Zahlen).<br><br>' +
                            'y<sub>1</sub> = Höhe des Objekts AB, die positiv genommen wird, wenn das Objekt über der Hauptachse liegt, und negativ, wenn das Objekt unterhalb der Hauptachse liegt.<br><br>' +
                            'y<sub>2</sub> = Höhe des Bildes A\'B\', die positiv genommen wird, wenn das Bild aufrecht ist (über der Hauptachse) und negativ, wenn das Bild umgekehrt ist (unterhalb der Hauptachse).<br><br>' +
                            'Die Brennweite wird als positiv betrachtet (f > 0) für konvergierende Linsen und als negativ (f < 0) für divergierende Linsen.' +
                        '</li><br>' +
                        '<li>' +
                            'Grundformel für dünne Linsen:<br><br>' +
                            '(1 / x<sub>2</sub>) - (1 / x<sub>1</sub>) = 1 / f' +
                        '</li><br>' +
                        '<li>' +
                            'Die lineare transversale Vergrößerung (β) ist eine dimensionslose physikalische Größe, die dem Verhältnis der Bildhöhe zur Objekthöhe entspricht.<br><br>' +
                            'β = y<sub>2</sub> / y<sub>1</sub> = x<sub>2</sub> / x<sub>1</sub>' +
                        '</li><br>' +
                        '<li>' +
                            'Die Konvergenz einer Linse (C) ist eine physikalische Größe, die dem Kehrwert der Brennweite (f) entspricht.<br><br>' +
                            'C = 1 / f<br><br>' +
                            '[C]<sub>SI</sub> = m<sup>-1</sup> = δ(Dioptrie)<br>' +
                            'Konvergierende Linse hat C > 0 <br><br>' +
                            'Divergierende Linse hat C < 0' +
                        '</li><br>' +
                    '</ul>'+
                    '<h2 class="p-3">Linsenassoziationen:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Ein System aus zwei oder mehreren Linsen, die dieselbe Hauptachse haben, wird als <b>Linsenassoziation</b> bezeichnet.<br><br>' +
                            'Das Bild, das von der ersten Linse erzeugt wird, wird zum Objekt für die nächste Linse und so weiter bis zur letzten Linse, die das endgültige Bild liefert.' +
                        '</li>' +
                        '<li>' +
                            'Das am häufigsten verwendete System ist dasjenige mit aneinandergefügten (akkommodierten) Linsen, bei dem der Abstand (d) zwischen den Linsen null beträgt und der Bildfokus (F<sub>2</sub>) der ersten Linse (L) mit dem Objektfokus (F\'<sub>2</sub>) zusammenfällt.<br><br>' +
                            'Für ein solches System aus k Linsen haben wir:<br><br>' +
                            '1. Das Kehrwert der Brennweite des Linsensystems (F) ist gleich der Summe der Kehrwerte der Brennweiten der Linsen der Assoziation:<br><br>' +
                            '1 / F = (1 / f<sub>1</sub>) + (1 / f<sub>2</sub>) + ... + (1 / f<sub>k</sub>)<br><br>' +
                            '2. Die Konvergenz des Systems (C) ist gleich der Summe der Konvergenzen der Komponentenlinsen:<br><br>' +
                            'C = C<sub>1</sub> + C<sub>2</sub> +...+ C<sub>k</sub><br><br>' +
                            '3. Die transversale lineare Vergrößerung des Systems (β) entspricht dem Produkt der transversalen Vergrößerungen der Komponentenlinsen:<br><br>' +
                            'β = β<sub>1</sub> ∙ β<sub>2</sub> ∙… β<sub>k</sub><br><br>' +
                            'Wenn wir mit x\'2 den Abstand vom endgültigen Bild zur zweiten Linse L2 und mit x1 den Abstand vom Objekt zur ersten Linse L1 bezeichnen, haben wir die Beziehung:<br><br>' +
                            '(1 / x\'<sub>2</sub>) - (1 / x<sub>1</sub>) = (1 / f<sub>1</sub>) + (1 / f<sub>2</sub>) = 1 / f = C<sub>1</sub> + C<sub>2</sub> = C' +
                        '</li>' +
                        '<li>' +
                            'Ein weiteres Linsensystem ist das Teleskop-System, das ein afokales System ist, bei dem der austretende Strahl (emergent), der aus einem parallelen Strahl stammt, ebenfalls parallel ist. Der Bildfokus der ersten Linse (F2) fällt mit dem Objektfokus der zweiten Linse (F\'<sub>1</sub>) zusammen.<br><br>' +
                            '1. Der Abstand zwischen den Linsen beträgt:<br><br>' +
                            'd = f<sub>1</sub> + f<sub>2</sub><br><br>' +
                            '2. Die transversale lineare Vergrößerung ist:<br><br>' +
                            'β = y<sub>2</sub> / y<sub>1</sub> = - f<sub>2</sub> / f<sub>1</sub><br><br>' +
                            'Um die Position (x\'1) des Zwischenbildes vor der ersten Linse (L<sub>1</sub>) und die Größe des Bildes, das von der ersten Linse erzeugt wird, zu berechnen, wenden wir die Formel für konjugierte Punkte für L<sub>1</sub> an:<br><br>' +
                            'x\'<sub>1</sub> = x<sub>2</sub>f<sub>1</sub> / (x<sub>1</sub> + f<sub>1</sub>)<br><br>' +
                            'y\'<sub>1</sub> = y<sub>1</sub>(x\'<sub>1</sub> / x<sub>1</sub>) = y<sub>1</sub> (f<sub>1</sub> / (x<sub>1</sub> + f<sub>1</sub>))<br><br>' +
                            'Indem wir den Abstand zwischen den Linsen kennen, können wir die Position des Zwischenbildes (von L<sub>1</sub> erzeugt) relativ zur Linse L<sub>2</sub> berechnen:<br><br>' +
                            'd = x\'<sub>1</sub> + (- x<sub>2</sub>)<br><br>' +
                            'x<sub>2</sub> = x\'<sub>1</sub> - d<br><br>' +
                            'Um die Position (x\'2) des endgültigen Bildes relativ zur zweiten Linse (L<sub>2</sub>) und die Größe des Bildes, das von der zweiten Linse erzeugt wird, zu finden, wenden wir die Formel für konjugierte Punkte für L<sub>2</sub> an:<br><br>' +
                            'x\'<sub>2</sub> = x<sub>2</sub>f<sub>2</sub> / (x<sub>2</sub> + f<sub>1</sub>)<br><br>' +
                            'y\'<sub>2</sub> = y<sub>1</sub>(x\'<sub>2</sub> / x<sub>2</sub>) = y<sub>1</sub> (f<sub>2</sub> / (x<sub>2</sub> + f<sub>2</sub>))<br><br>' +
                        '</li>' +
                    '</ul>'+

                    //Optica ondulatorie
                    '<a name="element_target"></a>' +
                    '<br><br><br><br><u><h2 class="p-3" align = center>Optische Wellenlehre</h2><br><br><br></u>' +
                    '<h2 class="p-3">Lichtdispersion:</h2>' +
                    '<ul>' +
                        '<li>' +
                            '<b>OPTIK</b> ist ein Bereich der Physik, der die Natur, die Eigenschaften und die Phänomene des Lichts untersucht.<br><br>' +
                            'Die Optik besteht aus drei Teilen:<br><br>' +
                            '1. Die geometrische Optik, die mit Lichtstrahlen (Ausbreitungsrichtungen des Lichts) arbeitet, ohne die Natur des Lichts zu berücksichtigen. Zu den untersuchten Phänomenen gehören Reflexion, Brechung und Totalreflexion des Lichts.<br><br>' +
                            '2. Die Wellenoptik untersucht Phänomene wie Interferenz, Beugung und Polarisation, bei denen der Wellencharakter des Lichts, genauer gesagt als elektromagnetische Welle, hervorgehoben wird.<br><br>' +
                            '3. Die photonische (korpuskulare) Optik untersucht Phänomene wie den photoelektrischen Effekt, den Compton-Effekt, die Emission und Absorption von Licht usw., die die korpuskulare Natur des Lichts (Photonen) verdeutlichen.<br><br>' +
                            'Die Dispersion von weißem Licht wurde erstmals von Newton im Jahr 1672 untersucht, als er das Spektrum des weißen Lichts an einem optischen Prisma erhielt.<br><br>' +
                            'Das Phänomen der Änderung des Brechungsindexes mit der Wellenlänge wird Lichtdispersion genannt.<br><br>' +
                            'Wenn Licht durch ein Prisma fällt, wird es in farbige Strahlen im Spektrum des Regenbogens zerlegt.<br><br>' +
                            'Im Vakuum breiten sich alle elektromagnetischen Wellen mit derselben Geschwindigkeit aus, unabhängig von ihrer Wellenlänge, und daher sagen wir, dass das Vakuum ein nicht dispersives Medium ist. Wenn das Prisma evakuiert würde, würde ein Strahl weißen Lichts nicht zerlegt, sondern nur durch Brechung von der Einfallrichtung abgelenkt werden (d. h. die Änderung der Ausbreitungsrichtung beim Übergang von einem Medium in ein anderes).<br><br>' +
                            'Der Brechungsindex (mit n bezeichnet) eines transparenten Mediums wird durch das Verhältnis der Lichtgeschwindigkeit im Vakuum (c) zur Lichtgeschwindigkeit im jeweiligen Medium (v) bestimmt.<br><br>' +
                            'n = c / v<br><br>' +
                            'c = Lichtgeschwindigkeit im Vakuum = 300.000.000 m/s<br><br>' +
                            'v = Lichtgeschwindigkeit im jeweiligen Medium<br><br>' +
                            'Alle transparenten Medien (Wasser, Glas, Diamant usw.), die durch einen Brechungsindex größer als eins gekennzeichnet sind, erzeugen Lichtdispersion.<br><br>' +
                            'Der Brechungsindex ist jedoch nur für monochromatisches Licht konstant.<br><br>' +
                            'Für weißes Licht, das aus sieben verschiedenen Farben und Wellenlängen besteht, ist der Brechungsindex nicht konstant, sondern variiert mit der Wellenlänge dieses Lichts.<br><br>' +
                            'Wenn der Brechungsindex eines Prismas variiert, wird das Prisma diese Lichter unter verschiedenen Winkeln brechen.<br><br>' +
                            'Im Allgemeinen nimmt der Brechungsindex in diesen transparenten Medien bei normaler Dispersion mit abnehmender Wellenlänge zu, sodass violettes Licht (mit einer kürzeren Wellenlänge von 400 nm) stärker gebrochen wird als rotes Licht (mit einer längeren Wellenlänge von 700 nm).<br><br>' +
                            'Wenn λ<sub>violett</sub> < λ<sub>rot</sub> → n<sub>violett</sub> > n<sub>rot</sub> → v<sub>violett</sub> < v<sub>rot</sub>.<br><br>' +
                            'Die farbigen Strahlen treten mit unterschiedlichen Geschwindigkeiten durch das Prisma aus und deshalb treten sie unter verschiedenen Winkeln aus dem Prisma aus.<br><br>' +
                            'Die violetten Strahlen treten weniger geneigt zur optischen Achse aus, da sie sich langsamer durch das Material des Prismas bewegen als der rote Strahl und gleichzeitig eine kürzere Strecke als der rote Strahl zurücklegen.<br><br>' +
                        '</li><br>' +
                    '</ul>' +
                    '<h2 class="p-3">Lichtinterferenz:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Lichtinterferenz im Young-Experiment.<br><br>' +
                            'INTERFERENZ ist das Phänomen der Überlagerung von zwei kohärenten Wellen (mit der gleichen Frequenz und der gleichen Phasenverschiebung), die sich an einem Punkt im Raum treffen.<br><br>' +
                            'An bestimmten Punkten im Raum bilden sich Interferenzstreifen, dh eine Abfolge von hellen und dunklen Bereichen.<br><br>' +
                            'Kohärente Wellen werden durch die Trennung eines von einer monochromatischen Quelle emittierten Lichtstrahls in zwei Lichtbündel erzeugt, die sich anschließend treffen.<br><br>' +
                            'Es gibt zwei Möglichkeiten, kohärente Wellen zu erzeugen:<br><br>' +
                            '- Aufteilung der Wellenfront im Young-Experiment, Fresnelscher Biprisma usw.<br><br>' +
                            '- Aufteilung der Wellenamplitude im Gitter mit parallelen planen Oberflächen, im Optikkeil, Newtonsche Ringe.' +
                        '</li><br>' +
                    '</ul>'+
                    '<li>' +
                        'Der Young\'sche Doppelspalt verwendet eine monochromatische Lichtquelle S (Laser), einen Schirm mit zwei rechteckigen Schlitzen (mit einer Breite von weniger als 1 mm), die parallel zueinander angeordnet sind und einen Abstand von maximal 1 mm zwischen ihnen haben, und eine Leinwand (weißes Blatt). Zur Beobachtung des Interferenzmusters gibt es keine bevorzugte Position des Bildschirms, er kann in einem Abstand D zwischen 1 m und 5 m von den Schlitzen platziert werden, weshalb er als nicht lokalisierte Interferenz bezeichnet wird.<br><br>' +
                        'Sowohl Interferenz als auch Beugung beruhen auf dem Huygens-Fresnel-Prinzip, das besagt, dass jeder Punkt auf einer Wellenfront wie eine sekundäre Wellenquelle mit derselben Frequenz und Phase wie die ursprüngliche Welle wirkt. Die neue Wellenfront entsteht durch die Addition der Amplituden der sekundären Wellen.' +
                    '</li><br>' +
                    '<li>' +
                        'Im Falle der konstruktiven Interferenz sind die beiden Wellen in Phase (Nullphasenunterschied) und ihre Summe ist größer, was zu hellen Bereichen führt.<br><br>' +
                        'Wenn die beiden Wellen in entgegengesetzter Phase schwingen (Phasenunterschied 180°), heben sie sich auf (ihre Summe ist Null), was zu dunklen Bereichen führt, in denen wir von destruktiver Interferenz sprechen.' +
                    '</li><br>' +
                    '<li>' +
                        'Die elektromagnetische Welle (Licht) hat zwei Komponenten, elektrisch und magnetisch. Nur die elektrische Komponente (E) beeinflusst die visuelle Wahrnehmung.<br><br>' +
                        'Wellen gleicher Amplitude, die von den beiden Quellen ausgestrahlt werden, haben die Gleichungen:<br><br>' +
                        'E<sub>1</sub> = E<sub>0</sub>sin2π((t / T) - (r<sub>1</sub> / λ))<br><br>' +
                        'E<sub>2</sub> = E<sub>0</sub>sin2π((t / T) - (r<sub>2</sub> / λ))<br><br>' +
                        'Die elektromagnetische Welle breitet sich mit der Geschwindigkeit c in der Zeit Δt durch die Fläche S, die senkrecht zur Ausbreitungsrichtung liegt, aus.<br><br>' +
                        'Die von der Welle transportierte Energie ist:<br><br>' +
                        'ΔW = w ΔV<br><br>' +
                        'ΔW = (ε<sub>0</sub> / μ<sub>0</sub>)<sup>1/2</sup>E<sup>2</sup>SΔt<br><br>' +
                        'I = 1/2 · (ε<sub>0</sub> / μ<sub>0</sub>)<sup>1/2</sup> ·E<sup>2</sup><sub>0</sub><br><br>' +
                        'E\'<sub>0</sub> = 2 E<sub>0</sub> cos (π(r<sub>2</sub> - r<sub>1</sub>) / λ)' +
                    '</li><br>'+
                    '<li>' +
                        'Die Bedingungen für Interferenz sind:<br><br>' +
                        '- Die Wellen müssen dieselbe Frequenz haben<br><br>' +
                        '- Phasenunterschied: ΔΦ = 2π(Δr / λ) = Konstante<br><br>' +
                        'Die Lichtintensität, I, an einem Interferenzpunkt ist proportional zum Quadrat der Amplitude der resultierenden Welle:<br><br>' +
                        'I = const 4E<sup>2</sup><sub>0</sub> cos<sup>2</sup>(πΔr / λ)<br><br>' +
                        'Bei konstruktiver Interferenz (mit der Bildung von Lichtstreifen) haben wir die maximale Beleuchtungsbedingung:<br><br>' +
                        'cos<sup>2</sup>(πΔr / λ)<br><br> = 1 → Δr = kλ = 2k(λ/2),<br><br>' +
                        'wobei k = ganze Zahl<br><br>' +
                        'Punkte im Interferenzbereich, bei denen der Wegunterschied Δr ein gerades Vielfaches von halber Wellenlänge ist, liegen auf einem hellen Streifen.<br><br>' +
                        'Bei destruktiver Interferenz (mit der Bildung von dunklen Streifen) haben wir die minimale Beleuchtungsbedingung:<br><br>' +
                        'cos<sup>2</sup>(πΔr / λ) = 0 → Δr = kλ = 2(k+1)(λ/2)<br><br>' +
                        'Punkte im Interferenzbereich, bei denen der Wegunterschied Δr ein ungerades Vielfaches von halber Wellenlänge ist, liegen auf einem dunklen Streifen.' +
                    '</li><br>' +
                    '<li>' +
                        'Bestimmung der Positionen der Streifen im Young\'schen Doppelspaltexperiment:<br><br>' +
                        'Im ΔAEP wenden wir den Satz des Pythagoras an: r<sup>1</sup> = D<sup>2</sup> + (x-l)<sup>2</sup><br><br>' +
                        'Im ΔBE\'P wenden wir den Satz des Pythagoras an: r<sup>2</sup> = D<sup>2</sup> + (x-l)<sup>2</sup><br><br>' +
                        'Δr = r<sub>2</sub> = r<sub>1</sub> = 4xl / (r<sub>1</sub> + r<sub>2</sub>)' +
                    '</li><br>' +
                    '<li>' +
                        'Bestimmung der Wellenlänge durch Messung des Interferenzabstands:<br><br>' +
                        'i = x<sub>k+1</sub> - x<sub>k</sub> = (k+1)λD / 2l - kλD / 2l = λD / 2l<br><br>' +
                        'i = λD / 2l' +
                    '</li>' +
                    '</ul>' +
                    '<h2 class="p-3">' + 'Lokalisierte Interferenz auf einer Platte mit parallelen planen Oberflächen:' + '</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Lokalisierte Interferenz auf einer Platte mit parallelen planen Oberflächen tritt auf, wenn ein Lichtstrahl in zwei kohärente Strahlen auf den reflektierenden Oberflächen aufgeteilt wird, durch Reflexion des Lichts auf der oberen Oberfläche und durch Transmission des Lichts auf der unteren Oberfläche der dünnen Platte.<br><br>' +
                            'Das Licht, das auf die obere Oberfläche der Platte (Schicht) trifft, wird sowohl reflektiert (IR) als auch gebrochen (IŔ ). Der durch die Platte gebrochene Strahl wird an der unteren Oberfläche der Platte reflektiert (MN). Die beiden Strahlen, IR und MN, interferieren an der Oberfläche der Platte miteinander.<br><br>' +
                            'Die Interferenzstreifen sind im Brennpunkt der Linse oder, falls nicht vorhanden, unendlich weit entfernt lokalisiert. So erklären wir die Schillerfarben von Seifenblasen und von Öl- oder Benzinfilmen auf der Straße.' +
                        '</li>' +
                    '</ul>' +
                    '<h2 class="p-3">' + 'Newtonsche Ringe bei Interferenz auf einem Luftspalt:' + '</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Die Newtonschen Ringe entstehen durch senkrechte Beleuchtung mit monochromatischem Licht einer plan-konvexen Linse mit großer Brennweite, die mit der gewölbten Seite auf eine ebene Glasplatte gelegt wird. Zwischen Linse und Platte bildet sich ein dünner Luftspalt, der zur Bildung konzentrischer, hellen und dunklen Kreise um den Berührungspunkt zwischen Linse und Platte führt.' +
                        '</li>' +
                    '</ul>'+

                    //Elemente de fizica cuantica
                    '<a name="element_target2"></a>' +
                    '<br><br><br><br>' +
                    '<u><h2 class="p-3" align = center>Elemente der Quantenphysik</h2><br><br><br></u>' +
                    '<h2 class="p-3">' +
                        'Plancks Hypothese über Lichtquanten:' +
                    '</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Planck behauptete, dass die von einem Schwarzen Strahler emittierte Strahlung in Form diskreter Energiepakete existiert, die er Quanten nannte (später als Photonen bezeichnet), abhängig von der Frequenz der jeweiligen Strahlung.<br><br>' +
                            'Die diskreten Werte der Energie eines harmonischen Oszillators sind gleichmäßig verteilt, so dass der Unterschied zwischen den Energieleveln (ΔE) proportional zur Frequenz (ν) des Oszillators und der Planckschen Konstante (h) ist.<br><br>' +
                            'ΔE = h ∙ ν<br><br>' +
                            'h = Plancksche Konstante = 6,62 ∙ 10<sup>-34</sup> J ∙ s<br><br>' +
                            'ν = Frequenz des Oszillators<br><br>' +
                            'Die Plancksche Konstante ist eine der kleinsten Konstanten, die in der Physik im makroskopischen Maßstab verwendet werden, und spiegelt den mikroskopischen Maßstab wider, auf dem Quanteneffekte beobachtet werden.' +
                        '</li><br>' +
                    '</ul>'+
                    '<h2 class="p-3">' +
                        'Photoelektrischer Effekt:' +
                    '</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Der photoelektrische Effekt wurde experimentell im Jahr 1887 von Heinrich Hertz (1857-1894) und im Jahr 1888 von W. Hallwachs (1859-1922) entdeckt und besteht aus der Emission von Elektronen durch ein Metall unter Einwirkung elektromagnetischer Strahlung.<br><br>' +
                            'Im Jahr 1905 bemerkte Albert Einstein (1879-1955), dass die Erklärung des photoelektrischen Effekts möglicherweise durch eine Verallgemeinerung der von Planck vorgeschlagenen quantenmechanischen Hypothese zur Schwarzkörperstrahlung auf elektromagnetische Strahlung gelöst werden könnte.<br><br>' +
                            'Daher erhalten Elektronen auf dem Kathoden nur einen einzigen Energiepaket (Photon) aus Licht (E = h ∙ ν), um beschleunigt und das Metall zu verlassen.<br><br>' +
                            'Die maximale kinetische Energie der emittierten Elektronen wird daher diesen Energiebetrag nicht überschreiten, unabhängig von der Intensität der einfallenden Strahlung.<br><br>' +
                            'Außerdem erklärt es, warum die maximale Geschwindigkeit der Elektronen von der Frequenz der Strahlung abhängt.' +
                        '</li><br>' +
                        '<li>' +
                            'Erstes Gesetz des externen photoelektrischen Effekts:<br><br>' +
                            'Der externe photoelektrische Effekt tritt nur auf, wenn die Frequenz der einfallenden Strahlung höher ist als die charakteristische Grenzfrequenz des Metalls, aus dem die Kathode hergestellt ist.<br><br>' +
                            'Um das Metall zu verlassen, müssen die freien Elektronen eine Energie erhalten, die der Austrittsarbeit (L) für die Grenzfrequenz (ν<sub>0</sub>) entspricht:<br><br>' +
                            'L = h ∙ ν<sub>0</sub> h = Plancksche Konstante = 6,62 ∙ 10<sup>-34</sup> m<sup>2</sup> ∙ kg/s<br><br>' +
                            'Das Photon mit der Energie h ∙ ν überträgt seine Energie auf ein Leitungselektron.<br><br>' +
                            'Das Elektron kann das Metall nur verlassen, wenn h ∙ ν ≥ L.' +
                        '</li><br>' +
                    '</ul>' +
                    '<h2 class="p-3">' +
                        'Zweites Gesetz des externen photoelektrischen Effekts:' +
                    '</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Der photoelektrische Effekt tritt praktisch sofort auf.<br><br>' +
                            'Die Emission eines Elektrons erfolgt durch den Zusammenstoß eines Photons und eines Elektrons in weniger als 10<sup>-9</sup> s.' +
                        '</li><br>' +
                    '</ul>' +
                    '<h2 class="p-3">' +
                        'Drittes Gesetz des externen photoelektrischen Effekts:' +
                    '</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Die kinetische Energie der emittierten Elektronen nimmt linear mit der Frequenz der einfallenden Strahlung zu.<br><br>' +
                            'Wenn die Energie des Photons h ∙ ν > L beträgt, hat das Elektron genug kinetische Energie, um das Metall zu verlassen:<br><br>' +
                            'Ec = h ∙ ν – L = h ∙ ν – h ∙ ν<sub>0</sub> = h ∙ (ν – ν<sub>0</sub>)' +
                        '</li><br>' +
                    '</ul>' +
                    '<h2 class="p-3">' +
                        'Viertes Gesetz des externen photoelektrischen Effekts:' +
                    '</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Die Anzahl der von der Kathode pro Zeiteinheit emittierten Fotoelektronen ist proportional zur Anzahl der in diesem Zeitintervall einfallenden Photonen, die proportional zum Lichtenergiefluss ist.' +
                        '</li>' +
                    '</ul>'),

        //cuprins
        "cuprinsPrincipii": "Prinzipien und Gesetze",
        "cuprinsTeoreme": "Variationssätze und Erhaltungssätze",
        "cuprinsNotiuni": "Erste Schritte",
        "cuprinsPrincipiuI": "Prinzip I",
        "cuprinsMotoare": "Wärmekraftmaschinen",
        "cuprinsPrincipiuII": "Das zweite Prinzip",
        "cuprinsCurentul": "Elektrizität",
        "cuprinsOhm": "Ohm\'sches Gesetz",
        "cuprinsKirchhoff": "Kirchhoffs Gesetz",
        "cuprinsGrupare": "Gruppierung von Widerständen und Generatoren",
        "cuprinsEnergie": "Energie und Strom",
        "cuprinsGeometrica": "Geometrische Optik",
        "cuprinsOndulatorie": "Wellenoptik",
        "cuprinsCuantica": "Quantenphysik",

        "teorieInapoiBtn": "Zurück zum Auswahlmenü",
        "invataTitle": "In diesem Teil des Kapitels lernen Sie Konzepte kennen wie:",
        "inchideBtn": "Auflegen",
        "teorieBtn": "Theorie",
        "testBtn": "Starten Sie einen Test",
        "acasaBtn": "Das Zuhause",
    },
    "franceza":
    {
        //index.html
        "titleSet": "Paramètres",
        "titleLogin": "Se connecter",
        "titleDisconnect": "Se déconnecter",
        "titleStatistica": "Les résultats de vos tests",
        "corecte": "Équitable",
        "gresite": "Faux",
        "titleLang": "Langues",
        "titleMec": "Mécanique",
        "titleTer": "Thermodynamique",
        "titleElec": "Électromécanique",
        "titleOp": "Optique",

        //register.html
        "goBackReg": "dos",
        "titleReg": "Entrez vos identifiants d'inscription",
        "usernameReg": "Entrez votre nom d'utilisateur",
        "emailReg": "Entrez votre adresse email",
        "passwordReg": "Entrer le mot de passe",
        "register": "S'inscrire",
        "footerReg": "Vous avez déjà un compte?",
        "footerRegBtn": "Se connecter",

        //login.html
        "goBackLog": "dos",
        "titleLog": "Entrez vos informations de connexion",
        "emailLog": "Entrez votre adresse email",
        "passwordLog": "Entrer le mot de passe",
        "login": "Se connecter",
        "footerLog": "Non enregistré?",
        "footerLogBtn": "Créer un compte",

        //test.html
        "startTestBtn": "Commencer",
        "iesiBtn": "Sortir",
        "reguliTitle": "Quelques règles de ce test",
        "reguli": ('<div class="info">1. Vous ne disposerez que de <span>15 secondes</span> pour chaque question.</div>'+
                    '<div class="info">2. Une fois que vous avez sélectionné une réponse, vous ne pouvez pas la modifier.</div>'+
                    '<div class="info">3. Vous ne pouvez plus sélectionner de réponses une fois le temps écoulé.</div>'+
                    '<div class="info">4. Vous ne pouvez pas quitter pendant le test.</div>'+
                    '<div class="info">5. Vous recevrez des points en fonction de vos réponses.</div>'),
        "iesiTestBtn": "Quitter l'essai",
        "continuaTestBtn": "Continue",
        "testTitle": "Test",
        "timpRamas": "Temps restant:",
        "gataTimpul": "Temps prêt",
        "urmatorulTestBtn": "Suiv.",
        "finalTestTitle": "Vous avez terminé le test !",
        "nouTestBtn": "Refaites le test",
        "veziDeCeBtn": "Voyez pourquoi",

        //mecanica.html
        "mecanicaTitle": "Mécanique",
        "principiiTitle": "Principes et lois",
        "teoremeTitle": "Théorèmes de variation et lois de conservation",
        "principiiTitleModal": "Principes et lois de la mécanique classique",
        "teoremeTitleModal": "Théorèmes de variation et lois de conservation",
        "principiiRez": ('<li>'+'Mouvement et repos'+'</li>'+
                         '<li>'+'Premier principe de la mécanique'+'</li>'+
                         '<li>'+'Deuxième principe de la mécanique'+'</li>'+
                         '<li>'+'Le troisième principe de la mécanique'+'</li>'+
                         '<li>'+'Loi de Hooke et tension dans le fil'+'</li>'+
                         '<li>'+'Les lois du frottement par glissement'+'</li>'),
        "teoremeRez": ('<li>'+'Travail mécanique et puissance mécanique'+'</li>'+
                        '<li>'+'Théorème de variation de l\'énergie cinétique'+'</li>'+
                        '<li>'+'Énergie potentielle gravitationnelle'+'</li>'+
                        '<li>'+'La loi de conservation de l\'énergie mécanique'+'</li>'+
                        '<li>'+'Le théorème de variation de quantité de mouvement'+'</li>'+
                        '<li>'+'Loi de conservation de la quantité de mouvement'+'</li>'),

        //termodinamica.html
        "termodinamicaTitle": "Thermodynamique",
        "notiuniTitle": "Commencer",
        "principiuITitle": "Principe I",
        "motoareTitle": "Moteurs thermiques",
        "principiuIITitle": "Le deuxième principe",
        "notiuniTitleModal": "Concepts de base en thermodynamique",
        "principiuITitleModal": "Le premier principe de la thermodynamique",
        "motoareTitleModal": "Moteurs thermiques",
        "principiuIITitleModal": "Le deuxième principe de la thermodynamique",
        "notiuniRez": ('<li>'+'Masse moléculaire'+'</li>'+
                        '<li>'+'Masse moléculaire relative'+'</li>'+
                        '<li>'+'Une quantité de substance'+'</li>'+
                        '<li>'+'Masse molaire'+'</li>'+
                        '<li>'+'Volume molaire'+'</li>'+
                        '<li>'+'Le numéro d\'Avogadro'+'</li>'+
                        '<li>'+'Bilan thermique'+'</li>'+
                        '<li>'+'Correspondance entre la valeur numérique de la température sur l\'échelle Celsius et la valeur numérique x'+'</li>'),
        "principiuIRez": ('<li>'+'Travaux mécaniques en thermodynamique, quantité de processus'+'</li>'+
                        '<li>'+'Interprétation géométrique du travail mécanique en thermodynamique'+'</li>'+
                        '<li>'+'Énergie interne d\'un système thermodynamique, quantité d\'état'+'</li>'+
                        '<li>'+'Chaleur, taille du processus'+'</li>'+
                        '<li>'+'Coque adiabatique'+'</li>'+
                        '<li>'+'Le premier principe de la thermodynamique'+'</li>'+
                        '<li>'+'Coefficients caloriques (relation de définition, unités de mesure en SI)'+'</li>'+
                        '<li>'+'La relation Robert-Mayer'+'</li>'+
                        '<li>'+'Application du premier principe de la thermodynamique aux transformations des gaz parfaits :'+'<br>'+
                            '<ul>'+
                                '<li>'+'Énergie interne du gaz parfait (monoatomique, diatomique, polyatomique)'+'</li>'+	
                                '<li>'+'Variation de l\'énergie interne, du travail mécanique et de la quantité de chaleur pour des transformations simples de gaz parfaits (isobare, isochore, isotherme, adiabatique)'+'</li>'+
                            '</ul>'+
                        '</li>'),
        "motoareRez": ('<li>'+'Expliquer le fonctionnement d\'un moteur thermique'+'</li>'+
                    '<li>'+'Description des principaux cycles thermodynamiques – Otto, Diesel – sur lesquels fonctionnent les moteurs thermiques'+'</li>'+
                    '<li>'+'L\'efficacité d\'un moteur thermique'+'</li>'),
        "principiuIIRez": ('<li>'+'Le cycle Carnot, l\'efficacité du cycle Carnot'+'</li>'),

        //electromecanica.html
        "electromecanicaTitle": "Électromécanique",
        "curentulTitle": "Électricité",
        "ohmTitle": "La loi d'Ohm",
        "kirchhoffTitle": "La loi de Kirchhoff",
        "grupareTitle": "Regroupement de résistances et de générateurs",
        "energieTitle": "Énergie et puissance électrique",
        "curentulTitleModal": "Électricité",
        "ohmTitleModal": "La loi d'Ohm",
        "kirchhoffTitleModal": "La loi de Kirchhoff",
        "grupareTitleModal": "Regroupement de résistances et de générateurs",
        "energieTitleModal": "Énergie et puissance électrique",
        "curentulRez": ('<li>'+'Électricité'+'</li>'+
                        '<li>'+'L\'intensité du courant électrique'+'</li>'+
                        '<li>'+'L\'unité de mesure de l\'intensité du courant électrique'+'</li>'+
                        '<li>'+'Circuit électrique simple'+'</li>'+
                        '<li>'+'La tension électromotrice d\'un générateur électrique, la tension aux bornes du générateur, la chute de tension à l\'intérieur du générateur'+'</li>'),
        "ohmRez": ('<li>'+'Résistance électrique'+'</li>'+
                    '<li>'+'Loi d\'Ohm pour une partie d\'un circuit et pour l\'ensemble du circuit'+'</li>'+
                    '<li>'+'L\'unité de mesure de la résistance électrique'+'</li>'+
                    '<li>'+'Résistance électrique, dépendance de la résistivité électrique à la température'+'</li>'),
        "kirchhoffRez": ('<li>'+'Le réseau électrique'+'</li>'+
                        '<li>'+'Le noeud du réseau'+'</li>'+
                        '<li>'+'L\'oeil du réseau'+'</li>'+
                        '<li>'+'Les lois de Kirchhoff'+'</li>'),
        "grupareRez": ('<li>'+'La résistance électrique équivalente d\'un groupement série, parallèle ou mixte de plusieurs résistances'+'</li>'+
                        '<li>'+'La résistance électrique équivalente et la tension électromotrice équivalente correspondant au regroupement série/parallèle de plusieurs générateurs électriques'+'</li>'),
        "energieRez": ('<li>'+'L\'expression de l\'énergie transmise par le générateur au consommateur dans un intervalle de temps'+'</li>'+
                        '<li>'+'Expression de l\'énergie dissipée à l\'intérieur du générateur'+'</li>'+
                        '<li>'+'L\'efficacité d\'un simple circuit électrique'+'</li>'+
                        '<li>'+'L\'énergie électrique, les relations qui caractérisent l\'énergie électrique'+'</li>'),

        //optica.html
        "opticaTitle": "Optique",
        "geometricaTitle": "Optique géométrique",
        "ondulatorieTitle": "Optique ondulatoire",
        "cuanticaTitle": "Éléments de physique quantique",
        "geometricaTitleModal": "Optique géométrique",
        "ondulatorieTitleModal": "Optique ondulatoire",
        "cuanticaTitleModal": "Éléments de physique quantique",
        "geometricaRez": ('<li>'+'Réflexion de la lumière'+'</li>'+
                            '<li>'+'Réfraction de la lumière'+'</li>'+
                            '<li>'+'Les lois de la réflexion'+'</li>'+
                            '<li>'+'Les lois de la réfraction'+'</li>'+
                            '<li>'+'Indice de réfraction'+'</li>'+
                            '<li>'+'Points conjugués'+'</li>'+
                            '<li>'+'Fascicules paraxiaux'+'</li>'+
                            '<li>'+'Images réelles/virtuelles'+'</li>'+
                            '<li>'+'Lentille optique'+'</li>'+
                            '<li>'+'Les éléments caractéristiques d\'une lentille mince (axes, centre optique, foyers)'+'</li>'+
                            '<li>'+'Convergence d\'une lentille mince'+'</li>'+
                            '<li>'+'Formules de lentilles fines'+'</li>'+
                            '<li>'+'Images d\'objets réels/virtuels dans des lentilles fines'+'</li>'+
                            '<li>'+'Systèmes de lentilles'+'</li>'),
        "ondulatorieRez": ('<li>'+'Conditions d\'obtention d\'interférences stationnaires'+'</li>'+
                            '<li>'+'La longueur d\'onde'+'</li>'+
                            '<li>'+'Composants de l\'appareil de Young'+'</li>'+
                            '<li>'+'Franges d\'interférence'+'</li>'+
                            '<li>'+'Différence de chemin optique'+'</li>'+
                            '<li>'+'Conditions d\'interférence maximales et minimales'+'</li>'+
                            '<li>'+'Interfrange'+'</li>'),
        "cuanticaRez": ('<li>'+'Les lois de l\'effet photoélectrique externe'+'</li>'+
                        '<li>'+'L\'hypothèse de Planck. L\'hypothèse d\'Einstein. L\'équation d\'Einstein'+'</li>'+
                        '<li>'+'Interprétation des lois de l\'effet photoélectrique externe'+'</li>'),

        //teorieMecanica.html
        "teorieMecanicaTitle": "Théorie de la mécanique",
        "teorieMecanica": ('<u>'+'<h2 class=\"p-3\" align = center>'+'Principes et lois'+'</h2>'+'<br>'+'<br>'+' <br>'+'</u>'+
                        '<h2 class=\"p-3\">'+'Vitesse'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Formule : '+'<b>'+'v = d/Δt'+'</b>'+'</li>'+
                            '<li>'+'Unité de mesure : '+'<b>'+'&lt;'+'v'+'&gt;'+' = m/s'+'</b>'+'</li>'+
                                    '<li>'+'Vitesse moyenne : '+'<b>'+'v'+'<small>'+'m'+'</small>'+' = Δd/Δt'+'</b>'+'</li>'+
                                    '<li>'+'Le vecteur vitesse a la même signification que le déplacement : v'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>' + ' = d'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>'+' /Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Accélération'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Formule : '+'<b>'+'a = Δv/Δt'+'</b>'+'</li>'+
                            '<li>'+'Unité de mesure : '+'<b>'+'&lt;'+'a'+'&gt;'+' = m/s'+'<sup>'+'2'+ ' </sup>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Formule galiléenne :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v'+'<sup>'+'2'+'</sup>'+' = v'+'<sub>'+'0'+'</sub>'+'<sup>'+'2'+'</sup>'+' + 2a(x-x'+'<sub>'+'0'+'</sub>'+') '+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Loi de vitesse : '+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v = v'+'<sub>'+'0'+'</sub>'+' + at'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Loi du mouvement :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'x = 1/2at'+'<sup>'+'2'+'</sup>'+' + v'+'<sub>'+'0 '+'</sub>'+'t + x'+'<sub>'+'0'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Principe I de la mécanique :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Tout corps maintient son état de repos ou de mouvement rectiligne uniforme tant qu\'aucune autre force n\'agit sur lui ou que la somme des forces agissant sur lui est nulle.'+'</li>'+
                            '<li>'+'En bref : la vitesse est '+'<b>'+'constante'+'</b>'+' si '+'<b>'+'la résultante des forces appliquées au corps'+' </b>'+' vaut 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Deuxième principe de la mécanique :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Le changement dans l\'ampleur du mouvement d\'un corps est directement proportionnel à la force appliquée et se produit dans la direction dans laquelle la force agit.'+'</li>'+
                            '<li>'+'Dit autrement : une force agissant sur un corps lui donne une accélération, proportionnelle à la force et inversement proportionnelle à la masse du corps.'+'</li>'+
                            '<li>'+'Formule : F = ma'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Troisième principe de la mécanique :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Lorsqu\'un corps agit sur un autre corps avec une force (appelée force d\'action), le deuxième corps agit également sur le premier corps avec une force (appelée force de réaction) de même ampleur et direction, mais opposé. Ce principe est également connu sous le nom de principe d\'action et de réaction.'+'</li>'+
                            '<li>'+'Écrit sous forme de formule : '+'<b>'+'F'+'<sub>'+'a'+'</sub>'+' = F'+'<sub> '+'r'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Loi de Hooke :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'L\'allongement d\'un ressort est directement proportionnel à la Force déformante (F) :'+'</li>'+'<br>'+
    
                            'Δl ~ F'+'<br>'+'<br>'+
    
                            '<li>'+'Directement proportionnel à la longueur initiale du ressort (l'+'<sub>'+'0'+'</sub>'+') :'+'</li>'+'<br>'+
                            
                            'Δl ~ l'+'<sub>'+'0'+'</sub>'+'<br>'+'<br>'+
    
                            '<li>'+'Inversement proportionnel à la surface de la section transversale du ressort :'+'</li>'+'<br>'+
    
                            'Δl ~ 1/S'+'<br>'+'<br>'+
    
                            '<li>'+'Loi de Hooke :'+'</li>'+'<br>'+
                            'F/S = E∙Δl/l'+'<sub>'+'0'+'</sub>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Tension du fil :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'La tension dans le fil ( T ) représente la force de réaction du fil inextensible (qui ne s\'allonge pas) à la force exercée sur lui.'+'</li>'+'<br>' +
                            '<li>'+'Lorsque l\'on suspend un corps à un fil inextensible, deux forces appariées apparaissent :'+'<br>'+'<br>'+
    
                                'La force de pression du corps (F) est la force avec laquelle le corps agit sur le fil (elle est égale au poids du corps).'+'<br>'+'<br>'+
                                
                                'La tension dans le fil (T) est la force avec laquelle le fil agit sur le corps qui y est suspendu.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Lois du frottement par glissement :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Première loi de friction :'+'<br>'+'<br>'+
                            
                                'La valeur de la force de frottement de glissement dépend de la nature et du degré de traitement des surfaces en contact. La dépendance est caractérisée par une quantité sans dimension, appelée coefficient de frottement de glissement, qui prend des valeurs comprises entre 0 et 1 et est notée μ.'+'<br>'+'<br>'+
    
                                'Ff ~ μ'+'</li>'+'<br>'+
    
                            '<li>'+'La deuxième loi du frottement :'+'<br>'+'<br>'+
                                'La valeur de la force de frottement de glissement ne dépend pas de la surface de contact entre les corps.'+'<br>'+'<br>'+'</li>'+
                                
                            '<li>'+'Troisième loi de friction :'+'<br>'+'<br>'+
                                'La valeur de la force de frottement de glissement dépend de la force de pression exercée par le corps sur la surface de glissement, qui est égale en ampleur à la force de réaction normale à la surface de contact entre les corps.'+'<br>'+'<br>' +
    
                            'Ff ~ N'+'</li>'+'<br>'+
                            '<li>'+'La formule de la force de frottement est donnée par la relation :'+'<br>'+'<br>'+
                                'Ff = μ ∙ N'+'</li>'+
                        '</ul>'+
    
                        //Teoreme de variatie si legi de conservare
                        
                        '<a name=\"element_target\">'+'</a>'+
                        '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center>'+'Théorèmes des lois de variation et de conservation'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                        
                        '<h2 class=\"p-3\">'+'Travaux mécaniques :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Le travail mécanique (L) d\'une force constante agissant sur un corps dans la direction et la direction du déplacement du corps est la grandeur physique scalaire égale au produit du module de la force (F) et du module de déplacement du corps (d).' +'</li>'+'<br>'+
                            '<li>'+'Formule de calcul : L = F ∙ d'+'</li>'+'<br>'+
                            '<li>'+'Conventions de signe :'+'<br>'+
                                '1. Le travail mécanique d’une force est positif si la force aide à déplacer le corps. Cela se produit si la force a la même direction et le même sens que le mouvement du corps.'+'<br>'+'<br>'+
                                '2. Le travail mécanique d’une force est négatif si la force s’oppose au mouvement du corps. Cela se produit si la composante du vecteur force dans la direction du mouvement est opposée au mouvement du corps.'+'<br>'+'<br>'+
                                '3. Le travail mécanique d’une force est nul si la force n’aide pas le corps à bouger ni ne s’oppose au mouvement. Cela se produit si le vecteur force est perpendiculaire à la direction du mouvement du corps.'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Puissance mécanique :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'La puissance mécanique (P) est la grandeur physique scalaire égale au rapport entre le travail mécanique (L) effectué et le temps (Δt) pendant lequel ce travail mécanique est effectué.'+'</li> '+'<br>'+
                            '<li>'+'P = Travail mécanique / temps = L / Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Énergie cinétique :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'L\'énergie mécanique (E) est la grandeur physique qui caractérise la capacité d\'un corps à effectuer un travail mécanique, l\'unité de mesure étant le joule (J).'+'</li>'+'<br>' +
                            '<li>'+'L\'énergie cinétique (E'+'<sub>'+'c'+'</sub>'+') est l\'énergie dont dispose un corps en mouvement.'+'</li> '+ '<br>'+
                            '<li>'+'L\'énergie cinétique d\'un corps en mouvement avec une certaine vitesse est calculée avec la formule :'+'<br>'+'<br>'+
                                'E'+'<sub>'+'c'+'</sub>'+' = m ∙ v'+'<sup>'+'2'+'</sup>'+' / 2 '+ '</li>'+'<br>'+
                            '<li>'+'La loi de variation de l\'énergie cinétique :'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'c'+'</sub>'+' = L'+'<sub>'+'Total'+'</sub>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Énergie potentielle gravitationnelle :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'L\'énergie potentielle gravitationnelle (E'+'<sub>'+'pg'+'</sub>'+') est l\'énergie qu\'un corps possède à une certaine hauteur du sol.'+'</li>'+'<br>'+
                            '<li>'+'L\'énergie potentielle gravitationnelle d\'un corps est égale à : E'+'<sub>'+'pg'+'</sub>'+' = m ∙ g ∙ h'+'</li>'+'<br>'+
                            '<li>'+'Loi de variation de l\'énergie potentielle gravitationnelle :'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'pg'+'</sub>'+' = -L'+'<sub>'+'G'+'</sub>'+'</li>' +'<br>'+
                            '<li>'+'Une force qui effectue un travail mécanique indépendant du chemin parcouru et dépendant uniquement des positions extrêmes (initiale et finale) est appelée force conservatrice.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Conservation de l\'énergie mécanique :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'La loi de conservation de l\'énergie mécanique :'+'<br>'+'<br>'+
    
                                '\"L\'énergie mécanique d\'un corps est conservée si seules des forces conservatrices agissent sur lui.\"'+'<br>'+'<br>'+
                            
                                'E = constant, si le corps est isolé de l\'extérieur et F'+'<sub>'+'f'+'</sub>'+' = 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Théorème de variation de quantité de mouvement :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'L\'élan du corps est désigné par la loi de conservation de l\'élan et a la formule :'+'<br>'+'<br>'+
                            'p'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = m ∙ v'+'<span style=\" vertical-align: 4px;\">'+'&#8407;'+'</span>'+'</li>'+'<br>'+
                            '<li>'+'Théorème de variation de l\'impulsion mécanique'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<span style=\"vertical-align: 4px;\">'+'&#8407;'+'</span>'+' ∙ Δt'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'La loi de conservation de la quantité de mouvement :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Lorsque le système mécanique est isolé, la force résultante F'+'<sub>'+'R'+'</sub>'+'<span style=\"vertical-align : 4px; margin- left : -1.5px\">'+'&#8407;'+'</span> '+'est zéro.'+'<br>'+'<br>'+
                            'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<sub>'+'R' +'</sub>'+'<span style=\"vertical-align : 4px; margin-left : -1.5px\">'+'&#8407;'+'</span>'+' ∙ Δt = 0 ∙ Δt = 0'+'</li>'+'<br>'+
                            '<li>'+'La loi de conservation du moment mécanique en SRI :'+'<br>'+'<br>'+
                                'L\'impulsion mécanique des systèmes mécaniques isolés est conservée.'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = 0, c\'est-à-dire Δp'+'<span style=\ "vertical-align: 4px; \">'+'&#8407;'+'</span>'+' = const'+'<span style=\"vertical-align: 4px; marge-gauche : -25px \">'+'&#8407;'+'</span>'+'</li>'+'<br>'+
                                '<li>'+'Dans le cas de systèmes mécaniques isolés, leur quantité de mouvement totale ne peut pas changer sous l\'action de forces internes.'+'</li>'+
                        '</ul>'),

        //teorieTermodinamica.html
        "teorieTermodinamicaTitle": "Théorie de la thermodynamique",
        "teorieTermodinamica": ('<u>'+'<h2 class=\"p-3\" align = center>'+'Concepts thermodynamiques de base'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                '<ul>'+
                                    '<li>'+'<b>'+'L\'agitation thermique'+'</b>'+' est le mouvement désordonné et continu des particules d\'une substance (atomes ou molécules).'+'</li> '+' <br>'+
                                    '<li>'+'<b>'+'Diffusion'+'</b>'+' est le phénomène de pénétration des molécules d\'une substance parmi les molécules d\'une autre substance, sans intervention d\'une force extérieure ( par lui-même).'+ '</li>'+'<br>'+
                                    '<li>'+'<b>'+'L\'atome'+'</b>'+' est la plus petite particule d\'une substance qui ne peut pas être divisée davantage par des processus chimiques ordinaires.'+'</li>' +'<br>'+
                                    '<li>'+'<b>'+'Molecule'+'</b>'+' représente la plus petite particule d\'une substance, qui peut également exister à l\'état libre et qui préserve les propriétés de la substance à partir de laquelle ça vient. '+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Masse moléculaire'+'</b>'+' est une quantité sans dimension (pas d\'unité de mesure) qui nous montre combien de fois la masse réelle d\'une molécule est supérieure à unité de masse atomique (u.a.m.).'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'La masse atomique relative (A)'+'</b>'+' est le nombre qui montre combien de fois la masse d\'un atome est supérieure à l\'unité de masse atomique. .'+ '</li>'+'<br>'+
                                    '<li>'+'<b>'+'Une mole d\'atomes'+'</b>'+' représente la quantité, en grammes, d\'une substance simple qui contient 6,022 ∙ 10'+'<sup>' +'23'+'</sup>'+' atomes. Il s\'écrit avec la lettre grecque "niu"= υ.'+'<br>'+'<br>'+

                                    'υ = m(g) / A(g/mol) = masse de substance simple (g) / masse atomique (g/mol)'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Numéro d\'Avogadro'+'</b>'+', noté N'+'<sub>'+'A'+'</sub>'+' , est égal à 6,022 ∙10'+'<sup>'+'23'+'</sup>'+' mol'+'<sup>'+'-1'+'</sup>'+' atomes et représente le nombre d\'atomes contenus dans une mole d\'atomes de toute substance simple.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Masse molaire'+'</b>'+' (désignée par la lettre grecque miu = μ) est la masse d\'une mole de substance. Son unité de mesure est le g/mol.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'La taupe'+'</b>'+' est l\'unité de mesure dans le Système International de la quantité de substance qui contient un nombre de particules égal au nombre d\'Avogadro, N'+ '<sub>'+'A.'+'</sub>'+'<br>'+'<br>'+
                                        'υ = m(g) / μ(g/mol) = Masse du composé (g) / Masse molaire (g/mol)'+'<br>'+'<br>'+
                                        'υ = N / N'+'<sub>'+'A'+'</sub>'+' = Nombre de particules / Nombre d\'Avogadro'+'</li>'+'<br>'+
                                    '<li>'+'Une mole de n\'importe quel gaz occupe dans des conditions normales de température (273 K) et de pression (10'+'<sup>'+'5'+'</sup>'+' Pa) un volume , appelé '+'<b>'+'volume molaire'+'</b>'+' = V'+'<sub>'+'μ'+'</sub>'+' = 22,4 L /mol '+'<br>'+'<br>'+
                                        'v = V / V'+'<sub>'+'μ'+'</sub>'+' = Volume de gaz (L) / Volume molaire (L/mol)'+'<br>'+'<br>'+
                                        'La relation entre le volume molaire et la densité d\'une substance est :'+'<br>'+'<br>'+
                                        'P = μ / V'+'<sub>'+'μ'+'</sub>'+'<br>'+'<br>'+
                                        'Le numéro de volume (n) représente le nombre de particules (atomes ou molécules) dans un m3 de substance :'+'<br>'+'<br>'+
                                        'n = N'+'<sub>'+'A'+'</sub>'+' / V'+'<sub>'+'μ'+'</sub>'+' = N / V '+'<br>'+'<br>'+'</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Équilibre thermodynamique et processus thermodynamiques :'+'</h2>'+
                                '<ul>'+
                                '<li>'+'<b>'+'L\'état d\'un système thermodynamique'+'</b>'+', à un certain moment, est caractérisé par certaines grandeurs physiques appelées paramètres d\'état.'+'</li>'+'<br>'+
                                '<li>'+'<b>'+'Principe d\'équilibre thermodynamique'+'</b>'+':'+'<br>'+'<br>'+

                                    'Un système thermodynamique isolé évolue spontanément vers un état d\'équilibre thermodynamique qu\'il ne quitte jamais de lui-même.'+'</li>'+'<br>'+
                                '<li>'+'<b>'+'L\'état d\'équilibre thermodynamique'+'</b>'+' d\'un système peut être modifié par contact :'+'<br>'+'<br>' +
                                    '- mécanique avec l\'environnement extérieur'+'<br>'+
                                    '- thermique avec un autre environnement (lorsque deux corps avec des températures différentes se touchent) ou avec l\'environnement extérieur'+'<br>'+
                                    '- échange de substances avec le milieu extérieur ou un autre environnement'+'</li>'+'<br>'+
                                        '<li>'+'<b>'+'Le processus thermodynamique'+'</b>'+' (transformation d\'état) représente la transition du système d\'un état à un autre.'+'</li>' +' <br>'+
                                        '<li>'+'<b>'+'Transformation quasi-statique'+'</b>'+' se produit lorsque les états intermédiaires traversés par le système sont des états d\'équilibre thermique, lorsque les paramètres d\'état varient très lentement. ' +'</li>'+'<br>'+
                                        '<li>'+'<b>'+'Le processus réversible'+'</b>'+' est la transformation quasi-statique qui peut se produire dans les deux sens, à travers les mêmes états intermédiaires.'+'</li>'+ '<br>'+
                                        '<li>'+'L\'équation d\'état (appelée Clapeyron - Mendeleev) décrit la dépendance entre les paramètres d\'état d\'un système thermodynamique :'+'<br>'+'<br>'+
                                            'p ∙ V = ν ∙ R ∙ T'+'<br>'+'<br>'+
                                            'p = pression du gaz parfait'+'<br>'+
    
                                            'V = volume de gaz idéal'+'<br>'+
    
                                            'ν = nombre de moles de gaz parfait'+'<br>'+
    
                                            'R = constante universelle des gaz = 8,3143 ∙ 10'+'<sup>'+'3'+'</sup>'+' J/kmol ∙ K'+'<br>'+
    
                                            'T = température des gaz parfaits'+'</li>'+
                                '</ul>'+
                                '<h2 align = centre>'+
                                '<img src = \"img/transformari.png\" width = 360>'+
                                '</h2>'+
                                '<h2 class=\"p-3\">'+'Température empirique. Échelles de température : '+'</h2>'+
                                '<ul>'+
                                    '<li>'+'Deux systèmes thermodynamiques fermés isolés adiabatiquement de l\'extérieur qui n\'échangent pas d\'énergie entre eux ont la même température, appelée '+'<b>'+'température empirique.'+'</b> '+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Température'+'</b>'+' est une grandeur physique d\'état mesurée avec un thermomètre, impliquant un corps thermométrique, une grandeur thermométrique et une échelle de température.' +'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Le principe zéro de la thermodynamique'+'</b>'+' (transitivité de l\'équilibre thermique) :'+'<br>'+'<br>'+
                                        'Si le système A est en équilibre thermique avec le système B et que le système B est en équilibre thermique avec le système C, alors le système A est également en équilibre thermique avec le système C.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Relation de transformation'+'</b>'+' entre Celsius t(°C) et Fahrenheit tF (°F) :'+'<br>'+ '<br>'+
                                        't'+'<sub>'+'F'+'</sub>'+' = 9/5 ∙ t(°C) + 32'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Échelle Kelvin'+'</b>'+' (absolu) : '+'<br>'+'<br>'+
                                        '[T]'+'<sub>'+'SI'+'</sub>'+' = K (kelvin)'+'<br>'+'<br>'+
                                        'T(K) = t (°C) + 273,15'+'</li>'+
                                '</ul>'+

                                //Principiul I
                                '<a name=\"element_target\">'+'</a>'+
                                '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center>'+'Le principe I'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                

                                '<h2 class=\"p-3\">'+'Travaux mécaniques :'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'L\'échange d\'énergie entre un système thermodynamique fermé et le milieu extérieur peut s\'effectuer de deux manières :'+'<br>'+'<br>'+
                                    '- En effectuant des travaux mécaniques'+'<br>'+
                                    '- Par transfert thermique.'+'<br>'+'<br>'+
                                    
                                    'La mesure de l\'énergie transférée au système dans les conditions des interactions qui entraînent la variation des paramètres de position sous l\'action de certaines forces est appelée '+'<b>'+'travail mécanique.'+'</b>'+'<br>'+' <br>'+
                                    'L = F ∙ d'+'</li>'+'<br>'+
                                '<li>'+'Le travail mécanique effectué par la force externe F'+'<sub>'+'e'+'</sub>'+' est :'+'<br>'+'<br> '+
                                    'L'+'<sub>'+'e'+'</sub>'+' = p'+'<sub>'+'e'+'</sub>'+' ∙ S ∙ (x1 - x2) = - p'+'<sub>'+'e'+'</sub>'+' ∙ ΔV'+'<br>'+'<br>'+
                                    'S = section transversale du cylindre'+'<br>'+
                                    'p'+'<sub>'+'e'+'</sub>'+' = pression externe'+'<br>'+

                                        'V2 = S ∙ x2'+'<br>'+
                                        'V1 = S ∙ x1'+'<br>'+
                                        
                                        'ΔV = V2 - V1'+'</li>'+'<br>'+
                                        '<li>'+'Le travail mécanique effectué par le système thermodynamique dans une transformation isobare est :'+'<br>'+'<br>'+
                                        'L = p ∙ ΔV'+'</li>'+'<br>'+
                                    
                                    '<li>'+'Conventions de signes pour le travail mécanique effectué par le système thermodynamique :'+'<br>'+'<br>'+
                                    
                                        'a) Si le gaz se dilate (augmente son volume), ΔV > 0, alors L > 0 et le système effectue un travail mécanique sur le milieu extérieur (donne L).'+'<br>'+'<br>'+
                                    
                                        'b) Si le gaz est comprimé (son volume diminue), ΔV < 0, alors L < 0 et un travail mécanique est effectué sur le système (reçoit L).'+'<br>'+'<br>'+
                                    
                                        'c) S\'il n\'y a pas de transfert d\'énergie par travail mécanique entre le système et l\'extérieur (L = 0), alors le gaz ne change pas de volume (ΔV=0).'+'</li>'+'<br>'+                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Travaux mécaniques :'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'L\'énergie des particules d\'un gaz réel est donnée par :'+'<br>'+'<br>'+
                                        '- L\'énergie externe est donnée par la somme de l\'énergie cinétique du système dans son ensemble et de son énergie potentielle dans un champ de force.'+'<br>'+'<br>'+
                                        '- L\'énergie interne (U) est donnée par la somme des énergies cinétiques des molécules (E'+'<sub>'+'c'+'</sub>'+') et des énergies potentielles d\'interaction entre les molécules du système thermodynamique (E '+'<sub>'+'p'+'</sub>'+').'+'<br>'+'<br>'+
                                        'U = Ec + Ep'+'<br>'+'<br>'+
                                        '- Mais la variation d\'énergie interne (ΔU = U'+'<sub>'+'2'+'</sub>'+' – U'+'<sub>'+'1'+'</sub> ' +') est une grandeur d\'état physique et ne dépend pas des états intermédiaires par lesquels passe le système, mais uniquement de l\'état initial (U'+'<sub>'+'1'+'</sub>'+ ') et la finale (U'+'<sub>'+'2'+'</sub>'+').'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'La chaleur:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                    'La chaleur (Q) est une grandeur physique qui mesure l\'énergie transférée, uniquement par le mouvement désordonné des molécules entre deux corps en contact thermique.'+'<br>'+'<br>'+

                                    '[Q]'+'<sub>'+'SI'+'</sub>'+' = J(joule)'+'<br>'+'<br>'+
                                    'Une autre unité de mesure tolérée pour la chaleur est la calorie : 1cal = 4,18 J'+
                                '</li>'+'<br>'+
                                '<li>'+'Conventions de signes pour la chaleur :'+'<br>'+'<br>'+
                                    'a) Lorsque le système reçoit de la chaleur de l\'extérieur, alors Q > 0'+'<br>'+'<br>'+
                                    'b) Lorsque le système dégage de la chaleur vers l\'extérieur, alors Q < 0'+'<br>'+'<br>'+
                                    'c) Lorsque le système est isolé adiabatiquement (n\'échange pas de chaleur avec l\'extérieur), alors Q = 0'+
                                '</li>'+'<br>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Conséquences du premier principe de la thermodynamique :'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'Énoncer le premier principe de la thermodynamique :'+'<br>'+'<br>'+
                                        'La variation de l\'énergie interne d\'un système dans un processus est :'+'<br>'+'<br>'+
                                        'ΔU = Q - L'+'</li>'+'<br>'+
                                    '<li>'+'Si le système est isolé (il n\'échange ni chaleur ni travail mécanique avec l\'extérieur), alors'+'<br>'+'<br>'+
                                        'Q = L = 0, ΔU = U2 – U1 = 0 et U1 = U2, c\'est-à-dire que l\'énergie interne d\'un système isolé est conservée.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'L\'équation du premier principe de la thermodynamique peut aussi s\'écrire sous la forme de la définition de la chaleur :'+'<br>'+'<br>'+
                                        'Q = ΔU + L, c\'est-à-dire que la chaleur reçue par un système sert à la fois à modifier l\énergie interne du système et à effectuer un travail mécanique par le système.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Si le système est isolé adiabatiquement (n\'échange pas de chaleur avec l\'extérieur), alors'+'<br>'+'<br>'+
                                        'Q = 0 et L = –ΔU = –(U2 – U1), c\'est-à-dire qu\'un système adiabatique isolé échange du travail mécanique avec l\'extérieur uniquement en raison de la variation de l\'énergie interne.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Si le système n\'échange pas de travail mécanique avec l\'extérieur (L= 0), mais seulement de la chaleur alors'+'<br>'+'<br>'+
                                        'ΔU = Q, c\'est-à-dire que la chaleur reçue par le système entraîne une augmentation de l\'énergie interne du système.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Dans une transformation cyclique, ΔU = U2 – U1 = 0 et L = Q, c\'est-à-dire que le système ne peut effectuer un travail mécanique que s\'il reçoit de la chaleur de l\'extérieur.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'De là découle l\'impossibilité de l\'existence d\'un mobile perpétuel du premier type (un appareil qui produit un travail mécanique sans consommer d\'énergie de l\'extérieur).'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Coefficients caloriques :'+'</h2>'+
                                '<ul>'+
                                '<li>'+
                                    'La chaleur spécifique (c) représente la grandeur physique qui caractérise la chaleur absorbée/remise par 1 kg de substance pour augmenter/diminuer sa température d\'un degré. C\'est une constante matérielle et se trouve dans le tableau des constantes à la fin de ce chapitre.'+'<br>'+'<br>'+
                                    'c = 1 / m ∙ Q / ΔT'+'<br>'+'<br>'+
                                    '[c]'+'<sub>'+'SI'+'</sub>'+' = J/Kg∙K'+'<br>'+'<br>'+
                                    'Q = m ∙ c ∙ ΔT'+'<br>'+
                                    'm = masse corporelle'+'<br>'+
                                    'c = chaleur spécifique'+'<br>'+
                                    'ΔT = T'+'<sub>'+'final'+'</sub>'+' – T'+'<sub>'+'initial'+'</sub>'+' , la température corporelle variante '+'<br>'+'<br>'+
                                    'Q'+'<sub>'+'reçu'+'</sub>'+' > 0'+'<br>'+
                                    'Q'+'<sub>'+'cédé'+'</sub>'+'< 0 '+'<br>'+'<br>'+
                                    'L\'équation calorimétrique : '+'<br>'+'Q'+'<sub>'+'reçu'+'</sub>'+' = | Q'+'<sub>'+'cédé'+'</sub>'+' |'+'<br>'+
                                '</li>'+'<br>'+
                                    '<li>'+
                                        'La capacité thermique (C) représente la grandeur physique qui caractérise la quantité de chaleur nécessaire au système thermodynamique pour faire varier sa température d\'un degré.'+'<br>'+'<br>'+
                                        'C = Q / ΔT'+'<br>'+'<br>'+
                                        '[C]'+'<sub>'+'SI'+'</sub>'+' = J/Kg'+'<br>'+'<br>'+
                                        'Q = C ∙ ΔT'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'La chaleur molaire (C'+'<sub>'+'μ'+'</sub>'+') est la chaleur nécessaire pour modifier la température d\'une mole d\'une substance d\'un degré.'+'<br> ' +'<br>'+
                                        'C'+'<sub>'+'μ'+'</sub>'+' = Q / v ∙ ΔT'+
                                        '[C'+'<sub>'+'μ'+'</sub>'+'] = J/mol∙K'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Degrés de liberté :'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'Comme en thermodynamique, les molécules de gaz parfaits sont considérées comme des points matériels, les coordonnées indépendantes qui caractérisent le système thermodynamique sont appelées degrés de liberté.'+'<br>'+'<br>'+
                                        '- Pour les gaz monoatomiques : i = 3'+'<br>'+
                                        '- Pour les gaz diatomiques : i = 5'+'<br>'+
                                        '- Pour les gaz polyatomiques : i = 6'+'<br>'+'<br>'+

                                        'La chaleur molaire à volume constant est :'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'v'+'</sub>'+' = i/2 R'+'<br>'+'<br>'+
                                        'La chaleur molaire à pression constante est :'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = (i + 2)/2 R'+'<br>'+'<br>'+
                                        'R = 8,3143 ∙ 10'+'<sup>'+'3'+'</sup>'+' J/kmol ∙ K (constante universelle des gaz)'+'</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Transformation isochore :'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'(ν et V const.) → ΔV = 0 → L'+'<sub>'+'V'+'</sub>'+' = p ∙ ΔV = 0'+'</li>'+'<br>'+
                                    '<li>'+'Nous avons deux cas :'+'<br>'+'<br>'+
                                        '- Le gaz enfermé dans un volume constant est chauffé, absorbe la chaleur → QV > 0 et ΔU > 0 (augmente l\'énergie interne du gaz).'+'<br>'+'<br>'+
                                        '- Le gaz enfermé dans un volume constant se refroidit, il cède de la chaleur → QV < 0 et ΔU < 0 (l\'énergie interne du gaz diminue)'+'</li>'+'<br>'+
                                    '<li>'+' Formules : '+'<br>'+'<br>'+
                                        
                                        'ΔU = Q'+'<sub>'+'V'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ ΔT '+'<br>'+'<br>'+
                                        'ΔU = U – U'+'<sub>'+'0'+'</sub>'+' et ΔT = T – T'+'<sub>'+'0'+'</sub>' +', pour T'+'<sub>'+'0'+'</sub>'+' = 0 K → U'+'<sub>'+'0'+'</sub>'+' = 0'+'<br>'+'<br>'+
                                        'L\'énergie interne d\'un gaz parfait monoatomique est :'+'<br>'+
                                        'U = ν ∙ C'+'<sub>'+'V'+'</sub>'+'∙ T = 3/2 ∙ ν ∙ R ∙ T'+'</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Transformation isobare:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        '(ν și p const.)'+'<br>'+'<br>'+
                                        'Si le gaz est chauffé, il absorbe de la chaleur → Qp > 0 et une partie de l\'énergie est utilisée pour augmenter l\'énergie interne du gaz ΔU > 0 et l\'autre partie est le travail mécanique effectué par le gaz à l\'extérieur, L > 0.'+
                                    '</li>'+'<br>'+
                                    '<li>'+' Formules : '+'<br>'+'<br>'+
                                            'L = p ∙ ΔV'+'<br>'+'<br>'+
                                            'Q'+'<sub>'+'p'+'</sub>'+' = ν ∙ C'+'<sub>'+'p'+'</sub>'+' ∙ ΔT'+ '<br>'+'<br>'+
                                            'La variation d\'énergie interne ne dépend pas du procédé et on peut écrire :'+'<br>'+
                                            'ΔU = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ ΔT'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Transformation isotherme :'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        '(ν și T const.) → U = const. și ΔU = 0.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Lorsque le gaz est chauffé, il absorbe de la chaleur → QT > 0 et L > 0, étant entièrement utilisé pour effectuer des travaux mécaniques à l\'extérieur.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Dans une transformation isotherme, la pression est inversement proportionnelle au volume du gaz et on a alors un travail mécanique.'+
                                    '</li>'+'<br>'+
                                    '<li>'+' Formules :'+'<br>'+'<br>'+
                                        'L'+'<sub>'+'T'+'</sub>'+' = v ∙ R ∙ T ∙ ln(V'+'<sub>'+'2'+'</sub>'+' / V'+'<sub>'+'1'+'</sub>'+')'+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'T'+'</sub>'+' = L'+'<sub>'+'T'+'</sub>'+' = v ∙ R ∙ T ∙ ln(V'+'<sub>'+'2'+'</sub>'+' / V'+'<sub>'+'1'+'</sub>'+')'+'<br>'+'<br>'+
                                        'p'+'<sub>'+'1'+'</sub>'+' ∙ V'+'<sub>'+'1'+'</sub>'+' = p'+'<sub>'+'2'+'</sub>'+' ∙ V'+'<sub>'+'2'+'</sub>'+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'T'+'</sub>'+' = L'+'<sub>'+'T'+'</sub>'+' = v ∙ R ∙ T ∙ ln(V'+'<sub>'+'2'+'</sub>'+' / V'+'<sub>'+'1'+'</sub>'+') = v ∙ R ∙ T ∙ ln(p1 / p2)'+'<br>'+'<br>'+
                                        'U = const și ΔU = 0'+
                                    '</li>'+'<br>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Transformation adiabatique :'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        '(ν const.) → Qad = 0'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Formule :'+'<br>'+'<br>'+
                                        'ΔU = - L'+'<sub>'+'ad'+'</sub>'+'<br>'+'<br>'+
                                        'ΔU = ν ∙ C'+'<sub>'+'v'+'</sub>'+' ∙ΔT'+'<br>'+'<br>'+
                                        'L'+'<sub>'+'ad'+'</sub>'+' = - ν ∙ C'+'<sub>'+'v'+'</sub>'+' ∙ ΔT' +'<br>'+'<br>'+
                                        'L\'équation du processus adiabatique est appelée équation de Poisson :'+'<br>'+
                                        'p ∙ V'+'<sup>'+'y'+'</sup>'+' = const.'+'<br>'+
                                        'y = coefficient adiabatique = C'+'<sub>'+'p'+'</sub>'+' / C'+'<sub>'+'V'+'</sub>'+'<br>'+
                                        'T ∙ V'+'<sup>'+'y-1'+'</sup>'+' - const'+
                                        'T'+'<sup>'+'y'+'</sup>'+' / p '+'<sup>'+'y-1'+'</sup>'+' = const'+
                                    '</li>'+
                                '</ul>'+
                                
                                '<h2 class=\"p-3\">'+'Relation Robert – Mayer :'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'En cas de transformation isochore :'+'<br>'+'<br>'+
                                        'ΔU = Q'+'<sub>'+'V'+'</sub>'+' = v ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ ΔT '+'<br>'+'<br>'+
                                        'C'+'<sub>'+'V'+'</sub>'+' = Q'+'<sub>'+'V'+'</sub>'+' / (v ∙ ΔT) = ΔU / (v ∙ ΔT)'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'En cas de transformation isobare :'+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'p'+'</sub>'+' = (v ∙ C'+'<sub>'+'p'+'</sub>'+' ∙ ΔT) = ΔU + p ∙ ΔV'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = Q'+'<sub>'+'p'+'</sub>'+' / (v ∙ ΔT) = (ΔU + p ∙ ΔV) / (v ∙ ΔT)'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'En combinant les deux relations de Cp et CV on obtient :'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = C'+'<sub>'+'V'+'</sub>'+' + (p ∙ ΔV) / (v ∙ ΔT)'+'<br>'+'<br>'+
                                        'De l\'équation d\'état thermique :'+'<br>'+'<br>'+
                                        'p ∙ ΔV = ν ∙ R ∙ ΔT'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'La relation de Robert-Mayer établit la relation entre les chaleurs molaires :'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = C'+'<sub>'+'V'+'</sub>'+' + R'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'La relation de Robert-Mayer établit la relation entre les chaleurs spécifiques molaires :'+'<br>'+'<br>'+
                                        'c'+'<sub>'+'p'+'</sub>'+' = c'+'<sub>'+'V'+'</sub>'+' + (R / μ) '+
                                    '</li>'+
                                '</ul>'+


                                //Motoare termice
                                '<a name=\"element_target2\">'+'</a>'+
                                '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center>'+'Moteurs thermique'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                
                                '<h2 class=\"p-3\">'+'Machines thermiques :'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Lors d\'une transformation cyclique bithermique, le système thermodynamique échange des chaleurs Q'+'<sub>'+'1'+'</sub>'+', respectivement Q'+'<sub>'+'2'+'</sub>'+' avec deux sources de chaleur dont les températures sont T'+'<sub>'+'1'+'</sub>'+' (source chaude) et T'+'<sub>'+ '2 '+'</sub>'+' (source froide), avec T'+'<sub>'+'1'+'</sub>'+' > T'+'<sub>'+' 2' +'</sub>'+' .'+'<br>'+'<br>'+
                                            'Comme les transformations cycliques ont ΔU = 0, selon le premier principe de la thermodynamique nous avons'+'<br>'+'<br>'+
                                            'Q'+'<sub>'+'1'+'</sub>'+' + Q'+'<sub>'+'2'+'</sub>'+' = L'+'<br>'+'<br>'+

                                            'Le moteur thermique est un système thermodynamique qui effectue une transformation cyclique dans laquelle il échange de la chaleur et du travail mécanique avec l\'environnement extérieur.'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Moteurs thermiques :'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        "Le moteur thermique est un système qui transforme la chaleur reçue, en brûlant un carburant (essence, diesel, méthane, etc.) en travail mécanique."+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Le moteur Otto :'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Le moteur Otto utilise comme carburant un mélange d\'air et de vapeurs d\'essence créé dans le carburateur.'+'<br>'+'<br>'+
                                        '- Le mélange de carburant est aspiré par la soupape d\'admission (S1) dans le cylindre à piston.'+'<br>'+'<br>'+
                                        '- Les gaz issus de la combustion du mélange carburé sont éliminés par la soupape d\'échappement (S2).'+'<br>'+'<br>'+
                                        '- Le temps de fonctionnement est la durée de déplacement du piston depuis le point mort haut = PMH (le cylindre ferme un volume minimum de substance) jusqu\'au point mort bas = PMI (le cylindre ferme un volume maximum de substance) et vice versa.'+'<br>'+'<br>'+
                                        '- Le piston est relié à un système bielle-manivelle (vilbrochen = vilebrequin), pour transformer le mouvement rectiligne du piston en mouvement de rotation.'+'<br>'+'<br>'+
                                        '- Le bloc moteur est constitué de plusieurs cylindres connectés en série. Chaque piston a un temps de déploiement différent pour permettre une rotation permanente et constante du vilborchen.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                    'Temps de fonctionnement du moteur Otto :'+'<br>'+'<br>'+

                                        ' - '+'<b>'+'Heure 1 : Admission'+'</b>'+' - (processus isobare) :'+'<br>'+'<br>'+
                                        ' La soupape d\'admission s\'ouvre, le mélange essence-air est aspiré dans le cylindre et le piston descend du PMH au PMH à pression constante. C\'est la première descente du piston.'+'<br>'+'<br>'+

                                        ' -'+'<b>'+'Temps 2 : Compression'+'</b>'+' - (processus adiabatique) :'+'<br>'+'<br>'+
                                        'Les deux vannes sont fermées. Le piston monte jusqu\'au PMH, le carburant est donc fortement comprimé, auquel cas la pression et la température augmentent. En raison de la vitesse élevée à laquelle se produit la compression, ce processus est adiabatique (pas d’échange thermique avec l’extérieur). C\'est la première montée du piston.'+'<br>'+'<br>'+

                                        ' -'+'<b>'+'Temps 3 : Allumage'+'</b>'+' - (processus isochore) et '+'<b>'+'détente'+'</b>'+ ' - (processus adiabatique):'+'<br>'+'<br>'+
                                        'Les deux soupapes sont fermées et le piston est au PMH. L\'étincelle électrique produite par la bougie enflamme le mélange qui explose et entraîne une augmentation considérable de la pression à volume constant. Le mélange brûle avec dégagement de chaleur (Q1 = chaleur reçue par le moteur). Les gaz issus de la combustion se dilatent de manière adiabatique, poussant le piston en PMI avec un travail mécanique effectué.'+'<br>'+'<br>'+

                                        ' -'+'<b>'+'Temps 4 : Evacuation'+'</b>'+' - (processus isochore) et (processus isobare) :'+'<br>'+'<br>'+
                                        'La soupape d\'échappement S2 s\'ouvre, auquel cas la pression chute soudainement jusqu\'à la valeur de la pression atmosphérique. Dans ce processus isochore, le mélange cède la chaleur Q2 à l\'environnement extérieur. Le piston monte au PMH en expulsant les gaz brûlés à pression constante. À partir de là, le cycle reprend.'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Efficacité du moteur thermique Otto :'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Le rendement du moteur thermique Otto (η) est une grandeur physique égale au rapport entre le travail mécanique effectué par le moteur (L) et la chaleur reçue (Q).'+'<br>'+'<br> '+
                                        'η = L / Q'+'<sub>'+'1'+'</sub>'+' = 1 - (|Q'+'<sub>'+'rendement'+'</sub>' +'| / Q'+'<sub>'+'reçu'+'</sub>'+') = 1 - (|Q'+'<sub>'+'2'+'</sub> ' +'|. / Q'+'<sub>'+'1'+'</sub>'+')'+'<br>'+'<br>'+

                                        'Nous supposons que la substance active est un gaz parfait et que le taux de compression est ε = V'+'<sub>'+'1'+'</sub>'+'/V'+'<sub>'+'2 '+'</sub>'+'.'+'<br>'+'<br>'+

                                        'Les chaleurs dans les quatre transformations sont :'+'<br>'+'<br>'+
                                        ' - Q'+'<sub>'+'12'+'</sub>'+' = 0'+'<br>'+
                                        ' - Q'+'<sub>'+'23'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T '+'<sub>'+'3'+'</sub>'+' – T'+'<sub>'+'2'+'</sub>'+') = Q'+'<sub>'+'1'+'</sub>'+' > 0'+'<br>'+
                                        ' - Q'+'<sub>'+'34'+'</sub>'+' = 0'+'<br>'+
                                        ' - Q'+'<sub>'+'41'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T '+'<sub>'+'31'+'</sub>'+' – T'+'<sub>'+'4'+'</sub>'+') = Q'+'<sub>'+'2'+'</sub>'+' < 0'+'<br>'+'<br>'+

                                        ' η = 1 - (1 / ε'+'<sup>'+'y-1'+'</sup>'+')'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Moteur Diesel :'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                    'Le moteur diesel est un moteur à combustion interne à quatre temps avec allumage par injection diesel.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Durées de fonctionnement du moteur diesel :'+'<br>'+'<br>'+

                                        '- '+'<b>'+'Temps 1 : Admission '+'</b>'+' - (processus isobare) :'+'<br>'+'<br>'+
                                        'La soupape d\'admission s\'ouvre, l\'air est aspiré dans le cylindre à pression atmosphérique et le piston descend du PMH au PMH à pression constante (processus isobare). C\'est la première descente du piston.'+'<br>'+'<br>'+
                                        '- '+'<b>'+'Temps 2 : Compression'+'</b>'+' - (processus adiabatique) :'+'<br>'+'<br>'+
                                        'Les deux vannes sont fermées. Le piston monte au PMH, donc l\'air est fortement comprimé, auquel cas la pression et la température augmentent considérablement. En raison de la vitesse élevée à laquelle se produit la compression, ce processus est adiabatique (pas d’échange thermique avec l’extérieur). C\'est la première montée du piston.'+'<br>'+'<br>'+
                                        '- '+'<b>'+'Temps 3 : Allumage'+'</b>'+' - (processus isobare) et '+'<b>'+'détente'+'</b>'+ ' - (processus adiabatique):'+'<br>'+'<br>'+
                                        'Les deux soupapes sont fermées et le piston est au PMH. La pompe d\'injection pulvérise du carburant diesel dans le cylindre du moteur. La température de l\'air dans le cylindre est supérieure à la température d\'inflammation du diesel, celui-ci s\'enflamme donc et brûle à pression constante, libérant de la chaleur (Q1 = chaleur reçue par le moteur). Les gaz issus de la combustion se dilatent de manière adiabatique, poussant le piston en PMI avec un travail mécanique effectué.'+'<br>'+'<br>'+
                                        '- '+'<b>'+'Temps 4 : Évacuation'+'</b>'+' - (processus isochore) et (processus isobare) :'+'<br>'+'<br>'+
                                        'La soupape d\'échappement S2 s\'ouvre, auquel cas la pression chute soudainement jusqu\'à la pression atmosphérique. Dans ce processus isochore (à volume constant), le mélange cède de la chaleur Q2 au milieu extérieur. Le piston monte au PMH en expulsant les gaz brûlés à pression constante. À partir de là, le cycle reprend.'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Rendement du moteur thermique diesel :'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                    'Le rendement du moteur thermique Diesel (η) est une grandeur physique égale au rapport entre le travail mécanique effectué par le moteur (L) et la chaleur reçue (Q).'+'<br>'+'<br> '+
                                    'η = L / Q'+'<sub>'+'1'+'</sub>'+' = 1 - (|Q'+'<sub>'+'rendement'+'</sub>' +'| / Q'+'<sub>'+'reçu'+'</sub>'+') = 1 - (|Q'+'<sub>'+'2'+'</sub> ' +'|. / Q'+'<sub>'+'1'+'</sub>'+')'+'<br>'+'<br>'+

                                    'Nous supposons que la substance active est un gaz parfait et que le taux de compression est ε = V'+'<sub>'+'1'+'</sub>'+'/V'+'<sub>'+'2 '+'</sub>'+' et α = V'+'<sub>'+'3'+'</sub>'+'/V'+'<sub>'+'2'+'</sub>'+'<br>'+'<br>'+

                                    'Les chaleurs dans les quatre transformations sont :'+'<br>'+'<br>'+
                                    '- Q'+'<sub>'+'12'+'</sub>'+' = 0 (processus adiabatique)'+'<br>'+
                                    '- Q'+'<sub>'+'23'+'</sub>'+' = ν ∙ C'+'<sub>'+'p'+'</sub>'+' ∙ (T '+'<sub>'+'3'+'</sub>'+' – T'+'<sub>'+'2'+'</sub>'+') = Q'+'<sub>'+'1'+'</sub>'+' > 0 (processus isobare)'+'<br>'+
                                    '- Q'+'<sub>'+'34'+'</sub>'+' = 0 (processus adiabatique)'+'<br>'+
                                    '- Q'+'<sub>'+'41'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T '+'<sub>'+'1'+'</sub>'+' – T'+'<sub>'+'4'+'</sub>'+') = Q'+'<sub>'+'2'+'</sub>'+' < 0 (processus isochore)'+'<br>'+'<br>'+

                                    'η = 1 - (1 / y) ∙ (a'+'<sup>'+'y-1'+'</sup>'+' / ε'+'<sup>'+'y-1' +'</sup>'+'(a-1))'+
                                    
                                '</li>'+
                                '</ul>'+
                                

                                //Principiul al II-lea

                                '<a name=\"element_target3\">'+'</a>'+
                                '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center>'+'Le principe II'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                
                                '<h2 class=\"p-3\">'+'Formulation de Carnot de la deuxième loi de la thermodynamique :'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'La première formulation de la deuxième loi de la thermodynamique appartient à Sadi Carnot, qui montra en 1824 qu\'il existe une limite supérieure à l\'efficacité de la conversion de la chaleur en énergie mécanique dans une machine thermique, ce qui implique l\'utilisation d\'un cycle thermodynamique de un fluide de travail.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Carnot a été le premier à montrer qu\'il n\'est pas possible de faire fonctionner un moteur thermique avec un seul thermostat, mais qu\'il faut au moins deux thermostats. Ainsi, le système reçoit de la chaleur d\'une source chaude (thermostat avec T'+'<sub>'+'1'+'</sub>'+') et donne de la chaleur à une source froide (thermostat avec T'+'<sub>'+'2'+'</sub>'+').'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Les paramètres du gaz dans l\'état initial sont p'+'<sub>'+'1'+'</sub>'+', V'+'<sub>'+'1'+'</sub>'+' et T'+'<sub>'+'1'+'</sub>'+'.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Nous amenons la bouteille de gaz à un radiateur (thermostat avec T'+'<sub>'+'1'+'</sub>'+'). Le gaz absorbera la chaleur Q'+'<sub>'+'1'+'</sub>'+' de la source chaude et se dilatera de manière isotherme (T'+'<sub>'+'1'+'</sub>'+' = const.) et quasi-statique de V'+'<sub>'+'1'+'</sub>'+' à V'+'<sub>'+'2'+' </sub>'+', effectuant le travail mécanique L'+'<sub>'+'1'+'</sub>'+'.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Nous apportons la bouteille de gaz sur un support calorifuge. Le gaz se dilate de manière adiabatique jusqu\'à V'+'<sub>'+'3'+'</sub>'+', effectuant un travail mécanique L'+'<sub>'+'2'+'</sub>' + '. Le gaz se refroidit jusqu\'à la température T'+'<sub>'+'2'+'</sub>'+' < T'+'<sub>'+'1'+'</sub>'+'. ' +
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Nous amenons la bouteille de gaz à une source froide (thermostat avec T'+'<sub>'+'2'+'</sub>'+'). Le gaz dégagera de la chaleur Q'+'<sub>'+'2'+'</sub>'+' et se comprimera de manière isotherme (T'+'<sub>'+'2'+'</sub> ' +' = const.) et quasi-statique de V'+'<sub>'+'3'+'</sub>'+' à V'+'<sub>'+'4'+'</sub> '+', recevant le travail mécanique L'+'<sub>'+'3'+'</sub>'+'.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Nous apportons la bouteille de gaz sur un support calorifuge. Le gaz est comprimé adiabatiquement de V'+'<sub>'+'4'+'</sub>'+' à '+'<sub>'+'1'+'</sub>'+'. Sa température augmentera de T'+'<sub>'+'2'+'</sub>'+' à T'+'<sub>'+'1'+'</sub>'+', recevant le travail mécanique L'+'<sub>'+'4'+'</sub>'+'. Le gaz revient à son état initial.'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Rendement cycle Carnot :'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Le rendement du cycle de Carnot (η) est une grandeur physique égale au rapport entre le travail mécanique effectué par le moteur (L) et la chaleur reçue (Q'+'<sub>'+'1'+'</sub>'+'). '+'<br>'+'<br>'+
                                        'η = L / Q'+'<sub>'+'1'+'</sub>'+'<br>'+'<br>'+
                                        'L = L'+'<sub>'+'1'+'</sub>'+' + L'+'<sub>'+'2'+'</sub>'+' + L'+ '<sub>'+'3'+'</sub>'+' + L'+'<sub>'+'4'+'</sub>'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Formulation de Carnot de la deuxième loi de la thermodynamique :'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Le rendement du cycle de Carnot est toujours sous-unitaire, car T'+'<sub>'+'2'+'</sub>'+' ≠ 0'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'La performance du cycle Carnot dépend uniquement de la température de la source chaude (T'+'<sub>'+'1'+'</sub>'+') et de la source froide (T'+'<sub>'+'2' +'</sub>'+') et ne dépend pas de la substance active.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        "Le rendement d'un moteur thermique irréversible est toujours inférieur au rendement d'un moteur thermique fonctionnant de manière réversible entre les mêmes limites de température."+
                                    '</li>'+
                                '</ul>'),

        //teorieElectromecanica.html
        "teorieElectromecanicaTitle": "Théorie de l'électromécanique",
        "teorieElectromecanica": ('<u>' +'<h2 class="p-3" align = center>Le curent électrique</h2><br><br><br>' +'</u>'         
                                +'<ul>'
                                    +'<li>'
                                        +'Le <b>curent électrique</b> est le déplacement ordonné des porteurs de charge électrique à travers un circuit électrique.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Les <b>porteurs de charge</b> électrique dont le mouvement entraîne l\'apparition du courant électrique peuvent être :<br><br>'
                                        +'a) Les électrons libres, dans les métaux.<br><br>'
                                        +'b) Les ions et les électrons, dans les électrolytes (solutions ou mélanges fondus d\'acides, de bases ou de sels) et dans les gaz.'
                                    +'</li>'
                                +'</ul>'
                                +'<h2 class="p-3">Les composants d\'un circuit électrique :</h2>'
                                +'<ul>'
                                    +'<li>'
                                        +'Générateurs électriques<br><br>'
                                        +'- Générateurs de courant continu<br><br>'
                                        +'- Générateurs de courant alternatif'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Appareils électriques<br><br>'
                                        +'- ampoule électrique<br><br>'
                                        +'- résistance électrique<br><br>'
                                        +'- moteur électrique<br><br>'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Conducteurs de liaison<br>'
                                        +'sont des fils fabriqués en aluminium ou en cuivre et qui relient les composants du circuit entre eux.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Interrupteurs électriques<br>'
                                        +'qui ont pour rôle de fermer et d\'ouvrir le circuit électrique. Seul lorsque l\'interrupteur est en position fermée, le courant électrique passe à travers le circuit.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Le sens conventionnel du courant électrique continu dans un circuit va de la borne positive de la source à la borne négative, à travers le circuit extérieur (à travers les consommateurs).'
                                    +'</li>'
                                    
                                +'</ul>'
                                +'<h2 class="p-3">Intensité du courant électrique:</h2>'
                                +'<ul>'
                                    +'<li>'
                                        +'Lorsque nous appliquons une tension électrique entre deux points d\'un conducteur, un courant électrique apparaît, c\'est-à-dire un mouvement dirigé de ses électrons libres, transportant une charge q = n ∙ e.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'L\'intensité du courant électrique (I) est une grandeur physique scalaire numérique égale au rapport entre la charge électrique (q) traversant la section transversale d\'un conducteur et l\'intervalle de temps (Δt).'
                                    +'</li><br>'
                                    +'<li>'
                                    +'Caractérisation de l\'intensité du courant électrique en tant que grandeur physique:<br><br>'
                                    +'I = Charge électrique / Temps = q / Δt = (n ∙ e) / Δt<br><br>'
                                    +'n - nombre d\'électrons<br><br>'
                                    +'e - charge d\'un électron (en valeur absolue)<br><br>'
                                    +'e = 1,6 ∙ 10<sup>-19</sup> C'
                                +'</li>'
                            +'</ul>'
                            
                            +'<h2 class="p-3">Tension électrique:</h2>'

                            +'<ul>'
                            +'<li>'
                            +'<b>Générateurs électriques</b> (sources électriques) sont des dispositifs conçus pour produire et maintenir le courant électrique dans un circuit, c\'est-à-dire qu\'ils assurent le déplacement des porteurs de charge électrique à travers le circuit. Ils effectuent un travail mécanique sur ces porteurs pour les déplacer.'
                        +'</li><br>'
                        +'<li>'
                            +'<b>Tension électromotrice</b> (abrégée t.e.m., avec le symbole E) d\'une source est une grandeur scalaire qui mesure le travail mécanique effectué par la source (L<sub>total</sub>) pour déplacer l\'unité de charge électrique (q) le long du circuit entier.<br><br>'
                            +'E = L<sub>total</sub> / q<br><br>'
                            +'L\'unité de mesure en S.I pour la tension électrique est le volt (V) :<br><br>'
                            +'[E]<sub>SI</sub> = [L]<sub>SI</sub> / [q]<sub>SI</sub> = J / C = V(volt)'
                        +'</li><br>'
                        +'<li>'
                            +'<b>Travail mécanique total</b> effectué par la source pour déplacer la charge q à travers tout le circuit est égal au travail mécanique extérieur effectué par la source pour déplacer la charge q à travers le circuit extérieur (L<sub>ext</sub>) et au travail mécanique effectué par la source pour déplacer la charge q à travers le circuit intérieur de la source (L<sub>int</sub>) :<br><br>'
                            +'L<sub>Total</sub> = L<sub>ext</sub> + L<sub>int</sub><br><br>'
                            +'L<sub>Total</sub> / q = (L<sub>ext</sub> / q) + (L<sub>int</sub> / q)'
                        +'</li><br>'
                        +'<li>'
                        +'<b> Tension électrique</b> aux bornes (avec le symbole U ) est une grandeur scalaire qui mesure le travail mécanique effectué par la source (L<sub>ext</sub>) pour déplacer l\'unité de charge électrique (q) le long du circuit extérieur.<br><br>'
                         +'U = L<sub>ext</sub> / q'
                     +'</li><br>'
                     +'<li>'
                         +'<b>Tension interne</b> (avec le symbole u) est une grandeur scalaire qui mesure le travail mécanique effectué par la source (L<sub>int</sub>) pour déplacer l\'unité de charge électrique (q) le long du circuit intérieur.<br><br>'
                         +'u = L<sub>int</sub> / q'
                     +'</li>'
                     +'<li>'
                         +'Ainsi, nous obtenons la relation entre les trois tensions électriques d\'un circuit électrique:<br><br>'
                         +'E = U + u'
                     +'</li><br>'
                     +'<li>'
                         +'U = Travail mécanique / Charge électrique<br><br>'
                         +'U = L / q'
                     +'</li>'

                         +'</ul>'

                        //Legea lui Ohm
                        +'<a name="element_target"></a>'
                        +'<br><br><br><br><u><h2 class="p-3" align = center>Loi d\'Ohm</h2><br><br><br></u>'
                        
                        +'<h2 class="p-3">Tension électrique :</h2>'
                        +'<ul>'
                            +'<li>'
                                +'Mesure de la résistance électrique'
                            +'</li><br>'
                            +'<li>'
                            +'La constante de proportionnalité entre la tension appliquée (U) et l\'intensité du courant (I) est connue sous le nom de résistance électrique du conducteur.'
                            +'</li><br>'
                            +'<li>'
                                +'La résistance électrique est la grandeur physique qui nous montre à quel point un conducteur s\'oppose au passage du courant électrique à travers lui.'
                            +'</li><br>'
                            +'<li>'
                                +'La résistance électrique d\'un conducteur (R) est une grandeur scalaire égale au rapport entre la tension appliquée (U) aux bornes du conducteur et l\'intensité du courant (I) établie à travers lui, lorsque la température du conducteur reste constante.'
                            +'</li><br>'

                            +'<li>'
                                +'Caractérisation de la résistance électrique en tant que grandeur physique :<br><br>'
                                +'R = Tension électrique / Intensité électrique = U / I<br><br>'
                                +'[R]<sub>SI</sub> = [U]<sub>SI</sub> / [I]<sub>SI</sub> = V / A = Ω (ohm)<br><br>'
                                +'La dépendance de la résistance électrique par rapport à la nature et aux dimensions du conducteur est :<br><br>'
                                +'R = ρ ∙ (l / s) <br><br>'
                                +'l - longueur du conducteur<br>'
                                +'S - aire de la section transversale du conducteur<br>'
                                +'ρ - résistivité électrique du matériau conducteur :<br><br>'
                                +'[ρ]<sub>SI</sub> = 1Ω ∙ m'
                            +'</li>'
                        +'</ul>'
                        +'<h2 class="p-3">Loi d\'Ohm pour une partie du circuit:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'L\'intensité du courant traversant la résistance dépend de :<br><br>'
                            +'1) La tension aux bornes de la résistance : plus la tension aux bornes de la résistance augmente, plus l\'intensité du courant traversant la résistance augmente.<br><br>'
                            +'2) La résistance électrique : plus la résistance de la résistance augmente, plus l\'intensité du courant traversant la résistance diminue.'
                        +'</li><br>'
                        +'<li>'
                            +'Loi d\'Ohm pour une partie du circuit :<br><br>'
                            +'“Si une tension (U) est appliquée aux bornes d\'une partie de circuit, alors l\'intensité du courant électrique (I) produite à travers cette partie de circuit est directement proportionnelle à la tension électrique (U) appliquée à cette partie.“<br><br>'
                            +'I = U / R'
                        +'</li>'
                    +'</ul>'

                    +'<h2 class="p-3">Loi d\'Ohm pour le circuit entier:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Loi d\'Ohm pour le circuit entier:<br><br>'
                            +'“L\'intensité du courant électrique dans un circuit simple est directement proportionnelle à la tension électromotrice de la source (E) et inversement proportionnelle à la résistance totale du circuit (R+r)“. <br><br>'
                            +'I = E / (R + r)<br><br>'
                            +'1) La loi d\'Ohm est généralement valable pour les sources chimiques car elles ont une faible résistance interne, mais peut également être adaptée à d\'autres sources.<br><br>'
                            +'2) Si la résistance externe (R) a des valeurs très faibles, obtenues par exemple en court-circuitant la source avec un conducteur court, c\'est-à-dire si R = 0, l\'intensité du courant fournie par la source devient maximale:<br><br>'
                            +'I<sub>sc</sub> = E / r (courant de court-circuit)<br><br>'
                            +'Cela n\'est pas souhaitable car de forts courants peuvent causer des dommages et la source se décharge rapidement.'
                        +'</li>'
                    +'</ul>'
                    +'<h2 class="p-3">Loi d\'Ohm pour une partie du circuit:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Éléments des réseaux électriques (circuits ramifiés):<br><br>'
                            +'1. <b>Nœud de circuit</b> représente l\'intersection d\'au moins trois conducteurs électriques.<br><br>'
                            +'2. <b>Branche de circuit</b> est la partie du circuit entre deux nœuds successifs, de sorte que le même courant électrique circule à travers ses éléments.<br><br>'
                            +'3. <b>Œil de circuit</b> représente la partie du circuit formée par au moins deux branches, connectées de manière à former un contour fermé (ligne polygonale fermée).<br><br>'
                        +'</li><br>'
                    +'</ul>'


                    //Legea lui Kirchhoff
                    +'<a name="element_target2"></a>'
                    +'<br><br><br><br><u><h2 class="p-3" align = center>Loi de Kirchhoff</h2><br><br><br></u>'
                    +'<h2 class="p-3">Première loi de Kirchhoff:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'“La somme algébrique des intensités des courants se rencontrant dans un nœud de circuit est nulle“. <br><br>'
                        +'</li>'
                    +'</ul>'
                        +'<h2 align = center>'
                            +'<img src ="img/lege1.png" width = 240>'
                        +'</h2>'
                    +'<ul>'
                        +'Les intensités I<sub>k</sub> peuvent être positives ou négatives, en fonction de la manière dont le courant passe par le nœud (entre dans le nœud ou en sort).<br><br>'
                        +'<li>'
                            +'Une autre façon de formuler la première loi de Kirchhoff :<br><br>'
                            +'“La somme algébrique des intensités des courants entrant dans un nœud de circuit est égale à la somme des intensités des courants sortant du nœud de réseau“.'
                        +'</li>'
                    +'</ul>'
                    +'<h2 align = center>'
                        +'<img src ="img/lege1_alt.png" width = 240>'
                    +'</h2>'
                    +'<ul>'
                        +'I<sub>1</sub> + I<sub>2</sub> + I<sub>4</sub> = I<sub>3</sub> + I<sub>5</sub>'
                    +'</ul>'
                    +'<h2 class="p-3">Deuxième loi de Kirchhoff:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'“La somme algébrique des tensions électromotrices dans un nœud du réseau est égale à la somme algébrique des tensions sur chaque branche de ce nœud de circuit“. '
                        +'</li>'
                    +'</ul>'
                    +'<h2 align = center>'
                        +'<img src ="img/lege2.png" width = 240>'
                    +'</h2>'
                    +'<ul>'
                        +'Les termes des sommes peuvent être positifs ou négatifs, en fonction du sens de la tension ou de l\'intensité par rapport au sens choisi arbitrairement pour le nœud considéré.<br><br>'
                        +'Pour m = nr. de nœuds simples, on écrit m équations avec la deuxième loi de Kirchhoff.'
                    +'</ul>'
                    +'<h2 class="p-3">Conventions de signes:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Tension électromotrice:<br><br>'
                            +' - est prise positivement si le sens du courant électrique à travers la source est identique à celui du nœud choisi arbitrairement : + E<br><br>'
                            +' - est prise négativement si le sens du courant électrique à travers la source est opposé à celui du nœud choisi arbitrairement : - E<br><br>'
                        +'</li><br>'
                        +'<li>'
                            +'Tension électrique:<br><br>'
                            +' - est prise positivement si le sens du courant électrique est le même que celui du nœud choisi arbitrairement (sens de référence) : + I ∙ R<br><br>'
                            +' - est prise négativement si le sens du courant électrique est opposé à celui du nœud choisi arbitrairement (sens de référence) : - I ∙ R<br><br>'
                        +'</li>'
                    +'</ul>'


                    //Gruparea rezistoarelor și generatoarelor electrice
                    +'<a name="element_target3"></a>'
                    +'<br><br><br><br><u><h2 class="p-3" align = center>Groupement de résistances et générateurs électriques</h2><br><br><br></u>'
                    +'<h2 class="p-3">Groupement de résistances:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Tout élément de circuit (générateur électrique, ampoule, résistance, moteur, interrupteur) peut être connecté (groupé) avec un autre (du même type ou différent) de deux manières :<br><br>'
                            +'- En série<br><br>'
                            +'- En parallèle<br><br>'
                            +'Un groupe de résistances est remplacé par une seule, appelée résistance équivalente. Sa résistance représente l\'équivalent des résistances du groupe respectif.'
                        +'</li><br>'
                        +'<li>'
                            +'Les résistances par lesquelles passe le même courant et qui se trouvent du même côté d\'un circuit forment un groupement en série, équivalent à la résistance R<sub>s</sub>.<br><br>'
                            +'La résistance équivalente d\'un groupement en série de résistances est égale à la somme des résistances de chaque résistance :<br><br>'
                            +'R<sub>s</sub> = R<sub>1</sub> + R<sub>2</sub>'
                        +'</li><br>'
                        +'<li>'
                            +'Les résistances qui se trouvent sur des côtés différents entre les mêmes deux nœuds d\'un circuit, ayant la même tension aux extrémités, forment un groupement en parallèle, équivalent à la résistance R<sub>p</sub>.<br><br>'
                            +'L\'inverse de la résistance équivalente d\'un groupement en parallèle de résistances est égal à la somme des inverses des résistances de chaque résistance :<br><br>'
                            +'1 / R<sub>p</sub> = (1 / R<sub>1</sub>) + (1 / R<sub>2</sub>)'
                        +'</li>'
                    +'</ul>'

                    +'<h2 class="p-3">Groupement de générateurs identiques:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'En regroupant plusieurs sources, on obtient une "source équivalente" avec une force électromotrice équivalente et une résistance interne équivalente.'
                        +'</li><br>'
                        +'<li>'
                            +'Pour un regroupement en série de n sources identiques: la force électromotrice du groupement en série de générateurs électriques est:<br><br>'
                            +'E<sub>s</sub> = n · E'
                        +'</li><br>'
                        +'<li>'
                            +'La résistance interne du groupement en série de générateurs électriques identiques est:<br><br>'
                            +'r<sub>s</sub> = n · r'
                        +'</li><br>'
                        +'<li>'
                            +'Pour un regroupement en parallèle de n sources identiques: la force électromotrice du groupement en parallèle de générateurs électriques est:<br><br>'
                            +'E<sub>p</sub> = E<sub>1</sub> = E<sub>2</sub> = … = E<sub>n</sub>'
                        +'</li><br>'
                        +'<li>'
                            +'La résistance interne du groupement en série de générateurs électriques identiques est:<br><br>'
                            +'r<sub>p</sub> = r / n'
                        +'</li>'
                    +'</ul>'

                    //Eneriga si puterea electrica
                    +'<a name="element_target4"></a>'
                    +'<br><br><br><br><u><h2 class="p-3" align = center>Énergie et puissance électrique</h2><br><br><br></u>'
                    +'<h2 class="p-3">Énergie électrique:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'L\'énergie électrique (notée W) d\'une source mesure le travail mécanique qu\'elle effectue pour déplacer la charge électrique (q) à travers la section transversale du circuit, sur un intervalle de temps (Δt) :<br><br>'
                            +'W = L = E ∙ q<br><br>'
                            +'Mais q = I ∙ Δt (de la formule de l\'intensité)<br><br>'
                            +'W<sub>tot</sub> = E ∙ I ∙ Δt (énergie consommée sur l\'ensemble du circuit)<br><br>'
                            +'W<sub>ext</sub> = U ∙ I ∙ Δt (énergie consommée sur le circuit extérieur)<br><br>'
                            +'W<sub>int</sub> = u ∙ I ∙ Δt (énergie consommée sur le circuit intérieur)<br><br>'
                            +'W = U ∙ I ∙ Δt = R ∙ I<sup>2</sup> ∙ Δt = (U<sup>2</sup> / R) ∙ Δt<br><br>'
                            +'[W]<sub>SI</sub> = J(joule)'
                        +'</li><br>'
                    +'</ul>'
                    +'<h2 class="p-3">Puissance électrique:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'La puissance électrique (P) est une grandeur physique mesurant la vitesse de transfert de l\'énergie électrique dans l\'unité de temps.<br><br>'
                            +'P = W / Δt = U ∙ I = R ∙ I<sup>2</sup> = (U<sup>2</sup> / R)<br><br>'
                            +'[P]<sub>SI</sub> = J / s = W(watt)'
                        +'</li><br>'
                        +'<li>'
                            +'La puissance électrique d\'un générateur électrique, avec une force électromotrice E et une résistance interne r, est: <br><br>'
                            +'P = W<sub>tot</sub> / Δt = E ∙ I = (R + r) ∙ I<sup>2</sup> = E<sup>2</sup> / (R + r)'
                        +'</li>'
                    +'</ul>'

                    +'<h2 class="p-3">Efficacité électrique:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'L\'énergie électrique du générateur électrique est fournie au circuit extérieur (W<sub>utile</sub> - énergie utile = énergie extérieure), le reste de l\'énergie est reçue à l\'intérieur du générateur (énergie interne).<br><br>'
                            +'L\'efficacité électrique d\'un récepteur (consommateur) est donnée par la relation:<br><br>'
                            +'η = W<sub>utile</sub> / W<sub>totale</sub> = P<sub>extérieure</sub> / P<sub>totale>'
                        +'</li><br>'
                        +'<li>'
                            +'Pour un circuit simple composé d\'une source avec une force électromotrice E et une résistance interne r, connectée à une résistance de R, l\'efficacité électrique est donnée par la relation:<br><br>'
                            +'η = (U ∙ I) / (E ∙ I) = U / E = R / (R + r)'
                        +'</li><br>'
                        +'<li>'
                            +'La puissance développée par la résistance est maximale lorsque: <br><br>'
                            +'P (R) = E<sup>2</sup> / (4 ∙ r)<br><br>'
                            +'c\'est-à-dire lorsque:<br><br>'
                            +'R = r'
                        +'</li>'
                    +'</ul>'
                    +'<h2 class="p-3">Loi de Joule:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'L\'effet thermique du courant électrique (effet Joule) consiste en le chauffage d\'un conducteur lorsque le courant électrique le traverse.<br><br>'
                            +'La loi de Joule mesure quantitativement la chaleur dégagée lorsque le courant électrique traverse un conducteur.'
                        +'</li><br>'
                        +'<li>'
                            +'Loi de Joule:<br><br>'
                            +'La chaleur Q dégagée lorsque le courant électrique traverse un conducteur est proportionnelle à la résistance du conducteur R, au carré de l\'intensité du courant électrique I<sup>2</sup> et à la durée Δt pendant laquelle le courant électrique circule à travers lui.<br><br>'
                            +'Q = R ∙ I<sup>2</sup> ∙ Δt'
                        +'</li>'
                    +'</ul>'
),

        //teorieOptica.html
        "teorieOpticaTitle": "Théorie de l'optique",
        "teorieOptica": ('<u>' +
                        '<h2 class="p-3" align = center>Optique géométrique</h2><br><br><br>' +
                        '</u>' +
                        '<h2 class="p-3">Réflexion de la lumière:</h2>' +
                        '<ul>' +
                            '<li>' +
                                'PRINCIPE DE FERMAT:<br><br>' +
                                '"La lumière se propage entre deux points A et B, de sorte que son chemin optique, et donc, implicitement, le temps nécessaire pour parcourir la distance AB, soit minimal."<br><br>' +
                                'La réflexion de la lumière est le phénomène par lequel la lumière rebrousse chemin dans le premier milieu, en changeant de direction de propagation, lorsqu\'elle rencontre un autre milieu (la surface de séparation entre deux milieux optiques différents).' +
                            '</li><br>' +
                            '<li>' +
                                'Les lois de la réflexion:<br><br>' +
                                '- Loi I:<br><br>' +
                                'Le rayon incident, la normale et le rayon réfléchi sont coplanaires (ils appartiennent au même plan).<br><br>' +
                                '- Loi II:<br><br>' +
                                'L\'angle d\'incidence (i) est égal à l\'angle de réflexion (r).' +
                            '</li><br>' +
                            '<li>' +
                                'Miroirs plans<br><br>' +
                                'Les miroirs sont des surfaces lisses et réfléchissantes dans lesquelles la lumière se reflète.<br><br>' +
                                'Les miroirs plans ont une surface plane (droite) et ce sont ceux que nous avons tous chez nous et regardons quotidiennement.<br><br>' +
                                'Voici leur symbole (la partie qui ne reflète pas la lumière est hachurée):<br><br>' +
                            '</li>' +
                        '</ul>'        
                        +'<h2 align = center>'
                            +'<img style = "border: 2px solid #1b4188" src ="img/optica1.png" width = 100>'
                        +'</h2><br>'
                        +'<ul>'
                            +'<li>'
                                +'Formation de l\'image d\'un objet dans un miroir plat:<br><br>'
                                +'- Tracez le miroir plat verticalement.<br><br>'
                                +'- Tracez l\'axe optique principal à travers le milieu du miroir, perpendiculairement au miroir (horizontalement).<br><br>'
                                +'- Dessinez l\'objet AB sous la forme d\'un segment fléché, devant le miroir.<br><br>'
                                +'- Tracez le premier rayon à partir du sommet de l\'objet (B) perpendiculaire au miroir et prolongez-le en pointillés derrière le miroir (étant perpendiculaire à la surface du miroir, il ne change pas de direction de propagation lorsqu\'il est réfléchi).<br><br>'
                                +'- Tracez le deuxième rayon à partir du sommet de l\'objet (B) incliné sur le miroir et tracez le rayon réfléchi de celui-ci, en respectant les lois de la réflexion (angle i = angle r)<br><br>'
                                +'- Prolongez en pointillés derrière le miroir le rayon réfléchi jusqu\'à ce qu\'il rencontre le prolongement du premier rayon. Le point d\'intersection est noté B\', qui représente le sommet de l\'image de l\'objet dans le miroir.<br><br>'
                                +'- Du point B\', tracez perpendiculairement à l\'axe optique principal, et le pied de la perpendiculaire est noté A\', représentant la base de l\'image de l\'objet dans le miroir. Mettez la pointe de la flèche en B\'.'
                            +'</li>'
                        +'</ul>'
                        +'<h2 align = center>' +
                        '<img style = "border: 2px solid #1b4188" src ="img/optica2.png" width = 300>' +
                        '</h2><br>' +
                        '<ul>' +
                            '<li>' +
                                'Caractéristiques de l\'image A\'B\' :<br><br>' +
                                '- Virtuelle, car elle se forme à l\'intersection des prolongements des rayons réfléchis (derrière le miroir)<br><br>' +
                                '- Droite<br><br>' +
                                '- Égale à l\'objet AB (y<sub>1</sub> = y<sub>2</sub>)<br><br>' +
                                '- Objet et image sont symétriques par rapport au miroir' +
                                'Formule du miroir plan : x<sub>2</sub> = -x<sub>1</sub>, car R → ∞ (pas de foyer)<br><br>' +
                                'Grandissement linéaire transversal :	β = 1' +
                            '</li>' +
                        '</ul>' +
                        '<ul>' +
                            '<li>' +
                                'Caractérisation de l\'image (A\'B\') de l\'objet dans le miroir plan:<br><br>' +
                                'L\'objet AB et l\'image A\'B\' sont symétriques par rapport au miroir (l\'image se forme derrière le miroir, à la même distance du miroir que l\'objet).<br><br>' +
                                'L\'image est virtuelle, car elle se forme à l\'intersection des prolongements des rayons réfléchis (elle ne peut pas être capturée sur un écran ou un film photo).<br><br>' +
                                'L\'image A\'B\' est aussi grande que l\'objet AB.' +
                            '</li><br>' +
                        '</ul>'+
                    '<h2 class="p-3">Miroirs sphériques:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Les miroirs sphériques sont des portions de sphères (calottes sphériques) qui réfléchissent la lumière qui tombe sur elles.<br><br>' +
                            'Classification des miroirs sphériques : <br><br>' +
                            'a) Les miroirs concaves réfléchissent avec la partie intérieure, creuse, de la surface sphérique (c\'est-à-dire qu\'ils ont la partie réfléchissante sur la partie intérieure de la sphère). Ils transforment un faisceau de lumière parallèle en un faisceau convergent.' +
                        '</li>' +
                    '</ul>'
                    +'<h2 align = center>' +
                    '<img style = "border: 2px solid #1b4188" src ="img/optica3.png" width = 300>' +
                    '</h2><br>' +
                    '<ul>' +
                        '<li>' +
                            'b) Les miroirs convexes réfléchissent avec la partie extérieure, bombée, de la surface sphérique (c\'est-à-dire qu\'ils ont la partie réfléchissante sur la partie extérieure de la sphère). Ils transforment un faisceau de lumière parallèle en un faisceau divergent.' +
                        '</li>' +
                    '</ul>' +
                    '<h2 align = center>' +
                    '<img style = "border: 2px solid #1b4188" src ="img/optica4.png" width = 300>' +
                    '</h2><br>' +
                    '<ul>' +
                        '<li>' +
                            'Formation de l\'image d\'un objet dans un miroir sphérique<br><br>' +
                            'Pour former l\'image d\'un objet dans un miroir sphérique, il faut amener au moins deux rayons :<br><br>' +
                            'Du sommet de l\'objet A, un rayon parallèle à l\'axe optique principal est dirigé jusqu\'à la surface du miroir, puis il est réfléchi à travers le foyer.<br><br>' +
                            'Du sommet de l\'objet A, un rayon est dirigé à travers le centre de courbure jusqu\'à ce qu\'il croise le premier rayon (celui-ci est réfléchi dans la même direction).<br><br>' +
                            'Les deux rayons sont prolongés jusqu\'à ce qu\'ils se croisent. Leur point d\'intersection est le sommet de l\'image, A\'. De ce point, une perpendiculaire est dirigée vers l\'axe optique principal. Le pied de la perpendiculaire, B\', est la base de l\'image formée.' +
                        '</li>' +
                    '</ul>'+
                '<h2 align = center>' +
                    '<img style = "border: 2px solid #1b4188" src ="img/optica5.png" width = 300>' +
                '</h2><br>' +
                '<ul>' +
                    '<li>' +
                        'Les formules des miroirs sphériques:<br> (1 / x<sub>2</sub>) + (1 x<sub>1</sub>) = 1 / f = 2 / R<br><br>' +
                        'Le grandissement linéaire transversal:<br>' +
                        'β = y<sub>2</sub> / y<sub>1</sub> = - x<sub>2</sub> / x<sub>1</sub>' +
                    '</li>' +
                '</ul>' +
                '<ul>' +
                    '<li>' +
                        'L’image d’un objet dans un miroir concave dépend de la distance de l’objet au miroir.' +
                    '</li><br>' +
                    '<li>' +
                        'Le type de miroir:<br><br>' +
                        '- Concave:<br>' +
                        '|x<sub>1</sub>| > 2|f| - Réelle - Réduite - Inversée<br>' +
                        '|x<sub>1</sub>| = 2|f| - Réelle - Égale - Inversée<br>' +
                        '2|f| > |x<sub>1</sub>| > |f| - Réelle - Agrandie - Inversée<br>' +
                        '|x<sub>1</sub>| < |f| - Virtuelle - Agrandie - Droite<br><br>' +
                        '- Convexe:<br>' +
                        'Tout |x<sub>1</sub>| - Virtuelle - Réduite - Droite' +
                    '</li><br>' +
                '</ul>'+
                '<h2 class="p-3">Réfraction de la lumière :</h2>' +
                '<ul>' +
                    '<li>' +
                        'Les lois de la réfraction de la lumière :<br><br>' +
                        "L'indice de réfraction (noté n) d'un milieu transparent est donné par le rapport entre la vitesse de la lumière dans le vide (c) et la vitesse de la lumière dans ce milieu (v).<br><br>" +
                        'n = c / v<br><br>' +
                        'La réfraction de la lumière est le phénomène selon lequel la lumière change de direction de propagation lorsqu\'elle traverse la surface de séparation entre deux milieux transparents différents.' +
                    '</li><br>' +
                    '<li>' +
                        'Les lois de la réfraction:<br><br>' +
                        'Loi de réfraction I :<br>' +
                        'Le rayon incident (SI), la normale à la surface de séparation (NI) et le rayon réfracté (IR\') sont coplanaires.<br><br>' +
                        'Loi de réfraction II :<br>' +
                        'Le rapport entre l\'angle d\'incidence (i) et le sinus de l\'angle de réfraction (r\') est égal au rapport entre l\'indice de réfraction absolu du deuxième milieu et l\'indice de réfraction absolu du premier milieu :<br><br>' +
                        'sin i / sin r\' = n<sub>2</sub> / n<sub>1</sub> = n<sub>21</sub><br><br>' +
                        'n<sub>21</sub> = l\'indice de réfraction du deuxième milieu par rapport au premier' +
                    '</li><br>' +
                    '<li>' +
                        'Les conséquences de la réfraction de la lumière :<br><br>' +
                        'Les conséquences de la réfraction de la lumière se produisent en raison du changement de direction du rayon réfracté par rapport au rayon incident, modifiant l\'image des objets dans l\'eau :<br><br>' +
                        '- Un objet dans l\'eau semble cassé à la surface de l\'eau, comme si la partie de l\'eau de l\'objet n\'était pas dans le prolongement de celle de l\'air.<br><br>' +
                        '- Un objet dans l\'eau est perçu par notre œil plus près de la surface qu\'il ne l\'est réellement. Ainsi, les eaux claires sont beaucoup plus profondes qu\'elles ne le paraissent.<br><br>' +
                        '- Les objets dans l\'eau semblent plus gros qu\'en réalité, l\'eau agissant comme une loupe.<br><br>'+
                        '</li>'+
                    '</ul>'
                    +'<h2 class="p-3">Prisme optique :</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Réfraction de la lumière monochromatique dans un prisme optique :<br><br>' +
                            'Le prisme est un milieu transparent (avec un indice de réfraction n) délimité par deux faces planes, formant entre elles un angle dièdre, appelé angle du prisme (A).<br><br>' +
                        '</li>' +
                    '</ul>' +
                    '<h2 align="center">' +
                        '<img style="border: 2px solid #1b4188" src="img/optica6.png" width="300">' +
                    '</h2><br>' +
                    '<ul>' +
                        '<li>' +
                            'Lorsque le rayon incident (SI) tombe sur la face AB du prisme, il se réfracte (premier rayon réfracté II\'), se rapprochant de la normale NI (n<sub>air</sub> < n<sub>prisme</sub>) selon la loi :<br>' +
                            'sin i = n ∙ sin r<br><br>' +
                            'Le rayon II\' se réfracte lorsqu\'il tombe sur la face AC du prisme au point I\', s\'éloignant de la normale NN\' (n<sub>prisme</sub> > n<sub>air</sub>), selon la loi :<br>' +
                            'n ∙ sin r\' = sin i\'<br><br>' +
                            'L\'angle entre la direction du rayon incident (SI) et la direction du rayon émergent (I\'R) est appelé angle de déviation (δ) qui a pour valeur :<br>' +
                            'δ = i + i\' – (r + r\') = i + i\' – A<br><br>' +
                        '</li>' +
                    '</ul>'+
                    '<ul>' +
                        '<li>' +
                            'Pour établir la condition d\'émergence (c\'est-à-dire que le rayon incident sorte du prisme), il ne doit pas y avoir de réflexion totale du rayon II\' sur la face AC, c\'est-à-dire :<br>' +
                            'r\' ≤ l (angle limite).<br><br>' +
                            'Comme A = r + r\' → r\' = A – r<br>' +
                            'r ≥ A – l → sin r ≥ sin (A – l)<br><br>' +
                            'Mais selon la première loi de la réfraction, nous avons :<br>' +
                            'sin r = sin i / n <br>' +
                            'sin i / n >= sin (A - l)<br><br>' +
                        '</li>' +
                        '<li>' +
                            'L\'angle maximal d\'incidence est<br>' +
                            'i = 90° → sin 90° = 1 <br>' +
                            '1 / n >= sin(A - l)<br>' +
                            'sin l = 1 / n<br>' +
                            'sin l >= sin(A-l) ou A <= 2 ∙ 1<br>' +
                            'sin l = 1 / n → 1 = arc sin 1 / n<br>' +
                        '</li>' +
                        '<li>' +
                            'Un rayon incident sur un prisme peut sortir du prisme si son angle de réfraction (A) satisfait la condition :<br>' +
                            'A ≤ 2 ∙ arc sin 1/n<br><br>' +
                            'Si le prisme a A > 2 ∙ arc sin 1/n, tous les rayons incidents sur le prisme seront totalement réfléchis sur la face AC.' +
                        '</li><br>' +
                        '<li>' +
                            'Lorsque l\'angle d\'incidence (i) varie et que l\'angle de déviation (δ) varie, prenant toujours des valeurs supérieures à une certaine valeur minimale (δ<sub>m</sub>).<br><br>' +
                            'Lorsque i = i\' et r = r\', nous obtenons la valeur minimale de l\'angle de déviation (δ<sub>m</sub>) :<br>' +
                            'δ<sub>m</sub> = 2 ∙ i – A<br><br>' +
                            'Si nous mesurons expérimentalement l\'angle de déviation minimale, nous pouvons déterminer l\'indice de réfraction du prisme avec la formule :<br>' +
                            'n = sin((A + <sub>m</sub>) / 2) / sin (A / 2)' +
                        '</li><br>' +
                    '</ul>'
                    +'<h2 class="p-3">' + 'Types de lentilles:' + '</h2>' + 
                    '<ul>' + 
                        '<li>' + 
                            'Les lentilles sont des corps transparents qui ont au moins une surface sphérique.<br><br>' + 
                            'Éléments d\'une lentille :<br><br>' + 
                            'L\'axe optique principal tracé à travers le milieu de la lentille.<br><br>' + 
                            'Le centre optique de la lentille (O) situé à l\'intersection de la lentille avec l\'axe optique principal.<br><br>' + 
                            'Deux foyers placés de part et d\'autre du centre optique de la lentille, à des distances égales.<br><br>' + 
                            'Le foyer situé à gauche de O est appelé foyer négatif / objet (F<sub>1</sub>), car il se trouve sur l\'axe des nombres négatifs.<br><br>' + 
                            'Le foyer situé à droite de O est appelé foyer positif / image (F<sub>2</sub>), car il se trouve sur l\'axe des nombres positifs.<br><br>' + 
                            'Les centres de courbure (C<sub>1</sub> et C<sub>2</sub>) des dioptres qui délimitent la lentille située de part et d\'autre de O, à une distance double de OF.' + 
                        '</li>' + 
                    '</ul>' + 
                    '<h2 class="p-3">' + 'Classification des lentilles:' + '</h2>' + 
                    '<ul>' + 
                        '- <b>Lentilles convergentes</b> (convexes) sont des lentilles qui transforment un faisceau lumineux parallèle en un faisceau convergent. Elles réfractent la lumière par le foyer positif et c\'est pourquoi elles sont également appelées lentilles positives. Elles agrandissent l\'écriture. Elles sont plus épaisses au milieu et plus minces aux extrémités.<br><br>' + 
                        '- <b>Lentilles divergentes</b> (concaves) sont des lentilles qui transforment un faisceau lumineux parallèle en un faisceau divergent. Elles réfractent la lumière par le foyer négatif et c\'est pourquoi elles sont également appelées lentilles négatives. Elles réduisent l\'écriture. Elles sont plus épaisses aux extrémités et plus minces au milieu.<br><br>'+
                        '<li>' + 
                            'Formation de l\'image d\'un objet dans les lentilles : <br><br>' + 
                            'Pour former l\'image d\'un objet dans une lentille convergente, il faut tracer deux rayons :<br><br>' + 
                            '- Dessiner le symbole de la lentille convergente.<br>' + 
                            '- Tracer son axe optique principal à travers son centre.<br>' + 
                            '- Placer les éléments de la lentille (O, F<sub>1</sub>, F<sub>2</sub>, C).<br>' + 
                            '- Dessiner l\'objet (AB) devant la lentille (à gauche), avec une flèche.<br>' + 
                            '- Tracer un rayon partant du sommet de l\'objet (B) parallèlement à l\'axe optique jusqu\'à rencontrer la lentille, puis le diriger vers le foyer positif (F<sub>2</sub>), car la lentille convergente réfracte la lumière par le foyer positif.<br>' + 
                            '- Tracer un second rayon partant du sommet de l\'objet et passant par le centre optique de la lentille (O). Prolonger ces rayons jusqu\'à ce qu\'ils se croisent. À leur intersection, placer B\' qui est le sommet de l\'image (im) de l\'objet (ob) AB.<br>' + 
                            '- À partir de B\', tracer une perpendiculaire à l\'axe optique, noter son pied A\' qui représente la base im A\'B\'.<br>' + 
                            '- Placer la pointe de la flèche en B\', ainsi on obtient l\'image de l\'objet AB dans la lentille convergente.'+
                        '</li><br></br>'+
                            '<li>' + 
                            'En fonction de la distance de l\'objet par rapport à la lentille, il existe trois types d\'images dans la lentille convergente.<br><br>' + 
                            'I. Lorsque l\'objet est situé dans l\'intervalle (-∞) et C, l\'image de l\'objet a les caractéristiques suivantes :<br>' + 
                            '- Plus petite que l\'objet AB.<br>' + 
                            '- Inversée<br>' + 
                            '- Réelle (se forme à l\'intersection des rayons réfractés, peut être projetée sur un écran).<br><br>' + 
                            'II. Lorsque l\'objet est situé dans l\'intervalle C et F1, l\'image de l\'objet a les caractéristiques suivantes :<br>' + 
                            '- Plus grande que l\'objet AB.<br>' + 
                            '- Inversée<br>' + 
                            '- Réelle (se forme à l\'intersection des rayons réfractés, peut être projetée sur un écran).<br><br>' + 
                            'III. Lorsque l\'objet est situé dans l\'intervalle F1 et O, l\'image de l\'objet a les caractéristiques suivantes :<br>' + 
                            '- Plus grande que l\'objet.<br>' + 
                            '- Droite<br>' + 
                            '- Virtuelle (se forme à l\'intersection des prolongements des rayons réfractés, ne peut pas être projetée sur un écran).' + 
                        '</li><br>' + 
                        '<li>' + 
                            'Pour former l\'image d\'un objet dans une lentille divergente, il faut tracer deux rayons :<br><br>' + 
                            '- Dessiner le symbole de la lentille divergente.' + 
                            '- Tracer l\'axe optique principal à travers son centre.' + 
                            '- Placer les éléments de la lentille (O, F<sub>1</sub>, F<sub>2</sub>, C).<br>' + 
                            '- Dessiner l\'objet (AB) devant la lentille (à gauche) par un segment fléché.<br>' + 
                            '- Tracer un rayon partant du sommet de l\'objet (B) parallèle à l\'axe optique jusqu\'à ce qu\'il rencontre la lentille, puis le faire passer par le foyer négatif (F<sub>1</sub>), car la lentille divergente réfracte la lumière par le foyer négatif.<br>' + 
                            '- Tracer le deuxième rayon du sommet de l\'objet passant par le centre optique de la lentille (O). Prolonger ces rayons jusqu\'à ce qu\'ils se croisent. À leur intersection, placer B\' qui est le sommet de l\'image (im) de l\'objet (ob) AB.<br>' + 
                            '- À partir de B\', tracer une perpendiculaire à l\'axe optique, noter le pied de celle-ci A\' et elle représente la base im A\'B\'.<br>' + 
                            '- Placer le sommet de la flèche à B\' et ainsi obtenir l\'image de l\'objet AB dans la lentille convergente.<br>' + 
                        '</li><br>' + 
                        '<li>' + 
                            'Dans la lentille divergente, nous obtenons une image qui présente les mêmes caractéristiques quelle que soit la distance de l\'objet par rapport à la lentille :<br><br>' + 
                            '- Plus petite que l\'objet.<br>' + 
                            '- Droite<br>' + 
                            '- Virtuelle (se forme à l\'intersection des prolongements des rayons réfractés, ne peut pas être projetée sur un écran).' + 
                        '</li>'+
                    '</ul>'+
                    '<h2 class="p-3">Formules des lentilles minces :</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Conventions de signes :<br><br>' +
                            'x<sub>1</sub> = distance de l\'objet AB à la lentille, toujours prise négative car elle est sur l\'axe des nombres négatifs.<br><br>' +
                            'x<sub>2</sub> = distance de l\'image A\'B\' à la lentille, prise positive lorsque l\'image est réelle (formée derrière la lentille, sur l\'axe des nombres positifs) et négative lorsque l\'image est virtuelle (formée devant la lentille, sur l\'axe des nombres négatifs).<br><br>' +
                            'y<sub>1</sub> = hauteur de l\'objet AB, prise positive si l\'objet est au-dessus de l\'axe optique principal et négative si l\'objet est en dessous de l\'axe optique principal.<br><br>' +
                            'y<sub>2</sub> = hauteur de l\'image A\'B\', prise positive lorsque l\'image est droite (au-dessus de l\'axe optique principal) ou négative lorsque l\'image est inversée (en dessous de l\'axe optique principal).<br><br>' +
                            'La distance focale est considérée positive (f > 0) pour les lentilles convergentes et négative (f < 0) pour les lentilles divergentes.' +
                        '</li><br>' +
                        '<li>' +
                            'Formule fondamentale des lentilles minces :<br><br>' +
                            '(1 / x<sub>2</sub>) -(1 / x<sub>1</sub>) = 1 / f' +
                        '</li><br>' +
                        '<li>' +
                            'Le grossissement linéaire transversal (β) est une grandeur physique adimensionnelle égale au rapport entre la hauteur de l\'image et la hauteur de l\'objet.<br><br>' +
                            'β = y<sub>2</sub> / y<sub>1</sub> = x<sub>2</sub> / x<sub>1</sub>' +
                        '</li><br>' +
                        '<li>' +
                            'La convergence d\'une lentille (C) est une grandeur physique égale à l\'inverse de la distance focale (f).<br><br>' +
                            'C = 1 / f<br><br>' +
                            '[C]<sub>SI</sub> = m<sup>-1</sup> = δ(dioptrie)<br>' +
                            'Une lentille convergente a C > 0 <br><br>' +
                            'Une lentille divergente a C < 0' +
                        '</li><br>' +
                    '</ul>'
                    +'<h2 class="p-3">Associations de lentilles:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Un système composé de deux ou plusieurs lentilles ayant le même axe optique principal est appelé <b>association de lentilles</b>.<br><br>' +
                            'L\'image formée par la première lentille devient l\'objet pour la lentille suivante, et ainsi de suite jusqu\'à la dernière lentille qui donnera l\'image finale.' +
                        '</li>' +
                        '<li>' +
                            'Le système le plus utilisé est celui des lentilles accolées, dans lequel la distance (d) entre les lentilles est nulle, ayant le même centre optique et le foyer image (F<sub>2</sub>) de la première lentille (L) coïncide avec le foyer objet (F\'<sub>2</sub>).<br><br>' +
                            'Pour un tel système composé de k lentilles, nous avons :<br><br>' +
                            '1. L\'inverse de la distance focale du système de lentilles (F) est égal à la somme des inverses des distances focales des lentilles de l\'association :<br><br>' +
                            '1 / F = (1 / f<sub>1</sub>) + (1 / f<sub>2</sub>) + ... + (1 / f<sub>k</sub>)<br><br>' +
                            '2. La convergence du système (C) est égale à la somme des convergences des lentilles composantes :<br><br>' +
                            'C = C<sub>1</sub> + C<sub>2</sub> +...+ C<sub>k</sub><br><br>' +
                            '3. Le grossissement linéaire transversal du système (β) est égal au produit des grossissements transversaux des lentilles composantes :<br><br>' +
                            'β = β<sub>1</sub> ∙ β<sub>2</sub> ∙… β<sub>k</sub><br><br>' +
                            'Si nous notons x\'2 la distance de l\'image finale à la deuxième lentille L2 et x1 la distance de l\'objet à la première lentille L1, nous avons la relation :<br><br>' +
                            '(1 / x\'<sub>2</sub>) - (1 / x<sub>1</sub>) = (1 / f<sub>1</sub>) + (1 / f<sub>2</sub>) = 1 / f = C<sub>1</sub> + C<sub>2</sub> = C' +
                        '</li>' +
                        '<li>' +
                            'Un autre système de lentilles est le système télescopique qui est un système afocal, dans lequel le faisceau de sortie (émergent), provenant d\'un faisceau parallèle, est également parallèle. Le foyer image de la première lentille (F2) coïncide avec le foyer objet de la deuxième lentille (F\'<sub>1</sub>).<br><br>' +
                            '1. La distance entre les lentilles est:<br><br>' +
                            'd = f<sub>1</sub> + f<sub>2</sub><br><br>' +
                            '2. Le grossissement linéaire transversal est:<br><br>' +
                            'β = y<sub>2</sub> / y<sub>1</sub> = - f<sub>2</sub> / f<sub>1</sub><br><br>' +
                            'Pour trouver la position (x\'1) de l\'image intermédiaire par rapport à la première lentille (L<sub>1</sub>) et la taille de l\'image formée par la première lentille, nous appliquons la formule des points conjugués pour L<sub>1</sub>:<br><br>' +
                            'x\'<sub>1</sub> = x<sub>2</sub>f<sub>1</sub> / (x<sub>1</sub> + f<sub>1</sub>)<br><br>' +
                            'y\'<sub>1</sub> = y<sub>1</sub>(x\'<sub>1</sub> / x<sub>1</sub>) = y<sub>1</sub> (f<sub>1</sub> / (x<sub>1</sub> + f<sub>1</sub>))<br><br>' +
                            'En connaissant la distance entre les lentilles, nous pouvons calculer la position de l\'image intermédiaire (formée par L<sub>1</sub>) par rapport à la lentille L<sub>2</sub>:<br><br>' +
                            'd = x\'<sub>1</sub> + (- x<sub>2</sub>)<br><br>' +
                            'x<sub>2</sub> = x\'<sub>1</sub> - d<br><br>' +
                            'Pour trouver la position (x\'2) de l\'image finale par rapport à la deuxième lentille (L<sub>2</sub>) et la taille de l\'image formée par la deuxième lentille, nous appliquons la formule des points conjugués pour L<sub>2</sub>:<br><br>' +
                            'x\'<sub>2</sub> = x<sub>2</sub>f<sub>2</sub> / (x<sub>2</sub> + f<sub>1</sub>)<br><br>' +
                            'y\'<sub>2</sub> = y<sub>1</sub>(x\'<sub>2</sub> / x<sub>2</sub>) = y<sub>1</sub> (f<sub>2</sub> / (x<sub>2</sub> + f<sub>2</sub>))<br><br>' +
                        '</li>' +
                    '</ul>'+

                    //Optica ondulatorie
                    '<a name="element_target"></a>' +
                    '<br><br><br><br><u><h2 class="p-3" align = center>Optique Ondulatoire</h2><br><br><br></u>' +
                    '<h2 class="p-3">Dispersion de la lumière:</h2>' +
                    '<ul>' +
                    '<li>' +
                    '<b>OPTIQUE</b> est une branche de la physique qui étudie la nature, les propriétés et les phénomènes subis par la lumière.<br><br>' +
                    'L\'optique est composée de trois parties:<br><br>' +
                    '1. L\'optique géométrique qui opère avec des rayons de lumière (les directions de propagation de la lumière), sans tenir compte de la nature de la lumière. Les phénomènes étudiés incluent la réflexion, la réfraction et la réflexion totale de la lumière.<br><br>' +
                    '2. L\'optique ondulatoire étudie les phénomènes d\'interférence, de diffraction et de polarisation, qui révèlent le caractère ondulatoire de la lumière, plus précisément comme onde (radiation) électromagnétique.<br><br>' +
                    '3. L\'optique photonique (corpusculaire) étudie l\'effet photoélectrique, l\'effet Compton, l\'émission et l\'absorption de la lumière, etc., qui mettent en évidence la nature corpusculaire de la lumière (photons).<br><br>' +
                    'La dispersion de la lumière blanche a été étudiée pour la première fois par Newton en 1672, lorsqu\'il a obtenu le spectre de la lumière blanche à travers un prisme optique.<br><br>' +
                    'Le phénomène de variation de l\'indice de réfraction avec la longueur d\'onde est appelé dispersion de la lumière.<br><br>' +
                    'Ainsi, lorsque la lumière passe à travers un prisme, elle se décompose en faisceaux colorés dans les couleurs de l\'arc-en-ciel.<br><br>' +
                    'Dans le vide, toutes les ondes électromagnétiques se propagent à la même vitesse, quelle que soit leur longueur d\'onde, et par conséquent, nous disons que le vide est un milieu non dispersif. Si le prisme était vidé, un faisceau de lumière blanche ne se décomposerait pas, mais serait seulement dévié de la direction incidente par le phénomène de réfraction (c\'est-à-dire le changement de direction de propagation lors du passage d\'un milieu à un autre).<br><br>' +
                    'L\'indice de réfraction (noté n) d\'un milieu transparent est donné par le rapport entre la vitesse de la lumière dans le vide (c) et la vitesse de la lumière dans le milieu respectif (v).<br><br>' +
                    'n = c / v<br><br>' +
                    'c = vitesse de la lumière dans le vide = 300 000 000 m/s<br><br>' +
                    'v = vitesse de la lumière dans le milieu respectif<br><br>' +
                    'Tous les milieux transparents (eau, verre, diamant, etc.) caractérisés par un certain indice de réfraction supérieur à un, produisent la dispersion de la lumière.<br><br>' +
                    'Mais l\'indice de réfraction est constant seulement pour la lumière monochromatique.<br><br>' +
                    'Pour la lumière blanche, composée de sept radiations de couleurs différentes et de longueurs d\'onde différentes, l\'indice de réfraction n\'est plus constant, mais varie avec la longueur d\'onde de ces lumières.<br><br>' +
                    'Si l\'indice de réfraction d\'un prisme varie, le prisme réfractera ces lumières sous des angles différents.<br><br>' +
                    'En général, lors de la diffusion normale, dans ces milieux transparents, l\'indice de réfraction augmente avec la diminution de la longueur d\'onde, ainsi les rayons violets (ayant une longueur d\'onde plus courte, 400 nm) seront plus réfractés que les rouges (ayant une longueur d\'onde plus longue, 700 nm, que les violets).<br><br>' +
                    'Si λ<sub>violette</sub> < λ<sub>rouge</sub> → n<sub>violette</sub> > n<sub>rouge</sub> → v<sub>violette</sub> < v<sub>rouge</sub>.<br><br>' +
                    'Les faisceaux colorés traversent le prisme à des vitesses différentes et en conséquence sortent du prisme sous des angles différents.<br><br>' +
                    'Les rayons violets sortent moins inclinés par rapport à l\'axe optique, car ils se propagent à une vitesse plus faible à travers le matériau du prisme que le rayon rouge, parcourant en même temps une distance plus courte que le rouge.<br><br>' +
                    '</li><br>' +
                    '</ul>' +
                    '<h2 class="p-3">Interférence de la lumière:</h2>' +
                    '<ul>' +
                    '<li>' +
                    'L\'interférence de la lumière non localisée dans le dispositif de Young.<br><br>' +
                    'L\'INTERFÉRENCE est le phénomène de superposition de deux ondes cohérentes (ayant la même fréquence et la même différence de phase) qui se rencontrent en un point de l\'espace.<br><br>' +
                    'En certains points de l\'espace, des franges d\'interférence se formeront, c\'est-à-dire une succession de régions lumineuses et sombres.<br><br>' +
                    'Les ondes cohérentes sont obtenues en séparant d\'un flux lumineux émis par une source monochromatique, deux faisceaux de lumière qui se rencontrent par la suite.<br><br>' +
                    'Il existe deux moyens d\'obtenir des ondes cohérentes :<br><br>' +
                    '- Division du front d\'onde dans le dispositif de Young, biprisme de Fresnel, etc.<br><br>' +
                    '- Division de l\'amplitude de l\'onde dans la lame à faces parallèles, le coin optique, les anneaux de Newton.' +
                    '</li><br>' +
                    '<li>' +
                    'Le dispositif de Young utilise une source de lumière monochromatique S (laser), un écran avec deux fentes rectangulaires (d\'une largeur inférieure à 1 mm) et parallèles avec une distance entre elles de maximum 1 mm, un écran (feuille blanche). Pour observer la figure d\'interférence, il n\'y a pas de position préférentielle de l\'écran, pouvant être placé à une distance D entre 1 m et 5 m par rapport aux fentes et pour cette raison, il est appelé interférence non localisée.<br><br>' +
                    'Tant l\'interférence que la diffraction sont basées sur le principe de Huygens-Fresnel qui dit que chaque point sur un front d\'onde se comporte comme une source secondaire d\'onde avec la même fréquence et phase que l\'onde initiale. Le nouveau front d\'onde est créé en additionnant les amplitudes des ondes secondaires.' +
                    '</li><br>' +
                    '<li>' +
                        'Dans le cas de l\'interférence constructive, les deux ondes sont en phase (décalage de phase nul) et leur somme est plus grande, formant des régions lumineuses.<br><br>' +
                        'Lorsque les deux ondes vibrent en opposition de phase (décalage de phase de 180°), elles s\'annihilent (leur somme est nulle), formant des zones sombres, cas où l\'on parle d\'interférence destructive.' +
                    '</li><br>' +
                    '<li>' +
                        'L\'onde électromagnétique (la lumière) a deux composantes, électrique et magnétique. Seule la composante électrique (E) influence la sensation visuelle.<br><br>' +
                        'Les ondes de même amplitude émises par les deux sources ont les équations :<br><br>' +
                        'E<sub>1</sub> = E<sub>0</sub>sin2π((t / T) - (r<sub>1</sub> / λ))<br><br>' +
                        'E<sub>2</sub> = E<sub>0</sub>sin2π((t / T) - (r<sub>2</sub> / λ))<br><br>' +
                        'L\'onde électromagnétique se propage à la vitesse c dans l\'intervalle de temps Δt à travers une surface d\'aire S perpendiculaire à la direction de propagation.<br><br>' +
                        'L\'énergie transportée par l\'onde est :<br><br>' +
                        'ΔW = w ΔV<br><br>' +
                        'ΔW = (ε<sub>0</sub> / μ<sub>0</sub>)<sup>1/2</sup>E<sup>2</sup>SΔt<br><br>' +
                        'I = 1/2 · (ε<sub>0</sub> / μ<sub>0</sub>)<sup>1/2</sup> ·E<sup>2</sup><sub>0</sub><br><br>' +
                        'E\'<sub>0</sub> = 2 E<sub>0</sub> cos (π(r<sub>2</sub> - r<sub>1</sub>) / λ)' +
                    '</li><br>'+
                    '<li>' +
                        'Les conditions d\'interférence sont :<br><br>' +
                        '- Les ondes doivent avoir la même fréquence<br><br>' +
                        '- La différence de phase : ΔΦ = 2π(Δr / λ) = constante<br><br>' +
                        'L\'intensité lumineuse, I, en un point d\'interférence est proportionnelle au carré de l\'amplitude de l\'onde résultante :<br><br>' +
                        'I = const 4E<sup>2</sup><sub>0</sub> cos<sup>2</sup>(πΔr / λ)<br><br>' +
                        'Dans l\'interférence constructive (avec formation de franges lumineuses), nous avons la condition de maximum d\'éclairage :<br><br>' +
                        'cos<sup>2</sup>(πΔr / λ) = 1 → Δr = kλ = 2k(λ/2),<br><br>' +
                        'où k = nombre entier<br><br>' +
                        'Les points dans la zone d\'interférence pour lesquels la différence de chemin, Δr, est un multiple pair de demi-longueur d\'onde se trouvent sur une frange lumineuse.<br><br>' +
                        'Dans l\'interférence destructive (avec formation de franges sombres), nous avons la condition de minimum d\'éclairage :<br><br>' +
                        'cos<sup>2</sup>(πΔr / λ) = 0 → Δr = kλ = 2(k+1)(λ/2)<br><br>' +
                        'Les points dans la zone d\'interférence pour lesquels la différence de chemin, Δr, est un multiple impair de demi-longueur d\'onde se trouvent sur une frange sombre.' +
                    '</li><br>' +
                    '<li>' +
                        'Détermination des positions des franges dans le dispositif de Young<br><br>' +
                        'dans ΔAEP, appliquez le théorème de Pythagore : r<sup>1</sup> = D<sup>2</sup> + (x-l)<sup>2</sup><br><br>' +
                        'dans ΔBE\'P, appliquez le théorème de Pythagore : r<sup>2</sup> = D<sup>2</sup> + (x-l)<sup>2</sup><br><br>' +
                        'Δr = r<sub>2</sub> = r<sub>1</sub> = 4xl / (r<sub>1</sub> + r<sub>2</sub>)' +
                    '</li><br>' +
                    '<li>' +
                        'Détermination de la longueur d\'onde par la mesure de l\'interfrange<br><br>' +
                        'i = x<sub>k+1</sub> - x<sub>k</sub> = (k+1)λD / 2l - kλD / 2l = λD / 2l<br><br>' +
                        'i = λD / 2l' +
                    '</li>'+
                    '</ul>'+
                    '<h2 class="p-3">'+'Interférence localisée sur la lame à faces planes parallèles:'+'</h2>'+
                    '<ul>' +
                        '<li>' +
                        'L\'interférence localisée sur la lame à faces planes parallèles se produit lorsqu\'un faisceau de lumière est divisé en deux faisceaux cohérents sur des surfaces réfléchissantes, par la réflexion de la lumière sur la face supérieure et par la transmission de la lumière sur la face inférieure de la lame mince.<br><br>' +
                        'La lumière atteignant la face supérieure de la lame (pellicule) est à la fois réfléchie (IR) et réfractée (IŔ ). Le rayon réfracté à travers la lame est réfléchi sur la face inférieure de la lame (MN). Les deux rayons, IR et MN, interféreront à la surface de la lame.<br><br>' +
                        'Les franges d\'interférence sont localisées dans le plan focal de la lentille ou, en son absence, à l\'infini. C\'est ainsi que nous expliquons les irisations des bulles de savon et des pellicules d\'huile ou de pétrole sur la route.' +
                        '</li>' +
                    '</ul>' +
                    '<h2 class="p-3">' +
                    'Les anneaux de Newton dans l\'interférence sur une lame d\'air:'+
                    '</h2>' +
                    '<ul>' +
                        '<li>' +
                        'Les anneaux de Newton sont obtenus par illumination perpendiculaire avec de la lumière monochromatique d\'une lentille plano-convexe à grande distance focale, placée avec la face courbe sur une plaque de verre plane. Entre la lentille et la plaque se forme une lame d\'air mince, ayant pour résultat la formation de franges lumineuses et sombres circulaires, concentriques avec le point de contact entre la lentille et la plaque.' +
                        '</li>' +
                    '</ul>'+

                    //Elemente de fizica cuantica
                    '<a name="element_target2"></a>' +
                    '<br><br><br><br><u><h2 class="p-3" align = center>Éléments de physique quantique</h2><br><br><br></u>' +
                    '<h2 class="p-3">' +
                        'L\'hypothèse de Planck sur les quanta de lumière:' +
                    '</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Planck a affirmé que le rayonnement émis par le corps noir existe sous forme de petits paquets d\'énergie discrets qu\'il a appelés quanta (plus tard appelés photons), dépendant de la fréquence du rayonnement correspondant.<br><br>' +
                            'Les valeurs discrètes de l\'énergie d\'un oscillateur harmonique sont équidistantes, de sorte que la différence entre les niveaux d\'énergie (ΔE) est proportionnelle à la fréquence (ν) de l\'oscillateur et à la constante de Planck (h).<br><br>' +
                            'ΔE = h ∙ ν<br><br>' +
                            'h = constante de Planck = 6,62 ∙ 10<sup>-34</sup> J ∙ s<br><br>' +
                            'ν = fréquence de l\'oscillateur<br><br>' +
                            'La constante de Planck est l\'une des plus petites constantes utilisées en physique à l\'échelle macroscopique, reflétant l\'échelle microscopique à laquelle les effets quantiques sont observés.' +
                        '</li><br>' +
                    '</ul>'
                    +'<h2 class="p-3">' +
                        'L\'effet photoélectrique:' +
                    '</h2>' +
                    '<ul>' +
                        '<li>' +
                            'L\'effet photoélectrique a été découvert expérimentalement en 1887 par Heinrich Hertz (1857-1894) et en 1888 par W. Hallwachs (1859-1922) et consiste en l\'émission d\'électrons par un métal sous l\'action d\'un rayonnement électromagnétique.<br><br>' +
                            'En 1905, Albert Einstein (1879-1955) a remarqué que l\'explication de l\'effet photoélectrique pourrait être résolue en généralisant l\'hypothèse quantique proposée par Planck concernant le rayonnement du corps noir au rayonnement électromagnétique.<br><br>' +
                            'Ainsi, les électrons du cathode reçoivent de la lumière seulement un seul paquet (photon) d\'énergie lumineuse (E = h ∙ ν) pour être accélérés et quitter le métal.<br><br>' +
                            'Ainsi, l\'énergie cinétique maximale des électrons émis ne dépassera pas cette valeur d\'énergie reçue, quelle que soit l\'intensité du rayonnement incident.<br><br>' +
                            'De plus, cela explique pourquoi la vitesse maximale des électrons dépend de la fréquence du rayonnement.' +
                        '</li><br>' +
                        '<li>' +
                            'La première loi de l\'effet photoélectrique externe:<br><br>' +
                            'L\'effet photoélectrique externe se produit seulement lorsque la fréquence du rayonnement incident est supérieure à la fréquence seuil caractéristique du métal dont est fabriqué le cathode.<br><br>' +
                            'Pour quitter le métal, les électrons libres doivent recevoir une énergie égale au travail d\'extraction (L) pour la fréquence seuil (ν<sub>0</sub>):<br><br>' +
                            'L = h ∙ ν<sub>0</sub> h = constante de Planck = 6,62 ∙ 10<sup>-34</sup> m<sup>2</sup> ∙ kg/s<br><br>' +
                            'Le photon d\'énergie h ∙ ν transmet son énergie à un électron de conduction.<br><br>' +
                            'L\'électron peut quitter le métal seulement si h ∙ ν ≥ L.' +
                        '</li><br>' +
                    '</ul>'+
                    '<h2 class="p-3">La deuxième loi de l\'effet photoélectrique externe:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'L\'effet photoélectrique se produit pratiquement instantanément.<br><br>' +
                            'L\'émission d\'un électron est le résultat de la collision entre un photon et un électron en moins de 10<sup>-9</sup> s.' +
                        '</li><br>' +
                    '</ul>' +
                    '<h2 class="p-3">La troisième loi de l\'effet photoélectrique externe:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'L\'énergie cinétique des électrons émis augmente linéairement avec la fréquence du rayonnement incident.<br><br>' +
                            'Si l\'énergie du photon h ∙ ν > L, alors l\'électron a une énergie cinétique suffisante pour quitter le métal:<br><br>' +
                            'Ec = h ∙ ν – L = h ∙ ν – h ∙ ν<sub>0</sub> = h ∙ (ν – ν<sub>0</sub>)' +
                        '</li><br>' +
                    '</ul>' +
                    '<h2 class="p-3">La quatrième loi de l\'effet photoélectrique externe:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Le nombre de photoélectrons émis par le cathode par unité de temps est proportionnel au nombre de photons incidents pendant cet intervalle de temps, ce qui est proportionnel au flux d\'énergie lumineuse.' +
                        '</li>' +
                    '</ul>'),

        //cuprins
        "cuprinsPrincipii": "Principes et lois",
        "cuprinsTeoreme": "Théorèmes de variation et lois de conservation",
        "cuprinsNotiuni": "Commencer",
        "cuprinsPrincipiuI": "Principe I",
        "cuprinsMotoare": "Moteurs thermiques",
        "cuprinsPrincipiuII": "Le deuxième principe",
        "cuprinsCurentul": "Électricité",
        "cuprinsOhm": "La loi d'Ohm",
        "cuprinsKirchhoff": "La loi de Kirchhoff",
        "cuprinsGrupare": "Regroupement de résistances et de générateurs",
        "cuprinsEnergie": "Énergie et puissance électrique",
        "cuprinsGeometrica": "Optique géométrique",
        "cuprinsOndulatorie": "Optique ondulatoire",
        "cuprinsCuantica": "La physique quantique",

        "teorieInapoiBtn": "Retour au menu de sélection",
        "invataTitle": "Dans cette partie du chapitre, vous apprendrez des concepts tels que :",
        "inchideBtn": "Raccrocher",
        "teorieBtn": "Théorie",
        "testBtn": "Démarrer un test",
        "acasaBtn": "Á la maison",
    },
    "rusa":
    {
        //index.html
        "titleSet": "Настройки",
        "titleLogin": "Bойти",
        "titleDisconnect": "Выход",
        "titleStatistica": "Результаты вашего теста",
        "corecte": "справедливый",
        "gresite": "Неправильный",
        "titleLang": "Конечность",
        "titleMec": "Механика",
        "titleTer": "Термодинамика",
        "titleElec": "Электромеханический",
        "titleOp": "Оптический",

        //register.html
        "goBackReg": "Hазад",
        "titleReg": "Введите свои регистрационные данные",
        "usernameReg": "Введите имя пользователя",
        "emailReg": "Введите ваш адрес электронной почты",
        "passwordReg": "Введите пароль",
        "register": "Зарегистрироваться",
        "footerReg": "У вас уже есть аккаунт?",
        "footerRegBtn": "Войти",

        //login.html
        "goBackLog": "Hазад",
        "titleLog": "Введите данные для входа",
        "emailLog": "Введите ваш адрес электронной почты",
        "passwordLog": "Введите пароль",
        "login": "Авторизоваться",
        "footerLog": "Не зарегистрирован?",
        "footerLogBtn": "Завести аккаунт",

        //test.html
        "startTestBtn": "Начинать",
        "iesiBtn": "выходить",
        "reguliTitle": "Некоторые правила этого теста",
        "reguli": ('<div class="info">1. На каждый вопрос у вас будет только <span>15 секунд</span>.</div>'+
                    '<div class="info">2. Выбрав ответ, вы не сможете его изменить.</div>'+
                    '<div class="info">3. Вы больше не сможете выбирать ответы по истечении времени.</div>'+
                    '<div class="info">4. Выйти во время теста нельзя.</div>'+
                    '<div class="info">5. За ваши ответы вы получите баллы.</div>'),
        "iesiTestBtn": "Выйти из теста",
        "continuaTestBtn": "Продолжать идти",
        "testTitle": "Тест",
        "timpRamas": "Оставшееся время:",
        "gataTimpul": "Время готовности",
        "urmatorulTestBtn": "след",
        "finalTestTitle": "Вы завершили тест!",
        "nouTestBtn": "Пройди тест еще раз",
        "veziDeCeBtn": "Понять, почему",

        //mecanica.html
        "mecanicaTitle": "Механика",
        "principiiTitle": "Принципы и законы",
        "teoremeTitle": "Вариационные теоремы и законы сохранения",
        "principiiTitleModal": "Принципы и законы классической механики",
        "teoremeTitleModal": "Вариационные теоремы и законы сохранения",
        "principiiRez": ('<li>'+'Движение и отдых'+'</li>'+
                         '<li>'+'Первый принцип механики'+'</li>'+
                         '<li>'+'Второй принцип механики'+'</li>'+
                         '<li>'+'Третий принцип механики'+'</li>'+
                         '<li>'+'Закон Гука и натяжение проволоки.'+'</li>'+
                         '<li>'+'Законы трения скольжения'+'</li>'),
        "teoremeRez": ('<li>'+'Механическая работа и механическая мощность'+'</li>'+
                        '<li>'+'Теорема об изменении кинетической энергии'+'</li>'+
                        '<li>'+'Гравитационно потенциальная энергия'+'</li>'+
                        '<li>'+'Закон сохранения механической энергии'+'</li>'+
                        '<li>'+'Теорема об изменении импульса'+'</li>'+
                        '<li>'+'Закон сохранения импульса'+'</li>'),

        //termodinamica.html
        "termodinamicaTitle": "Термодинамика",
        "notiuniTitle": "начиная",
        "principiuITitle": "Принцип I",
        "motoareTitle": "Тепловые двигатели",
        "principiuIITitle": "Второй принцип",
        "notiuniTitleModal": "Основные понятия термодинамики",
        "principiuITitleModal": "Первый принцип термодинамики",
        "motoareTitleModal": "Тепловые двигатели",
        "principiuIITitleModal": "Второй принцип термодинамики",
        "notiuniRez": ('<li>'+'Молекулярная масса'+'</li>'+
                        '<li>'+'Относительная молекулярная масса'+'</li>'+
                        '<li>'+'Количество вещества'+'</li>'+
                        '<li>'+'Молярная масса'+'</li>'+
                        '<li>'+'Молярный объем'+'</li>'+
                        '<li>'+'Число Авогадро'+'</li>'+
                        '<li>'+'Тепловой баланс'+'</li>'+
                        '<li>'+'Соответствие между числовым значением температуры по шкале Цельсия и числовым значением x'+'</li>'),
        "principiuIRez": ('<li>'+'Механическая работа в термодинамике, количество процесса'+'</li>'+
                        '<li>'+'Геометрическая интерпретация механической работы в термодинамике'+'</li>'+
                        '<li>'+'Внутренняя энергия термодинамической системы, величина состояния'+'</li>'+
                        '<li>'+'Тепло, размер процесса'+'</li>'+
                        '<li>'+'Адиабатическая оболочка'+'</li>'+
                        '<li>'+'Первый принцип термодинамики'+'</li>'+
                        '<li>'+'Коэффициенты калорийности (определение отношений, единицы измерения в СИ)'+'</li>'+
                        '<li>'+'Отношения Роберта-Майера'+'</li>'+
                        '<li>'+'Применение первого принципа термодинамики к превращениям идеального газа:'+'<br>'+
                            '<ul>'+
                                '<li>'+'Внутренняя энергия идеального газа (одноатомного, двухатомного, многоатомного)'+'</li>'+	
                                '<li>'+'Изменение внутренней энергии, механической работы и количества тепла при простых превращениях идеального газа (изобарное, изохорное, изотермическое, адиабатическое)'+'</li>'+
                            '</ul>'+
                        '</li>'),
        "motoareRez": ('<li>'+'Объяснение работы теплового двигателя.'+'</li>'+
                    '<li>'+'Описание основных термодинамических циклов – Отто, Дизеля – на основе которых работают тепловые двигатели.'+'</li>'+
                    '<li>'+'КПД теплового двигателя'+'</li>'),
        "principiuIIRez": ('<li>'+'Цикл Карно, эффективность цикла Карно'+'</li>'),

        //electromecanica.html
        "electromecanicaTitle": "Электромеханический",
        "curentulTitle": "Электричество",
        "ohmTitle": "Закон Ома",
        "kirchhoffTitle": "Закон Кирхгофа",
        "grupareTitle": "Группировка резисторов и генераторов",
        "energieTitle": "Энергетика и электроэнергия",
        "curentulTitleModal": "Электричество",
        "ohmTitleModal": "Закон Ома",
        "kirchhoffTitleModal": "Закон Кирхгофа",
        "grupareTitleModal": "Группировка резисторов и генераторов",
        "energieTitleModal": "Энергетика и электроэнергия",
        "curentulRez": ('<li>'+'Электричество'+'</li>'+
                        '<li>'+'Интенсивность электрического тока'+'</li>'+
                        '<li>'+'Единица измерения силы электрического тока'+'</li>'+
                        '<li>'+'Простая электрическая схема'+'</li>'+
                        '<li>'+'Электродвижущее напряжение электрогенератора, напряжение на клеммах генератора, падение напряжения внутри генератора'+'</li>'),
        "ohmRez": ('<li>'+'Электрическое сопротивление'+'</li>'+
                    '<li>'+'Закон Ома для части цепи и для всей цепи'+'</li>'+
                    '<li>'+'Единица измерения электрического сопротивления'+'</li>'+
                    '<li>'+'Электрическое сопротивление, зависимость удельного электросопротивления от температуры'+'</li>'),
        "kirchhoffRez": ('<li>'+'Электрическая сеть'+'</li>'+
                        '<li>'+'Сетевой узел'+'</li>'+
                        '<li>'+'Сетевой глаз'+'</li>'+
                        '<li>'+'Законы Кирхгофа'+'</li>'),
        "grupareRez": ('<li>'+'Эквивалентное электрическое сопротивление последовательной, параллельной или смешанной группы нескольких резисторов.'+'</li>'+
                        '<li>'+'Эквивалентное электрическое сопротивление и эквивалентное электродвижущее напряжение, соответствующее последовательному/параллельному соединению нескольких электрических генераторов.'+'</li>'),
        "energieRez": ('<li>'+'Выражение энергии, передаваемой генератором потребителю за интервал времени'+'</li>'+
                        '<li>'+'Выражение энергии, рассеиваемой внутри генератора'+'</li>'+
                        '<li>'+'КПД простой электрической цепи'+'</li>'+
                        '<li>'+'Электроэнергия, отношения, характеризующие электроэнергию'+'</li>'),

        //optica.html
        "opticaTitle": "Оптический",
        "geometricaTitle": "Геометрическая оптика",
        "ondulatorieTitle": "Волновая оптика",
        "cuanticaTitle": "Элементы квантовой физики",
        "geometricaTitleModal": "Геометрическая оптика",
        "ondulatorieTitleModal": "Волновая оптика",
        "cuanticaTitleModal": "Элементы квантовой физики",
        "geometricaRez": ('<li>'+'Отражение света'+'</li>'+
                            '<li>'+'Преломление света'+'</li>'+
                            '<li>'+'Законы отражения'+'</li>'+
                            '<li>'+'Законы преломления'+'</li>'+
                            '<li>'+'Показатель преломления'+'</li>'+
                            '<li>'+'Сопряженные точки'+'</li>'+
                            '<li>'+'Параксиальные пучки'+'</li>'+
                            '<li>'+'Реальные/виртуальные изображения'+'</li>'+
                            '<li>'+'Оптическая линза'+'</li>'+
                            '<li>'+'Характерные элементы тонкой линзы (оси, оптический центр, фокусы)'+'</li>'+
                            '<li>'+'Конвергенция тонкой линзы'+'</li>'+
                            '<li>'+'Формулы тонких линз'+'</li>'+
                            '<li>'+'Изображения реальных/виртуальных объектов в тонких линзах'+'</li>'+
                            '<li>'+'Системы линз'+'</li>'),
        "ondulatorieRez": ('<li>'+'Условия получения стационарных помех'+'</li>'+
                            '<li>'+'Длина волны'+'</li>'+
                            '<li>'+'Компоненты устройства Янга'+'</li>'+
                            '<li>'+'Интерференционные полосы'+'</li>'+
                            '<li>'+'Оптическая разность путей'+'</li>'+
                            '<li>'+'Максимальные и минимальные условия помех'+'</li>'+
                            '<li>'+'Интербаринг'+'</li>'),
        "cuanticaRez": ('<li>'+'Законы внешнего фотоэффекта'+'</li>'+
                        '<li>'+'Гипотеза Планка. Гипотеза Эйнштейна. Уравнение Эйнштейна'+'</li>'+
                        '<li>'+'Интерпретация законов внешнего фотоэффекта'+'</li>'),

        //teorieMecanica.html
        "teorieMecanicaTitle": "Теория механики",
        "teorieMecanica": ('<u>'+'<h2 class=\"p-3\" align = center>'+'Принципы и законы'+'</h2>'+'<br>'+'<br>'+' <br>'+'</u>'+
                        '<h2 class=\"p-3\">'+'Скорость'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Формула: '+'<b>'+'v = d/Δt'+'</b>'+'</li>'+
                            '<li>'+'Единица измерения: '+'<b>'+'&lt;'+'v'+'&gt;'+' = м/с'+'</b>'+'</li>'+
                                    '<li>'+'Средняя скорость: '+'<b>'+'v'+'<small>'+'m'+'</small>'+' = Δd/Δt'+'</b>'+'</li>'+
                                    '<li>'+'Вектор скорости имеет то же значение, что и смещение: v'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>' + ' = d'+'<span style=\"vertical-align : 5px;\">'+'&#8407;'+'</span>'+' /Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Ускорение'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Формула: '+'<b>'+'a = Δv/Δt'+'</b>'+'</li>'+
                            '<li>'+'Единица измерения: '+'<b>'+'&lt;'+'a'+'&gt;'+' = м/с'+'<sup>'+'2'+ ' </sup>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Формула Галилея:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v'+'<sup>'+'2'+'</sup>'+' = v'+'<sub>'+'0'+'</sub>'+'<sup>'+'2'+'</sup>'+' + 2a(x-x'+'<sub>'+'0'+'</sub>'+') '+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Закон скорости: '+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v = v'+'<sub>'+'0'+'</sub>'+' + at'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Закон движения:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'x = 1/2at'+'<sup>'+'2'+'</sup>'+' + v'+'<sub>'+'0 '+'</sub>'+'t + x'+'<sub>'+'0'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Принцип I механики:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Любое тело сохраняет состояние покоя или равномерного прямолинейного движения до тех пор, пока на него не действуют другие силы или сумма действующих на него сил равна нулю.'+'</li>'+
                            '<li>'+'Коротко: скорость равна '+'<b>'+'constant'+'</b>'+', если '+'<b>'+'результат сил, приложенных к body'+' </b>'+' равен 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Второй принцип механики:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Изменение величины движения тела прямо пропорционально приложенной силе и происходит в направлении действия силы.'+'</li>'+
                            '<li>'+'Другими словами: сила, действующая на тело, придает ему ускорение, пропорциональное силе и обратно пропорциональное массе тела.'+'</li>'+
                            '<li>'+'Формула: F = ma'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Третий принцип механики:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Когда одно тело действует на другое тело с силой (называемой силой действия), второе тело также действует на первое тело с силой (называемой силой реакции) той же величины и направления, но противоположный. Этот принцип также известен как принцип действия и противодействия.'+'</li>'+
                            '<li>'+'Записывается в виде формулы: '+'<b>'+'F'+'<sub>'+'a'+'</sub>'+' = F'+'<sub> '+'r'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Закон Гука:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Удлинение пружины прямо пропорционально деформирующей силе (F):'+'</li>'+'<br>'+
    
                            'Δl ~ F'+'<br>'+'<br>'+
    
                            '<li>'+'Прямо пропорционально начальной длине пружины (l'+'<sub>'+'0'+'</sub>'+') :'+'</li>'+'<br>'+
                            
                            'Δl ~ l'+'<sub>'+'0'+'</sub>'+'<br>'+'<br>'+
    
                            '<li>'+'Обратно пропорционально площади поперечного сечения пружины:'+'</li>'+'<br>'+
    
                            'Δl ~ 1/S'+'<br>'+'<br>'+
    
                            '<li>'+'Закон Гука:'+'</li>'+'<br>'+
                            'F/S = E∙Δl/l'+'<sub>'+'0'+'</sub>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Натяжение провода:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Натяжение проволоки ( T ) представляет собой силу реакции нерастяжимой проволоки (которая не удлиняется) на силу, действующую на нее.'+'</li>'+'<br>' +
                            '<li>'+'Когда мы подвешиваем тело на нерастяжимой нити, возникают две парные силы:'+'<br>'+'<br>'+
    
                                'Сила давления тела (F) – это сила, с которой тело действует на проволоку (она равна весу тела).'+'<br>'+'<br>'+
                                
                                'Натяжение проволоки (Т) — это сила, с которой проволока действует на подвешенное на ней тело».'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Законы трения скольжения:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Первый закон трения:'+'<br>'+'<br>'+
                            
                                'Величина силы трения скольжения зависит от характера и степени обработки контактирующих поверхностей. Зависимость характеризуется безразмерной величиной, называемой коэффициентом трения скольжения, которая принимает значения от 0 до 1 и обозначается ц.'+'<br>'+'<br>'+
    
                                'Ff ~ μ'+'</li>'+'<br>'+
    
                            '<li>'+'Второй закон трения:'+'<br>'+'<br>'+
                                'Величина силы трения скольжения не зависит от площади поверхности контакта тел.'+'<br>'+'<br>'+'</li>'+
                                
                            '<li>'+'Третий закон трения:'+'<br>'+'<br>'+
                                'Величина силы трения скольжения зависит от силы давления тела на поверхность скольжения, которая по величине равна нормальной силе реакции на поверхности контакта между телами.'+'<br>'+'<br>' +
    
                            'Ff ~ N'+'</li>'+'<br>'+
                            '<li>'+'Формула силы трения задается соотношением:'+'<br>'+'<br>'+
                                'Ff = μ ∙ N'+'</li>'+
                        '</ul>'+
    
                        //Teoreme de variatie si legi de conservare
                        
                        '<a name=\"element_target\">'+'</a>'+
                        '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center>'+'Теоремы законов вариации и сохранения'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                        
                        '<h2 class=\"p-3\">'+'Механическая работа:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Механическая работа (L) постоянной силы, действующей на тело в направлении и направлении перемещения тела, представляет собой скалярную физическую величину, равную произведению модуля силы (F) и модуль перемещения тела (d).' +'</li>'+'<br>'+
                            '<li>'+'Формула расчета: L = F ∙ d'+'</li>'+'<br>'+
                            '<li>'+'Соглашение о знаках:'+'<br>'+
                                '1. Механическая работа силы положительна, если сила способствует перемещению тела. Это происходит, если сила имеет то же направление и смысл, что и движение тела.'+'<br>'+'<br>'+
                                '2. Механическая работа силы отрицательна, если сила препятствует движению тела. Это происходит, если составляющая вектора силы по направлению движения противоположна движению тела.'+'<br>'+'<br>'+
                                '3. Механическая работа силы равна нулю, если сила не помогает телу двигаться и не препятствует движению. Это происходит, если вектор силы перпендикулярен направлению движения тела.'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Механическая мощность:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Механическая мощность (P) — скалярная физическая величина, равная отношению между произведенной механической работой (L) и временем (Δt), в течение которого эта механическая работа совершена.'+'</li> '+'<br>'+
                            '<li>'+'P = Механическая работа / время = L / Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Кинетическая энергия:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Механическая энергия (Е) – физическая величина, характеризующая способность тела совершать механическую работу, единицей измерения является джоуль (Дж).'+'</li>'+'<br>' +
                            '<li>'+'Кинетическая энергия (E'+'<sub>'+'c'+'</sub>'+') — это энергия, которой обладает движущееся тело.'+'</li> '+ '<br>'+
                            '<li>'+'Кинетическая энергия движущегося тела с определенной скоростью вычисляется по формуле:'+'<br>'+'<br>'+
                                'E'+'<sub>'+'c'+'</sub>'+' = m ∙ v'+'<sup>'+'2'+'</sup>'+' / 2 '+ '</li>'+'<br>'+
                            '<li>'+'Закон изменения кинетической энергии:'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'c'+'</sub>'+' = L'+'<sub>'+'Итого'+'</sub>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Потенциальная гравитационная энергия:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Гравитационная потенциальная энергия (E'+'<sub>'+'pg'+'</sub>'+') — это энергия, которой обладает тело на определенной высоте от земли.'+'</li>'+'<br>'+
                            '<li>'+'Гравитационная потенциальная энергия тела равна: E'+'<sub>'+'pg'+'</sub>'+' = m ∙ g ∙ h'+'</li>'+'<br>'+
                            '<li>'+'Закон изменения гравитационной потенциальной энергии:'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'pg'+'</sub>'+' = -L'+'<sub>'+'G'+'</sub>'+'</li>' +'<br>'+
                            '<li>'+'Сила, совершающая механическую работу, независимую от пройденного пути и зависящую только от крайних положений (начального и конечного), называется консервативной силой.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Сохранение механической энергии:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Закон сохранения механической энергии:'+'<br>'+'<br>'+
    
                                '\"Механическая энергия тела сохраняется, если на него действуют только консервативные силы.\"'+'<br>'+'<br>'+
                            
                                'E = константа, если тело изолировано снаружи и F'+'<sub>'+'f'+'</sub>'+' = 0'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Теорема об изменении импульса:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Импульс тела обозначается Законом сохранения импульса и имеет формулу:'+'<br>'+'<br>'+
                            'p'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = m ∙ v'+'<span style=\" vertical-align : 4px;\">'+'&#8407;'+'</span>'+'</li>'+'<br>'+
                            '<li>'+'Теорема изменения механического импульса'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' ∙ Δt'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Закон сохранения импульса:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Когда механическая система изолирована, результирующая сила F'+'<sub>'+'R'+'</sub>'+'<span style=\"vertical-align : 4px; Margin- left : -1.5px\">'+'&#8407;'+'</span> '+'равняется нулю.'+'<br>'+'<br>'+
                            'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = F'+'<sub>'+'R' +'</sub>'+'<span style=\"vertical-align: 4px;margin-left: -1.5px\">'+'&#8407;'+'</span>'+' ∙ Δt = 0 ∙ Δt = 0'+'</li>'+'<br>'+
                            '<li>'+'Закон сохранения механического импульса в СРИ:'+'<br>'+'<br>'+
                                'Механический импульс изолированных механических систем сохраняется».'+'<br>'+'<br>'+
                                'Δp'+'<span style=\"vertical-align : 4px;\">'+'&#8407;'+'</span>'+' = 0, т.е. Δp'+'<span style=\ "vertical-align: 4px; \">'+'&#8407;'+'</span>'+' = const'+'<span style=\"vertical-align: 4px; Margin-left: -25px \">'+'&#8407;'+'</span>'+'</li>'+'<br>'+
                                '<li>'+'В случае изолированных механических систем их суммарный импульс не может измениться под действием внутренних сил.'+'</li>'+
                        '</ul>'),

        //teorieTermodinamica.html
        "teorieTermodinamicaTitle": "Термодинамическая теория",
        "teorieTermodinamica": ('<u>'+'<h2 class=\"p-3\" align = center>'+'Основные термодинамические концепции'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                '<ul>'+
                                '<li>'+'<b>'+'Термическое перемешивание'+'</b>'+' — это беспорядочное и непрерывное движение частиц вещества (атомов или молекул).'+'</li> '+' <br>'+
                                '<li>'+'<b>'+'Диффузия'+'</b>'+' — явление проникновения молекул одного вещества среди молекул другого вещества без вмешательства внешней силы ( само по себе).'+ '</li>'+'<br>'+
                                '<li>'+'<b>'+'Атом'+'</b>'+' — это мельчайшая частица вещества, которую невозможно разделить обычными химическими процессами.'+'</li>'+ '<br>'+
                                '<li>'+'<b>'+'Молекула'+'</b>'+' представляет собой наименьшую частицу вещества, которая может существовать также в свободном состоянии и сохраняет свойства вещества, из которого оно приходит. '+'</li>'+'<br>'+
                                '<li>'+'<b>'+'Молекулярная масса'+'</b>'+' — это безразмерная величина (без единицы измерения), которая показывает, во сколько раз реальная масса молекулы больше, чем атомная единица массы (а.е.м.).'+'</li>'+'<br>'+
                                '<li>'+'<b>'+'Относительная атомная масса (A)'+'</b>'+' — это число, которое показывает, во сколько раз масса атома больше атомной единицы массы. .'+ '</li>'+'<br>'+
                                '<li>'+'<b>'+'Моль атомов'+'</b>'+' представляет собой количество в граммах простого вещества, которое содержит 6,022 ∙ 10'+'<sup>' +'23'+'</sup>'+' атомы. Оно пишется греческой буквой «ниу»= υ.'+'<br>'+'<br>'+

                                        'υ = m(г) / A(г/моль) = масса простого вещества (г) / атомная масса (г/моль)'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'число Авогадро'+'</b>'+', обозначаемое N'+'<sub>'+'A'+'</sub>'+' , равно 6,022 ∙10'+'<sup>'+'23'+'</sup>'+' моль'+'<sup>'+'-1'+'</sup>'+' атомов и представляет собой количество атомов, содержащихся в моле атомов любого простого вещества.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Молярная масса'+'</b>'+' (обозначается греческой буквой miu = μ) — это масса одного моля вещества. Единица измерения — г/моль.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Моль'+'</b>'+' — единица измерения в Международной системе количества вещества, содержащего количество частиц, равное числу Авогадро, N'+ '<sub>'+'A.'+'</sub>'+'<br>'+'<br>'+
                                        'υ = m(г) / μ(г/моль) = Масса соединения (г) / Молярная масса (г/моль)'+'<br>'+'<br>'+
                                        'υ = N / N'+'<sub>'+'A'+'</sub>'+' = Число частиц / число Авогадро'+'</li>'+'<br>'+

                                    '<li>'+'Один моль любого газа занимает при нормальных условиях температуры (273 К) и давления (10'+'<sup>'+'5'+'</sup>'+' Па) объем , называемый '+'<b>'+'молярный объем'+'</b>'+' = V'+'<sub>'+'μ'+'</sub>'+' = 22,4 л/моль '+'<br>'+'<br>'+
                                        'v = V / V'+'<sub>'+'μ'+'</sub>'+' = объем газа (л) / молярный объем (л/моль)'+'<br>'+'<br>'+
                                        'Соотношение между молярным объемом и плотностью вещества следующее:'+'<br>'+'<br>'+
                                        'P = μ / V'+'<sub>'+'μ'+'</sub>'+'<br>'+'<br>'+
                                        'Число объема (n) представляет собой количество частиц (атомов или молекул) в м3 вещества:'+'<br>'+'<br>'+
                                        'n = N'+'<sub>'+'A'+'</sub>'+' / V'+'<sub>'+'μ'+'</sub>'+' = N / V '+'<br>'+'<br>'+'</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Термодинамическое равновесие и термодинамические процессы:'+'</h2>'+
                                '<ul>'+
                                '<li>'+'<b>'+'Состояние термодинамической системы'+'</b>'+' в определенный момент характеризуется определенными физическими величинами, называемыми параметрами состояния.'+'</li>'+'<br>'+
                                '<li>'+'<b>'+'Принцип термодинамического равновесия'+'</b>'+':'+'<br>'+'<br>'+

                                    'Изолированная термодинамическая система самопроизвольно развивается к состоянию термодинамического равновесия, из которого она никогда не выходит сама.'+'</li>'+'<br>'+
                                '<li>'+'<b>'+'Состояние термодинамического равновесия'+'</b>'+' системы может быть изменено контактным путем :'+'<br>'+'<br>' +
                                    '- механическое с внешней средой'+'<br>'+
                                    '- термический с другой средой (при соприкосновении двух тел с разными температурами) или с внешней средой'+'<br>'+
                                    '- обмен веществ с внешней средой или другой средой'+'</li>'+'<br>'+
                                        '<li>'+'<b>'+'Термодинамический процесс'+'</b>'+' (преобразование состояний) представляет собой переход системы из одного состояния в другое.'+'</li>' +' <br>'+
                                        '<li>'+'<b>'+'Квазистатическое преобразование'+'</b>'+' происходит, когда промежуточные состояния, через которые проходит система, являются состояниями теплового равновесия, когда параметры состояния изменяются очень медленно. ' +'</li>'+'<br>'+
                                        '<li>'+'<b>'+'Обратимый процесс'+'</b>'+' — это квазистатическое преобразование, которое может происходить в обоих направлениях, через одни и те же промежуточные состояния.'+'</li>'+ '<br>'+
                                        '<li>'+'Уравнение состояния (называемое Клапейроном - Менделеевым) описывает зависимость между параметрами состояния термодинамической системы:'+'<br>'+'<br>'+
                                            'p ∙ V = ν ∙ R ∙ T'+'<br>'+'<br>'+
                                            'p = давление идеального газа'+'<br>'+
    
                                            'V = идеальный объем газа'+'<br>'+
    
                                            'ν = количество молей идеального газа'+'<br>'+
    
                                            'R = универсальная газовая постоянная = 8,3143 ∙ 10'+'<sup>'+'3'+'</sup>'+' Дж/кмоль ∙ K'+'<br>'+
    
                                            'T = идеальная температура газа'+'</li>'+
                                '</ul>'+
                                '<h2 align = center>'+
                                '<img src = \"img/transformari.png\" width = 360>'+
                                '</h2>'+
                                '<h2 class=\"p-3\">'+'Эмпирическая температура. Температурные шкалы:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'Две замкнутые термодинамические системы, адиабатически изолированные снаружи, не обменивающиеся энергией друг с другом, имеют одинаковую температуру, называемую '+'<b>'+'эмпирической температурой.'+'</b> '+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Температура'+'</b>'+' — это физическая величина состояния, измеренная с помощью термометра, включающая термометрическое тело, термометрическую величину и температурную шкалу.' +'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Нулевой принцип термодинамики'+'</b>'+' (транзитивность теплового равновесия):'+'<br>'+'<br>'+
                                        'Если система A находится в тепловом равновесии с системой B, а система B находится в тепловом равновесии с системой C, то система A также находится в тепловом равновесии с системой C.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Отношение преобразования'+'</b>'+' между tF по Цельсию (°C) и tF по Фаренгейту (°F):'+'<br>'+ '<br>'+
                                        't'+'<sub>'+'F'+'</sub>'+' = 9/5 ∙ t(°C) + 32'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Шкала Кельвина'+'</b>'+' (абсолютное): '+'<br>'+'<br>'+
                                        '[T]'+'<sub>'+'SI'+'</sub>'+' = K (кельвин)'+'<br>'+'<br>'+
                                        'T(K) = t (°C) + 273,15'+'</li>'+
                                '</ul>'+

                                //Principiul I
                                '<a name=\"element_target\">'+'</a>'+
                                '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center>'+'The принцип I'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                

                                '<h2 class=\"p-3\">'+'Механическая работа:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'Обмен энергией между замкнутой термодинамической системой и внешней средой может происходить двумя способами:'+'<br>'+'<br>'+
                                        '- Выполняя механическую работу'+'<br>'+
                                        '- За счет теплопередачи.'+'<br>'+'<br>'+
                                        
                                        'Мера энергии, передаваемой системе в условиях взаимодействий, приводящих к изменению параметров положения под действием некоторых сил, называется '+'<b>'+'механической работой.'+'</b>'+'<br>'+' <br>'+
                                        'L = F ∙ d'+'</li>'+'<br>'+
                                    '<li>'+'Механическая работа, совершаемая внешней силой F'+'<sub>'+'e'+'</sub>'+' равна:'+'<br>'+'<br> '+
                                        'L'+'<sub>'+'e'+'</sub>'+' = p'+'<sub>'+'e'+'</sub>'+' ∙ S ∙ (x1 - x2) = - p'+'<sub>'+'e'+'</sub>'+' ∙ ΔV'+'<br>'+'<br>'+
                                        'S = площадь поперечного сечения цилиндра'+'<br>'+
                                        'p'+'<sub>'+'e'+'</sub>'+' = внешнее давление'+'<br>'+

                                        'V2 = S ∙ x2'+'<br>'+
                                        'V1 = S ∙ x1'+'<br>'+
                                        
                                        'ΔV = V2 - V1'+'</li>'+'<br>'+
                                        '<li>'+'Механическая работа, совершаемая термодинамической системой при изобарном превращении, равна:'+'<br>'+'<br>'+
                                        'L = p ∙ ΔV'+'</li>'+'<br>'+
                                    
                                    '<li>'+'Соглашение о знаках механической работы, совершаемой термодинамической системой:'+'<br>'+'<br>'+
                                    
                                        'а) Если газ расширяется (увеличивает свой объем), ΔV > 0, то L > 0 и система совершает механическую работу над внешней средой (выдает L).'+'<br>'+'<br>'+
                                    
                                        'б) Если газ сжимается (его объем уменьшается), ΔV < 0, то L < 0 и над системой совершается механическая работа (получается L).'+'<br>'+'<br>'+
                                    
                                        'в) Если нет передачи энергии посредством механической работы между системой и внешней средой (L = 0), то газ не меняет своего объема (ΔV=0).'+'</li>'+'<br>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Механическая работа:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Энергия частиц реального газа определяется выражением:'+'<br>'+'<br>'+
                                        '- Внешняя энергия определяется суммой кинетической энергии системы в целом и ее потенциальной энергии в силовом поле.'+'<br>'+'<br>'+
                                        '- Внутренняя энергия (U) определяется суммой кинетических энергий молекул (E'+'<sub>'+'c'+'</sub>'+') и потенциальных энергий взаимодействия между молекулы термодинамической системы (E '+'<sub>'+'p'+'</sub>'+').'+'<br>'+'<br>'+
                                        'U = Ec + Ep'+'<br>'+'<br>'+
                                        '- Но изменение внутренней энергии (ΔU = U'+'<sub>'+'2'+'</sub>'+' – U'+'<sub>'+'1'+'</sub> ' +') является величиной физического состояния и не зависит от промежуточных состояний, через которые проходит система, а только от начального состояния (U'+'<sub>'+'1'+'</sub>'+ ') и финальный (U'+'<sub>'+'2'+'</sub>'+').'+

                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Тепло:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                    'Тепло (Q) — это физическая величина, измеряющая передаваемую энергию только за счет беспорядочного движения молекул между двумя телами, находящимися в тепловом контакте».'+'<br>'+'<br>'+

                                    '[Q]'+'<sub>'+'SI'+'</sub>'+' = J(джоуль)'+'<br>'+'<br>'+
                                    'Другая допустимая единица измерения тепла — калория: 1 кал = 4,18 Дж'+
                                '</li>'+'<br>'+
                                '<li>'+'Соглашение о знаках тепла:'+'<br>'+'<br>'+
                                    'а) Если система получает тепло извне, то Q > 0'+'<br>'+'<br>'+
                                    'б) Когда система отдает тепло наружу, то Q < 0'+'<br>'+'<br>'+
                                    'в) Когда система адиабатически изолирована (не обменивается теплом с внешней средой), то Q = 0'+
                                '</li>'+'<br>'+
                            '</ul>'+
                            '<h2 class=\"p-3\">'+'Следствия первого принципа термодинамики:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'Утверждение первого принципа термодинамики:'+'<br>'+'<br>'+
                                        'Изменение внутренней энергии системы в некотором процессе равно:'+'<br>'+'<br>'+
                                        'ΔU = Q - L'+'</li>'+'<br>'+
                                    '<li>'+'Если система изолирована (она не обменивается с внешней средой ни теплом, ни механической работой), то'+'<br>'+'<br>'+
                                        'Q = L = 0, ΔU = U2 – U1 = 0 и U1 = U2, т.е. внутренняя энергия изолированной системы сохраняется.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Уравнение первого начала термодинамики можно записать и в виде определения теплоты:'+'<br>'+'<br>'+
                                        'Q = ΔU + L, т. е. полученное системой тепло служит как для изменения внутренней энергии системы, так и для совершения системой механической работы.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Если система адиабатически изолирована (не обменивается теплом с внешней средой), то'+'<br>'+'<br>'+
                                        'Q = 0 и L = –ΔU = –(U2 – U1), т.е. изолированная адиабатическая система обменивается механической работой с внешней средой только за счет изменения внутренней энергии.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Если система не обменивается механической работой с внешней средой (L= 0), а только теплом, то'+'<br>'+'<br>'+
                                        'ΔU = Q, т. е. полученное системой тепло приводит к увеличению внутренней энергии системы.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'При циклическом превращении ΔU = U2 – U1 = 0 и L = Q, то есть система может совершать механическую работу только в том случае, если получает тепло извне.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Из этого следует невозможность существования вечного двигателя первого рода (устройства, производящего механическую работу без потребления энергии извне).'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Теплотворные коэффициенты:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Удельная теплоемкость (с) представляет собой физическую величину, характеризующую тепло, поглощаемое/отдаваемое 1 кг вещества при повышении/понижении его температуры на один градус. Это материальная константа, и ее можно найти в таблице констант в конце этой главы.'+'<br>'+'<br>'+
                                        'c = 1 / m ∙ Q / ΔT'+'<br>'+'<br>'+
                                        '[c]'+'<sub>'+'SI'+'</sub>'+' = Дж/кг∙K'+'<br>'+'<br>'+
                                        'Q = m ∙ c ∙ ΔT'+'<br>'+
                                        'м = масса тела'+'<br>'+
                                        'c = удельная теплоемкость'+'<br>'+
                                        'ΔT = T'+'<sub>'+'финальный'+'</sub>'+' – T'+'<sub>'+'исходный'+'</sub>'+' , температура тела вариант '+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'получено'+'</sub>'+' > 0'+'<br>'+
                                        'Q'+'<sub>'+'дата'+'</sub>'+'< 0 '+'<br>'+'<br>'+
                                        'Колориметрическое уравнение: '+'<br>'+'Q'+'<sub>'+'получено'+'</sub>'+' = | Q'+'<sub>'+'дата'+'</sub>'+' |'+'<br>'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Теплоемкость (С) представляет собой физическую величину, характеризующую количество тепла, необходимое термодинамической системе для изменения ее температуры на один градус.'+'<br>'+'<br>'+
                                        'C = Q / ΔT'+'<br>'+'<br>'+
                                        '[C]'+'<sub>'+'SI'+'</sub>'+' = Дж/кг'+'<br>'+'<br>'+
                                        'Q = C ∙ ΔT'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Молярная теплота (C'+'<sub>'+'μ'+'</sub>'+') — это теплота, необходимая для изменения температуры одного моля вещества на один градус.'+'<br> ' +'<br>'+
                                        'C'+'<sub>'+'μ'+'</sub>'+' = Q / v ∙ ΔT'+
                                        '[C'+'<sub>'+'μ'+'</sub>'+'] = Дж/моль∙K'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Степени свободы:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'Поскольку в термодинамике молекулы идеального газа считаются материальными точками, независимые координаты, характеризующие термодинамическую систему, называются степенями свободы.'+'<br>'+'<br>'+
                                        '- Для одноатомных газов: i = 3'+'<br>'+
                                        '- Для двухатомных газов: i = 5'+'<br>'+
                                        '- Для многоатомных газов: i = 6'+'<br>'+'<br>'+

                                        'Молярная теплота при постоянном объеме равна:'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'v'+'</sub>'+' = i/2 R'+'<br>'+'<br>'+
                                        'Молярная теплота при постоянном давлении равна:'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = (i + 2)/2 R'+'<br>'+'<br>'+
                                        'R = 8,3143 ∙ 10'+'<sup>'+'3'+'</sup>'+' Дж/кмоль ∙ K (универсальная газовая постоянная)'+'</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Изохорное преобразование :'+'</h2>'+
                                '<ul>'+
                                    '<li>'+'(ν и V const.) → ΔV = 0 → L'+'<sub>'+'V'+'</sub>'+' = p ∙ ΔV = 0'+'</li>'+'<br>'+
                                    '<li>'+'У нас есть два случая:'+'<br>'+'<br>'+
                                        '- Газ, заключенный в постоянный объем, нагревается, поглощает тепло → QV > 0 и ΔU > 0 (увеличивает внутреннюю энергию газа).'+'<br>'+'<br>'+
                                        '- Газ, заключенный в постоянный объем, охлаждается, отдает тепло → QV < 0 и ΔU < 0 (внутренняя энергия газа уменьшается)'+'</li>'+'<br>'+
                                    '<li>'+' Формулы: '+'<br>'+'<br>'+
                                        
                                        'ΔU = Q'+'<sub>'+'V'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ ΔT '+'<br>'+'<br>'+
                                        'ΔU = U – U'+'<sub>'+'0'+'</sub>'+' и ΔT = T – T'+'<sub>'+'0'+'</sub>' +', для T'+'<sub>'+'0'+'</sub>'+' = 0 K → U'+'<sub>'+'0'+'</sub>'+' = 0'+'<br>'+'<br>'+
                                        'Внутренняя энергия одноатомного идеального газа равна:'+'<br>'+
                                        'U = ν ∙ C'+'<sub>'+'V'+'</sub>'+'∙ T = 3/2 ∙ ν ∙ R ∙ T'+'</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Изобарическое преобразование:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        '(ν și p const.)'+'<br>'+'<br>'+
                                        'Если газ нагрет, он поглощает тепло → Qp > 0 и часть энергии идет на увеличение внутренней энергии газа ΔU > 0, а другая часть — это механическая работа, совершаемая газом снаружи, L > 0.'+
                                    '</li>'+'<br>'+
                                    '<li>'+' Формулы: '+'<br>'+'<br>'+
                                            'L = p ∙ ΔV'+'<br>'+'<br>'+
                                            'Q'+'<sub>'+'p'+'</sub>'+' = ν ∙ C'+'<sub>'+'p'+'</sub>'+' ∙ ΔT'+ '<br>'+'<br>'+
                                            'Вариация внутренней энергии не зависит от процесса, и мы можем написать:'+'<br>'+
                                            'ΔU = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ ΔT'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Изотермическое преобразование:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        '(ν și T const.) → U = const. și ΔU = 0.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Когда газ нагревается, он поглощает тепло → QT > 0 и L > 0, полностью используясь для выполнения внешней механической работы.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'При изотермическом превращении давление обратно пропорционально объему газа, и тогда мы совершаем механическую работу.'+
                                    '</li>'+'<br>'+
                                    '<li>'+' Формулы: '+'<br>'+'<br>'+
                                        'L'+'<sub>'+'T'+'</sub>'+' = v ∙ R ∙ T ∙ ln(V'+'<sub>'+'2'+'</sub>' +' / V'+'<sub>'+'1'+'</sub>'+')'+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'T'+'</sub>'+' = L'+'<sub>'+'T'+'</sub>'+' = v ∙ R ∙ T ∙ ln(V'+'<sub>'+'2'+'</sub>'+' / V'+'<sub>'+'1'+'</sub>'+')'+' <br>'+'<br>'+
                                        'p'+'<sub>'+'1'+'</sub>'+' ∙ V'+'<sub>'+'1'+'</sub>'+' = p'+'<sub>'+'2'+'</sub>'+' ∙ V'+'<sub>'+'2'+'</sub>'+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'T'+'</sub>'+' = L'+'<sub>'+'T'+'</sub>'+' = v ∙ R ∙ T ∙ ln(V'+'<sub>'+'2'+'</sub>'+' / V'+'<sub>'+'1'+'</sub>'+') = v ∙ R ∙ T ∙ ln(p1/p2)'+'<br>'+'<br>'+
                                        'U = const и ΔU = 0'+
                                    '</li>'+'<br>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Адиабатическое преобразование:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        '(ν const.) → Qad = 0'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Формула:'+'<br>'+'<br>'+
                                        'ΔU = - L'+'<sub>'+'ad'+'</sub>'+'<br>'+'<br>'+
                                        'ΔU = ν ∙ C'+'<sub>'+'v'+'</sub>'+' ∙ΔT'+'<br>'+'<br>'+
                                        'L'+'<sub>'+'ad'+'</sub>'+' = - ν ∙ C'+'<sub>'+'v'+'</sub>'+' ∙ ΔT' +'<br>'+'<br>'+
                                        'Уравнение адиабатического процесса называется уравнением Пуассона:'+'<br>'+
                                        'p ∙ V'+'<sup>'+'y'+'</sup>'+' = const.'+'<br>'+
                                        'y = адиабатический коэффициент = C'+'<sub>'+'p'+'</sub>'+' / C'+'<sub>'+'V'+'</sub>'+'<br>'+
                                        'T ∙ V'+'<sup>'+'y-1'+'</sup>'+' - const'+
                                        'T'+'<sup>'+'y'+'</sup>'+' / p '+'<sup>'+'y-1'+'</sup>'+' = const'+
                                    '</li>'+
                                '</ul>'+
                                
                                '<h2 class=\"p-3\">'+'Отношения Роберта-Майера:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'В случае преобразования изохоры:'+'<br>'+'<br>'+
                                        'ΔU = Q'+'<sub>'+'V'+'</sub>'+' = v ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ ΔT '+'<br>'+'<br>'+
                                        'C'+'<sub>'+'V'+'</sub>'+' = Q'+'<sub>'+'V'+'</sub>'+' / (v ∙ ΔT) = ΔU / (v ∙ ΔT)'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'В случае изобарического превращения:'+'<br>'+'<br>'+
                                        'Q'+'<sub>'+'p'+'</sub>'+' = (v ∙ C'+'<sub>'+'p'+'</sub>'+' ∙ ΔT) = ΔU + p ∙ ΔV'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = Q'+'<sub>'+'p'+'</sub>'+' / (v ∙ ΔT) = (ΔU + p ∙ ΔV) / (v ∙ ΔT)'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Объединив два отношения Cp и CV, мы получаем:'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = C'+'<sub>'+'V'+'</sub>'+' + (p ∙ ΔV) / (v ∙ ΔT)'+'<br>'+'<br>'+
                                        'Из теплового уравнения состояния:'+'<br>'+'<br>'+
                                        'p ∙ ΔV = ν ∙ R ∙ ΔT'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Соотношение Роберта-Майера устанавливает связь между молярными теплотами:'+'<br>'+'<br>'+
                                        'C'+'<sub>'+'p'+'</sub>'+' = C'+'<sub>'+'V'+'</sub>'+' + R'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Соотношение Роберта-Майера устанавливает связь между молярной удельной теплоемкостью:'+'<br>'+'<br>'+
                                        'c'+'<sub>'+'p'+'</sub>'+' = c'+'<sub>'+'V'+'</sub>'+' + (R / μ) '+
                                    '</li>'+
                                '</ul>'+


                                //Motoare termice
                                '<a name=\"element_target2\">'+'</a>'+
                                '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center>'+'Тепловые двигатели'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                
                                '<h2 class=\"p-3\">'+'Тепловые машины:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'При битермическом циклическом превращении термодинамическая система обменивается теплотами Q'+'<sub>'+'1'+'</sub>'+', соответственно Q'+'<sub>'+'2'+'</sub>'+' с двумя источниками тепла, температура которых равна T'+'<sub>'+'1'+'</sub>'+' (горячий источник) и T'+'<sub>'+ '2 '+'</sub>'+' (холодный источник), при этом T'+'<sub>'+'1'+'</sub>'+' > T'+'<sub>'+' 2' +'</sub>'+' .'+'<br>'+'<br>'+
                                            'Поскольку циклические превращения имеют ΔU = 0, согласно первому принципу термодинамики имеем'+'<br>'+'<br>'+
                                            'Q'+'<sub>'+'1'+'</sub>'+' + Q'+'<sub>'+'2'+'</sub>'+' = L'+'<br>'+'<br>'+

                                            'Тепловая машина — это термодинамическая система, совершающая циклическое преобразование, при котором она обменивается теплом и механической работой с внешней средой.'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Тепловые двигатели:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Тепловая машина — это система, преобразующая полученное тепло при сжигании топлива (бензина, дизельного топлива, метана и т. д.) в механическую работу.'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Двигатель Отто:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Двигатель Отто использует в качестве топлива смесь воздуха с парами бензина, которая образуется в карбюраторе.'+'<br>'+'<br>'+
                                        '- Топливная смесь всасывается через впускной клапан (S1) в поршневой цилиндр.'+'<br>'+'<br>'+
                                        '- Газы, образующиеся при сгорании топливной смеси, удаляются через выпускной клапан (S2).'+'<br>'+'<br>'+
                                        '- Время работы - это период перемещения поршня от верхней мертвой точки = ВМТ (цилиндр перекрывает минимальный объем вещества) до нижней мертвой точки = PMI (цилиндр перекрывает максимальный объем вещества) и наоборот.'+'<br>'+'<br>'+
                                        '- Поршень соединен с системой шатун-кривошип (vilbrochen = коленчатый вал), чтобы преобразовать прямолинейное движение поршня во вращательное движение.'+'<br>'+'<br>'+
                                        '- Блок двигателя состоит из нескольких цилиндров, соединенных последовательно. Каждый поршень имеет разное время раскрытия, чтобы обеспечить постоянное и постоянное вращение вилборхена.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Время работы двигателя Отто:'+'<br>'+'<br>'+

                                        ' - '+'<b>'+'Время 1: Вход'+'</b>'+' - (процесс изобары):'+'<br>'+'<br>'+
                                        'Впускной клапан открывается, бензино-воздушная смесь всасывается в цилиндр, и поршень опускается от ВМТ к ВМТ при постоянном давлении. Это первый спуск поршня.'+'<br>'+'<br>'+
                                        
                                        ' -'+'<b>'+'Время 2: Сжатие'+'</b>'+' - (адиабатический процесс):'+'<br>'+'<br>'+
                                        'Оба клапана закрыты. Поршень движется до ВМТ, поэтому топливо сильно сжимается, в этом случае давление и температура увеличиваются. Из-за высокой скорости, с которой происходит сжатие, этот процесс является адиабатическим (отсутствует теплообмен с внешней средой). Это первый подъем поршня.'+'<br>'+'<br>'+
                                        ' -'+'<b>'+'Время 3 : Возгорание'+'</b>'+' - (изохорный процесс) и '+'<b>'+'разрядка'+'</b>'+ ' - (адиабатический процесс):'+'<br>'+'<br>'+
                                        'Оба клапана закрыты, поршень находится в ВМТ. Электрическая искра, создаваемая свечой зажигания, воспламеняет смесь, которая взрывается и приводит к значительному повышению давления при постоянном объеме. Смесь сгорает с выделением тепла (Q1 = тепло, полученное двигателем). Газы, образующиеся в результате сгорания, расширяются адиабатически, толкая поршень в положение PMI, совершая механическую работу. Это второй спуск поршня.'+'<br>'+'<br>'+

                                        ' -'+'<b>'+'Время 4 : Эвакуация'+'</b>'+' - (изохорный процесс) и (изобарический процесс):'+'<br>'+'<br>'+
                                        'Выпускной клапан S2 открывается, и в этом случае давление внезапно падает до значения атмосферного давления. В этом изохорном процессе смесь отдает тепло Q2 внешней среде. Поршень движется до ВМТ, выталкивая отработанные газы под постоянным давлением. Отсюда цикл возобновляется.'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'КПД теплового двигателя Отто:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'КПД тепловой машины Отто (η) представляет собой физическую величину, равную отношению между механической работой, совершаемой двигателем (L), и полученным теплом (Q).'+'<br>'+'<br> '+
                                        'η = L / Q'+'<sub>'+'1'+'</sub>'+' = 1 - (|Q'+'<sub>'+'дата'+'</sub>' +'|. / Q'+'<sub>'+'получено'+'</sub>'+') = 1 - (|Q'+'<sub>'+'2'+'</sub> ' +'| / Q'+'<sub>'+'1'+'</sub>'+')'+'<br>'+'<br>'+

                                        'Будем считать, что рабочее тело представляет собой идеальный газ и степень сжатия равна ε = V'+'<sub>'+'1'+'</sub>'+'/V'+'<sub>'+'2 '+'</sub>'+'.'+'<br>'+'<br>'+

                                        'Теплости четырех превращений:'+'<br>'+'<br>'+
                                        ' - Q'+'<sub>'+'12'+'</sub>'+' = 0'+'<br>'+
                                        ' - Q'+'<sub>'+'23'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T'+'<sub>'+'3'+'</sub>'+' – T'+'<sub>'+'2'+'</sub>'+') = Q'+'<sub>'+'1'+'</sub>'+' > 0'+'<br>'+
                                        ' - Q'+'<sub>'+'34'+'</sub>'+' = 0'+'<br>'+
                                        ' - Q'+'<sub>'+'41'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T'+'<sub>'+'31'+'</sub>'+' – T'+'<sub>'+'4'+'</sub>'+') = Q'+'<sub>'+'2'+'</sub>'+' < 0'+'<br>'+'<br>'+

                                        ' η = 1 - (1 / ε'+'<sup>'+'y-1'+'</sup>'+')'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Дизельный двигатель:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Дизельный двигатель — это четырехтактный двигатель внутреннего сгорания с дизельным впрыском зажигания.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                    'Время работы дизельного двигателя:'+'<br>'+'<br>'+

                                    '- '+'<b>'+'Время 1: Поступление '+'</b>'+' - (изобарный процесс):'+'<br>'+'<br>'+
                                    'Впускной клапан открывается, в цилиндр всасывается воздух при атмосферном давлении и поршень опускается от ВМТ к ВМТ при постоянном давлении (изобарический процесс). Это первый спуск поршня.'+'<br>'+'<br>'+
                                    '- '+'<b>'+'Время 2: Сжатие'+'</b>'+' - (адиабатический процесс):'+'<br>'+'<br>'+
                                    'Оба клапана закрыты. Поршень поднимается до ВМТ, поэтому воздух сильно сжимается, при этом давление и температура значительно возрастают. Из-за высокой скорости, с которой происходит сжатие, этот процесс является адиабатическим (отсутствует теплообмен с внешней средой). Это первый подъем поршня.'+'<br>'+'<br>'+
                                    '- '+'<b>'+'Время 3: Возгорание'+'</b>'+' - (изобарический процесс) и '+'<b>'+'разрядка'+'</b>'+ ' - (адиабатический процесс):'+'<br>'+'<br>'+
                                    'Оба клапана закрыты, поршень находится в ВМТ. ТНВД впрыскивает дизельное топливо в цилиндры двигателя. Температура воздуха в цилиндре выше температуры зажигания дизеля, поэтому он воспламеняется и сгорает при постоянном давлении, выделяя тепло (Q1 = тепло, получаемое двигателем). Газы, образующиеся в результате сгорания, расширяются адиабатически, толкая поршень в положение PMI, совершая механическую работу. Это второй спуск поршня.'+'<br>'+'<br>'+
                                    '- '+'<b>'+'Время 4: Эвакуация'+'</b>'+' - (изохорный процесс) и (изобарический процесс):'+'<br>'+'<br>'+
                                    'Выпускной клапан S2 открывается, и в этом случае давление внезапно падает до атмосферного. В этом изохорном процессе (при постоянном объеме) смесь отдает тепло Q2 внешней среде. Поршень движется до ВМТ, выталкивая отработанные газы под постоянным давлением. Отсюда цикл возобновляется.'+'</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Тепловой КПД дизельного двигателя:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                    'КПД Дизельной тепловой машины (η) представляет собой физическую величину, равную отношению механической работы, совершаемой двигателем (L), к полученному теплу (Q).'+'<br>'+'<br> '+
                                    'η = L / Q'+'<sub>'+'1'+'</sub>'+' = 1 - (|Q'+'<sub>'+'дал'+'</sub>' +'|. / Q'+'<sub>'+'получено'+'</sub>'+') = 1 - (|Q'+'<sub>'+'2'+'</sub> ' +'| / Q'+'<sub>'+'1'+'</sub>'+')'+'<br>'+'<br>'+

                                    'Будем считать, что рабочее тело представляет собой идеальный газ и степень сжатия равна ε = V'+'<sub>'+'1'+'</sub>'+'/V'+'<sub>'+'2 '+'</sub>'+' и α = V'+'<sub>'+'3'+'</sub>'+'/V'+'<sub>'+'2'+'</sub>'+'<br>'+'<br>'+

                                    'Теплости четырех превращений:'+'<br>'+'<br>'+
                                    '- Q'+'<sub>'+'12'+'</sub>'+' = 0 (адиабатический процесс)'+'<br>'+
                                    '- Q'+'<sub>'+'23'+'</sub>'+' = ν ∙ C'+'<sub>'+'p'+'</sub>'+' ∙ (T '+'<sub>'+'3'+'</sub>'+' – T'+'<sub>'+'2'+'</sub>'+') = Q'+'<sub>'+'1'+'</sub>'+' > 0 (изобарический процесс)'+'<br>'+
                                    '- Q'+'<sub>'+'34'+'</sub>'+' = 0 (адиабатический процесс)'+'<br>'+
                                    '- Q'+'<sub>'+'41'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T '+'<sub>'+'1'+'</sub>'+' – T'+'<sub>'+'4'+'</sub>'+') = Q'+'<sub>'+'2'+'</sub>'+' < 0 (изохорный процесс)'+'<br>'+'<br>'+

                                    'η = 1 - (1 / y) ∙ (a'+'<sup>'+'y-1'+'</sup>'+' / ε'+'<sup>'+'y-1' +'</sup>'+'(a-1))'+                                       
                                    '</li>'+
                                '</ul>'+
                                

                                //Principiul al II-lea

                                '<a name=\"element_target3\">'+'</a>'+
                                '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center>'+'The принцип II'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                
                                '<h2 class=\"p-3\">'+'Формулировка второго закона термодинамики Карно:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Первая формулировка второго закона термодинамики принадлежит Сади Карно, который в 1824 году показал, что существует верхний предел эффективности преобразования тепла в механическую энергию в тепловой машине, который предполагает использование термодинамического цикла рабочая жидкость.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Карно был первым, кто показал, что невозможно эксплуатировать тепловую машину с одним термостатом, для этого необходимы как минимум два термостата. Таким образом, система получает тепло от теплого источника (термостат с T'+'<sub>'+'1'+'</sub>'+') и отдает тепло холодному источнику (термостат с T'+'<sub>'+'2'+'</sub>'+').'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Параметры газа в исходном состоянии: p'+'<sub>'+'1'+'</sub>'+', V'+'<sub>'+'1'+'</sub>'+' и T'+'<sub>'+'1'+'</sub>'+'.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Подносим газовый баллон к нагревателю (термостату с Т'+'<sub>'+'1'+'</sub>'+'). Газ будет поглощать тепло Q'+'<sub>'+'1'+'</sub>'+' от горячего источника и изотермически расширяться (T'+'<sub>'+'1'+'</sub>'+' = const.) и квазистатическое от V'+'<sub>'+'1'+'</sub>'+' до V'+'<sub>'+'2'+' </sub>'+', совершая механическую работу L'+'<sub>'+'1'+'</sub>'+'.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Подносим газовый баллон на теплоизоляционную подставку. Газ адиабатически расширяется до V'+'<sub>'+'3'+'</sub>'+', совершая механическую работу L'+'<sub>'+'2'+'</sub>' + '. Газ охлаждается до температуры T'+'<sub>'+'2'+'</sub>'+' < T'+'<sub>'+'1'+'</sub>'+'. ' +
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Подносим газовый баллон к источнику холода (термостату с Т'+'<sub>'+'2'+'</sub>'+'). Газ отдаст тепло Q'+'<sub>'+'2'+'</sub>'+' и будет изотермически сжиматься (T'+'<sub>'+'2'+'</sub>'+' = const.) и квазистатическое от V'+'<sub>'+'3'+'</sub>'+' до V'+'<sub>'+'4'+'</sub> '+', получая механическую работу L'+'<sub>'+'3'+'</sub>'+'.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Подносим газовый баллон на теплоизоляционную подставку. Газ адиабатически сжимается от V'+'<sub>'+'4'+'</sub>'+' до '+'<sub>'+'1'+'</sub>'+'. Его температура увеличится с T'+'<sub>'+'2'+'</sub>'+' до T'+'<sub>'+'1'+'</sub>'+', получая механическая работа L'+'<sub>'+'4'+'</sub>'+'. Газ возвращается в исходное состояние.'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Выход цикла Карно:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'КПД цикла Карно (η) — это физическая величина, равная отношению механической работы, совершаемой двигателем (L), к полученному теплу (Q'+'<sub>'+'1'+'</sub>'+'). '+'<br>'+'<br>'+
                                        'η = L / Q'+'<sub>'+'1'+'</sub>'+'<br>'+'<br>'+
                                        'L = L'+'<sub>'+'1'+'</sub>'+' + L'+'<sub>'+'2'+'</sub>'+' + L'+ '<sub>'+'3'+'</sub>'+' + L'+'<sub>'+'4'+'</sub>'+
                                    '</li>'+
                                '</ul>'+
                                '<h2 class=\"p-3\">'+'Формулировка второго закона термодинамики Карно:'+'</h2>'+
                                '<ul>'+
                                    '<li>'+
                                        'Выход цикла Карно всегда субъединичный, потому что T'+'<sub>'+'2'+'</sub>'+' ≠ 0'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Производительность цикла Карно зависит только от температуры горячего источника (T'+'<sub>'+'1'+'</sub>'+') и холодного (T'+'<sub>'+'2' +'</sub>'+') и не зависит от рабочего вещества.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'КПД необратимой тепловой машины всегда ниже, чем КПД тепловой машины, обратимо работающей в тех же пределах температуры.'+
                                    '</li>'+
                                '</ul>'),

        //teorieElectromecanica.html
        "teorieElectromecanicaTitle": "Теория электромеханики",
        "teorieElectromecanica": ('<u>' +'<h2 class="p-3" align = center>Электрический ток</h2><br><br><br>' +'</u>'         
                                +'<ul>'
                                    +'<li>'
                                        +'<b>Электрический ток</b> - это упорядоченное движение носителей электрического заряда через электрическую цепь.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'<b>Носители электрического заряда</b>, движение которых вызывает появление электрического тока, могут быть:<br><br>'
                                        +'a) Свободные электроны, в металлах.<br><br>'
                                        +'b) Ионы и электроны, в электролитах (растворы или плавленые кислоты, основания или соли) и в газах.'
                                    +'</li>'
                                +'</ul>'
                                +'<h2 class="p-3">Компоненты электрической цепи:</h2>'
                                +'<ul>'
                                    +'<li>'
                                        +'Электрические генераторы<br><br>'
                                        +'- Генераторы постоянного тока<br><br>'
                                        +'- Генераторы переменного тока'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Электрические приборы<br><br>'
                                        +'- электрическая лампочка<br><br>'
                                        +'- электрический резистор<br><br>'
                                        +'- электрический двигатель<br><br>'
                                    +'</li><br>'

                                    +'<li>'
                                        +'Проводники связи<br>'
                                        +'это провода из алюминия или меди, соединяющие компоненты цепи между собой.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Электрические выключатели<br>'
                                        +'которые открывают и закрывают электрическую цепь. Только когда выключатель находится в положении "включено", ток проходит через цепь.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Конвенциональное направление постоянного электрического тока через цепь идет от положительного клеммы источника к отрицательной клемме, через внешнюю цепь (через потребителей).'
                                    +'</li>'
                                    
                                +'</ul>'
                                +'<h2 class="p-3">Сила тока:</h2>'
                                +'<ul>'
                                    +'<li>'
                                        +'Когда мы приложим электрическое напряжение между двумя точками проводника, появляется электрический ток, то есть направленное движение его свободных электронов, переносящих заряд q = n ∙ e.'
                                    +'</li><br>'
                                    +'<li>'
                                        +'Сила электрического тока (I) - это числовая скалярная физическая величина, равная отношению электрического заряда (q), протекающего через поперечное сечение проводника, к интервалу времени (Δt).'
                                    +'</li><br>'
                                    +'<li>'
                                    +'Характеристика силы электрического тока как физической величины:<br><br>'
                                    +'I = Электрический заряд / Время = q / Δt = (n ∙ e) / Δt<br><br>'
                                    +'n - количество электронов<br><br>'
                                    +'e - заряд электрона (по модулю)<br><br>'
                                    +'e = 1,6 ∙ 10<sup>-19</sup> C'
                                +'</li>'
                            +'</ul>'
                            
                            +'<h2 class="p-3">Электрическое напряжение:</h2>'
                            +'<ul>'
                                +'<li>'
                                    +'<b>Электрические генераторы</b> (электрические источники) - устройства, которые производят и поддерживают электрический ток в цепи, обеспечивая движение электрических носителей по цепи. Они выполняют механическую работу над этими носителями для их перемещения.'
                                +'</li><br>'
                                +'<li>'
                                    +'<b>Электродвижущая сила</b> (сокращенно ЭДС, обозначается E) источника - это скалярная физическая величина, измеряющая механическую работу, совершаемую источником (L<sub>total</sub>) для перемещения единицы электрического заряда (q) вдоль всей цепи.<br><br>'
                                    +'E = L<sub>total</sub> / q<br><br>'
                                    +'Единица измерения электрического напряжения в СИ - вольт (V):<br><br>'
                                    +'[E]<sub>SI</sub> = [L]<sub>SI</sub> / [q]<sub>SI> = Дж / Кл = В (вольт)'
                                +'</li><br>'
                                +'<li>'
                                    +'<b>Общая механическая работа</b>, совершенная источником для перемещения заряда q по всей цепи, равна внешней механической работе, совершенной источником для перемещения заряда q по внешней цепи (L<sub>ext</sub>), и механической работе, совершенной источником для перемещения заряда q по внутренней цепи источника (L<sub>int</sub>):<br><br>'
                                    +'L<sub>Total</sub> = L<sub>ext</sub> + L<sub>int</sub><br><br>'
                                    +'L<sub>Total</sub> / q = (L<sub>ext</sub> / q) + (L<sub>int</sub> / q)'
                                +'</li><br>'
                                +'<li>'
                                +'<b> Электрическое напряжение</b> на выводах (обозначается U) - это скалярная физическая величина, измеряющая механическую работу, совершаемую источником (L<sub>ext</sub>) для перемещения единицы электрического заряда (q) вдоль внешней цепи.<br><br>'
                                 +'U = L<sub>ext</sub> / q'
                             +'</li><br>'
                             +'<li>'
                                 +'<b>Внутреннее напряжение</b> (обозначается u) - это скалярная физическая величина, измеряющая механическую работу, совершаемую источником (L<sub>int</sub>) для перемещения единицы электрического заряда (q) вдоль внутренней цепи.<br><br>'
                                 +'u = L<sub>int</sub> / q'
                             +'</li>'
                             +'<li>'
                                 +'Таким образом, мы получаем связь между тремя электрическими напряжениями в электрической цепи:<br><br>'
                                 +'E = U + u'
                             +'</li><br>'
                             +'<li>'
                                 +'U = Механические работы/Электрическая нагрузка<br><br>'
                                 +'U = L/q'
                             +'</li>'
                         +'</ul>'

                        //Legea lui Ohm
                        +'<a name="element_target"></a>'
                        +'<br><br><br><br><u><h2 class="p-3" align = center>Закон Ома</h2><br><br><br></u>'
                        
                        +'<h2 class="p-3">Электрическое напряжение:</h2>'
                        +'<ul>'
                            +'<li>'
                                +'Измерение электрического сопротивления'
                            +'</li><br>'
                            +'<li>'
                            +'Константа пропорциональности между приложенным напряжением (U) и силой тока (I) известна как электрическое сопротивление проводника.'
                            +'</li><br>'
                            +'<li>'
                                +'Электрическое сопротивление - это физическая величина, показывающая, насколько сильно проводник сопротивляется прохождению электрического тока через него.'
                            +'</li><br>'
                            +'<li>'
                                +'Электрическое сопротивление проводника (R) - это скалярная величина, равная отношению приложенного напряжения (U) к концам проводника и установившемуся току (I) через него, когда температура проводника остается постоянной.'
                            +'</li><br>'
                            +'<li>'
                                +'Характеристика электрического сопротивления как физической величины:<br><br>'
                                +'R = Электрическое напряжение / Электрическая сила тока = U / I<br><br>'
                                +'[R]<sub>SI</sub> = [U]<sub>SI</sub> / [I]<sub>SI</sub> = V / A = Ω(ом)<br><br>'
                                +'Зависимость электрического сопротивления от природы и размеров проводника:<br><br>'
                                +'R = ρ ∙ (l / s) <br><br>'
                                +'l - длина проводника<br>'
                                +'S - площадь поперечного сечения проводника<br>'
                                +'ρ - удельное электрическое сопротивление материала проводника:<br><br>'
                                +'[ρ]<sub>SI</sub> = 1Ω ∙ м'
                            +'</li>'
                        +'</ul>'
                        +'<h2 class="p-3">Закон Ома для части цепи:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Сила тока, проходящего через резистор, зависит от :<br><br>'
                            +'1) Напряжение на концах резистора: чем больше напряжение на концах резистора, тем больше сила тока, проходящего через него.<br><br>'
                            +'2) Электрическое сопротивление: чем больше электрическое сопротивление резистора, тем меньше сила тока, проходящего через резистор.'
                        +'</li><br>'
                        +'<li>'
                            +'Закон Ома для части цепи:<br><br>'
                            +'“Если на концах участка цепи подается напряжение(U), то сила тока (I), протекающего через этот участок цепи, прямо пропорциональна поданному электрическому напряжению (U).“<br><br>'
                            +'I = U / R'
                        +'</li>'
                    +'</ul>'
                    +'<h2 class="p-3">Закон Ома для всей цепи:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Закон Ома для всей цепи:<br><br>'
                            +'“Сила тока в простой цепи прямо пропорциональна ЭДС и обратно пропорциональна общему сопротивлению цепи (R+r).“<br><br>'
                            +'I = E / (R + r)<br><br>'
                            +'1) Закон Ома справедлив в общем для химических источников, так как у них низкое внутреннее сопротивление, но его можно использовать и для других источников.<br><br>'
                            +'2) Если внешнее сопротивление (R) очень мало, например, при коротком замыкании источника проводником, то есть, если R = 0, сила тока, подаваемого источником, становится максимальной:<br><br>'
                            +'I<sub>sc</sub> = E / r (короткозамыкание)<br><br>'
                            +'Это нежелательно, так как большие токи могут вызвать повреждения, а источник быстро истощится.'
                        +'</li>'
                    +'</ul>'
                    +'<h2 class="p-3">Закон Ома для части цепи:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Элементы электрических сетей (ветвистые цепи):<br><br>'
                            +'1. <b>Узел цепи</b> представляет собой пересечение как минимум трех электрических проводов.<br><br>'
                            +'2. <b>Сторона цепи</b> - это участок цепи между двумя последовательными узлами, по которому проходит один и тот же электрический ток.<br><br>'
                            +'3. <b>Контур цепи</b> представляет собой участок цепи, состоящий как минимум из двух сторон, соединенных так, чтобы образовать замкнутую линию (замкнутый многоугольник).<br><br>'
                        +'</li><br>'
                    +'</ul>'

                    //Legea lui Kirchhoff
                    +'<a name="element_target2"></a>'
                    +'<br><br><br><br><u><h2 class="p-3" align = center>Закон Кирхгофа</h2><br><br><br></u>'
                    +'<h2 class="p-3">Первый закон Кирхгофа:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'“Алгебраическая сумма токов, сходящихся в узле цепи, равна нулю“.<br><br>'
                        +'</li>'
                    +'</ul>'
                        +'<h2 align = center>'
                            +'<img src ="img/lege1.png" width = 240>'
                        +'</h2>'
                    +'<ul>'
                        +'Токи I<sub>k</sub> могут быть положительными или отрицательными в зависимости от того, как ток проходит через узел (входит в узел или выходит из узла).<br><br>'
                        +'<li>'
                            +'Другая формулировка первого закона Кирхгофа:<br><br>'
                            +'“Алгебраическая сумма токов, входящих в узел цепи, равна алгебраической сумме токов, выходящих из узла цепи“.'
                        +'</li>'
                    +'</ul>'
                    +'<h2 align = center>'
                        +'<img src ="img/lege1_alt.png" width = 240>'
                    +'</h2>'
                    +'<ul>'
                        +'I<sub>1</sub> + I<sub>2</sub> + I<sub>4</sub> = I<sub>3</sub> + I<sub>5</sub>'
                    +'</ul>'
                    +'<h2 class="p-3">Второй закон Кирхгофа:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'“Алгебраическая сумма ЭДС в узле цепи равна алгебраической сумме напряжений на каждой стороне этого цепного узла“.'
                        +'</li>'
                    +'</ul>'
                    +'<h2 align = center>'
                        +'<img src ="img/lege2.png" width = 240>'
                    +'</h2>'
                    +'<ul>'
                        +'Суммы могут быть положительными или отрицательными в зависимости от направления напряжения или силы тока по отношению к выбранному произвольному направлению для рассматриваемого глаза.<br><br>'
                        +'Для m = количества простых петель, записываются m уравнения с помощью второй теоремы Кирхгофа.'
                    +'</ul>'
                    +'<h2 class="p-3">Знаковые соглашения:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'ЭДС:<br><br>'
                            +' - берется с плюсом, если направление электрического тока через источник идентично выбранному произвольному направлению: + E<br><br>'
                            +' - берется с минусом, если направление электрического тока через источник противоположно выбранному произвольному направлению: - E<br><br>'
                        +'</li><br>'
                        +'<li>'
                            +'Электрическое напряжение:<br><br>'
                            +' - берется с плюсом, если направление электрического тока совпадает с выбранным произвольным направлением (ссылочным направлением): + I ∙ R<br><br>'
                            +' - берется с минусом, если направление электрического тока противоположно выбранному произвольному направлению (ссылочному направлению): - I ∙ R<br><br>'
                        +'</li>'
                    +'</ul>'

                    //Gruparea rezistoarelor și generatoarelor electrice
                    +'<a name="element_target3"></a>'
                    +'<br><br><br><br><u><h2 class="p-3" align = center>Группировка резисторов и электрических генераторов</h2><br><br><br></u>'
                    +'<h2 class="p-3">Группировка резисторов:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Любой элемент цепи (электрический генератор, лампа, резистор, мотор, выключатель) может быть подключен (сгруппирован) с другим (того же типа или другого) двумя способами:<br><br>'
                            +'- В серии<br><br>'
                            +'- Параллельно<br><br>'
                            +'Группа резисторов заменяется одним, называемым эквивалентным резистором. Его сопротивление представляет собой эквивалент сопротивлений данной группы.'
                        +'</li><br>'
                        +'<li>'
                            +'Резисторы, через которые проходит один и тот же ток и находящиеся на одной стороне цепи, образуют группировку в серии, эквивалентную резистору R<sub>s</sub>.<br><br>'
                            +'Эквивалентное сопротивление серии резисторов равно сумме сопротивлений каждого резистора:<br><br>'
                            +'R<sub>s</sub> = R<sub>1</sub> + R<sub>2</sub>'
                        +'</li><br>'
                        +'<li>'
                            +'Резисторы, находящиеся на разных сторонах между теми же двумя узлами цепи, имеющие одинаковое напряжение на концах, образуют группировку параллельно, эквивалентную резистору R<sub>p</sub>.<br><br>'
                            +'Обратное эквивалентное сопротивление параллельной группы резисторов равно сумме обратных сопротивлений каждого резистора:<br><br>'
                            +'1 / R<sub>p</sub> = (1 / R<sub>1</sub>) + (1 / R<sub>2</sub>)'
                        +'</li>'
                    +'</ul>'
                    +'<h2 class="p-3">Группировка идентичных генераторов:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Группировка нескольких источников дает "эквивалентный источник" с эквивалентной ЭДС и эквивалентным внутренним сопротивлением.'
                        +'</li><br>'
                        +'<li>'
                            +'Для группировки в серии из n идентичных источников: ЭДС серии генераторов:<br><br>'
                            +'E<sub>s</sub> = n · E'
                        +'</li><br>'
                        +'<li>'
                            +'Внутреннее сопротивление серии идентичных генераторов:<br><br>'
                            +'r<sub>s</sub> = n · r'
                        +'</li><br>'
                        +'<li>'
                            +'Для группировки параллельно из n идентичных источников: ЭДС параллельной группы генераторов:<br><br>'
                            +'E<sub>p</sub> = E<sub>1</sub> = E<sub>2</sub> = … = E<sub>n</sub>'
                        +'</li><br>'
                        +'<li>'
                            +'Внутреннее сопротивление параллельной группы идентичных генераторов:<br><br>'
                            +'r<sub>p</sub> = r / n'
                        +'</li>'
                    +'</ul>'

                    //Eneriga si puterea electrica
                    +'<a name="element_target4"></a>'
                    +'<br><br><br><br><u><h2 class="p-3" align = center>Энергия и электрическая мощность</h2><br><br><br></u>'
                    +'<h2 class="p-3">Электрическая энергия:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Электрическая энергия (обозначается W) источника измеряет механическую работу, которую он выполняет для перемещения электрического заряда (q) через поперечное сечение цепи в течение интервала времени (Δt):<br><br>'
                            +'W = L = E ∙ q<br><br>'
                            +'Но q = I ∙ Δt (из формулы силы тока)<br><br>'
                            +'W<sub>tot</sub> = E ∙ I ∙ Δt (энергия, потребляемая на всей цепи)<br><br>'
                            +'W<sub>ext</sub> = U ∙ I ∙ Δt (энергия, потребляемая на внешней цепи)<br><br>'
                            +'W<sub>int</sub> = u ∙ I ∙ Δt (энергия, потребляемая на внутренней цепи)<br><br>'
                            +'W = U ∙ I ∙ Δt = R ∙ I<sup>2</sup> ∙ Δt = (U<sup>2</sup> / R) ∙ Δt<br><br>'
                            +'[W]<sub>SI</sub> = J (джоуль)'
                        +'</li><br>'
                    +'</ul>'
                    +'<h2 class="p-3">Электрическая мощность:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Электрическая мощность (P) - это физическая величина, измеряющая скорость передачи электрической энергии в единицу времени.<br><br>'
                            +'P = W / Δt = U ∙ I = R ∙ I<sup>2</sup> = (U<sup>2</sup> / R)<br><br>'
                            +'[P]<sub>SI</sub> = J / с = W (ватт)'
                        +'</li><br>'
                        +'<li>'
                            +'Электрическая мощность электрического генератора с ЭДС E и внутренним сопротивлением r:<br><br>'
                            +'P = W<sub>tot</sub> / Δt = E ∙ I = (R + r) ∙ I<sup>2</sup> = E<sup>2</sup> / (R + r)'
                        +'</li>'
                    +'</ul>'

                    +'<h2 class="p-3">Электрический КПД:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Электрическая энергия электрического генератора подается во внешнюю цепь (W<sub>полезная</sub> - полезная энергия = внешняя энергия), оставшаяся часть энергии поступает внутрь генератора (внутренняя энергия).<br><br>'
                            +'Электрический КПД приемника (потребителя) определяется отношением:<br><br>'
                            +'η = W<sub>полезная</sub> / W<sub>общая</sub> = P<sub>внешняя</sub> / P<sub>общая</sub>'
                        +'</li><br>'
                        +'<li>'
                            +'Для простой цепи, состоящей из источника с ЭДС E и внутренним сопротивлением r, подключенного к резистору сопротивлением R, электрический КПД определяется соотношением:<br><br>'
                            +'η = (U ∙ I) / (E ∙ I) = U / E = R / (R + r)'
                        +'</li><br>'
                        +'<li>'
                            +'Мощность, развиваемая резистором, максимальна при:<br><br>'
                            +'P (R) = E<sup>2</sup> / (4 ∙ r)<br><br>'
                            +'то есть при:<br><br>'
                            +'R = r'
                        +'</li>'
                    +'</ul>'
                    +'<h2 class="p-3">Закон Джоуля:</h2>'
                    +'<ul>'
                        +'<li>'
                            +'Тепловое воздействие электрического тока (эффект Джоуля) состоит в нагреве проводника при прохождении через него электрического тока.<br><br>'
                            +'Закон Джоуля количественно измеряет выделяющееся тепло при прохождении электрического тока через проводник.'
                        +'</li><br>'
                        +'<li>'
                            +'Закон Джоуля:<br><br>'
                            +'Тепло Q, выделяемое при прохождении электрического тока через проводник, пропорционально сопротивлению проводника R, квадрату силы тока I<sup>2</sup> и временному интервалу Δt, в течение которого протекает электрический ток.<br><br>'
                            +'Q = R ∙ I<sup>2</sup> ∙ Δt'
                        +'</li>'
                    +'</ul>'),

        //teorieOptica.html
        "teorieOpticaTitle": "Теория оптики",
        "teorieOptica": ('<u>' +
                        '<h2 class="p-3" align=center>Геометрическая оптика</h2><br><br><br>' +
                        '</u>' +
                        '<h2 class="p-3">Отражение света:</h2>' +
                        '<ul>' +
                            '<li>' +
                                'Принцип Ферма:<br><br>' +
                                '“Свет распространяется между двумя точками A и B таким образом, чтобы его оптический путь и, следовательно, время, необходимое для преодоления расстояния AB, были минимальными.”<br><br>' +
                                'Отражение света - это явление, при котором свет возвращается в первую среду, меняя направление распространения, когда он встречает другую среду (поверхность, разделяющую две различные оптические среды).' +
                            '</li><br>' +
                            '<li>' +
                                'Законы отражения:<br><br>' +
                                '- Закон I:<br><br>' +
                                'Луч инцидент, нормаль и луч отраженные являются копланарными (принадлежат одной плоскости).<br><br>' +
                                '- Закон II:<br><br>' +
                                'Угол падения (i) равен углу отражения (r).' +
                            '</li><br>' +
                            '<li>' +
                                'Плоские зеркала:<br><br>' +
                                'Зеркала - это гладкие и блестящие поверхности, на которых отражается свет.<br><br>' +
                                'Плоские зеркала имеют плоскую (прямую) поверхность и являются теми, которые мы видим ежедневно в доме и в которые мы смотрим каждый день.<br><br>' +
                                'Вот их символ (заштрихованная часть - это часть, которая не отражает свет):<br><br>' +
                            '</li>' +
                        '</ul>' +
                        '<h2 align=center>' +
                        '<img style="border: 2px solid #1b4188" src="img/optica1.png" width=100>' +
                        '</h2><br>' +
                        '<ul>' +
                            '<li>' +
                                'Формирование изображения объекта в плоском зеркале:<br><br>' +
                                '- На вертикальной плоскости рисуется плоское зеркало.<br><br>' +
                                '- Через центр зеркала перпендикулярно к зеркалу (по горизонтали) проводится основная оптическая ось.<br><br>' +
                                '- Объект AB изображается в виде сегмента со стрелкой перед зеркалом.<br><br>' +
                                '- Проводится первый луч из вершины объекта (B), перпендикулярно к зеркалу и продолжается пунктиром позади зеркала (поскольку он перпендикулярен поверхности зеркала, он не изменяет своего направления при отражении).<br><br>' +
                                '- Второй луч из вершины объекта (B) направлен под углом к зеркалу, и отраженный луч этого луча рисуется, соблюдая законы отражения (угол i = угол r).<br><br>' +
                                '- Отраженный луч продолжается пунктиром позади зеркала до тех пор, пока не пересечется с продолжением первого луча. Точка их пересечения обозначается B\', что представляет собой вершину изображения объекта в зеркале.<br><br>' +
                                '- Из точки B\' проводится перпендикуляр к основной оптической оси, и его нога обозначается A\', что представляет собой базу изображения объекта в зеркале. Стрелку помещают в B\'.' +
                            '</li>' +
                        '</ul>'+
                        +'<h2 align=center>' +
                        '<img style="border: 2px solid #1b4188" src="img/optica2.png" width=300>' +
                        '</h2><br>' +
                        '<ul>' +
                            '<li>' +
                            'Характеристики изображения A\'B\':<br><br>' +
                            '- Виртуальное, так как формируется в пересечении продолжений отраженных лучей (за зеркалом)<br><br>' +
                            '- Прямое<br><br>' +
                            '- Равное объекту AB (y<sub>1</sub> = y<sub>2</sub>)<br>' +
                            '- Объект и изображение симметричны относительно зеркала<br>' +
                            'Формула плоского зеркала: x<sub>2</sub> = -x<sub>1</sub>, так как R → ∞ (нет фокусов)<br><br>' +
                            'Линейное увеличение поперечное: β = 1' +
                            '</li>' +
                        '</ul>' +
                        '<ul>' +
                            '<li>' +
                            'Характеристика изображения (A\'B\') объекта в плоском зеркале:<br><br>' +
                            'Объект AB и изображение A\'B\' симметричны относительно зеркала (изображение формируется за зеркалом, на том же расстоянии от зеркала, что и объект).<br><br>' +
                            'Изображение виртуальное, так как формируется в пересечении продолжений отраженных лучей (его нельзя поймать на экране или фотопленке).<br><br>' +
                            'Изображение A\'B\' такое же по размеру, как и объект AB.' +
                            '</li><br>' +
                        '</ul>'+
                    '<h2 class="p-3">Сферические зеркала:</h2>' +
                    '<ul>' +
                        '<li>' +
                        'Сферические зеркала представляют собой части сферы (сферические купола), которые отражают свет, падающий на них.<br><br>' +
                        'Классификация сферических зеркал:<br><br>' +
                        'a) Вогнутые зеркала отражают с внутренней, вогнутой частью сферической поверхности (то есть имеют отражающую поверхность внутри сферы). Они преобразуют параллельный световой пучок в сходящийся.' +
                        '</li>' +
                    '</ul>'
                    +'<h2 align = center>' +
                    '<img style = "border: 2px solid #1b4188" src ="img/optica3.png" width = 300>' +
                    '</h2><br>' +
                    '<ul>' +
                        '<li>' +
                        'b) Выпуклые зеркала отражают с внешней, выпуклой частью сферической поверхности (то есть имеют отражающую поверхность снаружи сферы). Они преобразуют параллельный световой пучок в расходящийся.' +
                        '</li>' +
                    '</ul>' +
                    '<h2 align = center>' +
                    '<img style = "border: 2px solid #1b4188" src ="img/optica4.png" width = 300>' +
                    '</h2><br>' +
                    '<ul>' +
                        '<li>' +
                        'Формирование изображения объекта в сферическом зеркале<br><br>' +
                        'Чтобы сформировать изображение объекта в сферическом зеркале, необходимо провести как минимум два луча:<br><br>' +
                        'Из вершины объекта А направить прямую параллельно главной оптической оси до поверхности зеркала, откуда она отражается через фокус.<br><br>' +
                        'Из вершины объекта А направить прямую через центр кривизны до пересечения с первым лучом (он отражается в том же направлении).<br><br>' +
                        'Оба луча продлеваются до пересечения. Их точка пересечения - вершина изображения, А\'. Из этой точки проводится перпендикуляр к главной оптической оси. Нога перпендикуляра, В\', является основанием формируемого изображения.' +
                        '</li>' +
                    '</ul>' +
                
                '<h2 align = center>' +
                '<img style = "border: 2px solid #1b4188" src ="img/optica5.png" width = 300>' +
                '</h2><br>' +
                '<ul>' +
                    '<li>' +
                    'Формула сферических зеркал:<br> (1 / x<sub>2</sub>) + (1 x<sub>1</sub>) = 1 / f = 2 / R<br><br>' +
                    'Линейное поперечное увеличение:<br>' +
                    'β = y<sub>2</sub> / y<sub>1</sub> = - x<sub>2</sub> / x<sub>1</sub>' +
                    '</li>' +
                    '</ul>' +
                    '<ul>' +
                    '<li>' +
                    'Изображение объекта в вогнутом зеркале зависит от расстояния от объекта до зеркала.' +
                    '</li><br>' +
                    '<li>' +
                    'Тип зеркала:<br><br>' +
                    '- Вогнутое:<br>' +
                    '|x<sub>1</sub>| > 2|f| - Реальное - Уменьшенное - Перевёрнутое<br>' +
                    '|x<sub>1</sub>| = 2|f| - Реальное - Приблизительно - Перевёрнутое<br>' +
                    '2|f| > |x<sub>1</sub>| > |f| - Реальное - Увеличенное - Перевёрнутое<br>' +
                    '|x<sub>1</sub>| < |f| - Виртуальное - Увеличенное - Прямое<br><br>' +
                    '- Выпуклое:<br>' +
                    'Любое |x<sub>1</sub>| - Виртуальное - Уменьшенное - Прямое' +
                    '</li><br>' +
                '</ul>'+
                '<h2 class="p-3">Преломление света:</h2>' +
                '<ul>' +
                    '<li>' +
                    'Законы преломления света:<br><br>' +
                    'Показатель преломления (обозначается как n) прозрачной среды определяется отношением скорости света в вакууме (c) к скорости света в данной среде (v).<br><br>' +
                    'n = c / v<br><br>' +
                    'Преломление света - это явление, при котором свет меняет направление распространения при прохождении через поверхность раздела двух различных прозрачных сред.' +
                    '</li><br>' +
                    '<li>' +
                    'Законы преломления<br><br>' +
                    'Закон I преломления:<br>' +
                    'Падающий луч (SI), нормаль к поверхности раздела (NI) и преломленный луч (IR\') находятся в одной плоскости.<br><br>' +
                    'Закон II преломления:<br>' +
                    'Отношение угла падения (i) к синусу угла преломления (r\') равно отношению абсолютного показателя преломления второй среды к абсолютному показателю преломления первой среды:<br><br>' +
                    'sin i / sin r\' = n<sub>2</sub> / n<sub>1</sub> = n<sub>21</sub><br><br>' +
                    'n<sub>21</sub> = показатель преломления второй среды относительно первой' +
                    '</li><br>' +
                    '<li>' +
                    'Последствия преломления света:<br><br>' +
                    'Последствия преломления света возникают из-за изменения направления преломленного луча относительно направления падающего луча, изменяя изображение объектов, находящихся в воде:<br><br>' +
                    '- Объект, находящийся в воде, кажется разорванным на поверхности воды, как будто часть воды объекта не продолжается в воздухе.<br><br>' +
                    '- Объект, находящийся в воде, воспринимается нашим глазом ближе к поверхности, чем он есть на самом деле. Таким образом, чистые воды гораздо глубже, чем кажется.<br><br>' +
                    '- Объекты, находящиеся в воде, кажутся большими, чем на самом деле, вода ведет себя как лупа.<br><br>'+
                    '</li>'+
                '</ul>'
                    +'<h2 class="p-3">Призма оптическая:</h2>' +
                    '<ul>' +
                        '<li>' +
                        'Преломление монохроматического света в оптической призме:<br><br>' +
                        'Призма - это прозрачная среда (с коэффициентом преломления n), ограниченная двумя плоскими поверхностями, которые образуют между собой плоский угол, называемый углом призмы (A).<br><br>' +
                        '</li>' +
                        '</ul>' +
                        '<h2 align = center>' +
                        '<img style = "border: 2px solid #1b4188" src ="img/optica6.png" width = 300>' +
                        '</h2><br>' +
                        '<ul>' +
                        '<li>' +
                        'Когда падающий луч (SI) попадает на грань AB призмы, он преломляется (первый преломленный луч II\'), приближаясь к нормали NI (n<sub>воздух</sub> < n<sub>призма</sub>) по закону:<br>' +
                        'sin i = n ∙ sin r<br><br>' +
                        'Луч II\' преломляется при падении на грань AC призмы в точке I\', удаляясь от нормали NN\' (n<sub>призма</sub> > n<sub>воздух</sub>), по закону:<br>' +
                        'n ∙ sin r\' = sin i\'<br><br>' +
                        'Угол между направлением падающего луча (SI) и направлением выходящего луча (I\'R) называется углом отклонения (δ), который имеет значение:<br>' +
                        'δ = i + i\' – (r + r\') = i + i\' – A<br><br>' +
                        '</li>' +
                    '</ul>'+
                    '<ul>' +
                        '<li>' +
                        'Для определения условия выхода (т.е. чтобы падающий луч вышел из призмы), необходимо, чтобы на грани AC не происходило полного внутреннего отражения луча II\', то есть:<br>' +
                        'r\' ≤ l (предел угла).<br><br>' +
                        'Так как A = r + r\', то r\' = A – r<br>' +
                        'r ≥ A – l → sin r ≥ sin (A – l)<br><br>' +
                        'Но из закона преломления у нас:<br>' +
                        'sin r = sin i / n <br>' +
                        'sin i / n ≥ sin (A - l)<br><br>' +
                        '</li>' +
                        '<li>' +
                        'Максимальный угол падения:<br>' +
                        'i = 90° → sin 90° = 1 <br>' +
                        '1 / n ≥ sin(A - l)<br>' +
                        'sin l = 1 / n<br>' +
                        'sin l ≥ sin(A-l) или A ≤ 2 ∙ 1<br>' +
                        'sin l = 1 / n → 1 = arc sin 1 / n<br>' +
                        '</li>' +
                        '<li>' +
                        'Падающий на призму луч может выйти из призмы, если его угол преломления (A) удовлетворяет условию:<br>' +
                        'A ≤ 2 ∙ arc sin 1/n<br><br>' +
                        'Если у призмы A > 2 ∙ arc sin 1/n, все лучи, падающие на призму, будут полностью отражаться на грани AC.' +
                        '</li><br>' +
                        '<li>' +
                        'Когда угол падения (i) изменяется, а также изменяется угол отклонения (δ), принимая всегда значения, большие определенного минимального значения (δ<sub>m</sub>).<br><br>' +
                        'Когда i = i\' и r = r\', получаем минимальное значение угла отклонения (δ<sub>m</sub>):<br>' +
                        'δ<sub>m</sub> = 2 ∙ i – A<br><br>' +
                        'Если экспериментально измеряем минимальный угол отклонения, можно определить показатель преломления призмы по формуле:<br>' +
                        'n = sin((A + <sub>m</sub>) / 2) / sin (A / 2)' +
                        '</li><br>' +
                        '</ul>'
                    +'<h2 class="p-3">' + 'Типы линз:' + '</h2>' +
                    '<ul>' +
                        '<li>' +
                        'Линзы - это прозрачные тела, имеющие по меньшей мере одну сферическую поверхность.<br><br>' +
                        'Элементы линзы:<br><br>' +
                        'Главная оптическая ось, проведенная через середину линзы.<br><br>' +
                        'Оптический центр линзы (O), расположенный в точке пересечения линзы с главной оптической осью.<br><br>' +
                        'Два фокуса, расположенные с обеих сторон от оптического центра линзы на равных расстояниях.<br><br>' +
                        'Фокус, расположенный слева от O, называется отрицательным фокусом / объектом (F<sub>1</sub>), потому что он находится на оси отрицательных чисел.<br><br>' +
                        'Фокус, расположенный справа от O, называется положительным фокусом / изображением (F<sub>2</sub>), потому что он находится на оси положительных чисел.<br><br>' +
                        'Центры кривизны (C<sub>1</sub> и C<sub>2</sub>) диоптров, ограничивающих линзу, расположены с обеих сторон от O на двойном расстоянии от OF.' +
                        '</li>' +
                    '</ul>' +
                    '<h2 class="p-3">' + 'Классификация линз:' + '</h2>' + 
                    '<ul>' +   
                    '- <b>Собирающие линзы</b> (выпуклые) - это линзы, которые преобразуют параллельный световой пучок в собирающийся. Они преломляют свет через положительный фокус, поэтому их также называют положительными линзами. Они увеличивают изображение. Они толще в середине и тоньше на концах.<br><br>' +
                    '- <b>Рассеивающие линзы</b> (вогнутые) - это линзы, которые преобразуют параллельный световой пучок в расходящийся. Они преломляют свет через отрицательный фокус, поэтому их также называют отрицательными линзами. Они уменьшают изображение. Они толще на концах и тоньше в середине.<br><br>' +
                    '<li>' +
                    'Формирование изображения объекта в линзах: <br><br>' +
                    'Чтобы сформировать изображение объекта в собирающей линзе, необходимо провести два луча:<br><br>' +
                    '- Нарисуйте символ собирающей линзы.<br>' +
                    '- Проведите через ее центр главную оптическую ось.<br>' +
                    '- Поместите элементы линзы (O, F<sub>1</sub>, F<sub>2</sub>, C).<br>' +
                    '- Нарисуйте объект (AB) перед линзой (слева), в виде сегмента со стрелкой.<br>' +
                    '- Проведите луч, выходящий из вершины объекта (B), параллельно оптической оси, до линзы, затем направьте его через положительный фокус (F<sub>2</sub>), потому что собирающая линза преломляет свет через положительный фокус.<br>' +
                    '- Проведите второй луч из вершины объекта, который проходит через оптический центр линзы (O). Продолжите эти лучи до их пересечения. В точке пересечения поместите B\', который является вершиной изображения (im) объекта (ob) AB.<br>' +
                    '- Из B\' проведите перпендикуляр к оптической оси, обозначим его A\' и он представляет собой основание im A\'B\'.<br>' +
                    '- Положите вершину стрелки в B\', и таким образом получите изображение объекта AB в собирающей линзе.'+
                    '</li><br></br>'+
                    '<li>' +
                    'В зависимости от расстояния между объектом и линзой, в собирающей линзе существуют три типа изображений.<br><br>' +
                    'I. Когда объект находится в интервале (-∞) и C, изображение объекта имеет следующие характеристики :<br>' +
                    '- Меньше, чем объект AB.<br>' +
                    '- Отраженное<br>' +
                    '- Реальное (образуется на пересечении преломленных лучей, может быть отображено на экране).<br><br>' +
                    'II. Когда объект находится в интервале C и F1, изображение объекта имеет следующие характеристики:<br>' +
                    '- Больше, чем объект AB.<br>' +
                    '- Отраженное<br>' +
                    '- Реальное (образуется на пересечении преломленных лучей, может быть отображено на экране).<br><br>' +
                    'III. Когда объект находится в интервале F1 и O, изображение объекта имеет следующие характеристики:<br>' +
                    '- Больше, чем объект.<br>' +
                    '- Прямое<br>' +
                    '- Виртуальное (образуется на пересечении продолжений преломленных лучей, не может быть отображено на экране).' +
                    '</li><br>' +
                        '<li>' +
                            'Чтобы сформировать изображение объекта в рассеивающей линзе, необходимо провести два луча:<br><br>' +
                            '- Нарисуйте символ рассеивающей линзы.' +
                            '- Проведите через ее центр главную оптическую ось.' +
                            '- Поместите элементы линзы (O, F<sub>1</sub>, F<sub>2</sub>, C).<br>' +
                            '- Нарисуйте объект (AB) перед линзой (слева) в виде сегмента со стрелкой.<br>' +
                            '- Проведите луч, выходящий из вершины объекта (B), параллельно оптической оси, до линзы, затем направьте его через отрицательный фокус (F<sub>1</sub>), потому что рассеивающая линза отклоняет свет через отрицательный фокус.<br>' +
                            '- Проведите второй луч из вершины объекта, который проходит через оптический центр линзы (O). Продолжите эти лучи до их пересечения. В точке пересечения поместите B\', которая является вершиной изображения (im) объекта (ob) AB.<br>' +
                            '- Из B\' проведите перпендикуляр к оптической оси, обозначим его A\' и он представляет собой основание im A\'B\'.<br>' +
                            '- Положите вершину стрелки в B\', и таким образом получите изображение объекта AB в рассеивающей линзе.<br>' +
                        '</li><br>' +
                        '<li>' +
                            'В рассеивающей линзе мы получаем изображение, которое имеет одни и те же характеристики независимо от расстояния объекта до линзы:<br><br>' +
                            '- Меньше, чем объект.<br>' +
                            '- Прямое<br>' +
                            '- Виртуальное (образуется на пересечении продолжений преломленных лучей, его нельзя отобразить на экране).' +
                        '</li>'+
                    '</ul>'+
                    
                    '<h2 class="p-3">Формулы тонких линз:</h2>' +
                        '<ul>' +
                            '<li>' +
                                'Знаковые соглашения:<br><br>' +
                                'x<sub>1</sub> = расстояние от объекта AB до линзы, которое всегда принимается отрицательным, поскольку оно находится на оси отрицательных чисел.<br><br>' +
                                'x<sub>2</sub> = расстояние от изображения A\'B\' до линзы, которое считается положительным, когда изображение реальное (образуется за линзой, на оси положительных чисел) и отрицательным, когда изображение виртуальное (образуется перед линзой, на оси отрицательных чисел).<br><br>' +
                                'y<sub>1</sub> = высота объекта AB, которая считается положительной, если объект находится выше главной оптической оси, и отрицательной, если объект находится ниже главной оптической оси.<br><br>' +
                                'y<sub>2</sub> = высота изображения A\'B\', которая считается положительной, когда изображение прямое (выше главной оптической оси) или отрицательной, когда изображение перевернутое (ниже главной оптической оси).<br><br>' +
                                'Фокусное расстояние считается положительным (f > 0) для собирающих линз и отрицательным (f < 0) для рассеивающих линз.' +
                            '</li><br>' +
                            '<li>' +
                                'Основная формула тонких линз:<br><br>' +
                                '(1 / x<sub>2</sub>) - (1 / x<sub>1</sub>) = 1 / f' +
                            '</li><br>' +
                            '<li>' +
                                'Поперечное линейное увеличение (β) - это безразмерная физическая величина, равная отношению высоты изображения к высоте объекта.<br><br>' +
                                'β = y<sub>2</sub> / y<sub>1</sub> = x<sub>2</sub> / x<sub>1</sub>' +
                            '</li><br>' +
                            '<li>' +
                                'Сходимость линзы (C) - это физическая величина, равная обратному фокусному расстоянию (f).<br><br>' +
                                'C = 1 / f<br><br>' +
                                '[C]<sub>SI</sub> = m<sup>-1</sup> = δ(dioptrie)<br>' +
                                'Собирающая линза имеет C > 0 <br><br>' +
                                'Рассеивающая линза имеет C < 0' +
                            '</li><br>' +
                        '</ul>'+
                    '<h2 class="p-3">Соединения линз:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Система, состоящая из двух или более линз, имеющих одну и ту же оптическую ось, называется <b>соединением линз</b>.<br><br>' +
                            'Изображение, созданное первой линзой, становится объектом для следующей линзы и так далее до последней линзы, которая дает конечное изображение.' +
                            '</li>' +
                            '<li>' +
                            'Наиболее используемая система - это система с прилегающими (прилегающими) линзами, в которой расстояние (d) между линзами равно нулю, с общим оптическим центром и фокусным расстоянием изображения (F<sub>2</sub>) первой линзы (L) совпадает с фокусным расстоянием объекта (F\'2).<br><br>' +
                            'Для такой системы, состоящей из k линз, у нас есть:<br><br>' +
                            '1. Обратное фокусное расстояние системы линз (F) равно сумме обратных фокусных расстояний линз соединения:<br><br>' +
                            '1 / F = (1 / f<sub>1</sub>) + (1 / f<sub>2</sub>) + ... + (1 / f<sub>k</sub>)<br><br>' +
                            '2. Сходимость системы (C) равна сумме сходимостей составляющих линз:<br><br>' +
                            'C = C<sub>1</sub> + C<sub>2</sub> +...+ C<sub>k</sub><br><br>' +
                            '3. Линейное поперечное увеличение системы (β) равно произведению поперечных увеличений составляющих линз:<br><br>' +
                            'β = β<sub>1</sub> ∙ β<sub>2</sub> ∙… β<sub>k</sub><br><br>' +
                            'Если обозначить x\'2 расстояние от конечного изображения до второй линзы L2 и x1 расстояние от объекта до первой линзы L1, у нас есть отношение :<br><br>' +
                            '(1 / x\'<sub>2</sub>) - (1 / x<sub>1</sub>) = (1 / f<sub>1</sub>) + (1 / f<sub>2</sub>) = 1 / f = C<sub>1</sub> + C<sub>2</sub> = C' +
                        '</li>' +
                        '<li>' +
                            'Ещё одной системой линз является телескопическая система, которая является афокальной, в которой исходный пучок (выходной) параллельного пучка остаётся таковым. Фокусное расстояние изображения первой линзы (F<sub>2</sub>) совпадает с фокусным расстоянием объекта второй линзы (F'+'<sub>'+'1'+'</sub>'+').'+'<br>'+'<br>' +
                            '1. Расстояние между линзами:<br><br>' +
                            'd = f<sub>1</sub> + f<sub>2</sub><br><br>' +
                            '2. Поперечное линейное увеличение:<br><br>' +
                            'β = y<sub>2</sub> / y<sub>1</sub> = - f<sub>2</sub> / f<sub>1</sub><br><br>' +
                            'Чтобы найти положение (x\'1) промежуточного изображения относительно первой линзы (L<sub>1</sub>) и размер изображения, образованного первой линзой, применяем формулу сопряженных точек для L<sub>1</sub>:<br><br>' +
                            'x\'<sub>1</sub> = x<sub>2</sub>f<sub>1</sub> / (x<sub>1</sub> + f<sub>1</sub>)<br><br>' +
                            'y\'<sub>1</sub> = y<sub>1</sub>(x\'<sub>1</sub> / x<sub>1</sub>) = y<sub>1</sub> (f<sub>1</sub> / (x<sub>1</sub> + f<sub>1</sub>))<br><br>' +
                            'Зная расстояние между линзами, можем вычислить положение промежуточного изображения (образованного L<sub>1</sub>) относительно линзы L<sub>2</sub>:<br><br>' +
                            'd = x\'<sub>1</sub> + (- x<sub>2</sub>)<br><br>' +
                            'x<sub>2</sub> = x\'<sub>1</sub> - d<br><br>' +
                            'Чтобы найти положение (x\'2) конечного изображения относительно второй линзы (L<sub>2</sub>) и размер изображения, образованного второй линзой, применяем формулу сопряженных точек для L<sub>2</sub>:<br><br>' +
                            'x\'<sub>2</sub> = x<sub>2</sub>f<sub>2</sub> / (x<sub>2</sub> + f<sub>1</sub>)<br><br>' +
                            'y\'<sub>2</sub> = y<sub>1</sub>(x\'<sub>2</sub> / x<sub>2</sub>) = y<sub>1</sub> (f<sub>2</sub> / (x<sub>2</sub> + f<sub>2</sub>))<br><br>' +
                        '</li>' +
                    '</ul>'+

                    //Optica ondulatorie
                    '<a name="element_target"></a>' +
                    '<br><br><br><br><u><h2 class="p-3" align = center>Оптическая волна</h2><br><br><br></u>' +
                    '<h2 class="p-3">Дисперсия света:</h2>'+
                    '<ul>' +
                        '<li>' +
                            '<b>Оптика</b> - это раздел физики, изучающий природу, свойства и явления, испытываемые светом.<br><br>' +
                            'Оптика состоит из трех частей:<br><br>' +
                            '1. Геометрическая оптика, которая работает с лучами света (направления распространения света), не учитывая его природу. Изучаемые явления включают отражение, преломление и полное внутреннее отражение света.<br><br>' +
                            '2. Волновая оптика изучает явления интерференции, дифракции и поляризации, в которых проявляется волновая природа света, более точно как электромагнитное излучение.<br><br>' +
                            '3. Фотоника (корпускулярная оптика) изучает фотоэффект, эффект Комптона, испускание и поглощение света и т. д., выявляя корпускулярную природу света (фотоны).<br><br>' +
                            'Дисперсия белого света была впервые изучена Ньютоном в 1672 году, когда он получил спектр белого света на оптической призме.<br><br>' +
                            'Феномен изменения показателя преломления с длиной волны называется дисперсией света.<br><br>' +
                            'Таким образом, когда свет проходит через призму, он расщепляется на цветные пучки, как в радуге.<br><br>' +
                            'В вакууме все электромагнитные волны распространяются с одинаковой скоростью, независимо от их длины волны, и поэтому мы говорим, что вакуум является недисперсивной средой. Если бы призма была вакуумирована, пучок белого света не разлагался бы, а только отклонялся от направления падения вследствие явления преломления (то есть изменения направления распространения при переходе из одной среды в другую).<br><br>' +
                            'Показатель преломления (обозначается как n) прозрачной среды определяется отношением скорости света в вакууме (c) к скорости света в данной среде (v).<br><br>' +
                            'n = c / v<br><br>' +
                            'c = скорость света в вакууме = 300.000.000 м/с<br><br>' +
                            'v = скорость света в данной среде<br><br>' +
                            'Все прозрачные среды (вода, стекло, алмаз и т. д.), характеризующиеся определенным показателем преломления больше единицы, вызывают дисперсию света.<br><br>' +
                            'Однако показатель преломления постоянен только для монохромного света.<br><br>' +
                            'Для белого света, состоящего из семи лучей различных цветов и длин волн, показатель преломления уже не является постоянным, а изменяется в зависимости от длины волны этих лучей.<br><br>' +
                            'Если показатель преломления призмы изменяется, призма будет преломлять эти лучи под разными углами.<br><br>'+
                            'В общем, при нормальном рассеянии в этих прозрачных средах показатель преломления увеличивается с уменьшением длины волны, поэтому фиолетовые лучи (с меньшей длиной волны, 400 нм) будут сильнее преломляться, чем красные (с большей длиной волны, 700 нм, чем фиолетовые).<br><br>'+
                            'Если λ<sub>фиолетовый</sub> < λ<sub>красный</sub> → n<sub>фиолетовый</sub> > n<sub>красный</sub> → v<sub>фиолетовый</sub> < v<sub>красный</sub>.<br><br>'+
                            'Цветные пучки проходят через призму с разными скоростями, поэтому они выходят из призмы под разными углами.<br><br>'+
                            'Фиолетовые лучи выходят менее наклонно по отношению к оптической оси, потому что они распространяются с меньшей скоростью через материал призмы, чем красный луч, проходя при этом меньшее расстояние, чем красный луч.<br><br>'+
                        '</li><br>' +
                    '</ul>'+
                    '<h2 class="p-3">Интерференция света:</h2>'+
                    '<ul>' +
                    '<li>' +
                        'Нелокализованная интерференция света в устройстве Юнга.<br><br>' +
                        'ИНТЕРФЕРЕНЦИЯ - это явление наложения двух когерентных волн (с одинаковой частотой и одинаковым фазовым сдвигом), которые встречаются в точке пространства.<br><br>' +
                        'В определенных точках пространства образуются интерференционные полосы, то есть последовательность светлых и темных областей.<br><br>' +
                        'Когерентные волны получаются путем разделения излучения монохроматического источника на два световых пучка, которые затем встречаются.<br><br>' +
                        'Существует два способа получения когерентных волн:<br><br>' +
                        '- Разделение фронта волны в устройстве Юнга, бипризме Френеля и т. д.<br><br>' +
                        '- Разделение амплитуды волны в линзе с плоскими параллельными поверхностями, оптической пане, кольцах Ньютона.' +
                    '</li><br>' +
                    '<li>' +
                        'В устройстве Юнга используется монохроматический источник света S (лазер), экран с двумя прямоугольными щелями (ширина менее 1 мм) и параллельными, с расстоянием между ними не более 1 мм, экран (белая бумага). Для наблюдения интерференционной картины нет предпочтительного положения экрана, он может быть расположен на расстоянии D от 1 м до 5 м от щелей, и поэтому это называется нелокализованной интерференцией.<br><br>' +
                        'Интерференция и дифракция основаны на принципе Гюйгенса-Френеля, который гласит, что каждая точка на фронте волны ведет себя как вторичный источник волны с той же частотой и фазой, что и первоначальная волна. Новый фронт волны создается путем сложения амплитуд вторичных волн.' +
                    '</li><br>' +
                    '<li>' +
                        'В случае конструктивной интерференции обе волны находятся в фазе (нулевой фазовый сдвиг), и их сумма больше, образуя светлые области.<br><br>' +
                        'Когда две волны колеблются в противофазе (фазовый сдвиг 180°), они будут уничтожены (их сумма равна нулю), образуя темные зоны, в этом случае говорят о деструктивной интерференции.' +
                    '</li><br>' +
                    '<li>' +
                        'Электромагнитная волна (свет) имеет две компоненты: электрическую и магнитную. Только электрическая компонента (E) влияет на зрительное восприятие.<br><br>' +
                        'Волны с одинаковой амплитудой, излучаемые двумя источниками, имеют следующие уравнения:<br><br>' +
                        'E<sub>1</sub> = E<sub>0</sub>sin2π((t / T) - (r<sub>1</sub> / λ))<br><br>' +
                        'E<sub>2</sub> = E<sub>0</sub>sin2π((t / T) - (r<sub>2</sub> / λ))<br><br>' +
                        'Электромагнитная волна распространяется со скоростью c в течение временного интервала Δt через площадь S, расположенную перпендикулярно направлению распространения.<br><br>' +
                        'Энергия, переносимая волной:<br><br>' +
                        'ΔW = w ΔV<br><br>' +
                        'ΔW = (ε<sub>0</sub> / μ<sub>0</sub>)<sup>1/2</sup>E<sup>2</sup>SΔt<br><br>' +
                        'I = 1/2 · (ε<sub>0</sub> / μ<sub>0</sub>)<sup>1/2</sup> ·E<sup>2</sup><sub>0</sub><br><br>' +
                        'E\'<sub>0</sub> = 2 E<sub>0</sub> cos (π(r<sub>2</sub> - r<sub>1</sub>) / λ)' +
                    '</li><br>'+
                    '<li>' +
                        'Условия интерференции:<br><br>' +
                        '- Волны должны иметь одинаковую частоту<br><br>' +
                        '- Разность фаз: ΔΦ = 2π(Δr / λ) = константа<br><br>' +
                        'Световая интенсивность I в точке интерференции пропорциональна квадрату амплитуды результирующей волны:<br><br>' +
                        'I = const 4E<sup>2</sup><sub>0</sub> cos<sup>2</sup>(πΔr / λ)<br><br>' +
                        'В конструктивной интерференции (с образованием светлых полос) условие максимальной освещенности:<br><br>' +
                        'cos<sup>2</sup>(πΔr / λ)<br><br> = 1 → Δr = kλ = 2k(λ/2),<br><br>' +
                        'где k = целое число<br><br>' +
                        'Точки в зоне интерференции, для которых разность хода Δr является четным кратным полуволне, находятся на светлой полосе.<br><br>' +
                        'В деструктивной интерференции (с образованием темных полос) условие минимальной освещенности:<br><br>' +
                        'cos<sup>2</sup>(πΔr / λ) = 0 → Δr = kλ = 2(k+1)(λ/2)<br><br>' +
                        'Точки в зоне интерференции, для которых разность хода Δr является нечетным кратным полуволне, находятся на темной полосе.' +
                    '</li><br>' +
                    '<li>' +
                        'Определение положения полос в устройстве Юнга<br><br>' +
                        'в ΔAEP применяем Теорему Пифагора: r<sup>1</sup> = D<sup>2</sup> + (x-l)<sup>2</sup><br><br>' +
                        'в ΔBE\'P применяем Теорему Пифагора: r<sup>2</sup> = D<sup>2</sup> + (x-l)<sup>2</sup><br><br>' +
                        'Δr = r<sub>2</sub> = r<sub>1</sub> = 4xl / (r<sub>1</sub> + r<sub>2</sub>)' +
                    '</li><br>' +
                    '<li>' +
                        'Определение длины волны путем измерения интерференционного интервала<br><br>' +
                        'i = x<sub>k+1</sub> - x<sub>k</sub> = (k+1)λD / 2l - kλD / 2l = λD / 2l<br><br>' +
                        'i = λD / 2l' +
                    '</li>'+
                    '</ul>'+
                    '<h2 class="p-3">'+'Интерференция на пластине с параллельными плоскими поверхностями:'+'</h2>'+
                    '<ul>' +
                        '<li>' +
                            'Интерференция на пластине с параллельными плоскими поверхностями происходит, когда пучок света делится на два когерентных пучка на отражающих поверхностях, отражаясь светом на верхней поверхности и пропуская свет через нижнюю поверхность тонкой пластины.<br><br>' +
                            'Свет, попавший на верхнюю поверхность пластины (пленки), отражается (IR), также преломляется (IŔ ). Луч, преломленный через пластину, отражается на нижней поверхности пластины (MN). Эти два луча, IR и MN, будут интерферировать на поверхности пластины.<br><br>' +
                            'Интерференционные полосы локализованы в фокальной плоскости линзы или, в ее отсутствие, в бесконечности. Так объясняются радужные отражения на пузырях мыльной воды и пленках масла или нефти на улицах.' +
                        '</li>' +
                    '</ul>' +
                    '<h2 class="p-3">' +
                        'Кольца Ньютона в интерференции на воздушном перыше:' +
                    '</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Кольца Ньютона получаются при перпендикулярном освещении монохроматическим светом плоско-вогнутой линзы с большим фокусным расстоянием, расположенной выпуклой стороной на плоском стекле. Между линзой и стеклом образуется тонкий воздушный перышко, что приводит к образованию концентрических светлых и темных интерференционных полос, сосредоточенных в точке контакта между линзой и стеклом.' +
                        '</li>' +
                    '</ul>'+

                    //Elemente de fizica cuantica
                    '<a name="element_target2"></a>' +
                    '<br><br><br><br><u><h2 class="p-3" align = center>Элементы квантовой физики</h2><br><br><br></u>' +
                    '<h2 class="p-3">' +
                        'Гипотеза Планка о квантах света:' +
                    '</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Планк утверждал, что излучение, испускаемое черным телом, существует в виде дискретных пакетов энергии, которые он назвал квантами (позже названными фотонами), зависящими от частоты соответствующего излучения.<br><br>' +
                            'Дискретные значения энергии гармонического осциллятора равномерно распределены, так что разница между уровнями энергии (ΔE) пропорциональна частоте (ν) осциллятора и постоянной Планка (h).<br><br>' +
                            'ΔE = h ∙ ν<br><br>' +
                            'h = постоянная Планка = 6,62 ∙ 10<sup>-34</sup> Дж ∙ с<br><br>' +
                            'ν = частота осциллятора<br><br>' +
                            'Постоянная Планка является одной из самых маленьких констант, используемых в физике на макроскопическом уровне, отражая масштаб на микроскопическом уровне, на котором наблюдаются квантовые явления.' +
                        '</li><br>' +
                    '</ul>'+
                    '<h2 class="p-3">' +
                        'Фотоэлектрический эффект:' +
                    '</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Фотоэлектрический эффект был экспериментально обнаружен в 1887 году Генрихом Герцем (1857-1894) и в 1888 году В. Гальваксом (1859-1922) и заключается в испускании электронов металлом под воздействием электромагнитного излучения.<br><br>' +
                            'В 1905 году Альберт Эйнштейн (1879-1955) отметил, что объяснение фотоэффекта может быть решено, обобщив квантовую гипотезу, предложенную Планком, относительно излучения черного тела, на электромагнитное излучение.<br><br>' +
                            'Таким образом, электроны с катода получают от света только один пакет (фотон) световой энергии (E = h ∙ ν), чтобы быть ускоренными и покинуть металл.<br><br>' +
                            'Таким образом, максимальная кинетическая энергия испускаемых электронов не превысит этого значения энергии, независимо от интенсивности падающего излучения.<br><br>' +
                            'Кроме того, это объясняет, почему максимальная скорость электронов зависит от частоты излучения.' +
                        '</li><br>' +
                        '<li>' +
                            'Первый закон внешнего фотоэффекта:<br><br>' +
                            'Внешний фотоэффект происходит только тогда, когда частота падающего излучения больше характерной пороговой частоты металла, из которого сделан катод.<br><br>' +
                            'Для выхода из металла свободные электроны должны получить энергию, равную работе извлечения (L) для пороговой частоты (ν<sub>0</sub>):<br><br>' +
                            'L = h ∙ ν<sub>0</sub> h = постоянная Планка = 6,62 ∙ 10<sup>-34</sup> м<sup>2</sup> ∙ кг/с<br><br>' +
                            'Фотон с энергией h ∙ ν передает свою энергию свободному электрону.<br><br>' +
                            'Электрон может покинуть металл только если h ∙ ν ≥ L.' +
                        '</li><br>' +
                    '</ul>'+
                    '<h2 class="p-3">Второй закон внешнего фотоэффекта:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Фотоэлектрический эффект происходит практически мгновенно.<br><br>' +
                            'Излучение электрона является результатом столкновения фотона и электрона во время менее 10<sup>-9</sup> с.' +
                        '</li><br>' +
                    '</ul>' +
                    '<h2 class="p-3">Третий закон внешнего фотоэффекта:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Кинетическая энергия испускаемых электронов линейно увеличивается с частотой падающего излучения.<br><br>' +
                            'Если энергия фотона h ∙ ν > L, то электрон имеет достаточную кинетическую энергию, чтобы покинуть металл:<br><br>' +
                            'Ec = h ∙ ν – L = h ∙ ν – h ∙ ν<sub>0</sub> = h ∙ (ν – ν<sub>0</sub>)' +
                        '</li><br>' +
                    '</ul>' +
                    '<h2 class="p-3">Четвертый закон внешнего фотоэффекта:</h2>' +
                    '<ul>' +
                        '<li>' +
                            'Количество фотоэлектронов, испускаемых катодом за единицу времени, пропорционально количеству падающих фотонов за это время, которое пропорционально потоку световой энергии.' +
                        '</li>' +
                    '</ul>'),

        //cuprins
        "cuprinsPrincipii": "Принципы и законы",
        "cuprinsTeoreme": "Вариационные теоремы и законы сохранения",
        "cuprinsNotiuni": "начиная",
        "cuprinsPrincipiuI": "Принцип I",
        "cuprinsMotoare": "Тепловые двигатели",
        "cuprinsPrincipiuII": "Второй принцип",
        "cuprinsCurentul": "Электричество",
        "cuprinsOhm": "Закон Ома",
        "cuprinsKirchhoff": "Закон Кирхгофа",
        "cuprinsGrupare": "Группировка резисторов и генераторов",
        "cuprinsEnergie": "Энергетика и электроэнергия",
        "cuprinsGeometrica": "Геометрическая оптика",
        "cuprinsOndulatorie": "Волновая оптика",
        "cuprinsCuantica": "Квантовая физика",

        "teorieInapoiBtn": "Вернуться в меню выбора",
        "invataTitle": "В этой части главы вы познакомитесь с такими понятиями, как:",
        "inchideBtn": "Вешать трубку",
        "teorieBtn": "Теория",
        "testBtn": "Начать тест",
        "acasaBtn": "Дом",
    }
}

var questionsData = {
    "engleza": 
    {
        //q1
        "q1": [
            "Which of the following equations represents Galileo's formula?",
            "What is the unit of measurement for acceleration?",
            "The formula for friction force is:",
            "When we suspend a body from an inextensible thread, two paired forces appear:",
            "The reaction force in the principle of action and reaction:"
        ],
        "q1_op4": [
            "Tension in the thread and Elongation of the thread",
            "The pressing force of the body and Tension in the thread",
            "Friction force and Tension in the thread",
            "The pressing force of the body and Body tension"
        ],
        "q1_an4": "<span>The pressing force of the body and Tension in the thread</span>",
        "q1_op5": [
            "Is of the same magnitude, direction, and the same sense as the action force",
            "Is of smaller magnitude, the same direction, but opposite sense to the action force",
            "Is calculated independently of the action force",
            "Is of the same magnitude and direction, but opposite sense to the action force"
        ],
        "q1_an5": "<span>Is of the same magnitude and direction, but opposite sense to the action force</span>", 
        
        //q2
        "q2": [
            "The law of variation of gravitational potential energy:",
            "The gravitational potential energy of a body is:",
            "The formula for mechanical work is:",
            "What is the law of variation of kinetic energy?",
            "Mechanical power:"
        ],
        "q2_op5": [
            "Is the product of the mechanical work done and the time in which this mechanical work is performed",
            "Is a vector physical quantity",
            "Is the quantity that characterizes the ability of a body to perform mechanical work",
            "Is a scalar physical quantity"
        ],
        "q2_an5": "<span>Is a scalar physical quantity</span>",      
        
        //q3
        "q3": [
            "What is thermal agitation?",
            "Avogadro's number is equal to",
            "The transformation relationship between Celsius and Kelvin scale is:",
            "The equation of state describes the dependence between the state parameters of a thermodynamic system:",
            "The molar volume is equal to:"
        ],
        "q3_op1": [
            "The random and continuous movement of particles of a substance",
            "The ordered and continuous movement of particles of a substance",
            "The circular movement of particles of a substance",
            "The rectilinear movement of particles of a substance"
        ],
        "q3_an1": "<span>The random and continuous movement of particles of a substance</span>",

        //q4
        "q4": [
            "The mechanical work done by the thermodynamic system in an isobaric transformation is:",
            "Heat in the international system is measured in:",
            "The degree of freedom of monoatomic gases is:",
            "In an isochoric transformation:",
            "The relationship between molar heats is:"
        ],
        "q4_op4": [
            "Temperature is constant",
            "Volume is constant",
            "Pressure is constant",
            "Heat is equal to 0"
        ],
        "q4_an4": "<span>Volume is constant</span>",  
        
        //q5
        "q5": [
            "What does the second stage of the Otto engine operation consist of?",
            "The heat engine:",
            "The efficiency of the Diesel engine is equal to:",
            "The formula for the efficiency of the Diesel engine is:"
        ],
        "q5_op1": [
            "Ignition - (isochoric process)",
            "Intake - (isobaric process)",
            "Compression - (adiabatic process)",
            "Exhaust - (isochoric) and (isobaric process)"
        ],
        "q5_an1": "<span>Compression - (adiabatic process)</span>",
        "q5_op2": [
            "It converts the received heat, by burning a fuel, into mechanical work.",
            "It converts the received heat, by burning a fuel, into energy.",
            "It converts the received heat, by compressing the fuel, into mechanical work.",
            "It converts the received heat, by mixing with other substances, into mechanical work."
        ],
        "q5_an2": "<span>It converts the received heat, by burning a fuel, into mechanical work.</span>",
        "q5_op3": [
            "The ratio between the mechanical work done by the engine and the heat received.",
            "The ratio between the heat received and the mechanical work done by the engine.",
            "The ratio between the mechanical work done by the engine and the molar heat.",
            "The ratio between the mechanical work done by the engine and the temperature."
        ],
        "q5_an3": "<span>The ratio between the mechanical work done by the engine and the heat received.</span>",  
        
        //q6
        "q6": [
            "The efficiency of the Carnot cycle is:",
            "The efficiency of the Carnot cycle depends on:",
            "Carnot was the first to show that:"
        ],
        "q6_op1": [
            "Equal to the ratio of heat received to the mechanical work done by the engine.",
            "Always superunitary",
            "Always subunitary",
            "Equal to 0"
        ],
        "q6_an1": "<span>Always subunitary</span>",
        "q6_op2": [
            "Only on the temperature of the hot and cold source and not on the working substance.",
            "On the temperature of the hot and cold source as well as on the working substance.",
            "On the density of the working substance.",
            "Only on the temperature of the working substance and not on the temperature of the hot and cold source."
        ],
        "q6_an2": "<span>Only on the temperature of the hot and cold source and not on the working substance.</span>",
        "q6_op3": [
            "A heat engine needs two cold sources",
            "It is not possible for a heat engine to operate with only two thermostats, needing at least three thermostats.",
            "It is not necessary for a heat engine to operate with two thermostats, only one is needed",
            "It is not possible for a heat engine to operate with only one thermostat, needing at least two thermostats."
        ],
        "q6_an3": "<span>It is not possible for a heat engine to operate with only one thermostat, needing at least two thermostats.</span>", 
        
        //q7
        "q7": [
            "The unit of measurement in S.I. for electric voltage is:",
            "The formula for current intensity is equal to:",
            "The relationship between the three electric voltages of an electric circuit is:",
            "The internal voltage has the formula:",
            "The conventional direction of continuous electric current through a circuit is:"
        ],
        "q7_op2": [
            "The ratio between electric charge and time",
            "The ratio between electric voltage and time",
            "The ratio between mechanical work and electric charge",
            "The ratio between time and electric charge"
        ],
        "q7_an2": "<span>The ratio between electric charge and time</span>",
        "q7_op5": [
            "Given by the current intensity",
            "The same as that of electrons",
            "From the negative terminal of the source to the positive terminal",
            "From the positive terminal of the source to the negative terminal"
        ],
        "q7_an5": "<span>From the positive terminal of the source to the negative terminal</span>",    
        
        //q8
        "q8": [
            "Ohm's law for a portion of a circuit:",
            "The dependence of electrical resistance on the nature and dimensions of the conductor is:",
            "Ohm's law for the entire circuit:",
            "Resistance in S.I. is measured in:",
            "The formula for the electric short-circuit current intensity is:"
        ],      
        
        //q9
        "q9": [
            "Electromotive force:",
            "What does the circuit node represent?",
            "The algebraic sum of the currents meeting at a circuit node is:",
            "The algebraic sum of the electromotive forces in a network loop is equal to:"
        ],
        "q9_op1": [
            "It is taken as positive if the direction of the electric current through the source is opposite to that of the arbitrarily chosen loop",
            "It is taken as positive if the direction of the electric current through the source is identical to that of the arbitrarily chosen loop",
            "It is taken as negative if the intensity is positive",
            "It is taken as negative if the voltage is negative"
        ],
        "q9_an1": "<span>It is taken as positive if the direction of the electric current through the source is identical to that of the arbitrarily chosen loop</span>",
        "q9_op2": [
            "The point where the circuit has been knotted",
            "Intersection of at least two electrical conductors",
            "The location where a switch has been placed",
            "Intersection of at least three electrical conductors"
        ],
        "q9_an2": "<span>Intersection of at least three electrical conductors</span>",
        "q9_op3": [
            "Equal to the ratio of the electromotive force to the resistance of the entire circuit",
            "Equal to 1",
            "Zero",
            "Negative"
        ],
        "q9_an3": "<span>Zero</span>",
        "q9_op4": [
            "The algebraic sum of the voltages on each side of that circuit loop",
            "The algebraic sum of the resistances on each side of that circuit loop",
            "The algebraic sum of the currents on each side of that circuit loop",
            "Equal to 0"
        ],
        "q9_an4": "<span>The algebraic sum of the voltages on each side of that circuit loop</span>",        

        //q10
        "q10": [
            "The equivalent resistance of a series grouping of resistors is equal to:",
            "The reciprocal of the equivalent resistance of a parallel grouping of resistors is equal to:",
            "The internal resistance of the series grouping of identical electric generators is:",
            "The internal resistance of the parallel grouping of identical electric generators is:",
            "A group of resistors is replaced by a single one, called a resistor"
        ],
        "q10_an5": "<span>Equivalent</span>",
        "q10_op5": [
            "Relevant",
            "Symmetric",
            "Resultant",
            "Equivalent"
        ],       
        
        //q11
        "q11": [
            "How is electrical energy denoted?",
            "The formula for the electrical energy consumed in the entire circuit:",
            "The power developed by a resistor is maximum when:",
            "The electrical efficiency of a consumer is given by the relationship:",
            "The Joule's law has the formula:"
        ],
        "q11_an4": "<span>η = W<sub>useful</sub> / W<sub>total</sub> = P<sub>external</sub> / P<sub>total</sub></span>",
        "q11_op4": [
            "η = W<sub>useful</sub> / W<sub>total</sub> = P<sub>external</sub> / P<sub>total</sub>",
            "η = W<sub>useful</sub> / P<sub>external</sub> = W<sub>total</sub> / P<sub>total</sub>",
            "η = W<sub>useful</sub> / P<sub>total</sub> = W<sub>total</sub> / P<sub>external</sub>",
            "η = W<sub>total</sub> / W<sub>useful</sub> = P<sub>total</sub> / P<sub>external</sub>"
        ],      
        
        //q12
        "q12": [
            "The refractive index of a transparent medium is:",
            "The incident ray, the normal to the separating surface, and the refracted ray are:",
            "The maximum angle of incidence is:",
            "Converging lenses:"
        ],
        "q12_an2": "<span>coplanar</span>",
        "q12_op2": [
            "equal",
            "perpendicular",
            "coplanar",
            "parallel"
        ],
        "q12_an4": "<span>Thicker in the middle and thinner at the edges</span>",
        "q12_op4": [
            "Thicker in the middle and thinner at the edges",
            "It reduces the size of the object",
            "Thicker at the edges and thinner in the middle",
            "Also known as negative lenses"
        ], 
        
        //q13
        "q13": [
            "What is the speed of light in vacuum?",
            "Why do colored beams emerge from a prism at different angles?",
            "In the case of constructive interference:",
            "One of the conditions for interference is:",
            "To produce light dispersion, it is necessary that:"
        ],
        "q13_an2": "<span>Because they have different speeds</span>",
        "q13_op2": [
            "Because certain colors heat up the prism",
            "Because some colors repel each other",
            "Because they have different frequencies",
            "Because they have different speeds"
        ],
        "q13_an3": "<span>The two waves are in phase</span>",
        "q13_op3": [
            "The two waves are out of phase",
            "The two waves are in phase",
            "Their sum equals 0",
            "They dissipate"
        ],
        "q13_an4": "<span>The waves have the same frequency</span>",
        "q13_op4": [
            "The waves have the same wavelength",
            "The phase difference is equal to sin90°",
            "The waves have the same frequency",
            "The phase difference varies"
        ],
        "q13_an5": "<span>The refractive index must be greater than one</span>",
        "q13_op5": [
            "The refractive index must be greater than or equal to one",
            "The refractive index must be greater than zero",
            "The refractive index must be greater than one",
            "The refractive index must be greater than or equal to zero"
        ],     
        
        //q14
        "q14": [
            "The difference between energy levels:",
            "Planck's constant (h) is equal to:",
            "The kinetic energy of emitted electrons:",
            "'v' represents:"
        ],
        "q14_an1": "<span>It is proportional to the oscillator frequency and Planck's constant</span>",
        "q14_op1": [
            "It is inversely proportional to the oscillator frequency and Planck's constant",
            "It is proportional to the oscillator frequency and Planck's constant",
            "It is inversely proportional to the oscillator frequency and directly proportional to Planck's constant",
            "It is proportional to the oscillator frequency and inversely proportional to Planck's constant"
        ],
        "q14_an3": "<span>Increases linearly with the frequency of incident radiation</span>",
        "q14_op3": [
            "Increases linearly over time",
            "Decreases linearly with the frequency of incident radiation",
            "Increases linearly with the frequency of incident radiation",
            "Remains constant"
        ],
        "q14_an5": "<span>The oscillator frequency</span>",
        "q14_op5": [
            "Planck's constant",
            "Einstein's constant",
            "The emitted radiation",
            "The oscillator frequency"
        ],        
    },
    "romana": 
    {
        //q1
        "q1": [
            "Care din următoarele ecuații reprezintă formula Galilei?",
            "Care este unitatea de măsură pentru accelerație?",
            "Formula forței de frecare este:",
            "Când suspendăm un corp de un fir inextensibil apar două forțe pereche:",
            "Forța de reacțiune din principiul acțiunii și reacțiunii:",
        ],
        "q1_op4": [
            "Tensiunea în fir și Alungirea firului",
            "Forța de apăsare a corpului și Tensiunea în fir",
            "Forța de frecare și Tensiunea în fir",
            "Forța de apăsare a corpului și Tensiunea corpului"
        ],
        "q1_an4": "<span>Forța de apăsare a corpului și Tensiunea în fir</span>",
        "q1_op5": [
            "Este de aceeași mărime, direcție și același sens cu cea de acțiune",
            "Este de mărime mai mică, de aceeași direcție, dar de sens contrar față de cea de acțiune",
            "Este calculată independent de forța de acțiune",
            "Este de aceeași mărime și de aceeași direcție, dar de sens contrar față de cea de acțiune"
        ],
        "q1_an5": "<span>Este de aceeași mărime și de aceeași direcție, dar de sens contrar față de cea de acțiune</span>",

        //q2
        "q2": [
            "Legea variației energiei potențiale gravitaționale:",
            "Energia potențială gravitațională a unui corp este:",
            "Formula lucrului mecanic este:",
            "Care este legea variației energiei cinetice?",
            "Puterea mecanică:",
        ],
        "q2_op5": [
            "Este produsul dintre lucrul mecanic efectuat și timpul în care se efectuează acest lucru mecanic",
            "Este o mărime fizică vectorială",
            "Este mărimea ce caracterizează capacitatea unui corp de a efectua lucru mecanic",
            "Este o mărime fizică scalară"
        ],
        "q2_an5": "<span>Este o mărime fizică scalară</span>",

        //q3
        "q3": [
            "Ce este agitația termică?",
            "Numărul lui Avogadro este egal cu",
            "Relația de transformare între scara Celsius și Kelvin:",
            "Ecuația de stare descrie dependența dintre parametrii de stare ai unui sistem termodinamic:",
            "Volumul molar este egal cu:"
        ],
        "q3_op1": [
            'Mişcarea dezordonată şi continuă a particulelor unei substanţe',
            'Mişcarea ordonată şi continuă a particulelor unei substanţe',
            'Mişcarea circulară a particulelor unei substanţe',
            'Mişcarea rectiliniei a particulelor unei substanţe'
        ],
        "q3_an1": "<span>Mişcarea dezordonată şi continuă a particulelor unei substanţe</span>",

        //q4 
        "q4": [
            "Lucrul mecanic efectuat de sistemul termodinamic într-o transformare izobară este:",
            "Căldura în sistemul internațional se măsoară în:",
            "Gradul de libertate al gazelor monoatomice este de:",
            "Într-o transformare izocoră:",
            "Relația dintre căldurile molare este:",
        ],
        "q4_op4": [
            "Temperatura este constantă",
            "Volumul este constant",
            "Presiunea este constantă",
            "Căldura este egală cu 0"
        ],
        "q4_an4": "<span>Volumul este constant</span>",

        //q5
        "q5": [
            "În ce constă al doilea timp de funționare al motorului Otto?",
            "Motorul termic:",
            "Randamentul motorului termic Diesel este egal cu :",
            "Randamentul motorului termic Diesel are formula:",
        ],
        "q5_op1": [
            "Aprinderea - (proces izocor)",
            "Admisia - (proces izobar)",
            "Compresia - (proces adiabatic)",
            "Evacuarea - (proces izocor) și (proces izobar)"
        ],
        "q5_an1": "<span>Compresia - (proces adiabatic)</span>",
        "q5_op2": [
            "Transformă căldura primită, prin arderea unui combustibilul în lucru mecanic.",
            "Transformă căldura primită, prin arderea unui combustibilul în energie.",
            "Transformă căldura primită, prin comprimarea combustibilul în lucru mecanic.",
            "Transformă căldura primită, prin amestecare cu alte substanțe în lucru mecanic."
        ],
        "q5_an2": "<span>Transformă căldura primită, prin arderea unui combustibilul în lucru mecanic.</span>",
        "q5_op3": [
            "Raportul dintre lucrul mecanic efectuat de motor și căldura primită.",
            "Raportul dintre căldura primită  și lucrul mecanic efectuat de motor.",
            "Raportul dintre lucrul mecanic efectuat de motor și căldura molară.",
            "Raportul dintre lucrul mecanic efectuat de motor și temperatură."
        ],
        "q5_an3": "<span>Raportul dintre lucrul mecanic efectuat de motor și căldura primită.</span>",

        //q6
        "q6": [
            "Randamentul ciclului Carnot este:",
            "Randamentul ciclului Carnot depinde:",
            "Carnot a fost primul care a arătat că:",
        ],
        "q6_op1": [
            "Egal cu raportul dintre căldura primită și lucrul mecanic efectuat de motor.",
            "Întotdeauna supraunitar",
            "Întotdeauna subunitar",
            "Egal cu 0"
        ],
        "q6_an1": "<span>Întotdeauna subunitar</span>",
        "q6_op2": [
            "Numai de temperatura sursei calde și a celei reci și nu depinde de substanța de lucru.",
            "De temperatura sursei calde și a celei reci cât și de substanța de lucru.",
            "De densitatea substanței de lucru.",
            "Numai de temperatura substanța de lucru și nu depinde de temperatura sursei calde și a celei reci."
        ],
        "q6_an2": "<span>Numai de temperatura sursei calde și a celei reci și nu depinde de substanța de lucru.</span>",
        "q6_op3": [
            "O mașină termică are nevoie de două surse reci",
            "Nu este posibil să funcționeze o mașină termică doar cu două termostate, având nevoie de cel puțin trei termostate.",
            "Nu este necesar pentru a funcționa o mașină termică cu două termostate, ci este nevoie doar de unul singur",
            "Nu este posibil să funcționeze o mașină termică cu un singur termostat, având nevoie de cel puțin două termostate."
        ],
        "q6_an3": "<span>Nu este posibil să funcționeze o mașină termică cu un singur termostat, având nevoie de cel puțin două termostate.</span>",

        //q7
        "q7": [
            "Unitate de măsură în S.I pentru tensiunea electrică este:",
            "Formula intensității curentului este egală cu:",
            "Relația dintre cele trei tensiuni electrice ale unui circuit electric este:",
            "Tensiunea internă are formula:",
            "Sensul convențional al curentului electric continuu printr-un circuit este: ",
        ],
        "q7_op2": [
            "Raportul dintre sarcina electrică și timp",
            "Raportul dintre tensiunea electrică și timp",
            "Raportul dintre lucrul mecanic și sarcina electrică",
            "Raportul dintre timp și sarcina electrică"
        ],
        "q7_an2": "<span>Raportul dintre sarcina electrică și timp</span>",
        "q7_op5": [
            "Dat de către intensitatea curentului",
            "Același cu al electronilor",
            "De la borna negativă a sursei spre borna pozitivă",
            "De la borna pozitivă a sursei spre borna negativă"
        ],
        "q7_an5": "<span>De la borna pozitivă a sursei spre borna negativă</span>",

        //q8
        "q8": [
            "Legea lui Ohm pentru o porțiune de circuit:",
            "Dependența rezistenței electrice de natura și de dimensiunile conductorului este:",
            "Legea lui Ohm pentru întregul circuit:",
            "Rezistența în S.I. se măsoară în:",
            "Formula intensității curentului electric de scurtcircuit este:",
        ],

        //q9
        "q9": [
            "Tensiunea electromotoare:",
            "Ce reprezintă nodul de circuit?",
            "Suma algebrică a intensităților curenților care se întâlnesc într-un nod de circuit este:",
            "Suma algebrică a tensiunilor electromotoare dintr-un ochi de rețea este egală cu:",
        ],
        "q9_op1": [
            "Se ia cu plus dacă sensul curentului electric prin sursă este opus cu cel al ochiului ales arbitrar ",
            "Se ia cu plus dacă sensul curentului electric prin sursă este identic cu cel al ochiului ales arbitrar",
            "Se ia cu minus dacă intensitatea este pozitivă",
            "Se ia cu minus dacă tensiunea este negativă"
        ],
        "q9_an1": "<span>Se ia cu plus dacă sensul curentului electric prin sursă este identic cu cel al ochiului ales arbitrar</span>",
        "q9_op2": [
            "Punctul în care circuitul s-a înnodat",
            "Intersecția a cel puțin două conductoare electrice",
            "Locul în care a fost amplasat un întrerupător",
            "Intersecția a cel puțin trei conductoare electrice"
        ],
        "q9_an2": "<span>Intersecția a cel puțin trei conductoare electrice</span>",
        "q9_op3": [
            "Egală cu raportul dintre tensiunea electromotoare și rezistența întregului circuit ",
            "Egală cu 1",
            "Nulă",
            "Negativă"
        ],
        "q9_an3": "<span>Nulă</span>",
        "q9_op4": [
            "Suma algebrică a tensiunilor de pe fiecare latură din acel ochi de circuit",
            "Suma algebrică a rezistențelor de pe fiecare latură din acel ochi de circuit",
            "Suma algebrică a intensităților de pe fiecare latură din acel ochi de circuit",
            "Egală cu 0"
        ],
        "q9_an4": "<span>Suma algebrică a tensiunilor de pe fiecare latură din acel ochi de circuit</span>",

        //q10
        "q10": [
            "Rezistența echivalentă a unei grupări serie de rezistoare este egală cu:",
            "Inversul rezistenței echivalente a unei grupări paralel de rezistoare este egal cu:",
            "Rezistența internă a grupării serie de generatoare electrice identice:",
            "Rezistența internă a grupării paralel de generatoare electrice identice:",
            "Un grup de rezistoare se înlocuiește cu unul singur, denumit rezistor ",
        ],
        "q10_an5": "<span>Echivalent</span>",
        "q10_op5": [
            "Aferent",
            "Simetric",
            "Rezultant",
            "Echivalent"
        ],

        //q11
        "q11": [
            "Cu ce se notează energia electrică?",
            "Formula energiei electrice consumate pe întreg circuitul:",
            "Puterea dezvoltată de rezistor este maximă când: ",
            "Randamentul electric al unui consumator este dat de relația:",
            "Legea lui Joule are formula: ",
        ],
        "q11_an4": "<span>η = W<sub>utilă</sub> / W<sub>totală</sub> = P<sub>exterioară</sub> / P<sub>totală</sub></span>",
        "q11_op4": [
            "η = W<sub>utilă</sub> / W<sub>totală</sub> = P<sub>exterioară</sub> / P<sub>totală</sub>",
            "η = W<sub>utilă</sub> / P<sub>exterioară</sub> = W<sub>totală</sub> / P<sub>totală</sub>",
            "η = W<sub>utilă</sub> / P<sub>totală</sub> = W<sub>totală</sub> / P<sub>exterioară</sub>",
            "η = W<sub>totală</sub> / W<sub>utilă</sub> = P<sub>totală</sub> / P<sub>exterioară</sub>"
        ],

        //q12
        "q12": [
            "Indicele de refracție al unui mediu transparent este: ",
            "Raza incidentă , normala la suprafață de separare și raza refractată sunt:",
            "Unghiul maxim de incidență este: ",
            "Lentilele convergente: ",
        ],
        "q12_an2": "<span>coplanare</span>",
        "q12_op2": [
            "egale",
            "perpendiculare",
            "coplanare",
            "paralele"
        ],
        "q12_an4": "<span>Sunt mai groase la mijloc și mai subțiri la capete</span>",
        "q12_op4": [
            "Sunt mai groase la mijloc și mai subțiri la capete",
            "Micșorează obiectul",
            "Sunt mai groase la capete și mai subțiri la mijloc",
            "Li se mai zice și lentile negative"
        ],

        //q13
        "q13": [
            "Cu cât este egală viteza luminii în vid?",
            "De ce fasciculele colorate ies din prismă sub unghiuri diferite ?",
            "În cazul interferenței constructive: ",
            "Una dintre condițiile de interferență este: ",
            "Pentru a produce dispersia luminii trebuie ca: ",
        ],
        "q13_an2": "<span>Deoarece au viteze diferite</span>",
        "q13_op2": [
            "Pentru că anumite culori încălzesc prisma",
            "Fiindcă unele culori se resping",
            "Pentru că au frecvențe diferite",
            "Deoarece au viteze diferite"
        ],
        "q13_an3": "<span>Cele două unde sunt în fază</span>",
        "q13_op3": [
            "Cele două unde sunt în defazaj",
            "Cele două unde sunt în fază",
            "Suma lor este egală cu 0",
            "Se risipesc"
        ],
        "q13_an4": "<span>Undele să aibă aceeași frecvență</span>",
        "q13_op4": [
            "Undele să aibă aceiași lungime",
            "Diferența de fază să fie egală cu sin90°",
            "Undele să aibă aceeași frecvență",
            "Diferența de fază să varieze"
        ],
        "q13_an5": "<span>Indicele de refracție să fie mai mare decât unu</span>",
        "q13_op5": [
            "Indicele de refracție să fie mai mare egal cu unu",
            "Indicele de refracție să fie mai mare decât zero",
            "Indicele de refracție să fie mai mare decât unu",
            "Indicele de refracție să fie mai mare egal cu zero"
        ],

        //q14
        "q14": [
            "Diferența dintre nivelurile de energie: ",
            "Constanta lui Planck (h) este egală cu:",
            "Energia cinetică a electronilor emiși:",
            "'v' reprezintă: ",
        ],
        "q14_an1": "<span>Este proporțională cu frecvența oscilatorului și constanta lui Planck</span>",
        "q14_op1": [
            "Este invers proporțională cu frecvența oscilatorului și constanta lui Planck",
            "Este proporțională cu frecvența oscilatorului și constanta lui Planck",
            "Este invers proporțională cu frecvența oscilatorului și direct proporțională constanta lui Planck",
            "Este proporțională cu frecvența oscilatorului și invers proporțională constanta lui Planck"
        ],
        "q14_an3": "<span>Crește liniar cu frecvența radiației incidente</span>",
        "q14_op3": [
            "Crește liniar odată cu trecerea timpului",
            "Scade liniar cu frecvența radiației incidente",
            "Crește liniar cu frecvența radiației incidente",
            "Rămâne constantă"
        ],
        "q14_an5": "<span>Frecvența oscilatorului</span>",
        "q14_op5": [
            "Constanta lui Planck",
            "Constanta lui Einstein",
            "Radiația emisă",
            "Frecvența oscilatorului"
        ],
    },
    "maghiara": 
    {
        //q1
        "q1": [
            "Melyik a következő egyenletek közül Galileo képlete?",
            "Mi a gyorsulás mértékegysége?",
            "A súrlódási erő képlete:",
            "Amikor egy testet egy nyújthatatlan szálra függesztünk, két páros erő jelenik meg:",
            "Az akció-reakció elv alapján a reakcióerő:"
        ],
        "q1_op4": [
            "A szál feszültsége és a szál megnyúlása",
            "A test nyomóereje és a szál feszültsége",
            "A súrlódási erő és a szál feszültsége",
            "A test nyomóereje és a test feszültsége"
        ],
        "q1_an4": "<span>A test nyomóereje és a szál feszültsége</span>",
        "q1_op5": [
            "Ugyanakkora nagyságú, irányú és ugyanazon érzékkel, mint az akcióerő",
            "Kisebb nagyságú, ugyanazon irányú, de az akcióerővel ellentétes érzékű",
            "Az akcióerőtől függetlenül számított",
            "Ugyanakkora nagyságú és irányú, de az akcióerővel ellentétes érzékű"
        ],  
        "q1_an5": "<span>Ugyanakkora nagyságú és irányú, de az akcióerővel ellentétes érzékű</span>",  
        
        //q2    
        "q2": [
            "A gravitációs potenciális energia változásának törvénye:",
            "Egy test gravitációs potenciális energiája:",
            "A mechanikai munka képlete:",
            "Mi a kinetikus energia változásának törvénye?",
            "A mechanikai teljesítmény:"
        ],
        "q2_op5": [
            "A végzett mechanikai munka és annak végzése ideje szorzata",
            "Egy fizikai vektoriális mennyiség",
            "Az a méret, amely egy test képességét jellemzi a mechanikai munkavégzésre",
            "Egy fizikai skalár méret"
        ],
        "q2_an5": "<span>Egy fizikai skalár méret</span>",   
        
        //q3
        "q3": [
            "Mi a hőmozgás?",
            "Avogadro száma egyenlő",
            "Az átváltás Celsius és Kelvin skála közötti kapcsolat:",
            "Az állapotegyenlet leírja a termodinamikai rendszer állapotparaméterei közötti függést:",
            "A móláris térfogat egyenlő:"
        ],
        "q3_op1": [
            "Az anyag részecskéinek rendezetlen és folyamatos mozgása",
            "Az anyag részecskéinek rendezett és folyamatos mozgása",
            "Az anyag részecskéinek körkörös mozgása",
            "Az anyag részecskéinek egyenes vonalú mozgása"
        ],
        "q3_an1": "<span>Az anyag részecskéinek rendezetlen és folyamatos mozgása</span>",  
        
        //q4
        "q4": [
            "A termodinamikai rendszer által végzett mechanikus munka az izobár átalakulás során:",
            "A hőt az SI rendszerben mérik:",
            "A monoatomos gázok szabadsági foka:",
            "Az izochor transzformáció során:",
            "A móláris hők kapcsolata:"
        ],
        "q4_op4": [
            "A hőmérséklet állandó",
            "A térfogat állandó",
            "A nyomás állandó",
            "A hő egyenlő 0"
        ],
        "q4_an4": "<span>A térfogat állandó</span>",   
        
        //q5
        "q5": [
            "Mi az Otto-motor második működési fázisa?",
            "A hőmotor:",
            "A dízelmotor hőhatékonysága:",
            "A dízelmotor hőhatékonyságának a képlete:"
        ],
        "q5_op1": [
            "Gyújtás - (izokorikus folyamat)",
            "Beömlés - (izobár folyamat)",
            "Nyomás - (adiabatikus folyamat)",
            "Kipufogás - (izokorikus) és (izobár folyamat)"
        ],
        "q5_an1": "<span>Nyomás - (adiabatikus folyamat)</span>",
        "q5_op2": [
            "Az elért hőt átalakítja a mechanikus munkában egy üzemanyag elégetésével.",
            "Az elért hőt átalakítja energiává egy üzemanyag elégetésével.",
            "Az elért hőt átalakítja mechanikus munkává egy üzemanyag összenyomásával.",
            "Az elért hőt átalakítja mechanikus munkává egyéb anyagokkal való keverés útján."
        ],
        "q5_an2": "<span>Az elért hőt átalakítja a mechanikus munkában egy üzemanyag elégetésével.</span>",
        "q5_op3": [
            "Az általános munka és az elért hő közötti arány.",
            "Az elért hő és az általános munka közötti arány.",
            "Az általános munka és a moláris hő közötti arány.",
            "Az általános munka és a hőmérséklet közötti arány."
        ],
        "q5_an3": "<span>Az általános munka és az elért hő közötti arány.</span>",  
        
        //q6
        "q6": [
            "A Carnot-ciklus hatékonysága:",
            "A Carnot-ciklus hatékonysága attól függ:",
            "Carnot volt az első, aki megmutatta, hogy:"
        ],
        "q6_op1": [
            "Megegyezik a befogadott hő és a motor által végzett mechanikai munka arányával.",
            "Mindig felülmúlja az egységet",
            "Mindig alulmúlja az egységet",
            "Egyenlő nullával"
        ],
        "q6_an1": "<span>Mindig alulmúlja az egységet</span>",
        "q6_op2": [
            "Csak a forró és hideg forrás hőmérsékletétől függ, és nem az anyagtól, amelyen dolgozik.",
            "A forró és hideg forrás hőmérsékletétől és az anyagtól is függ, amelyen dolgozik.",
            "Az anyag sűrűségétől függ.",
            "Csak az anyag hőmérsékletétől függ, és nem a forró és hideg forrás hőmérsékletétől."
        ],
        "q6_an2": "<span>Csak a forró és hideg forrás hőmérsékletétől függ, és nem az anyagtól, amelyen dolgozik.</span>",
        "q6_op3": [
            "Egy hőgépnek két hideg forrásra van szüksége",
            "Egy hőgép nem működhet csak két termosztáttal, legalább háromra van szükség.",
            "Nem szükséges egy hőgép működéséhez két termosztát, csak egyetlen egyre van szükség.",
            "Egy hőgép nem működhet egyetlen termoszattal sem, legalább kettőre van szükség."
        ],
        "q6_an3": "<span>Egy hőgép nem működhet egyetlen termoszattal sem, legalább kettőre van szükség.</span>",  
        
        //q7
        "q7": [
            "Az elektromos feszültség SI mértékegysége:",
            "Az áram intenzitásának képlete megegyezik azzal, hogy:",
            "Az elektromos áramkör három feszültsége közötti kapcsolat:",
            "A belső feszültség képlete:",
            "A folyamatos áram hagyományos iránya az áramkörön keresztül:"
        ],
        "q7_op2": [
            "Az elektromos töltés és az idő közötti arány",
            "Az elektromos feszültség és az idő közötti arány",
            "A mechanikai munka és az elektromos töltés közötti arány",
            "Az idő és az elektromos töltés közötti arány"
        ],
        "q7_an2": "<span>Az elektromos töltés és az idő közötti arány</span>",
        "q7_op5": [
            "Az áram intenzitása által megadott",
            "Ugyanaz, mint az elektronoké",
            "A forrás negatív csatlakozójától a pozitívhoz",
            "A forrás pozitív csatlakozójától a negatívhoz"
        ],
        "q7_an5": "<span>A forrás pozitív csatlakozójától a negatívhoz</span>",   
        
        //q8
        "q8": [
            "Az Ohm-törvény egy áramkör részére:",
            "Az elektromos ellenállás függése a vezető anyagától és méreteitől:",
            "Az Ohm-törvény az egész áramkörre vonatkozóan:",
            "Az ellenállás SI mértékegysége:",
            "A rövidzárlati áram intenzitásának képlete:"
        ],   
        
        //q9
        "q9": [
            "Az elektromotoros feszültség:",
            "Mit jelent a áramköri csomópont?",
            "Az áramköri csomópontban találkozó áramok algebrai összege:",
            "A hálózati hurokban található elektromotoros feszültségek algebrai összege:"
        ],
        "q9_op1": [
            "Pozitívan veszi, ha az áramforrás által vezetett elektromos áram iránya az adott hurokéval ellentétes",
            "Pozitívan veszi, ha az áramforrás által vezetett elektromos áram iránya az adott hurokéval azonos",
            "Negatívan veszi, ha az intenzitás pozitív",
            "Negatívan veszi, ha a feszültség negatív"
        ],
        "q9_an1": "<span>Pozitívan veszi, ha az áramforrás által vezetett elektromos áram iránya az adott hurokéval azonos</span>",
        "q9_op2": [
            "Az áramkör csomópontja",
            "Legalább két elektromos vezeték metszéspontja",
            "Az egyik kapcsolótól való távolság",
            "Legalább három elektromos vezeték metszéspontja"
        ],
        "q9_an2": "<span>Legalább három elektromos vezeték metszéspontja</span>",
        "q9_op3": [
            "Az elektromotoros feszültség és az áramkör teljes ellenállásának aránya ",
            "Egyenlő 1-gyel",
            "Nulla",
            "Negatív"
        ],
        "q9_an3": "<span>Nulla</span>",
        "q9_op4": [
            "Az adott hurok minden oldalán lévő feszültségek algebrai összege",
            "Az adott hurok minden oldalán lévő ellenállások algebrai összege",
            "Az adott hurok minden oldalán lévő áramok algebrai összege",
            "Egyenlő 0-val"
        ],
        "q9_an4": "<span>Az adott hurok minden oldalán lévő feszültségek algebrai összege</span>",     
        
        //q10
        "q10": [
            "Az egy sorosan kapcsolt ellenállások ekvivalens ellenállása:",
            "A párhuzamosan kapcsolt ellenállások ekvivalens ellenállásának reciprokja:",
            "Az azonos elektromos generátorok sorosan kapcsolt csoportjának belső ellenállása:",
            "Az azonos elektromos generátorok párhuzamosan kapcsolt csoportjának belső ellenállása:",
            "Az ellenállások csoportja egyetlen, ellenállásként nevezett egységgel helyettesíthető"
        ],
        "q10_an5": "<span>Ekvivalens</span>",
        "q10_op5": [
            "Releváns",
            "Szimmetrikus",
            "Eredő",
            "Ekvivalens"
        ], 
        
        //q11
        "q11": [
            "Hogyan jelöljük az elektromos energiát?",
            "Az áramkör teljes elektromos energiafelhasználásának képlete:",
            "A rezisztornál kifejtett teljesítmény maximális, amikor:",
            "Egy fogyasztó elektromos hatásfoka az alábbi összefüggés szerint adódik:",
            "A Joule-törvény képlete:"
        ],
        "q11_an4": "<span>η = W<sub>hasznos</sub> / W<sub>teljes</sub> = P<sub>külső</sub> / P<sub>teljes</sub></span>",
        "q11_op4": [
            "η = W<sub>hasznos</sub> / W<sub>teljes</sub> = P<sub>külső</sub> / P<sub>teljes</sub>",
            "η = W<sub>hasznos</sub> / P<sub>külső</sub> = W<sub>teljes</sub> / P<sub>teljes</sub>",
            "η = W<sub>hasznos</sub> / P<sub>teljes</sub> = W<sub>teljes</sub> / P<sub>külső</sub>",
            "η = W<sub>teljes</sub> / W<sub>hasznos</sub> = P<sub>teljes</sub> / P<sub>külső</sub>"
        ],    
        
        //q12
        "q12": [
            "Egy átlátszó közeg törésmutatója:",
            "Az eső sugarak, a felületre merőleges és a törött sugarak:",
            "A maximális beesési szög:",
            "Kollektív lencsék:"
        ],
        "q12_an2": "<span>egy síkban</span>",
        "q12_op2": [
            "egyenlő",
            "merőleges",
            "egy síkban",
            "párhuzamos"
        ],
        "q12_an4": "<span>Középen vastagabbak és a végükön vékonyabbak</span>",
        "q12_op4": [
            "Középen vastagabbak és a végükön vékonyabbak",
            "Kisebbítik az objektumot",
            "A végükön vastagabbak és középen vékonyabbak",
            "Negatív lencséknek is nevezik"
        ],   
        
        //q13
        "q13": [
            "Milyen sebességgel terjed a fény vákuumban?",
            "Miért jönnek ki színes sugarak különböző szögekkel a prizmából?",
            "Konstruktív interferencia esetén:",
            "Az interferencia egyik feltétele:",
            "A fénydiszperzió előállításához szükséges, hogy:"
        ],
        "q13_an2": "<span>Mert különböző sebességeik vannak</span>",
        "q13_op2": [
            "Mert bizonyos színek felmelegítik a prizmát",
            "Mert néhány szín taszítja egymást",
            "Mert különböző frekvenciájúak",
            "Mert különböző sebességeik vannak"
        ],
        "q13_an3": "<span>Az két hullám fázisban van</span>",
        "q13_op3": [
            "A két hullám kifázott állapotban van",
            "A két hullám fázisban van",
            "Az összegük nulla",
            "Szétoszlanak"
        ],
        "q13_an4": "<span>A hullámoknak azonos frekvenciájuknak kell lennie</span>",
        "q13_op4": [
            "A hullámoknak azonos hullámhosszuknak kell lennie",
            "A fáziskülönbségnek sin90°-nak kell lennie",
            "A hullámoknak azonos frekvenciájuknak kell lennie",
            "A fáziskülönbségnek változnia kell"
        ],
        "q13_an5": "<span>A törésmutatónak nagyobbnak kell lennie, mint egy</span>",
        "q13_op5": [
            "A törésmutatónak nagyobbnak vagy egyenlőnek kell lennie, mint egy",
            "A törésmutatónak nagyobbnak kell lennie, mint nulla",
            "A törésmutatónak nagyobbnak kell lennie, mint egy",
            "A törésmutatónak nagyobbnak vagy egyenlőnek kell lennie, mint nulla"
        ],   
        
        //q14
        "q14": [
            "Az energiaszintek közötti különbség:",
            "Planck-állandó (h) egyenlő:",
            "Az kibocsátott elektronok kinetikus energiája:",
            "'v' jelenti:"
        ],
        "q14_an1": "<span>Arányos a rezgési frekvenciával és a Planck-állandóval</span>",
        "q14_op1": [
            "Fordított arányosságban van a rezgési frekvenciával és a Planck-állandóval",
            "Arányos a rezgési frekvenciával és a Planck-állandóval",
            "Fordított arányosságban van a rezgési frekvenciával és közvetlen arányosságban áll a Planck-állandóval",
            "Arányos a rezgési frekvenciával és fordított arányosságban áll a Planck-állandóval"
        ],
        "q14_an3": "<span>Lineárisan növekszik a beeső sugárzás frekvenciájával</span>",
        "q14_op3": [
            "Lineárisan növekszik az idő múlásával",
            "Lineárisan csökken a beeső sugárzás frekvenciájával",
            "Lineárisan növekszik a beeső sugárzás frekvenciájával",
            "Állandó marad"
        ],
        "q14_an5": "<span>A rezgési frekvencia</span>",
        "q14_op5": [
            "A Planck-állandó",
            "Az Einstein-állandó",
            "A kibocsátott sugárzás",
            "A rezgési frekvencia"
        ],        
    },
    "germana":
    {
        //q1
        "q1": [
            "Welche der folgenden Gleichungen stellt die Formel von Galilei dar?",
            "Was ist die Maßeinheit für Beschleunigung?",
            "Die Formel der Reibungskraft ist:",
            "Wenn wir einen Körper an einem unelastischen Faden aufhängen, treten zwei Paar Kräfte auf:",
            "Die Reaktionskraft im Prinzip von Aktion und Reaktion:"
        ],
        "q1_op4": [
            "Die Spannung im Faden und die Verlängerung des Fadens",
            "Die Druckkraft des Körpers und die Spannung im Faden",
            "Die Reibungskraft und die Spannung im Faden",
            "Die Druckkraft des Körpers und die Spannung des Körpers"
        ],
        "q1_an4": "<span>Die Druckkraft des Körpers und die Spannung im Faden</span>",
        "q1_op5": [
            "Hat die gleiche Größe, Richtung und den gleichen Sinn wie die Aktionskraft",
            "Hat eine kleinere Größe, die gleiche Richtung, aber einen entgegengesetzten Sinn zur Aktionskraft",
            "Wird unabhängig von der Aktionskraft berechnet",
            "Hat die gleiche Größe und Richtung, aber einen entgegengesetzten Sinn zur Aktionskraft"
        ],
        "q1_an5": "<span>Hat die gleiche Größe und Richtung, aber einen entgegengesetzten Sinn zur Aktionskraft</span>", 
        
        //q2
        "q2": [
            "Das Gesetz der Änderung der potenziellen Gravitationsenergie:",
            "Die potenzielle Gravitationsenergie eines Körpers ist:",
            "Die Formel der mechanischen Arbeit ist:",
            "Was ist das Gesetz der Änderung der kinetischen Energie?",
            "Die mechanische Leistung:"
        ],
        "q2_op5": [
            "Ist das Produkt der verrichteten mechanischen Arbeit und der Zeit, in der diese mechanische Arbeit verrichtet wird",
            "Ist eine physikalische Vektorgröße",
            "Ist die Größe, die die Fähigkeit eines Körpers charakterisiert, mechanische Arbeit zu verrichten",
            "Ist eine physikalische Skalare"
        ],
        "q2_an5": "<span>Ist eine physikalische Skalare</span>",  
        
        //q3
        "q3": [
            "Was ist thermische Agitation?",
            "Die Avogadro-Zahl ist gleich",
            "Die Beziehung zwischen der Celsius- und der Kelvin-Skala ist:",
            "Die Zustandsgleichung beschreibt die Abhängigkeit zwischen den Zustandsparametern eines thermodynamischen Systems:",
            "Das molare Volumen ist gleich:"
        ],
        "q3_op1": [
            "Die ungeordnete und kontinuierliche Bewegung der Partikel einer Substanz",
            "Die geordnete und kontinuierliche Bewegung der Partikel einer Substanz",
            "Die kreisförmige Bewegung der Partikel einer Substanz",
            "Die geradlinige Bewegung der Partikel einer Substanz"
        ],
        "q3_an1": "<span>Die ungeordnete und kontinuierliche Bewegung der Partikel einer Substanz</span>",   
        
        //q4
        "q4": [
            "Die von einem thermodynamischen System bei einer isobaren Transformation geleistete mechanische Arbeit ist:",
            "Die Wärme in der internationalen Einheit wird gemessen in:",
            "Der Freiheitsgrad von monoatomaren Gasen beträgt:",
            "Bei einer isochoren Transformation:",
            "Das Verhältnis der molaren Wärmen ist:"
        ],
        "q4_op4": [
            "Die Temperatur ist konstant",
            "Das Volumen ist konstant",
            "Der Druck ist konstant",
            "Die Wärme ist gleich 0"
        ],
        "q4_an4": "<span>Das Volumen ist konstant</span>",   
        
        //q5
        "q5": [
            "Worin besteht der zweite Arbeitsgang des Ottomotors?",
            "Der Verbrennungsmotor:",
            "Der Wirkungsgrad des Dieselmotors beträgt:",
            "Die Formel für den Wirkungsgrad des Dieselmotors lautet:"
        ],
        "q5_op1": [
            "Zündung - (isochorer Prozess)",
            "Ansaugen - (isobarer Prozess)",
            "Kompression - (adiabatischer Prozess)",
            "Ausstoß - (isochorer) und (isobarer Prozess)"
        ],
        "q5_an1": "<span>Kompression - (adiabatischer Prozess)</span>",
        "q5_op2": [
            "Wandelt die erhaltene Wärme durch Verbrennung eines Brennstoffs in mechanische Arbeit um.",
            "Wandelt die erhaltene Wärme durch Verbrennung eines Brennstoffs in Energie um.",
            "Wandelt die erhaltene Wärme durch Verdichtung des Brennstoffs in mechanische Arbeit um.",
            "Wandelt die erhaltene Wärme durch Mischung mit anderen Substanzen in mechanische Arbeit um."
        ],
        "q5_an2": "<span>Wandelt die erhaltene Wärme durch Verbrennung eines Brennstoffs in mechanische Arbeit um.</span>",
        "q5_op3": [
            "Das Verhältnis zwischen der vom Motor geleisteten mechanischen Arbeit und der erhaltenen Wärme.",
            "Das Verhältnis zwischen der erhaltenen Wärme und der vom Motor geleisteten mechanischen Arbeit.",
            "Das Verhältnis zwischen der vom Motor geleisteten mechanischen Arbeit und der molaren Wärme.",
            "Das Verhältnis zwischen der vom Motor geleisteten mechanischen Arbeit und der Temperatur."
        ],
        "q5_an3": "<span>Das Verhältnis zwischen der vom Motor geleisteten mechanischen Arbeit und der erhaltenen Wärme.</span>",   
        
        //q6
        "q6": [
            "Die Effizienz des Carnot-Zyklus ist:",
            "Die Effizienz des Carnot-Zyklus hängt ab von:",
            "Carnot war der Erste, der gezeigt hat, dass:"
        ],
        "q6_op1": [
            "Gleich dem Verhältnis von aufgenommener Wärme und mechanischer Arbeit, die vom Motor geleistet wird.",
            "Immer übermäßig",
            "Immer unterdurchschnittlich",
            "Gleich Null"
        ],
        "q6_an1": "<span>Immer unterdurchschnittlich</span>",
        "q6_op2": [
            "Nur von der Temperatur der heißen und kalten Quelle abhängig und nicht von der Arbeitsflüssigkeit.",
            "Von der Temperatur der heißen und kalten Quelle sowie von der Arbeitsflüssigkeit abhängig.",
            "Von der Dichte der Arbeitsflüssigkeit abhängig.",
            "Nur von der Temperatur der Arbeitsflüssigkeit abhängig und nicht von der Temperatur der heißen und kalten Quelle."
        ],
        "q6_an2": "<span>Nur von der Temperatur der heißen und kalten Quelle abhängig und nicht von der Arbeitsflüssigkeit.</span>",
        "q6_op3": [
            "Eine Wärmekraftmaschine benötigt zwei kalte Quellen",
            "Eine Wärmekraftmaschine kann nicht nur mit zwei Thermostaten betrieben werden, sondern benötigt mindestens drei Thermostate.",
            "Es ist nicht erforderlich, dass eine Wärmekraftmaschine mit zwei Thermostaten betrieben wird, sondern es reicht einer allein.",
            "Eine Wärmekraftmaschine kann nicht mit einem einzelnen Thermostat betrieben werden, sondern benötigt mindestens zwei Thermostate."
        ],
        "q6_an3": "<span>Eine Wärmekraftmaschine kann nicht mit einem einzelnen Thermostat betrieben werden, sondern benötigt mindestens zwei Thermostate.</span>",
        
        //q7
        "q7": [
            "Die Maßeinheit im SI für die elektrische Spannung ist:",
            "Die Formel für die Stromstärke ist gleich:",
            "Das Verhältnis zwischen den drei elektrischen Spannungen eines elektrischen Stromkreises ist:",
            "Die innere Spannung hat die Formel:",
            "Die konventionelle Richtung des kontinuierlichen elektrischen Stroms durch einen Stromkreis ist:"
        ],
        "q7_op2": [
            "Das Verhältnis zwischen der elektrischen Ladung und der Zeit",
            "Das Verhältnis zwischen der elektrischen Spannung und der Zeit",
            "Das Verhältnis zwischen mechanischer Arbeit und elektrischer Ladung",
            "Das Verhältnis zwischen Zeit und elektrischer Ladung"
        ],
        "q7_an2": "<span>Das Verhältnis zwischen der elektrischen Ladung und der Zeit</span>",
        "q7_op5": [
            "Durch die Stromstärke gegeben",
            "Gleich wie bei den Elektronen",
            "Von der negativen Klemme der Quelle zur positiven Klemme",
            "Von der positiven Klemme der Quelle zur negativen Klemme"
        ],
        "q7_an5": "<span>Von der positiven Klemme der Quelle zur negativen Klemme</span>",   
        
        "q8": [
            "Das Ohmsche Gesetz für einen Teil des Schaltkreises:",
            "Die Abhängigkeit des elektrischen Widerstands von der Natur und den Abmessungen des Leiters ist:",
            "Das Ohmsche Gesetz für den gesamten Schaltkreis:",
            "Der Widerstand im S.I. wird gemessen in:",
            "Die Formel für die Stromstärke des Kurzschlusses ist:"
        ],

        //q9
        "q9": [
            "Die elektromotorische Spannung:",
            "Was repräsentiert der Schaltknoten?",
            "Die algebraische Summe der Stromstärken, die sich in einem Schaltknoten treffen, ist:",
            "Die algebraische Summe der elektromotorischen Spannungen eines Netzwerks ist gleich:"
        ],
        "q9_op1": [
            "Es wird als positiv genommen, wenn die Richtung des elektrischen Stroms durch die Quelle der Richtung des willkürlich gewählten Auges entgegengesetzt ist",
            "Es wird als positiv genommen, wenn die Richtung des elektrischen Stroms durch die Quelle identisch mit der Richtung des willkürlich gewählten Auges ist",
            "Es wird als negativ genommen, wenn die Intensität positiv ist",
            "Es wird als negativ genommen, wenn die Spannung negativ ist"
        ],
        "q9_an1": "<span>Es wird als positiv genommen, wenn die Richtung des elektrischen Stroms durch die Quelle identisch mit der Richtung des willkürlich gewählten Auges ist</span>",
        "q9_op2": [
            "Der Punkt, an dem der Schaltkreis geknotet ist",
            "Der Schnittpunkt von mindestens zwei elektrischen Leitern",
            "Der Ort, an dem ein Schalter platziert wurde",
            "Der Schnittpunkt von mindestens drei elektrischen Leitern"
        ],
        "q9_an2": "<span>Der Schnittpunkt von mindestens drei elektrischen Leitern</span>",
        "q9_op3": [
            "Gleich dem Verhältnis von elektromotorischer Spannung und Gesamtwiderstand des Kreises",
            "Gleich 1",
            "Null",
            "Negativ"
        ],
        "q9_an3": "<span>Null</span>",
        "q9_op4": [
            "Die algebraische Summe der Spannungen auf jeder Seite dieses Schaltkreisauges",
            "Die algebraische Summe der Widerstände auf jeder Seite dieses Schaltkreisauges",
            "Die algebraische Summe der Stromstärken auf jeder Seite dieses Schaltkreisauges",
            "Gleich 0"
        ],
        "q9_an4": "<span>Die algebraische Summe der Spannungen auf jeder Seite dieses Schaltkreisauges</span>",   
        
        //q10
        "q10": [
            "Der Äquivalenzwiderstand einer Reihenschaltung von Widerständen ist gleich:",
            "Das Inverse des Äquivalenzwiderstands einer Parallelschaltung von Widerständen ist gleich:",
            "Der interne Widerstand einer Reihenschaltung von identischen elektrischen Generatoren ist:",
            "Der interne Widerstand einer Parallelschaltung von identischen elektrischen Generatoren ist:",
            "Eine Gruppe von Widerständen wird durch einen einzigen, als Widerstand bezeichneten, ersetzt"
        ],
        "q10_an5": "<span>Äquivalent</span>",
        "q10_op5": [
            "Zugehörig",
            "Symmetrisch",
            "Resultierend",
            "Äquivalent"
        ],   
        
        //q11
        "q11": [
            "Wie wird die elektrische Energie bezeichnet?",
            "Die Formel für die auf dem gesamten Stromkreis verbrauchte elektrische Energie lautet:",
            "Die Leistung, die von einem Widerstand entwickelt wird, ist maximal, wenn:",
            "Die elektrische Effizienz eines Verbrauchers wird durch die Beziehung gegeben:",
            "Das Joulesche Gesetz hat die Formel:"
        ],
        "q11_an4": "<span>η = W<sub>nützlich</sub> / W<sub>gesamt</sub> = P<sub>extern</sub> / P<sub>gesamt</sub></span>",
        "q11_op4": [
            "η = W<sub>nützlich</sub> / W<sub>gesamt</sub> = P<sub>extern</sub> / P<sub>gesamt</sub>",
            "η = W<sub>nützlich</sub> / P<sub>extern</sub> = W<sub>gesamt</sub> / P<sub>gesamt</sub>",
            "η = W<sub>nützlich</sub> / P<sub>gesamt</sub> = W<sub>gesamt</sub> / P<sub>extern</sub>",
            "η = W<sub>gesamt</sub> / W<sub>nützlich</sub> = P<sub>gesamt</sub> / P<sub>extern</sub>"
        ],   
        
        //q12
        "q12": [
            "Der Brechungsindex eines transparenten Mediums ist:",
            "Der einfallende Strahl, die Normale zur Trennfläche und der gebrochene Strahl sind:",
            "Der maximale Einfallswinkel ist:",
            "Konvergierende Linsen:"
        ],
        "q12_an2": "<span>koplanar</span>",
        "q12_op2": [
            "gleich",
            "senkrecht",
            "koplanar",
            "parallel"
        ],
        "q12_an4": "<span>Sie sind in der Mitte dicker und an den Enden dünner</span>",
        "q12_op4": [
            "Sie sind in der Mitte dicker und an den Enden dünner",
            "Sie verkleinern das Objekt",
            "Sie sind an den Enden dicker und in der Mitte dünner",
            "Sie werden auch als negative Linsen bezeichnet"
        ],    
        
        //q13
        "q13": [
            "Mit welcher Geschwindigkeit breitet sich Licht im Vakuum aus?",
            "Warum treten farbige Strahlen aus dem Prisma unter verschiedenen Winkeln aus?",
            "Im Falle konstruktiver Interferenz:",
            "Eine der Bedingungen für Interferenz ist:",
            "Um die Lichtdispersion zu erzeugen, muss folgendes gegeben sein:"
        ],
        "q13_an2": "<span>Weil sie unterschiedliche Geschwindigkeiten haben</span>",
        "q13_op2": [
            "Weil bestimmte Farben das Prisma erwärmen",
            "Weil sich einige Farben abstoßen",
            "Weil sie unterschiedliche Frequenzen haben",
            "Weil sie unterschiedliche Geschwindigkeiten haben"
        ],
        "q13_an3": "<span>Die beiden Wellen sind in Phase</span>",
        "q13_op3": [
            "Die beiden Wellen sind in entgegengesetzter Phase",
            "Die beiden Wellen sind in Phase",
            "Ihre Summe ist gleich 0",
            "Sie werden zerstreut"
        ],
        "q13_an4": "<span>Die Wellen müssen dieselbe Frequenz haben</span>",
        "q13_op4": [
            "Die Wellen müssen dieselbe Wellenlänge haben",
            "Die Phasendifferenz muss sin90° entsprechen",
            "Die Wellen müssen dieselbe Frequenz haben",
            "Die Phasendifferenz muss variieren"
        ],
        "q13_an5": "<span>Der Brechungsindex muss größer als eins sein</span>",
        "q13_op5": [
            "Der Brechungsindex muss größer oder gleich eins sein",
            "Der Brechungsindex muss größer als Null sein",
            "Der Brechungsindex muss größer als eins sein",
            "Der Brechungsindex muss größer oder gleich Null sein"
        ],  
        
        //q14
        "q14": [
            "Der Unterschied zwischen den Energieleveln:",
            "Die Plancksche Konstante (h) ist gleich:",
            "Die kinetische Energie der emittierten Elektronen:",
            "'v' repräsentiert:"
        ],
        "q14_an1": "<span>Es ist proportional zur Frequenz des Oszillators und der Planckschen Konstante</span>",
        "q14_op1": [
            "Es ist invers proportional zur Frequenz des Oszillators und der Planckschen Konstante",
            "Es ist proportional zur Frequenz des Oszillators und der Planckschen Konstante",
            "Es ist invers proportional zur Frequenz des Oszillators und direkt proportional zur Planckschen Konstante",
            "Es ist proportional zur Frequenz des Oszillators und invers proportional zur Planckschen Konstante"
        ],
        "q14_an3": "<span>Es steigt linear mit der Frequenz der einfallenden Strahlung</span>",
        "q14_op3": [
            "Es steigt linear mit der Zeit",
            "Es nimmt linear mit der Frequenz der einfallenden Strahlung ab",
            "Es steigt linear mit der Frequenz der einfallenden Strahlung",
            "Es bleibt konstant"
        ],
        "q14_an5": "<span>Die Frequenz des Oszillators</span>",
        "q14_op5": [
            "Die Plancksche Konstante",
            "Die Einsteinsche Konstante",
            "Die emittierte Strahlung",
            "Die Frequenz des Oszillators"
        ],        
    },
    "franceza":
    {
        //q1
        "q1": [
            "Laquelle des équations suivantes représente la formule de Galilée ?",
            "Quelle est l'unité de mesure de l'accélération ?",
            "La formule de la force de frottement est :",
            "Lorsque nous suspendons un corps à un fil inextensible, deux forces paires apparaissent :",
            "La force de réaction dans le principe d'action et de réaction :"
        ],
        "q1_op4": [
            "La tension dans le fil et l'allongement du fil",
            "La force de pression du corps et la tension dans le fil",
            "La force de frottement et la tension dans le fil",
            "La force de pression du corps et la tension du corps"
        ],
        "q1_an4": "<span>La force de pression du corps et la tension dans le fil</span>",
        "q1_op5": [
            "Est de même grandeur, direction et même sens que celle d'action",
            "Est de moindre grandeur, de même direction, mais de sens opposé par rapport à celle d'action",
            "Est calculée indépendamment de la force d'action",
            "Est de même grandeur et de même direction, mais de sens opposé par rapport à celle d'action"
        ],     
        "q1_an5": "<span>Est de même grandeur et de même direction, mais de sens opposé par rapport à celle d'action</span>", 
        
        //q2
        "q2": [
            "La loi de la variation de l'énergie potentielle gravitationnelle :",
            "L'énergie potentielle gravitationnelle d'un corps est :",
            "La formule du travail mécanique est :",
            "Quelle est la loi de la variation de l'énergie cinétique ?",
            "La puissance mécanique :"
        ],
        "q2_op5": [
            "Est le produit du travail mécanique effectué et du temps pendant lequel ce travail mécanique est effectué",
            "Est une grandeur physique vectorielle",
            "Est la grandeur qui caractérise la capacité d'un corps à effectuer un travail mécanique",
            "Est une grandeur physique scalaire"
        ],
        "q2_an5": "<span>Est une grandeur physique scalaire</span>",  
        
        //q3
        "q3": [
            "Qu'est-ce que l'agitation thermique ?",
            "Le nombre d'Avogadro est égal à",
            "La relation de transformation entre l'échelle Celsius et Kelvin est :",
            "L'équation d'état décrit la dépendance entre les paramètres d'état d'un système thermodynamique :",
            "Le volume molaire est égal à :"
        ],
        "q3_op1": [
            "Le mouvement désordonné et continu des particules d'une substance",
            "Le mouvement ordonné et continu des particules d'une substance",
            "Le mouvement circulaire des particules d'une substance",
            "Le mouvement rectiligne des particules d'une substance"
        ],
        "q3_an1": "<span>Le mouvement désordonné et continu des particules d'une substance</span>",

        //q4
        "q4": [
            "Le travail mécanique effectué par le système thermodynamique lors d'une transformation isobare est :",
            "La chaleur dans le système international est mesurée en :",
            "Le degré de liberté des gaz monoatomiques est de :",
            "Lors d'une transformation isochore :",
            "La relation entre les chaleurs molaires est :"
        ],
        "q4_op4": [
            "La température est constante",
            "Le volume est constant",
            "La pression est constante",
            "La chaleur est égale à 0"
        ],
        "q4_an4": "<span>Le volume est constant</span>",  
        
        //q5
        "q5": [
            "En quoi consiste le deuxième temps de fonctionnement du moteur Otto?",
            "Le moteur thermique:",
            "Le rendement du moteur thermique Diesel est égal à :",
            "La formule du rendement du moteur thermique Diesel est :"
        ],
        "q5_op1": [
            "L'allumage - (processus isochore)",
            "L'admission - (processus isobarique)",
            "La compression - (processus adiabatique)",
            "L'échappement - (processus isochore) et (processus isobarique)"
        ],
        "q5_an1": "<span>La compression - (processus adiabatique)</span>",
        "q5_op2": [
            "Transforme la chaleur reçue, par la combustion d'un carburant, en travail mécanique.",
            "Transforme la chaleur reçue, par la combustion d'un carburant, en énergie.",
            "Transforme la chaleur reçue, par la compression du carburant, en travail mécanique.",
            "Transforme la chaleur reçue, par mélange avec d'autres substances, en travail mécanique."
        ],
        "q5_an2": "<span>Transforme la chaleur reçue, par la combustion d'un carburant, en travail mécanique.</span>",
        "q5_op3": [
            "Le rapport entre le travail mécanique effectué par le moteur et la chaleur reçue.",
            "Le rapport entre la chaleur reçue et le travail mécanique effectué par le moteur.",
            "Le rapport entre le travail mécanique effectué par le moteur et la chaleur molaire.",
            "Le rapport entre le travail mécanique effectué par le moteur et la température."
        ],
        "q5_an3": "<span>Le rapport entre le travail mécanique effectué par le moteur et la chaleur reçue.</span>", 
        
        //q6
        "q6": [
            "Le rendement du cycle de Carnot est :",
            "Le rendement du cycle de Carnot dépend :",
            "Carnot a été le premier à montrer que :"
        ],
        "q6_op1": [
            "Égal au rapport entre la chaleur reçue et le travail mécanique effectué par le moteur.",
            "Toujours surunitaire",
            "Toujours sous-unitaire",
            "Égal à 0"
        ],
        "q6_an1": "<span>Toujours sous-unitaire</span>",
        "q6_op2": [
            "Uniquement de la température de la source chaude et froide et ne dépend pas de la substance de travail.",
            "De la température de la source chaude et froide ainsi que de la substance de travail.",
            "De la densité de la substance de travail.",
            "Uniquement de la température de la substance de travail et ne dépend pas de la température de la source chaude et froide."
        ],
        "q6_an2": "<span>Uniquement de la température de la source chaude et froide et ne dépend pas de la substance de travail.</span>",
        "q6_op3": [
            "Une machine thermique nécessite deux sources froides",
            "Il n'est pas possible de faire fonctionner une machine thermique uniquement avec deux thermostats, ayant besoin d'au moins trois thermostats.",
            "Il n'est pas nécessaire pour faire fonctionner une machine thermique avec deux thermostats, mais seulement avec un seul",
            "Il n'est pas possible de faire fonctionner une machine thermique avec un seul thermostat, ayant besoin d'au moins deux thermostats."
        ],
        "q6_an3": "<span>Il n'est pas possible de faire fonctionner une machine thermique avec un seul thermostat, ayant besoin d'au moins deux thermostats.</span>", 
        
        //q7
        "q7": [
            "L'unité de mesure dans le Système International pour la tension électrique est :",
            "La formule de l'intensité du courant est égale à :",
            "La relation entre les trois tensions électriques d'un circuit électrique est :",
            "La tension interne a pour formule :",
            "La direction conventionnelle du courant électrique continu à travers un circuit est :"
        ],
        "q7_op2": [
            "Le rapport entre la charge électrique et le temps",
            "Le rapport entre la tension électrique et le temps",
            "Le rapport entre le travail mécanique et la charge électrique",
            "Le rapport entre le temps et la charge électrique"
        ],
        "q7_an2": "<span>Le rapport entre la tension électrique et le temps</span>",
        "q7_op5": [
            "Donné par l'intensité du courant",
            "Identique à celui des électrons",
            "De la borne négative de la source vers la borne positive",
            "De la borne positive de la source vers la borne négative"
        ],
        "q7_an5": "<span>De la borne positive de la source vers la borne négative</span>",   
        
        //q8
        "q8": [
            "La loi d'Ohm pour une partie du circuit :",
            "La dépendance de la résistance électrique par rapport à la nature et aux dimensions du conducteur est :",
            "La loi d'Ohm pour tout le circuit :",
            "La résistance en S.I. se mesure en :",
            "La formule de l'intensité du courant électrique de court-circuit est :"
        ],  
        
        //q9
        "q9": [
            "La force électromotrice :",
            "Que représente le nœud de circuit ?",
            "La somme algébrique des intensités des courants rencontrés en un nœud de circuit est :",
            "La somme algébrique des forces électromotrices d'une maille du réseau est égale à :"
        ],
        "q9_op1": [
            "Est prise en compte positivement si le sens du courant électrique à travers la source est opposé à celui du nœud choisi arbitrairement",
            "Est prise en compte positivement si le sens du courant électrique à travers la source est identique à celui du nœud choisi arbitrairement",
            "Est prise en compte négativement si l'intensité est positive",
            "Est prise en compte négativement si la tension est négative"
        ],
        "q9_an1": "<span>Est prise en compte positivement si le sens du courant électrique à travers la source est identique à celui du nœud choisi arbitrairement</span>",
        "q9_op2": [
            "Le point où le circuit est noué",
            "L'intersection d'au moins deux conducteurs électriques",
            "L'endroit où un interrupteur a été placé",
            "L'intersection d'au moins trois conducteurs électriques"
        ],
        "q9_an2": "<span>L'intersection d'au moins trois conducteurs électriques</span>",
        "q9_op3": [
            "Égale au rapport entre la force électromotrice et la résistance totale du circuit",
            "Égale à 1",
            "Nulle",
            "Négative"
        ],
        "q9_an3": "<span>Nulle</span>",
        "q9_op4": [
            "La somme algébrique des tensions sur chaque branche de cette maille de circuit",
            "La somme algébrique des résistances sur chaque branche de cette maille de circuit",
            "La somme algébrique des intensités sur chaque branche de cette maille de circuit",
            "Est égale à 0"
        ],
        "q9_an4": "<span>La somme algébrique des tensions sur chaque branche de cette maille de circuit</span>",
        
        //q10
        "q10": [
            "La résistance équivalente d'un assemblage en série de résistances est égale à :",
            "L'inverse de la résistance équivalente d'un assemblage en parallèle de résistances est égal à :",
            "La résistance interne d'un assemblage en série de générateurs électriques identiques est :",
            "La résistance interne d'un assemblage en parallèle de générateurs électriques identiques est :",
            "Un groupe de résistances est remplacé par une seule, appelée résistance"
        ],
        "q10_an5": "<span>Équivalent</span>",
        "q10_op5": [
            "Correspondant",
            "Symétrique",
            "Résultante",
            "Équivalent"
        ],  
        
        //q11
        "q11": [
            "Comment l'énergie électrique est-elle notée ?",
            "Quelle est la formule de l'énergie électrique consommée dans tout le circuit ?",
            "La puissance développée par une résistance est maximale quand :",
            "Le rendement électrique d'un consommateur est donné par la relation :",
            "La loi de Joule a pour formule :"
        ],
        "q11_an4": "<span>η = W<sub>utile</sub> / W<sub>totale</sub> = P<sub>extérieure</sub> / P<sub>totale</sub></span>",
        "q11_op4": [
            "η = W<sub>utile</sub> / W<sub>totale</sub> = P<sub>extérieure</sub> / P<sub>totale</sub>",
            "η = W<sub>utile</sub> / P<sub>extérieure</sub> = W<sub>totale</sub> / P<sub>totale</sub>",
            "η = W<sub>utile</sub> / P<sub>totale</sub> = W<sub>totale</sub> / P<sub>extérieure</sub>",
            "η = W<sub>totale</sub> / W<sub>utile</sub> = P<sub>totale</sub> / P<sub>extérieure</sub>"
        ],  
        
        //q12
        "q12": [
            "L'indice de réfraction d'un milieu transparent est :",
            "Les rayons incident, normal à la surface de séparation et réfracté sont :",
            "L'angle d'incidence maximal est :",
            "Les lentilles convergentes :"
        ],
        "q12_an2": "<span>coplanaires</span>",
        "q12_op2": [
            "égaux",
            "perpendiculaires",
            "coplanaires",
            "parallèles"
        ],
        "q12_an4": "<span>Elles sont plus épaisses au milieu et plus minces aux extrémités</span>",
        "q12_op4": [
            "Elles sont plus épaisses au milieu et plus minces aux extrémités",
            "Elles réduisent l'objet",
            "Elles sont plus épaisses aux extrémités et plus minces au milieu",
            "On les appelle aussi des lentilles négatives"
        ],   
        
        //q13
        "q13": [
            "À quelle vitesse la lumière se propage-t-elle dans le vide ?",
            "Pourquoi les faisceaux colorés sortent-ils du prisme sous des angles différents ?",
            "En cas d'interférence constructive :",
            "Une des conditions d'interférence est :",
            "Pour produire la dispersion de la lumière, il faut que :"
        ],
        "q13_an2": "<span>Parce qu'elles ont des vitesses différentes</span>",
        "q13_op2": [
            "Parce que certaines couleurs chauffent le prisme",
            "Parce que certaines couleurs se repoussent",
            "Parce qu'elles ont des fréquences différentes",
            "Parce qu'elles ont des vitesses différentes"
        ],
        "q13_an3": "<span>Les deux ondes sont en phase</span>",
        "q13_op3": [
            "Les deux ondes sont en opposition de phase",
            "Les deux ondes sont en phase",
            "Leur somme est égale à 0",
            "Elles se dissipent"
        ],
        "q13_an4": "<span>Les ondes doivent avoir la même fréquence</span>",
        "q13_op4": [
            "Les ondes doivent avoir la même longueur d'onde",
            "La différence de phase doit être égale à sin90°",
            "Les ondes doivent avoir la même fréquence",
            "La différence de phase doit varier"
        ],
        "q13_an5": "<span>L'indice de réfraction doit être supérieur à un</span>",
        "q13_op5": [
            "L'indice de réfraction doit être supérieur ou égal à un",
            "L'indice de réfraction doit être supérieur à zéro",
            "L'indice de réfraction doit être supérieur à un",
            "L'indice de réfraction doit être supérieur ou égal à zéro"
        ],  
        
        //q14
        "q14": [
            "La différence entre les niveaux d'énergie :",
            "La constante de Planck (h) est égale à :",
            "L'énergie cinétique des électrons émis :",
            "'v' représente :"
        ],
        "q14_an1": "<span>Elle est proportionnelle à la fréquence de l'oscillateur et à la constante de Planck</span>",
        "q14_op1": [
            "Elle est inversement proportionnelle à la fréquence de l'oscillateur et à la constante de Planck",
            "Elle est proportionnelle à la fréquence de l'oscillateur et à la constante de Planck",
            "Elle est inversement proportionnelle à la fréquence de l'oscillateur et directement proportionnelle à la constante de Planck",
            "Elle est proportionnelle à la fréquence de l'oscillateur et inversement proportionnelle à la constante de Planck"
        ],
        "q14_an3": "<span>Elle augmente linéairement avec la fréquence du rayonnement incident</span>",
        "q14_op3": [
            "Elle augmente linéairement avec le temps qui passe",
            "Elle diminue linéairement avec la fréquence du rayonnement incident",
            "Elle augmente linéairement avec la fréquence du rayonnement incident",
            "Elle reste constante"
        ],
        "q14_an5": "<span>La fréquence de l'oscillateur</span>",
        "q14_op5": [
            "La constante de Planck",
            "La constante d'Einstein",
            "Le rayonnement émis",
            "La fréquence de l'oscillateur"
        ],        
    },
    "rusa":
    {
        //q1
        "q1": [
            "Какие из следующих уравнений представляет формулу Галилея?",
            "Какова единица измерения ускорения?",
            "Формула силы трения:",
            "Когда мы подвешиваем тело на нерастяжимой нити, появляются две парные силы:",
            "Сила реакции в принципе действия и противодействия:"
        ],
        "q1_op4": [
            "Напряжение в нити и Удлинение нити",
            "Сила давления тела и Напряжение в нити",
            "Сила трения и Напряжение в нити",
            "Сила давления тела и Напряжение тела"
        ],
        "q1_an4": "<span>Сила давления тела и Напряжение в нити</span>",
        "q1_op5": [
            "Имеет ту же величину, направление и тот же смысл, что и действующая сила",
            "Имеет меньшую величину, то же направление, но противоположный смысл по отношению к действующей силе",
            "Рассчитывается независимо от действующей силы",
            "Имеет ту же величину и направление, но противоположный смысл по отношению к действующей силе"
        ],    
        "q1_an5": "<span>Имеет ту же величину и направление, но противоположный смысл по отношению к действующей силе</span>",  
        
        //q2
        "q2": [
            "Закон изменения гравитационной потенциальной энергии:",
            "Гравитационная потенциальная энергия тела:",
            "Формула механической работы:",
            "Каков закон изменения кинетической энергии?",
            "Механическая мощность:"
        ],
        "q2_op5": [
            "Является произведением выполненной механической работы и времени, за которое эта работа выполняется",
            "Является векторной физической величиной",
            "Является величиной, характеризующей способность тела выполнять механическую работу",
            "Является скалярной физической величиной"
        ],
        "q2_an5": "<span>Является скалярной физической величиной</span>",    
        
        //q3
        "q3": [
            "Что такое тепловое возбуждение?",
            "Число Авогадро равно",
            "Отношение между шкалой Цельсия и Кельвина:",
            "Уравнение состояния описывает зависимость между параметрами состояния термодинамической системы:",
            "Молярный объем равен:"
        ],
        "q3_op1": [
            "Случайное и непрерывное движение частиц вещества",
            "Упорядоченное и непрерывное движение частиц вещества",
            "Круговое движение частиц вещества",
            "Прямолинейное движение частиц вещества"
        ],
        "q3_an1": "<span>Случайное и непрерывное движение частиц вещества</span>",

        //q4
        "q4": [
            "Механическая работа, выполненная термодинамической системой при изобарном преобразовании, составляет:",
            "Тепловой поток в международной системе измеряется в:",
            "Степень свободы моноатомных газов равна:",
            "В изохорическом преобразовании:",
            "Отношение между молярными теплотами составляет:"
        ],
        "q4_op4": [
            "Температура постоянна",
            "Объем постоянен",
            "Давление постоянно",
            "Теплота равна 0"
        ],
        "q4_an4": "<span>Объем постоянен</span>",  
        
        //q5
        "q5": [
            "В чем заключается второй рабочий ход двигателя Отто?",
            "Тепловой двигатель:",
            "КПД дизельного теплового двигателя равен:",
            "Формула КПД дизельного теплового двигателя:"
        ],
        "q5_op1": [
            "Сжатие - (адиабатический процесс)",
            "Подача - (изобарный процесс)",
            "Сжатие - (изохорный процесс)",
            "Выпуск - (изохорный процесс) и (изобарный процесс)"
        ],
        "q5_an1": "<span>Сжатие - (адиабатический процесс)</span>",
        "q5_op2": [
            "Преобразует полученное тепло путем сжигания топлива в механическую работу.",
            "Преобразует полученное тепло путем сжигания топлива в энергию.",
            "Преобразует полученное тепло путем сжатия топлива в механическую работу.",
            "Преобразует полученное тепло путем смешивания с другими веществами в механическую работу."
        ],
        "q5_an2": "<span>Преобразует полученное тепло путем сжигания топлива в механическую работу.</span>",
        "q5_op3": [
            "Отношение механической работы, совершенной двигателем, к полученному теплу.",
            "Отношение полученного тепла к механической работе, совершенной двигателем.",
            "Отношение механической работы, совершенной двигателем, к молярному теплу.",
            "Отношение механической работы, совершенной двигателем, к температуре."
        ],
        "q5_an3": "<span>Отношение механической работы, совершенной двигателем, к полученному теплу.</span>",    
        
        //q6
        "q6": [
            "Эффективность цикла Карно:",
            "Эффективность цикла Карно зависит:",
            "Карно был первым, кто показал, что:"
        ],
        "q6_op1": [
            "Равна отношению теплоты, полученной, к механической работе, выполненной двигателем.",
            "Всегда больше единицы",
            "Всегда меньше единицы",
            "Равна нулю"
        ],
        "q6_an1": "<span>Всегда меньше единицы</span>",
        "q6_op2": [
            "Только от температуры горячего и холодного источников и не зависит от рабочего вещества.",
            "От температуры горячего и холодного источников, а также от рабочего вещества.",
            "От плотности рабочего вещества.",
            "Только от температуры рабочего вещества и не зависит от температуры горячего и холодного источников."
        ],
        "q6_an2": "<span>Только от температуры горячего и холодного источников и не зависит от рабочего вещества.</span>",
        "q6_op3": [
            "Термическому двигателю требуется два холодных источника",
            "Невозможно заставить работать термический двигатель только с двумя термостатами, он нуждается как минимум в трех термостатах.",
            "Для работы термического двигателя необходимо два термостата, а не один.",
            "Невозможно заставить работать термический двигатель только с одним термостатом, ему нужно как минимум два термостата."
        ],
        "q6_an3": "<span>Невозможно заставить работать термический двигатель только с одним термостатом, ему нужно как минимум два термостата.</span>",   
        
        //q7
        "q7": [
            "Единица измерения в С.И. для электрического напряжения:",
            "Формула силы тока равна:",
            "Соотношение между тремя электрическими напряжениями в электрической цепи:",
            "Внутреннее напряжение имеет формулу:",
            "Конвенциональное направление постоянного электрического тока через электрическую цепь:"
        ],
        "q7_op2": [
            "Отношение электрического заряда к времени",
            "Отношение электрического напряжения к времени",
            "Отношение механической работы к электрическому заряду",
            "Отношение времени к электрическому заряду"
        ],
        "q7_an2": "<span>Отношение электрического напряжения к времени</span>",
        "q7_op5": [
            "Определяется силой тока",
            "Такой же, как у электронов",
            "От отрицательного вывода источника к положительному",
            "От положительного вывода источника к отрицательному"
        ],
        "q7_an5": "<span>От положительного вывода источника к отрицательному</span>",        

        //q8
        "q8": [
            "Закон Ома для участка цепи:",
            "Зависимость электрического сопротивления от природы и размеров проводника:",
            "Закон Ома для всей цепи:",
            "Сопротивление в С.И. измеряется в:",
            "Формула короткого замыкания тока:"
        ], 
        
        //q9
        "q9": [
            "ЭДС (электродвижущая сила):",
            "Что представляет собой узел цепи?",
            "Алгебраическая сумма токов, встречающихся в узле цепи, равна:",
            "Алгебраическая сумма ЭДС в контуре равна:"
        ],
        "q9_op1": [
            "Берется с плюсом, если направление тока через источник противоположно выбранному произвольному направлению в цепи",
            "Берется с плюсом, если направление тока через источник совпадает с выбранным произвольным направлением в цепи",
            "Берется с минусом, если интенсивность положительная",
            "Берется с минусом, если напряжение отрицательное"
        ],
        "q9_an1": "<span>Берется с плюсом, если направление тока через источник совпадает с выбранным произвольным направлением в цепи</span>",
        "q9_op2": [
            "Точка, в которой произошло соединение цепи",
            "Пересечение по крайней мере двух электрических проводов",
            "Место, где установлен выключатель",
            "Пересечение по крайней мере трех электрических проводов"
        ],
        "q9_an2": "<span>Пересечение по крайней мере трех электрических проводов</span>",
        "q9_op3": [
            "Равна отношению электродвижущей силы к сопротивлению всей цепи",
            "Равна 1",
            "Нулевая",
            "Отрицательная"
        ],
        "q9_an3": "<span>Нулевая</span>",
        "q9_op4": [
            "Алгебраическая сумма напряжений на каждой стороне этого контура",
            "Алгебраическая сумма сопротивлений на каждой стороне этого контура",
            "Алгебраическая сумма токов на каждой стороне этого контура",
            "Равна 0"
        ],
        "q9_an4": "<span>Алгебраическая сумма напряжений на каждой стороне этого контура</span>",   
        
        //q10
        "q10": [
            "Эквивалентное сопротивление последовательного соединения резисторов равно:",
            "Обратное эквивалентное сопротивление параллельного соединения резисторов равно:",
            "Внутреннее сопротивление последовательного соединения одинаковых электрогенераторов:",
            "Внутреннее сопротивление параллельного соединения одинаковых электрогенераторов:",
            "Группу резисторов заменяют одним, называемым резистором"
        ],
        "q10_an5": "<span>Эквивалент</span>",
        "q10_op5": [
            "Соответствующий",
            "Симметричный",
            "Результативный",
            "Эквивалент"
        ],   
        
        //q11
        "q11": [
            "Как обозначается электрическая энергия?",
            "Формула электрической энергии, потребляемой на всей цепи:",
            "Мощность, развиваемая резистором, максимальна, когда:",
            "Электрический КПД потребителя задается соотношением:",
            "Закон Джоуля имеет формулу:"
        ],
        "q11_an4": "<span>η = W<sub>полезная</sub> / W<sub>общая</sub> = P<sub>внешняя</sub> / P<sub>общая</sub></span>",
        "q11_op4": [
            "η = W<sub>полезная</sub> / W<sub>общая</sub> = P<sub>внешняя</sub> / P<sub>общая</sub>",
            "η = W<sub>полезная</sub> / P<sub>внешняя</sub> = W<sub>общая</sub> / P<sub>общая</sub>",
            "η = W<sub>полезная</sub> / P<sub>общая</sub> = W<sub>общая</sub> / P<sub>внешняя</sub>",
            "η = W<sub>общая</sub> / W<sub>полезная</sub> = P<sub>общая</sub> / P<sub>внешняя</sub>"
        ],     
        
        //q12
        "q12": [
            "Индекс преломления прозрачной среды составляет:",
            "Падающий луч, нормаль к поверхности раздела и преломленный луч являются:",
            "Максимальный угол падения составляет:",
            "Сходящиеся линзы:"
        ],
        "q12_an2": "<span>копланарными</span>",
        "q12_op2": [
            "равными",
            "перпендикулярными",
            "копланарными",
            "параллельными"
        ],
        "q12_an4": "<span>Они толще в середине и тоньше на концах</span>",
        "q12_op4": [
            "Они толще в середине и тоньше на концах",
            "Уменьшают объект",
            "Они толще на концах и тоньше в середине",
            "Их также называют отрицательными линзами"
        ],   
        
        //q13
        "q13": [
            "На сколько равна скорость света в вакууме?",
            "Почему цветные лучи выходят из призмы под разными углами?",
            "При конструктивной интерференции:",
            "Одно из условий интерференции:",
            "Чтобы произвести дисперсию света, необходимо, чтобы:"
        ],
        "q13_an2": "<span>Потому что они имеют разные скорости</span>",
        "q13_op2": [
            "Потому что некоторые цвета нагревают призму",
            "Потому что некоторые цвета отталкиваются",
            "Потому что они имеют разные частоты",
            "Потому что они имеют разные скорости"
        ],
        "q13_an3": "<span>Обе волны находятся в фазе</span>",
        "q13_op3": [
            "Обе волны находятся в противофазе",
            "Обе волны находятся в фазе",
            "Их сумма равна нулю",
            "Они рассеиваются"
        ],
        "q13_an4": "<span>Волны должны иметь одинаковую частоту</span>",
        "q13_op4": [
            "Волны должны иметь одинаковую длину",
            "Разность фаз должна быть равна sin90°",
            "Волны должны иметь одинаковую частоту",
            "Разность фаз должна варьироваться"
        ],
        "q13_an5": "<span>Показатель преломления должен быть больше единицы</span>",
        "q13_op5": [
            "Показатель преломления должен быть больше или равен единице",
            "Показатель преломления должен быть больше нуля",
            "Показатель преломления должен быть больше единицы",
            "Показатель преломления должен быть больше или равен нулю"
        ],  
        
        //q14
        "q14": [
            "Разница между уровнями энергии:",
            "Постоянная Планка (h) равна:",
            "Кинетическая энергия испускаемых электронов:",
            "'v' представляет собой:"
        ],
        "q14_an1": "<span>Пропорциональна частоте осциллятора и постоянной Планка</span>",
        "q14_op1": [
            "Обратно пропорциональна частоте осциллятора и постоянной Планка",
            "Пропорциональна частоте осциллятора и постоянной Планка",
            "Обратно пропорциональна частоте осциллятора и прямо пропорциональна постоянной Планка",
            "Пропорциональна частоте осциллятора и обратно пропорциональна постоянной Планка"
        ],
        "q14_an3": "<span>Линейно возрастает с частотой падающего излучения</span>",
        "q14_op3": [
            "Линейно возрастает с течением времени",
            "Линейно убывает с частотой падающего излучения",
            "Линейно возрастает с частотой падающего излучения",
            "Остается постоянной"
        ],
        "q14_an5": "<span>Частота осциллятора</span>",
        "q14_op5": [
            "Постоянная Планка",
            "Постоянная Эйнштейна",
            "Излучение",
            "Частота осциллятора"
        ],        
    }
}