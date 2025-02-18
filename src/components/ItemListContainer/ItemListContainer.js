import { useState, useEffect } from "react";
//import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

/* firebase */
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products");

        getDocs(collectionRef)
            .then((response) => {
                const productsAdapted = response.docs.map((doc) => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div className="container">
            <h2 className="title">{greeting}</h2>
            <h3 className="has-text-centered is-size-3 mb-5">Listado de productos</h3>
            {loading ? (
                <h1 className="text is-size-4">Cargando detalles ...</h1>
                
            ) : (
                <div className="columns is-multiline">
                    <ItemList products={products} />
                </div>
            )}
        </div>
    )
}

export default ItemListContainer;