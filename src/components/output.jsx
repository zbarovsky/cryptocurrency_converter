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
        }) .catch(err => {
            console.log('🐳🐳🐳🐳🐳🐳 ' + err)
        })
    })



    return (
        <div>
            <div>
                <h1>you chose, {cryptoOne} and {cryptoTwo}</h1>

            </div>
            <div>
                <h2>the conversion rate is: {output} per unit</h2>
            </div>
        </div>
    )
}

export default Output