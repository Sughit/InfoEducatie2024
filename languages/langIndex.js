const lagnEl = document.getElementById('langWrap');
const btns = document.querySelectorAll('#btn-lang');

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
    const titleDisconnect = document.getElementById('titleDisconnect');
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

    //variabile comune din cele 4 teorii
    const teorieInapoiBtn = document.getElementById('teorieInapoiBtn');

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
        titleDisconnect.textContent = data[attr].titleDisconnect;
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
        goBackLog.textContent = data[attr].goBackLog
        titleLog.textContent = data[attr].titleLog
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
    }

    //teorieTermodinamica.html
    if(window.location.pathname == "/teorieTermodinamica.html")
    {
        teorieTermodinamicaTitle.textContent = data[attr].teorieTermodinamicaTitle;
        teorieTermodinamica.innerHTML = data[attr].teorieTermodinamica;
        teorieInapoiBtn.textContent = data[attr].teorieInapoiBtn;
    }
}

var data = {
    "engleza":
    {
        //index.html
        "titleSet": "Settings",
        "titleLogin": "Log in",
        "titleDisconnect": "Sign Out",
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
                            '<li>'+'Measurement unit: '+'<b>'+'&lt;'+'v'+'&gt;'+' = m/s'+'</b>'+'</ li>'+
                                    '<li>'+'Average speed: '+'<b>'+'v'+'<small>'+'m'+'</small>'+' = Δd/Δt'+'</b >'+'</li>'+
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
                            '<li>'+'<b>'+'v = v'+'<sub>'+'0'+'</sub>'+' + at'+'</b>'+'</ li>'+
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
                            '<li>'+'Written as a formula: '+'<b>'+'F'+'<sub>'+'a'+'</sub>'+' = F'+'<sub >'+'r'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Hooke\'s law:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'The elongation of a spring is directly proportional to the deforming Force (F):'+'</li>'+'<br>'+
    
                            'Δl ~ F'+'<br>'+'<br>'+
    
                            '<li>'+'Directly proportional to the Initial Spring Length (l'+'<sub>'+'0'+'</sub>'+') :'+'</li>'+'<br >'+
                            
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
                        '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center >'+'Theorems of variation and conservation laws'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                        
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
                            '<li>'+'The gravitational potential energy of a body is equal to: E'+'<sub>'+'pg'+'</sub>'+' = m ∙ g ∙ h'+'</li >'+'<br>'+
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
                                    '<li>'+'<b>'+'Atom'+'</b>'+' is the smallest particle of a substance that cannot be further divided by ordinary chemical processes.'+'</li >'+'<br>'+
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
                                    '<li>'+'<b>'+'The state of a thermodynamic system'+'</b>'+', at a certain moment, is characterized by certain physical quantities called state parameters.'+'</li >'+'<br>'+
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
                                        '- Operating time is the period of displacement of the piston from top dead center = TDC (cylinder closes a minimum volume of substance) to bottom dead center = PMI (cylinder closes a maximum volume of substance) and vice versa.'+'<br >'+'<br>'+
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
                                        ' - Q'+'<sub>'+'23'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T '+'<sub>'+'3'+'</sub>'+' – T'+'<sub>'+'2'+'</sub>'+') = Q'+'<sub >'+'1'+'</sub>'+' > 0'+'<br>'+
                                        ' - Q'+'<sub>'+'34'+'</sub>'+' = 0'+'<br>'+
                                        ' - Q'+'<sub>'+'41'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T '+'<sub>'+'31'+'</sub>'+' – T'+'<sub>'+'4'+'</sub>'+') = Q'+'<sub >'+'2'+'</sub>'+' < 0'+'<br>'+'<br>'+

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
                                        '- Q'+'<sub>'+'23'+'</sub>'+' = ν ∙ C'+'<sub>'+'p'+'</sub>'+' ∙ (T '+'<sub>'+'3'+'</sub>'+' – T'+'<sub>'+'2'+'</sub>'+') = Q'+'<sub >'+'1'+'</sub>'+' > 0 (isobaric process)'+'<br>'+
                                        '- Q'+'<sub>'+'34'+'</sub>'+' = 0 (adiabatic process)'+'<br>'+
                                        '- Q'+'<sub>'+'41'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T '+'<sub>'+'1'+'</sub>'+' – T'+'<sub>'+'4'+'</sub>'+') = Q'+'<sub >'+'2'+'</sub>'+' < 0 (isochoric process)'+'<br>'+'<br>'+

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
                                        'Carnot was the first to show that it is not possible to operate a heat engine with a single thermostat, needing at least two thermostats. Thus, the system receives heat from a warm source (thermostat with T'+'<sub>'+'1'+'</sub>'+') and gives heat to a cold source (thermostat with T'+'<sub >'+'2'+'</sub>'+').'+
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
                            '<li>'+'Unitatea de măsură: '+'<b>'+'&lt;'+'a'+'&gt;'+' = m/s'+'<sup>'+'2'+'</sup>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Formula Galilei:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'<b>'+'v'+'<sup>'+'2'+'</sup>'+' = v'+'<sub>'+'0'+'</sub>'+'<sup>'+'2'+'</sup>'+' + 2a(x-x'+'<sub>'+'0'+'</sub>'+')'+'</b>'+'</li>'+
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
                            '<li>'+'Când un corp acționează asupra altui corp cu o forță (numită forță de acțiune), cel de-al doilea corp acționează și el asupra primului cu o forță (numită forță de reacțiune) de aceeași mărime și de aceeași direcție, dar de sens contrar. Acest principiu este cunoscut și sub numele de Principiul acțiunii și reacțiunii.'+'</li>'+
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
                            '<li>'+'Când suspendăm un corp de un fir inextensibil apar două forțe pereche:'+'<br>'+'<br>'+  
    
                                'Forța de apăsare a corpului (F) este forța cu care corpul acționează asupra firului (ea este egală cu greutatea corpului).'+'<br>'+'<br>'+
                                
                                'Tensiunea în fir (T) este forța cu care firul acționează asupra corpului suspendat pe el.'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Legile frecării la alunecare:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Legea I a frecării:'+'<br>'+'<br>'+
                            
                                'Valoarea forței de frecare la alunecare depinde de natura și de gradul de prelucrare al suprafețelor aflate în contact. Dependența este caracterizată de o mărime adimensională, numită coeficient de frecare al alunecare, ce ia valori între 0 și 1 și se notează cu μ.'+'<br>'+'<br>'+
    
                                'Ff ~ μ'+'</li>'+'<br>'+
    
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
                            '<li>'+'Formula de calcul: L = F ∙ d'+'</li>'+'<br>'+
                            '<li>'+'Convenții de semne:'+'<br>'+
                                '1. Lucrul mecanic al unei forțe este pozitiv dacă forța ajută la deplasarea corpului. Aceasta se întâmplă în cazul în care forța are aceeași direcție și sens cu mișcarea corpului.'+'<br>'+'<br>'+
                                '2. Lucrul mecanic al unei forțe este negativ dacă forța se opune deplasării corpului. Aceasta se întâmplă în cazul în care componenta vectorului forță pe direcția mișcării are sens opus mișcării corpului.'+'<br>'+'<br>'+
                                '3. Lucrul mecanic al unei forțe este nul dacă forța nici nu ajută la deplasarea corpului, nici nu se opune deplasării. Aceasta se întâmplă în cazul în care vectorul forță este perpendicular pe direcția mișcării corpului.'+
                            '</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Puterea mecanică:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Puterea mecanică (P) este mărimea fizică scalară egală cu raportul dintre lucrul mecanic (L) efectuat și timpul (Δt) în care se efectuează acest lucru mecanic.'+'</li>'+'<br>'+
                            '<li>'+'P = Lucru mecanic / timp = L / Δt'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Energia cinetică:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Energia mecanică (E) este mărimea fizică ce caracterizează capacitatea unui corp de a efectua lucru mecanic, nitatea de măsură fiind este joulul (J).'+'</li>'+'<br>'+
                            '<li>'+'Energia cinetică (E'+'<sub>'+'c'+'</sub>'+') este energia pe care o are un corp în mișcare.'+'</li>'+'<br>'+
                            '<li>'+'Energia cinetică a unui corp în mișcare, cu o anumită viteză se calculează cu formula:'+'<br>'+'<br>'+
                                'E'+'<sub>'+'c'+'</sub>'+' = m ∙ v'+'<sup>'+'2'+'</sup>'+' / 2 '+'</li>'+'<br>'+
                            '<li>'+'Legea variației energiei cinetice:'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'c'+'</sub>'+' = L'+'<sub>'+'Total'+'</sub>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Energia potențială gravitațională:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Energia potențială gravitațională (E'+'<sub>'+'pg'+'</sub>'+') este energia pe care o are un corp aflat la o anumită înălțime față de sol.'+'</li>'+'<br>'+
                            '<li>'+'Energia potențială gravitațională a unui corp este egală cu: E'+'<sub>'+'pg'+'</sub>'+' = m ∙ g ∙ h'+'</li>'+'<br>'+
                            '<li>'+'Legea variației energiei potențiale gravitaționale:'+'<br>'+'<br>'+
                                'ΔE'+'<sub>'+'pg'+'</sub>'+' = -L'+'<sub>'+'G'+'</sub>'+'</li>'+'<br>'+
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
                                    '<li>'+'<b>'+'Agitația termică'+'</b>'+' este mişcarea dezordonată şi continuă a particulelor unei substanţe (atomi sau molecule).'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Difuzia'+'</b>'+' este fenomenul de pătrundere a moleculelor unei substanțe printre moleculele altei substanțe, fără intervenţia unei forţe exterioare (de la sine).'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Atomul'+'</b>'+' este cea mai mică particulă dintr-o substanță care nu mai poate fi divizată prin procedee chimice obișnuite.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Molecula'+'</b>'+' reprezintă cea mai mică particulă dintr-o substanță, care poate exista și în stare liberă și care păstrează proprietățile substanței din care provine.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Masa moleculară'+'</b>'+' este o mărime adimensională (fără unitate de măsură) care ne arată de câte ori este mai mare masa reală a unei molecule decât unitatea atomică de masă (u.a.m.).'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Masa atomică relativă (A)'+'</b>'+' este numărul care arată de câte ori masa unui atom este mai mare decât unitatea atomică de masă.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Un mol de atomi'+'</b>'+' reprezintă cantitatea, în grame, dintr-o substanţă simplă care conţine 6,022 ∙ 10'+'<sup>'+'23'+'</sup>'+' de atomi. Se notează cu litera grecească ”niu”=  υ.'+'<br>'+'<br>'+

                                        'υ = m(g) / A(g/mol) = masa de substanță simplă(g) / masa atomică(g/mol)'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Numărul lui Avogadro'+'</b>'+', notat cu N'+'<sub>'+'A'+'</sub>'+', este egal cu 6,022 ∙10'+'<sup>'+'23'+'</sup>'+' mol'+'<sup>'+'-1'+'</sup>'+' atomi şi reprezintă numărul de atomi conţinuţi într-un mol de atomi din orice substanță simplă.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Masa molară'+'</b>'+' (notată cu litera grecească miu = μ) este masa unui mol de substanță. Are ca unitate de măsură g/mol.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Molul'+'</b>'+' este unitatea de măsură în Sistemul Internațional a cantității de substanță care conține un număr de particule egal cu numărul lui Avogadro, N'+'<sub>'+'A.'+'</sub>'+'<br>'+'<br>'+
                                        'υ = m(g) / μ(g/mol) = Masa substanței compuse(g) / Masa molară(g/mol)'+'<br>'+'<br>'+
                                        'υ = N / N'+'<sub>'+'A'+'</sub>'+' = Număr de particule / Numărul lui Avogadro'+'</li>'+'<br>'+
                                    '<li>'+'Un mol din orice gaz ocupă în condiții normale de temperatură (273 K) și presiune (10'+'<sup>'+'5'+'</sup>'+' Pa) un volum, numit '+'<b>'+'volum molar'+'</b>'+' = V'+'<sub>'+'μ'+'</sub>'+' = 22,4 L/mol'+'<br>'+'<br>'+
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
                                        'p ∙ V = ν ∙ R ∙ T'+'<br>'+'<br>'+
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
                                        'T(K) = t (°C) + 273,15'+'</li>'+
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
                                        'L = p ∙ ΔV'+'</li>'+'<br>'+
                                    
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

                                        '[Q]'+'<sub>'+'SI'+'</sub>'+' = J(joule)'+'<br>'+'<br>'+
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
                                        '- Pentru gazele monoatomice: i = 3'+'<br>'+
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
                                    '<li>'+'(ν și V const.) → ΔV = 0 → L'+'<sub>'+'V'+'</sub>'+' = p ∙ ΔV = 0'+'</li>'+'<br>'+
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
                                        'C'+'<sub>'+'p'+'</sub>'+' = C'+'<sub>'+'V'+'</sub>'+' + R'+
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
                                        'Motorul termic este un sistem care transformă căldura primită, prin arderea unui combustibilul (benzina, motorina, gazul metan etc.) în lucru mecanic.'+
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
                                        
                                        ' -'+'<b>'+'Timpul 2: Compresia'+'</b>'+' - (proces adiabatic):'+'<br>'+'<br>'+
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
                                        'Randamentul motorului termic Otto (η) este o mărime fizică egală cu raportul dintre lucrul mecanic efectuat de motor (L) și căldura primită (Q).'+'<br>'+'<br>'+
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

                                        'η = 1 - (1 / y) ∙ (a'+'<sup>'+'y-1'+'</sup>'+' / ε'+'<sup>'+'y-1'+'</sup>'+'(a-1))'+
                                        
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
                                        'Carnot a fost primul care a arătat că nu este posibil să funcționeze o mașină termică cu un singur termostat, având nevoie de cel puțin două termostate. Astfel, sistemul primește căldură de la o sursă caldă (termostat cu T'+'<sub>'+'1'+'</sub>'+') și cedează căldură unei surse reci (termostat cu T'+'<sub>'+'2'+'</sub>'+').'+
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
                                        'Randamentul ciclului Carnot este întotdeauna subunitar, deoarece T'+'<sub>'+'2'+'</sub>'+' ≠ 0'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Randamentul ciclului Carnot depinde numai de temperatura sursei calde (T'+'<sub>'+'1'+'</sub>'+') și a celei reci (T'+'<sub>'+'2'+'</sub>'+') și nu depinde de substanța de lucru.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Randamentul unei mașini termice ireversibile este întotdeauna mai mic decît randamentul unei mașini termice care funcționează reversibil între aceleași limite de temperatură.'+
                                    '</li>'+
                                '</ul>'),

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
                            '<li>'+'Mérési egység: '+'<b>'+'&lt;'+'v'+'&gt;'+' = m/s'+'</b>'+'</ li >'+
                                    '<li>'+'Átlagsebesség: '+'<b>'+'v'+'<small>'+'m'+'</small>'+' = Δd/Δt'+'</b >'+'</li>'+
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
                            '<li>'+'<b>'+'v = v'+'<sub>'+'0'+'</sub>'+' + at'+'</b>'+'</b>'+'</ li>'+
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
                            '<li>'+'Képletként írva: '+'<b>'+'F'+'<sub>'+'a'+'</sub>'+' = F'+'<sub > '+'r'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Hooke törvénye:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Egy rugó megnyúlása egyenesen arányos a deformáló erővel (F):'+'</li>'+'<br>'+
    
                            'Δl ~ F'+'<br>'+'<br>'+
    
                            '<li>'+'Közvetlenül arányos a rugó kezdeti hosszával (l'+'<sub>'+'0'+'</sub>'+') :'+'</li>'+'<br >'+
                            
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
                            '<li>'+'Egy test gravitációs potenciálenergiája egyenlő: E'+'<sub>'+'pg'+'</sub>'+' = m ∙ g ∙ h'+'</ li >'+'<br>'+
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
        "teorieTermodinamica": ('<u>'+'<h2 class=\"p-3\" align = center>'+'Noțiuni termodinamice de bază'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                '<ul>'+
                                    '<li>'+'<b>'+'Agitația termică'+'</b>'+' este mişcarea dezordonată şi continuă a particulelor unei substanţe (atomi sau molecule).'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Difuzia'+'</b>'+' este fenomenul de pătrundere a moleculelor unei substanțe printre moleculele altei substanțe, fără intervenţia unei forţe exterioare (de la sine).'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Atomul'+'</b>'+' este cea mai mică particulă dintr-o substanță care nu mai poate fi divizată prin procedee chimice obișnuite.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Molecula'+'</b>'+' reprezintă cea mai mică particulă dintr-o substanță, care poate exista și în stare liberă și care păstrează proprietățile substanței din care provine.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Masa moleculară'+'</b>'+' este o mărime adimensională (fără unitate de măsură) care ne arată de câte ori este mai mare masa reală a unei molecule decât unitatea atomică de masă (u.a.m.).'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Masa atomică relativă (A)'+'</b>'+' este numărul care arată de câte ori masa unui atom este mai mare decât unitatea atomică de masă.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Un mol de atomi'+'</b>'+' reprezintă cantitatea, în grame, dintr-o substanţă simplă care conţine 6,022 ∙ 10'+'<sup>'+'23'+'</sup>'+' de atomi. Se notează cu litera grecească ”niu”=  υ.'+'<br>'+'<br>'+

                                        'υ = m(g) / A(g/mol) = masa de substanță simplă(g) / masa atomică(g/mol)'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Numărul lui Avogadro'+'</b>'+', notat cu N'+'<sub>'+'A'+'</sub>'+', este egal cu 6,022 ∙10'+'<sup>'+'23'+'</sup>'+' mol'+'<sup>'+'-1'+'</sup>'+' atomi şi reprezintă numărul de atomi conţinuţi într-un mol de atomi din orice substanță simplă.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Masa molară'+'</b>'+' (notată cu litera grecească miu = μ) este masa unui mol de substanță. Are ca unitate de măsură g/mol.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Molul'+'</b>'+' este unitatea de măsură în Sistemul Internațional a cantității de substanță care conține un număr de particule egal cu numărul lui Avogadro, N'+'<sub>'+'A.'+'</sub>'+'<br>'+'<br>'+
                                        'υ = m(g) / μ(g/mol) = Masa substanței compuse(g) / Masa molară(g/mol)'+'<br>'+'<br>'+
                                        'υ = N / N'+'<sub>'+'A'+'</sub>'+' = Număr de particule / Numărul lui Avogadro'+'</li>'+'<br>'+
                                    '<li>'+'Un mol din orice gaz ocupă în condiții normale de temperatură (273 K) și presiune (10'+'<sup>'+'5'+'</sup>'+' Pa) un volum, numit '+'<b>'+'volum molar'+'</b>'+' = V'+'<sub>'+'μ'+'</sub>'+' = 22,4 L/mol'+'<br>'+'<br>'+
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
                                        'p ∙ V = ν ∙ R ∙ T'+'<br>'+'<br>'+
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
                                        'T(K) = t (°C) + 273,15'+'</li>'+
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
                                        'L = p ∙ ΔV'+'</li>'+'<br>'+
                                    
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

                                        '[Q]'+'<sub>'+'SI'+'</sub>'+' = J(joule)'+'<br>'+'<br>'+
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
                                        '- Pentru gazele monoatomice: i = 3'+'<br>'+
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
                                    '<li>'+'(ν și V const.) → ΔV = 0 → L'+'<sub>'+'V'+'</sub>'+' = p ∙ ΔV = 0'+'</li>'+'<br>'+
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
                                        'C'+'<sub>'+'p'+'</sub>'+' = C'+'<sub>'+'V'+'</sub>'+' + R'+
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
                                        'Motorul termic este un sistem care transformă căldura primită, prin arderea unui combustibilul (benzina, motorina, gazul metan etc.) în lucru mecanic.'+
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
                                        
                                        ' -'+'<b>'+'Timpul 2: Compresia'+'</b>'+' - (proces adiabatic):'+'<br>'+'<br>'+
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
                                        'Randamentul motorului termic Otto (η) este o mărime fizică egală cu raportul dintre lucrul mecanic efectuat de motor (L) și căldura primită (Q).'+'<br>'+'<br>'+
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

                                        'η = 1 - (1 / y) ∙ (a'+'<sup>'+'y-1'+'</sup>'+' / ε'+'<sup>'+'y-1'+'</sup>'+'(a-1))'+
                                        
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
                                        'Carnot a fost primul care a arătat că nu este posibil să funcționeze o mașină termică cu un singur termostat, având nevoie de cel puțin două termostate. Astfel, sistemul primește căldură de la o sursă caldă (termostat cu T'+'<sub>'+'1'+'</sub>'+') și cedează căldură unei surse reci (termostat cu T'+'<sub>'+'2'+'</sub>'+').'+
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
                                        'Randamentul ciclului Carnot este întotdeauna subunitar, deoarece T'+'<sub>'+'2'+'</sub>'+' ≠ 0'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Randamentul ciclului Carnot depinde numai de temperatura sursei calde (T'+'<sub>'+'1'+'</sub>'+') și a celei reci (T'+'<sub>'+'2'+'</sub>'+') și nu depinde de substanța de lucru.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Randamentul unei mașini termice ireversibile este întotdeauna mai mic decît randamentul unei mașini termice care funcționează reversibil între aceleași limite de temperatură.'+
                                    '</li>'+
                                '</ul>'),

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
                            '<li>'+'Maßeinheit: '+'<b>'+'&lt;'+'v'+'&gt;'+' = m/s'+'</b>'+'</ li >'+
                                    '<li>'+'Durchschnittsgeschwindigkeit: '+'<b>'+'v'+'<small>'+'m'+'</small>'+' = Δd/Δt'+'</b >'+'</li>'+
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
                            '<li>'+'<b>'+'v = v'+'<sub>'+'0'+'</sub>'+' + at'+'</b>'+'</ li>'+
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
                            '<li>'+'Als Formel geschrieben: '+'<b>'+'F'+'<sub>'+'a'+'</sub>'+' = F'+'<sub > '+'r'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Hookes Gesetz:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Die Dehnung einer Feder ist direkt proportional zur Verformungskraft (F):'+'</li>'+'<br>'+
    
                            'Δl ~ F'+'<br>'+'<br>'+
    
                            '<li>'+'Direkt proportional zur anfänglichen Federlänge (l'+'<sub>'+'0'+'</sub>'+') :'+'</li>'+'<br >'+
                            
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
                        '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center >'+'Theoreme der Variations- und Erhaltungsgesetze'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                        
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
                            '<li>'+'Die potentielle Gravitationsenergie eines Körpers ist gleich: E'+'<sub>'+'pg'+'</sub>'+' = m ∙ g ∙ h'+'</ li >'+'<br>'+
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
        "teorieTermodinamica": ('<u>'+'<h2 class=\"p-3\" align = center>'+'Noțiuni termodinamice de bază'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                                '<ul>'+
                                    '<li>'+'<b>'+'Agitația termică'+'</b>'+' este mişcarea dezordonată şi continuă a particulelor unei substanţe (atomi sau molecule).'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Difuzia'+'</b>'+' este fenomenul de pătrundere a moleculelor unei substanțe printre moleculele altei substanțe, fără intervenţia unei forţe exterioare (de la sine).'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Atomul'+'</b>'+' este cea mai mică particulă dintr-o substanță care nu mai poate fi divizată prin procedee chimice obișnuite.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Molecula'+'</b>'+' reprezintă cea mai mică particulă dintr-o substanță, care poate exista și în stare liberă și care păstrează proprietățile substanței din care provine.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Masa moleculară'+'</b>'+' este o mărime adimensională (fără unitate de măsură) care ne arată de câte ori este mai mare masa reală a unei molecule decât unitatea atomică de masă (u.a.m.).'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Masa atomică relativă (A)'+'</b>'+' este numărul care arată de câte ori masa unui atom este mai mare decât unitatea atomică de masă.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Un mol de atomi'+'</b>'+' reprezintă cantitatea, în grame, dintr-o substanţă simplă care conţine 6,022 ∙ 10'+'<sup>'+'23'+'</sup>'+' de atomi. Se notează cu litera grecească ”niu”=  υ.'+'<br>'+'<br>'+

                                        'υ = m(g) / A(g/mol) = masa de substanță simplă(g) / masa atomică(g/mol)'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Numărul lui Avogadro'+'</b>'+', notat cu N'+'<sub>'+'A'+'</sub>'+', este egal cu 6,022 ∙10'+'<sup>'+'23'+'</sup>'+' mol'+'<sup>'+'-1'+'</sup>'+' atomi şi reprezintă numărul de atomi conţinuţi într-un mol de atomi din orice substanță simplă.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Masa molară'+'</b>'+' (notată cu litera grecească miu = μ) este masa unui mol de substanță. Are ca unitate de măsură g/mol.'+'</li>'+'<br>'+
                                    '<li>'+'<b>'+'Molul'+'</b>'+' este unitatea de măsură în Sistemul Internațional a cantității de substanță care conține un număr de particule egal cu numărul lui Avogadro, N'+'<sub>'+'A.'+'</sub>'+'<br>'+'<br>'+
                                        'υ = m(g) / μ(g/mol) = Masa substanței compuse(g) / Masa molară(g/mol)'+'<br>'+'<br>'+
                                        'υ = N / N'+'<sub>'+'A'+'</sub>'+' = Număr de particule / Numărul lui Avogadro'+'</li>'+'<br>'+
                                    '<li>'+'Un mol din orice gaz ocupă în condiții normale de temperatură (273 K) și presiune (10'+'<sup>'+'5'+'</sup>'+' Pa) un volum, numit '+'<b>'+'volum molar'+'</b>'+' = V'+'<sub>'+'μ'+'</sub>'+' = 22,4 L/mol'+'<br>'+'<br>'+
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
                                        'p ∙ V = ν ∙ R ∙ T'+'<br>'+'<br>'+
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
                                        'T(K) = t (°C) + 273,15'+'</li>'+
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
                                        'L = p ∙ ΔV'+'</li>'+'<br>'+
                                    
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

                                        '[Q]'+'<sub>'+'SI'+'</sub>'+' = J(joule)'+'<br>'+'<br>'+
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
                                        '- Pentru gazele monoatomice: i = 3'+'<br>'+
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
                                    '<li>'+'(ν și V const.) → ΔV = 0 → L'+'<sub>'+'V'+'</sub>'+' = p ∙ ΔV = 0'+'</li>'+'<br>'+
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
                                        'C'+'<sub>'+'p'+'</sub>'+' = C'+'<sub>'+'V'+'</sub>'+' + R'+
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
                                        'Motorul termic este un sistem care transformă căldura primită, prin arderea unui combustibilul (benzina, motorina, gazul metan etc.) în lucru mecanic.'+
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
                                        
                                        ' -'+'<b>'+'Timpul 2: Compresia'+'</b>'+' - (proces adiabatic):'+'<br>'+'<br>'+
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
                                        'Randamentul motorului termic Otto (η) este o mărime fizică egală cu raportul dintre lucrul mecanic efectuat de motor (L) și căldura primită (Q).'+'<br>'+'<br>'+
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

                                        'η = 1 - (1 / y) ∙ (a'+'<sup>'+'y-1'+'</sup>'+' / ε'+'<sup>'+'y-1'+'</sup>'+'(a-1))'+
                                        
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
                                        'Carnot a fost primul care a arătat că nu este posibil să funcționeze o mașină termică cu un singur termostat, având nevoie de cel puțin două termostate. Astfel, sistemul primește căldură de la o sursă caldă (termostat cu T'+'<sub>'+'1'+'</sub>'+') și cedează căldură unei surse reci (termostat cu T'+'<sub>'+'2'+'</sub>'+').'+
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
                                        'Randamentul ciclului Carnot este întotdeauna subunitar, deoarece T'+'<sub>'+'2'+'</sub>'+' ≠ 0'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Randamentul ciclului Carnot depinde numai de temperatura sursei calde (T'+'<sub>'+'1'+'</sub>'+') și a celei reci (T'+'<sub>'+'2'+'</sub>'+') și nu depinde de substanța de lucru.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'Randamentul unei mașini termice ireversibile este întotdeauna mai mic decît randamentul unei mașini termice care funcționează reversibil între aceleași limite de temperatură.'+
                                    '</li>'+
                                '</ul>'),

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
                            '<li>'+'Unité de mesure : '+'<b>'+'&lt;'+'v'+'&gt;'+' = m/s'+'</b>'+'</ li >'+
                                    '<li>'+'Vitesse moyenne : '+'<b>'+'v'+'<small>'+'m'+'</small>'+' = Δd/Δt'+'</b >'+'</li>'+
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
                            '<li>'+'<b>'+'v = v'+'<sub>'+'0'+'</sub>'+' + at'+'</b>'+'</ li>'+
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
                            '<li>'+'Écrit sous forme de formule : '+'<b>'+'F'+'<sub>'+'a'+'</sub>'+' = F'+'<sub > '+'r'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Loi de Hooke :'+'</h2>'+
                        '<ul>'+
                            '<li>'+'L\'allongement d\'un ressort est directement proportionnel à la Force déformante (F) :'+'</li>'+'<br>'+
    
                            'Δl ~ F'+'<br>'+'<br>'+
    
                            '<li>'+'Directement proportionnel à la longueur initiale du ressort (l'+'<sub>'+'0'+'</sub>'+') :'+'</li>'+'<br >'+
                            
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
                        '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center >'+'Théorèmes des lois de variation et de conservation'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                        
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
                            '<li>'+'L\'énergie potentielle gravitationnelle d\'un corps est égale à : E'+'<sub>'+'pg'+'</sub>'+' = m ∙ g ∙ h'+'</ li >'+'<br>'+
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
                                    '<li>'+'<b>'+'L\'atome'+'</b>'+' est la plus petite particule d\'une substance qui ne peut pas être divisée davantage par des processus chimiques ordinaires.'+'</li >' +'<br>'+
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
                                '<li>'+'<b>'+'L\'état d\'un système thermodynamique'+'</b>'+', à un certain moment, est caractérisé par certaines grandeurs physiques appelées paramètres d\'état.'+'</li >'+'<br>'+
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
                                    '<li>'+'Deux systèmes thermodynamiques fermés isolés adiabatiquement de l\'extérieur qui n\'échangent pas d\'énergie entre eux ont la même température, appelée '+'<b>'+'température empirique.'+'</b> '+'< /li>'+'<br>'+
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
                                    
                                    'La mesure de l\'énergie transférée au système dans les conditions des interactions qui entraînent la variation des paramètres de position sous l\'action de certaines forces est appelée '+'<b>'+'travail mécanique.'+'</b >'+'<br>'+' <br>'+
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
                                        '- Le temps de fonctionnement est la durée de déplacement du piston depuis le point mort haut = PMH (le cylindre ferme un volume minimum de substance) jusqu\'au point mort bas = PMI (le cylindre ferme un volume maximum de substance) et vice versa.'+'< br >'+'<br>'+
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
                                        ' - Q'+'<sub>'+'23'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T '+'<sub>'+'3'+'</sub>'+' – T'+'<sub>'+'2'+'</sub>'+') = Q'+'<sub >'+'1'+'</sub>'+' > 0'+'<br>'+
                                        ' - Q'+'<sub>'+'34'+'</sub>'+' = 0'+'<br>'+
                                        ' - Q'+'<sub>'+'41'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T '+'<sub>'+'31'+'</sub>'+' – T'+'<sub>'+'4'+'</sub>'+') = Q'+'<sub >'+'2'+'</sub>'+' < 0'+'<br>'+'<br>'+

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
                                    '- Q'+'<sub>'+'23'+'</sub>'+' = ν ∙ C'+'<sub>'+'p'+'</sub>'+' ∙ (T '+'<sub>'+'3'+'</sub>'+' – T'+'<sub>'+'2'+'</sub>'+') = Q'+'<sub >'+'1'+'</sub>'+' > 0 (processus isobare)'+'<br>'+
                                    '- Q'+'<sub>'+'34'+'</sub>'+' = 0 (processus adiabatique)'+'<br>'+
                                    '- Q'+'<sub>'+'41'+'</sub>'+' = ν ∙ C'+'<sub>'+'V'+'</sub>'+' ∙ (T '+'<sub>'+'1'+'</sub>'+' – T'+'<sub>'+'4'+'</sub>'+') = Q'+'<sub >'+'2'+'</sub>'+' < 0 (processus isochore)'+'<br>'+'<br>'+

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
                                        'Le rendement du cycle de Carnot (η) est une grandeur physique égale au rapport entre le travail mécanique effectué par le moteur (L) et la chaleur reçue (Q'+'<sub>'+'1'+'</sub >'+'). '+'<br>'+'<br>'+
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
                                        'La performance du cycle Carnot dépend uniquement de la température de la source chaude (T'+'<sub>'+'1'+'</sub>'+') et de la source froide (T'+'<sub >'+'2' +'</sub>'+') et ne dépend pas de la substance active.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        "Le rendement d'un moteur thermique irréversible est toujours inférieur au rendement d'un moteur thermique fonctionnant de manière réversible entre les mêmes limites de température."+
                                    '</li>'+
                                '</ul>'),

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
                            '<li>'+'Единица измерения: '+'<b>'+'&lt;'+'v'+'&gt;'+' = м/с'+'</b>'+'</ li >'+
                                    '<li>'+'Средняя скорость: '+'<b>'+'v'+'<small>'+'m'+'</small>'+' = Δd/Δt'+'</b >'+'</li>'+
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
                            '<li>'+'<b>'+'v = v'+'<sub>'+'0'+'</sub>'+' + at'+'</b>'+'</ ли>'+
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
                            '<li>'+'Записывается в виде формулы: '+'<b>'+'F'+'<sub>'+'a'+'</sub>'+' = F'+'<sub > '+'r'+'</sub>'+'</b>'+'</li>'+
                        '</ul>'+
                        '<h2 class=\"p-3\">'+'Закон Гука:'+'</h2>'+
                        '<ul>'+
                            '<li>'+'Удлинение пружины прямо пропорционально деформирующей силе (F):'+'</li>'+'<br>'+
    
                            'Δl ~ F'+'<br>'+'<br>'+
    
                            '<li>'+'Прямо пропорционально начальной длине пружины (l'+'<sub>'+'0'+'</sub>'+') :'+'</li>'+'<br >'+
                            
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
                        '<br>'+'<br>'+'<br>'+'<br>'+'<u>'+'<h2 class=\"p-3\" align = center >'+'Теоремы законов вариации и сохранения'+'</h2>'+'<br>'+'<br>'+'<br>'+'</u>'+
                        
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
                            '<li>'+'Гравитационная потенциальная энергия тела равна: E'+'<sub>'+'pg'+'</sub>'+' = m ∙ g ∙ h'+'</ ли >'+'<br>'+
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
                                '<li>'+'<b>'+'Атом'+'</b>'+' — это мельчайшая частица вещества, которую невозможно разделить обычными химическими процессами.'+'</li >'+ '<br>'+
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
                                '<li>'+'<b>'+'Состояние термодинамической системы'+'</b>'+' в определенный момент характеризуется определенными физическими величинами, называемыми параметрами состояния.'+'</ ли >'+'<br>'+
                                '<li>'+'<b>'+'Принцип термодинамического равновесия'+'</b>'+':'+'<br>'+'<br>'+

                                    'Изолированная термодинамическая система самопроизвольно развивается к состоянию термодинамического равновесия, из которого она никогда не выходит сама.'+'</li>'+'<br>'+
                                '<li>'+'<b>'+'Состояние термодинамического равновесия'+'</b>'+' системы может быть изменено контактным путем :'+'<br>'+'<br>' +
                                    '- механическое с внешней средой'+'<br>'+
                                    '- термический с другой средой (при соприкосновении двух тел с разными температурами) или с внешней средой'+'<br>'+
                                    '- обмен веществ с внешней средой или другой средой'+'</li>'+'<br>'+
                                        '<li>'+'<b>'+'Термодинамический процесс'+'</b>'+' (преобразование состояний) представляет собой переход системы из одного состояния в другое.'+'</li>' +' <br>'+
                                        '<li>'+'<b>'+'Квазистатическое преобразование'+'</b>'+' происходит, когда промежуточные состояния, через которые проходит система, являются состояниями теплового равновесия, когда параметры состояния изменяются очень медленно. ' +'</li>'+'<br>'+
                                        '<li>'+'<b>'+'Обратимый процесс'+'</b>'+' — это квазистатическое преобразование, которое может происходить в обоих направлениях, через одни и те же промежуточные состояния.'+'</ li>'+ '<br>'+
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
                                        
                                        'Мера энергии, передаваемой системе в условиях взаимодействий, приводящих к изменению параметров положения под действием некоторых сил, называется '+'<b>'+'механической работой.'+'</b >'+'<br>'+' <br>'+
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
                                    '- Q'+'<sub>'+'23'+'</sub>'+' = ν ∙ C'+'<sub>'+'p'+'</sub>'+' ∙ (T '+'<sub>'+'3'+'</sub>'+' – T'+'<sub>'+'2'+'</sub>'+') = Q'+'<sub >'+'1'+'</sub>'+' > 0 (изобарический процесс)'+'<br>'+
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
                                        'КПД цикла Карно (η) — это физическая величина, равная отношению механической работы, совершаемой двигателем (L), к полученному теплу (Q'+'<sub>'+'1'+'</sub >'+'). '+'<br>'+'<br>'+
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
                                        'Производительность цикла Карно зависит только от температуры горячего источника (T'+'<sub>'+'1'+'</sub>'+') и холодного (T'+'<sub >'+'2' +'</sub>'+') и не зависит от рабочего вещества.'+
                                    '</li>'+'<br>'+
                                    '<li>'+
                                        'КПД необратимой тепловой машины всегда ниже, чем КПД тепловой машины, обратимо работающей в тех же пределах температуры.'+
                                    '</li>'+
                                '</ul>'),

        "teorieInapoiBtn": "Вернуться в меню выбора",
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