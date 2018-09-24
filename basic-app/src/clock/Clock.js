import React, {Component} from 'react';

export class Clock extends Component {
    //initial setup
    //set date to a new date
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    //component life cycle hook for mounting of component
    //update date every second
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    //component life cycle hook for unmounting of component
    //destroys interval when component is unmounted
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    //updating state to update the clock in the dom
    tick() {
        this.setState({
            date: new Date()
        });
    }
    //pull date from state that is being updated every second
    render() { 
        return (
            <div>
                It is <strong>{this.state.date.toLocaleTimeString()}</strong>
            </div>
        );
    }

}
