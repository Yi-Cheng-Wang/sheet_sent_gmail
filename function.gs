function chooseAll() {
  var check1 = SpreadsheetApp.getActiveSheet().getRange( 17, 1, 1, 1).getValues();
  if(check1[0][0]==1){
    var datapersonal = SpreadsheetApp.getActiveSheet().getRange( 2, 1, 10, 1).getValues();
    for(var i in datapersonal){
      datapersonal[i][0]=true;
    }
    SpreadsheetApp.getActiveSheet().getRange( 2, 1, 10, 1).setValues(datapersonal);
    SpreadsheetApp.getActiveSheet().getRange( 17, 1, 1, 1).setValue(false);
  }
}
function NchooseAll() {
  var check1 = SpreadsheetApp.getActiveSheet().getRange( 17, 2, 1, 1).getValues();
  if(check1[0][0]==1){
    var datapersonal = SpreadsheetApp.getActiveSheet().getRange( 2, 1, 10, 1).getValues();
    for(var i in datapersonal){
      datapersonal[i][0]=false;
    }
    SpreadsheetApp.getActiveSheet().getRange( 2, 1, 10, 1).setValues(datapersonal);
    SpreadsheetApp.getActiveSheet().getRange( 17, 2, 1, 1).setValue(false);
  }
}
function sendFC() {
  var check2 = SpreadsheetApp.getActiveSheet().getRange( 17, 4, 1, 1).getValues();
  if(check2[0][0]==1){
    var password=SpreadsheetApp.getActiveSheet().getRange( 17, 3, 1, 1).getValues();
    password=(password*password*password*password*password)%1000001^8;
    if(password%128203==0){
      SpreadsheetApp.getActiveSheet().getRange( 17, 3, 1, 1).setValue("");
      Send();
    }
  }
  SpreadsheetApp.getActiveSheet().getRange( 17, 4, 1, 1).setValue(false);
}
function testFC() {
  var check3 = SpreadsheetApp.getActiveSheet().getRange( 17, 5, 1, 1).getValues();
  if(check3[0][0]==1){
    test();
  }
  SpreadsheetApp.getActiveSheet().getRange( 17, 5, 1, 1).setValue(false);
}