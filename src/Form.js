import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inputTitle: '',
			inputDescription: '',
			inputUrl: '',
			validInput: 'blank',
			isResourcesNotSend: false,
			error: null
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	};

	handleChange(event) {
		const value = event.target.value;
		const name = event.target.name;


		this.setState({
			[name]: value,
			validInput: true
		});
	};

	handleSubmit(event) {
		event.preventDefault();
		if (
			this.state.inputTitle !== '' &&
			this.state.inputDescription !== '' &&
			this.state.inputUrl !== ''
		) {
			this.setState({
				validInput: true
			});

			const resourceItem = {
				title: this.state.inputTitle,
				description: this.state.inputDescription,
				url: this.state.inputUrl
			};

			fetch('/api/resources', {
				method: 'POST',
				body: JSON.stringify(resourceItem),
				headers: { 'Content-Type': 'application/json' }
			})
				.then(response => response.json())
				.then(body => {
					this.props.receiver(body);
				})
				.catch(err => {
					this.setState({
						isResourcesNotSend: true,
						error: err
					});
				});  // TO DO ADD ERROR MESSAGE TO USER IF SOMETHING WRONG WITH ADD TO DB
		} else {
			this.setState({
				validInput: false
			});
		}
	}


	render() {
		return (
			<div className='form' >
				<form className='add-form' onSubmit={this.handleSubmit}>
					<fieldset>
						<legend>Add Your Resource:</legend>
						<br />
						<div>
							<label htmlFor="inputTitle">Resource Title</label>
							<input
								type="text"
								onChange={this.handleChange}
								value={this.state.inputTitle}
								id='inputTitle'
								name='inputTitle'
								placeholder=' Type your title...'

							/>
						</div>
						<div>
							<label htmlFor="inputTitle">Resource Description</label>
							<input
								type="text"
								onChange={this.handleChange}
								value={this.state.inputDescription}
								id='inputDescription'
								name='inputDescription'
								placeholder=' Type your description...'
							/>
						</div>

						<div>
							<label htmlFor="inputTitle">Resource URL</label>
							<input
								type="text"
								onChange={this.handleChange}
								value={this.state.inputUrl}
								id='inputUrl'
								name='inputUrl'
								placeholder=' Inter your URL...'
							/>
						</div>
						<button type='submit'>Submit</button>
						<p className={this.state.validInput !== false ? 'hidden' : 'validation-error'}>
							Please fill out inputs
						</p>
						<p className={this.state.isResourcesNotSend !== false ? 'hidden' : 'db-error'}>{this.state.error}</p>
					</fieldset>
				</form>
			</div>

		);
	};
};



export default Form;