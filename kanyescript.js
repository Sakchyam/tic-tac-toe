const quoteBtn = document.getElementById('quoteBtn');
const quoteText = document.getElementById('quoteText');

quoteBtn.addEventListener('click', getQuote);

function getQuote() {
  fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => {
      quoteText.innerText = `"${data.quote}" - Kanye West`;
      quoteText.style.color = 'white';
    })
    .catch(error => {
      quoteText.innerText = "Failed to fetch quote.";
    });
}
