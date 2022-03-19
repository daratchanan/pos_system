import React from 'react'
import { Avatar, Button, Col, Row, Typography } from 'antd'
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';

export default function OrderItems() {
   return (
      <Row>
         <Col>
            <Avatar
               src="https://buzzebees.blob.core.windows.net/campaigns/1553386-large?time=20220224120109"
               size={64}
            />
         </Col>
         <Col>
            <Typography.Title level={5}>
               Hickory burger
            </Typography.Title>
            <Typography.Title level={5}>
               XXXXXX
            </Typography.Title>

         </Col>
         <Col flex={1} />
         <Col>
            <Row justify="end">
               <Col>
                  <Typography.Text>
                     20 .-
                  </Typography.Text>
               </Col>
            </Row>

            <Row>
               <Col>
                  <MinusCircleOutlined className="dynamic-delete-button" />
               </Col>
               <Col>
                  <Typography.Text>
                     02
                  </Typography.Text>
               </Col>
               <Col>
                  <PlusCircleOutlined className="dynamic-plus-button" />
               </Col>
            </Row>

         </Col>
      </Row>

   )
}
