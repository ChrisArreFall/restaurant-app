import React from 'react'
import '../../App.css';
import MenuItem from '../../components/menu-item'



const menuContainer = (props) => {
    var text = props.page
    var listItems = ""
    if(text==="Inicio"){
        return (
            <div className="inicio">
                <p>
                    Bienvenido al restaurante!
                </p>
            </div>
        )
    }
    else if(text==="Categorias"){
        listItems = Object.keys(itemsCategories).map((item, i) =>
        <MenuItem name={itemsCategories[item].text} value={itemsCategories[item].value} text={itemsCategories[item].text} precio=""/>)  
    }
    else if(text==="Breakfast"){
        listItems = Object.keys(itemsBreakfast).map((item, i) =>
        <MenuItem name={itemsBreakfast[item].text} value={itemsBreakfast[item].value} text={itemsBreakfast[item].text} precio={itemsBreakfast[item].precio}/>)  
    }
    else if(text==="Lunch"){
        listItems = Object.keys(itemsLunch).map((item, i) =>
        <MenuItem name={itemsLunch[item].text} value={itemsLunch[item].value} text={itemsLunch[item].text} precio={itemsLunch[item].precio}/>)  
    }
    else if(text==="Dinner"){
        listItems = Object.keys(itemsDinner).map((item, i) =>
        <MenuItem name={itemsDinner[item].text} value={itemsDinner[item].value} text={itemsDinner[item].text} precio={itemsDinner[item].precio}/>)  
    }
    else if(text==="Drink"){
        listItems = Object.keys(itemsDrinks).map((item, i) =>
        <MenuItem name={itemsDrinks[item].text} value={itemsDrinks[item].value} text={itemsDrinks[item].text} precio={itemsDrinks[item].precio}/>)  
    }
    return (
        <div className="menu-box">
            {listItems}
        </div>
    )
};

export default menuContainer;


var itemsBreakfast = [
    {id:0,category:"Breakfast",text:"Arroz",precio:200},
    {id:1,category:"Breakfast",text:"Frijoles",precio:200},
    {id:2,category:"Breakfast",text:"Huevo",precio:400},
    {id:3,category:"Breakfast",text:"Manzana",precio:300},
    {id:4,category:"Breakfast",text:"Pera",precio:300},
    {id:5,category:"Breakfast",text:"Tamales",precio:1000},
    {id:6,category:"Breakfast",text:"Panqueques",precio:1500},
    {id:7,category:"Breakfast",text:"Maduro",precio:200},
    {id:8,category:"Breakfast",text:"Chorizo",precio:200},
    {id:9,category:"Breakfast",text:"Natilla",precio:200},
    {id:10,category:"Breakfast",text:"Pinto",precio:400},
    {id:11,category:"Breakfast",text:"Tostada",precio:200}
]

var itemsLunch = [
    {id:0,category:"Lunch",text:"Arroz",precio:200},
    {id:1,category:"Lunch",text:"Frijoles",precio:200},
    {id:2,category:"Lunch",text:"Chuleta",precio:400},
    {id:4,category:"Lunch",text:"Pollo",precio:300},
    {id:5,category:"Lunch",text:"Res",precio:300},
    {id:6,category:"Lunch",text:"Tamales",precio:1000},
    {id:7,category:"Lunch",text:"Pizza",precio:1500},
    {id:8,category:"Lunch",text:"Pollo Frito",precio:200},
    {id:9,category:"Lunch",text:"Chorizo",precio:200},
    {id:10,category:"Lunch",text:"Biztec",precio:200},
    {id:11,category:"Lunch",text:"Maduro",precio:400},
    {id:12,category:"Lunch",text:"Aguacate",precio:200}
]



var itemsDinner = [
    {id:0,category:"Dinner",text:"Arroz",precio:200},
    {id:1,category:"Dinner",text:"Frijoles",precio:200},
    {id:2,category:"Dinner",text:"Huevo",precio:400},
    {id:3,category:"Dinner",text:"Manzana",precio:300},
    {id:4,category:"Dinner",text:"Pera",precio:300},
    {id:5,category:"Dinner",text:"Tamales",precio:1000},
    {id:6,category:"Dinner",text:"Panqueques",precio:1500},
    {id:7,category:"Dinner",text:"Maduro",precio:200},
    {id:8,category:"Dinner",text:"Chorizo",precio:200},
    {id:9,category:"Dinner",text:"Natilla",precio:200},
    {id:10,category:"Dinner",text:"Pinto",precio:400},
    {id:11,category:"Dinner",text:"Tostada",precio:200}
]
var itemsDrinks = [
    {id:0,category:"Drink",text:"Cas",precio:200},
    {id:1,category:"Drink",text:"Guanavana",precio:200},
    {id:2,category:"Drink",text:"Mango",precio:400},
    {id:3,category:"Drink",text:"Chocolate",precio:300},
    {id:4,category:"Drink",text:"Cafe",precio:300},
    {id:5,category:"Drink",text:"Tequila",precio:1000},
    {id:6,category:"Drink",text:"Vino",precio:1500},
    {id:7,category:"Drink",text:"Agua",precio:0},
    {id:8,category:"Drink",text:"Pepsi",precio:200},
    {id:9,category:"Drink",text:"Coca",precio:200},
    {id:10,category:"Drink",text:"Gin",precio:400},
    {id:11,category:"Drink",text:"Fanta",precio:200}
]


var itemsCategories = [
    {id:0,text:"Breakfast"},
    {id:1,text:"Lunch"},
    {id:2,text:"Dinner"},
    {id:3,text:"Drinks"}
]