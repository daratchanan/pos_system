import React from 'react'
import { Avatar, Button, Col, Divider, Row, Typography, Input } from 'antd'
import { MinusOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';


export default function OrderItems({ product, carts, setCarts }) {
   const handlePlus = () => {
      const updateProduct = [...carts];
      const targetProduct = updateProduct.find((c) => c.id === product.id);
      const index = updateProduct.indexOf(targetProduct);
      updateProduct[index].qty = updateProduct[index].qty + 1;
      setCarts(updateProduct)
   }

   const handleMinus = () => {
      const minusProduct = [...carts];
      const targetProduct = minusProduct.find((c) => c.id === product.id);
      const index = minusProduct.indexOf(targetProduct);
      minusProduct[index].qty = minusProduct[index].qty - 1;
      setCarts(minusProduct)
   }

   const handleDelete = () => {
      const tempCarts = [...carts];
      const newCarts = tempCarts.filter((c) => c.id !== product.id)
      setCarts(newCarts)
   }

   const handleOnchange = (e) => {
      const updateProduct = [...carts];
      const targetProduct = updateProduct.find((c) => c.id === product.id)
      const index = updateProduct.indexOf(targetProduct)
      updateProduct[index].qty = Number(e.target.value)
      setCarts(updateProduct)
   }

   // console.log("newCarts => ", newCarts);

   console.log("carts => ", carts);

   return (
      <Row>
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
                  rows: 2
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
               {`product Id: ${product.id}`}
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

            <Row gutter={[8, 0]}>
               <Col>
                  {product.qty === 1 ?
                     <Button
                        danger
                        shape="circle"
                        icon={<DeleteOutlined />}
                        onClick={handleDelete}
                     />
                     :
                     <Button
                        type="primary"
                        ghost
                        shape="circle"
                        icon={< MinusOutlined />}
                        onClick={handleMinus}
                     />
                  }
               </Col>
               <Col >
                  {/* <Typography.Title
                     level={4}
                  >
                     {product.qty}
                  </Typography.Title> */}
                  <Input
                     value={product.qty}
                     onChange={handleOnchange}
                  />
               </Col>
               <Col>
                  <Button
                     type="primary"
                     icon={<PlusOutlined />}
                     shape="circle"
                     onClick={handlePlus}
                  />
               </Col>
            </Row>

         </Col>
         <Divider />
      </Row>


   )
}
