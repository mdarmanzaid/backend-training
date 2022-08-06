 const monthNames = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"
 ]

 const dateObj = new Date()
 const monthNumber = dateObj.getMonth()
 const monthName = monthNames[monthNumber]
 console.log(monthName,dateObj)


 const batch_info = "Plutonium  W3D3, the topic for today is Nodejs module system"
let func  = function() {

}
console.log(batch_info)


 module.exports.cd = monthName,dateObj
 module.exports.batch_info=batch_info