import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import moroccanPattern from '../../assets/back2.jpeg';

const NotFound = () => {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-[#23395d] via-[#4e878c] to-[#b85c38] relative overflow-hidden text-[#c9a227] flex items-center justify-center p-4"
            style={{ backgroundImage: `url(${moroccanPattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm pointer-events-none z-0" />
            <div className="text-center relative z-10 w-full max-w-lg mx-auto">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl">
                    <h1 className="text-9xl font-black text-[#b85c38] mb-4 drop-shadow-lg">404</h1>
                    <h2 className="text-3xl font-bold text-[#4e878c] mb-4">Page non trouvée</h2>
                    <p className="text-[#f4f1ee] mb-8 max-w-md mx-auto">
                        La page que vous recherchez n'existe pas ou a été déplacée.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/"
                            className="inline-flex items-center px-6 py-3 bg-[#c9a227] hover:bg-[#b85c38] text-[#23395d] font-bold rounded-xl shadow-lg transition-all duration-300"
                        >
                            <Home className="w-5 h-5 mr-2" />
                            Retour à l'accueil
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center px-6 py-3 border-2 border-[#c9a227] text-[#23395d] bg-white/80 hover:bg-[#c9a227] hover:text-[#23395d] font-bold rounded-xl transition-all duration-300"
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