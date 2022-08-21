import {EraChain} from 'erachain-js-api'
import {era} from "boot/erachain"
import axios from "axios";


export const  getAssetsByAddress = async (address) => {
  return await axios.get(`${process.env.API_URL}/api/addressassets/${address}`)
}

export const  getAssetByKey = async (key) => {
  console.log(key)
  const response = await axios.get(`${process.env.API_URL}/apiasset/${key}`)
  return response.data
}

export const  getTradePairs = async () => {
  const response = await axios.get(`${process.env.API_URL}/apiexchange/spot/list`)

  return response.data
}

export const  getOrders = async (first_asset_key,second_asset_key) => {
  const response = await axios.get(`${process.env.API_URL}/apiexchange/ordersbook/${first_asset_key}/${second_asset_key}`)
  return response.data
}

export const  getSignatureBySeqNo = async (SeqNo) => {
  const response = await axios.get(`${process.env.API_URL}/api/tx/signature/${SeqNo}`)
  return response.data
}

export const  getOrderBySeqNo = async (SeqNo) => {
  const response = await axios.get(`${process.env.API_URL}/apiexchange/order/${SeqNo}`)
  return response.data
}


export const  findTransactionsByAddress = async (address,limit,offset) => {
  return await axios.get(`${process.env.API_URL}/api/tx/find?address=${address}&desc=true&limit=${limit}&offset=${offset}`)
}

async function allordersbyaddress(address,last_id=0){
  if (last_id===0){
    const response = await axios.get(`${process.env.API_URL}/apiexchange/allordersbyaddress/${address}`)
    return response.data
  }else {
    const response = await axios.get(`${process.env.API_URL}/apiexchange/allordersbyaddress/${address}/${last_id}`)
    return response.data
  }
}

function checkOrdersData(data){
  //console.log('checkOrdersData')
  if (data.length===50){
    return  data[49].id
  }else {
    return false
  }
}

export const  findOrdersByAddress = async (address) => {
  let data = await allordersbyaddress(address)
  let last_id = checkOrdersData(data)
  if (last_id){
    do{
      let new_data = await allordersbyaddress(address,last_id)
      data = data.concat(new_data)
      last_id = checkOrdersData(data)
    }while (last_id)
  }


  return data
}


export const  filterTransactionsByAssetName = async (address,assetKey,limit,offset) => {
  let filtered_transactions_result = []
  let filtered_transactions_temp = []
  const transactions = await findTransactionsByAddress(address,limit,offset)

  const filtered_transactions = transactions.data.filter(x=>x.assetKey===assetKey)
  //console.log(transactions.data)
  for (let i in filtered_transactions){
    filtered_transactions[i].fullDate = new Date(filtered_transactions[i].timestamp).toLocaleString()
    filtered_transactions[i].timestamp = new Date(filtered_transactions[i].timestamp).toLocaleDateString()
  }
  //console.log(filtered_transactions)
  filtered_transactions_temp = []
  filtered_transactions_result= filtered_transactions_temp.concat(filtered_transactions)

  //console.log(filtered_transactions_result)
  return filtered_transactions_result





}

export const  getAssetById = async (asset_id) => {
  return await axios.get(`${process.env.API_URL}/apiasset/${asset_id}`)
}

export const getAssetBalanceByAddress = (address,asset) => {
  return era.getBalance(address,asset)
}

export const getUnconfirmedTxByAddress = async (address) => {
  return await axios.get(`${process.env.API_URL}/api/tx/unconfirmed?address=${address}`)
}


export const setAsset = async (keyPair, asset, recipientAddress, head, message, encrypted, isBase64) => {
  const response =  await era.sendAsset(keyPair, asset, recipientAddress, head, message, encrypted, isBase64)
  console.log(response)
  return response
}
