import { Dimensions, Image, TouchableOpacity, Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import { colors } from "../constants/colors"
import Card from "./Card"
import allProducts from "../data/products.json"

const CategoryItem = ({ category, navigation }) => {
  return (
    <Card style={styles.cardStyle}>
      <Pressable onPress={()=>navigation.navigate('ItemListCategory', {category})}>
        <Text style={styles.text}>{category}</Text>
        {/* <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: product.images }}
        /> */}
      </Pressable>
    </Card>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: "30%",
    borderRadius: 8
  },
  text: {
    color: colors.white100,
    textAlign: "center",
    fontSize: 20,
  },
  cardStyle: {
    backgroundColor: colors.grey900,
    height: 85,
    marginVertical: 14,
    marginHorizontal: 10,
    borderRadius: 8
  }
})