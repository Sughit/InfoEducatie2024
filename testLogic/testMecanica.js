var questions = [
    {
        prompt: "Test nr 1",
        a: "d"
    },
    {
        prompt: "Test nr 2",
        a: "a"
    },
    {
        prompt: "Test nr 3",
        a: "b"
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