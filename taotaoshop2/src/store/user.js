 // 响应式 使用共享状态依然会热更新
// 单页应用 -> 组件 + 数据流管理
import { defineStore } from 'pinia'
// 定义一个仓库
export const useUserStore = defineStore('user', {
  state:()=>{
    return{
        isLogin:false,
        
    }
}
  
  
})