import axios from 'axios'
import { base_URl } from '../../constants/Constant'

export const usePostAdSelect =()=>{
    let data = false
    const postadSelect =async()=>{
        await axios({
            method:'get',
            url:base_URl
        }).then((res)=>{
            data = res.data
            
        }).catch((err)=>
        data = err
        )
        return data
    }
  return [postadSelect]
}

