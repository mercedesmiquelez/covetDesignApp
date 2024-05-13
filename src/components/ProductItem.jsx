import { Image, StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../constants/colors'

const ProductItem = ({
  product,
  setProductSelected = () => {},
  navigation,
}) => {
  return (
    <Card style={styles.additionalStylesCard}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate('ItemDetail', {productId: product.id})}
      >
        <Text style={styles.textCategory}>{product.title}</Text>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: product.images }}
        />
      </Pressable>
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: "30%",
    borderRadius: 8
  },
  additionalStylesCard: {
    backgroundColor: colors.grey600,
    paddingLeft: 10,
    borderRadius: 10,
    flexDirection: 'row',
    height: 120,
    width: 300,
    justifyContent: 'space-between',
    margin: 10,
  },
  textCategory: {
    width: "70%",
    color: colors.white200
  },
  pressable: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
  },
})