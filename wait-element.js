//Check
let check = (e, m, t, c) => { //(element, max, timeout, callback)
    let i = +m,
    loop = () => { $(e).length ? c() : --i && setTimeout(() => { loop() }, t) }
    loop()
},            
//Process
myFunc = () => { //Do something }
//Usage
check("element", 30, 500, myFunc)
