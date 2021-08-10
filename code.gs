function main() {
  let oAuthToken = getOAuthToken();
  let result = getUserInfo(oAuthToken);
  Logger.log(result);
}

// Menu View -> Show Manifest File
// update scopes in oauthScopes, also include to connect to external service (because of UrlFetchApp)
// you can find scopes here: https://developers.google.com/identity/protocols/oauth2/scopes
// the OAuthToken will receive the same scopes
function getOAuthToken() {
  return ScriptApp.getOAuthToken();
}

function getUserInfo(oAuthToken) {
  const url = 'https://www.googleapis.com/userinfo/v2/me';
  return sendOAuthRequest(oAuthToken, url);
}

// returns object
function sendOAuthRequest(oAuthToken, url) {
  const params = {
    "method":"GET",
    "headers": {
      "Authorization" : "OAuth " + oAuthToken
    }
  };
  return JSON.parse(UrlFetchApp.fetch(url, params).getContentText());
}