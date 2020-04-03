import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import CategoryImages from '../assets/CategoryImages'
import Colors from '../constants/Colors'
const CategoryListItem = ({category}) => {
  const getArtworkUrl = (artwork) => {
    //console.log(artwork)
    if (!artwork) return null;
    if (artwork.startsWith('http')) {
      return {uri: artwork};
    }
    var url = CategoryImages[artwork]
    if (url) return url;
    console.log("Image not found for key " + artwork)
    return CategoryImages.defaultImage;
  }

  return <View style={styles.containerStyle}>
      <Image style={styles.imageStyle} source={getArtworkUrl(category.item.artwork)}/>
      <View style={styles.textContainerStyle}>
        <Text style={styles.titleStyle}>{category.item.title}</Text>
        <Text style={styles.speakerTextStyle}>{category.item.speakers}</Text>
      </View>
    </View>
}

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 10,
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.tabIconDefault
  },
  textContainerStyle: {
    marginLeft: 10,
    justifyContent: 'center'
  },
  titleStyle: {
    fontSize: 20,
    color: Colors.dimGray,
    marginBottom: 5
  },
  speakerTextStyle: {
    color: Colors.dimGray
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 5
  }
});

export default CategoryListItem;
