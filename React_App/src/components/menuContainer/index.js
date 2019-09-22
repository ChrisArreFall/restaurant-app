import React from 'react'
import '../../App.css';
import MenuItem from '../../components/menu-item'

var itemsTest = [
    {name:"arroz",value:"0",text:"Arroz",precio:200},
    {name:"frijoles",value:"1",text:"Frijoles",precio:200},
    {name:"huevo",value:"2",text:"Huevo",precio:400},
    {name:"manzana",value:"3",text:"Manzana",precio:300},
    {name:"pera",value:"4",text:"Pera",precio:300},
    {name:"tamales",value:"5",text:"Tamales",precio:1000},
    {name:"panqueques",value:"6",text:"Panqueques",precio:1500},
    {name:"maduro",value:"7",text:"Maduro",precio:200},
    {name:"chorizo",value:"8",text:"Chorizo",precio:200},
    {name:"natilla",value:"9",text:"Natilla",precio:200},
    {name:"pinto",value:"10",text:"Pinto",precio:400},
    {name:"tostada",value:"11",text:"Tostada",precio:200}
]

const menuContainer = (props) => {
    var text = props.page
    if(text==="Inicio"){
        return (
            <div className="inicio">
                <p>
                    Bienvenido al restaurante!
                </p>
            </div>
        )
    }
    else{
        const listItems = Object.keys(itemsTest).map((item, i) =>
            <MenuItem name={itemsTest[item].name} value={itemsTest[item].value} text={itemsTest[item].text} precio={itemsTest[item].precio}/>
            
        );
        return (
            <div className="menu-box">
                {listItems}
            </div>
        )
    }
};

export default menuContainer;