import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
                <Text  style={styles.txt} onPress={this.toggleUser}>{display}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    txt:  {
        textAlign : 'center',
        color : '#ff00ff',
        fontSize : 20
    },
    headStyle : {
        paddingTop : 60,
        paddingBottom : 10,
        backgroundColor : '#107eca',
        flex : 1
    }
});