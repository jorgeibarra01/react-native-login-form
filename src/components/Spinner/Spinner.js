import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const Spinner = ({size}) => {
    const {contianerSpinner} = styles
    return (
        <View style={contianerSpinner}>
            <ActivityIndicator size={size || 'large'}  />
        </View>
    );
};

const styles = StyleSheet.create({
    spinnerStyle: {},
    contianerSpinner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export {
    Spinner
};