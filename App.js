/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./src/reducer/reducer";
import Home from "./src/components/Home";

const App = () => {
  const store = createStore(reducer)
  return (
    <Provider store={store} >
      <Home />
    </Provider>
  );
};


export default App;
