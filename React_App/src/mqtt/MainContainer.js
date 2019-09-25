import React from 'react';

import Header from '../components/header';
import MenuContainer from '../components/menuContainer';

import '../App.css';


export default class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.button1 = React.createRef();
    this.button2 = React.createRef();
    this.button3 = React.createRef();
    this.button4 = React.createRef();
    this.button5 = React.createRef();
    

    this.state = ({
      selectedItems: [],
      total:0,
      page:"Inicio",
      currentButtonsState:buttons[0],
      buttonPressed:this.props.data.slice(0,1)[0]
    });
    this.menuHandler = this.menuHandler.bind(this);
    this.handleSelectedItems = this.handleSelectedItems.bind(this)
  }
  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    console.log(this.props.data.slice(0,1)[0])
      switch (this.props.data.slice(0,1)[0]) {
        case "button1":
          this.button1.click();
          break;
        case "button2":
          this.button2.click();
          break;
        case "button3":
          this.button3.click();
          break;
        case "button4":
          this.button4.click();
          break;
        case "button5":
          this.button5.click();
          break;
        default:
          break; 
      }
    
  }

  addMessage(){
    const {mqtt} = this.props;
    mqtt.publish('restaurant/waiter', "Call on table!");
  }


  manageButtonsState = () => {
    console.log(this.state.buttonPressed)
    switch (this.props.data.slice(0,1)[0]) {
      case "button1":
        this.button1.click();
        break;
      case "button2":
        this.button2.click();
        break;
      case "button3":
        this.button3.click();
        break;
      case "button4":
        this.button4.click();
        break;
      case "button5":
        this.button5.click();
        break;
      default:
        break; 
    }
  }

  stateManager = (button) => {
    switch (button) {
      case 1:
        //Retornar button is only available in Categorias, Menu and Pagar
        switch (this.state.page){
          //Categorias
          case "Categorias":
            console.log("Going from Categorias to Inicio") 
            this.setState({page:"Inicio",currentButtonsState:buttons[0]})
            break;
          //Menu
          case "Desayuno": 
            console.log("Going from Menu to Categorias")
            this.setState({page:"Categorias",currentButtonsState:buttons[1]})
            break;
          case "Plato Fuerte": 
            console.log("Going from Menu to Categorias")
            this.setState({page:"Categorias",currentButtonsState:buttons[1]})
            break;
          case "Postre":
            console.log("Going from Menu to Categorias")
            this.setState({page:"Categorias",currentButtonsState:buttons[1]}) 
            break;
          case "Bebidas": 
            console.log("Going from Menu to Categorias")
            this.setState({page:"Categorias",currentButtonsState:buttons[1]})
            break;
          //Pagar
          case "Pagar": 
            console.log("Going from Pagar to Inicio")
            this.setState({page:"Inicio",currentButtonsState:buttons[0]})
            break;
          case "Mesero": 
            console.log("Going from Mesero to Inicio")
            this.setState({page:"Inicio",currentButtonsState:buttons[0]})
            break;
          default:
            break;
        }
        break;
      case 2:
        //Ordenar button is only available in Inicio
        switch (this.state.page){
          case "Inicio": 
            console.log("Going from Inicio to Categorias") 
            this.setState({page:"Categorias",currentButtonsState:buttons[1]})
            break;
          default:
            break;
        }
        break;
      case 3:
        //Llamar mesero button is always available
        switch (this.state.page){
          case "Inicio": 
            this.addMessage();
            console.log("Going from Mesero to Inicio") 
            this.setState({page:"Mesero",currentButtonsState:buttons[5]})
            break;
          default:
            break;
        }
        break;
      case 4:
        //Pagar o deseleccionar todo button is only available in Inicio and Menu 
        switch (this.state.page){
          //Categorias
          case "Inicio": 
            console.log("Going from Inicio to Pagar") 
            this.setState({page:"Pagar",currentButtonsState:buttons[3]})
            break;
          //Menu
          case 'Desayuno': 
            console.log("Deselected in Breakfast")
            break;
          case 'Plato Fuerte': 
            console.log("Deselected Lunch")
            break;
          case 'Postre':
            console.log("Deselected Dinner")
            break;
          case 'Bebidas': 
            console.log("Deselected Drinks")
            break;
          default:
            break;
        }
        break;
      case 5:
        //Ordenar button is only available in Categorias and Ordenar
        switch (this.state.page){
          //Categorias
          case "Categorias": 
            console.log("Going from Categorias to Ordenar") 
            this.setState({page:"Ordenar",currentButtonsState:buttons[3]})
            break;
          case "Ordenar": 
            console.log("Going from Ordenar to Inicio") 
            this.setState({page:"Inicio",currentButtonsState:buttons[0]})
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }

  menuHandler(_State){
    this.setState({page:_State,currentButtonsState:buttons[2]})
  }

  handleSelectedItems(_State){
    console.log(_State.status);
    if(_State.status){
      this.setState(()=>{
        console.log("Added: "+{_State})
        var temp = this.state.selectedItems
        temp.push(_State)
        return {selectedItems:temp}
      })
    }
    else{
      this.setState(()=>{
        var temp = this.state.selectedItems
        console.log("Eliminated: "+{_State})
        for( var i = 0; i < temp.length; i++){ 
          if ( temp[i].id === _State.id) {
            temp.splice(i, 1);
          }
        }
        return {selectedItems:temp}
      })
    }
    console.log(this.state.selectedItems)
  }
  
  render(){
    return (
      <div className="AppFS">
        <div className="buttonDiv">
            <button ref={(button) => { this.button1 = button; }} onClick={this.stateManager.bind(this,1)} id="button1" className="backButton" style = {{"visibility":this.state.currentButtonsState[0].visibility}}>{this.state.currentButtonsState[0].label}</button>
            <button ref={(button) => { this.button2 = button; }} onClick={this.stateManager.bind(this,2)} id="button2" className="button" style = {{"visibility":this.state.currentButtonsState[1].visibility}}>{this.state.currentButtonsState[1].label}</button>
            <button ref={(button) => { this.button3 = button; }} onClick={this.stateManager.bind(this,3)} id="button3" className="button" style = {{"visibility":this.state.currentButtonsState[2].visibility}}>{this.state.currentButtonsState[2].label}</button>
            <button ref={(button) => { this.button4 = button; }} onClick={this.stateManager.bind(this,4)} id="button4" className="button" style = {{"visibility":this.state.currentButtonsState[3].visibility}}>{this.state.currentButtonsState[3].label}</button>
            <button ref={(button) => { this.button5 = button; }} onClick={this.stateManager.bind(this,5)} id="button5" className="button" style = {{"visibility":this.state.currentButtonsState[4].visibility}}>{this.state.currentButtonsState[4].label}</button>
        </div>
        <div className="menuDiv">
            <Header text={this.state.page}/>
            <MenuContainer handleSelectedItems = {this.handleSelectedItems} selectedItems={this.state.selectedItems} page={this.state.page} menuHandler={this.menuHandler} css="menu-box"/>
        </div>
      </div>
    )
  }
}


const buttons = [//State Inicio
                [{label:"null", visibility:"hidden"},
                 {label:"Ordenar", visibility:"visible"},
                 {label:"Mesero", visibility:"visible"},
                 {label:"Pagar", visibility:"visible"},
                 {label:"null", visibility:"hidden"}],
                 //State Categorias
                [{label:"Regresar", visibility:"visible"},
                 {label:"null", visibility:"hidden"},
                 {label:"Mesero", visibility:"visible"},
                 {label:"Pagar", visibility:"hidden"},
                 {label:"Seleccionar", visibility:"hidden"}],
                 //State Menu
                [{label:"Regresar", visibility:"visible"},
                 {label:"Ordenar", visibility:"hidden"},
                 {label:"Mesero", visibility:"visible"},
                 {label:"Pagar", visibility:"hidden"},
                 {label:"null", visibility:"hidden"}],
                 //State Pagar
                [{label:"Regresar", visibility:"visible"},
                 {label:"null", visibility:"hidden"},
                 {label:"Mesero", visibility:"visible"},
                 {label:"Pagar", visibility:"visible"},
                 {label:"null", visibility:"hidden"}],
                 //State Ordenar
                [{label:"Regresar", visibility:"visible"},
                 {label:"null", visibility:"hidden"},
                 {label:"Mesero", visibility:"visible"},
                 {label:"null", visibility:"hidden"},
                 {label:"Aceptar", visibility:"visible"}],
                 //Mesero
                [{label:"Regresar", visibility:"visible"},
                 {label:"null", visibility:"hidden"},
                 {label:"Mesero", visibility:"hidden"},
                 {label:"null", visibility:"hidden"},
                 {label:"Aceptar", visibility:"hidden"}]
                ]
