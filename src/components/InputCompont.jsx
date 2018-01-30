import React from 'react';


class InputCompont extends React.Component{
	constructor(){
		super();
		this.state = {
			inputVal:"",
			year:2018
		} 
	}

	handleTextInput(e){
		let val = e.target.value;
		this.setState((prevState,props) => {
			return {
				inputVal:val
			}
		});
		console.log("e", e.target.value);
	}

	handleInput(e){
		let val = e.target.value;
		this.setState((prevState,props) => {
			return {
				year:val
			}
		});
	}

	componentDidMount(){
		let {bdyList, year} = this.props.appData;
		this.setState((prevState,props) => {
			return {
				inputVal:JSON.stringify(bdyList),
				year:year 
			}
		});
	}

	handleSubmitInput(){
		this.props.onDateSubmit(this.state);
	}

	render(){
		
		// let {bdyList, year} = this.props.appData;
		
		
		let {inputVal, year} = this.state;
		return (
			<div className="app__inputs">

				<textarea 
					className="app__txt js-json" 
					rows="10" 
					cols="50" 
					id="json-input" 
					value={this.state.inputVal}
					placeholder="Paste your friends list json here."
					onChange={this.handleTextInput.bind(this)}
					>
		        </textarea>
				<div className="app__actions">
		            <label>Year</label>
		            <input 
		            	className="app__input js-year" 
		            	type="text" 
		            	value={year}
		            	onChange={this.handleInput.bind(this)} 
		            	/>
		            <a className="app__button js-update" onClick={this.handleSubmitInput.bind(this)}>Update</a>
		         </div>
			</div>
		)
	}
} 

export default InputCompont;