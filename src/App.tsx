import React from 'react';
import Weather from "./components/weather/Weather";
import Header from "./components/header/Header";
import CityList from "./components/city-list/CityList";

const App = () => {
    return (
        <div>
            <Header/>
            <CityList/>
            <Weather/>
        </div>
    );
};

export default App;