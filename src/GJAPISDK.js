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
	}
	
	// setApiURL(url)
	// {
	// 	this.geturl = url+'?query='+encodeURIComponent(query);
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
		
		xhr.onreadystatechange = function() {
			if (xhr.readyState != 4) return;
			
			if(xhr.status != 202)
			{
				console.log('network error, retrying...(false)');
				console.log('response body: ');
				setTimeout(this.submit, 1000, func_after_success,  func_after_error);
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

// function API_query_outgoingCall_authorize(user_phone_number,
// 	afterNumberAssignedCallback,
// 	afterTokenAssignedCallback)
// {
	

	
	
// 	return responseData.secret_item;
// }