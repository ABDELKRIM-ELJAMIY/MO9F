
import { motion as Motion } from 'framer-motion';
import workerImg from '../../assets/worker.jpg';
import clientImg from '../../assets/client.jpg';
import moroccanPattern from '../../assets/pattern.png';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] relative overflow-hidden text-[#F1F5F9]">
            <div
                className="absolute inset-0 opacity-10 bg-center bg-cover pointer-events-none"
                style={{ backgroundImage: `url(${moroccanPattern})` }}
            />

            <Motion.div
                className="container mx-auto px-4 py-20 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="flex-1">
                    <Motion.h1
                        className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[#14FFEC]"
                        initial={{ x: -120, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Mo9f<span className="text-[#FACC15]">.</span> <br />
                        Plateforme <span className="text-[#9D4EDD]">connectée</span> au cœur du savoir-faire
                    </Motion.h1>

                    <Motion.p
                        className="mt-6 text-lg lg:text-xl text-[#94A3B8] max-w-xl"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Connectez les particuliers et les professionnels marocains à travers une interface intuitive, moderne et respectueuse de notre identité culturelle.
                    </Motion.p>

                    <Motion.div
                        className="mt-10 flex gap-4"
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <a
                            href="/register"
                            className="bg-[#14FFEC] hover:bg-[#0fdac5] text-black font-semibold px-6 py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105 text-center"
                        >
                            S'inscrire
                        </a>
                        <a
                            href="/login"
                            className="border-2 border-[#14FFEC] text-[#14FFEC] hover:bg-[#14FFEC] hover:text-[#0F2027] font-semibold px-6 py-3 rounded-xl transition-transform transform hover:scale-105 text-center"
                        >
                            Se connecter
                        </a>
                    </Motion.div>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Motion.div
                        className="bg-white/5 backdrop-blur-lg p-4 rounded-2xl border border-white/10 shadow-2xl transform hover:rotate-1 hover:scale-[1.02] transition-all duration-300"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <img
                            src={workerImg}
                            alt="Ouvrier"
                            className="rounded-xl w-full h-64 object-cover mb-4 shadow-lg"
                        />
                        <h3 className="text-xl font-semibold text-[#FACC15]">Ouvrier Expert</h3>
                        <p className="text-sm text-[#E2E8F0] mt-2">
                            Disponible, expérimenté, et toujours prêt à servir dans votre région.
                        </p>
                    </Motion.div>

                    <Motion.div
                        className="bg-white/5 backdrop-blur-lg p-4 rounded-2xl border border-white/10 shadow-2xl transform hover:-rotate-1 hover:scale-[1.02] transition-all duration-300"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <img
                            src={clientImg}
                            alt="Client élégant"
                            className="rounded-xl w-full h-64 object-cover mb-4 shadow-lg"
                        />
                        <h3 className="text-xl font-semibold text-[#14FFEC]">Client Stylé</h3>
                        <p className="text-sm text-[#E2E8F0] mt-2">
                            En quête de qualité, d’élégance et d’un service digne de confiance.
                        </p>
                    </Motion.div>
                </div>
            </Motion.div>
        </div>
    );
};

export default HomePage;
