import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from "./ForecastItem.css"

export class ForecastItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    dayBuilder = (d) => {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = days[d.getDay()];
        return day;
    };

    timeBuilder = (currentDay) => {
        let hours = "0" + currentDay.getHours();
        let minutes = "0" + currentDay.getMinutes();
        let seconds = "0" + currentDay.getSeconds();
        let time = hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return time;
    };

    CF = () => {
        if (this.props.degrees === "°c") {
            return Math.round(this.props.value.main.temp)
        } else if (this.props.degrees === "°f") {
            return Math.round(this.props.value.main.temp * 1.8 + 32)
        }
    }

    render(props) {

        const { value } = this.props;
        const currentDay = new Date(value.dt * 1000);
        const currentDayFormated = this.dayBuilder(currentDay)

        return (
            <div className={`${currentDayFormated} allDays`}>
                <div className="threeHourForecastItem">{this.timeBuilder(currentDay)}</div>
                <div className="threeHourForecastItem">{value.weather[0].description}</div>
                <div className="threeHourForecastItem">{this.CF()} {this.props.degrees}</div>
                <div className="threeHourForecastItem">{value.wind.speed} m/s {value.wind.deg} deg</div>
                <div className="threeHourForecastItem">{value.main.humidity}</div>
            </div>
        )
    }
}

export default ForecastItem
