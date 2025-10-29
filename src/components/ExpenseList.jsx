import { Download, LoaderCircle, Mail } from "lucide-react";
import TransactionInfoCard from "./TransactionInfoCard";
import moment from "moment";
import { useState } from "react";

const ExpenseList = ({transactions,onDelete, onDownload, onEmail}) => {
    const [emailLoading,setEmailLoading] = useState(false);
    const [downloadLoading,setDownloadLoading] = useState(false);
    
    const handleEmail = async () =>{
        setEmailLoading(true);
        try{
            await onEmail();
        } finally{
            setEmailLoading(false);
        }
    }

    const handleDownload = async () =>{
        setDownloadLoading(true);
        try{
            await onDownload();
        } finally{
            setDownloadLoading(false);
        }
    }

    return(
        <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
                <h5 className="text-lg">
                    Expense Sources
                </h5>
                <div className="flex items-center justify-end gap-2">
                    <button disabled={emailLoading} className="bg-purple-300 hover:bg-purple-700 hover:text-white rounded py-2 px-4 flex items-center gap-1" onClick={handleEmail}>
                        {emailLoading ?(
                            <>
                                <LoaderCircle className="w-4 h-4 animate-spin" />
                                Emailing...
                            </>
                        ):(
                            <>
                                <Mail size={15} className="text-base"/> Email
                            </>
                        )}
                    </button>
                    <button disabled={downloadLoading} className="bg-purple-300 hover:bg-purple-700 hover:text-white rounded py-2 px-4 flex items-center gap-1" onClick={handleDownload}>
                        
                        {downloadLoading ?(
                            <>
                                <LoaderCircle className="w-4 h-4 animate-spin" />
                                Downloading...
                            </>
                        ):(
                            <>
                                <Download size={15} className="text-base"/> Download
                            </>
                        )}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* display incomes */}
                {transactions?.map((expense)=>(
                    <TransactionInfoCard 
                        key={expense.id}
                        title={expense.name}
                        icon={expense.icon}
                        date={moment(expense.date).format('Do MMM YYYY')}
                        amount={expense.amount}
                        type="expense"
                        onDelete={()=> onDelete(expense.id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ExpenseList;