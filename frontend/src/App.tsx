import AddProductForm from "./AddProductForm.tsx";
import GetAllProducts from "./GetAllProducts.tsx";
import DeleteById from "./DeleteById.tsx";
import EditProductForm from "./EditProductForm.tsx";
import GetProductByCategory from "./GetProductByCategory.tsx";
import "./App.css"
import "./GetAllProducts.css"



function App() {

    return (
        <div className={"wrapper"}>
        <div className={"GetAllProducts"}>
        <GetAllProducts/>
        </div>
        <div className={"Category"}>
        <GetProductByCategory/>
        </div>
        <div className={"AddProduct"}>
        <AddProductForm/>
        </div>
        <div className={"EditProduct"}>
        <EditProductForm/>
        </div>
        <div className={"DeleteProduct"}>
        <DeleteById/>
        </div>
    </div>
)
}

export default App
