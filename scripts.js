const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputValue = document.querySelector(".input-values").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor Real
    const currencyConverted = document.querySelector(".currency-value") //valor Convertido

    const dolarToday = 5.2
    const euroToday = 6.5
    const caDolarToday = 3.89
    const mexPeso = 0.30
    const ukPound = 7.25
    const bitcoins = 522747.62


    if(currencySelect.value == "dolar"){
        currencyConverted.innerHTML = new Intl.NumberFormat ("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputValue / dolarToday)
    }

    if(currencySelect.value == "euro"){
        currencyConverted.innerHTML = new Intl.NumberFormat ("it-IT", {
        style: "currency",
        currency: "EUR"
    }).format(inputValue / euroToday)
    }

    if(currencySelect.value == "caddolar"){
        currencyConverted.innerHTML = new Intl.NumberFormat ("en-CA", {
        style: "currency",
        currency: "CAD"
    }).format(inputValue / caDolarToday)
    }

    if(currencySelect.value == "pesos"){
        currencyConverted.innerHTML = new Intl.NumberFormat ("es-MX", {
        style: "currency",
        currency: "MXN"
    }).format(inputValue / mexPeso)
    }

    if(currencySelect.value == "pound"){
        currencyConverted.innerHTML = new Intl.NumberFormat ("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputValue / ukPound)
    }

    if(currencySelect.value == "bitcoin"){
        currencyConverted.innerHTML = new Intl.NumberFormat (undefined, {
        style: 'currency',
        currency: 'BTC',
        minimumFractionDigits: 2, 
        maximumFractionDigits: 8    
        }).format(inputValue / bitcoins)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat ("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-image")

if (currencySelect.value == "dolar"){ 
    currencyName.innerHTML = "$ US Dolar (USD)"
    currencyImage.src = "./assets/USAFlag-1.png"
}

if (currencySelect.value == "euro"){
    currencyName.innerHTML = "€ Euro (EUR)"
    currencyImage.src = "./assets/euroImg.png"
}

if (currencySelect.value == "caddolar"){
    currencyName.innerHTML = "C$ Canadian Dolar (CAD)"
    currencyImage.src = "./assets/canada-logo.png"
}

if (currencySelect.value == "pesos"){
    currencyName.innerHTML = "$ Mexican Peso (Mex$)"
    currencyImage.src = "./assets/mexico-flag.png"
}

if (currencySelect.value == "pound"){
    currencyName.innerHTML = "£ Pound Sterling (GBP)"
    currencyImage.src = "./assets/uk-flag.png"
}

if (currencySelect.value == "bitcoin"){
    currencyName.innerHTML = "₿ Bitcoin (BTC)"
    currencyImage.src = "./assets/bitcoin.png"
}

convertValues()

}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)