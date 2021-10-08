import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt="" />

                <div className="home_row">
                    <Product
                        id="01"
                        title="See U in C by Ali Karim Sayed (Author)"
                        price={4424}
                        image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
                    />

                    <Product
                        id="02"
                        title="The Shopoholic Black Dial Stainless Steel Chain Analogue Wrist Watch for Men & Boys's"
                        price={450}
                        image="https://m.media-amazon.com/images/I/71nG7c4vo5S._UL1500_.jpg"
                    />

                    <Product
                        id="03"
                        title="Samsung Galaxy M32 5G (Sky Blue, 6GB RAM, 128GB Storage)"
                        price={25000}
                        image="https://m.media-amazon.com/images/I/71os5DRhuSL._SL1500_.jpg"
                    />
                </div>

                <div className="home_row">

                    <Product
                        id="04"
                        title=" LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray) (2020 Model)"
                        price={25000}
                        image="https://m.media-amazon.com/images/I/71uKCdULRgL._SL1500_.jpg"
                    />

                    <Product
                        id="05"
                        title=" LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray) (2020 Model)"
                        price={25000}
                        image="https://m.media-amazon.com/images/I/91hwipAdZ5L._UL1500_.jpg"
                    />

                </div>

                <div className="home_row">
                    <Product
                        id="06"
                        title="EarlyMart Cotton Comfort 180 TC Rajasthani Jaipuri"
                        price={25000}
                        image="https://m.media-amazon.com/images/I/71oMo1UxBRS._SL1100_.jpg"
                    />

                </div>

            </div>
        </div>
    )
}

export default Home
