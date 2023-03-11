function Send() {
  var datapersonal = SpreadsheetApp.getActiveSheet().getRange( 2, 1, 10, 5).getValues();
  var data = SpreadsheetApp.getActiveSheet().getRange( 13, 1, 2, 2).getValues();
  for (var i in datapersonal) {
    if(datapersonal[i][0]==1){
      MailApp.sendEmail(datapersonal[i][2]+"@fhsh.khc.edu.tw","推播通知",datapersonal[i][3]+" 你好~\n以下為此次推播內容：\n\n"+data[0][1]+"\n\n"+datapersonal[i][4]+"\n\n"+data[1][1]);
      datapersonal[i][4]="";
      datapersonal[i][0]=false;
    }
  }
  data[0][1]="";
  data[1][1]="";
  SpreadsheetApp.getActiveSheet().getRange( 2, 1, 10, 5).setValues(datapersonal);
  SpreadsheetApp.getActiveSheet().getRange( 13, 1, 2, 2).setValues(data);
}