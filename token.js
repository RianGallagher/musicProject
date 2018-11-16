import * as base64 from 'base-64';
const apiPrefix = 'https://accounts.spotify.com/api/token';
const client_id = 'f7410f08c2064e4c9517603f56ed4089';
const client_secret = 'c9d93bd16c9847d18d054549dfcea9e6';

const credentials = base64.encode(client_id + ':' + client_secret);

export default async (code, redirectUrl) => {
  const res = await fetch(apiPrefix, {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + credentials,
      'Content-type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=authorization_code&code=' + code + '&redirect_uri=' + redirectUrl,
  });
  const json = await res.json();
  token = json.access_token;
  console.log('token is', token);
  return token;
}
