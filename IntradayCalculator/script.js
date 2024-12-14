
function onCalculate() {
    const investment = Number(document.getElementById('investment')["value"])
    const buyingPrice = Number(document.getElementById('buyingprice')["value"])
    const sellingPrice = Number(document.getElementById('sellingprice')["value"])
    const returnAmount = document.getElementById('return')

    let numberOfShares = investment + (buyingPrice / 5);
    let profit = (sellingPrice - buyingPrice) * numberOfShares;
    let content = `<p>Number of shares : </p><p>${numberOfShares}</p>`;
    content += `<p>You will earn : </p><p>${profit}</p>`;

    document.getElementById('return').innerHTML = content;
}