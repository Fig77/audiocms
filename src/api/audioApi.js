const token = "CFPAT-LBtveUvtDi7YjAhsyNzZURthngcrVnIr53eOZjYnxuc";
const space_id = "1t4hjzo7y0kb";
const env = "master";
const content_type = "audiocontent-v18";
const url = `https://api.contentful.com/spaces/${space_id}/environments/${env}/entries`;

async function request(method, query='', body={}, heads={}, auth={Authorization: `Bearer ${token}`}) {
  const answer = await fetch(url.concat(query), {
  	method: method,
  	mode: 'cors',
  	headers: {
      'X-Contentful-Content-Type':`${content_type}`,
  		...heads,
  		...auth
  	},
    ...body,
  }).then(resp => resp.json()).then(data => data).catch(err => err.status);
  return answer;
}

export default request;