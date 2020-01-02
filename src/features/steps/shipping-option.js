import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

const ShippingOption = { ground: 1, priority: 2 }

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
				<h1>Shipping Options</h1>
				<select
					onChange={this.props.handleChange('shippingOption')}
					data-step-type="shippingOption"
				>
					<option value={ShippingOption.ground}>Ground</option>
					<option value={ShippingOption.priority}>Priority</option>
				</select>
				<Button onClick={this.prevStep}>Prev</Button>
				<Button onClick={this.nextStep}>Confirm</Button>
			</Form>
		)
	}
}
