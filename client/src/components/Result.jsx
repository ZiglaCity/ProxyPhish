import ThreatStatsCircle from './ThreatStatsCircle';
import VerdictCard from './VerdictCard';

function Result({ results }) {
    const { formatedData } = results;
    const analysis = results?.result;
    const data = formatedData || [];

    return (
        <div className="cyber-card m-4 md:m-10">
            <h3 className="text-lg md:text-xl font-mono text-cyber-blue mb-4 text-center">
                Threat Analysis
            </h3>
            <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-4 md:gap-16 mb-6">
                <VerdictCard analysis={analysis} />
                <ThreatStatsCircle analysis={analysis} />
            </div>
            <h3 className="text-lg md:text-xl font-mono text-cyber-blue mb-3 text-center">
                Engine Results
            </h3>
            <div className="overflow-x-auto -mx-4 md:mx-0">
                <table className="w-full text-xs md:text-sm min-w-[500px]">
                    <thead>
                        <tr className="border-b border-cyber-muted">
                            <th className="text-left py-2 px-3 font-mono text-cyber-green">
                                Result
                            </th>
                            <th className="text-left py-2 px-3 font-mono text-cyber-green">
                                Category
                            </th>
                            <th className="text-left py-2 px-3 font-mono text-cyber-green">
                                Engine
                            </th>
                            <th className="text-left py-2 px-3 font-mono text-cyber-green">
                                Method
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-700 hover:bg-gray-900/50"
                            >
                                <td className="py-2 px-3 font-mono">
                                    <span
                                        className={
                                            item.result === 'clean'
                                                ? 'text-cyber-green'
                                                : item.result === 'suspicious'
                                                  ? 'text-cyber-warning'
                                                  : item.result === 'unrated'
                                                    ? 'text-cyber-muted'
                                                    : 'text-cyber-danger'
                                        }
                                    >
                                        {item.result}
                                    </span>
                                </td>
                                <td className="py-2 px-3 font-mono text-gray-300">
                                    {item.category}
                                </td>
                                <td className="py-2 px-3 text-gray-300">
                                    {item.engine_name}
                                </td>
                                <td className="py-2 px-3 font-mono text-xs text-gray-400">
                                    {item.method}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Result;
