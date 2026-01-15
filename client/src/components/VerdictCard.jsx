import { CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import { finalizeStatsCount } from '../lib/utils';

const VerdictCard = ({ analysis }) => {
    const { suspiciousCount, totalCount } = finalizeStatsCount(analysis);
    const percentage = totalCount > 0 ? (suspiciousCount / totalCount) * 100 : 0;
    const isSafe = percentage < 2;
    const scannedAt = new Date();

    return (
        <div
            className={`cyber-card ${isSafe ? 'border-cyber-green' : 'border-cyber-warning'} w-full md:w-auto`}
        >
            <div className="flex items-center gap-4">
                <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center flex-shrink-0 ${isSafe ? 'text-cyber-green' : 'text-cyber-warning'}`}
                >
                    {isSafe ? (
                        <CheckCircle size={48} className="animate-pulse-glow" />
                    ) : (
                        <AlertTriangle size={48} className="animate-pulse-glow" />
                    )}
                </div>
                <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold">
                        {isSafe ? (
                            <span className="text-cyber-green">Safe</span>
                        ) : (
                            <span className="text-cyber-warning">Suspicious</span>
                        )}
                    </h2>
                    <div className="flex items-center text-cyber-muted text-xs md:text-sm mt-1">
                        <Clock size={14} className="mr-1" />
                        <span>{scannedAt.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerdictCard;
