import React, { useState, useEffect } from "react";

import Film from "./components/Film";
import axios from "axios";
import { Text, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { FlatList } from "react-native-web";

// import SplashScreen from "./containers/SplashScreen";

const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM5ZTA5MzQyNDFjYTAwMTVjY2JiZmEiLCJlbWFpbCI6ImdhYnJpZWwubGUucm95MDZAZ21haWwuY29tIiwiZXhwaXJhdGlvbkRhdGUiOiIyMDI0LTA4LTE0VDIyOjAwOjAwLjAwMFoiLCJpc1RyYWluaW5nIjp0cnVlLCJpYXQiOjE3MTI4Mzc0NDZ9.7RhGIiHDUccEHE6scjSnWZY-A3NZgOc6IqMizJN56Qs";

export default function App() {
  const [datas, setDatas] = useState();

  const fetchPopularMovies = async () => {
    const response = await axios.get(
      `https://lereacteur-bootcamp-api.herokuapp.com/api/allocine/movies/popular`,
      {
        headers: {
          authorization: `Bearer ${apiKey}`,
        },
      }
    );
    setDatas(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    fetchPopularMovies();
    // console.log(datas);
  }, []);

  return datas && datas.results.length > 0 ? (
    <View style={styles.container}>
      <Text style={styles.h1}>Films populaires</Text>
      {/* <Film datas={datas}></Film> */}
      <FlatList
        data={datas.results}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Film datas={item} />}
      />
    </View>
  ) : (
    <Text>Salut</Text>
  );
  // <NavigationContainer>
  //   <Stack.Navigator>
  //     <></>
  //   </Stack.Navigator>
  // </NavigationContainer>
}
const styles = StyleSheet.create({
  container: {
    margin: "auto",
    alignItems: "center",
    display: "flex",
    backgroundColor: "gray",
  },
  h1: {
    marginTop: 100,
    margin: "Auto",
    width: 250,
    backgroundColor: "red",
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
  },
});
