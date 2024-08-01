import React, { useEffect, useState } from 'react'
import { AddToCart, getAllProducts, GetProductByCategory } from '../API'
import { Badge, Button, Card, Image, List, message, Rate, Typography } from 'antd'
import Category from '../pages/Category'
import { useParams } from 'react-router-dom'

function Products() {
    const param = useParams()
    const [item,setItem]=useState([])



    useEffect(()=>{
        (param?.categoryId ? GetProductByCategory(param.categoryId):getAllProducts()).then((res)=>{
            setItem(res.products);
        })
        
                  

        

    },[param])
  return (
    <div>
        <List
        grid={{column:3}} renderItem={(product,index)=>{
            return(
                <Badge.Ribbon text={product.discountPercentage}>
                <Card 
                className='itemcard'
                title={product.title}
                key={index}
                    cover={<Image className ="itemcardimage" src={product.thumbnail}/>}
                    actions={[<Rate allowHalf disabled value={product.rating}></Rate>,<AddToCartButton item={product}/>]}>
                        

                        <Card.Meta
                        title={<Typography.Paragraph>
                            Price:${product.price}{" "}
                            <Typography.Text delete type='danger'>{parseFloat(product.price+(product.price *product.discountPercentage)).toFixed(2)}</Typography.Text>
                        </Typography.Paragraph>}
                        description={<Typography.Paragraph ellipsis={{rows:2, expandable:true, symbol:"more"}}>{product.description}</Typography.Paragraph>}>
                        </Card.Meta>
                        
                   
                </Card>
                </Badge.Ribbon>
            )
        }} dataSource={item}></List>

      
    </div>
  )
}

function AddToCartButton(item) {

    const AddProductToCart=()=>{
        AddToCart(item.id).then((res)=>{
            message.success(`${item.title} has been added to cart`)

        })
    }
          return <Button type='link' onClick={()=>{
            AddProductToCart()
          }}>Add to Cart</Button>
}

export default Products
