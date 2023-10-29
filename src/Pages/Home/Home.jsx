
import { Helmet } from 'react-helmet-async';
import Card from '../../Components/Card/Card';
import Carousel from '../../Components/Carousel/Carousel';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>E-Commerce </title>
            </Helmet>
            <Carousel></Carousel>
            <Card></Card>
        </div>
    );
};

export default Home;