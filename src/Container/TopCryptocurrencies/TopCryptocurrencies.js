import axios from "axios";
import { useEffect, useState } from "react";
import CryptoInfoCard from "../../Components/CryptoInfoCard/CryptoInfoCard";

const TopCryptocurrencies = () => {

    const [topCoinsList, setTopCoinsList] = useState([]) ;

    useEffect( () => {
        axios.get('http://localhost:4000/api/coins/10')
            .then( response =>{
                setTopCoinsList(response.data) ;
            } ) 
    },[] )

    if(topCoinsList.length === 0 ){
        return(
            <div>
                <div className="spinner-border" role="status">
                </div>
                <h2>LOADING.....</h2>
            </div>
        )
    }else {
        return(
            <div>
                <h2 className="text-center mt-5" >Top 10 Cryptocurrencies</h2>
                <div className="d-flex flex-wrap" >
                    {
                        topCoinsList.map( (coin, i) => {
                            return    <CryptoInfoCard
                                uuid={topCoinsList[i].uuid}
                                symbol={topCoinsList[i].symbol}
                                name={topCoinsList[i].name}
                                iconUrl={topCoinsList[i].iconUrl}
                                marketCap={topCoinsList[i].marketCap}
                                price={topCoinsList[i].price}
                                change={topCoinsList[i].change}
                                rank={topCoinsList[i].rank}
                                btcPrice={topCoinsList[i].btcPrice}
                                volume24H={'issue'}  
                                />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default TopCryptocurrencies ;