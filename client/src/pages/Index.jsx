import React, { useState } from 'react';
import UrlInput from '../components/UrlInput';
import LoadingSpinner from '../components/LoadingSpinner';
import VerdictCard from '../components/VerdictCard';
import ResultsTable from '../components/ResultsTable';
import ThreatStatsCircle from '../components/ThreatStatsCircle';
import AboutSection from '../components/AboutSection';
import { useToast } from '../hooks/use-toast';

// Mock data for demo purposes
const mockEngineResults = [
    {
        result: 'clean',
        category: 'harmless',
        engine_name: 'Google Safe Browsing',
        method: 'blacklist',
    },
    {
        result: 'clean',
        category: 'harmless',
        engine_name: 'PhishTank',
        method: 'blacklist',
    },
    {
        result: 'suspicious',
        category: 'phishing',
        engine_name: 'OpenPhish',
        method: 'heuristic',
    },
    { result: 'clean', category: 'harmless', engine_name: 'ESET', method: 'blacklist' },
    {
        result: 'clean',
        category: 'harmless',
        engine_name: 'Malwares.com',
        method: 'blacklist',
    },
    {
        result: 'suspicious',
        category: 'phishing',
        engine_name: 'Netcraft',
        method: 'heuristic',
    },
    {
        result: 'clean',
        category: 'harmless',
        engine_name: 'Kaspersky',
        method: 'blacklist',
    },
    {
        result: 'clean',
        category: 'harmless',
        engine_name: 'BitDefender',
        method: 'blacklist',
    },
    { result: 'clean', category: 'harmless', engine_name: 'Opera', method: 'blacklist' },
    {
        result: 'suspicious',
        category: 'phishing',
        engine_name: 'Artists Against 419',
        method: 'blacklist',
    },
    {
        result: 'clean',
        category: 'harmless',
        engine_name: 'CyberCrime',
        method: 'blacklist',
    },
    { result: 'clean', category: 'harmless', engine_name: 'Sophos', method: 'blacklist' },
];

// Mock function to simulate URL validation
const analyzeUrl = (url) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const suspiciousCount = mockEngineResults.filter(
                (r) => r.result === 'suspicious',
            ).length;
            const isSuspicious = suspiciousCount >= 3;

            resolve({
                verdict: isSuspicious ? 'suspicious' : 'safe',
                reason: isSuspicious
                    ? 'Multiple security engines flagged this URL as potentially dangerous.'
                    : 'This URL passed security checks from most engines.',
                results: mockEngineResults,
            });
        }, 2000); // Simulate network delay
    });
};

const Index = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [scanData, setScanData] = useState(null);
    const [url, setUrl] = useState('');
    const { toast } = useToast();

    const handleSubmit = async (submittedUrl) => {
        try {
            setUrl(submittedUrl);
            setIsLoading(true);
            setScanData(null);

            // In real app, this would be an API call
            const result = await analyzeUrl(submittedUrl);

            setScanData({
                ...result,
                scannedAt: new Date(),
            });

            toast({
                title: `Scan completed: ${result.verdict === 'safe' ? 'URL is safe' : 'URL is suspicious'}`,
                description: result.reason,
                variant: result.verdict === 'safe' ? 'default' : 'destructive',
            });
        } catch (error) {
            toast({
                title: 'Error scanning URL',
                description: 'There was a problem analyzing this URL. Please try again.',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="container mx-auto px-4 py-10">
                <header className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4">
                        <span className="text-cyber-green">Phishing</span>{' '}
                        <span className="text-white">Website</span>{' '}
                        <span className="text-cyber-blue">Detector</span>
                    </h1>
                    <p className="text-lg md:text-xl text-cyber-muted mb-8">
                        🔐 Check if a URL is Safe
                    </p>
                </header>

                <UrlInput onSubmit={handleSubmit} isLoading={isLoading} />

                <div className="mt-10">
                    {isLoading ? (
                        <LoadingSpinner />
                    ) : scanData ? (
                        <div>
                            <VerdictCard
                                verdict={scanData.verdict}
                                reason={scanData.reason}
                                scannedAt={scanData.scannedAt}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="md:col-span-2">
                                    <ResultsTable results={scanData.results} />
                                </div>
                                <div>
                                    <ThreatStatsCircle
                                        suspiciousCount={
                                            scanData.results.filter(
                                                (r) => r.result === 'suspicious',
                                            ).length
                                        }
                                        totalCount={scanData.results.length}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="cyber-card text-center py-20">
                            <p className="text-cyber-muted text-lg">
                                Enter a URL above and click "Check URL" to begin analysis
                            </p>
                            <p className="text-cyber-blue mt-4">
                                Our system will check the URL against multiple security
                                engines
                            </p>
                        </div>
                    )}
                </div>

                <AboutSection />
            </div>
        </div>
    );
};

export default Index;
