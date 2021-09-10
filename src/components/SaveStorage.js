import {useEffect,useState} from 'react'
import {Button,Input} from "@material-ui/core";

const SaveStorage=()=>{
    const[data,setData]=useState({})

    const saveData=()=>{
        setData({
            ...data,
            name:'Jorge',
            lastName:'Castillo'
        })

    }
    const handleChange =(event)=>{

        setData({...data,[event.target.name]:event.target.value})
    }
    useEffect(() => {
        console.log(data)
        localStorage.setItem('profile',JSON.stringify(data))
    }, [data]);
    return(
        <div>
            <Input name='country' onChange={handleChange}  type="text"></Input>
            <Button onClick={saveData} variant="contained" color="primary">Save</Button>
        </div>
    )
}

export default SaveStorage