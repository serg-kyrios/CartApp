import {
  View,
  Text,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import CartItem from "@/components/CartItem";

export default function CartScreen() {
  type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
  };

  type CartItemType = {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItemType[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
}
