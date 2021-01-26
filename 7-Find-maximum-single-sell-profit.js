// const daily_stock_prices = [8, 5, 12, 9, 19, 1]
const daily_stock_prices = [21,12,10,9,6,3]

function BuySellStock(daily_prices) {
  console.log(daily_prices)

  let buy = daily_prices[0],
    sell = daily_prices[1]
    
  let profit = sell - buy

  for (let i = 1; i < daily_prices.length; i++) {
    const price = daily_prices[i];
    const new_profit = price - buy

    if (new_profit > profit) {
      sell = price 
      profit = new_profit
    }

    if (price < buy) {
      buy = price 
    }
  }

  console.log(sell - profit, sell)
}

BuySellStock(daily_stock_prices)