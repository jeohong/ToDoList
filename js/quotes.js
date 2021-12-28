const quotes = [
    {
        quote: "Life is 10% what happens to you and 90% how you react to it.",
        author: "Charles R. Swindoll",
    },
    {
        quote: "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
        author: "St. Jerome",
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela",
    },
    {
        quote: "When something is important enough, you do it even if the odds are not in your favor.",
        author: "Elon Musk",
    },
    {
        quote: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe",
    },
    {
        quote: "A good plan violently executed now is better than a perfect plan executed next week.",
        author: "George S. Patton",
    },
    {
        quote: "I don't believe you have to be better than everybody else. I believe you have to be better than you ever thought you could be.",
        author: "Ken Venturi",
    },
    {
        quote: "If you can dream it, you can do it.",
        author: "Walt Disney",
    },
    {
        quote: "Aim for the moon. If you miss, you may hit a star.",
        author: "W. Clement Stone",
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;