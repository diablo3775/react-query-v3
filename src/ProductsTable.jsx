import { createSearchParams, Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query'
import React from 'react'
import axios from 'axios';

const ProductsTable = () => {
    let navigate = useNavigate();
    const query = useQuery('allCustomers', () => {
        return axios('http://localhost:1337/customers')
    },{
        refetchOnWindowFocus: false,
    }
    );

    if(query.isLoading) {
        return <h1>Loading Products...</h1>
    }

    if(query.isError) {
        return <h1>Unable To Fetch Products</h1>
    }
    
  return (
    <div>
        <div>
            <Link to={'/add'}>
            <button>Add New Title</button>
            </Link>
        </div>
        <div>
            <Link to={'/prefetch'}>
            Prefetch Page
            </Link>
        </div>
        <table>
            <tbody>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th><button>Edit</button></th>
            </tr>
            {
                query.data.data.map((customer, i) => {
                    const {userId, title} = customer;
                    return <tr key={i}>
                        <td>{userId}</td>
                        <td>{title}</td>
                        <td>
                            <button onClick={() => navigate({
                                pathname: '/edit',
                                query: {
                                    title,
                                    userId,
                                    id: customer.id
                                },
                                search: `?${createSearchParams({
                                    title,
                                    userId,
                                    id: customer.id
                                })}`
                            })}>
                            Edit
                            </button>
                        </td>
                    </tr>
                })
            }
            </tbody>
        </table>
    </div>
  )
}

export default ProductsTable