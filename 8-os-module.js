const os = require("os")

// infor about current user on this computer
const user = os.userInfo()
// console.log(user)

// method returns the system uptime in seconds
const systemUpTime = os.uptime()
console.log(`The system has been ruuning for about ${systemUpTime} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)