import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import moroccanPattern from '../../assets/pattern.png';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] relative overflow-hidden text-[#F1F5F9] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 opacity-10 bg-center bg-cover pointer-events-none"
                style={{ backgroundImage: `url(${moroccanPattern})` }}
            />
            <div className="text-center relative z-10 w-full max-w-lg mx-auto">
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl">
                    <h1 className="text-9xl font-black text-[#E63946] mb-4 drop-shadow-lg">404</h1>
                    <h2 className="text-3xl font-bold text-[#14FFEC] mb-4">Page non trouvée</h2>
                    <p className="text-[#94A3B8] mb-8 max-w-md mx-auto">
                        La page que vous recherchez n'existe pas ou a été déplacée.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/"
                            className="inline-flex items-center px-6 py-3 bg-[#14FFEC] hover:bg-[#FACC15] text-[#0F2027] hover:text-[#2C5364] font-bold rounded-xl shadow-lg transition-all duration-300"
                        >
                            <Home className="w-5 h-5 mr-2" />
                            Retour à l'accueil
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center px-6 py-3 border-2 border-[#14FFEC] text-[#14FFEC] hover:bg-[#14FFEC] hover:text-[#0F2027] font-bold rounded-xl transition-all duration-300"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Retour en arrière
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;