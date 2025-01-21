import { defineStore } from 'pinia';

interface Product {
    id: number
    name: string
    price: string
  };  

// Define the store
export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    items: [] as Product[], // Initialize an empty array for the wishlist items
  }),
  
  actions: {
    addToWishlist(product: Product) {
      // Check if the product is already in the wishlist
      if (!this.items.find(item => item.id === product.id)) {
        this.items.push(product) // Add the product if it's not already there
      }
    },
    
    removeFromWishlist(productId: number) {
      // Remove the product from the wishlist by its ID
      this.items = this.items.filter(item => item.id !== productId)
    },

    clearWishlist() {
      this.items = [] // Clear the wishlist
    }
  },
  
  getters: {
    wishlistCount: (state) => state.items.length, // Get the count of items in the wishlist
    isInWishlist: (state) => (productId: number) => {
      // Check if a product is in the wishlist
      return state.items.some(item => item.id === productId)
    }
  }
})