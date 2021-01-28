import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
const Filter = () => {
    const dispath = useDispatch();
    
    const getTextStyle =(statusName)=>{
        const filterStatus = useSelector(state =>state.filterStatus)
        if(statusName == filterStatus) return {color:'yellow', fontWeight:'bold'}
        return styles.buttontext;
    }

    const setFilterStatus =(actionType)=>{
        dispath({type:actionType})
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>setFilterStatus('FILETR_SHOW')}>
                <Text style={getTextStyle('SHOW_ALL')}>SHOW ALL</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> setFilterStatus('FILETR_MEMORIZED')}>
                <Text style={getTextStyle('MEMORIZED')}>MEMORIZED</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> setFilterStatus('NEED_PRACTICE')}>
                <Text style={getTextStyle('NEED_PRACTICE')}>NEED PRACTICE</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Filter;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#583C3C',
        alignItems:'center' ,
        flex: 1, flexDirection: 'row', justifyContent: 'space-around'
    },
    buttontext:{
        color:'white',
        
    }
});

