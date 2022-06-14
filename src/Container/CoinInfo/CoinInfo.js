import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PriceChart from "../../Components/PriceChart/PriceChart";

const CoinInfo = () => {

    let { uuid } = useParams() ;

    const [coinInfo, setCoinInfo] = useState({}) ;

    useEffect( () => {
        axios.get(`http://localhost:4000/api/coin/${uuid}`)
            .then( response =>{
                setCoinInfo(response.data) ;
            } ) 
    },[])

    if(coinInfo.length === 0 ){
        return(
            <div>
                <div className="spinner-border" role="status">
                </div>
                <h2>LOADING.....</h2>
            </div>
        )
    }else{

        return(
            <div>
                <h2>{`${coinInfo.name} (${coinInfo.symbol}) price`}</h2>
                <div className="w-75 mx-auto" >
                    <div>
                        Price chart and current price
                    </div>
                    <div>
                        <PriceChart spark={coinInfo.sparkline}/>
                    </div>
                    <div>
                        <div>
                        </div>
                        <div>
                            Links
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoinInfo ;