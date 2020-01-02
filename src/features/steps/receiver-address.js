import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

export default class stepTwo extends Component {
	nextStep = e => {
		e.preventDefault()
		this.props.nextStep()
	}

	prevStep = e => {
		e.preventDefault()
		this.props.prevStep()
	}

	render() {
		const { values } = this.props
		return (
			<Form>
				<h1 className="ui centered">Enter the reciever's address</h1>
				<Form.Field>
					<label>Name</label>
					<input
						placeholder="Name"
						onChange={this.props.handleChange('name')}
						defaultValue={values.name}
						data-step-type="to"
					/>
				</Form.Field>
				<Form.Field>
					<label>Street</label>
					<input
						placeholder="Street"
						onChange={this.props.handleChange('street')}
						defaultValue={values.street}
						data-step-type="to"
					/>
				</Form.Field>
				<Form.Field>
					<label>City</label>
					<input
						type="text"
						placeholder="City"
						onChange={this.props.handleChange('city')}
						defaultValue={values.city}
						data-step-type="to"
					/>
				</Form.Field>
				<Form.Field>
					<label>State</label>
					<input
						type="text"
						placeholder="State"
						onChange={this.props.handleChange('state')}
						defaultValue={values.state}
						data-step-type="to"
					/>
				</Form.Field>
				<Form.Field>
					<label>Zip</label>
					<input
						type="text"
						placeholder="Zip"
						onChange={this.props.handleChange('zip')}
						defaultValue={values.zip}
						data-step-type="to"
					/>
				</Form.Field>
				<Button onClick={this.prevStep}>Prev</Button>
				<Button onClick={this.nextStep}>Next</Button>
			</Form>
		)
	}
}
