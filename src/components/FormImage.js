import { React, useState } from "react";
import {Button,Input} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const FormImage=()=>{

    const classes = useStyles();
    const [file,setFile]= useState()
    const [alert,setAlert]=useState(false)
    const [message,setMessage]=useState('')
    const fileChangedHandler = (event) => {
        const file = event.target.files[0]
        setFile(file)
        console.log(file.size)
        if( file.size>1000000) {
            setAlert(true)
            setMessage('El tamaño de la imagen debe de ser menor a 1 MB y el peso de esta imagen es de '+Number.parseFloat(file.size/1000000).toFixed(2)+ 'MB')
        }

    }
    const uploadHandler = async() => {

        const formData=new FormData()
        formData.append(
            'image',
            file
        )
    const res=await axios.post('http://localhost:5000/user/-MffDwlkz0r-XsPeaFIx',formData,{
        headers:{
            'Content-Type':'multipart/form-data',
            'Authorization':`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ii1NZkRRWS15bVROWjBHVVZzeVU0IiwiZW1haWwiOiJqdWxpYW5hLm1nM0BnbWFpbC5jb20iLCJuYW1lIjoianVsaWFuYSIsImlhdCI6MTYzMTE5NzE0MSwiZXhwIjoxNjMxMjgzNTQxfQ.aeGqASMHsB-bW24xlRdyFECp8cB4L18Mdcjqn8tCTQk`        }
    })
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
            {alert ? <Alert severity="info">{message}</Alert>:null}
            <Input type="file" onChange={fileChangedHandler}></Input>
            <Button onClick={uploadHandler} variant="contained" color="primary">Upload Image </Button>
        </div>
    )
}

export default FormImage