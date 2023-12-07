import React from 'react';
import Banner from '../Banner/Banner';
import PopularMenu from '../PopularMenu/PopularMenu';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss</title>
            </Helmet>
            <Banner></Banner>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;