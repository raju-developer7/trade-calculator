document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        calculate();
    }
});

function calculate() {
    const amount = parseFloat(document.getElementById('amount').value);
    const buyPrice = parseFloat(document.getElementById('buyPrice').value);
    const sellPrice = parseFloat(document.getElementById('sellPrice').value);
    const isIntraday = document.getElementById('intraday').checked;
    const margin = 5; // 5x margin for intraday

    if (!amount || !buyPrice || !sellPrice || buyPrice <= 0 || sellPrice <= 0) {
        alert("Please enter valid values.");
        return;
    }

    // Calculate the number of shares bought
    const shares = isIntraday ? (amount * margin) / buyPrice : amount / buyPrice;

    // Calculate total cost and total sale value
    const totalCost = shares * buyPrice;
    const totalSaleValue = shares * sellPrice;

    // Calculate return amount
    const returnAmount = totalSaleValue - totalCost;

    // Display results
    document.getElementById('shares').textContent = shares.toFixed(2);
    document.getElementById('return').textContent = returnAmount.toFixed(2);
}

function toggleNightMode() {
    document.body.classList.toggle('night-mode');
    document.querySelector('.calculator-container').classList.toggle('night-mode');
    document.querySelector('.moon-icon').classList.toggle('night-mode');
}


function getApi() {
    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=RELIANCE.BSE&outputsize=full&apikey=demo';

    fetch(url)
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            console.log(data); // Log the data to the console
        })
        .catch(error => {
            console.error('Error fetching the data:', error); // Handle any errors
        });
}

getApi();
toggleNightMode()
