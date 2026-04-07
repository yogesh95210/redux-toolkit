import { useState, useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { Card, Button, Col, Alert} from "react-bootstrap"
import { add } from "../features/cartSlice"
import { getProducts } from "../features/productSlice"
function Product() {
  const dispatch= useDispatch()
  const {data: products, status}= useSelector(state=> state.products)
//const [products,getProducts]= useState([])
  useEffect(()=>{
    // api calling
    // fetch('https://fakestoreapi.com/products')
    // .then(data=> data.json())
    // .then(res=> getProducts(res))

    // Dispatch the fetchProduts

    dispatch(getProducts())

  },[])

  if(status==="loading"){
    return <p>Loading.....</p>
  }

  if(status==="error"){
    return <Alert key='danger' variant= 'danger'>Somthing went wrong!!! Try again later</Alert>
  }
  const addToCart= (product)=>{
// dispatch the add action here
    dispatch(add(product))
  }

const cards = products.map(product => (
    <Col md={3} key={product.id} className="mb-4">
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "200px", objectFit: "contain", padding: "10px" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            INR : {product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer  className="text-center">
            <Button variant="primary" onClick={()=> addToCart(product)}>Add to Cart</Button>
        </Card.Footer>
      </Card>
    </Col>
  ))

  return (
   <>
    <h1 style={{ textAlign: "center" }}>Product Dashboard</h1>
    <div className="row">
      {cards}
    </div>
  </>
  )
}

export default Product