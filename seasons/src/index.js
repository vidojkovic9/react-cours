import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    // eslint-disable-next-line no-useless-constructor

    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    // react says we have to define render!!
    // eslint-disable-next-line react/require-render-return
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage} </div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div> Latitude: {this.state.lat} </div>
        }
        return <div> Loading! </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));