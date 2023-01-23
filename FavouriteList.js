import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const favouriteListItem = ({ item }) => (
<View style={styles.favourite_list_item}>
<Image
    style={styles.food_pic}
    source={{uri: item.food_pic}}
    />
<Text style={styles.food_name}>{item.food_name}</Text>
<Text style={styles.variety_name}>{item.variety_name}</Text>
<Text style={styles.made_by}>{item.made_by}</Text>
<Image
    style={styles.heart_icon}
    source={{uri: item.heart_icon}}
   />
</View>
  );

const FavouriteList = ({ item }) => (
<FlatList
    style={styles.favourite_list}
    data={item}
    renderItem={favouriteListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default FavouriteList;

const styles = StyleSheet.create({
    'food_pic': {
        'width': '48vw',
        'height': '50vw',
        'marginTop': 5,
        'borderTopLeftRadius': 8,
        'borderTopRightRadius': 8,
        'marginLeft': 5
    },
    'food_name': {
        'color': '#050505',
        'fontSize': 16,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'variety_name': {
        'color': '#030202',
        'fontSize': 22,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'made_by': {
        'color': '#060505',
        'fontSize': 15,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'heart_icon': {
        'width': '5vw',
        'height': '5vw',
        'margin': 5,
        'borderRadius': 8
    }
});