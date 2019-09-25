import React, {Component} from 'react';

import '../../App.css';

import MenuItem from '../../components/menu-item'
import CategoryItem from '../category-item';
import { socket } from '../../global/Header';


export default class MenuContainer extends Component {
	constructor() {
		super();
		this.state = {
            food_data:[]
		};
        this.handleCategory = this.handleCategory.bind(this);
	}

    handleCategory(_State) {
        this.props.menuHandler(_State)
    }

    getData = menu => {
        console.log(menu)
        menu = menu.map( food => {
            return food;
        });
        this.setState({food_data:menu})
    }

    componentDidMount(){
        socket.emit("initial_data");
        var state_current = this;
        socket.on("get_data",state_current.getData);
    }

    componentWillUnmount(){
        socket.off("get_data",this.getData)
    }

    getFoodData(){
        return(this.state.food_data.map
        )
    }
    
    menuContainer() {
        var text = this.props.page
        var listItems = ""
        if(text==="Inicio"){
            return (
                <div>
                    <div className="inicio">

                    </div>
                </div>
                
            )
        }
        else if(text==="Categorias"){
            console.log("Entro a categorias.")
            listItems = Object.keys(itemsCategories).map((item, i) =>
                <CategoryItem key={i} category={itemsCategories[item].text} handleCategory={this.handleCategory} value={itemsCategories[item].value} text={itemsCategories[item].text} precio=""/>)  
        }
        else if(text==="Desayuno"){
            console.log("Entro a Desayuno.")
            listItems = Object.keys(this.state.food_data).map((item, i) => {
                if(this.state.food_data[item].category==="Desayuno"){
                    return <MenuItem stateP={false} key={i} handleSelectedItems={this.props.handleSelectedItems} selectedItems = {this.props.selectedItems} id={this.state.food_data[item]._id}  handleSelected={this.handleSelected} value={this.state.food_data[item].price} text={this.state.food_data[item].name} precio={this.state.food_data[item].price}/>
                }
                else{
                    return <p/>
                }
            })
        }
        else if(text==="Plato Fuerte"){
            listItems = Object.keys(this.state.food_data).map((item, i) => {
                if(this.state.food_data[item].category==="Plato Fuerte"){
                    return <MenuItem stateP={false} key={i} handleSelectedItems={this.props.handleSelectedItems} selectedItems = {this.props.selectedItems} id={this.state.food_data[item]._id}  handleSelected={this.handleSelected} value={this.state.food_data[item].price} text={this.state.food_data[item].name} precio={this.state.food_data[item].price}/>
                }
                else{
                    return <p/>
                }
            })
        }
        else if(text==="Postre"){
            listItems = Object.keys(this.state.food_data).map((item, i) => {
                if(this.state.food_data[item].category==="Postre"){
                    return <MenuItem stateP={false} key={i} handleSelectedItems={this.props.handleSelectedItems} selectedItems = {this.props.selectedItems} id={this.state.food_data[item]._id}  handleSelected={this.handleSelected} value={this.state.food_data[item].price} text={this.state.food_data[item].name} precio={this.state.food_data[item].price}/>
                }
                else{
                    return <p/>
                }
            })    
        }
        else if(text==="Bebidas"){
            listItems = Object.keys(this.state.food_data).map((item, i) => {
                if(this.state.food_data[item].category==="Bebidas"){
                    return <MenuItem stateP={false} key={i} handleSelectedItems={this.props.handleSelectedItems} selectedItems = {this.props.selectedItems} id={this.state.food_data[item]._id}  handleSelected={this.handleSelected} value={this.state.food_data[item].price} text={this.state.food_data[item].name} precio={this.state.food_data[item].price}/>
                }
                else{
                    return <p/>
                }
            })
        }
        else if(text==="Mesero"){

            return (
                <div>
                    <div className="mesero">
                           ¡En seguida vendrá tu mesero!
                    </div>
                </div>
                
            )
        }
        else if(text==="Pagar"){
            listItems = Object.keys(this.props.selectedItems).map((item, i) => {
                return <MenuItem stateP={true} key={i} handleSelectedItems={this.props.handleSelectedItems} selectedItems = {this.props.selectedItems} id={this.state.food_data[item]._id}  handleSelected={this.handleSelected} value={this.state.food_data[item].price} text={this.state.food_data[item].name} precio={this.state.food_data[item].price}/>
            })
        }
        if(text==="Pagar"){
            var total = 0
            Object.keys(this.props.selectedItems).map((item, i) => {
                console.log(this.props.selectedItems[item].precio);
                total += this.props.selectedItems[item].precio;
            })
            return(
                <div className="menu-pagar">
                    {listItems}
                    <p className="total">
                        Total: ₡{total}
                    </p>
                </div>
            )
        }
        else{
            return(
                <div className="menu-box">
                    {listItems}
                </div>
            )
        }
    }

	render() {
		return (
            <div >
                {this.menuContainer()}
            </div>
		);
	}
}

var itemsCategories = [
    {id:0,text:"Desayuno"},
    {id:1,text:"Plato Fuerte"},
    {id:2,text:"Postre"},
    {id:3,text:"Bebidas"}
]