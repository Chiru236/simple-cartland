
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };
  
  const navigateToProduct = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group cursor-pointer bg-white rounded-lg overflow-hidden product-shadow transition-all duration-300"
      onClick={navigateToProduct}
    >
      <div className="aspect-square relative overflow-hidden">
        <img
          src={`https://source.unsplash.com/${product.id < 5 ? 'photo-1581091226825-a6a2a5aee158' : 'photo-1486312338219-ce68d2c6f44d'}?w=800&q=80`}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg">{product.name}</h3>
            <p className="text-muted-foreground text-sm mt-1">{product.category}</p>
          </div>
          <p className="font-medium">${product.price.toFixed(2)}</p>
        </div>
        
        <p className="mt-2 text-sm line-clamp-2 text-balance text-muted-foreground">
          {product.description}
        </p>
        
        <div className="mt-4 flex justify-between items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={navigateToProduct}
            className="text-primary hover:text-primary hover:bg-primary/10"
          >
            View Details
          </Button>
          
          <Button
            size="icon"
            onClick={handleAddToCart}
            className="rounded-full"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
