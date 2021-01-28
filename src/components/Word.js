import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
const Word = (props) => {
    const dispath = useDispatch()
    const filterStatus = useSelector(state => state.filterStatus)
    const { en, vn, memorized, isShow, id } = props.mywork;
    const memorizeWord =()=>{
        dispath({
            type: 'MEMORIZED',
            id : id
        });
    }
    const onShow =()=>{
        dispath({
            type: 'TONGLE_SHOW',
            id : id
        });
    }
    const textShow = isShow ? vn : '======'
    const textDecorationLine = memorized ? 'line-through' : 'none';
    const textMemorized = memorized ? 'Forget' : 'Memorized'
    return (
        <View style={styles.container} >
            <Text style={{ textDecorationLine: textDecorationLine }}>{en}</Text>
            <Text>{textShow}</Text>
            <View style={{justifyContent:'space-around',flexDirection:'row'}}>
                <TouchableOpacity 
                    style={styles.tou}
                    onPress={()=>memorizeWord()}
                >
                    <Text>{textMemorized}</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.tou} onPress={()=>onShow()}>
                    <Text>Show</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Word;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D2DEF6',
        padding: 10,
        margin: 10,
        
    },
    tou: {
        width: '20%',
        height: 40,
        backgroundColor: 'red',
        justifyContent:'center',
        alignItems:'center'
    }
});