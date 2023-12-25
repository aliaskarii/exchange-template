async function fetchSymbolPrices(name) {
    const response = await fetch(
      `https://api.binance.us/api/v3/klines?interval=1d&symbol=${name}&limit=50`
    );
    const symbolKLine = await response.json();
    const symbolPrices = [];
    for (let index = 0; index < symbolKLine.length; index++) {
      symbolPrices.push(symbolKLine[index][4]);
    }
    return { name: name, price: symbolPrices };
  }
export default fetchSymbolPrices
