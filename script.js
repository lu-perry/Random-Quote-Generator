let quoteText = document.getElementById('quote-text');
let quote = document.getElementById('quote');
let quoteAuthor = document.getElementById('quote-author');
let newQuote = document.getElementById('new-quote');
let loader = document.getElementById('loader');
let quoteContainer = document.getElementById('quote-container');
let author = document.getElementById('author');
let quotesArr = [];

//function to show when loading

function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
};

//function to show a new quote once generated

function quoteShow() {
    quoteContainer.hidden = false;
    loader.hidden = true;
};


// main fetch function to hide previous quote if it exists and fetch new quote

async function fetchQuotes() {

        loading();

    //remove previous quote and author
    
        let childs = quote.childNodes
        childs.forEach(function (child) {
            quote.removeChild(child);
        });
        let childAuths = author.childNodes;
        childAuths.forEach(function (childAuths) {
            author.removeChild(childAuths);
        });

     
    //populate new quote
        
        const response = await fetch('https://type.fit/api/quotes');
        quotesArr = await response.json();

        let quoteNum = Math.floor(Math.random() * 10);

        console.log(quoteNum);
        console.log(quotesArr[quoteNum]);

        let node = document.createTextNode(quotesArr[quoteNum].text);
        quote.appendChild(node);

        let nodeAuth = document.createTextNode(quotesArr[quoteNum].author);
        author.appendChild(nodeAuth);
    
    // hide loader and show quote container
        
        quoteShow();

    }  


// fetch quotes on button click

newQuote.addEventListener("click", fetchQuotes);