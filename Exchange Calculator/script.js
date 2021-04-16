const currency_one = document.getElementById('currency_one')
const currency_two = document.getElementById('currency_two')
const amount_one = document.getElementById('amount_one')
const amount_two = document.getElementById('amount_two')

const rateIn = document.getElementById('rate')
const swap = document.getElementById('swap')

function calculate(){
    const value_one = currency_one.value
    const value_two = currency_two.value
    fetch(`https://v6.exchangerate-api.com/v6/82f5b2eada1ed1fc4d1f90c9/latest/${value_one}`)
        .then(res => res.json())
        .then(data => {
            console.log( typeof data)
            const rate = data.conversion_rates[value_two]
            rateIn.innerText = `1 ${value_one} = ${rate} ${value_two}`;
            amount_two.value = (amount_one.value * rate).toFixed(2)
        })

    // const xhr = new XMLHttpRequest()
    // xhr.onreadystatechange = function(){
    //     if(xhr.readyState === 4){
    //         if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
    //             const data = JSON.parse(xhr.responseText)
    //             const rate = data.conversion_rates[value_two]
    //             rateIn.innerText = `1 ${value_one} = ${rate} ${value_two}`;
    //             amount_two.value = (amount_one.value * rate).toFixed(3)
    //         }
    //     }
    // }
    // const url = 'https://v6.exchangerate-api.com/v6/82f5b2eada1ed1fc4d1f90c9/latest/' + value_one
    // xhr.open('GET',url)
    // xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    // xhr.send()


}

currency_one.addEventListener('change',calculate)
currency_two.addEventListener('change',calculate)
amount_one.addEventListener('input',calculate)
amount_two.addEventListener('input',calculate)

swap.addEventListener('click', function(){
    const temp = currency_one.value
    currency_one.value = currency_two.value
    currency_two.value = temp
    calculate()
})

calculate()
