const myLover = () => {
  return {
    
  }
}

const getDate = () => {
  let time = new Date(),
      year = time.getFullYear(),
      month = time.getMonth()+1,
      day = time.getDate(),
      hour = time.getHours(),
      minute = time.getMinutes(),
      second = time.getSeconds()
  return year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second
}

export {
  getDate
}