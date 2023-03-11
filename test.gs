function test() {
  var datapersonal = SpreadsheetApp.getActiveSheet().getRange( 3, 1, 1, 5).getValues();//此部分是針對我自己的資料進行抓取
  var data = SpreadsheetApp.getActiveSheet().getRange( 13, 1, 2, 2).getValues();
  for (var i in datapersonal) {
    MailApp.sendEmail(datapersonal[i][2]+"@fhsh.khc.edu.tw","推播測試訊息",datapersonal[i][3]+" 你好~\n以下為此次推播內容：\n\n"+data[0][1]+"\n\n"+datapersonal[i][4]+"\n\n"+data[1][1]+"\n\n測試測試測試測試測試測試測試測試測試測試測試測試測試");
  }
}