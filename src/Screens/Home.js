import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';
import {Colors, Images, Icons} from '../Constants';
import Swiper from 'react-native-swiper';
import Header from '../Components/Header';
import Button from '../Components/Button';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          onMenuPress={() =>
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
        />
        <ScrollView contentContainerStyle={{flexGrow: 1, padding: 20}}>
          <View style={{height: 250}}>
            <Swiper
              dotStyle={styles.dotStyle}
              dotColor={Colors.white}
              activeDotStyle={styles.dotStyle}
              activeDotColor={Colors.primary}>
              <Image source={Images.app_banner1} style={styles.bannerImg} />
              <Image source={Images.app_banner2} style={styles.bannerImg} />
              <Image source={Images.app_banner3} style={styles.bannerImg} />
            </Swiper>
          </View>

          <View style={{marginTop: 20}}>
            <View style={styles.itemContainer}>
              <ItemHolder
                source={Icons.icon_reservation}
                title={'book'}
                onPress={() => {}}
              />
              <ItemHolder
                source={Icons.icon_yourreservation}
                title={'your reservation'}
                onPress={() => {}}
              />
            </View>
            <View style={styles.itemContainer}>
              <ItemHolder
                source={Icons.icon_phoneBlack}
                title={'contact us'}
                onPress={() => {}}
              />
              <ItemHolder
                source={Icons.icon_location}
                title={'location'}
                onPress={() => alert(123)}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export const ItemHolder = (props) => {
  return (
    <TouchableOpacity
      style={styles.itemHolderContainer}
      activeOpacity={1}
      onPress={props.onPress}>
      <View style={styles.itemHolderView}>
        <Image source={props.source} style={styles.itemHolderIcon} />
        <Button
          fontSize={12}
          title={props.title}
          buttonWidth={'100%'}
          paddingVertical={6}
          onPress={props.onPress}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bannerImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },

  dotStyle: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  itemHolderContainer: {
    height: 180,
    width: '48%',
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: Colors.black,
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 3,
    shadowRadius: 5,
    elevation: 3,
    backgroundColor: Colors.white,
  },

  itemHolderIcon: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    tintColor: Colors.primary,
  },

  itemHolderView: {
    justifyContent: 'space-between',
    flex: 1,
    marginTop: 50,
  },
});
