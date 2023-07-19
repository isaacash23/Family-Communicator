function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Contact')
      .addItem('Send Home', 'sendHome')
      //.addSeparator()
      .addToUi();
}

function getLastFilledRow(twoDArray) {
  lastRow = 0
  for (row in twoDArray) {
    if (twoDArray[row].some(e => e)) {
      lastRow = row
    }
  }
  return lastRow
}


function sendHome() {
  var sheet = SpreadsheetApp.getActiveSheet();
  //read in all and only active cells
  var data = sheet.getDataRange().getValues();
  var name = sheet.getName();
  var numClasses = 6
  var goingWellCol = 7
  var workOnCol = 9

  //get the email to send to
  var send = sheet.getRange(2,13).getValue()

  //find which boxes were checked
  checkboxCells = sheet.getRange(6,12,1,3)
  var [[sendGrades,sendWell,sendWorkOn]] = checkboxCells.getValues()

  //get the most recent row of grades
  var gradeData = sheet.getRange(1,2,sheet.getLastRow(),numClasses).getValues()
  var curRow = getLastFilledRow(gradeData)
  Logger.log(curRow)

  var message1 = name + "'s grades: \n"

  for (let c = 1; c < 7; c++) {
    course = data[1][c]
    grade = data[curRow][c]
    if (grade) {
      message1 += course + ": " + grade + "\n"
    }
  }

  message2 = "What " + name + " thinks is going well: \n"
  message3 = "What " + name + " wants to work on: \n"

  message2 += data[curRow][goingWellCol]
  message3 += data[curRow][workOnCol]

  var grades = {
    to: send,
    subject: "",
    body: message1
  }

  var goingWell = {
    to: send,
    subject: "",
    body: message2
  }

  var improve = {
    to: send,
    subject: "",
    body: message3
  }

  if (sendGrades) {
    MailApp.sendEmail(grades)
  }
  if (sendWell) {
    MailApp.sendEmail(goingWell)
  }
  if (sendWorkOn) {
    MailApp.sendEmail(improve)
  }
}
