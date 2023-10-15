import React, { useContext } from 'react'
import { Layout } from '../../component/layout/Layout'
import MyContext from '../../context/data/myContext'

const Order = () => {
    const context = useContext(MyContext)

    const { fullname , rollno} = context

  return (
    <Layout>
        <h1>Order</h1>
    </Layout>
  )
}

export default Order