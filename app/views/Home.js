import React from 'react';
import{Header} from '../blocks/Header.js';
import{CharactersSlider} from '../blocks/CharactersSlider.js';

import { StyleSheet, View, Text, Image } from 'react-native';


export class Home extends React.Component {
    render(){
        return(
            
            <View style={styles.container}>
                <Header message = " press to login"/>
                <CharactersSlider></CharactersSlider>
            </View>

    
        );
    }
}


const styles = StyleSheet.create({
    container : {
        flex : 10,
    }




});