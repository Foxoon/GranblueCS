import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export class CharactersSlider extends React.Component {

    render(){
        return(
            <View style={styles.slider}>
                                
                <Image style={styles.character}
                    source={require('../../assets/wiki/Zeta.png')}
                /> 
                <Image style={styles.character}
                    source={require('../../assets/wiki/Katalina.png')}
                />   
                <Image style={styles.character}
                    source={require('../../assets/wiki/Lancelot.png')}
                />      
            
            </View>
        );
    }

}

const styles = StyleSheet.create({
    
    slider : {
        flex : 1,
        flexDirection : 'row'
    },
    character : {
        backgroundColor : '#334eff',
        flex : 1,

    }

});