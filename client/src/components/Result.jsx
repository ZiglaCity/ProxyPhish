function Result({ results }) {
    let data = results?.data?.data?.attributes?.results || [] ;
    const analysis = results?.result;
    console.log("The analysis: " , analysis);
    if (data) {
        data = Object.values(data) 
    }    
    console.log("The data in result", data);

    return (
        <div className="cyber-card overflow-auto m-10">
            <h3 className="text-xl font-mono text-cyber-blue mb-4">Engine Results</h3>
            <table className="w-full text-sm">
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