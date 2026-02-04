import React, { useEffect, useState } from 'react'
import { Product } from '@/types/product'
import { useRouter, useSearchParams } from 'next/navigation'

interface ProductGridProps {
    products: Product[];
    initialCategory?: string;
}

const ProductGrid = ({products, initialCategory = 'all'}: ProductGridProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || initialCategory)

  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    setSelectedCategory(category);
  }, [searchParams])

  const filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);
  return (
    <div>ProductGrid</div>
  )
}

export default ProductGrid