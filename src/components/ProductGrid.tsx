import React from 'react'
import { Product } from '@/types/product'

interface ProductGridProps {
    products: Product[];
    initialCategory?: string;
}

const ProductGrid = ({products, initialCategory = 'all'}: ProductGridProps) => {
  return (
    <div>ProductGrid</div>
  )
}

export default ProductGrid