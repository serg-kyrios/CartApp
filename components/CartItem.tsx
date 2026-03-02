import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import AddToCartButton from "@/components/AddToCartButton";
//import { CartScreen } from "@/src/components/screens/CartScreen";

type Props = {
  title: string;
  price: number;
  image: string;
  quantity: number;
  onAddToCart: () => void;
  onDecrease: () => void;
};

export default function CartItem({
  title,
  price,
  image,
  onAddToCart,
  quantity,
  onDecrease,
}: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <Text style={styles.price}>${price}</Text>

        {quantity > 0 ? (
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}
          >
            <TouchableOpacity
              onPress={onDecrease}
              style={{
                padding: 8,
                backgroundColor: "#eee",
                borderRadius: 6,
              }}
            >
              <Text style={{ fontSize: 18 }}>➖</Text>
            </TouchableOpacity>

            <Text style={{ marginHorizontal: 12, fontWeight: "bold" }}>
              {quantity}
            </Text>

            <TouchableOpacity
              onPress={onAddToCart}
              style={{
                padding: 8,
                backgroundColor: "#eee",
                borderRadius: 6,
              }}
            >
              <Text style={{ fontSize: 18 }}>➕</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <AddToCartButton onPress={onAddToCart} />
        )}
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
