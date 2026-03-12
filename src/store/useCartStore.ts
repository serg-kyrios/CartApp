import { create } from "zustand";

type CartItem = {
  id: number;
  title: string;
  price: number;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  clearCart: () => set({ cart: [] }),
}));

// (id) =>
//   set((state) => ({
//     cart: state.cart
//       .map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
//       )
//       .filter((item) => item.quantity > 0),
//   }));
