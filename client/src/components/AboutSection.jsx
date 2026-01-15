import { Shield, AlertTriangle, Lock } from 'lucide-react';

const AboutSection = () => {
    return (
        <div className="cyber-card m-4 md:m-10">
            <h2 className="text-xl md:text-2xl font-mono text-cyber-blue mb-6 text-center">
                About This Tool
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center mb-3">
                        <Shield className="text-cyber-green" size={28} />
                    </div>
                    <h3 className="font-mono text-cyber-green text-base md:text-lg mb-2">
                        Stay Protected
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300">
                        Our tool checks URLs against multiple security engines to detect
                        phishing attempts and malicious websites.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center mb-3">
                        <AlertTriangle className="text-cyber-warning" size={28} />
                    </div>
                    <h3 className="font-mono text-cyber-warning text-base md:text-lg mb-2">
                        Be Aware
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300">
                        Phishing attacks are becoming more sophisticated. Verify URLs
                        before entering sensitive information.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center mb-3">
                        <Lock className="text-cyber-blue" size={28} />
                    </div>
                    <h3 className="font-mono text-cyber-blue text-base md:text-lg mb-2">
                        How It Works
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300">
                        We analyze URLs using multiple detection methods including
                        blacklists, heuristic analysis, and machine learning algorithms.
                    </p>
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-700 text-center">
                <p className="text-xs md:text-sm text-gray-400">
                    Developed by{' '}
                    <a
                        href="https://github.com/ZiglaCity"
                        className="text-cyber-blue hover:text-cyber-green transition-colors"
                    >
                        ZiglaCity
                    </a>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                    For educational purposes only.
                </p>
            </div>
        </div>
    );
};

export default AboutSection;
