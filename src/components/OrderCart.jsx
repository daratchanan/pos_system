import React from 'react'
import { Button, Col, Row, Typography } from 'antd'
import { SettingOutlined } from '@ant-design/icons';
import OrderItems from './OrderItems';

export default function OrderCart({ carts }) {

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
            />
         )}
         
      </div>
   )
}
