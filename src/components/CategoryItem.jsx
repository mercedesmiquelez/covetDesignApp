import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import { colors } from "../constants/colors"
import Card from "./Card"

const CategoryItem = ({ category, navigation }) => {
  return (
    <Card style={{ marginVertical: 15, marginHorizontal: 10, borderRadius: 10 }}>
      <Pressable onPress={()=>navigation.navigate('ItemListCategory', {category})}>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </Card>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  text: {
    color: colors.white100,
    textAlign: "center",
    fontSize: 20,
  },
})