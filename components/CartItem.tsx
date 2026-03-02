import { View, Text, Image, StyleSheet } from "react-native";

type Props = {
  title: string;
  price: number;
  image: string;
};

export default function CartItem({ title, price, image }: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    margin: 12,
    backgroundColor: "#fff",
    borderRadius: 16,
    elevation: 3,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
  },
  price: {
    marginTop: 4,
    fontSize: 14,
    color: "green",
  },
});
