import React, { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, Home, Info, Phone, Bell, Search, Settings, LogOut } from 'lucide-react';
import logo from '../assets/logo.svg'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [user, setUser] = useState(null); // This would come from your auth context
    const [notifications, setNotifications] = useState(3); // Example notification count

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Mock user data - replace with actual auth logic
    const mockUser = {
        name: "Ahmed Ben Ali",
        role: "ouvrier", // or "client" or "admin"
        avatar: null
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigationItems = [
        { name: 'Accueil', href: '/', icon: Home },
        { name: 'À propos', href: '/about', icon: Info },
        { name: 'Services', href: '/services', icon: Briefcase },
        { name: 'Contact', href: '/contact', icon: Phone },
    ];

    const userMenuItems = [
        { name: 'Profil', href: '/profile', icon: User },
        { name: 'Paramètres', href: '/settings', icon: Settings },
        { name: 'Déconnexion', href: '/logout', icon: LogOut, action: 'logout' },
    ];

    const handleLogout = () => {
        // Add logout logic here
        console.log('Logging out...');
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-18 min-h-[72px] flex items-center ${isScrolled
            ? 'bg-gradient-to-r from-[#23395d]/95 via-[#4e878c]/95 to-[#b85c38]/95 backdrop-blur-md shadow-2xl'
            : 'bg-gradient-to-r from-[#23395d]/80 via-[#4e878c]/80 to-[#b85c38]/80 backdrop-blur-sm'
            }`}>
            {/* Moroccan Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
                <svg className="w-full h-full" viewBox="0 0 200 60">
                    <defs>
                        <pattern id="navMoroccan" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M20 5 L35 20 L20 35 L5 20 Z" fill="#c9a227" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#navMoroccan)" />
                </svg>
            </div>

            <div className="container mx-auto px-2 sm:px-4 relative">
                <div className="flex items-center justify-between h-16 min-h-[56px] sm:min-h-[64px]">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="relative">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 border-2 border-[#c9a227] rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                                <img src={logo} alt="Mo9f Logo" className="w-7 h-7 sm:w-8 sm:h-8 object-cover rounded-full" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-pulse"></div>
                        </div>
                        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#c9a227] to-[#b85c38] bg-clip-text text-transparent">
                            Mo9f
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigationItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="group relative flex items-center space-x-2 text-[#f4f1ee] hover:text-[#c9a227] transition-colors duration-300"
                            >
                                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                <span className="font-medium">{item.name}</span>
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#c9a227] to-[#b85c38] group-hover:w-full transition-all duration-300"></div>
                            </a>
                        ))}
                    </div>

                    {/* User Section */}
                    <div className="hidden md:flex items-center space-x-4">
                        {user || mockUser ? (
                            <div className="flex items-center space-x-4">
                                {/* Search */}
                                <button className="relative p-2 text-[#f4f1ee] hover:text-[#c9a227] transition-colors duration-300">
                                    <Search className="w-5 h-5" />
                                </button>

                                {/* Notifications */}
                                <button className="relative p-2 text-[#f4f1ee] hover:text-[#c9a227] transition-colors duration-300">
                                    <Bell className="w-5 h-5" />
                                    {notifications > 0 && (
                                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">
                                            {notifications}
                                        </span>
                                    )}
                                </button>

                                {/* User Dropdown */}
                                <div className="relative group">
                                    <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-white/10 transition-colors duration-300">
                                        <div className="w-8 h-8 bg-gradient-to-br from-[#4e878c] to-[#b85c38] rounded-full flex items-center justify-center shadow-lg">
                                            <User className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-[#f4f1ee] font-medium hover:text-[#c9a227] hover:bg-[#c9a227]/10 px-2 py-1 rounded transition-colors duration-300">{mockUser.name}</span>
                                    </button>

                                    {/* Dropdown Menu */}
                                    <div className="absolute right-0 top-full mt-2 w-48 bg-[#23395d] rounded-lg shadow-2xl border border-[#b85c38] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                                        <div className="py-2">
                                            {userMenuItems.map((item, index) => (
                                                <a
                                                    key={index}
                                                    href={item.href}
                                                    onClick={item.action === 'logout' ? handleLogout : undefined}
                                                    className="flex items-center space-x-3 px-4 py-2 text-[#f4f1ee] hover:bg-[#c9a227]/10 hover:text-[#c9a227] rounded transition-colors duration-300"
                                                >
                                                    {item.icon && <item.icon className='w-4 h-4' />}
                                                    <span>{item.name}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <a
                                    href="/login"
                                    className="px-6 py-2 bg-[#ffe082] hover:bg-[#c9a227] text-[#23395d] font-bold rounded-full shadow-xl border-4 border-[#c9a227] hover:border-[#b85c38] transition-all duration-300 transform hover:scale-105"
                                >
                                    Connexion
                                </a>
                                <a
                                    href="/register"
                                    className="px-6 py-2 bg-[#4e878c] hover:bg-[#b85c38] text-[#f4f1ee] font-medium rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                                >
                                    Inscription
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-[#f4f1ee] hover:text-[#c9a227] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#c9a227] rounded-full"
                        aria-label="Ouvrir le menu"
                    >
                        {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
                    style={{ zIndex: 60 }}
                >
                    <div className="py-4 space-y-2 bg-[#23395d] rounded-lg mt-2 border border-[#b85c38]">
                        {navigationItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="flex items-center space-x-3 px-3 sm:px-4 py-3 text-[#f4f1ee] hover:bg-[#c9a227]/10 hover:text-[#c9a227] transition-colors duration-300 rounded-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <item.icon className="w-5 h-5" />
                                <span className="font-medium text-base sm:text-lg">{item.name}</span>
                            </a>
                        ))}
                        {/* Mobile User Section */}
                        {user || mockUser ? (
                            <div className="border-t border-white/20 pt-4 mt-4">
                                <div className="flex items-center space-x-3 px-3 sm:px-4 py-2 mb-2">
                                    <div className="w-8 h-8 bg-gradient-to-br from-[#4e878c] to-[#b85c38] rounded-full flex items-center justify-center shadow-lg">
                                        <User className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-[#f4f1ee] font-medium text-base sm:text-lg hover:text-[#c9a227] hover:bg-[#c9a227]/10 px-2 py-1 rounded transition-colors duration-300">{mockUser.name}</span>
                                </div>
                                {userMenuItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        onClick={item.action === 'logout' ? handleLogout : undefined}
                                        className="flex items-center space-x-3 px-3 sm:px-4 py-3 text-[#f4f1ee] hover:bg-[#c9a227]/10 hover:text-[#c9a227] transition-colors duration-300 rounded-lg"
                                    >
                                        <item.icon className="w-5 h-5" />
                                        <span className="text-base sm:text-lg">{item.name}</span>
                                    </a>
                                ))}
                            </div>
                        ) : (
                            <div className="border-t border-white/20 pt-4 mt-4 space-y-2 px-1 sm:px-2">
                                <a
                                    href="/login"
                                    className="block w-full px-3 sm:px-4 py-3 bg-[#ffe082] hover:bg-[#c9a227] text-[#23395d] font-bold rounded-lg text-center shadow-xl transition-transform transform hover:scale-105 text-base sm:text-lg border-4 border-[#c9a227] hover:border-[#b85c38]"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Connexion
                                </a>
                                <a
                                    href="/register"
                                    className="block w-full px-3 sm:px-4 py-3 bg-[#4e878c] hover:bg-[#b85c38] text-[#f4f1ee] font-semibold rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 text-base sm:text-lg"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Inscription
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;