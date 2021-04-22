import { IoMdContact } from 'react-icons/io';
import { BsBellFill } from 'react-icons/bs';

const Head = () => {
    return (
        <div className='nav'>
            <div id='logo'>
                <h2>LOGO</h2>
            </div>
            <div className='icons'>
                <IoMdContact className='head-icon' />
                <BsBellFill className='head-icon' />
            </div>
        </div>
    );
};

export default Head;
