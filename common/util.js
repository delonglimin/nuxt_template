export function processImg(url,type=100){
    if(typeof url == 'string' && url.startsWith('http')){
      return `${url}?x-oss-process=image/resize,lfit,w_${type},h_${type}`
    }
  }