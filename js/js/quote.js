const quotes=[{quote:"It is kind of fun to do the impossible.",
author:"Walt Disney"},
{quote:"It takes a lot of courage to go into the unknown.",
author:"Usain Bolt"},
{quote:"Tough times never last, but tough people do.",
author:"Robert H. Schuller"},
{quote:"I’ve failed over and over and over again in my life and that is why I succeed.",
author:"Michael Jordan"},
{quote:"If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
author:"Angelina Jolie"},
{quote:"Grind Hard, Shine Hard.",
author:"Dwayne Johnson"}]

const quotesTag=document.querySelector(".quotes")
const quotesTagquote=quotesTag.querySelector("span:first-child")
const quotesTagAuthor=quotesTag.querySelector("span:last-child")

function quoteMsg(){
    const selectedQuote=quotes[Math.floor(Math.random()*quotes.length)]
    quotesTagquote.innerText=selectedQuote.quote
    quotesTagAuthor.innerText=`-${selectedQuote.author}`
}
quoteMsg()