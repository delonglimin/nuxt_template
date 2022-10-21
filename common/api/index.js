export default ($axios)=>{
    return {
        cardDetail:data=>$axios.post('jobUserCard/getUserCardById',data)
    }
}