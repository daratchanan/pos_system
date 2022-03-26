import React from 'react'
import { Avatar, Button, Col, Divider, Row, Typography } from 'antd'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

export default function OrderItems({product}) {

   return (
      <Row
         // style={{
         //    background: "lightblue"
         // }}
      >
         <Col
            style={{
               paddingRight: "8px"
            }}
         >
            <Avatar
               src={product.img}
               size={64}
            />
         </Col>
         <Col xs={8}>
            <Typography.Title
               level={5}
               style={{
                  margin: "0px"
               }}
               ellipsis={{
                  rows:2
               }}
            >
               {product.name}
            </Typography.Title>
            <Typography.Title
               level={5}
               style={{
                  marginTop: "0px"
               }}
            >
               XXXXXX
            </Typography.Title>

         </Col>
         <Col flex={1} />
         <Col>
            <Row justify="end">
               <Col>
                  <Typography.Title
                     level={4}
                     style={{
                        color: "#1890ff"
                     }}
                  >
                     {product.price.toFixed(2)} .-
                  </Typography.Title>
               </Col>
            </Row>

            <Row gutter={[8,0]}>
               <Col>
                  <Button
                     type="primary"
                     ghost
                     icon={<MinusOutlined />}
                     shape="circle"
                  />
               </Col>
               <Col>
                  <Typography.Title
                     level={4}
                  >
                     {product.qty}
                  </Typography.Title>
               </Col>
               <Col>
                  <Button
                     type="primary"
                     icon={<PlusOutlined />}
                     shape="circle"
                  />
               </Col>
            </Row>

         </Col>
         <Divider />
      </Row>


   )
}
