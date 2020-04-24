interface PriceData {
    price: number
}

function findAveragePrice(data: PriceData[]) {
    const sum = data.reduce((a, b) => a + b.price, 0);
    const avg = sum / data.length || 0;
    return (Math.round(avg * 100) / 100).toFixed(2);
};

export { findAveragePrice };