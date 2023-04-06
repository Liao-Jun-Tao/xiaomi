import axios from './config'

// 获取mock假接口的定义的数据
export const getCategory =()=>{  
    return axios.get('/category') 
}
