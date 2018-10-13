import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// import Clock from './p1/Clock'
// import MyTitle from './p1/MyTitle'
import Toggle from './components/buttton/Toggle'

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
)

// function tick() {
//     ReactDOM.render(
//         <div>
//             <Clock />
//             <MyTitle title={'123'} />
//         </div>,
//         // hhhhhh
//         document.getElementById('root')
//     )
// }

// setInterval(tick, 1000)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
