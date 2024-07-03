
import { calculateInvestmentResults, formatter } from '../util/investment'


const Result = ({ values }) => {

    let modifiedData = calculateInvestmentResults(values);
    const initialInvestment = modifiedData[0].valueEndOfYear - modifiedData[0].interest - modifiedData[0].annualInvestment;

    return (
        <section id="result">
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total interest</th>
                        <th>Invested capital</th>
                    </tr>
                </thead>

                <tbody>
                    {modifiedData.map(row => {
                        const totalInterest = row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;
                        const totalAmountInvested = row.valueEndOfYear - totalInterest;

                        return (
                            <tr key={row.year}>
                                <td>{row.year}</td>
                                <td>{formatter.format(row.valueEndOfYear)}</td>
                                <td>{formatter.format(row.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section >
    )
}

export default Result;