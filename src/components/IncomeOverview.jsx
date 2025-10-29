import { useEffect, useState } from "react";
import prepareIncomeLineChartData from "../util/util";
import CustomLineChart from "./CustomLineChart";
import { Plus } from "lucide-react";

const IncomeOverview = ({transactions, onAddIncome}) => {
    const [chartData,setChartData] = useState([]);
    useEffect(()=>{
        const result = prepareIncomeLineChartData(transactions);
        console.log(result);
        setChartData(result);
        return ()=>{};
    },[transactions]);
    
    return(
        <div className="bg-white rounded-lg shadow p-4 mt-4">
            <div className="flex items-center justify-between">
                <div>
                    <h5 className="text-lg">
                        Income Overview
                    </h5>
                    <p className="text-xs text-gray-400 mt-0 5">
                        Track your earnings
                    </p>
                </div>
                <button 
                    className="bg-purple-300 hover:bg-purple-700 hover:text-white rounded py-2 px-4 flex items-center gap-1" 
                    onClick={onAddIncome}>
                        <Plus size={15} className="text-lg" />
                        Add Income
                </button>

            </div>
            <div className="mt-10">
                {/* create line chart */}
                <CustomLineChart data={chartData} />
            </div>
        </div>
    )
}

export default IncomeOverview;