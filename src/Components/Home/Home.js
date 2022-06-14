import MarketStats from "../../Container/MarketStats/MarketStats";
import TopCryptocurrencies from "../../Container/TopCryptocurrencies/TopCryptocurrencies";
import FearAndGreedIndex from "../FearAndGreedIndex/FearAndGreedIndex";

const Home = () => {
    return (
        <div>
            <MarketStats />
            <TopCryptocurrencies />
            <FearAndGreedIndex />
        </div>
    )
}

export default Home ;