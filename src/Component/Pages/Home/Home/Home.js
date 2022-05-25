import React from 'react';
import Ad from '../Ad/Ad';

import Gallery from '../Gallery/Gallery';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div>
            <Gallery></Gallery>
            <Summary></Summary>
            <Ad></Ad>
        </div>
    );
};

export default Home;