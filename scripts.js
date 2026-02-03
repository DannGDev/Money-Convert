const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelect1 = document.querySelector(".currency-select-1")


const convertValues = async () => {
    const inputValue = Number(document.querySelector(".input-values").value)
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyConverted = document.querySelector(".currency-value")

    const data = await fetch(
        'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,MXN-BRL,CAD-BRL,GBP-BRL'
    ).then(response => response.json())

    const rates = {
        real: 1,
        dolar: Number(data.USDBRL.high),
        euro: Number(data.EURBRL.high),
        caddolar: Number(data.CADBRL.high),
        pesos: Number(data.MXNBRL.high),
        pound: Number(data.GBPBRL.high),
        bitcoin: Number(data.BTCBRL.high)
    }

    const from = currencySelect1.value
    const to = currencySelect.value

    const valueInBRL = inputValue * rates[from]
    const convertedValue = valueInBRL / rates[to]

    const currencyMap = {
        real: "BRL",
        dolar: "USD",
        euro: "EUR",
        caddolar: "CAD",
        pesos: "MXN",
        pound: "GBP",
        bitcoin: "BTC"
    }

    const localeMap = {
        real: "pt-BR",
        dolar: "en-US",
        euro: "it-IT",
        caddolar: "en-CA",
        pesos: "es-MX",
        pound: "en-GB",
        bitcoin: undefined
    }

    currencyConverted.innerHTML = new Intl.NumberFormat(
        localeMap[to],
        {
            style: "currency",
            currency: currencyMap[to],
            minimumFractionDigits: to === "bitcoin" ? 2 : 2,
            maximumFractionDigits: to === "bitcoin" ? 8 : 2
        }
    ).format(convertedValue)

    currencyValueToConvert.innerHTML = new Intl.NumberFormat(
        localeMap[from],
        {
            style: "currency",
            currency: currencyMap[from]
        }
    ).format(inputValue)
}



function changeCurrency1() {
    const currencyName1 = document.getElementById("currency-name-1")
    const currencyImage1 = document.querySelector(".currency-image-1")

    if (currencySelect1.value == "dolar") {
        currencyName1.innerHTML = "$ US Dolar (USD)"
        currencyImage1.src = "./assets/USAFlag-1.png"
    }

    if (currencySelect1.value == "euro") {
        currencyName1.innerHTML = "€ Euro (EUR)"
        currencyImage1.src = "./assets/euroImg.png"
    }

    if (currencySelect1.value == "caddolar") {
        currencyName1.innerHTML = "C$ Canadian Dolar (CAD)"
        currencyImage1.src = "./assets/canada-logo.png"
    }

    if (currencySelect1.value == "pesos") {
        currencyName1.innerHTML = "$ Mexican Peso (Mex$)"
        currencyImage1.src = "./assets/mexico-flag.png"
    }

    if (currencySelect1.value == "pound") {
        currencyName1.innerHTML = "£ Pound Sterling (GBP)"
        currencyImage1.src = "./assets/uk-flag.png"
    }

    if (currencySelect1.value == "bitcoin") {
        currencyName1.innerHTML = "₿ Bitcoin (BTC)"
        currencyImage1.src = "./assets/bitcoin.png"
    }

    if (currencySelect1.value == "real") {
        currencyName1.innerHTML = "R$ Brazilian Real (BRL)"
        currencyImage1.src = "./assets/BrazilFlag.png"
    }

    convertValues()
}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-image")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "$ US Dolar (USD)"
        currencyImage.src = "./assets/USAFlag-1.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "€ Euro (EUR)"
        currencyImage.src = "./assets/euroImg.png"
    }

    if (currencySelect.value == "caddolar") {
        currencyName.innerHTML = "C$ Canadian Dolar (CAD)"
        currencyImage.src = "./assets/canada-logo.png"
    }

    if (currencySelect.value == "pesos") {
        currencyName.innerHTML = "$ Mexican Peso (Mex$)"
        currencyImage.src = "./assets/mexico-flag.png"
    }

    if (currencySelect.value == "pound") {
        currencyName.innerHTML = "£ Pound Sterling (GBP)"
        currencyImage.src = "./assets/uk-flag.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "₿ Bitcoin (BTC)"
        currencyImage.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "R$ Brazilian Real (BRL)"
        currencyImage.src = "./assets/BrazilFlag.png"
    }

    convertValues()

}


currencySelect1.addEventListener("change", changeCurrency1)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

