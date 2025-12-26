// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'
// import { getLoginInfo , setLoginInfo ,clearLoginInfo ,setToken} from '@/utils/storage'

// export const useLoginStore = defineStore('login', () => {
//   // 从本地存储初始化状态
//   const loginInfo = getLoginInfo() || {};
//   const empId = ref(loginInfo.empId || '');
//   const empName = ref(loginInfo.empName || '');
//   const token = ref(loginInfo.token || '');

//   // 2. 计算属性
//   const getEmpId = computed(() => empId.value);
//   const getEmpName = computed(() => empName.value);
//   const getToken = computed(() => token.value);

//   //存储到localstage
//   const saveInfo = (newInfo) => {
//     empId.value = newInfo.empId;
//     empName.value = newInfo.empName;
//     token.value = newInfo.token;
//     setToken(token.value)
//     setLoginInfo(newInfo)
//   };

//   //清除登录状态（退出登录）
//   const clearInfo = () => {
//     empId.value = '';
//     empName.value = '';
//     token.value = '';
//     clearLoginInfo()
//   };


//   return {
//     empId,
//     empName,
//     token,
//     getEmpId,
//     getEmpName,
//     getToken,
//     saveInfo,
//     clearInfo
//   };
// })
