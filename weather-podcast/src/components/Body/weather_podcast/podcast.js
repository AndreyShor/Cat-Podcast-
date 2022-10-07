
import './podcast.scss';
import Day from './day_podcast/day'


function Podcast(props) {
    return (
      <div className="main_page">

            <Day 
             weekDay="Monday"
             date="1 October"
             dayTemp="22 C"
             nightTemp="5 C"
             rainProp="97 %"
             windSpeed="19 kmh"
             className="day" >
             </Day>
      </div>
    );
  }
  
  export default Podcast;