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

    //macanica.html
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
}

var data = {
    "engleza":
    {
        "titleSet": "Settings",
        "titleLogin": "Log in",
        "titleLang": "Languages",
        "titleMec": "Mechanics",
        "titleTer": "Thermodynamics",
        "titleElec": "Electromechanics",
        "titleOp": "Optics",

        "goBackReg": "go back",
        "titleReg": "Enter your registration credentials",
        "emailReg": "Enter your email",
        "passwordReg": "Enter your password",
        "register": "Register account",
        "footerReg": "Already have an account?",
        "footerRegBtn": "Log in",

        "goBackLog": "go back",
        "titleLog": "Enter your login credentials",
        "emailLog": "Enter your email",
        "passwordLog": "Enter your password",
        "login": "Log in",
        "footerLog": "Not registered?",
        "footerLogBtn": "Create an account",

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

        "invataTitle": "In this part of the chapter you will learn concepts such as:",
        "inchideBtn": "Close",
        "teorieBtn": "Theory",
        "testBtn": "Start a test",
        "acasaBtn": "Home",
    },
    "romana":
    {
        "titleSet": "Setări",
        "titleLogin": "Conectează-te",
        "titleLang": "Limbi",
        "titleMec": "Mecanică",
        "titleTer": "Termodinamică",
        "titleElec": "Electromecanică",
        "titleOp": "Optică",

        "goBackReg": "înapoit",
        "titleReg": "Introduceți acreditările dvs. de înregistrare",
        "emailReg": "Introduceți adresa dvs. de email",
        "passwordReg": "Introduceți parola",
        "register": "Înregistrează-te",
        "footerReg": "Deja aveți un cont?",
        "footerRegBtn": "Conectați-vă",

        "goBackLog": "înapoi",
        "titleLog": "Introduceți datele dvs. de conectare",
        "emailLog": "Introduceți adresa dvs. de email",
        "passwordLog": "Introduceți parola",
        "login": "Autentifică-te",
        "footerLog": "Nu sunteți înregistrat?",
        "footerLogBtn": "Creați un cont",

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

        "invataTitle": "În această parte a capitolului vei învăța noțiuni precum:",
        "inchideBtn": "Închide",
        "teorieBtn": "Teorie",
        "testBtn": "Începe un test",
        "acasaBtn": "Acasă",
    },
    "maghiara":
    {
        "titleSet": "Beállítások",
        "titleLogin": "Bejelentkezés",
        "titleLang": "Nyelvek",
        "titleMec": "Mechanika",
        "titleTer": "Termodinamika",
        "titleElec": "Elektromechanikai",
        "titleOp": "Optikai",

        "goBackReg": "vissza",
        "titleReg": "Adja meg regisztrációs hitelesítő adatait",
        "emailReg": "Írd be az email címed",
        "passwordReg": "Írja be a jelszót",
        "register": "Regisztrálj",
        "footerReg": "Már van fiókja?",
        "footerRegBtn": "Bejelentkezés",

        "goBackLog": "vissza",
        "titleLog": "Adja meg bejelentkezési adatait",
        "emailLog": "Írd be az email címed",
        "passwordLog": "Írja be a jelszót",
        "login": "Bejelentkezés",
        "footerLog": "Nem regisztrált?",
        "footerLogBtn": "Hozzon létre egy fiókot",

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

        "invataTitle": "A fejezet ezen részében olyan fogalmakat fogsz megtanulni, mint például:",
        "inchideBtn": "Rakd le",
        "teorieBtn": "Elmélet",
        "testBtn": "Kezdj el egy tesztet",
        "acasaBtn": "Az otthon",
    },
    "germana":
    {
        "titleSet": "Einstellungen",
        "titleLogin": "Anmelden",
        "titleLang": "Fremdsprachen",
        "titleMec": "Mechanik",
        "titleTer": "Thermodynamik",
        "titleElec": "Elektromechanisch",
        "titleOp": "Optisch",

        "goBackReg": "zurück",
        "titleReg": "Geben Sie Ihre Anmeldedaten ein",
        "emailReg": "Geben sie ihre E-Mailadresse ein",
        "passwordReg": "Geben Sie das Passwort ein",
        "register": "Melden Sie sich an",
        "footerReg": "Sie haben bereits ein Konto?",
        "footerRegBtn": "Anmelden",

        "goBackLog": "zurück",
        "titleLog": "Geben Sie Ihre Anmeldedaten ein",
        "emailLog": "Geben sie ihre E-Mailadresse ein",
        "passwordLog": "Geben Sie das Passwort ein",
        "login": "Anmelden",
        "footerLog": "Nicht registriert?",
        "footerLogBtn": "Ein Konto erstellen",

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

        "invataTitle": "In diesem Teil des Kapitels lernen Sie Konzepte kennen wie:",
        "inchideBtn": "Auflegen",
        "teorieBtn": "Theorie",
        "testBtn": "Starten Sie einen Test",
        "acasaBtn": "Das Zuhause",
    },
    "franceza":
    {
        "titleSet": "Paramètres",
        "titleLogin": "Se connecter",
        "titleLang": "Langues",
        "titleMec": "Mécanique",
        "titleTer": "Thermodynamique",
        "titleElec": "Électromécanique",
        "titleOp": "Optique",

        "goBackReg": "dos",
        "titleReg": "Entrez vos identifiants d'inscription",
        "emailReg": "Entrez votre adresse email",
        "passwordReg": "Entrer le mot de passe",
        "register": "S'inscrire",
        "footerReg": "Vous avez déjà un compte?",
        "footerRegBtn": "Se connecter",

        "goBackLog": "dos",
        "titleLog": "Entrez vos informations de connexion",
        "emailLog": "Entrez votre adresse email",
        "passwordLog": "Entrer le mot de passe",
        "login": "Se connecter",
        "footerLog": "Non enregistré?",
        "footerLogBtn": "Créer un compte",

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

        "invataTitle": "Dans cette partie du chapitre, vous apprendrez des concepts tels que :",
        "inchideBtn": "Raccrocher",
        "teorieBtn": "Théorie",
        "testBtn": "Démarrer un test",
        "acasaBtn": "Á la maison",
    },
    "rusa":
    {
        "titleSet": "Настройки",
        "titleLogin": "Bойти",
        "titleLang": "Конечность",
        "titleMec": "Механика",
        "titleTer": "Термодинамика",
        "titleElec": "Электромеханический",
        "titleOp": "Оптический",

        "goBackReg": "Hазад",
        "titleReg": "",
        "emailReg": "Введите ваш адрес электронной почты",
        "passwordReg": "Введите пароль",
        "register": "Зарегистрироваться",
        "footerReg": "У вас уже есть аккаунт?",
        "footerRegBtn": "Войти",

        "goBackLog": "Hазад",
        "titleLog": "Введите данные для входа",
        "emailLog": "Введите ваш адрес электронной почты",
        "passwordLog": "Введите пароль",
        "login": "Авторизоваться",
        "footerLog": "Не зарегистрирован?",
        "footerLogBtn": "Завести аккаунт",

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