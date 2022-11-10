const jokes = [
    {
        joke: "And the bartender says, Success, but you're not ready!\ So a JavaScript function walks into a bar."
    },
    {
        joke: "First rule of programming : If it works DON'T touch it."
    },
    {
        joke: "Married life of a developer:    #wife {right: 100%; margin: 0;}  <p><i class=\"fa-regular fa-face-laugh-squint\"></i></p>"
    },
    {
        joke: "I would tell you a joke about programming...But it only works on my machine  <p><i class='fa-regular fa-face-laugh'></i></p>"
    },
    {
        joke: "What is the problem with git jokes? Everyone has their own version!" 
    },
    {
        joke: "New programmer : It realy worked at first time, Experienced programmer : It realy worked at first time??"
    },
    {
        joke: "Programmer 1: We have a problem! Programmer 2: Let’s use RegEx! Programmer 1: Now we have two problems."
    },
    {
        joke: "My girlfriend dumped me after I named a class after her. She felt I treated her like an object."
    },
    {
        joke: "Trying to fix the problem I created when I tried to fix the problems I created when I tried to fix the problems I created when there was a problem"
    },
    {
        joke: "I like you, do you want to be my GF?  ... (30 seconds) Why are you quiet? ... (30 seconds). 504 Gateway Timeout"
    },
    {
        joke: "Don't call me, I'll callback you. I promise!"
    },
    {
        joke: "Python and PHP. One of these two is one of the most popular choices of backend programming. The other one is PHP."
    },
    {
        joke: "Son: Dad, why do the sun rise in east and set in west ? Programmer dad: hey, it works!! Don't touch it ;"
    },
    {
        joke: "A user interface is like a joke. If you have to explain it,It's not that good "
    },
    {
        joke: "Programmer's excuses when their code does not work: but it worked on my machine, it worked yesterday, that's weird, it never happened before."
    },
    {
        joke: "Software and cathedrals are much the same — first we build them, then we pray."
    },
    {
        joke: "Smartphones are pacifiers for adults."
    },
    {
        joke: "It's ok computer, I go to sleep after 20 minutes of inactivity too."
    },
    {
        joke: "Entered what I ate today into my new fitness app and it just sent an ambulance to my house."
    },
    {
        joke: "*Puts down phone* OH MY GOD I HAVE ANOTHER HAND!"
    },
    {
        joke: "Is your name Wi-Fi? Because I'm feeling a connection"
    },
    {
        joke: "If Bill Gates had a penny for every time I had to reboot my computer ...oh wait, he does."
    },
    {
        joke: "A TV can insult your intelligence, but nothing rubs it in like a computer."
    },
    {
        joke: "Failure is not an option—it comes bundled with the software."
    },
    {
        joke: "I just want to live in a world where people come with on/off switches."
    },
    {
        joke: "Twitter is just LinkedIn for the chronically unemployed."
    },
    {
        joke: "A clean house is the sign of a broken computer."
    }

]

function generateJoke() {
    var generateRandomJoke = Math.floor(Math.random() * (jokes.length))
    var randomJoke = jokes[generateRandomJoke]

    return (randomJoke)
}



function createJoke() {
    let creatingJokes = generateJoke ();
    var joke = document.querySelector('#joke')

    var jokeString = `<p class="joke">
    ${creatingJokes.joke}</p>`
    
          joke.innerHTML = jokeString;
}




var button = document.querySelector('button')

button.addEventListener('click', createJoke)