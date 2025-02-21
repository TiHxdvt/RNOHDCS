import React, {useEffect, useState} from 'react';
import {
  Button,
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import {
  Box,
  AddIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
  ArrowUpIcon,
  VStack,
  Center,
  HStack,
  Icon,
  createIcon,
} from 'native-base';
import {Path, G, Circle} from 'react-native-svg';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const IconTest = () => {
  const icons = [
    {
      icon: <AddIcon />,
      iconName: 'add',
    },
    {
      icon: <ArrowBackIcon />,
      iconName: 'arrow-back',
    },
    {
      icon: <ArrowForwardIcon />,
      iconName: 'arrow-forward',
    },
    {
      icon: <ArrowUpIcon />,
      iconName: 'arrow-up',
    },
  ];
  const CustomIcon = createIcon({
    viewBox: '0 0 36 36',
    path: [
      <Circle cx="18" cy="18" r="17.5" fill="#06B6D4" stroke="#0E7490" />,
      <Circle cx="18" cy="18" r="13.5" fill="white" stroke="#0E7490" />,
      <Circle cx="18" cy="18" r="9.5" fill="#06B6D4" stroke="#0E7490" />,
      <Circle cx="18" cy="18" r="5.5" fill="white" stroke="#0E7490" />,
    ],
  });
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="d">
            <TestCase itShould="d-值M435 .1C194.8.1.1 194.8.1" tags={['dev']}>
              <Center>
                <Icon size="4xl" viewBox="0 0 870 873">
                  <G
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth={1}
                    fill="none">
                    <Path
                      d="M435 .1C194.8.1.1 194.8.1 435c0 187.3 118.4 346.9 284.4 408.1 3.3-29.9 15-57.2 32.7-79.6 12.1-15.4 26.9-28.5 43.9-38.4 2.1-5 4.6-10.6 7.1-16.6-50.3-26-84.7-78.1-84.7-138.6 0-51.7 25.3-97.7 64-125.9-10.9-20.6-21.3-40.2-31.8-58.2-18.1-31.5-46.7-59.7-68.4-78.9-21 11.9-47.8 4.7-59.7-16.3-11.9-21-4.7-47.8 16.3-59.7 21-11.9 47.4-4.7 59.7 15.9v.4c7.2 12.7 7.2 27.5 1.8 39.8 22.8 19.5 56.8 52.5 77.8 89 9.8 17 19.5 34.7 29.3 53.5 20.3-9.4 42.7-14.8 66.2-14.8 21.3 0 41.6 4.3 60.1 11.9 9.8-18.5 19.5-36.2 28.9-52.8 21-36.2 54.6-68.7 77.4-88.3-5.4-12.3-5.4-26.8 1.8-39.4v-.4c12.3-20.6 38.7-27.9 59.3-15.9 21 11.9 28.2 38.7 16.3 59.3-11.9 21-38.4 28.2-59.3 16.3-21.7 18.8-49.9 47.4-68 78.5-10.1 17.4-20.3 36.5-30.8 56.4 42 27.9 69.8 75.3 69.8 129.5 0 63-36.9 116.9-90.4 141.5.9 2.7 2 4.9 3 7.2 47 22.3 81.1 67.4 87.9 121.1C755.9 776 869.9 618.8 869.9 435 869.9 194.8 675.2.1 435 .1z"
                      fill="#CA0000"
                    />
                    <Path
                      d="M284.8 843.3h.1-.1zM284.8 843.3c-.1 0-.3-.1-.4-.1.2 0 .3 0 .4.1z"
                      fill="#FFF"
                    />
                    <G fill="#FFF" stroke="#FFF" strokeWidth={5}>
                      <Path
                        d="M485.2 5.8c-20.6-11.9-47-4.7-59.3 15.9v.4c-7.2 12.7-7.2 27.1-1.8 39.4-22.8 19.5-56.4 52.1-77.4 88.3-9.4 16.6-19.2 34.4-28.9 52.8-18.5-7.6-38.7-11.9-60.1-11.9-23.5 0-45.9 5.4-66.2 14.8-9.8-18.8-19.5-36.5-29.3-53.5-21-36.5-55-69.5-77.8-89 5.4-12.3 5.4-27.1-1.8-39.8v-.4C70.3 2.2 43.9-5.1 22.9 6.9 1.9 18.8-5.3 45.6 6.6 66.6c11.9 21 38.7 28.2 59.7 16.3 21.7 19.2 50.3 47.4 68.4 78.9 10.5 18.1 21 37.6 31.8 58.2-38.7 28.2-64 74.2-64 125.9 0 60.4 34.4 112.5 84.7 138.6-2.5 6.2-5.1 11.9-7.2 17-41.6 24.4-70.8 67.4-76.4 117.6 46.9 17.3 97.6 26.8 150.6 26.8 56.2 0 109.9-10.7 159.2-30.1-7.1-52.8-40.5-97.3-86.8-119.8-1.1-2.9-2.5-5.4-3.6-8.7 53.5-24.6 90.4-78.5 90.4-141.5 0-54.3-27.9-101.7-69.8-129.5 10.5-19.9 20.6-39.1 30.8-56.4 18.1-31.1 46.3-59.7 68-78.5 21 11.9 47.4 4.7 59.3-16.3 11.7-20.5 4.5-47.3-16.5-59.3z"
                        transform="translate(181 224)"
                      />
                    </G>
                  </G>
                </Icon>
              </Center>
            </TestCase>
          </TestSuite>

          <TestSuite name="path">
            <TestCase itShould="path" tags={['dev']}>
              <Center flex={1} px="3">
                <CustomIcon size={12} />
              </Center>
            </TestCase>
          </TestSuite>

          <TestSuite name="viewBox">
            <TestCase itShould="viewBox-值0 0 870 873" tags={['dev']}>
              <Center>
                <Icon size="4xl" viewBox="0 0 870 873">
                  <G
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth={1}
                    fill="none">
                    <Path
                      d="M435 .1C194.8.1.1 194.8.1 435c0 187.3 118.4 346.9 284.4 408.1 3.3-29.9 15-57.2 32.7-79.6 12.1-15.4 26.9-28.5 43.9-38.4 2.1-5 4.6-10.6 7.1-16.6-50.3-26-84.7-78.1-84.7-138.6 0-51.7 25.3-97.7 64-125.9-10.9-20.6-21.3-40.2-31.8-58.2-18.1-31.5-46.7-59.7-68.4-78.9-21 11.9-47.8 4.7-59.7-16.3-11.9-21-4.7-47.8 16.3-59.7 21-11.9 47.4-4.7 59.7 15.9v.4c7.2 12.7 7.2 27.5 1.8 39.8 22.8 19.5 56.8 52.5 77.8 89 9.8 17 19.5 34.7 29.3 53.5 20.3-9.4 42.7-14.8 66.2-14.8 21.3 0 41.6 4.3 60.1 11.9 9.8-18.5 19.5-36.2 28.9-52.8 21-36.2 54.6-68.7 77.4-88.3-5.4-12.3-5.4-26.8 1.8-39.4v-.4c12.3-20.6 38.7-27.9 59.3-15.9 21 11.9 28.2 38.7 16.3 59.3-11.9 21-38.4 28.2-59.3 16.3-21.7 18.8-49.9 47.4-68 78.5-10.1 17.4-20.3 36.5-30.8 56.4 42 27.9 69.8 75.3 69.8 129.5 0 63-36.9 116.9-90.4 141.5.9 2.7 2 4.9 3 7.2 47 22.3 81.1 67.4 87.9 121.1C755.9 776 869.9 618.8 869.9 435 869.9 194.8 675.2.1 435 .1z"
                      fill="#CA0000"
                    />
                    <Path
                      d="M284.8 843.3h.1-.1zM284.8 843.3c-.1 0-.3-.1-.4-.1.2 0 .3 0 .4.1z"
                      fill="#FFF"
                    />
                    <G fill="#FFF" stroke="#FFF" strokeWidth={5}>
                      <Path
                        d="M485.2 5.8c-20.6-11.9-47-4.7-59.3 15.9v.4c-7.2 12.7-7.2 27.1-1.8 39.4-22.8 19.5-56.4 52.1-77.4 88.3-9.4 16.6-19.2 34.4-28.9 52.8-18.5-7.6-38.7-11.9-60.1-11.9-23.5 0-45.9 5.4-66.2 14.8-9.8-18.8-19.5-36.5-29.3-53.5-21-36.5-55-69.5-77.8-89 5.4-12.3 5.4-27.1-1.8-39.8v-.4C70.3 2.2 43.9-5.1 22.9 6.9 1.9 18.8-5.3 45.6 6.6 66.6c11.9 21 38.7 28.2 59.7 16.3 21.7 19.2 50.3 47.4 68.4 78.9 10.5 18.1 21 37.6 31.8 58.2-38.7 28.2-64 74.2-64 125.9 0 60.4 34.4 112.5 84.7 138.6-2.5 6.2-5.1 11.9-7.2 17-41.6 24.4-70.8 67.4-76.4 117.6 46.9 17.3 97.6 26.8 150.6 26.8 56.2 0 109.9-10.7 159.2-30.1-7.1-52.8-40.5-97.3-86.8-119.8-1.1-2.9-2.5-5.4-3.6-8.7 53.5-24.6 90.4-78.5 90.4-141.5 0-54.3-27.9-101.7-69.8-129.5 10.5-19.9 20.6-39.1 30.8-56.4 18.1-31.1 46.3-59.7 68-78.5 21 11.9 47.4 4.7 59.3-16.3 11.7-20.5 4.5-47.3-16.5-59.3z"
                        transform="translate(181 224)"
                      />
                    </G>
                  </G>
                </Icon>
              </Center>
            </TestCase>
          </TestSuite>

          <TestSuite name="as">
            <TestCase itShould="as" tags={['dev']}>
              <Center>
                <HStack space={3}>
                  <Icon
                    as={AntDesign}
                    name="android1"
                    color="coolGray.800"
                    _dark={{
                      color: 'warmGray.50',
                    }}
                  />
                  <Icon
                    as={Entypo}
                    name="app-store"
                    color="coolGray.800"
                    _dark={{
                      color: 'warmGray.50',
                    }}
                  />
                  <Icon
                    as={MaterialCommunityIcons}
                    name="web"
                    color="coolGray.800"
                    _dark={{
                      color: 'warmGray.50',
                    }}
                  />
                </HStack>
              </Center>
            </TestCase>
          </TestSuite>
          <TestSuite name="size">
            <TestCase itShould="size" tags={['dev']}>
              <HStack space={4}>
                <AddIcon size={12}></AddIcon>
                <AddIcon size={20}></AddIcon>
                <AddIcon size={40}></AddIcon>
              </HStack>
            </TestCase>
          </TestSuite>
          
          <TestSuite name="color">
            <TestCase itShould="color" tags={['dev']}>
              <HStack space={3}>
                <AddIcon color="red.500" size={20} name="AddIcon"></AddIcon>
                <ArrowBackIcon
                  color="blue.500"
                  size={20}
                  name="ArrowBackIcon"></ArrowBackIcon>
                <ArrowForwardIcon
                  color="green.500"
                  size={20}
                  name="ArrowForwardIcon"></ArrowForwardIcon>
              </HStack>
            </TestCase>
          </TestSuite>
          <TestSuite name="name">
            <TestCase itShould="name" tags={['dev']}>
              <HStack space={3}>
                <AddIcon size={20} name="AddIcon"></AddIcon>
                <ArrowBackIcon size={20} name="ArrowBackIcon"></ArrowBackIcon>
                <ArrowForwardIcon
                  size={20}
                  name="ArrowForwardIcon"></ArrowForwardIcon>
              </HStack>
            </TestCase>
          </TestSuite>
        </ScrollView>
      </Tester>
    </>
  );
};
const styles = StyleSheet.create({
  btn: {
    width: 60,
    height: 60,
    aspectRatio: 1,
  },
  content: {
    width: '100%',
    height: '100%',
  },
  section: {
    backgroundColor: '#f2f2f2',
  },
  box: {
    height: 100,
    width: 200,
  },
  tipText: {
    fontSize: 12,
    color: '#999',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    color: '#fff',
  },
  colText: {
    padding: 5,
  },
  col: {
    backgroundColor: '#FFB6C1',
  },
  row: {
    backgroundColor: '#00BFFF',
  },
});

export default IconTest;
