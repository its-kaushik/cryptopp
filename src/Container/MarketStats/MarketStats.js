import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faChartSimple, faShop } from '@fortawesome/free-solid-svg-icons'



const MarketStats = () => {

    const [marketStatistics, setMarketStatistics] = useState([]) ;

    useEffect( () => {
        axios.get('http://localhost:4000/api/marketstats')
            .then( response => {
                    setMarketStatistics(response.data) ;
                    console.log(setMarketStatistics)
            } )
    },[])

    if(marketStatistics.length === 0){
        return(
            <div>
                <div className="spinner-border" role="status">
                </div>
                <h2>LOADING.....</h2>
            </div>
        )
    }else{
        return (
            <div>
                <h2 className="text-center mt-3" >Cryptocurrency market statistics</h2>
                <div>
                    <table className="table" >
                        <tbody>
                            <tr>
                                <td><FontAwesomeIcon icon={faCoins} /> Total Coins</td>
                                <td>{marketStatistics.totalCoins} coins</td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faChartSimple} /> Total Markets</td>
                                <td>{marketStatistics.totalMarkets} markets</td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faShop} /> Total Exchanges</td>
                                <td>{marketStatistics.totalExchanges} exchanges</td>
                            </tr>
                            <tr>
                                <td>Total Market Cap</td>
                                <td>$ {(marketStatistics.totalMarketCap/1000000000).toFixed(2)} billions</td>
                            </tr>
                            <tr>
                                <td>Total 24H Volume</td>
                                <td>$ {(marketStatistics.total24hVolume/1000000000).toFixed(2)} billions</td>
                            </tr>
                            <tr>
                                <td>BTC Dominance</td>
                                <td>{(marketStatistics.btcDominance).toFixed(1)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default MarketStats ;