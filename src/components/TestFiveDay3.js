import React, { Component } from 'react';
import ForecastItem from "./ForecastItem"
import styles from "./TestFiveDay.css"



class TestFiveDay3 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            deg: this.props.degrees,
            temp: "",
            weather: this.props.weatherForecast,
            showHide: "hide",
            day1: "hide",
            day2: "hide",
            day3: "hide",
            day4: "hide",
            day5: "hide",
            day6: "hide",
            day7: "hide",
            lastDayCss: "lastDay",
        }
    }

    setDay = (unixDate) => {
        let dateObj = new Date(unixDate * 1000);
        let utcString = dateObj.toUTCString();
        let day = utcString.slice(0, 3);
        return day
    }

    weatherInfo = () => {
        return (
            <div className="weatherInfo">
                <div>Time</div>
                <div>Weather</div>
                <div>Temp</div>
                <div>Wind</div>
                <div>Humidity</div>
            </div>
        )
    }

    showHide = (dayNumber) => {
        switch (dayNumber) {
            case 0:
                if (this.state.day1 === "hide") {
                    this.setState({
                        day1: "show"
                    })
                    break;
                } else {
                    this.setState({
                        day1: "hide"
                    })
                    break;
                }
            case 1:
                if (this.state.day2 === "hide") {
                    this.setState({
                        day2: "show"
                    })
                    break;
                } else {
                    this.setState({
                        day2: "hide"
                    })
                    break;
                }
            case 2:
                if (this.state.day3 === "hide") {
                    this.setState({
                        day3: "show"
                    })
                    break;
                } else {
                    this.setState({
                        day3: "hide"
                    })
                    break;
                }
            case 3:
                if (this.state.day4 === "hide") {
                    this.setState({
                        day4: "show"
                    })
                    break;
                } else {
                    this.setState({
                        day4: "hide"
                    })
                    break;
                }
            case 4:
                if (this.state.day5 === "hide") {
                    this.setState({
                        day5: "show"
                    })
                    break;
                } else {
                    this.setState({
                        day5: "hide"
                    })
                    break;
                }
            case 5:
                if (this.state.day6 === "hide") {
                    this.setState({
                        day6: "show",
                        lastDayCss: "open"
                    })
                    break;
                } else {
                    this.setState({
                        day6: "hide",
                        lastDayCss: "lastDay"
                    })
                    break;
                }
            case 6:
                if (this.state.day7 === "hide") {
                    this.setState({
                        day7: "show"
                    })
                    break;
                } else {
                    this.setState({
                        day7: "hide"
                    })
                    break;
                }
        }
    }

    render(props) {

        let day1 = [];
        let day2 = [];
        let day3 = [];
        let day4 = [];
        let day5 = [];
        let day6 = [];
        let day7 = [];

        let forecastArray = this.props.weatherForecast.list;

        const dateFunction = (date) => {
            let newUnix = date * 1000;
            let d = new Date(newUnix),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;

            return [day, month, year].join('-');
        }

        let daySeconds = 86400;
        let day001 = dateFunction(forecastArray[0].dt)
        let day002 = dateFunction(forecastArray[0].dt + daySeconds)
        let day003 = dateFunction(forecastArray[0].dt + (daySeconds * 2))
        let day004 = dateFunction(forecastArray[0].dt + (daySeconds * 3))
        let day005 = dateFunction(forecastArray[0].dt + (daySeconds * 4))
        let day006 = dateFunction(forecastArray[0].dt + (daySeconds * 5))
        let day007 = dateFunction(forecastArray[0].dt + (daySeconds * 6))

        let date1 = this.setDay(forecastArray[0].dt);
        let date2 = this.setDay(forecastArray[0].dt + daySeconds);
        let date3 = this.setDay(forecastArray[0].dt + (daySeconds * 2));
        let date4 = this.setDay(forecastArray[0].dt + (daySeconds * 3));
        let date5 = this.setDay(forecastArray[0].dt + (daySeconds * 4));
        let date6 = this.setDay(forecastArray[0].dt + (daySeconds * 5));
        let date7 = this.setDay(forecastArray[0].dt + (daySeconds * 6));

        for (let i = 0; i < forecastArray.length; i++) {

            let forecastDay = dateFunction(forecastArray[i].dt);

            switch (forecastDay) {

                case day001:
                    day1.push(
                        <div className={forecastDay} key={forecastArray[i].dt}>
                            <ForecastItem value={forecastArray[i]} degrees={this.props.degrees} />
                        </div>
                    )
                    break;

                case day002:
                    day2.push(
                        <div className={forecastDay} key={forecastArray[i].dt}>
                            <ForecastItem value={forecastArray[i]} degrees={this.props.degrees} />
                        </div>
                    )
                    break;

                case day003:
                    day3.push(
                        <div className={forecastDay} key={forecastArray[i].dt}>
                            <ForecastItem value={forecastArray[i]} degrees={this.props.degrees} />
                        </div>
                    )
                    break;

                case day004:
                    day4.push(
                        <div className={forecastDay} key={forecastArray[i].dt}>
                            <ForecastItem value={forecastArray[i]} degrees={this.props.degrees} />
                        </div>
                    )
                    break;

                case day005:
                    day5.push(
                        <div className={forecastDay} key={forecastArray[i].dt}>
                            <ForecastItem value={forecastArray[i]} degrees={this.props.degrees} />
                        </div>
                    )
                    break;

                case day006:
                    day6.push(
                        <div className={forecastDay} key={forecastArray[i].dt}>
                            <ForecastItem value={forecastArray[i]} degrees={this.props.degrees} />
                        </div>
                    )
                    break;

                case day007:
                    day7.push(
                        <div className={forecastDay} key={forecastArray[i].dt}>
                            <ForecastItem value={forecastArray[i]} degrees={this.props.degrees} />
                        </div>
                    )
                    break;
            }
        }

        return (

            <div className="fullForecastWrapper">

                <div className="forecastTitle">Forecast</div>

                <div className="date">{this.props.weatherForecast.city.name} {this.props.weatherForecast.city.country}</div>

                <div className="forecastWrapper">

                    <div>
                        <div className="forecastDay dayOne" onClick={() => this.showHide(0)}>{date1} {day001}</div>
                        <div className={this.state.day1}>
                            {this.weatherInfo()}
                            {day1}
                        </div>
                    </div>
                    <div>
                        <div className="forecastDay" onClick={() => this.showHide(1)}>{date2} {day002}</div>
                        <div className={this.state.day2}>
                            {this.weatherInfo()}
                            {day2}
                        </div>
                    </div>
                    <div>
                        <div className="forecastDay" onClick={() => this.showHide(2)}>{date3} {day003}</div>
                        <div className={this.state.day3}>
                            {this.weatherInfo()}
                            {day3}
                        </div>
                    </div>
                    <div>
                        <div className="forecastDay" onClick={() => this.showHide(3)}>{date4} {day004}</div>
                        <div className={this.state.day4}>
                            {this.weatherInfo()}
                            {day4}
                        </div>
                    </div>
                    <div>
                        <div className="forecastDay" onClick={() => this.showHide(4)}>{date5} {day005}</div>
                        <div className={this.state.day5}>
                            {this.weatherInfo()}
                            {day5}
                        </div>
                    </div>
                    <div>
                        <div className={`forecastDay ${this.state.lastDayCss}`} onClick={() => this.showHide(5)}>{date6} {day006}</div>
                        <div className={this.state.day6}>
                            {this.weatherInfo()}
                            {day6}
                        </div>
                    </div>
                    {typeof day7[0] == "undefined" ? ("") : (
                        <div>
                            <div className={`forecastDay ${this.state.lastDayCss}`} onClick={() => this.showHide(6)}>{date7} {day007}</div>
                            <div className={this.state.day7}>
                                {this.weatherInfo()}
                                {day7}
                            </div>
                        </div>
                    )}
                </div>

            </div>
        )


    }
}


export default TestFiveDay3
