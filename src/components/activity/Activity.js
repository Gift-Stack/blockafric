import Navbar from '../home/navbar/Navbar';
const Activity = () => {
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
            <h1>Activity</h1>
            <Navbar active='activity' />
        </div>
    );
};

export default Activity;
