const lagnEl = document.getElementById('langWrap');
const btns = document.querySelectorAll('#btn-lang');


//variabile din mecanica.html


btns.forEach(el => {
    el.addEventListener('click', () => {
        // lagnEl.querySelector('.active-lang-btn').classList.remove('active-lang-btn');
        // el.classList.add('active-lang-btn');

        //asta contine limbi curenta
        const attribute = el.getAttribute('language');
        localStorage.setItem('limba', JSON.stringify(attribute));

        loadLanguages(JSON.parse(localStorage.getItem('limba')));
    });
});

function loadLanguages(attr)
{
    //variabile din index.html
    const titleSet = document.getElementById('titleSet');
    const titleLogin = document.getElementById('titleLogin');
    const titleLang = document.getElementById('titleLang');
    const titleMec = document.getElementById('titleMec');
    const titleTer = document.getElementById('titleTer');
    const titleElec = document.getElementById('titleElec');
    const titleOp = document.getElementById('titleOp');

    //variabile din register.html
    const goBackReg = document.getElementById('goBackReg');
    const titleReg = document.getElementById('titleReg');
    var placeHolderEmailReg = document.getElementById('emailReg');
    var placeHolderPasswordReg = document.getElementById('passwordReg');
    const register = document.getElementById('register');
    const footerReg = document.getElementById('footerReg');
    const footerRegBtn = document.getElementById('footerRegBtn');

    //variabile din login.html
    const goBackLog = document.getElementById('goBackLog');
    const titleLog = document.getElementById('titleLog');
    const placeHolderEmailLog = document.getElementById('emailLog');
    const placeHolderPasswordLog = document.getElementById('passwordLog');
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

    //variabile comune din cele 4 fisiere index
    const invataTitle = document.querySelectorAll('#invataTitle');
    const inchideBtn = document.querySelectorAll('#inchideBtn');
    const teorieBtn = document.querySelectorAll('#teorieBtn');
    const testBtn = document.querySelectorAll('#testBtn');
    const acasaBtn = document.getElementById('acasaBtn');

    //index.html
    if(window.location.pathname == "/index.html")
    {
        titleSet.textContent = data[attr].titleSet;
        titleLogin.textContent = data[attr].titleLogin;
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
        placeHolderEmailReg.placeholder.textContent = data[attr].emailReg;
        placeHolderPasswordReg.placeholder.textContent = data[attr].passwordReg;
        register.textContent = data[attr].register;
        footerReg.textContent = data[attr].footerReg;
        footerRegBtn.textContent = data[attr].footerRegBtn;
    }

    //login.html
    if(window.location.pathname == "/login.html")
    {
        goBackLog.textContent = data[attr].goBackLog
        titleLog.textContent = data[attr].titleLog
        placeHolderEmailLog.placeholder.textContent = data[attr].emailLog;
        placeHolderPasswordLog.placeholder.textContent = data[attr].passwordLog;
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
}

var data = {
    "engleza":
    {
        //index.html
        "titleSet": "Settings",
        "titleLogin": "Log in",
        "titleLang": "Languages",
        "titleMec": "Mechanics",
        "titleTer": "Thermodynamics",
        "titleElec": "Electromechanics",
        "titleOp": "Optics",

        //register.html
        "goBackReg": "go back",
        "titleReg": "Enter your registration credentials",
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
        "titleLang": "Limbi",
        "titleMec": "Mecanică",
        "titleTer": "Termodinamică",
        "titleElec": "Electromecanică",
        "titleOp": "Optică",

        //register.html
        "goBackReg": "înapoi",
        "titleReg": "Introduceți acreditările dvs. de înregistrare",
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
        "titleLang": "Nyelvek",
        "titleMec": "Mechanika",
        "titleTer": "Termodinamika",
        "titleElec": "Elektromechanikai",
        "titleOp": "Optikai",

        //register.html
        "goBackReg": "vissza",
        "titleReg": "Adja meg regisztrációs hitelesítő adatait",
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

        //mecanica.html
        "mecanicaTitle": "Mechanika",
        "principiiTitle": "Elvek és törvények",
        "teoremeTitle": "Variációs tételek és megmaradási törvények",
        "principiiTitleModal": "",
        "teoremeTitleModal": "",
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
        "titleLang": "Fremdsprachen",
        "titleMec": "Mechanik",
        "titleTer": "Thermodynamik",
        "titleElec": "Elektromechanisch",
        "titleOp": "Optisch",

        //register.html
        "goBackReg": "zurück",
        "titleReg": "Geben Sie Ihre Anmeldedaten ein",
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
        "titleLang": "Langues",
        "titleMec": "Mécanique",
        "titleTer": "Thermodynamique",
        "titleElec": "Électromécanique",
        "titleOp": "Optique",

        //register.html
        "goBackReg": "dos",
        "titleReg": "Entrez vos identifiants d'inscription",
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
        "titleLang": "Конечность",
        "titleMec": "Механика",
        "titleTer": "Термодинамика",
        "titleElec": "Электромеханический",
        "titleOp": "Оптический",

        //register.html
        "goBackReg": "Hазад",
        "titleReg": "",
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

        "invataTitle": "В этой части главы вы познакомитесь с такими понятиями, как:",
        "inchideBtn": "Вешать трубку",
        "teorieBtn": "Теория",
        "testBtn": "Начать тест",
        "acasaBtn": "Дом",
    }
}

window.onload = function()
{
    loadLanguages(JSON.parse(localStorage.getItem('limba')));
}