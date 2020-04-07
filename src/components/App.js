import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state=({
      year:2009,
      M_month: 'Mar',
      month:1,
      day:1,
      week:1,
      hour:12,
      Minute:1,
      second:1,
      Zodiac:'Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces'.split(','),
      M_month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Oct","Nov","Dec"],

    })
  }


}


export default App;
