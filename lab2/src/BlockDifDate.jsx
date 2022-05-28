import React from "react"

export default class BlockDifDate extends React.Component {
    str = ""
    flag = false

    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

  ChangeDate(){
        let seconds, minutes, hours,date
        hours = this.state.date.getUTCHours()
        minutes = this.state.date.getUTCMinutes()
        seconds = this.state.date.getUTCSeconds()
      if(this.props.timezone)
      {
          if(this.props.timezone.toLocaleString().startsWith('+',0)) {
              hours += parseInt(this.props.timezone.toLocaleString().slice(this.props.timezone.toLocaleString().indexOf('+'), this.props.timezone.toLocaleString().indexOf(':')))
              minutes +=  parseInt(this.props.timezone.toLocaleString().slice(this.props.timezone.toLocaleString().length-2))
          }if(this.props.timezone.toLocaleString().startsWith('-',0)) {
          hours +=  parseInt(this.props.timezone.toLocaleString().slice(this.props.timezone.toLocaleString().indexOf('-'), this.props.timezone.toLocaleString().indexOf(':')))
          minutes +=  parseInt(this.props.timezone.toLocaleString().slice(this.props.timezone.toLocaleString().length-2))
          }
          if(minutes>=60){
              minutes -= 60
              hours +=1
          }
          if(minutes <0){
              minutes += 60
              hours -=1
          }
      }
      else{
          date = this.state.date.toLocaleTimeString()
      }
      if(this.props.format){
          if(this.props.format.toString() === "12"){
              console.log(hours)
              console.log(minutes)
              if(hours > 12 && hours < 24)
              {
                  this.str = " p.m";
                  this.flag = true
                  hours %=12
              }
              else {
                  this.flag = false
                  this.str = " a.m";
                  if(hours !== 12)
                  {
                      hours %= 12
                  }
              }
          }
          else
              this.str = ""
          date = String((hours< 10? "0" + hours : hours) +':'
              +(minutes< 10? "0" + minutes : minutes)+':'
              +(seconds< 10? "0" + seconds : seconds))
      }

      return(date)
    }


    render() {
        let resultStyle ={
            textAlign:'center',
            fontSize:'30px'
            }


        return (
            <div>
                <h2 style={resultStyle}>{this.ChangeDate()}{this.str}</h2>
            </div>
        )
    }

}