import axios from './config'

// 获取mock假接口的定义的数据
export const getSwiperList =()=>{  
    return axios.get('/swiperList') 
}

export const getSubnav =()=>{
    return axios.get('/subnav')
}

export const getHotSell =()=>{
    return axios.get('/hotsell')
}

export const getGoods =()=>{
    return axios.get('/goods')
}
