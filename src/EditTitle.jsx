import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import React, { useState } from 'react'
import axios from 'axios';

const EditTitle = () => {
    let navigate = useNavigate();
    const [searchparams] = useSearchParams();
    const [customer, setCustomer] = useState({
        title: searchparams.get("title"),
        userId: searchparams.get("userId"),
    })

    const mutation = useMutation(() => {
        return axios({
            method: "put",
            url:`http://localhost:1337/customers/${searchparams.get("id")}`,
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
        <button onClick={() => mutation.mutate()}>Edit</button>
    </div>
  )
}

export default EditTitle