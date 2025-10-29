import { useEffect, useState } from "react";
import EmojiPickerPopup from "./EmojiPickerPopup.jsx";
import Input from "./Input.jsx";
import { LoaderCircle } from "lucide-react";

const AddIncomeForm = ({categories,onAddIncome}) => {
    const [income,setIncome] = useState({
        name: '',
        amount: '',
        date: '',
        icon: '',
        categoryId: ''
    })

    const [loading,setLoading] = useState(false);

    const categoryOptions = categories.map((category)=>({
        value: category.id,
        label: category.name
    }))
    
    const handleChange = (key,value) => {
        setIncome({...income,[key]:value});
    }

    const handleAddIncome = async ()=>{
            setLoading(true);
            try{
                await onAddIncome(income);
            }finally{
                setLoading(false);
            }
    }

    useEffect(()=>{
        if(categories.length>0 && !income.categoryId) {
            setIncome((prev)=>({...prev,categoryId: categories[0].id}))
        }
    },[categories,income.categoryId]);

    return(
        <div>
            <EmojiPickerPopup 
                icon={income.icon}
                onSelect={(selectedIcon)=>handleChange('icon',selectedIcon)}
            />

            <Input 
                value={income.name}
                onChange={({target})=>handleChange('name',target.value)}
                label="Income Source"
                placeholder="e.g. Salary, Bonus"
                type="text"
            />

            <Input 
                label="Category"
                value={income.categoryId}
                onChange={({target})=>handleChange('categoryId',target.value)}
                isSelect={true}
                options={categoryOptions}
            />

            <Input 
                label="Amount"
                value={income.amount}
                onChange={({target})=>handleChange('amount',target.value)}
                placeholder="e.g. 500.00"
                type="number"
            />

            <Input 
                label="Date"
                value={income.date}
                onChange={({target})=>handleChange('date',target.value)}
                placeholder=""
                type="date"
            />

            <div className="flex justify-end mt-6">
                <button 
                    disabled={loading}
                    onClick={handleAddIncome}
                    className="add-btn add-btn-fill bg-purple-600 hover:bg-purple-700 text-white py-1 px-3 text-lg font-medium rounded transition-colors flex items-center justify-center">
                        {loading ? (
                            <>
                                <LoaderCircle className="w-4 h-4 animate-spin"/>
                                Adding ...
                            </>
                        ) : (
                            <>
                                Add Income
                            </>
                        )}
                </button>
            </div>
        </div>
    )
}

export default AddIncomeForm;