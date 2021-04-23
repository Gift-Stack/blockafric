import { Link } from 'react-router-dom';

import { FaHome } from 'react-icons/fa';
import { RiFileListFill } from 'react-icons/ri';
import { BsWallet } from 'react-icons/bs';
import { RiGift2Fill } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import { GiShop } from 'react-icons/gi';

const Navbar = ({ active }) => {
    return (
        <nav>
            <Link to='/' className='link' id={active === 'home' && 'home'}>
                <FaHome className='nav-icon' />
                <div>Home</div>
            </Link>
            <Link
                to='/activity'
                className='link'
                id={active === 'activity' && 'activity'}
            >
                <RiFileListFill className='nav-icon' />
                <div>Activity</div>
            </Link>
            <Link
                to='/wallet'
                className='link'
                id={active === 'wallet' && 'wallet'}
            >
                <BsWallet className='nav-icon' />
                <div>Wallet</div>
            </Link>
            <Link
                to='/market'
                className='link'
                id={active === 'market' && 'market'}
            >
                <GiShop className='nav-icon' />
                <div>Market</div>
            </Link>
            <Link to='/earn' className='link' id={active === 'earn' && 'earn'}>
                <RiGift2Fill className='nav-icon' />
                <div>Earn</div>
            </Link>
        </nav>
    );
};

export default Navbar;
