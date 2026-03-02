import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CartScreen } from "@/src/components/screens/CartScreen";
//
type Props = {
  onAddToCart: () => void;
  disabled?: boolean;
  quantity?: number;
};
interface AddToCartButtonProps {
  onPress: () => void;
  disabled?: boolean;
  quantity?: number;
}

export default function AddToCartButton({
  disabled = false,
  quantity,
}: AddToCartButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={() => {
        if (!disabled) {
          onAddToCart();
        }
      }}
      disabled={disabled}
    >
      <LinearGradient colors={["#6BFF9C", "#8EA8FF"]} style={styles.gradient}>
        <Ionicons name="cart-outline" size={18} color="white" />
        <Text style={styles.text}>
          {quantity ? `Add ${quantity}` : "Add to Cart"}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#FF6B6B",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  gradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 8,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  disabled: {
    opacity: 0.5,
  },
});
