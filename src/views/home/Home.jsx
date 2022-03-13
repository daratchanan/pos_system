import React from 'react'
import { Col, Row, Button, Card } from 'antd'
import ProductCard from '../../components/ProductCard'
import { products } from '../../utils/mocking'

export default function Home() {
   console.log(products);

   return (

      <Card
         hoverable
         style={{
            width: "80%",
            margin: "0 auto",
            marginTop: "30px",
            background: "pink"
         }}
      >
         <Row>
            <Col xs={16}>
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
                           >
                              Ice
                           </Button>
                        </Col>
                     </Row>
                  </Col>
               </Row>

               <Row gutter={[16, 16]}>
                  {products.map((product) =>
                     <Col xs={24} sm={12} md={6} key={product.id}>
                        <ProductCard
                           product={product}
                        />
                     </Col>
                  )}
               </Row>
            </Col>
            <Col xs={8}>
               CARTT
            </Col>
         </Row>

      </Card>
   )
}
