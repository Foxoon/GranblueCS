import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, FlatList } from 'react-native';
import {CharacterBlock} from './CharacterBlock.js';


export class CharactersSlider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            characters : [
                {id: "0", name : "Beelzebub", url : "../../assets/wiki/Beelzebub.png"},
                {id : "1", name : "Charlotta", url : "../../assets/wiki/Charlotta.png"},
                {id : "2", name : "Djeeta", url : "../../assets/wiki/Djeeta.png"},
                {id : "3", name : "Ferry", url : "../../assets/wiki/Ferry.png"},
                {id : "4", name : "Gran", url : "../../assets/wiki/Gran.png"},
                {id : "5", name : "Katalina", url : "../../assets/wiki/Katalina.png"},
                {id : "6", name : "Ladiva", url : "../../assets/wiki/Ladiva.png"},
                {id : "7", name : "Lancelot", url : "../../assets/wiki/Lancelot.png"},
                {id : "8", name : "Lowain", url : "../../assets/wiki/Lowain.png"},
                {id : "9", name : "Metera", url : "../../assets/wiki/Metera.png"},
                {id : "10", name : "Narmaya", url : "../../assets/wiki/Narmaya.png"},
                {id : "11", name : "Percival", url : "../../assets/wiki/Percival.png"},
                {id : "12", name : "Soriz", url : "../../assets/wiki/Soriz.png"},
                {id : "13", name : "Vaseraga", url : "../../assets/wiki/Vaseraga.png"},
                {id : "14", name : "Zeta", url : "../../assets/wiki/Zeta.png"},
                {id : "15", name : "Zooey", url : "../../assets/wiki/Zooey.png"}
                
            ]
        };
    }


    render(){
        
        return(
            <View style={styles.slider}>
                <FlatList horizontal={true} data={this.state.characters} extraData={this.state}
                renderItem={({item}) =>(
                    <View>
                        <Text> {item.name}</Text>
                        <Text> {item.url} </Text>
                        
                        
                    </View>
                )}
                keyExtractor={item => item.id}

                />
                <Image source={require('../../assets/logo.png')}/>                 
                <TouchableOpacity onPress={this.onPress}>
                </TouchableOpacity>  
 

            </View>
        );
    }

}
//<Image source={require('../../assets/wiki/Zeta.png')}/>

    
const styles = StyleSheet.create({
    
    slider : {
        flex : 10,
        flexDirection : 'row'
    },
    character : {
        backgroundColor : '#334eff',
        flex : 1,
        width : 20

    }


});