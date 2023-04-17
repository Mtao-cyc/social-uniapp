const baseUrl="http://localhost:8088"
function request(url:string,method:'GET'|'POST',data:string | object | ArrayBuffer){
    return new Promise((resolve,reject)=>{
        uni.showLoading({
            title:'正在加载种'
        })
        uni.request({
          url:baseUrl+url,
          method,
          data,
          header: {},
          success:(res)=>{
            resolve(res.data)
          },
          fail:(err)=>{
            reject(err)
          },
          complete:()=>{
            uni.hideLoading();
          }
        })
    })
}
export default request