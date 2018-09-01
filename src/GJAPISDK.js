var access_token = '',
	API_URL = 'http://api.urfbookingsystem.fincor.ru/api.php/';

function API_setGlobalAccessToken(token)
{
	access_token = token;
}

function API_setGlobalRequestUrl(url)
{
	API_URL = url;
}

class API_Request {
	constructor(query)
	{
		this.geturl = API_URL+'?query='+encodeURIComponent(query);
		// this.authPreCallback = () => {
		// 	console.log('fucker');
		// 	document.querySelector('.no-auth').click();
		// };
	}
	
	// setApiURL(url)
	// {
	// 	this.geturl = url+'?query='+encodeURIComponent(query)
	// }
	
	setParams(params)
	{
		for(let key in params)
			this.geturl += '&'+encodeURIComponent(key)+'='+encodeURIComponent(params[key]);
	}
	
	submit(func_after_success,  func_after_error = null)
	{
		let xhr = new XMLHttpRequest(),
			url = this.geturl;
		console.log('url:');
		console.log(url);
					
		xhr.open('GET', url, true);
		xhr.withCredentials = true;
		
		xhr.onreadystatechange = function() {
			if (xhr.readyState != 4) return;
			
			if(xhr.status == 203)
			{
				if(this.authCallback)this.authCallback();
			}
			else if(xhr.status != 202)
			{
				console.log('network error');
				console.log('response body: ');
				console.log(xhr.responseText);
				//setTimeout(this.submit, 1000, func_after_success,  func_after_error);
			}
			else
			{
				console.log('Response text:');
				console.log(xhr.responseText);
				console.log('Response object:');
				let response = JSON.parse(xhr.responseText);
				
				console.log(xhr.responseText);
				if(response.error)
				{
					console.log('failed');
					if(func_after_error != null) 
						func_after_error(response.message)
				}
				else{
					func_after_success(response);
				}
			}
		}
		xhr.send();
	}
}

export {access_token, API_setGlobalAccessToken, API_setGlobalRequestUrl, API_Request};
