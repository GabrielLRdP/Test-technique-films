import { View, Image, StyleSheet, Text } from "react-native";

const Film = (props) => {
  const datas = props.datas;
  return (
    <View styles={styles.main}>
      {/* <Image source={{ uri: `${datas.poster_path.w342}` }} style={styles.img} /> */}
      <View>
        <Text>{datas.title}</Text>
        <Text>{datas.overview}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
  },

  logo: {
    width: 40,
    height: 40,
  },

  img: {
    width: 130,
    height: 260,
  },
});

export default Film;
