
# Description
This piece of Google Apps Script code helps you to create Google OAuth Tokens and connect to (external) Google Api's. Many of the Google APIs are already available in Google Apps Script, so first have a look here: https://developers.google.com/apps-script
But if you want to use google auth tokens, apps script can also create them for you. Just use ScriptApp.getOAuthToken() and set the scopes in the manifest file. 

# Usage: update scopes of OAuthToken
- Menu View -> Show Manifest File
- update scopes in oauthScopes, also include to connect to external service (because of UrlFetchApp)
- you can find scopes here: https://developers.google.com/identity/protocols/oauth2/scopes
- the OAuthToken will now have the same scopes