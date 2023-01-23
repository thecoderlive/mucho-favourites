import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import FavouriteList from './FavouriteList'

const MuchoFavourites = () => (
<ScrollView style={styles.mucho_favourites} showsVerticalScrollIndicator={false}>
<FavouriteList item={item.favourite_list}/>
</ScrollView>
)

export default MuchoFavourites;

const styles = StyleSheet.create({
    
});