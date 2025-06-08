function Result({ results }) {
    let data = results?.data?.data?.attributes?.results || [] ;
    if (data) {
        data = Object.values(data) 
    }    
    console.log("The data in result", data);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Result</th>
                        <th>Category</th>
                        <th>Engine</th>
                        <th>Method</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((result, index) => (
                        <tr key={index}>
                            <td>{result.result}</td>
                            <td>{result.category}</td> 
                            <td>{result.engine_name}</td>
                            <td>{result.method}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Result;
