let quoteText = document.getElementById('quote-text');
let quote = document.getElementById('quote');
let quoteAuthor = document.getElementById('quote-author');
let newQuote = document.getElementById('new-quote');
let loader = document.getElementById('loader');
let quoteContainer = document.getElementById('quote-container');
let author = document.getElementById('author');
let quotesArr = [];
loader.hidden = true;

// main fetch function

async function fetchQuotes() {

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

if (!quote.hasChildNodes) {
    loader.hidden = false;
    quoteContainer.hidden = true;
};

function removeQuotes() {
    while (quote.hasChildNodes()) {
        quote.removeChild(node);
        author.removeChild(nodeAuth);
    };
};

function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
};

function quoteShow() {
    quoteContainer.hidden = false;
    loader.hidden = true;
    quoteText.hidden = false;

};

// fetch quotes on button click

newQuote.addEventListener("click", fetchQuotes);