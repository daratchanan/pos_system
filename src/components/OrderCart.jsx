import React from 'react'
import { Button, Col, Row, Typography } from 'antd'
import { SettingOutlined } from '@ant-design/icons';
import OrderItems from './OrderItems';

export default function OrderCart() {
   return (
      <div>
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
                           color: "tomato",
                           // marginRight: "8px"
                        }}
                     >Clear All</Button>
                  </Col>
                  <Col>
                     <Button
                        style={{
                           background: "tomato",
                           color: "white"
                        }}
                        icon={<SettingOutlined />}
                        shape="circle"
                     />
                  </Col>
               </Row>
            </Col>
         </Row>

         <OrderItems />

      </div>
   )
}
