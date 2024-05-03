import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import React from "react";

const RecipeScreen = ({ route, navigation }) => {
  const { food } = route.params;

  const [oneActive, setOneActive] = React.useState(true);
  const [twoActive, setTwoActive] = React.useState(false);
  const [threeActive, setThreeActive] = React.useState(false);
  const [fourActive, setFourActive] = React.useState(false);
  const [fiveActive, setFiveActive] = React.useState(false);

  const [leftImage, setLeftImage] = React.useState(false);
  const [centerImage, setCenterImage] = React.useState(true);
  const [rightImage, setRightImage] = React.useState(false);
  return (
    <View style={styles.container}>
      <HomeNav food={food} navigation={navigation} />

      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            width: "65%",

            justifyContent: "space-between",
            //backgroundColor: "green",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 10,
            //marginBottom: 20,
            paddingBottom: 10,
            paddingTop: 0o2,
          }}
        >
          <Pressable
            onPress={() => {
              if (!oneActive) {
                setOneActive(true);
              }
              setTwoActive(false);
              setThreeActive(false);
              setFourActive(false);
              setFiveActive(false);
            }}
            style={{
              width: oneActive ? 60 : 30,
              height: 30,
              borderRadius: 50,
              backgroundColor: "#BC0303",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              opacity: oneActive ? 1 : 0.5,
            }}
          >
            <Text style={{ color: "white" }}> 1</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setOneActive(false);
              if (!twoActive) {
                setTwoActive(true);
              }

              setThreeActive(false);
              setFourActive(false);
              setFiveActive(false);
            }}
            style={{
              width: twoActive ? 60 : 30,
              height: 30,
              borderRadius: 50,
              backgroundColor: "#BC0303",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              opacity: twoActive ? 1 : 0.5,
            }}
          >
            <Text style={{ color: "white" }}>2</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setOneActive(false);
              setTwoActive(false);
              if (!threeActive) {
                setThreeActive(true);
              }
              setFourActive(false);
              setFiveActive(false);
            }}
            style={{
              width: threeActive ? 60 : 30,
              height: 30,
              borderRadius: 50,
              backgroundColor: "#BC0303",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              opacity: threeActive ? 1 : 0.5,
            }}
          >
            <Text style={{ color: "white" }}>3</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setOneActive(false);
              setTwoActive(false);
              setThreeActive(false);
              if (!fourActive) {
                setFourActive(true);
              }
              setFiveActive(false);
            }}
            style={{
              width: fourActive ? 60 : 30,
              height: 30,
              borderRadius: 50,
              backgroundColor: "#BC0303",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              opacity: fourActive ? 1 : 0.5,
            }}
          >
            <Text style={{ color: "white" }}>4</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setOneActive(false);
              setTwoActive(false);
              setThreeActive(false);
              setFourActive(false);
              if (!fiveActive) {
                setFiveActive(true);
              }
            }}
            style={{
              width: fiveActive ? 60 : 30,
              height: 30,
              borderRadius: 50,
              backgroundColor: "#BC0303",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              opacity: fiveActive ? 1 : 0.5,
            }}
          >
            <Text style={{ color: "white" }}>5</Text>
          </Pressable>
        </View>

        <View
          style={{
            flexDirection: "row",
            // justifyContent: "space-around",

            width: "100%",

            position: "relative",
            //backgroundColor: "red",
            marginTop: 15,
            // paddingRight: 10,
          }}
        >
          <Pressable
            onPress={() => {
              setLeftImage(true);
              setCenterImage(false);
              setRightImage(false);
            }}
            style={{
              position: "absolute",
              left: 0,
              //top: "13%",
              zIndex: leftImage ? 5 : -1,
            }}
          >
            <Image source={require("../assets/left.png")} />
          </Pressable>
          <Pressable
            onPress={() => {
              setCenterImage(true);
              setLeftImage(false);
              setRightImage(false);
            }}
            style={{
              position: "relative",
              left: 25,
              // top: 15,
              bottom: "8%",
              zIndex: centerImage ? 1 : -1,
            }}
          >
            {
              <Image
                style={{ width: 316, height: 372 }}
                //style={{ backgroundColor: "red" }}
                source={require("../assets/center.png")}
              />
            }
          </Pressable>
          <Pressable
            onPress={() => {
              setRightImage(true);
              setLeftImage(false);
              setCenterImage(false);
            }}
            style={{
              position: "absolute",
              //top: "13%",
              right: 40,
              zIndex: rightImage ? 1 : -2,
            }}
          >
            <Image source={require("../assets/right.png")} />
          </Pressable>
        </View>

        <View style={{ paddingLeft: 15 }}>
          <Text style={{ fontWeight: 700, fontSize: 24 }}>Instructions</Text>

          <Text
            style={{
              fontWeight: 400,
              fontSize: 18,
              paddingTop: 5,
              opacity: 0.5,
            }}
          >
            First, you’d need to place flour all over the pot and make it look
            sweet. You know the vibes, this is how Hilda Baci cooks her
            delicious meals...
          </Text>
        </View>

        <View style={{ paddingLeft: 15, paddingTop: 20 }}>
          <Text style={{ fontWeight: 700, fontSize: 24 }}>Ingredients</Text>

          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ marginRight: 15 }}
              source={require("../assets/Frame 17.png")}
            />
            <Image
              style={{ marginRight: 15 }}
              source={require("../assets/Frame 18.png")}
            />
            <Image source={require("../assets/Frame 19.png")} />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          paddingBottom: 70,
          paddingTop: 10,
          flexDirection: "row",
          justifyContent: "space-around",
          //backgroundColor: "red",
          width: "100%",

          //minHeight: 153,
        }}
      >
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={require("../assets/homeIcon.png")} />
        </Pressable>
        <Image source={require("../assets/searchIcon.png")} />

        <Pressable
          onPress={() => {
            alert("you are not signed in");
          }}
        >
          <Image source={require("../assets/accountIcon.png")} />
        </Pressable>
      </View>
    </View>
  );
};

const HomeNav = ({ food, navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingRight: 30,
        //backgroundColor: "red",
        // paddingLeft: 10,
        //position: "absolute",
        backgroundColor: "#f2f2f2",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <AntDesign
          style={{ marginRight: 5 }}
          name="left"
          size={24}
          color="black"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={[styles.navHeader, { fontWeight: 700, fontSize: 24 }]}>
          {food}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <AntDesign
          style={{ marginRight: 5 }}
          name="heart"
          size={24}
          color="red"
        />
        <Image source={require("../assets/nav.png")} />
      </View>
    </View>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#f2f2f2",
  },
});
