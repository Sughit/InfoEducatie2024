let questions1 = [
    {
    numb: 1,
    question: "Care din următoarele ecuații reprezintă formula Galilei?",
    answer: '<span>v<sup>2</sup> = v<sub>0</sub><sup>2</sup> + 2a(x - x<sub>0</sub>)</span>',
    options: [
      'v<sup>2</sup> = v<sub>0</sub><sup>2</sup> - 2ax',
      'v<sup>2</sup> + v<sub>0</sub><sup>2</sup> = 2ax',
      'v<sup>2</sup> = v<sub>0</sub><sup>2</sup> + 2a(x - x<sub>0</sub>)',
      'v<sup>2</sup> + v<sub>0</sub><sup>2</sup> = 2ax<sub>0</sub>'
    ],
    tag: "./teorieMecanica.html#1"
  },
    {
    numb: 2,
    question: "Care este unitatea de măsură pentru accelerație?",
    answer: '<span>m / s<sup>2</sup></span>',
    options: [
      'm / s<sup>2</sup>',
      'm<sup>2</sup> / s',
      'm / s',
      'm ∙ s'
    ],
    tag: "./teorieMecanica.html#2"
  },
    {
    numb: 3,
    question: "Formula forței de frecare este:",
    answer: "<span>F<sub>f</sub> = μ ∙ N</span>",
    options: [
      "F<sub>f</sub> = μ ∙ F",
      "F<sub>f</sub> = μ ∙ N",
      "F<sub>f</sub> = v ∙ N",
      "F<sub>f</sub> = -N ∙ a"
    ],
    tag: "./teorieMecanica.html#3"
  },
    {
    numb: 4,
    question: "Când suspendăm un corp de un fir inextensibil apar două forțe pereche:",
    answer: "<span>Forța de apăsare a corpului și Tensiunea în fir</span>",
    options: [
      "Tensiunea în fir și Alungirea firului",
      "Forța de apăsare a corpului și Tensiunea în fir",
      "Forța de frecare și Tensiunea în fir",
      "Forța de apăsare a corpului și Tensiunea corpului"
    ],
    tag: "./teorieMecanica.html#4"
  },
    {
    numb: 5,
    question: "Forța de reacțiune din principiul acțiunii și reacțiunii:",
    answer: "<span>Este de aceeași mărime și de aceeași direcție, dar de sens contrar față de cea de acțiune</span>",
    options: [
      "Este de aceeași mărime, direcție și același sens cu cea de acțiune",
      "Este de mărime mai mică, de aceeași direcție, dar de sens contrar față de cea de acțiune",
      "Este calculată independent de forța de acțiune",
      "Este de aceeași mărime și de aceeași direcție, dar de sens contrar față de cea de acțiune"
    ],
    tag: "./teorieMecanica.html#5"
  },
];

let questions2 = [
  {
  numb: 1,
  question: "Legea variației energiei potențiale gravitaționale:",
  answer: '<span>ΔE<sub>pg</sub> = -L<sub>G</sub></span>',
  options: [
    'ΔE<sub>pg</sub> = 1 / L<sub>G</sub>',
    'ΔE<sub>pg</sub> = -L<sub>G</sub>',
    'ΔE<sub>pg</sub> = L<sub>G</sub>',
    'ΔE<sub>pg</sub> = L<sub>Total</sub>'
  ],
  tag: "./teorieMecanica.html#6"
},
  {
  numb: 2,
  question: "Energia potențială gravitațională a unui corp este:",
  answer: '<span>E<sub>pg</sub> = m ∙ g ∙ h</span>',
  options: [
    'E<sub>pg</sub> = m ∙ g ∙ h',
    'E<sub>pg</sub> = m ∙ g / h',
    'ΔE<sub>pg</sub> = m ∙ g ∙ h',
    'E<sub>pg</sub> = m ∙ a ∙ h'
  ],
  tag: "./teorieMecanica.html#7"
},
  {
  numb: 3,
  question: "Formula lucrului mecanic este:",
  answer: "<span>L = F ∙ d</span>",
  options: [
    "L = F / d",
    "L = F ∙ d",
    "L = 1 / (F ∙ d)",
    "L = F ∙ 2d"
  ],
  tag: "./teorieMecanica.html#8"
},
  {
  numb: 4,
  question: "Care este legea variației energiei cinetice?",
  answer: "<span>ΔE<sub>c</sub> = L<sub>Total</sub></span>",
  options: [
    "E<sub>c</sub> =  L / Δt",
    "ΔE<sub>c</sub> = L<sub>Total</sub>",
    "ΔE<sub>c</sub> = m ∙ v<sub>2</sub> / 2",
    "ΔE<sub>c</sub> = m ∙ g ∙ h"
  ],
  tag: "./teorieMecanica.html#9"
},
  {
  numb: 5,
  question: "Puterea mecanică:",
  answer: "<span>Este o mărime fizică scalară</span>",
  options: [
    "Este produsul dintre lucrul mecanic efectuat și timpul în care se efectuează acest lucru mecanic",
    "Este o mărime fizică vectorială",
    "Este mărimea ce caracterizează capacitatea unui corp de a efectua lucru mecanic",
    "Este o mărime fizică scalară"
  ],
  tag: "./teorieMecanica.html#10"
},
];
let questions3 = [
  {
  numb: 1,
  question: "Ce este agitația termică?",
  answer: '<span>Mişcarea dezordonată şi continuă a particulelor unei substanţe</span>',
  options: [
    'Mişcarea dezordonată şi continuă a particulelor unei substanţe',
    'Mişcarea ordonată şi continuă a particulelor unei substanţe',
    'Mişcarea circulară a particulelor unei substanţe',
    'Mişcarea rectiliniei a particulelor unei substanţe'
  ],
  tag: "./teorieTermodinamica.html#1"
},
  {
  numb: 2,
  question: "Numărul lui Avogadro este egal cu",
  answer: '<span>6,022 ∙10<sup>23</sup> mol<sup>-1</sup> atomi</span>',
  options: [
    '6,023 ∙10<sup>22</sup> mol<sup>-1</sup> atomi',
    '6,022 ∙10<sup>21</sup> mol<sup>-1</sup> atomi',
    '6,022 ∙10<sup>23</sup> mol<sup>-1/2</sup> atomi',
    '6,022 ∙10<sup>23</sup> mol<sup>-1</sup> atomi'
  ],
  tag: "./teorieTermodinamica.html#2"
},
  {
  numb: 3,
  question: "Relația de transformare între scara Celsius și Kelvin:",
  answer: "<span>T(K) = t (°C) + 273,15</span>",
  options: [
    "T(K) = t (°C) + 275,13",
    "T(K) = t (°C) + 215,15",
    "T(K) = t (°C) + 273,15",
    "T(K) = t (°C) + 271,13"
  ],
  tag: "./teorieTermodinamica.html#3"  
},
  {
  numb: 4,
  question: "Ecuația de stare descrie dependența dintre parametrii de stare ai unui sistem termodinamic:",
  answer: "<span>p ∙ V = ν ∙ R ∙ T</span>",
  options: [
    "R ∙ V = ν ∙ p ∙ T",
    "p ∙ V = ν ∙ R ∙ T",
    "V = ν ∙ R ∙ T",
    "p ∙ V = ν ∙ R / T"
  ],
  tag: "./teorieTermodinamica.html#4"  
},
  {
  numb: 5,
  question: "Volumul molar este egal cu:",
  answer: "<span>V<sub>μ</sub> = 22,4 L/mol</span>",
  options: [
    "V<sub>μ</sub> = 24,2 L/mol",
    "V<sub>μ</sub> = 24,4 L/mol",
    "V<sub>μ</sub> = 2,24 L/mol",
    "V<sub>μ</sub> = 22,4 L/mol"
  ],
  tag: "./teorieTermodinamica.html#5"  
},
];

let questions4 = [
  {
  numb: 1,
  question: "Lucrul mecanic efectuat de sistemul termodinamic într-o transformare izobară este:",
  answer: '<span>L = p ∙ ΔV</span>',
  options: [
    'L = p ∙ V',
    'L = T ∙ ΔV',
    'L = p ∙ ΔV',
    'L = R ∙ ΔV'
  ],
  tag: "./teorieTermodinamica.html#6" 
},
  {
  numb: 2,
  question: "Căldura în sistemul internațional se măsoară în:",
  answer: '<span>J(joule)</span>',
  options: [
    'J(joule)',
    'V(volt)',
    'J/Kg∙K',
    'J/Kg'
  ],
  tag: "./teorieTermodinamica.html#7" 
},
  {
  numb: 3,
  question: "Gradul de libertate al gazelor monoatomice este de:",
  answer: "<span>i = 3</span>",
  options: [
    "i = 1",
    "i = 5",
    "i = 6",
    "i = 3"
  ],
  tag: "./teorieTermodinamica.html#8" 
},
  {
  numb: 4,
  question: "Într-o transformare izocoră:",
  answer: "<span>Volumul este constant</span>",
  options: [
    "Temperatura este constantă",
    "Volumul este constant",
    "Presiunea este constantă",
    "Căldura este egală cu 0"
  ],
  tag: "./teorieTermodinamica.html#9" 
},
  {
  numb: 5,
  question: "Relația dintre căldurile molare este:",
  answer: "<span>C<sub>p</sub> = C<sub>V</sub> + R</span>",
  options: [
    "C<sub>p</sub> = C<sub>V</sub> / R",
    "C<sub>p</sub> = C<sub>V</sub>",
    "C<sub>p</sub> = C<sub>V</sub> + R",
    "C<sub>p</sub> = C<sub>V</sub> ∙ R"
  ],
  tag: "./teorieTermodinamica.html#10"
},
];
let questions5 = [
  {
  numb: 1,
  question: "În ce constă al doilea timp de funționare al motorului Otto?",
  answer: '<span>Compresia - (proces adiabatic)</span>',
  options: [
    'Aprinderea - (proces izocor)',
    'Admisia - (proces izobar)',
    'Compresia - (proces adiabatic)',
    'Evacuarea - (proces izocor) și (proces izobar)'
  ],
  tag: "./teorieTermodinamica.html#11"
},
  {
  numb: 2,
  question: "Motorul termic:",
  answer: '<span>Transformă căldura primită, prin arderea unui combustibilul în lucru mecanic.</span>',
  options: [
    'Transformă căldura primită, prin arderea unui combustibilul în lucru mecanic.',
    'Transformă căldura primită, prin arderea unui combustibilul în energie.',
    'Transformă căldura primită, prin comprimarea combustibilul în lucru mecanic.',
    'Transformă căldura primită, prin amestecare cu alte substanțe în lucru mecanic.'
  ],
  tag: "./teorieTermodinamica.html#12"
},
  {
  numb: 3,
  question: "Randamentul motorului termic Diesel este egal cu :",
  answer: "<span>Raportul dintre lucrul mecanic efectuat de motor și căldura primită.</span>",
  options: [
    "Raportul dintre lucrul mecanic efectuat de motor și căldura primită.",
    "Raportul dintre căldura primită  și lucrul mecanic efectuat de motor.",
    "Raportul dintre lucrul mecanic efectuat de motor și căldura molară.",
    "Raportul dintre lucrul mecanic efectuat de motor și temperatură."
  ],
  tag: "./teorieTermodinamica.html#13"
},
  {
  numb: 4,
  question: "Randamentul motorului termic Diesel are formula:",
  answer: "<span>η = 1 - (1 / y) ∙ (a<sup>y-1</sup> / ε<sup>y-1</sup>(a-1))</span>",
  options: [
    "η = 1 - (a<sup>y-1</sup> / ε<sup>y-1</sup>(a-1))",
    "η = 1 - (1 / ε<sup>y-1</sup>)",
    "η = 1 - (1 / y) ∙ (a<sup>y-1</sup> / ε<sup>y-1</sup>(a-1))",
    "η = (1 / y) ∙ (a<sup>y-1</sup> / ε<sup>y-1</sup>(a-1))"
  ],
  tag: "./teorieTermodinamica.html#14"
},
];
let questions6 = [
  {
  numb: 1,
  question: "Randamentul ciclului Carnot este:",
  answer: '<span>Întotdeauna subunitar</span>',
  options: [
    'Egal cu raportul dintre căldura primită și lucrul mecanic efectuat de motor.',
    'Întotdeauna supraunitar',
    'Întotdeauna subunitar',
    'Egal cu 0'
  ],
  tag: "./teorieTermodinamica.html#15"
},
  {
  numb: 2,
  question: "Randamentul ciclului Carnot depinde:",
  answer: '<span>Numai de temperatura sursei calde și a celei reci și nu depinde de substanța de lucru.</span>',
  options: [
    'Numai de temperatura sursei calde și a celei reci și nu depinde de substanța de lucru.',
    'De temperatura sursei calde și a celei reci cât și de substanța de lucru.',
    'De densitatea substanței de lucru.',
    'Numai de temperatura substanța de lucru și nu depinde de temperatura sursei calde și a celei reci.'
  ],
  tag: "./teorieTermodinamica.html#16"
},
  {
  numb: 3,
  question: "Carnot a fost primul care a arătat că:",
  answer: "<span>Nu este posibil să funcționeze o mașină termică cu un singur termostat, având nevoie de cel puțin două termostate.</span>",
  options: [
    "O mașină termică are nevoie de două surse reci",
    "Nu este posibil să funcționeze o mașină termică doar cu două termostate, având nevoie de cel puțin trei termostate.",
    "Nu este necesar pentru a funcționa o mașină termică cu două termostate, ci este nevoie doar de unul singur",
    "Nu este posibil să funcționeze o mașină termică cu un singur termostat, având nevoie de cel puțin două termostate."
  ],
  tag: "./teorieTermodinamica.html#17"
},
];

let questions7 = [
  {
  numb: 1,
  question: "Unitate de măsură în S.I pentru tensiunea electrică este:",
  answer: '<span>Volt (V)</span>',
  options: [
    'Amperé (A)',
    'Volt (V)',
    'Watt (W)',
    'Ohm (Ω)'
  ],
  tag: "./teorieElectromecanica.html#1"
},
  {
  numb: 2,
  question: "Formula intensității curentului este egală cu:",
  answer: '<span>Raportul dintre sarcina electrică și timp</span>',
  options: [
    'Raportul dintre sarcina electrică și timp',
    'Raportul dintre tensiunea electrică și timp',
    'Raportul dintre lucrul mecanic și sarcina electrică',
    'Raportul dintre timp și sarcina electrică'
  ],
  tag: "./teorieElectromecanica.html#2"
},
  {
  numb: 3,
  question: "Relația dintre cele trei tensiuni electrice ale unui circuit electric este:",
  answer: "<span>E = U + u</span>",
  options: [
    "E = U + u",
    "E = U / u",
    "U = E / u",
    "E = U ∙ u"
  ],
  tag: "./teorieElectromecanica.html#3"
},
  {
  numb: 4,
  question: "Tensiunea internă are formula:",
  answer: "<span>u = L<sub>int</sub> ∙ q</span>",
  options: [
    "u = U / q",
    "u = L<sub>int</sub> ∙ q",
    "u = L<sub>int</sub> / q",
    "u = q / L<sub>int</sub>"
  ],
  tag: "./teorieElectromecanica.html#4"
},
  {
  numb: 5,
  question: "Sensul convențional al curentului electric continuu printr-un circuit este: ",
  answer: "<span>De la borna pozitivă a sursei spre borna negativă</span>",
  options: [
    "Dat de către intensitatea curentului",
    "Același cu al electronilor",
    "De la borna negativă a sursei spre borna pozitivă",
    "De la borna pozitivă a sursei spre borna negativă"
  ],
  tag: "./teorieElectromecanica.html#5"
},
];

let questions8 = [
  {
  numb: 1,
  question: "Legea lui Ohm pentru o porțiune de circuit:",
  answer: '<span>I = U / R</span>',
  options: [
    'I = U / R',
    'I = U ∙ R',
    'U = R / I',
    'R = U ∙ I'
  ],
  tag: "./teorieElectromecanica.html#6"
},
  {
  numb: 2,
  question: "Dependența rezistenței electrice de natura și de dimensiunile conductorului este:",
  answer: '<span>R = ρ ∙ (l / s)</span>',
  options: [
    'R = l / s',
    'R = ρ / s)',
    'R = l ∙ (ρ / s)',
    'R = ρ ∙ (l / s)'
  ],
  tag: "./teorieElectromecanica.html#7"
},
  {
  numb: 3,
  question: "Legea lui Ohm pentru întregul circuit:",
  answer: "<span>I = E / (R + r)</span>",
  options: [
    "E = (R + r) / E",
    "I = E ∙ (R + r)",
    "I = E / (R + r)",
    "I = E"
  ],
  tag: "./teorieElectromecanica.html#8"
},
  {
  numb: 4,
  question: "Rezistența în S.I se măsoară în:",
  answer: "<span>Ohm (Ω)</span>",
  options: [
    'Watt (W)',
    'Ohm (Ω)',
    'Volt (V)',
    'Amperé (A)'
  ],
  tag: "./teorieElectromecanica.html#9"
},
  {
  numb: 5,
  question: "Formula intensității curentului electric de scurtcircuit este:",
  answer: "<span>I<sub>sc</sub> = E / r</span>",
  options: [
    "I<sub>sc</sub> = R / r",
    "I<sub>sc</sub> = E / r",
    "I<sub>sc</sub> = E / R",
    "I<sub>sc</sub> = r / E"
  ],
  tag: "./teorieElectromecanica.html#10"
},
];

let questions9 = [
  {
  numb: 1,
  question: "Tensiunea electromotoare:",
  answer: '<span>Se ia cu plus dacă sensul curentului electric prin sursă este identic cu cel al ochiului ales arbitrar</span>',
  options: [
    'Se ia cu plus dacă sensul curentului electric prin sursă este opus cu cel al ochiului ales arbitrar ',
    'Se ia cu plus dacă sensul curentului electric prin sursă este identic cu cel al ochiului ales arbitrar',
    'Se ia cu minus dacă intensitatea este pozitivă',
    'Se ia cu minus dacă tensiunea este negativă'
  ],
  tag: "./teorieElectromecanica.html#11"
},
  {
  numb: 2,
  question: "Ce reprezintă nodul de circuit?",
  answer: '<span>Intersecția a cel puțin trei conductoare electrice</span>',
  options: [
    'Punctul în care circuitul s-a înnodat',
    'Intersecția a cel puțin două conductoare electrice',
    'Locul în care a fost amplasat un întrerupător',
    'Intersecția a cel puțin trei conductoare electrice'
  ],
  tag: "./teorieElectromecanica.html#12"
},
  {
  numb: 3,
  question: "Suma algebrică a intensităților curenților care se întâlnesc într-un nod de circuit este:",
  answer: "<span>Nulă</span>",
  options: [
    "Egală cu raportul dintre tensiunea electromotoare și rezistența întregului circuit ",
    "Egală cu 1",
    "Nulă",
    "Negativă"
  ],
  tag: "./teorieElectromecanica.html#13"
},
  {
  numb: 4,
  question: "Suma algebrică a tensiunilor electromotoare dintr-un ochi de rețea este egală cu:",
  answer: "<span>Suma algebrică a tensiunilor de pe fiecare latură din acel ochi de circuit</span>",
  options: [
    'Suma algebrică a tensiunilor de pe fiecare latură din acel ochi de circuit',
    'Suma algebrică a rezistențelor de pe fiecare latură din acel ochi de circuit',
    'Suma algebrică a intensităților de pe fiecare latură din acel ochi de circuit',
    'Egală cu 0'
  ],
  tag: "./teorieElectromecanica.html#14"
},
];

let questions10 = [
  {
  numb: 1,
  question: "Rezistența echivalentă a unei grupări serie de rezistoare este egală cu:",
  answer: '<span>R<sub>s</sub> = R<sub>1</sub> + R<sub>2</sub></span>',
  options: [
    'R<sub>s</sub> = R<sub>1</sub> / R<sub>2</sub>',
    'R<sub>s</sub> = R<sub>1</sub> + R<sub>2</sub>',
    'R<sub>s</sub> = R<sub>2</sub> ∙ R<sub>2</sub>',
    'R<sub>s</sub> = R<sub>2</sub> / R<sub>1</sub>'
  ],
  tag: "./teorieElectromecanica.html#15"
},
  {
  numb: 2,
  question: "Inversul rezistenței echivalente a unei grupări paralel de rezistoare este egal cu:",
  answer: '<span>1 / R<sub>p</sub> = (1 / R<sub>1</sub>) + (1 / R<sub>2</sub>)</span>',
  options: [
    '1 / R<sub>p</sub> = 1 / R<sub>2</sub> ∙ R<sub>2</sub>',
    '1 / R<sub>p</sub> = R<sub>2</sub> / R<sub>1</sub>',
    '1 / R<sub>p</sub> = R<sub>1</sub> + R<sub>2</sub>',
    '1 / R<sub>p</sub> = (1 / R<sub>1</sub>) + (1 / R<sub>2</sub>)'
  ],
  tag: "./teorieElectromecanica.html#16"
},
  {
  numb: 3,
  question: "Rezistența internă a grupării serie de generatoare electrice identice:",
  answer: "<span>r<sub>s</sub> = n · r</span>",
  options: [
    "r<sub>s</sub> = n · r",
    "r<sub>s</sub> = n · 1 / r",
    "r<sub>s</sub> = n · 2r",
    "r<sub>s</sub>= 1 / (n · r)"
  ],
  tag: "./teorieElectromecanica.html#17"
},
  {
  numb: 4,
  question: "Rezistența internă a grupării paralel de generatoare electrice identice:",
  answer: "<span>r<sub>p</sub> = r / n</span>",
  options: [
    'r<sub>p</sub> = r / 2n',
    'r<sub>p</sub> = 2r / n',
    'r<sub>p</sub> = r / n',
    'r<sub>p</sub> = n · (1 / r) '
  ],
  tag: "./teorieElectromecanica.html#18"
},
{
  numb: 5,
  question: "Un grup de rezistoare se înlocuiește cu unul singur, denumit rezistor ",
  answer: "<span>Echivalent</span>",
  options: [
    'Aferent',
    'Simetric',
    'Rezultant',
    'Echivalent'
  ],
  tag: "./teorieElectromecanica.html#19"
},
];

let questions11 = [
  {
  numb: 1,
  question: "Cu ce se notează energia electrică?",
  answer: '<span>W</span>',
  options: [
    'W',
    'E',
    'E<sub>e</sub>',
    'F'
  ],
  tag: "./teorieElectromecanica.html#20"
},
  {
  numb: 2,
  question: "Formula energiei electrice consumate pe întreg circuitul:",
  answer: '<span>W<sub>tot</sub> = E ∙ I ∙ Δt</span>',
  options: [
    'W<sub>tot</sub> = E / q',
    'W<sub>tot</sub> = U ∙ I ∙ Δt',
    'W<sub>tot</sub> = E ∙ I ∙ Δt',
    'W<sub>tot</sub> = R ∙ I'
  ],
  tag: "./teorieElectromecanica.html#21"
},
  {
  numb: 3,
  question: "Puterea dezvoltată de rezistor este maximă când: ",
  answer: "<span>R = r</span>",
  options: [
    "W<sub>gen</sub> = W<sub>tot>/sub>",
    "U = u",
    "R = R / r",
    "R = r"
  ],
  tag: "./teorieElectromecanica.html#22"
},
  {
  numb: 4,
  question: "Randamentul electric al unui consumator este dat de relația:",
  answer: "<span>η = W<sub>utilă</sub> / W<sub>totală</sub> = P<sub>exterioară</sub> / P<sub>totală</sub></span>",
  options: [
    'η = W<sub>utilă</sub> / W<sub>totală</sub> = P<sub>exterioară</sub> / P<sub>totală</sub>',
    'η = W<sub>utilă</sub> / P<sub>exterioară</sub> = W<sub>totală</sub> / P<sub>totală</sub>',
    'η = W<sub>utilă</sub> / P<sub>totală</sub> = W<sub>totală</sub> / P<sub>exterioară</sub>',
    'η = W<sub>totală</sub> / W<sub>utilă</sub> = P<sub>totală</sub> / P<sub>exterioară</sub>'
  ],
  tag: "./teorieElectromecanica.html#23"
},
{
  numb: 5,
  question: "Legea lui Joule are formula: ",
  answer: "<span>Q = R ∙ I<sup>2</sup> ∙ Δt</span>",
  options: [
    'Q = R ∙ (I<sup>2</sup> ∙ Δt)',
    'Q = I<sup>2</sup> / (R ∙ Δt)',
    'Q = R ∙ I<sup>2</sup> ∙ Δt',
    'Q = (I<sup>2</sup> ∙ Δt) / R'
  ],
  tag: "./teorieElectromecanica.html#24"
},
];

let questions12 = [
  {
  numb: 1,
  question: "Indicele de refracție al unui mediu transparent este: ",
  answer: '<span>n = c / v</span>',
  options: [
    'n = v / c',
    'n = c ∙ v',
    'n = c / v',
    'n = 1 / (c ∙ v)'
  ],
  tag: "./teorieOptica.html#1"
},
  {
  numb: 2,
  question: "Raza incidentă , normala la suprafață de separare și raza refractată sunt:",
  answer: '<span>coplanare</span>',
  options: [
    'egale',
    'perpendiculare',
    'coplanare',
    'paralele'
  ],
  tag: "./teorieOptica.html#2"
},
  {
  numb: 3,
  question: "Unghiul maxim de incidență este: ",
  answer: "<span>i = 90°</span>",
  options: [
    'i = 30°',
    'i = 90°',
    'i = 180°',
    'i = 45°'
  ],
  tag: "./teorieOptica.html#3"
},
{
  numb: 4,
  question: "Lentilele convergente: ",
  answer: "<span>Sunt mai groase la mijloc și mai subțiri la capete</span>",
  options: [
    'Sunt mai groase la mijloc și mai subțiri la capete',
    'Micșorează obiectul',
    'Sunt mai groase la capete și mai subțiri la mijloc',
    'Li se mai zice și lentile negative'
  ],
  tag: "./teorieOptica.html#4"
},
];

let questions13 = [
  {
  numb: 1,
  question: "Cu cât este egală viteza luminii în vid?",
  answer: '<span>300.000.000 m/s</span>',
  options: [
    '400.000.000 m/s',
    '300.000.000 m/s',
    '250.000.000 m/s',
    '80.000.000 m/s'
  ],
  tag: "./teorieOptica.html#5"
},
  {
  numb: 2,
  question: "De ce fasciculele colorate ies din prismă sub unghiuri diferite ?",
  answer: '<span>Deoarece au viteze diferite</span>',
  options: [
    'Pentru că anumite culori încălzesc prisma',
    'Fiindcă unele culori se resping',
    'Pentru că au frecvențe diferite',
    'Deoarece au viteze diferite'
  ],
  tag: "./teorieOptica.html#6"
},
  {
  numb: 3,
  question: "În cazul interferenței constructive: ",
  answer: "<span>Cele două unde sunt în fază</span>",
  options: [
    "Cele două unde sunt în defazaj",
    "Cele două unde sunt în fază",
    "Suma lor este egală cu 0",
    "Se risipesc"
  ],
  tag: "./teorieOptica.html#7"
},
  {
  numb: 4,
  question: "Una dintre condițiile de interferență este: ",
  answer: "<span>Undele să aibă aceeași frecvență</span>",
  options: [
    'Undele să aibă aceiași lungime',
    'Diferența de fază să fie egală cu sin90°',
    'Undele să aibă aceeași frecvență',
    'Diferența de fază să varieze'
  ],
  tag: "./teorieOptica.html#8"
},
{
  numb: 5,
  question: "Pentru a produce dispersia luminii trebuie ca: ",
  answer: "<span>Indicele de refracție să fie mai mare decât unu</span>",
  options: [
    'Indicele de refracție să fie mai mare egal cu unu',
    'Indicele de refracție să fie mai mare decât zero',
    'Indicele de refracție să fie mai mare decât unu',
    'Indicele de refracție să fie mai mare egal cu zero'
  ],
  tag: "./teorieOptica.html#9"
},
];

let questions14 = [
  {
  numb: 1,
  question: "Diferența dintre nivelurile de energie: ",
  answer: '<span>Este proporțională cu frecvența oscilatorului și constanta lui Planck</span>',
  options: [
    'Este invers proporțională cu frecvența oscilatorului și constanta lui Planck',
    'Este proporțională cu frecvența oscilatorului și constanta lui Planck',
    'Este invers proporțională cu frecvența oscilatorului și direct proporțională constanta lui Planck',
    'Este proporțională cu frecvența oscilatorului și invers proporțională constanta lui Planck'
  ],
  tag: "./teorieOptica.html#10"
},
  {
  numb: 2,
  question: "Constanta lui Planck (h) este egală cu:",
  answer: '<span>6,62 ∙ 10<sub>-34</sub> J ∙ s</span>',
  options: [
    '6,62 ∙ 10<sub>-34</sub> J ∙ s',
    '6,61 ∙ 10<sub>-34</sub> J / s',
    '6,62 ∙ 10<sub>-34</sub> J / s',
    '6,62 ∙ 10<sub>-32</sub> J ∙ s'
  ],
  tag: "./teorieOptica.html#11"
},
  {
  numb: 3,
  question: "Energia cinetică a electronilor emiși:",
  answer: "<span>Crește liniar cu frecvența radiației incidente</span>",
  options: [
    "Crește liniar odată cu trecerea timpului",
    "Scade liniar cu frecvența radiației incidente",
    "Crește liniar cu frecvența radiației incidente",
    "Rămâne constantă"
  ],
  tag: "./teorieOptica.html#12"
},
  {
  numb: 4,
  question: "'v' reprezintă: ",
  answer: "<span>Frecvența oscilatorului</span>",
  options: [
    'Constanta lui Planck',
    'Constanta lui Einstein',
    'Radiația emisă',
    'Frecvența oscilatorului'
  ],
  tag: "./teorieOptica.html#13"
},
];