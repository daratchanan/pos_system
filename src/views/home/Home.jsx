import React, { useEffect, useState } from 'react'
import { Col, Row, Button, Card } from 'antd'
import ProductCard from '../../components/ProductCard'
import { products } from '../../utils/mocking'
import OrderCart from '../../components/OrderCart';

export default function Home() {
   const [menu, setMenu] = useState([]);
   const [carts, setCarts] = useState([]);
   

   const handleBurger = () => {
      const burger = products.filter(product => product.categories === "burger")
      setMenu(burger)
   }

   const handlePizza = () => {
      const pizza = products.filter(product => product.categories === "pizza")
      setMenu(pizza)
   }

   const handleDrink = () => {
      const drink = products.filter(product => product.categories === "drink")
      setMenu(drink)
   }

   const handleIce = () => {
      const ice = products.filter(product => product.categories === "ice")
      setMenu(ice)
   }

   useEffect(() => {
      const targetProducts = products.filter(product => product.categories === "burger")
      setMenu(targetProducts)
   }, [])

   // console.log('carts=>', carts);
   return (

      <div
         style={{
            width: "80%",
            margin: "0 auto",
            marginTop: "30px",
            // background: "pink",
            // padding: "16px"
         }}
      >
         <Row >
            <Col
               xs={16}
               style={{
                  background: "pink",
                  padding: "16px"
               }}
            >
               <Row
                  justify="center"
                  style={{
                     marginBottom: "20px"
                  }}
               >
                  <Col xs={12}>
                     <Row justify="space-between">
                        <Col>
                           <Button
                              // type="ghost"
                              style={{
                                 width: "80px",
                                 height: "100px",
                                 borderRadius: "30px",
                              }}
                              onClick={handleBurger}
                           >
                              Burger
                           </Button>
                        </Col>
                        <Col>
                           <Button
                              style={{
                                 width: "80px",
                                 height: "100px",
                                 borderRadius: "30px",
                              }}
                              onClick={handlePizza}
                           >
                              Pizza
                           </Button>
                        </Col>
                        <Col>
                           <Button
                              style={{
                                 width: "80px",
                                 height: "100px",
                                 borderRadius: "30px",
                              }}
                              onClick={handleDrink}
                           >
                              Drink
                           </Button>
                        </Col>
                        <Col>
                           <Button
                              style={{
                                 width: "80px",
                                 height: "100px",
                                 borderRadius: "30px",
                              }}
                              onClick={handleIce}
                           >
                              Ice
                           </Button>
                        </Col>
                     </Row>
                  </Col>
               </Row>

               <Row gutter={[16, 16]}>
                  {menu.map((product) =>
                     <Col xs={24} sm={12} md={6} key={product.id}>
                        <ProductCard
                           product={product}
                           carts={carts}
                           setCarts={setCarts}
                        />
                     </Col>
                  )}
               </Row>
            </Col>
            <Col
               xs={8}>
               <OrderCart
                  carts={carts}
               />
            </Col>
         </Row>

      </div>
   )
}
