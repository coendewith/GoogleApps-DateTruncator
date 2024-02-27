function date_trunc(time_unit, input) {
  var rawDate = new Date(input)
  var timeZone = Session.getScriptTimeZone()
  var formattedDateStr = Utilities.formatDate(rawDate, timeZone, "yyyy/MM/dd HH:mm:ss");
  var date = new Date(formattedDateStr);

  var day = date.getDate();
  var month = date.getMonth()+1;
  var year = date.getFullYear();
  
  const getDayOfWeek = date => date.getDay() === 0 ? 7 : date.getDay();
  days_to_monday = (getDayOfWeek(date) - 1)
  week_timestamp = new Date(date.setDate(date.getDate() - days_to_monday))
  const week = new Date(date.getFullYear(), date.getMonth(), week_timestamp.getDate());

  switch(time_unit.toString().toLowerCase()) {
      case 'year':
          return new Date('01-01-'+ year+ ' 00:00:00')
      case 'month':
          return new Date(month + '-01-' + year + ' 00:00:00')
      case 'week':
          return week
      case 'day':
          return new Date((month+ '-' + day + '-' + year + ' 00:00:00'))
      default:
          throw 'Please provide a valid time unit (i.e. YEAR, MONTH, WEEK or DAY)'
  }}