import React, {Component} from 'react';
import '../../App.css';


export default class CategoryItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
            category:this.props.category,
            id: this.props.id
		};
		this.handleChange = this.handleChange.bind(this);
		this.updateSelected = this.updateSelected.bind(this);
	}

	updateSelected() {
		console.log(this.state.category);
		this.props.handleCategory(this.state.category);
	}

	handleChange() {
		this.setState({status: !this.state.status}, this.updateSelected);
	}



	render() {
		return (
			<div className="item-box">
                <input className = "check-box" type="checkbox" name={this.state.category} value={this.props.value} onChange={this.handleChange}/>
                <label className = "label-nombre"> {this.state.category} </label>
                <label className = "label-precio"> {this.props.precio} </label>
            </div>
		);
	}
}


