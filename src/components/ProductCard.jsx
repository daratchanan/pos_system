import React from 'react';
import { Avatar, Col, Row, Rate, Typography, Card } from 'antd';

export default function ProductCard({ product, carts, setCarts }) {

   const onSelectProducts = () => {
      const oldCarts = [...carts];
      const targetProduct = oldCarts.find((p) => p.id === product.id)

      if (!targetProduct) {
         oldCarts.push({ ...product, qty: 1 });
         setCarts(oldCarts);
      } else {
         const index = oldCarts.indexOf(targetProduct);
         oldCarts[index].qty = oldCarts[index].qty +1
         // const newItems = {...targetProduct, qty: targetProduct.qty +1}
         // oldCarts.splice(index, 1, newItems )
         setCarts(oldCarts);
      }
      // console.log(targetProduct);
   };


   // console.log(carts);
   return (
      <Card
         hoverable
         style={{
            width: "100%",
            height: "250px",
            background: "white",
            padding: "10px",
            borderRadius: "20px",
            // border: "1px solid black",
         }}
         onClick={onSelectProducts}
      >
         <Row justify="space-between">
            <Col>
               <Avatar
                  src={product.img}
                  size={40}
                  style={{
                     marginBottom: "10px",
                  }}
               />
            </Col>
            <Col>
               <Rate
                  value={product.rate}
                  style={{
                     marginBottom: "10px",
                     // width: "10px"
                  }}
               />
               <Typography.Title level={3} style={{ color: "tomato" }}>
                  {product.price.toFixed(2)} . -
               </Typography.Title>
            </Col>
         </Row>
         <Row>
            <Col>
               <Typography.Title
                  level={4}
                  ellipsis={{
                     rows: 2
                  }}
               >
                  {product.name}
               </Typography.Title>
            </Col>
         </Row>

      </Card>
   )
}
