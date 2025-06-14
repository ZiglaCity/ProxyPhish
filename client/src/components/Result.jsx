import ThreatStatsCircle from "./ThreatStatsCircle";
import VerdictCard from "./VerdictCard";

function Result({ results}) {
    let data = results?.data?.data?.attributes?.results || [] ;
    const { result, formatedData } = results;
    const analysis = results?.result;
    console.log("The analysis: " , analysis);
   
    data = Object.values(data) 
    console.log("This is the first data in result;", data)
    data = formatedData;
    console.log("The len data in result", data.length);

    return (
        <div className="cyber-card overflow-auto m-5 md:m-10">
            <h3 className="text-xl font-mono text-cyber-blue mb-1 md:text-center">Threat Analysis</h3>
            <div className="flex md:justify-center md:items-center md:gap-40">
                <VerdictCard reason={""} analysis={analysis} />
                <ThreatStatsCircle analysis={analysis}/>
            </div>
            <h3 className="text-xl font-mono text-cyber-blue mb-2 md:text-center">Engine Results</h3>
            <table className="w-full text-sm ">
                <thead>
                    <tr className="border-b border-cyber-muted">
                        <th className="text-left py-2 px-3 font-mono text-cyber-green">Result</th>
                        <th className="text-left py-2 px-3 font-mono text-cyber-green">Category</th>
                        <th className="text-left py-2 px-3 font-mono text-cyber-green">Engine</th>
                        <th className="text-left py-2 px-3 font-mono text-cyber-green">Method</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((result, index) => (
                        <tr key={index} className="border-b border-cyber-muted/50 hover:bg-cyber-muted/20">
                            <td className="py-2 px-3 font-mono">
                                <span className={
                                result.result === 'clean' ? 'text-cyber-green' : 
                                result.result === 'suspicious' ? 'text-cyber-warning' :
                                result.result === 'unrated' ? 'text-cyber-muted' : "text-cyber-danger"
                                }>
                                {result.result}
                                </span>
                            </td>
                            <td className="py-2 px-3 font-mono">{result.category}</td>
                            <td className="py-2 px-3">{result.engine_name}</td>
                            <td className="py-2 px-3 font-mono text-xs">{result.method}</td>
                        </tr>
                    ))}
                    </tbody>
            </table>
        </div>
    );
}

export default Result;