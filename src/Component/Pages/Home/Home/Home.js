import React from 'react';
import Ad from '../Ad/Ad';
import DisplayReview from '../DisplayReview/DisplayReview';

import Gallery from '../Gallery/Gallery';
import Leading from '../Leading/Leading';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div>
            <Gallery></Gallery>
            <Summary></Summary>
            <Leading></Leading>
            <DisplayReview></DisplayReview>
            <Ad></Ad>
        </div>
    );
};

export default Home;