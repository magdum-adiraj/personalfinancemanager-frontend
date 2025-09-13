import { useEffect, useState } from "react";
import Input from "../components/Input.jsx";
import EmojiPickerPopup from "./EmojiPickerPopup.jsx";
import { LoaderCircle } from "lucide-react";

const AddCategoryForm = ({onAddCategory, initialCategoryData,isEditing}) => {
    const [category, setCategory] = useState({
        name: "",
        type: "income",
        icon: ""
    })

    const [loading,setLoading] = useState(false);

    const categoryTypeOptions = [
        {value: "income", label: "Income"},
        {value: "expense", label: "Expense"}
    ]

    const handleChange = (key,value) => {
        setCategory({...category,[key]:value})
    }

    const handleSubmit = async() => {
        setLoading(true);
        try{
            await onAddCategory(category);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(isEditing && initialCategoryData){
            setCategory(initialCategoryData);
        }else{
            setCategory({name:"", type:"income",icon:""});
        }
    },[isEditing,initialCategoryData])
    
    return(
        <div className="p-6">

            <EmojiPickerPopup 
                icon={category.icon}
                onSelect={(selectedIcon)=>handleChange("icon",selectedIcon)}
            /> 

            <Input 
                value={category.name}
                onChange={({target}) => handleChange("name",target.value)}
                label="Category Name"
                placeholder="e.g. Freelance, Salary, Bonus"
                type="text"
            />

            <Input 
                label="Category Type"
                value={category.type}
                onChange={({target})=> handleChange("type",target.value)}
                isSelect={true}
                options={categoryTypeOptions}
            />

            <div className="flex justify-end mt-6">
                <button 
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="add-btn add-btn-fill bg-purple-600 hover:bg-purple-700 text-white py-1 px-3 text-lg font-medium rounded transition-colors flex items-center justify-center">
                        {loading ? (
                            <>
                                <LoaderCircle className="w-4 h-4 animate-spin"/>
                                {isEditing ? "Updating..." : "Adding..."}
                            </>
                        ) : (
                            <>
                                {isEditing ? "Update Category" : "Add Category"}
                            </>
                        )}
                </button>
            </div>
        </div>
    )
}

export default AddCategoryForm;