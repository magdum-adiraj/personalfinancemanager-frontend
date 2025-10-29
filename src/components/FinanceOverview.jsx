import { addThousandsSeparator } from "../util/util";
import CustomPieChart from "./CustomPieChart";

const FinanceOverview = ({totalBalance,totalIncome,totalExpense}) => {
    const COLORS = ["#59168B","#a0090e","016630"];
    
    const balanceData = [
        {name: "Total Balance", amount: totalBalance},
        {name: "Total Expenses", amount: totalExpense},
        {name: "Total Income", amount: totalIncome},
    ]
    return(
        <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
                <h4 className="text-lg">Financial Overview</h4>
            </div>

            <CustomPieChart
                data={balanceData}
                label="Total Balance"
                totalAmount={`${addThousandsSeparator(totalBalance)}`}
                colors={COLORS}
                showTextAnchor
            />
        </div>
    )
}

export default FinanceOverview;