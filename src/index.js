module.exports = function reverse (n) {
    let m = [];
    if(n<0){
        let a = String(n*(-1))
        for(let i=1; i<a.length+1; i++){
            m.push(a[a.length-i])
        }
    }else{
        let a = String(n);
        for(let i=1; i<a.length+1; i++){
            m.push(a[a.length-i])
        }
    }
    return m.join('')
}
