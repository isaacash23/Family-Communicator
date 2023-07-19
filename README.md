# Family-Communicator
Google Apps Script Code to automatically text students' families with their current grades and their goals from advisory check-ins

How-To Steps:
1. Make a copy of the spreadsheet by clicking [here](https://docs.google.com/spreadsheets/d/1WUDvZV1MnC-jjK_eIMsUkGd32OR1xDhNzHL_Ud3y7-o/copy).
2. Make a copy of the template sheet for each student you have, and rename each sheet with the name of that student. Fill in the students classes at the top of the sheet.
3. Find the email associated with the student's family member's phone number from Google Voice and add it to the cell in that student's sheet (you must have previously texted the family member on Google Voice to have this email address)
4. Check in with your student and enter their grades into a new row in the table, as well as (optionally) anything they say is going well or goals they'd like to work on
5. If you do not see a menu at the top that says "contact", go to Extensions>Apps Script and run the "onOpen" function
6. Once you have the contact menu, click Contact>Send Home to automatically text the student's family with the information you've just entered.
