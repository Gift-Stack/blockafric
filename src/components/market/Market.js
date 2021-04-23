import Navbar from '../home/navbar/Navbar';
const Market = () => {
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
            <h1>Market</h1>
            <Navbar active='market' />
        </div>
    );
};

export default Market;
