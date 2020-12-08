import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Output({cryptoOne, cryptoTwo, amount}) {

    let [output, setOutput] = useState([])

    useEffect(() => {
        axios.get(`https://api.coinpaprika.com/v1/price-converter`, {
            params: {base_currency_id: cryptoOne,
                    quote_currency_id: cryptoTwo,
                    amount: amount
            }
        }, output)

        .then(response => {
            setOutput(response.data.price)
            // console.log(response.data.price)
        }).catch(err => {
            console.log('🐳🐳🐳🐳🐳🐳 ' + err)
        })
    })

    let finalOutput = parseFloat(output).toFixed(2)

    if (isNaN(finalOutput) && amount == 0) {
        return <h3>Please select currency to compare</h3>
    } else {
        return <h3>The conversion rate per {amount} unit(s) is: {finalOutput}</h3>
    }
}

export default Output