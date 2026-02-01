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
        <header>
            <div className='max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8'>
                <Link href={brandHref}>{brand}</Link>
            </div>
        </header>
    </>
  )
}

export default Header