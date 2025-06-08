import { Shield, AlertTriangle, Lock } from 'lucide-react';

const AboutSection = () => {
    return (
        <div className="cyber-card mt-20 border border-cyber-blue m-10 border-t-2 p-4">
            <h2 className="text-2xl font-mono text-cyber-blue mb-6 text-center p-4">About This Tool</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-cyber-terminal flex items-center justify-center mb-4">
                        <Shield className="text-cyber-green" size={32} />
                    </div>
                    <h3 className="font-mono text-cyber-green text-lg mb-2">
                        Stay Protected
                    </h3>
                    <p className="text-sm text-gray-300">
                        Our tool checks URLs against multiple security engines to detect
                        phishing attempts and malicious websites.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-cyber-terminal flex items-center justify-center mb-4">
                        <AlertTriangle className="text-cyber-warning" size={32} />
                    </div>
                    <h3 className="font-mono text-cyber-warning text-lg mb-2">
                        Be Aware
                    </h3>
                    <p className="text-sm text-gray-300">
                        Phishing attacks are becoming more sophisticated. Verify URLs
                        before entering sensitive information.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-cyber-terminal flex items-center justify-center mb-4">
                        <Lock className="text-cyber-blue" size={32} />
                    </div>
                    <h3 className="font-mono text-cyber-blue text-lg mb-2">
                        How It Works
                    </h3>
                    <p className="text-sm text-gray-300">
                        We analyze URLs using multiple detection methods including
                        blacklists, heuristic analysis, machine learning and deep learning
                        algorithms written by myself.
                    </p>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-cyber-muted text-center">
                <p className="text-sm text-gray-400">
                    Developed by{' '}
                    <a
                        href="https://github.com/ZiglaCity"
                        className="text-cyber-blue underline hover:text-cyber-green transition-colors"
                    >
                        ZiglaCity
                    </a>
                </p>
                <p className="text-xs text-gray-500 mt-2">
                    This tool is for educational purposes only. Always practice safe
                    browsing habits.
                </p>
            </div>
        </div>
    );
};

export default AboutSection;
