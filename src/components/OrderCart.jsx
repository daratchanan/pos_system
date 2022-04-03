import React from 'react'
import { Button, Col, Divider, Row, Typography } from 'antd'
import { SettingOutlined } from '@ant-design/icons';
import OrderItems from './OrderItems';

export default function OrderCart({ carts, setCarts }) {
   const total = carts.reduce((prev, cur) => prev + (cur.price * cur.qty), 0);
   const discount = total * 0.1;
   return (
      <div
         style={{
            background: "white",
            padding: "16px",
         }}
      >
         <Row justify="space-between">
            <Col>
               <Typography.Title level={4}>Current Order</Typography.Title>
            </Col>

            <Col>
               <Row gutter={[8, 0]}>
                  <Col>
                     <Button
                        style={{
                           borderRadius: "8px",
                           padding: "0 8px",
                           background: "pink",
                           color: "#1890ff"
                        }}
                     >Clear All</Button>
                  </Col>
                  <Col>
                     <Button
                        type="primary"
                        style={{
                           color: "white"
                        }}
                        icon={<SettingOutlined />}
                        shape="circle"
                     />
                  </Col>
               </Row>
            </Col>
         </Row>
         {carts.map((c) =>
            <OrderItems
               key={c.id}
               product={c}
               carts={carts}
               setCarts={setCarts}
            />
         )}
         <div
            style={{
               border: "1px solid black",
               padding: "15px",
               borderRadius: "30px"
            }}
         >

            <Row justify="space-between">
               <Col>
                  <Typography.Text>
                     Subtotal
                  </Typography.Text>
               </Col>
               <Col>
                  <Typography.Text>
                     {total.toFixed(2)} .-
                  </Typography.Text>
               </Col>
            </Row>
            <Row justify="space-between">
               <Col>
                  <Typography.Text>
                     Discounts 10%
                  </Typography.Text>
               </Col>
               <Col>
                  <Typography.Text>
                     {discount.toFixed(2)} .-
                  </Typography.Text>
               </Col>
            </Row>
            <div
               style={{
                  borderBottom: "1px solid pink",
                  marginTop: "10px"
               }}
            />
            <Row
               justify="space-between"
               style={{
                  marginTop: "10px"
               }}
            >
               <Col>
                  <Typography.Title level={5} >
                     Total
                  </Typography.Title>
               </Col>
               <Col>
                  <Typography.Title
                     level={5}
                     style={{
                        color: "#1890ff",
                        // marginTop: "10px"
                     }}
                  >
                     {(total-discount).toFixed(2)} .-
                  </Typography.Title>
               </Col>
            </Row>
         </div>

         <Button
            type="primary"
            shape="round"
            style={{
               width: "100%",
               marginTop: "20px",
               fontWeight: "bold",
               fontSize: "18px",
               height: "40px"
            }}
         // style={{
         //    backgroundColor: "#1890ff",
         //    marginTop: "20px",
         //    borderRadius: "20px",
         //    color: "white",
         //    fontSize: "20px",
         //    fontWeight: "bold",
         //    width: "100%",
         //    height: "40px"
         // }}
         >
            Place Order
         </Button>



      </div>
   )
}
