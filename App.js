import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import HomeScreen from "./screens/homeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import recipeScreen from "./screens/recipeScreen";

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("./assets/nav.png")}
    />
  );
}

const HomeNav = () => {
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
      }}
    >
      <Text style={[styles.navHeader, { fontWeight: 700, fontSize: 24 }]}>
        Let's Cook Something
      </Text>
      <Image source={require("./assets/nav.png")} />
    </View>
  );
};

const RecipeNav = () => {
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
      }}
    >
      <Text style={[styles.navHeader, { fontWeight: 700, fontSize: 24 }]}>
        Let's Cook Something
      </Text>
      <Image source={require("./assets/nav.png")} />
    </View>
  );
};

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerStyle: {
              backgroundColor: "#f2f2f2",
              borderBottomWidth: 0,
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0,
            },
            headerTitle: (props) => <HomeNav {...props} />,
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Recipe"
          options={{
            headerStyle: {
              backgroundColor: "#f2f2f2",
              borderBottomWidth: 0,
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0,
            },
            //headerTitle: (props) => <RecipeNav {...props} />,
            headerShown: false,
          }}
          component={recipeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
