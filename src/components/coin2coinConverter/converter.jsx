import React, {useState, useEffect} from 'react';
import {Form} from 'react-bootstrap'
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
        // console.log(cryptoOne)
    }

    let cryptoTwoSelection = (e) => {
        setCryptoTwo(e.target.value)
        // console.log(cryptoTwo)
    }

    let currencyAmount = (e) => {
        setAmount(e.target.value)
        // console.log(typeof(amount))
    }

    // function to get list of crypto currency for rate comparison
    useEffect(() => {
        axios.get(`https://api.coinpaprika.com/v1/coins`, cryptoList)

        .then(response => {
            setCryptoList(response.data)
            // console.log(response.data[0])
        }) .catch(err => {
            console.log(err)
        })
    }, [])


    return (
        <div>
            {/* <div className='form-container'>
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
                        <input type='text' pattern='[0-9]*' placeholder='0' onChange={currencyAmount} size='13'></input>
                    </div>
                    <div className='form-output'>
                        <Output cryptoOne={cryptoOne} cryptoTwo={cryptoTwo} amount={amount} />
                    </div>
                </form>
            </div> */}

            <Form className='form'>
                <Form.Group>
                    <Form.Label>Select Currencies to compare below</Form.Label>
                        <Form.Group>
                            <Form.Label>Coin One: </Form.Label>
                            <Form.Control as='select' onChange={cryptoOneSelection} className='p-5'>
                            <option>Select Below</option>
                            {cryptoList.slice(0,10).map((crypto, i) => (
                                    <option value={crypto.id} key={i}>{crypto.name}</option>
                            ))}
                            </Form.Control>
                        </Form.Group>

                    <Form.Group>
                        <Form.Label>Coin Two: </Form.Label>
                        <Form.Control as='select' onChange={cryptoTwoSelection}>
                            <option>Select Below</option>
                            {cryptoList.slice(0,10).map((crypto, i) => (
                                    <option value={crypto.id} key={i}>{crypto.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Amount </Form.Label>
                        <Form.Control type='text' pattern='[0-9]*' size='lg' placeholder='0' onChange={currencyAmount}></Form.Control>
                    </Form.Group>

                    <Output cryptoOne={cryptoOne} cryptoTwo={cryptoTwo} amount={amount} />
                </Form.Group>
            </Form>


        </div>
    )
}

export default Converter