import React from 'react'


var MyTitle = React.createClass({

    render: function () {
        return <h1> {this.props.title} </h1>;
    }
})

export default MyTitle