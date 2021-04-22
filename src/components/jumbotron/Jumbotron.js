import { useState } from 'react';

const Jumbotron = () => {
    const [token, setToken] = useState('');
    const [naira, setNaira] = useState('');
    return (
        <div id='jumbotron'>
            <h2>WALLET BALANCE</h2>
            <h2>TOKEN BALANCE: {token}</h2>
            <h2>NAIRA BALANCE: {naira}</h2>
        </div>
    );
};

export default Jumbotron;
