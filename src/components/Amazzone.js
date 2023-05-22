
import { useState, useEffect } from "react"

export default function Amazzone() {
    const [products, setProducts] = useState([])
    // const [search, setSearch] = useState("")
    // const [found, setFound] = useState([]);

    useEffect(() => {
        async function fetchproduct() {
            let res = await fetch('https://dummyjson.com/products')
            let json = await res.json()
            console.log(json);
            setProducts(json)
        }
        fetchproduct()
    }, [])

    return (
        <body>
            <header>
                <div className="header1">
                    <img src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578"
                        width="132px"
                        height="70px"
                        alt="logo" />
                    <input placeholder="Cerca su Amazzone"
                        // value={search}
                        // onChange={(e) => setSearch(e.target.value)}
                    />
                    <img src="https://thumbs.dreamstime.com/b/shopping-icon-shopping-cart-icon-dark-background-simple-vector-icon-shopping-icon-shopping-cart-icon-dark-background-116659167.jpg"
                        height="60px" />
                </div>
                <div className="header2">
                    <span>smartphones</span>
                    <span>laptops</span>
                    <span>fragrances</span>
                    <span>skincare</span>
                    <span>groceries</span>
                    <span>home-decoration</span>
                </div>
            </header>
            <main>
                <div className="box">
                    {products.products.map((el) =>
                    (
                        <div className="items" key={el.id}>
                            <img src={el.thumbnail} alt="thumbnail" width="100px"></img>
                            <h4>{el.title}</h4>
                            <h3>{el.price}€</h3>
                            <span className="sconto">Scontato del {el.discountPercentage}%!</span>
                            <span className="stelle">{el.rating} stelle su 5</span>
                            <p className="add">Aggiungi al Carrello</p> 
                        </div>
                    )
                    )}
                </div>
            </main>
        </body>
    )
} 