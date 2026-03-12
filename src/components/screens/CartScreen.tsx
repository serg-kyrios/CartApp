import CartItem from "@/components/CartItem";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  cart: number;
};

type CartItemType = Product & {
  quantity: number;
};

export default function CartScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [loading, setLoading] = useState(true);
  // const cart = useCartStore((state) => state.cart);
  // const removeFromCart = useCartStore((state) => state.removeFromCart);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error:", error);
        setLoading(false);
      });
  }, []);
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  const handleDecrease = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      if (!existing) return prevCart;

      if (existing.quantity === 1) {
        return prevCart.filter((item) => item.id !== product.id);
      }

      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
    });
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const getQuantity = (productId: number) => {
    const item = cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{ fontSize: 18, margin: 20, fontWeight: "bold", color: "green" }}
      >
        Items in cart: {totalItems}
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const quantity = getQuantity(item.id);

          return (
            <CartItem
              title={item.title}
              price={item.price}
              image={item.image}
              quantity={quantity}
              onAddToCart={() => handleAddToCart(item)}
              onDecrease={() => handleDecrease(item)}
            />
          );
        }}
      />
    </View>
  );
}
