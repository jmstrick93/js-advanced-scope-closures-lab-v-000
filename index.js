function produceDrivingRange(blockRange){
  return function(start, stop){
    let startNum = start.replace(/\D/g, '')
    let stopNum = stop.replace(/\D/g, '')
    let dist = Math.abs(startNum - stopNum)
    if(dist > blockRange){
      let outRange = Math.abs(dist - blockRange)
      return `${outRange} blocks out of range`
    } else {
      let inRange = Math.abs(dist - blockRange)
      return `within range by ${inRange}`
    }
  }
}

function produceTipCalculator(tipQuotient){
  return function(bill){
    return Number(bill) * Number(tipQuotient)
  }
}
