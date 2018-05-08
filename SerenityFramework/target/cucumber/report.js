$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BugTrackerApp/ApExBugTracker.feature");
formatter.feature({
  "line": 1,
  "name": "Bug Tracker App",
  "description": "",
  "id": "bug-tracker-app",
  "keyword": "Feature"
});
formatter.before({
  "duration": 80663383,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Admin Add A new User",
  "description": "",
  "id": "bug-tracker-app;admin-add-a-new-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User navigate to Bug Tracker App Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User Sing In to Bug tracker with Valid Credentials",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User is logged in to the Bug Tracker Application As an Admin",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Admin Add A New User",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Then a successful message will be displayed"
    }
  ],
  "line": 8,
  "name": "Admin Logout form his account",
  "keyword": "Then "
});
formatter.match({
  "location": "BugTrackerStepDef.user_navigate_to_Bug_Tracker_App_Login_Page()"
});
formatter.result({
  "duration": 17088390798,
  "status": "passed"
});
formatter.match({
  "location": "BugTrackerStepDef.user_Sing_In_to_Bug_tracker_with_Valid_Credentials()"
});
formatter.result({
  "duration": 100276552727,
  "error_message": "org.openqa.selenium.NoSuchElementException: Timed out after 50 seconds. Element not found\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027SHAJIB\u0027, ip: \u0027192.168.160.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat net.thucydides.core.annotations.locators.SmartAjaxElementLocator.ajaxFindElement(SmartAjaxElementLocator.java:145)\r\n\tat net.thucydides.core.annotations.locators.SmartAjaxElementLocator.findElement(SmartAjaxElementLocator.java:93)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.getElement(WebElementFacadeImpl.java:144)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.sendKeys(WebElementFacadeImpl.java:1040)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat net.thucydides.core.annotations.locators.AbstractSingleItemHandler.invoke(AbstractSingleItemHandler.java:45)\r\n\tat com.sun.proxy.$Proxy28.sendKeys(Unknown Source)\r\n\tat net.serenity.bdd.junit.cucumber.pages.BugTrackerLogInPage.performLogIn(BugTrackerLogInPage.java:36)\r\n\tat net.serenity.bdd.junit.cucumber.stepDef.BugTrackerStepDef.user_Sing_In_to_Bug_tracker_with_Valid_Credentials(BugTrackerStepDef.java:22)\r\n\tat ✽.When User Sing In to Bug tracker with Valid Credentials(BugTrackerApp/ApExBugTracker.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BugTrackerStepDef.user_is_logged_in_to_the_Bug_Tracker_Application_As_an_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BugTrackerStepDef.admin_Add_A_New_User()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BugTrackerStepDef.admin_Logout_form_his_account()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("OrangeHRM/OrangeHRM.feature");
formatter.feature({
  "line": 1,
  "name": "As a User I should be able to Login to the App and perform Different Functionality",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-login-to-the-app-and-perform-different-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4874240,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "LogIn",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-login-to-the-app-and-perform-different-functionality;login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User Navigate to the OrangeHRM login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Login to the Application",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Should be able to perform Multiple Task",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeHRMStepDef.user_Navigate_to_the_OrangeHRM_login_Page()"
});
formatter.result({
  "duration": 10739573556,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRMStepDef.user_Login_to_the_Application()"
});
formatter.result({
  "duration": 2623458247,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRMStepDef.user_Should_be_able_to_perform_Multiple_Task()"
});
formatter.result({
  "duration": 31974,
  "status": "passed"
});
formatter.uri("WebSheetApp/ApExWebSheet.feature");
formatter.feature({
  "line": 1,
  "name": "Simple Web App",
  "description": "",
  "id": "simple-web-app",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5218847,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Happy Path",
  "description": "",
  "id": "simple-web-app;happy-path",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User navigate to Simple Web Sheet Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User Sing In with Valid user name and valid password",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User do some administrative work on Dashbord",
  "keyword": "Then "
});
formatter.match({
  "location": "WebSheetStepDef.user_navigate_to_Simple_Web_Sheet_Login_Page()"
});
formatter.result({
  "duration": 10033567835,
  "status": "passed"
});
formatter.match({
  "location": "WebSheetStepDef.user_Sing_In_with_Valid__valid()"
});
formatter.result({
  "duration": 100135067133,
  "error_message": "org.openqa.selenium.NoSuchElementException: Timed out after 50 seconds. Element not found\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027SHAJIB\u0027, ip: \u0027192.168.160.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat net.thucydides.core.annotations.locators.SmartAjaxElementLocator.ajaxFindElement(SmartAjaxElementLocator.java:145)\r\n\tat net.thucydides.core.annotations.locators.SmartAjaxElementLocator.findElement(SmartAjaxElementLocator.java:93)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.getElement(WebElementFacadeImpl.java:144)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.sendKeys(WebElementFacadeImpl.java:1040)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat net.thucydides.core.annotations.locators.AbstractSingleItemHandler.invoke(AbstractSingleItemHandler.java:45)\r\n\tat com.sun.proxy.$Proxy28.sendKeys(Unknown Source)\r\n\tat net.serenity.bdd.junit.cucumber.pages.LoginPage.performLogIn(LoginPage.java:29)\r\n\tat net.serenity.bdd.junit.cucumber.stepDef.WebSheetStepDef.user_Sing_In_with_Valid__valid(WebSheetStepDef.java:36)\r\n\tat ✽.When User Sing In with Valid user name and valid password(WebSheetApp/ApExWebSheet.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WebSheetStepDef.user_do_some_administrative_work_on_Dashbord()"
});
formatter.result({
  "status": "skipped"
});
});