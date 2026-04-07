import { useDispatch, useSelector } from "react-redux"
import { Card, Button, Col} from "react-bootstrap"
import { remove } from "../features/cartSlice"
function Cart() {

    const dispatch= useDispatch()
    const products= useSelector(state=> state.cart)

    const removeToCart =(id)=>{
        // dispatch Remove Action here
       dispatch(remove(id))
    }
    const cards = products.map(product => (
        <Col md={12} key={product.id} className="mb-4">
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
                <Button variant="danger" onClick={()=> removeToCart(product.id)}>Remove Item</Button>
            </Card.Footer>
          </Card>
        </Col>
      ))
    
  return (
    <>
    <div className="row">
     {cards}
    </div>
    </>
      )
}

export default Cart