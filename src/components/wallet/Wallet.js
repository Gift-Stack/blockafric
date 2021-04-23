import Navbar from '../home/navbar/Navbar';
const Wallet = () => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '100vw',
            }}
        >
            <h1>Wallet</h1>
            <Navbar active='wallet' />
        </div>
    );
};

export default Wallet;
