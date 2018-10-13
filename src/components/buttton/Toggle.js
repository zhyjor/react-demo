import React from 'react'

class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isToggleOn: true }
        // 这里绑定this是必要的，如此才能在回调函数中使用
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(presState => ({
            isToggleOn: !presState.isToggleOn
        }))
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

export default Toggle