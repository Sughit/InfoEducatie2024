var questions = [
    {
        nr: 1,
        prompt: "Test nr 1",
        a: "d",
        options: [
            "a",
            "b",
            "c",
            "d"
        ]
    },
    {
        nr: 2,
        prompt: "Test nr 2",
        a: "a",
        options: [
            "a",
            "b",
            "c",
            "d"
        ]
    },
    {
        nr: 3,
        prompt: "Test nr 3",
        a: "b",
        options: [
            "a",
            "b",
            "c",
            "d"
        ]
    }
]
var score = 0;

for(var i=0; i < questions.length; i++)
{
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].a)
    {
        score++;
    }
}
alert("you got " + score + "/" + questions.length);