
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";

// Sample products data
const allProducts: Product[] = [
  {
    id: 1,
    name: "Premium Laptop",
    description: "Ultra-thin, lightweight laptop with exceptional performance for professionals on the go.",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    description: "Immersive sound experience with active noise cancellation and all-day battery life.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    category: "Audio"
  },
  {
    id: 3,
    name: "Smart Watch",
    description: "Track your fitness, sleep, and notifications with this elegant and durable smartwatch.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    category: "Wearables"
  },
  {
    id: 4,
    name: "Professional Camera",
    description: "Capture stunning photos and videos with this high-resolution digital camera.",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    category: "Photography"
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    description: "Portable speaker with crystal clear sound and waterproof design for outdoor adventures.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1589003457321-98e4dff89ff4?auto=format&fit=crop&w=800&q=80",
    category: "Audio"
  },
  {
    id: 6,
    name: "Ergonomic Chair",
    description: "Premium office chair designed for comfort during long work sessions.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=800&q=80",
    category: "Furniture"
  },
  {
    id: 7,
    name: "Smart Home Hub",
    description: "Control all your smart devices from one central hub with voice commands.",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f?auto=format&fit=crop&w=800&q=80",
    category: "Smart Home"
  },
  {
    id: 8,
    name: "Wireless Charger",
    description: "Fast charging pad compatible with all Qi-enabled devices.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
    category: "Electronics"
  }
];

// Extract unique categories
const categories = ["All", ...new Set(allProducts.map(product => product.category))];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  
  useEffect(() => {
    // Filter products when category changes
    if (selectedCategory === "All") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(allProducts.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-medium">All Products</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Browse our collection of premium products designed to enhance your everyday experience.
          </p>
        </motion.div>
        
        {/* Categories Filter */}
        <div className="mt-8 mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No products found in this category.</p>
            <Button 
              variant="link" 
              onClick={() => setSelectedCategory("All")}
              className="mt-2"
            >
              View all products
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
