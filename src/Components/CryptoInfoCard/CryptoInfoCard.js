import { Link } from 'react-router-dom';
import './CryptoInfoCard.css' ;

const CryptoInfoCard = ({ uuid, symbol, name, iconUrl, marketCap, price, change, rank, volume24H, btcPrice }) => {
    return (
        <div>
            <Link to={`coin/${uuid} `} >
            <div className="card mb-3 mt-4 mx-4">
                <div className="row g-0">
                    <div className="col-md-4">
                     <img src={`${iconUrl}`} className="rounded-start align-middle icon" alt="..." />
                   </div>
                   <div className="col-md-8">
                     <div className="card-body">
                       <h5 className="card-title">{`${name} ( ${symbol} )`}</h5>
                       <ul>
                         <li><strong>{`Rank `}</strong>{`: #${rank}`}</li>
                         <li><strong>{`Price to USD `}</strong>{`: ${(price/1).toFixed(2)} USD`}</li>
                         <li><strong>{`Price to BTC `}</strong>{`: ${btcPrice} BTC`}</li>
                         <li><strong>{`24h change `}</strong>{`: ${change>0?'+':''}${change} %`}</li>
                         <li><strong>{`24h volume `}</strong>{`: $ ${volume24H} billion`}</li>
                         <li><strong>{`Market Cap `}</strong>{`: $ ${(marketCap/1000000000).toFixed(3)} billion `}</li>
                       </ul>
                     </div>
                   </div>
                 </div>
            </div>
            </Link>
        </div>
    )
}

export default CryptoInfoCard ;