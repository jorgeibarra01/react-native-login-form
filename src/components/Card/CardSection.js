import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    const { containerStyle } = style;
    return (
        <View style={[containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const style = {
    containerStyle: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export  {CardSection};
