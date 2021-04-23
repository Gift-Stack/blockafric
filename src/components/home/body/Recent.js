const Recent = () => {
    return (
        <div>
            <h3 className='recent-head'>Recent Activity</h3>
            <table className='recent-table'>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td>1/1/21</td>
                    <td>Sent</td>
                    <td>N100.00</td>
                </tr>
                <tr>
                    <td>2/2/21</td>
                    <td>Recieved</td>
                    <td>N200.00</td>
                </tr>
                <tr>
                    <td>3/3/21</td>
                    <td>Sent</td>
                    <td>N300.00</td>
                </tr>
            </table>
        </div>
    );
};

export default Recent;
