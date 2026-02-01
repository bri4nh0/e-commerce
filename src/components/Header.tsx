"use client"
import React, {ReactNode, useState} from 'react'

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

    const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <>
        <header className='bg-white/80 w-full border-b border-gray-200 backdrop-blur-sm sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8'>
                <Link href={brandHref} className='text-xl font-bold text-gray-900'>{brand}</Link>
            </div>
        </header>
    </>
  )
}

export default Header