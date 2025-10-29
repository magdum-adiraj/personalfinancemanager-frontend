import { LoaderCircle } from "lucide-react";
import { useState } from "react";

const DeleteAlert = ({content,onDelete}) => {
    const [loading,setLoading] = useState(false);

    const handleDelete = async () => {
        setLoading(true);
        try{
            await onDelete();
        } finally{
            setLoading(false);
        }
    }
    
    return(
        <div>
            <p className="text-sm">{content}</p>
            <div className="flex justify-end mt-6">
                <button
                    onClick={handleDelete}
                    disabled={loading}
                    type="button"
                    className="add-btn add-btn-fill bg-purple-600 hover:bg-purple-700 text-white py-1 px-3 text-lg font-medium rounded transition-colors flex items-center justify-center">
                        {loading ? (
                            <>
                                <LoaderCircle className="h-4 w-4 animate-spin"/>
                                Deleting...
                            </>
                        ):(
                            <>
                                Delete
                            </>
                        )}
                </button>
            </div>
        </div>
    )
}

export default DeleteAlert;