import React, { Component } from 'react'
import { List } from 'semantic-ui-react'

const ShippingOption = { ground: 1, priority: 2 }

export default class stepFive extends Component {
	render() {
		const { from, to, Weight, shippingOption } = this.props.wizardContext
		const shippingRate = 0.4,
			shippingCost =
				Weight *
				shippingRate *
				(shippingOption === ShippingOption.ground ? 1 : 1.5)
		debugger
		return (
			<>
				<h1>Confirm your Details</h1>
				<p>
					Click Confirm if the following details have been correctly entered
				</p>
				<List>
					<h3>From:</h3>
					<List.Item>
						<List.Content>Name: {from.name}</List.Content>
					</List.Item>
					<List.Item>
						<List.Content>Street: {from.street}</List.Content>
					</List.Item>
					<List.Item>
						<List.Content>City: {from.city}</List.Content>
					</List.Item>
					<List.Item>
						<List.Content>State: {from.state}</List.Content>
					</List.Item>
					<List.Item>
						<List.Content>Zip: {from.zip}</List.Content>
					</List.Item>
					<h3>To:</h3>
					<List.Item>
						<List.Content>Name: {to.name}</List.Content>
					</List.Item>
					<List.Item>
						<List.Content>Street: {to.street}</List.Content>
					</List.Item>
					<List.Item>
						<List.Content>City: {to.city}</List.Content>
					</List.Item>
					<List.Item>
						<List.Content>State: {to.state}</List.Content>
					</List.Item>
					<List.Item>
						<List.Content>Zip: {to.zip}</List.Content>
					</List.Item>
					<h3>Weight</h3>
					<List.Item>
						<List.Content>{from.weight}</List.Content>
					</List.Item>
					<h3>Delivery Type</h3>
					<List.Item>
						<List.Content>{from.shippingOption}</List.Content>
					</List.Item>
					<h3>Price</h3>
					<List.Item>
						<List.Content>{shippingCost}</List.Content>
					</List.Item>
				</List>
			</>
		)
	}
}
