
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";

// Sample products for the home page
const featuredProducts: Product[] = [
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
  }
];

const Index: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg text-white"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Premium Products for Modern Living
            </motion.h1>
            
            <motion.p 
              className="mt-4 text-lg text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Discover our curated collection of high-quality products designed to enhance your life.
            </motion.p>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button 
                onClick={() => navigate('/products')} 
                size="lg"
                className="rounded-full group"
              >
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium">Featured Products</h2>
            <p className="mt-2 text-muted-foreground max-w-lg mx-auto">
              Explore our most popular items chosen for their exceptional quality and design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => navigate('/products')} 
              variant="outline"
              className="rounded-full group"
            >
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-medium">Ready to Elevate Your Shopping Experience?</h2>
            <p className="mt-4 text-muted-foreground">
              Join our community of discerning customers who value quality, design, and innovation.
            </p>
            <div className="mt-8">
              <Button 
                onClick={() => navigate('/products')} 
                size="lg"
                className="rounded-full"
              >
                Start Shopping
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
