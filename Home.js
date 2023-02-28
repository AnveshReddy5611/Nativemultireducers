import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { multiplyTwo } from "./redux/actions/twoaction";
import { multiplyFive } from './redux/actions/twoaction';
//import useForm from "react-hook-form";

export default function Home() {
  const dispatch = useDispatch();
  const two = useSelector((state) => state.two.count); 
  const five=useSelector((state)=>state.five.count2) 
console.log(two,five, "I am count")
  const handletwo = () => {
    console.log('I am here')
    dispatch(multiplyTwo());
  };
  const handlefive = () => {
    console.log(five,"I am here")
    dispatch(multiplyFive());
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title_text}>Testing</Text>
      <Text style={styles.counter_text}>Count:{two}</Text>
      <Text style={styles.counter_text}>Count:{five}</Text>

      <TouchableOpacity onPress={handletwo} style={styles.btn}>
        <Text style={styles.btn_text}> Multiply2 </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handlefive}
        style={{ ...styles.btn, backgroundColor: "#6e3b3b" }}
      >
        <Text style={styles.btn_text}> Multiply5 </Text>
      </TouchableOpacity>

      
    </View>


  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
    padding: 50,
  },
  title_text: {
    fontSize: 40,
    fontWeight: "900",
    marginBottom: 55,
  },
  counter_text: {
    fontSize: 35,
    fontWeight: "900",
    margin: 15,
  },
  btn: {
    backgroundColor: "#086972",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  btn_text: {
    fontSize: 23,
    color: "#fff",
  },
});