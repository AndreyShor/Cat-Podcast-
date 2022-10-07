
import './day.scss';

// Fixed Images
import dayTempImg from'./../../../../public/img/sun.png';
import nightTempImg from'./../../../../public/img/moon.png';
import rainPropImg from'./../../../../public/img/rain.png';
import windSpeedImg from'./../../../../public/img/wind.png';

// Animated Cat Image

import sadCat from'./../../../../public/img/sad.png';
import happyCat from'./../../../../public/img/happy.png';
import sleepyCat from'./../../../../public/img/sleepy.png';

import React from 'react';





class Day extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
      }

      
    catDisplay() {
        const dayTemp = parseInt(this.props.dayTemp.split(" ")[0]);
        const nightTemp = parseInt(this.props.nightTemp.split(" ")[0]);
        const rainProp = parseInt(this.props.rainProp.split(" ")[0]);
        const windSpeed = parseInt(this.props.windSpeed.split(" ")[0]);


        if (rainProp > 70 && windSpeed > 20) {
            return sadCat;
        }

        if (rainProp > 70 && windSpeed < 20) {
            return sleepyCat;
        }

        return happyCat;


    }


    render() {
        return(
            <div className="day">
            <div className="block title">{this.props.weekDay},  {this.props.date} </div>
            <div className="block temperature_level">
                <div className="level">
                    <img src={dayTempImg} alt="day_temp_img" className="day_temp" />
                    <div className="title day_temp"> {this.props.dayTemp} </div>
                </div>
                <div className="level">
                    <img src={nightTempImg} alt="night_temp_img" className="night_temp" />
                    <div className="title night"> {this.props.nightTemp}</div>
                </div>
            </div>
            <div className="block watery_level">
                <div className="level">
                    <img src={rainPropImg} alt="rain_prop_img" className="rain" />
                    <div className="title rain"> {this.props.rainProp}</div>
                </div>
                <div className="level">
                    <img src={windSpeedImg} alt="wind_speed_img" className="wind" />
                    <div className="title wind">{this.props.windSpeed}</div>
                </div>
            </div>
            <div className="block imoggy">
                <div className="level">
                    <img src={this.catDisplay()} alt="catEmmoggy" />
                </div>
            </div>
      </div>
        )
    }
}
  
  export default Day;
    