// import { useState, useEffect } from "react";
// // import { getProductsById } from "../../asyncMock";
// import ItemDetail from "../ItemDetail/ItemDetail";
// import { useParams } from "react-router-dom";

// import { getDoc, doc } from "firebase/firestore";
// import { db } from "../../services/firebase/firebaseConfig";


// const ItemDetailContainer = () => {
//     const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const {itemId} = useParams()

//     useEffect( ()=>{
//         setLoading(true)
//         const docRef = doc(db, 'products', itemId)

//         getDoc(docRef)
//             .then(response =>{
//                 const data = response.data()
//                 const productsAdapted = {id: response.id, ...data}
//                 setProduct(productsAdapted)
//             })
//             .catch(error =>{
//                 console.error(error)
//             })
//             .finally(()=>{
//                 setLoading(false)
//             })
//         }, [itemId])

//     return (
//         <div className="container">
//             {loading ? (
//                 <h1 className="text is-size-4">Cargando detalles ...</h1>
//             ) : (
//                 <ItemDetail {...product} />
//             )}
//         </div>
//     )



// }

// export default ItemDetailContainer;


// import {getProductById} from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc, collection } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, "products", itemId)
        getDoc(docRef)
            .then((response) => {
                const data = response.data()
                const productsAdapted = { id: response.id, ...data }
                setProduct(productsAdapted)
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemId])


    console.log(itemId)
    return (
        <div>
            {loading ? (
                <h1 className="text is-size-4">Cargando detalles ...</h1>
            ) : (
                <ItemDetail {...product} />
            )} 
        </div>
    )
}

export default ItemDetailContainer;