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
      M_months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Oct","Nov","Dec"],

    })
  }

  // component mount

  componentWillMount(){
    setInterval(()=>{
      let time= new Date()
      this.setState({
       year:this.state.Zodiac[time.getUTCFullYear()%12],
       M_month:this.state.M_months[time.getUTCMonth()],
       month:time.getMonth()+1,
       day:time.getDate(),
       week:time.getDay(),
       hour:time.getHours(),
       Minute:time.getMinutes(),
       second:time.getSeconds()
      })
    },1000)
 
  }
  array = length => Array.from({length}).map((v, k) => k).map(x=>x+1);
  addPreZero = num =>{
    if(num>=10)return num
    return '0'+num
  }

}


export default App;
