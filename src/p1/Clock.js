import React from 'react'
var myStyle = {
    fontSize: 100,
    color: '#ff0000'
}
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), xx: 1 }
    }

    // mounted
    componentDidMount() {
        this.timeID = setInterval(() => this.tick(), 1000)
    }
    // unmounted
    componentWillUnmount() {
        clearInterval(this.timeID)
    }
    // timer
    tick() {
        this.setState({ date: new Date(), xx: this.state.xx + 1 })
    }
    render() {
        return (
            <div>
                <h1 style={myStyle}>Hello world!</h1>
                <div style={{ fontSize: 12 }}>{[1.3, 2, 'sss'].join('-iii-')}</div>
                <h2>现在是{this.state.date.toLocaleTimeString()}</h2>
            </div >
        )
    }
}

export default Clock