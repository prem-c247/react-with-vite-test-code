

const Table = (props) => {
    const { tableOf } = props
    let lastValue = 10;
    let arr = [];
    for (let i = 1; i <= lastValue; i++) {
        arr.push(
            i * tableOf
        );
    }
    return (
        <>
            <h2>Table of {tableOf}</h2>
            {arr.map((value, i) => {
                return (
                    <div key={i}>
                        <p>{value}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Table