
# Description
This piece of Google Apps Script code helps you to: 
- create Google OAuth Tokens
- connect to (external) Google Api's.  
 
Many of the Google APIs are already available in Google Apps Script, so first have a look here: 
- [Apps Script](https://developers.google.com/apps-script)
- [Advanced Services](https://developers.google.com/apps-script/guides/services/advanced)  
 
But if you want to use google auth tokens, apps script can also create them for you. Just use 
```ScriptApp.getOAuthToken()```
and set the scopes in the manifest file. 

# Usage: update scopes of OAuthToken
- Menu View -> Show Manifest File
- update scopes in oauthScopes, also include to connect to external service (because of UrlFetchApp)
- you can find scopes here: https://developers.google.com/identity/protocols/oauth2/scopes
- the OAuthToken will now have the same scopes

# Application
* You could run the script that create a token in account1, then send the token to the web app from account2 that receives it and connects to google api. 

# Contributions
Contributions are welcome. You can add new functions, new api's for example and other interesting applications! :+1:

# Contact Information
- [Wim den Herder official page](www.wimdenherder.com)