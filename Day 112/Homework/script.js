const form = document.querySelector("form");
const infoDiv = document.querySelector("div");

const renderCryptoData = (data) => {
    const cryptoData = data[0];
    infoDiv.innerHTML = `
        <img src="${cryptoData.image}" width="150px">
        <div>
            <h2>${cryptoData.name}</h2>
            <p class="symbol">${cryptoData.symbol}</p>
            <p>Current price: ${cryptoData.current_price}</p>
            <p>Market capital: ${cryptoData.market_cap}</p>
            <p>Market capital rank: ${cryptoData.market_cap_rank}</p>
            <p>Circulating supply: ${cryptoData.circulating_supply}</p>
            <p>Price growth: ${cryptoData.price_change_percentage_24h}%</p>
        </div>
    `
};


const fetchCryptoData = async (crypto) => {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}`)
        const data = await response.json();
        renderCryptoData(data);
    } catch (error) {
        console.log("Error fetching crypto data:", error)
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchCryptoData(form.coinInput.value)
});
