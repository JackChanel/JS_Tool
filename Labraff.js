module.exports={
  // UTC（字符串包含TZ的时间）时间转换成本地时间（yy年mm月dd日 hh:mm:ss）
  UTC2LOCTIME(date) {
    let json_date = new Date(date).toJSON();
    let StandardTime = new Date(+new Date(json_date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
    let TimeArray = StandardTime.split(/[- ]/)
    console.log(TimeArray);
    let TimeObj = {
      ymd:TimeArray[0]+'年'+TimeArray[1]+'月'+TimeArray[2]+'日',
      hms:TimeArray[3]
    }
    return TimeObj
  },
}