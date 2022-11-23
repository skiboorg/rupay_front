import { defineStore } from 'pinia';
import {ref} from "vue";
import { useEraStore } from 'stores/eraChain'
import { useAccountStore } from 'stores/account'
import {useRouter} from "vue-router"


export const useAuthStore = defineStore('auth', () => {

  const sraStore = useEraStore()
  const accountStore = useAccountStore()

  const router = useRouter()
   let hash = ref(null)
   let seedStatus = ref(false)




  async function login (seed_v, hash_v) {
    sraStore.setSeed(seed_v)
    seedStatus.value = true
    hash.value = hash_v
    const storred_hash = localStorage.getItem('hash')
    if (!storred_hash){
      localStorage.setItem('hash', hash_v)
    }
    await sraStore.getAssets()
    await accountStore.firstAddress()
    await accountStore.getBalances()
    sraStore.startCheckUnconfirmTx()

    return Promise.resolve('Success')
  }

  async function logout(){
    //console.log('logout')
    //console.log(accountStore.addresses)

    localStorage.removeItem('hash')
    localStorage.removeItem('seed')
    accountStore.clearInfo()
    sraStore.stopCheckUnconfirmTx()
    //console.log(accountStore.addresses)
    await router.push('/')
    await router.go()

    return Promise.resolve('Success')

    //localStorage.removeItem('currentAddressIdx')
  }

    return{
      hash,
      seedStatus,
      login,
      logout


    }
  }


)
