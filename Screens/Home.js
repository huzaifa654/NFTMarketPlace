import React from 'react';
import {useState} from 'react';
import {Text, SafeArea, FlatList, View, StatusBar} from 'react-native';
//import{ COLORS,NFTData} from '.../constants';
import {COLORS} from '../constants';
import {NFTData} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NFTCard, HomeHeader, FocusStatusBar} from '../components';

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);
  const handleSearch = value => {
    if (!value.length) return setNftData(NFTData);
    const filterdData = NFTData.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );
    if (filterdData.length) {
      //it means as if there any one element  exsist in list
      setNftData(filterdData);
    } else {
      setNftData(NFTData);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusStatusBar background={COLORS.primary} />

      <View style={{flex: 1}}>
        <View style={{zIndex: 0}}>
          <FlatList
            data={nftData}
            renderItem={({item}) => <NFTCard data={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}>
          <View style={{height: 300, backgroundColor: COLORS.primary}} />
          <View style={{flex: 1, backgroundC: COLORS.white}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
