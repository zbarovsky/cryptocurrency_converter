import React, {useState, useEffect} from 'react';
import {Form, FormControl} from 'react-bootstrap';
import axios from 'axios';
import Output from './output';

function Converter() {

    // api list of crypto coins
    let [cryptoList, setCryptoList] = useState([]);

    // states for holding which crypto is picked in conversion form
    let [cryptoOne, setCryptoOne] = useState([]);
    let [cryptoTwo, setCryptoTwo] = useState([]);

    let cryptoOneSelection = (e) => {
        e.preventDefault()
        setCryptoOne(e.target.value)
        console.log(cryptoOne)
    }

    let cryptoTwoSelection = (e) => {
        setCryptoTwo(e.target.value)
        console.log(cryptoTwo)
    }

    // function to get list of crypto currency for rate comparison
    useEffect(() => {
        axios.get(`https://api.coinpaprika.com/v1/coins`, cryptoList)

        .then(response => {
            setCryptoList(response.data)
            console.log(response.data[0])
        }) .catch(err => {
            console.log('💩💩💩💩💩💩')
            console.log(err)
        })
    }, [])


    return (
        <div>
            <div>
                <form>
                    <div>
                        <label>Select Currencies to compare below</label>
                    </div>
                    <div>
                        <label>Coin One: </label>
                        <select onChange={cryptoOneSelection}>
                            {cryptoList.slice(0,9).map((crypto, i) => (
                                <option key={i}>{crypto.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Coin Two: </label>
                        <select onChange={cryptoTwoSelection}>
                            {cryptoList.slice(0,9).map((crypto, i) => (
                                <option key={i}>{crypto.name}</option>
                            ))}
                        </select>
                    </div>

                </form>
            </div>
            
            <Output cryptoOne={cryptoOne} cryptoTwo={cryptoTwo} />
        </div>
    )
}

export default Converter