//import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import { Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={{}}>
        <View style={{ paddingLeft: 10 }}>
          <TextInput
            placeholder="search for any meal"
            style={{
              borderRadius: 50,
              padding: 10,
              width: 373,
              backgroundColor: "#fff",
              marginTop: 10,
            }}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 50,
            //width: "100%",
          }}
        >
          <Text style={{ fontWeight: 700, fontSize: 24 }}>Most Cooked</Text>
          <Text style={{ fontWeight: 500, fontSize: 18, color: "red" }}>
            See All
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 10,
            marginTop: 20,
            justifyContent: "space-between",
          }}
        >
          <Pressable
            onPress={() =>
              navigation.navigate("Recipe", { food: "mamacita roast" })
            }
          >
            <Image source={require("../assets/mamacita.png")} />
          </Pressable>

          <Pressable
            onPress={() =>
              navigation.navigate("Recipe", { food: "Yummy roast" })
            }
          >
            <Image
              style={{ marginLeft: 20 }}
              source={require("../assets/yummy.png")}
            />
          </Pressable>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingRight: 50,
            // width: "100%",
            //backgroundColor: "green",
          }}
        >
          <Text style={{ fontWeight: 700, fontSize: 24 }}>Popular Now</Text>
          <Text style={{ fontWeight: 500, fontSize: 18, color: "red" }}>
            See All
          </Text>
        </View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingTop: 10,
            //backgroundColor: "green",
          }}
        >
          <Pressable
            onPress={() => {
              alert("Not available yet 😟");
            }}
          >
            <Image style={{}} source={require("../assets/Group 2.png")} />
          </Pressable>

          <Pressable
            onPress={() => {
              alert("Not available yet 😟");
            }}
          >
            <Image style={{}} source={require("../assets/Group 1.png")} />
          </Pressable>
          <Pressable
            onPress={() => {
              alert("Not available yet 😟");
            }}
          >
            <Image
              //style={{ marginLeft: 20 }}
              source={require("../assets/Group 3.png")}
            />
          </Pressable>

          <Pressable
            onPress={() => {
              alert("Not available yet 😟");
            }}
          >
            <Image
              //style={{ marginLeft: 20 }}
              source={require("../assets/Group 3.png")}
            />
          </Pressable>
        </ScrollView>
      </ScrollView>

      <View
        style={{
          paddingBottom: 10,
          paddingTop: 10,
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#fff",
          width: "100%",
          //minHeight: 153,
        }}
      >
        <Image source={require("../assets/homeIcon.png")} />
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //backgroundColor: "red",
    // alignItems: "center",
    //justifyContent: "center",
    //paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 20,
  },

  navHeader: {
    // fontWeight:400,
    fontSize: 24,

    //  fontWeight: 700,
  },
});
