import { useState } from 'react';

const RegistrationForms = () => {
    const [activeForm, setActiveForm] = useState('client');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        corpsDeMetier: '',
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'Prénom requis';
        if (!formData.lastName.trim()) newErrors.lastName = 'Nom requis';
        if (!formData.email.trim()) {
            newErrors.email = 'Email requis';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email invalide';
        }
        if (!formData.password) {
            newErrors.password = 'Mot de passe requis';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Min 6 caractères';
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Confirmation requise';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
        }
        if (activeForm === 'ouvrier' && !formData.corpsDeMetier.trim()) {
            newErrors.corpsDeMetier = 'Corps de métier requis';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(`${activeForm} inscrit:`, formData);
            alert(`Inscription ${activeForm} réussie (simulation)`);
        }
    };

    const isFormValid = () => {
        const requiredFields = activeForm === 'client'
            ? ['firstName', 'lastName', 'email', 'password', 'confirmPassword']
            : ['firstName', 'lastName', 'email', 'password', 'confirmPassword', 'corpsDeMetier'];

        return requiredFields.every(field => formData[field].trim()) &&
            formData.password === formData.confirmPassword &&
            formData.password.length >= 6;
    };

    const CustomField = ({ name, type, label }) => (
        <div className="mb-4">
            <label htmlFor={name} className="block mb-1 text-sm font-semibold text-[#14FFEC]">
                {label}
            </label>
            <input
                id={name}
                type={type}
                value={formData[name]}
                onChange={(e) => handleInputChange(name, e.target.value)}
                className={`w-full px-4 py-3 rounded-2xl bg-white/5 text-white border-2 transition-all duration-300 focus:outline-none focus:bg-white/10 focus:border-[#14FFEC] ${errors[name]
                    ? 'border-red-400 bg-red-400/10'
                    : 'border-white/20 hover:border-white/40'
                    }`}
            />
            {errors[name] && (
                <div className="text-red-400 text-sm mt-1 ml-1 animate-pulse">
                    {errors[name]}
                </div>
            )}
        </div>
    );

    const resetForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            corpsDeMetier: '',
        });
        setErrors({});
    };

    const handleTabChange = (tab) => {
        setActiveForm(tab);
        resetForm();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] px-4 py-8">
            <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-[#14FFEC]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-[#14FFEC]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

                <div className="relative bg-white/10 backdrop-blur-2xl p-8 rounded-3xl w-full max-w-2xl shadow-2xl border border-white/20">
                    <div className="flex mb-8 bg-white/5 rounded-2xl p-1 backdrop-blur-sm">
                        <button
                            onClick={() => handleTabChange('client')}
                            className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-500 ${activeForm === 'client'
                                ? 'bg-[#14FFEC] text-black shadow-lg shadow-[#14FFEC]/30 transform scale-105'
                                : 'text-white/70 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            Client
                        </button>
                        <button
                            onClick={() => handleTabChange('ouvrier')}
                            className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-500 ${activeForm === 'ouvrier'
                                ? 'bg-[#14FFEC] text-black shadow-lg shadow-[#14FFEC]/30 transform scale-105'
                                : 'text-white/70 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            Ouvrier
                        </button>
                    </div>

                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2">
                            Créer un compte
                        </h2>
                        <p className="text-gray-400 text-lg">
                            {activeForm === 'client' ? 'Espace Client' : 'Espace Ouvrier'}
                        </p>
                        <div className="w-20 h-1 bg-gradient-to-r from-[#14FFEC] to-transparent rounded-full mx-auto mt-4"></div>
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <CustomField
                                name="firstName"
                                type="text"
                                label="Prénom"
                            />
                            <CustomField
                                name="lastName"
                                type="text"
                                label="Nom"
                            />
                        </div>
                        <CustomField
                            name="email"
                            type="email"
                            label="Email"
                        />

                        {activeForm === 'ouvrier' && (
                            <CustomField
                                name="corpsDeMetier"
                                type="text"
                                label="Corps de métier"
                            />
                        )}

                        <div className="grid grid-cols-2 gap-4">
                            <CustomField
                                name="password"
                                type="password"
                                label="Mot de passe"
                            />
                            <CustomField
                                name="confirmPassword"
                                type="password"
                                label="Confirmer le mot de passe"
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={!isFormValid()}
                            className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform ${isFormValid()
                                ? 'bg-gradient-to-r from-[#14FFEC] to-[#0fdac5] text-black hover:scale-105 hover:shadow-lg hover:shadow-[#14FFEC]/40 active:scale-95'
                                : 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            {isFormValid() ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    Créer mon compte
                                </span>
                            ) : (
                                'Remplir tous les champs'
                            )}
                        </button>
                    </div>

                    <div className="text-center mt-8 text-gray-400 text-sm">
                        <p>Déjà un compte ? <span className="text-[#14FFEC] hover:underline cursor-pointer">Se connecter</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForms;