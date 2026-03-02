import { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import CartItem from "@/src/components/screens/CartScreen";

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

export default function CartScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [loading, setLoading] = useState(true);

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
      const getQuantity = (productId: number) => {
        const item = cart.find((item) => item.id === productId);
        return item ? item.quantity : 0;
      };
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 18, margin: 10 }}>
        Items in cart: {cart.length}
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem
            title={item.title}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
            onAddToCart={() => handleAddToCart(item)}
          />
        )}
      />
    </View>
  );
}
