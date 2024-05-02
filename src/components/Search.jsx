import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import React, { useState } from "react"
import { FontAwesome5 } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { colors } from "../constants/colors"
import { FontAwesome6 } from '@expo/vector-icons';

const Search = ({ onSearch = () => {}, error = "", goBack = () => {} }) => {
  const [keyword, setKeyword] = useState("")
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={keyword}
          onChangeText={setKeyword}
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

      </View>
      <Pressable onPress={() => onSearch(keyword)}>
        <FontAwesome name="search" size={24} color="white" />
      </Pressable>
      <Pressable onPress={() => setKeyword("")}>
        <FontAwesome5 name="eraser" size={24} color="white" />
      </Pressable>
      <Pressable onPress={goBack}>
        <AntDesign name="back" size={24} color="white" />
      </Pressable>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'start',
    gap: 4,
    width: '70%',
  },
  input: {
    width: 250,
    padding: 8,
    fontSize: 18,
    backgroundColor: colors.grey600,
    color: colors.platinum,
    borderRadius: 10,
  },
  errorText: {
    color: 'tomato',
    fontSize: 14,
    fontFamily: 'Josefin'
  }
})