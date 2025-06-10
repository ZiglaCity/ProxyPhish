import React from 'react';
import { CheckCircle, AlertTriangle, Clock } from 'lucide-react';

const VerdictCard = ({ verdict, reason }) => {
    const isSafe = verdict === 'safe';
    const scannedAt = new Date();
    
    return (
        <div className={`cyber-card ${isSafe ? 'border-cyber-green' : 'border-cyber-warning'} mb-6 mr-10 ml-5`}>
            <div className="flex flex-col md:flex-row items-center gap-1 mt-5">
                <div className={`w-24 h-24 rounded-full flex items-center justify-center ${isSafe ? 'text-cyber-green' : 'text-cyber-warning'}`}>
                    {isSafe ? 
                        <CheckCircle size={65} className="animate-pulse-glow" /> : 
                        <AlertTriangle size={65} className="animate-pulse-glow" />
                    }
                </div>
                
                <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold">
                    {isSafe ? 
                    <span className="text-cyber-green">Safe</span> : 
                    <span className="text-cyber-warning">Suspicious</span>
                    }
                </h2>
                
                {/* <p className="text-gray-300 mb-3">{reason}</p> */}
                
                <div className="flex items-center text-cyber-muted text-sm">
                    <Clock size={16} className="mr-2" />
                    <span>{scannedAt.toLocaleString()}</span>
                </div>
                </div>
            </div>
        </div>
    );
};

export default VerdictCard;
