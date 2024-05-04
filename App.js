import { StatusBar } from 'expo-status-bar';
import { Alert, SafeAreaView, StyleSheet, TouchableWithoutFeedback, Keyboard, } from 'react-native';
import { Header } from './Components/header';
import { useState } from 'react';
import { ShoppingList } from './Components/ShoppingList';
import { AddShoppingList } from './Components/AddShoppingList';

export default function App() {
  const [shoppingList, setShoppingList] = useState([
    {
      todo: "Buy News Paper",
      id: "1",
    },
    {
      todo: "Buy Vegetables",
      id: "2",
    },
    {
      todo: "Buy Fruits",
      id: "3",
    },
    {
      todo: "Buy Rice",
      id: "4",
    },
    {
      todo: "Buy Phone",
      id: "5",
    },
 
  ]);
  const deleteitem = (item) =>{
    setShoppingList((preshoppinglist)=>{
      return preshoppinglist.filter((listitem)=>{
        return listitem.id !== item.id
      })
    })
  }

  const additem = (item)=>{
    if(item.length === 0){
      Alert.alert("Alert","Please enter the item...")
      return
    }
    setShoppingList([...shoppingList,{ todo: item,id: Math.random().toString() }])
  }

  const diskeyboard = () => {
    Keyboard.dismiss()
  }
  return (
    <TouchableWithoutFeedback onPress={diskeyboard}>
      <SafeAreaView style={styles.container}>
      <Header/>
      <AddShoppingList additem={additem}/>
      <ShoppingList list={shoppingList} deleteitem={deleteitem}/>
      <StatusBar style="auto" />
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:50,
  },
});
