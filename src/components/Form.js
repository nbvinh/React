import React,{useState} from "react";
import { View, TextInput, TouchableOpacity, StyleSheet,Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { tongleIsAdding,addWord } from "../reducer/action";

const Form = () => {
    const dispath = useDispatch()
    const [en,setEn] = useState('');
    const [vn,setVn] = useState('');
    const onAdd = () =>{
        dispath(addWord(en,vn))
        dispath(tongleIsAdding())
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                value={en}
                onChangeText={text => setEn(text)}
            />
            <TextInput
                style={styles.textInput}
                value={vn}
                onChangeText={text => setVn(text)}
            />

            <TouchableOpacity onPress={()=>onAdd()}>
                <Text>ADD</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Form;
const styles = StyleSheet.create({
    container:{
        alignSelf:'stretch',
        justifyContent:'center',
        alignItems:'center',
      
    },
    textInput: {
        backgroundColor: '#E4F6D4',
        margin:10,
        paddingHorizontal:10,
        height:40,
        width:"80%"
    }
})