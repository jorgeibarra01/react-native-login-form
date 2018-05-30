// Import Libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    const { headerText } = props;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20,
    },
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'

    }
};

// Make the compoenet available to other parts of the app
export  {Header};

