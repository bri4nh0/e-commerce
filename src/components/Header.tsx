"use client";
import React, {ReactNode, useState} from 'react';
import Link from 'next/link';
import { FiMenu, FiShoppingCart, FiX } from 'react-icons/fi';
import CartSidebar from '@/components/CartSidebar';




interface NavItem {
    label: string;
    href: string;
}

interface HeaderProps {
    brand?: ReactNode;
    brandHref?: string;
    navItems?: NavItem[];
    showCart?: boolean;
}

const Header = ({
    brand = "Unibuy",
    brandHref="/",
    navItems = [
        {href:"/", label: "Home"},
        {href:"/about", label: "About"},
        {href:"/terms", label: "Terms"},
        {href:"/privacy", label: "Privacy"},
        {href:"/contact", label: "Contact"}
    ],
    showCart = true
}: HeaderProps) => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    const cartCount = 3;

    const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <>
        <header className='bg-white/80 w-full border-b border-gray-200 backdrop-blur-sm sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8'>
                <Link href={brandHref} className='text-xl font-bold text-gray-900'>{brand}</Link>

                {
                    navItems.length > 0 && (
                        <nav className='hidden sm:flex gap-6'>
                            {
                                navItems.map((item) => (
                                    <Link href={item.href} className='text-sm font-medium text-gray-600
                                    transition-colors hover:text-gray-900' key={item.href}>{item.label}</Link>
                                ))
                            }
                        </nav>
                    )
                }

                <div className='flex items-center gap-4'>
                    {
                        showCart && (
                            <button
                            onClick={() => setCartOpen(true)}
                            className='relative p-2 text-gray-600 hover:text-gray-900 transition-colors'>
                                <FiShoppingCart className='w-6 h-6'/>
                                {
                                    cartCount > 0 && (
                                        <span className='absolute -top-1 -right-1 bg-black text-white rounded-full
                                        text-xs w-5 h-5 flex items-center justify-center'>
                                            {cartCount}
                                        </span>
                                    )
                                }
                                
                            </button>
                        )
                    }
                    {/* Mobile Menu Button */}
                    {
                        navItems.length > 0 && (
                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='sm:hidden'>
                                {
                                    mobileMenuOpen ? <FiX className='w-6 h-6'/> : <FiMenu className='w-6 h-6'/>
                                }
                            </button>
                            
                        )
                    }
                </div>
            </div>

            {
                mobileMenuOpen && navItems.length > 0 && (
                    <div className='border-t border-gray-200 bg-white sm:hidden'>
                        <nav className='flex flex-col gap-4 p-4'>
                            {
                                navItems.map((item) => (
                                    <Link href={item.href} key={item.href}>
                                        {item.label}
                                    </Link>
                                ))
                            }
                        </nav>
                    </div>
                )
            }
        </header>

        {
            showCart && (
                <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)}/>
            )
        }
    </>
  )
}

export default Header