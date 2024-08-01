import { HomeFilled } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate= useNavigate();

    const onMenuclick=(item)=>{
        navigate(`/${item.key}`);


    }
  return (
    <div className='Header'>
        <Menu
        theme='dark'
        onClick={onMenuclick} 
         mode='horizontal'
        items={[
            {
            label:<HomeFilled/>,
            key:""
        },
        {
            label:"Mens",
            key:"men",
            children:[{
                label:"Mens's Shirts ",
                key:"mens-shirts"
            },
            {
                label:"Mens Shoes",
                key:"mens-shoes"
            }]
        },
        {
            label:"Womens",
            key:"women",
            children:[{

                label:"Womens cloths",
                key:"womens-dresses"
               
            },
            {

                label:"Womens Jewellery",
                key:"womens-jewellery"
               
            }]
        },
        {
            label:"Smartphones",
            key:"smartphones"
        }
    
    ]}
        />
      
    </div>
  )
}

export default Header
