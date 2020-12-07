import React, {useState, useEffect} from 'react';
import {Form, FormControl} from 'react-bootstrap';
import axios from 'axios';
import Output from './output';

function Converter() {

    // api list of crypto coins
    let [cryptoList, setCryptoList] = useState([]);

    // states for holding which crypto is picked in conversion form
    let [cryptoOne, setCryptoOne] = useState('');
    let [cryptoTwo, setCryptoTwo] = useState('');

    let [amount, setAmount] = useState(0)


    let cryptoOneSelection = (e) => {
        setCryptoOne(e.target.value)
        console.log(cryptoOne)
    }

    let cryptoTwoSelection = (e) => {
        setCryptoTwo(e.target.value)
        console.log(cryptoTwo)
    }

    let currencyAmount = (e) => {
        setAmount(e.target.value)
        console.log(typeof(amount))
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
            <div className='form-container'>
                <form className='form'>
                    <div className='form-main-label'>
                        <label>Select currencies to compare below</label>
                    </div>
                    <div className='form-coinOne'>
                        <label>Coin One: </label>
                        <select onChange={cryptoOneSelection}>
                            <option>Select Below</option>
                            {cryptoList.slice(0,10).map((crypto, i) => (
                                <option value={crypto.id} key={i}>{crypto.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='form-coinTwo'>
                        <label>Coin Two: </label>
                        <select onChange={cryptoTwoSelection}>
                            <option>Select Below</option>
                            {cryptoList.slice(0,10).map((crypto, i) => (
                                <option value={crypto.id} key={i}>{crypto.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='form-units'>
                        <label>Amount: </label>
                        <input type='text' pattern='[0-9]*' placeholder='please enter a number' onChange={currencyAmount}></input>
                    </div>
                </form>
            </div>
            <Output cryptoOne={cryptoOne} cryptoTwo={cryptoTwo} amount={amount} />
        </div>
    )
}

export default Converter