import * as React from 'react';
import { FlatList, StyleSheet, Text, View  } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';

import Album from '../components/Album/index';
import AlbumCategory from '../components/AlbumCategory/index';
import albumCategories from './data/albumCategories';

const album = {
  id:'1',
  artistsHeadline: 'Kizz Daniel,', 
  // Booby, Laime, Davido, WizKid'
  imageUrl:'https://i.ytimg.com/vi/b-7yjIhTF-k/hqdefault.jpg',

}


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={albumCategories}
        renderItem={({item}) => 
          <AlbumCategory 
            title={item.title}
            albums={item.albums}
          />}
          keyExtractor={(item) => item.id}
      />
  


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
