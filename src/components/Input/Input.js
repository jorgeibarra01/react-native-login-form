import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Input = ({label, value, onChangeText,placeholder,secureTextEntry}) => {
    const {textInputStyle, labelStyle, containerStyle} = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={textInputStyle} />
        </View>
    );
};

const styles = StyleSheet.create({
    textInputStyle: {
        color: '#000',
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export { Input };