import React from 'react';

class Form extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			inputTitle: '',
			inputDescription: '',
			inputUrl: '',
			validInput: 'blank'
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	};

	handleChange(event) {
		const value = event.target.value;
		const name = event.target.name;


		this.setState({
			[name]: value
		});
	};

	handleSubmit(event) {
		event.preventDefault();
		if(
				this.state.inputTitle !== '' &&
				this.state.inputDescription !== '' &&
				this.state.inputUrl !== ''
			) {
		this.setState({
			validInput: true
		});
		// const resource = this.state;
		// this.props.receiver(resource);

/////////////////////////////////////
		//TODO
			// FETCH POST REQUEST HERE
		//TODO
/////////////////////////////////////
		} else {
			this.setState({
				validInput: false
			});
		}
	}


	render() {
		return (
			<form className='add-form' onSubmit={this.handleSubmit}>
				<label htmlFor="inputTitle">Resource Title</label>
				<input 
					type="text"
					onChange={this.handleChange}
					value={this.state.inputTitle}
					id='inputTitle'
					name='inputTitle'
				/>

				<label htmlFor="inputTitle">Resource Description</label>				
				<input
					type="text"
					onChange={this.handleChange}
					value={this.state.inputDescription}
					id='inputDescription'
					name='inputDescription'
				/>
				
				<label htmlFor="inputTitle">Resource Url</label>
				<input
					type="text"
					onChange={this.handleChange}
					value={this.state.inputUrl}
					id='inputUrl'
					name='inputUrl'
				 />
				 <button type='submit'>Submit</button>
				 <p className={this.state.validInput !== false ? 'hidden' : 'validation-error'}>
				 	Please fill out inputs
				 </p>
			</form>
		);
	};
};



export default Form;