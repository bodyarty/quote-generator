let apiQuotes = [];

const quoteContainer = document.getElementById('quote-container');
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');
const twitterButton = document.getElementById('twitter');

// Show New Quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    
    // Checking if an author is unknown
    if(!quote['author']) {
        authorElement.textContent="Unknown";
    } else {
        authorElement.textContent=quote['author'];
    }

    // Checking qoute length
    if(quote['text'].length > 100) {
        quoteElement.classList.add('long-quote');
    } else {
        quoteElement.classList.remove('long-quote');
    }


    
    quoteElement.textContent=quote['text'];
}

// GET QUOTES FROM API
async function getQuotes() {
  const apiURL = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    alert("Didn't get the quotes");
  }
}

function tweetQuote() {
    const twitterUrl = `https://twitter.com/inent?text=${quoteElement.textContent} - ${authorElement.textContent}`;
    window.open(twitterUrl, '_blank');
}

newQuoteButton.addEventListener('click', getQuotes);
twitterButton.addEventListener('click', tweetQuote);


// // Setting up a quote
// function setQoute (quote) {
//     console.log(quote);
//     quoteElement.textContent=quote['text'];
//     authorElement.textContent=quote['author'];
// }


// newQuoteButton.addEventListener("click", setQoute);


getQuotes();