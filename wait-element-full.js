//Check
let check = (e, m, t, c) => { //(element, max, timeout, callback)
    let i = +m,
    loop = () => {
        if ($(e).length) {
            console.log(`Atieu: Found ${e}\n==========`)
            c()
        } else {
            if (--i) {                
                console.log(`Atieu: Find ${e} for the ${m - i} times\n==========`)
                setTimeout(() => { loop() }, t)
            } else {
                console.log(`Atieu: Timeout!\n==========`)
            }
        }
    }
    loop()
},

//Process
myFunc = () => {
    //Do something
}

//Usage
check("element", 30, 500, myFunc)
