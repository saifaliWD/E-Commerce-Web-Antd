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
                label:"Mens Perfume ",
                key:"mensperfume"
            },
            {
                label:"Mens cloths",
                key:"menscloths"
            }]
        },
        {
            label:"Womens",
            key:"women",
            children:[{

                label:"Women Accessories",
                key:"womenaccessories"
               
            },
            {

                label:"Women Tools",
                key:"womentools"
               
            }]
        },
        {
            label:"Grocerys",
            key:"grocerys"
        }
    
    ]}
        />
      
    </div>
  )
}

export default Header
