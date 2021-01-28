import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch,useSelector } from "react-redux";
import { tongleIsAdding } from "../reducer/action";

const Header =()=>{
    const dispath = useDispatch()
    const onUp=()=>{
        dispath(tongleIsAdding())
    }
    
    return(
        <View style={styles.header}>
            <Text />
            <Text>MY WORD</Text>
            <TouchableOpacity onPress={()=>onUp()}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Header;
const styles= StyleSheet.create({
    header:{
        flex:1,
        backgroundColor:'#D9D9D9',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:"row",
        paddingHorizontal:20,
    }
})