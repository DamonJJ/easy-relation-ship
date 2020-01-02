import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

const shippingOptions = { ground: 1, Priority: 2 }

export default class stepFour extends Component {
	nextStep = e => {
		e.preventDefault()
		this.props.nextStep()
	}

	prevStep = e => {
		e.preventDefault()
		this.props.prevStep()
	}

	render() {
		return (
			<Form>
				<h1>Enter the sender's address</h1>
				<Form.Select
					fluid
					label="Shipping Options"
					options={shippingOptions}
					placeholder="Shipping Options"
					onChange={this.props.handleChange('shippingOption')}
					data-step-type="shippingOption"
				/>
				<Button onClick={this.prevStep}>Prev</Button>
				<Button onClick={this.nextStep}>Next</Button>
			</Form>
		)
	}
}
