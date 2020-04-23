import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {isLoggedIn : false}
    }
    toggleUser = ()=>{
        this.setState(previousState => {
            return { isLoggedIn : !previousState.isLoggedIn};
        });
    }

    render(){
        let display = this.state.isLoggedIn ? "Sample User" : this.props.message;
    
        return(
            <View style={styles.headStyle}>
                <Image style={styles.logo} source={require('../../assets/logo.png')}/>                 

                <Text  style={styles.txt} onPress={this.toggleUser}>{display}</Text>                
                <Text style={styles.version}> Version 1.0</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headStyle : {
        height : 60,
        paddingBottom : 60,
        backgroundColor : '#107eca',
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems:'flex-start'
    },
    logo: {
        marginRight: 20,
        height: 60,
        flex: 1,
        flexBasis: 30,
        resizeMode : "contain"
    },
    txt:  {
        textAlign : 'center',
        color : '#ff00ff',
        fontSize : 20,
        flexBasis: 100,
        backgroundColor : '#b03060',

    },
    version : {
        textAlign : 'right',
        flex : 1,
        flexBasis: 50,
        backgroundColor : "#7fe5f0"
    }

});