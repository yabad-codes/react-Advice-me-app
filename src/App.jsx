import React from "react";
import axios from "axios";
import './App.css';

class App extends React.Component {
	state = { advice: '' };

	componentDidMount() {
		this.fetchAdvice();
	}

	fetchAdvice = () => {
		const randomNumber = Math.floor(Math.random() * 200) + 1;
		axios.get(`https://api.adviceslip.com/advice/${randomNumber}`)
		.then((response) => {
			const { advice } = response.data.slip;
			this.setState({ advice });
		}).catch((error) => {
			console.log(error);
		});
	}

	render() {
		const { advice } = this.state;
		return (
			<div className="app">
				<div className="card">
					<h2 className="heading">{ advice }</h2>
					<button className="button" onClick={this.fetchAdvice}>
						<span>GIVE ME ADVICE!</span>
					</button>
				</div>
			</div>
		);
	}
}

export default App;