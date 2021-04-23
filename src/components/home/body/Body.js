import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Recent from './Recent';

const Body = () => {
    const [token, setToken] = useState('');
    const [naira, setNaira] = useState('');
    const [amount, setAmount] = useState('');
    return (
        <div>
            <div id='jumbotron'>
                <h2>WALLET BALANCE</h2>
                <h2>TOKEN BALANCE: {token}</h2>
                <h2>NAIRA BALANCE: {naira}</h2>
            </div>
            <div className='selectCountry'>
                <h4>
                    Select Currency <IoIosArrowDown />
                </h4>
            </div>
            <div className='token'>
                <h2>TOKEN</h2>
                <input
                    type='number'
                    placeholder='0.00000001'
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />
            </div>
            <div className='btns'>
                <button>SEND</button>
                <button>RECIEVE</button>
            </div>
            <Recent />
        </div>
    );
};

export default Body;
