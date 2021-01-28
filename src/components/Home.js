import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Word from "./Word";
import Filter from "./Filter";
import Header from "./Header";
import Form from "./Form";
const Home = () => {
    const dispath = useDispatch()
    const isAdding = useSelector(state=>state.isAdding)
    const getWordList =()=>{
        const arrWords = useSelector(state => state.arrWords)
        const filterStatus = useSelector(state => state.filterStatus)
        if(filterStatus === 'MEMORIZED') return arrWords.filter(e => e.memorized);
        if(filterStatus === 'NEED_PRACTICE') return arrWords.filter(e => !e.memorized);
        return arrWords;
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'yellow' }}>
            <Header />
            <View style={{flex:10}}>
                {isAdding ? <Form /> :null} 
                <FlatList
                    data={getWordList()}
                    renderItem={({ item }) => <Word mywork={item} />}
                    keyExtractor={item => item.id}
                />

            </View>
            <Filter />
        </View>
    )
}
export default Home;