import * as React from 'react';
import {  View} from 'react-native';
import {  TouchableOpacity } from 'react-native-gesture-handler'

// or any pure javascript modules available in npm
import { Card,  Title  } from 'react-native-paper';
import {Icon} from 'react-native-elements'



class Menu extends React.Component {

  constructor(props){
    super(props)
  }

  _displayButtons(){
    const buttons = [
      {
        name:"My Groups",
        icon: "home"
      },
      {
        name: "My Lists",
        icon: "search"
      },
       {
        name: "Add an Object",
        icon: "add"
      },
       {
        name: "My Basket",
        icon: "store"
      }
    ]
    const buttonsResult = buttons.map((button) => {
      return (
        <View >
          <TouchableOpacity style={{ marginBottom:35, width:170, borderRadius:20}} > 
            <Card style={{ borderRadius:20, backgroundColor:"#f44336"}}>
              <Card.Content style={{ alignItems: "center", justifyContent: "center"}}>
                <Title style={{color:"white"}}>{button.name}</Title>
                <Icon  name={button.icon} color="white" />
            </Card.Content>
            </Card>
          </TouchableOpacity>
      </View> 
      )
    }
    )
    return buttonsResult
  }

  render(){
      return (
        <View style={{ flex:1, alignItems:"center", paddingTop:25, backgroundColor: "white"}}>
       {this._displayButtons()}
      
        </View>
      )

  }

}

  export default Menu
  