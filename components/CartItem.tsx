import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
  title: string;
  price: number;
  image: string;
  onAddToCart: () => void;
};

export default function CartItem({ title, price, image, onAddToCart }: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.price}>${price}</Text>

        <TouchableOpacity style={styles.button} onPress={onAddToCart}>
          <Text style={{ color: "white" }}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 12,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 3,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
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
    marginVertical: 6,
    color: "green",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 6,
    borderRadius: 6,
    alignItems: "center",
  },
});
