import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Converter from './converter'

function Output({cryptoOne, cryptoTwo}) {

    let [output, setOutput] = useState([])

    useEffect(() => {
        axios.get(`https://api.coinpaprika.com/v1/price-converter`, {
            params: {base_currency_id: cryptoOne,
                    quote_currency_id: cryptoTwo,
                    amount: 1
            }
        }, output)

        .then(response => {
            setOutput(response.data.price)
            console.log(response.data.price)
        }).catch(err => {
            console.log('🐳🐳🐳🐳🐳🐳 ' + err)
        })
    })

    let finalOutput = parseFloat(output).toFixed(2)

    if (isNaN(finalOutput)) {
        return <p>please select currency to compare</p>
    } else {
        return <p>the conversion rate per 1 unit is: {finalOutput}</p>
    }
}

export default Output