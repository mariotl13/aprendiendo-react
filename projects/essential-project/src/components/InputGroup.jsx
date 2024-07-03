

const InputGroup = ({ onChanges, values }) => {

    return (
        <section id="user-input" className="center">
            <div className="input-group">
                <label htmlFor="initial">Initial Investment</label>
                <input id="initial" type="number" onChange={(event) => onChanges('initialInvestment', event.target.value)} value={values.initialInvestment} />

                <label htmlFor="anual">Annual Investment</label>
                <input id="anual" type="number" onChange={(event) => onChanges('annualInvestment', event.target.value)} value={values.annualInvestment} />
            </div>
            <div className="input-group">
                <label htmlFor="expected">Expected Return</label>
                <input id="expected" type="number" onChange={(event) => onChanges('expectedReturn', event.target.value)} value={values.expectedReturn} />

                <label htmlFor="duration">Duration</label>
                <input id="duration" type="number" onChange={(event) => onChanges('duration', event.target.value)} value={values.duration} />
            </div>
        </section >
    )
}

export default InputGroup;