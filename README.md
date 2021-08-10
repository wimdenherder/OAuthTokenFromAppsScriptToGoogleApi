
# Description
This piece of Google Apps Script code helps you to: 
- create Google OAuthTokens
- set scopes (see manifest file)
- connect to Google Api's from within Google Apps Script with this OAuthToken
 
Many of the Google APIs are already available in Google Apps Script, have a look here: 
- [Apps Script](https://developers.google.com/apps-script)
- [Advanced Services](https://developers.google.com/apps-script/guides/services/advanced)  
 
But if you want to use google auth tokens, apps script can create them for you. Just use 
```ScriptApp.getOAuthToken()```
and set the right scopes in the manifest file. 

# Usage
To update scopes:  
- Menu View -> Show Manifest File
- update scopes in oauthScopes, don't forget to include: 'connect to external service' (because of UrlFetchApp)
- you can find scopes here: https://developers.google.com/identity/protocols/oauth2/scopes
- the OAuthToken will now have the same scopes

# Application
* You could run a script that create a token in account1, then send the token to the web app from account2 that receives it and connects to google api and is authorized to do things on behalf of account1. 

# Contributions
Contributions are welcome. You can add new functions, new api's for example and other interesting applications! :+1:

# Contact Information
- [Wim den Herder official page](www.wimdenherder.com)