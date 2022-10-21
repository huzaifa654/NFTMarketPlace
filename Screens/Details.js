import React from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {SafeAreaView} from 'react-native-safe-area-context';
import {
  CircleButton,
  DetailsBid,
  DetailsDesc,
  FocusStatusBar,
  RctButton,
  SubInfo,
} from '../components';
import {assets, COLORS, SHADOWS, SIZES} from '../constants';

const DetailHeader = ({data, navigation}) => (
  <View style={{width: '100%', height: 373}}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{
        width: '100%',
        height: '100%',
      }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight - 5}
    />
    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight - 5}
    />
  </View>
);

const Details = ({route, navigation}) => {
  const {data} = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        transLucent={true}
      />

      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255,0.5)',
          zIndex: 1,
        }}>
        <RctButton minWidth={170} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({item}) => <DetailsBid bid={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: SIZES.extraLarge * 3}}
        ListHeaderComponent={() => (
          <>
            <DetailHeader data={data} navigation={navigation} />
            <SubInfo />

            <View style={{padding: SIZES.font}}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    color: COLORS.primary,
                  }}>
                  Current Bid
                </Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
