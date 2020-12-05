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

    let cryptoOneSubmit = (e) => {
        setCryptoOne(e.target.value)
    }

    let cryptoTwoSubmit = (e) => {
        setCryptoTwo(e.target.value)
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
            {/* TODO: WRITE FOR LOOP TO GET TOP 10 CRYPTO CURRENCIES TO PUT INTO DROP DOWN LISTS */}
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Select Currencies Below</Form.Label>
                        <Form.Control as='select'>
                            {cryptoList.slice(0,9).map((crypto, i) => (
                                <option key={i}>{crypto.name}</option>
                            ))}
                        </Form.Control>
                        <Form.Control as='select'>
                            {cryptoList.slice(0,9).map((crypto, i) => (
                                <option key={i}>{crypto.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
            
            <Output cryptoOne={cryptoOne} cryptoTwo={cryptoTwo} />
        </div>
    )
}

export default Converter