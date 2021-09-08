import { React, useState } from "react";
import Button from "@material-ui/core/Button";
import Input from '@material-ui/core/Input'

import axios from 'axios'

const FormImage=()=>{
    const [file,setFile]= useState()
    const [alert,setAlert]=useState(false)
    const [message,setMessage]=useState('')
    const fileChangedHandler = (event) => {
        const file = event.target.files[0]
        setFile(file)

    }
    const uploadHandler = async() => {
        console.log(file)
        const formData=new FormData()
        formData.append(
            'image',
            file
        )
    const res=await axios.post('http://localhost:5000/user/-MffDwlkz0r-XsPeaFIx',formData,{
        headers:{
            'Content-Type':'multipart/form-data',
            'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ii1NZkRRWS15bVROWjBHVVZzeVU0IiwiZW1haWwiOiJqdWxpYW5hLm1nM0BnbWFpbC5jb20iLCJuYW1lIjoianVsaWFuYSIsImlhdCI6MTYzMTEyODg5OSwiZXhwIjoxNjMxMjE1Mjk5fQ.D15QNQ7YXth6sCFdoWrBDLIFdcc66VYtfTv0VKZE8hY'
        }
    })
        console.log(res.data.info.userMessage)
        if(res){
            setAlert(true)
            setMessage(res.data.info.userMessage)
        }else{
            setAlert(false)
            setMessage('Error...Posiblemente la imagen es demasiado pesada')
        }
    }
    return(
        <div>
            {alert ? `${message}`: null}
            <Input type="file" onChange={fileChangedHandler}></Input>
            <Button onClick={uploadHandler} variant="contained" color="primary">Upload Image </Button>
        </div>
    )
}

export default FormImage