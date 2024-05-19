var limba = JSON.parse(localStorage.getItem('limba'));
let questions1 = [
    {
    numb: 1,
    question: questionsData[limba].q1[0],
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
    question: questionsData[limba].q1[1],
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
    question: questionsData[limba].q1[2],
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
    question: questionsData[limba].q1[3],
    answer: questionsData[limba].q1_an4,
    options: questionsData[limba].q1_op4,
    tag: "./teorieMecanica.html#4"
  },
    {
    numb: 5,
    question: questionsData[limba].q1[4],
    answer: questionsData[limba].q1_an5,
    options: questionsData[limba].q1_op5,
    tag: "./teorieMecanica.html#5"
  },
];

let questions2 = [
  {
  numb: 1,
  question: questionsData[limba].q2[0],
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
  question: questionsData[limba].q2[1],
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
  question: questionsData[limba].q2[2],
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
  question: questionsData[limba].q2[3],
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
  question: questionsData[limba].q2[4],
  answer: questionsData[limba].q2_an5,
  options: questionsData[limba].q2_op5,
  tag: "./teorieMecanica.html#10"
},
];
let questions3 = [
  {
  numb: 1,
  question: questionsData[limba].q3[0],
  answer: questionsData[limba].q3_an1,
  options: questionsData[limba].q3_op1,
  tag: "./teorieTermodinamica.html#1"
},
  {
  numb: 2,
  question: questionsData[limba].q3[1],
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
  question: questionsData[limba].q3[2],
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
  question: questionsData[limba].q3[3],
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
  question: questionsData[limba].q3[4],
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
  question: questionsData[limba].q4[0],
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
  question: questionsData[limba].q4[1],
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
  question: questionsData[limba].q4[2],
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
  question: questionsData[limba].q4[3],
  answer: questionsData[limba].q4_an4,
  options: questionsData[limba].q4_op4,
  tag: "./teorieTermodinamica.html#9" 
},
  {
  numb: 5,
  question: questionsData[limba].q4[4],
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
  question: questionsData[limba].q5[0],
  answer: questionsData[limba].q5_an1,
  options: questionsData[limba].q5_op1,
  tag: "./teorieTermodinamica.html#11"
},
  {
  numb: 2,
  question: questionsData[limba].q5[1],
  answer: questionsData[limba].q5_an2,
  options: questionsData[limba].q5_op2,
  tag: "./teorieTermodinamica.html#12"
},
  {
  numb: 3,
  question: questionsData[limba].q5[2],
  answer: questionsData[limba].q5_an3,
  options: questionsData[limba].q5_op3,
  tag: "./teorieTermodinamica.html#13"
},
  {
  numb: 4,
  question: questionsData[limba].q5[3],
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
  question: questionsData[limba].q6[0],
  answer: questionsData[limba].q6_an1,
  options: questionsData[limba].q6_op1,
  tag: "./teorieTermodinamica.html#15"
},
  {
  numb: 2,
  question: questionsData[limba].q6[1],
  answer: questionsData[limba].q6_an2,
  options: questionsData[limba].q6_op2,
  tag: "./teorieTermodinamica.html#16"
},
  {
  numb: 3,
  question: questionsData[limba].q6[2],
  answer: questionsData[limba].q6_an3,
  options: questionsData[limba].q6_op3,
  tag: "./teorieTermodinamica.html#17"
},
];

let questions7 = [
  {
  numb: 1,
  question: questionsData[limba].q7[0],
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
  question: questionsData[limba].q7[1],
  answer: questionsData[limba].q7_an2,
  options: questionsData[limba].q7_op2,
  tag: "./teorieElectromecanica.html#2"
},
  {
  numb: 3,
  question: questionsData[limba].q7[2],
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
  question: questionsData[limba].q7[3],
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
  question: questionsData[limba].q7[4],
  answer: questionsData[limba].q7_an5,
  options: questionsData[limba].q7_op5,
  tag: "./teorieElectromecanica.html#5"
},
];

let questions8 = [
  {
  numb: 1,
  question: questionsData[limba].q8[0],
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
  question: questionsData[limba].q8[1],
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
  question: questionsData[limba].q8[2],
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
  question: questionsData[limba].q8[3],
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
  question: questionsData[limba].q8[4],
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
  question: questionsData[limba].q9[0],
  answer: questionsData[limba].q9_an1,
  options: questionsData[limba].q9_op1,
  tag: "./teorieElectromecanica.html#11"
},
  {
  numb: 2,
  question: questionsData[limba].q9[1],
  answer: questionsData[limba].q9_an2,
  options: questionsData[limba].q9_op2,
  tag: "./teorieElectromecanica.html#12"
},
  {
  numb: 3,
  question: questionsData[limba].q9[2],
  answer: questionsData[limba].q9_an3,
  options: questionsData[limba].q9_op3,
  tag: "./teorieElectromecanica.html#13"
},
  {
  numb: 4,
  question: questionsData[limba].q9[3],
  answer: questionsData[limba].q9_an4,
  options: questionsData[limba].q9_op4,
  tag: "./teorieElectromecanica.html#14"
},
];

let questions10 = [
  {
  numb: 1,
  question: questionsData[limba].q10[0],
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
  question: questionsData[limba].q10[1],
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
  question: questionsData[limba].q10[2],
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
  question: questionsData[limba].q10[3],
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
  question: questionsData[limba].q10[4],
  answer: questionsData[limba].q10_an5,
  options: questionsData[limba].q10_op5,
  tag: "./teorieElectromecanica.html#19"
},
];

let questions11 = [
  {
  numb: 1,
  question: questionsData[limba].q11[0],
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
  question: questionsData[limba].q11[1],
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
  question: questionsData[limba].q11[2],
  answer: "<span>R = r</span>",
  options: [
    "W<sub>gen</sub> = W<sub>tot</sub>",
    "U = u",
    "R = R / r",
    "R = r"
  ],
  tag: "./teorieElectromecanica.html#22"
},
  {
  numb: 4,
  question: questionsData[limba].q11[3],
  answer: questionsData[limba].q11_an4,
  options: questionsData[limba].q11_op4,
  tag: "./teorieElectromecanica.html#23"
},
{
  numb: 5,
  question: questionsData[limba].q11[4],
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
  question: questionsData[limba].q12[0],
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
  question: questionsData[limba].q12[1],
  answer: questionsData[limba].q12_an2,
  options: questionsData[limba].q12_op2,
  tag: "./teorieOptica.html#2"
},
  {
  numb: 3,
  question: questionsData[limba].q12[2],
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
  question: questionsData[limba].q12[3],
  answer: questionsData[limba].q12_an4,
  options: questionsData[limba].q12_op4,
  tag: "./teorieOptica.html#4"
},
];

let questions13 = [
  {
  numb: 1,
  question: questionsData[limba].q13[0],
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
  question: questionsData[limba].q13[1],
  answer: questionsData[limba].q13_an2,
  options: questionsData[limba].q13_op2,
  tag: "./teorieOptica.html#6"
},
  {
  numb: 3,
  question: questionsData[limba].q13[2],
  answer: questionsData[limba].q13_an3,
  options: questionsData[limba].q13_op3,
  tag: "./teorieOptica.html#7"
},
  {
  numb: 4,
  question: questionsData[limba].q13[3],
  answer: questionsData[limba].q13_an4,
  options: questionsData[limba].q13_op4,
  tag: "./teorieOptica.html#8"
},
{
  numb: 5,
  question: questionsData[limba].q13[4],
  answer: questionsData[limba].q13_an5,
  options: questionsData[limba].q13_op5,
  tag: "./teorieOptica.html#9"
},
];

let questions14 = [
  {
  numb: 1,
  question: questionsData[limba].q14[0],
  answer: questionsData[limba].q14_an1,
  options: questionsData[limba].q14_op1,
  tag: "./teorieOptica.html#10"
},
  {
  numb: 2,
  question: questionsData[limba].q14[1],
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
  question: questionsData[limba].q14[2],
  answer: questionsData[limba].q14_an3,
  options: questionsData[limba].q14_op3,
  tag: "./teorieOptica.html#12"
},
  {
  numb: 4,
  question: questionsData[limba].q14[3],
  answer: questionsData[limba].q14_an5,
  options: questionsData[limba].q14_op5,
  tag: "./teorieOptica.html#13"
},
];