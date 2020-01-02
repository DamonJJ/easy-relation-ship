import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

export default class stepThree extends Component {
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
				<h1>Enter the package's weight</h1>
				<Form.Field>
					<label>Weight</label>
					<input
						type="number"
						placeholder="Weight"
						onChange={this.props.handleChange('Weight')}
						defaultValue={values.weight}
						data-step-type="weight"
					/>
				</Form.Field>
				<Button onClick={this.prevStep}>Prev</Button>
				<Button onClick={this.nextStep}>Next</Button>
			</Form>
		)
	}
}
