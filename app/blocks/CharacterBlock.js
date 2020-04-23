import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';

export class CharacterBlock extends React.Component {
    constructor(props){
        super(props);
        this.state = {isLoggedIn : false}
    }
    render(){
        return(
            <View style={styles.character}>
                <TouchableOpacity onPress={this.onPress}>
 
                </TouchableOpacity>       

            
            </View>
        );
    }

}
const assetsRoot = "../../assets/wiki/"


const styles = StyleSheet.create({


    character : {
        backgroundColor : '#334eff',
        flex : 1,
        width : 20

    }, 
    
    charTxt : {

    },
    
    charImage : {

    }


});