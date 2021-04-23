import Navbar from '../home/navbar/Navbar';

const Earn = () => {
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
            <h1>Earn</h1>
            <Navbar active='earn' />
        </div>
    );
};

export default Earn;
