import { finalizeStatsCount } from '../lib/utils';

const ThreatStatsCircle = ({ analysis }) => {
    const { suspiciousCount, totalCount } = finalizeStatsCount(analysis);
    const percentage = totalCount > 0 ? (suspiciousCount / totalCount) * 100 : 0;
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    const getColor = () => {
        if (percentage < 2) return 'text-cyber-green';
        if (percentage < 10) return 'text-cyber-blue';
        if (percentage < 50) return 'text-cyber-warning';
        return 'text-cyber-danger';
    };

    const getStrokeColor = () => {
        if (percentage < 2) return 'stroke-cyber-green';
        if (percentage < 10) return 'stroke-cyber-blue';
        if (percentage < 50) return 'stroke-cyber-warning';
        return 'stroke-cyber-danger';
    };

    return (
        <div className="cyber-card flex flex-col items-center w-full md:w-auto">
            <div className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                    <circle
                        cx="100"
                        cy="100"
                        r={radius}
                        fill="transparent"
                        stroke="#384252"
                        strokeWidth="12"
                    />
                    <circle
                        cx="100"
                        cy="100"
                        r={radius}
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="12"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className={`transform -rotate-90 origin-center transition-all duration-1000 ${getStrokeColor()}`}
                    />
                </svg>
                <div className="absolute flex flex-col items-center text-center">
                    <div className={`text-2xl md:text-3xl font-bold ${getColor()}`}>
                        {suspiciousCount}/{totalCount}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 mt-1 px-2">
                        engines flagged
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreatStatsCircle;
