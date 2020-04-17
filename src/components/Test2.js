import React, { Component } from 'react';
import styles from "./Test.css";
import TestFiveDay3 from './TestFiveDay3';


const api = {
    key: '5048c28c5115c2de77d6ed9277acbb08',
    url: 'https://api.openweathermap.org/data/2.5/'
};

export default class Test2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            deg: "°c",
            temp: "",
            query: "testt",
            weather: {},
            weatherForecast: {},
            latitude: null,
            longitude: null,
            hasFetchedInitialLocation: false,
        }
    }

    componentDidMount() {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setGeoState);
        } else {
            alert("Browser error when getting geolocation");
        }
    }

    componentDidUpdate() {
        if (this.state.query != "" && this.props.searchQuery != "") {
            this.search(this.props.searchQuery)
            console.log("did mount")
        }
        console.log("did mount outside if")
    }

    setGeoState = (position) => {

        this.setState({
            longitude: position.coords.longitude.toString(),
            latitude: position.coords.latitude.toString()
        });

        this.setGeoWeather();

    }

    newFunc = () => {
        this.getGeoLocation()
            .then(() => {
                this.setGeoWeather()
            }).bind(this)
    }

    setGeoWeather = () => {

        fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${api.key}&lat=${this.state.latitude}&lon=${this.state.longitude}&units=metric`)
            .then((res) => res.json())
            .then((result) => {

                this.setWeather(result);

            }).then(
                fetch(`http://api.openweathermap.org/data/2.5/forecast?appid=${api.key}&lat=${this.state.latitude}&lon=${this.state.longitude}&units=metric`)
                    .then((res) => res.json())
                    .then((result) => {
                        this.setWeatherForecast(result);
                    }
                    ));
        console.log("inside setGeoWeather")
    }

    search = (query) => {

        if (this.props.searchQuery !== '') {
            fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then((res) => res.json())
                .then((result) => {
                    this.setWeather(result);
                    this.setQuery('');
                })
                .then(
                    fetch(`${api.url}forecast?q=${query}&units=metric&APPID=${api.key}`)
                        .then((res) => res.json())
                        .then((result) => {
                            this.setWeatherForecast(result);
                        }
                        )
                )
            console.log("inside search function")
        }
        this.setState({
            query: ""
        })
    }

    setQuery = (newQuery) => {
        this.setState({
            query: newQuery
        })
    }

    setWeather = (newWeather) => {
        this.setState({
            weather: newWeather
        })
    }

    setWeatherForecast = (newWeatherForecast) => {
        this.setState({
            weatherForecast: newWeatherForecast
        })
    }

    dateBuilder = (d) => {
        let months = [
            'Januari',
            'Februari',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'Novebmer',
            'December'
        ];

        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`;
    };

    celFar = () => {
        if (this.state.deg === "°c") {
            this.setState({
                deg: "°f",
                temp: this.state.weather.main.temp * 1.8 + 32
            })
        } else if (this.state.deg === "°f") {
            this.setState({
                deg: "°c",
                temp: this.state.weather.main.temp
            })
        }
    }

    tempFunc = () => {
        if (this.state.deg === "°c") {
            return <div>{Math.round(this.state.weather.main.temp)}{this.state.deg}</div>
        } else {
            return <div>{Math.round(this.state.temp)}{this.state.deg}</div>
        }
    }

    setTime = (unixDate) => {
        let dateObj = new Date(unixDate * 1000);
        let utcString = dateObj.toUTCString();
        let time = utcString.slice(-12, -4);
        return <div>{time}</div>
    }

    geoLocationBtn = () => {
        if (this.state.latitude && this.state.longitude) {
            return <div>show local weather</div>
        } else {
            return <div>Loading...</div>
        }
    }



    render(props) {

        const { weather } = this.state;

        return (

            <div>

                {/*<input placeholder="Search..."
                    value={this.state.query}
                    onChange={(e) => this.setQuery(e.target.value)}
                    onKeyPress={this.search}
        />*/}

                <button onClick={this.setGeoWeather} className="geoLocationBtn">{this.geoLocationBtn()}</button>

                {typeof this.state.weather.main !== "undefined" ? (

                    <div className="contentWrapper">

                        <div className="dataWrapper">

                            <div className="locationWrapper">
                                <div className="locationWrapper">
                                    {weather.name}, {weather.sys.country}
                                </div>
                            </div>

                            <div className="date">{this.dateBuilder(new Date())}</div>
                            <div className="weatherWrapper">
                                <div className="tempWrapper">
                                    <div className="CFBtn">
                                        <input className="celBtn" type="radio" name="deg" value="°C" onClick={this.celFar} defaultChecked />°C/°F
                                    </div>

                                    <div className="temp">
                                        {this.tempFunc()}
                                    </div>

                                </div>
                                <div className="weather">{weather.weather[0].main}</div>

                                <div className="weatherDetail">

                                    <div className="weatherDetailCard">
                                        <div>Sunrise</div>
                                        <div>Sunset</div>
                                        <div>Wind</div>
                                        <div>Humidity</div>
                                    </div>

                                    <div className="weatherCardSeparator"></div>

                                    <div className="weatherDetailCard">
                                        <div>{this.setTime(weather.sys.sunrise)}</div>
                                        <div>{this.setTime(weather.sys.sunset)}</div>
                                        <div>{`${weather.wind.speed} m/s`}  {`${weather.wind.deg} deg`}</div>
                                        <div>{weather.main.humidity}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {typeof this.state.weatherForecast.city != "undefined" ? (
                            <TestFiveDay3 weatherForecast={this.state.weatherForecast} degrees={this.state.deg} />
                        ) : ("")}
                    </div>

                ) : (<div className="noShow"></div>)}

            </div>
        )

    }
}

