import { Link } from 'react-router-dom'
import { queryClient } from './index'
import { useEffect } from 'react'
import axios from 'axios'
import React from 'react'

const PreFetch = () => {
    useEffect(() => {
        queryClient.prefetchQuery('allCustomers', () => {
            return axios('http://localhost:1337/customers')
        })
    }, [])

  return (
    <div>
        <h1>PreFetch Data on this Page</h1>
        <Link to="/">
        <a>HomePage</a>
        </Link>
    </div>
  )
}

export default PreFetch