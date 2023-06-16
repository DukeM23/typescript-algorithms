export default function max_profit(prices: number[]): number {
    let buy = 0 
    let profit, maxProfit = 0

    for(let sell = 0 ; sell < prices.length ; sell++) {
        if(prices[sell] < prices[buy] ) {
            buy = sell
            continue
        }

        profit = prices[sell] - prices[buy]
        maxProfit = Math.max(profit, maxProfit)
    }

    return maxProfit
}