const Recent = () => {
    return (
        <div className='recent'>
            <h3 className='recent-head'>Recent Activity</h3>
            <div>
                <table className='recent-table'>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <th>1/1/21</th>
                        <th>Sent</th>
                        <th>N100.00</th>
                    </tr>
                    <tr>
                        <th>2/2/21</th>
                        <th>Recieved</th>
                        <th>N200.00</th>
                    </tr>
                    <tr>
                        <th>3/3/21</th>
                        <th>Sent</th>
                        <th>N300.00</th>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Recent;
