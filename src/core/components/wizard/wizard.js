import React, { Component } from 'react'
import StepOne from '../../../features/steps/sender-address'
import StepTwo from '../../../features/steps/receiver-address'
import StepThree from '../../../features/steps/weight'
import StepFour from '../../../features/steps/shipping-option'
import StepFive from '../../../features/steps/confirmation'

export default class wizard extends Component {
	state = {
		step: 1,
		wizardContext: {
			from: {
				name: '',
				street: '',
				city: '',
				state: '',
				zip: ''
			},
			to: {
				name: '',
				street: '',
				city: '',
				state: '',
				zip: ''
			},
			weight: '',
			shippingOption: 1
		}
	}

	nextStep = () => {
		const { step } = this.state
		this.setState({
			step: step + 1
		})
	}

	prevStep = () => {
		const { step } = this.state
		this.setState({
			step: step - 1
		})
	}

	handleChange = input => event => {
		const stepType = event.target.getAttribute('data-step-type')
		if (stepType === 'shippingOption' || stepType === 'weight') {
			this.setState({
				wizardContext: {
					...this.state.wizardContext,
					[input]: event.target.value
				}
			})
		} else {
			this.setState({
				wizardContext: {
					...this.state.wizardContext,
					[stepType]: {
						...this.state.wizardContext[stepType],
						[input]: event.target.value
					}
				}
			})
		}
	}

	render() {
		const { step } = this.state
		const { name, street, city, state, zip } = this.state.wizardContext
		const values = { name, street, city, state, zip }
		switch (step) {
			case 1:
				return (
					<div className="wizard">
						<h1 className="header">Shipping Label Maker</h1>
						<StepOne
							nextStep={this.nextStep}
							handleChange={this.handleChange}
							values={values}
							wizardContext={this.state.wizardContext}
						/>
					</div>
				)
			case 2:
				return (
					<div className="wizard">
						<h1 className="header">Shipping Label Maker</h1>
						<StepTwo
							nextStep={this.nextStep}
							handleChange={this.handleChange}
							values={values}
							wizardContext={this.state.wizardContext}
						/>
					</div>
				)
			case 3:
				return (
					<div className="wizard">
						<h1 className="header">Shipping Label Maker</h1>
						<StepThree
							nextStep={this.nextStep}
							handleChange={this.handleChange}
							values={values}
							wizardContext={this.state.wizardContext}
						/>
					</div>
				)
			case 4:
				return (
					<div className="wizard">
						<h1 className="header">Shipping Label Maker</h1>
						<StepFour
							nextStep={this.nextStep}
							handleChange={this.handleChange}
							values={values}
							wizardContext={this.state.wizardContext}
						/>
					</div>
				)
			case 5:
				return (
					<div className="wizard">
						<h1 className="header">Shipping Label Maker</h1>
						<StepFive
							nextStep={this.nextStep}
							handleChange={this.handleChange}
							values={values}
							wizardContext={this.state.wizardContext}
						/>
					</div>
				)
			default:
				return
		}
	}
}
