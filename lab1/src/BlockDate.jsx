import React from "react"
import './BlockDate.css';

export default class BlockDate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount(){
        this.timerID = setInterval(
            () =>this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
        return(
            <div>
                <h1 className="block_date">{this.state.date.toLocaleDateString()}</h1>
                <h1 className="block_date">{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}
