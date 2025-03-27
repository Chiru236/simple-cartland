
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { Separator } from "@/components/ui/separator";

// Sample products data (same as in Products.tsx)
const allProducts: Product[] = [
  {
    id: 1,
    name: "Premium Laptop",
    description: "Ultra-thin, lightweight laptop with exceptional performance for professionals on the go. Features the latest processor, ample memory, and fast storage for seamless multitasking. The stunning display delivers vivid colors and sharp details, while the premium aluminum build ensures durability without adding weight. Perfect for work, creative projects, or entertainment.",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    description: "Immersive sound experience with active noise cancellation and all-day battery life. These premium headphones deliver rich, detailed audio with deep bass and crystal-clear highs. The comfortable over-ear design with memory foam cushions ensures comfort even during extended listening sessions. Connect via Bluetooth or use the included auxiliary cable for a wired connection.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    category: "Audio"
  },
  {
    id: 3,
    name: "Smart Watch",
    description: "Track your fitness, sleep, and notifications with this elegant and durable smartwatch. Features include heart rate monitoring, GPS tracking, water resistance, and customizable watch faces. The bright display is easily visible even in direct sunlight, and the battery lasts up to 7 days between charges. Compatible with both iOS and Android devices.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    category: "Wearables"
  },
  {
    id: 4,
    name: "Professional Camera",
    description: "Capture stunning photos and videos with this high-resolution digital camera. The large sensor delivers exceptional image quality even in low light conditions, while the fast autofocus system ensures you never miss a moment. Includes various shooting modes for both beginners and professionals, 4K video recording capabilities, and built-in Wi-Fi for easy sharing.",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    category: "Photography"
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    description: "Portable speaker with crystal clear sound and waterproof design for outdoor adventures. The durable construction withstands drops, dust, and water immersion, making it perfect for the beach, pool, or camping. Despite its compact size, it delivers room-filling sound with surprising bass response. The rechargeable battery provides up to 12 hours of playback on a single charge.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1589003457321-98e4dff89ff4?auto=format&fit=crop&w=800&q=80",
    category: "Audio"
  },
  {
    id: 6,
    name: "Ergonomic Chair",
    description: "Premium office chair designed for comfort during long work sessions. Features adjustable height, lumbar support, and breathable mesh fabric to keep you cool. The ergonomic design promotes proper posture and reduces strain on your back, neck, and shoulders. The sturdy base and smooth-rolling casters ensure stability and mobility on any floor surface.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=800&q=80",
    category: "Furniture"
  },
  {
    id: 7,
    name: "Smart Home Hub",
    description: "Control all your smart devices from one central hub with voice commands. Compatible with a wide range of smart home products including lights, thermostats, security systems, and entertainment devices. The intuitive interface makes it easy to create routines, set schedules, and manage your entire smart home ecosystem. The far-field microphones can hear your commands even from across the room.",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f?auto=format&fit=crop&w=800&q=80",
    category: "Smart Home"
  },
  {
    id: 8,
    name: "Wireless Charger",
    description: "Fast charging pad compatible with all Qi-enabled devices. Simply place your compatible smartphone or earbuds on the charging surface – no need to fumble with cables. The sleek, minimalist design complements any desk or nightstand. The LED indicator provides charging status at a glance, and the non-slip surface keeps your device securely in place while charging.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
    category: "Electronics"
  }
];

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Simulate API call to fetch product details
    setLoading(true);
    setTimeout(() => {
      const foundProduct = allProducts.find(p => p.id === Number(productId));
      setProduct(foundProduct || null);
      setLoading(false);
    }, 500);
  }, [productId]);
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };
  
  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="animate-pulse">
          <p className="text-muted-foreground">Loading product details...</p>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-medium">Product not found</h2>
        <p className="text-muted-foreground mt-2">The product you're looking for doesn't exist or has been removed.</p>
        <Button 
          variant="link" 
          onClick={() => navigate('/products')}
          className="mt-4"
        >
          View all products
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6 -ml-2 flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square overflow-hidden rounded-lg bg-muted"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <div>
              <span className="text-sm text-primary font-medium">{product.category}</span>
              <h1 className="text-3xl font-medium mt-1">{product.name}</h1>
              <p className="text-2xl font-medium mt-2">${product.price.toFixed(2)}</p>
            </div>
            
            <Separator className="my-6" />
            
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
            
            <div className="mt-auto pt-8">
              <Button 
                onClick={handleAddToCart}
                size="lg"
                className="w-full sm:w-auto rounded-full"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
