import React from 'react';
import Ad from '../Ad/Ad';
import DisplayReview from '../DisplayReview/DisplayReview';
import Leading from '../Leading/Leading';
import Products from '../Products/Products';
import Summary from '../Summary/Summary';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Summary></Summary>
            <Products></Products>
            <Leading></Leading>
            <DisplayReview></DisplayReview>
            <Ad></Ad>
        </div>
    );
};

export default Home;