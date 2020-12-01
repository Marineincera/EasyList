import * as React from 'react';
import { Text, StyleSheet, Image, Button, ScrollView, View  } from 'react-native';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { Icon} from 'react-native-elements'


class Homepage extends React.Component {
  constructor(props){
    super(props)
  }

_openMenu(){
    this.props.navigation.navigate('Menu')
}

render(){
  return (
  <ScrollView>
      <View  style={styles.container}>
       <Image
          source={{uri :'https://www.milwaukeemag.com/wp-content/uploads/2020/11/1220-FEAT-Holiday-GiftWrapping-GettyImages.jpg'}}
          style={{ width: 340, height: 200}}
      />
      <Card>
        <Icon 
          name='card-giftcard'
          size= '70'
        />
        <Text style={styles.paragraph}>
            Change code 
        </Text>

        <Icon 
          name='card-giftcard'
          size= '40'
        />
        </Card>

        <Card>
          <Button style={styles.button}
          title="Se connecter"
          color="red"
          accessibilityLabel="Learn more about this purple button"
          onPress={() =>this._openMenu()}
          />
          <Button style={styles.button}
            title="S'inscrire'"
            color="red"
            accessibilityLabel="Learn more about this purple button"
          />
        </Card>
        </View>
      </ScrollView >
  );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    margin: 40
  }
});


export default Homepage