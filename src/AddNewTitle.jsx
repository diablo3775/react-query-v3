import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import React, { useState } from 'react'
import axios from 'axios'

const AddNewTitle = () => {
    let navigate = useNavigate();
    const [customer, setCustomer] = useState({
        userId: "",
        title: "",
    })

    const mutation = useMutation(() => {
        return axios({
            method: "post",
            url:"http://localhost:1337/customers",
            data: customer,
        })
    },{
        onSuccess: () => {
            navigate("/")
        }
    })
    
  return (
    <div>
        <div>
            <label>Id</label>
            <input type="text" value={customer.userId} onChange={(e) => setCustomer({...customer, userId: e.target.value})} />
        </div>
        <div>
            <label>Title</label>
            <input type="text" value={customer.title} onChange={(e) => setCustomer({...customer, title: e.target.value})} />
        </div>
        <button onClick={() => mutation.mutate()}>Add</button>
    </div>
  )
}

export default AddNewTitle