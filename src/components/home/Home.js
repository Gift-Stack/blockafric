import Head from './/head/Head';
import Body from './/body/Body';
import Navbar from './/navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Head />
            <br />
            <Body />
            <Navbar active='home' />
        </div>
    );
};

export default Home;
