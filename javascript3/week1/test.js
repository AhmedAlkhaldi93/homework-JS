
fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
    .then(dataRow => dataRow.json())
    .then(data => {
        console.log(data);
    });