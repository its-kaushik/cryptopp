import { Route, Routes } from "react-router-dom";
import Home from "../../Components/Home/Home";
import Navbar from "../../Components/Navbar/Navbar";
import CoinInfo from "../../Container/CoinInfo/CoinInfo";

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={ <Navbar /> } >
                <Route index element={ <Home /> } />
                <Route path="/coin/:uuid" element={ <CoinInfo /> } /> 
            </Route>
        </Routes>
    )
}

export default Main ;