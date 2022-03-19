import React from 'react';
import { Avatar, Col, Row, Rate, Typography, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function ProductCard({ product }) {

   return (
      <Card
         hoverable
         style={{
            width: "100%",
            background: "white",
            padding: "10px",
            borderRadius: "20px",
            // border: "1px solid black",
         }}
      >
         <Row justify="space-between">
            <Col>
               <Avatar
                  src={product.img}
                  size={64}
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
                  ellipsis
               >
                  {product.name}
               </Typography.Title>
            </Col>
         </Row>

      </Card>
   )
}
