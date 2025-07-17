
import { motion as Motion } from 'framer-motion';
import workerImg from '../../assets/worker.jpg';
import clientImg from '../../assets/client.jpg';
import moroccanPattern from '../../assets/back2.jpeg';

const HomePage = () => {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-[#23395d] via-[#4e878c] to-[#b85c38] relative overflow-hidden text-[#c9a227]"
            style={{ backgroundImage: `url(${moroccanPattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm pointer-events-none z-0" />

            <Motion.div
                className="container mx-auto px-4 py-20 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="flex-1">
                    <Motion.h1
                        className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[#c9a227]"
                        initial={{ x: -120, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Mo9f<span className="text-[#b85c38]">.</span> <br />
                        Plateforme <span className="text-[#4e878c]">connectée</span> au cœur du savoir-faire
                    </Motion.h1>

                    <Motion.div
                        className="mt-6 max-w-xl"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="bg-[#f4f8fb] text-[#23395d] text-lg lg:text-xl rounded-xl shadow-lg px-6 py-4 font-medium">
                            Connectez les particuliers et les professionnels marocains à travers une interface intuitive, moderne et respectueuse de notre identité culturelle.
                        </div>
                    </Motion.div>

                    <Motion.div
                        className="mt-10 flex gap-4"
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <a
                            href="/register"
                            className="bg-[#23395d] hover:bg-[#4e878c] text-white font-bold px-6 py-3 rounded-xl shadow-xl border-4 border-[#4e878c] hover:border-[#b85c38] transition-transform transform hover:scale-105 text-center"
                        >
                            S'inscrire
                        </a>
                        <a
                            href="/login"
                            className="bg-[#23395d] hover:bg-[#4e878c] text-white font-bold px-6 py-3 rounded-xl shadow-xl border-4 border-[#4e878c] hover:border-[#b85c38] transition-transform transform hover:scale-105 text-center ml-2"
                        >
                            Se connecter
                        </a>
                    </Motion.div>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Motion.div
                        className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/20 shadow-2xl transform hover:rotate-1 hover:scale-[1.02] transition-all duration-300"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <img
                            src={workerImg}
                            alt="Ouvrier"
                            className="rounded-xl w-full h-64 object-cover mb-4 shadow-lg"
                        />
                        <h3 className="text-xl font-semibold text-[#b85c38]">Ouvrier Expert</h3>
                    </Motion.div>

                    <Motion.div
                        className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/20 shadow-2xl transform hover:-rotate-1 hover:scale-[1.02] transition-all duration-300"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <img
                            src={clientImg}
                            alt="Client élégant"
                            className="rounded-xl w-full h-64 object-cover mb-4 shadow-lg"
                        />
                        <h3 className="text-xl font-semibold text-[#4e878c]">Client Stylé</h3>
                    </Motion.div>
                </div>
            </Motion.div>
        </div>
    );
};

export default HomePage;
