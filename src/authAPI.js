import {access_token, API_setGlobalAccessToken, API_setGlobalRequestUrl, API_Request} from './GJAPISDK.js';
// import CookieInterface from './cookies.js';
API_setGlobalRequestUrl('http://api.urfbookingsystem.fincor.ru/api.php');
// document.querySelector('#btn-submit').addEventListener('click', auth_OutgoingCall);

function getCookie(name) {
	var matches = document.cookie.match(new RegExp(
	  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

var callToNumberField,
	callToStatusField,
	userNumberField;
	 
function auth_OutgoingCall(){
	callToNumberField = document.querySelector('.popup__call-num');
	callToStatusField = document.querySelector('.popup__status');
	userNumberField = document.querySelector('.popup__login');
	// console.log(callToNumberField);
	let userNumber = userNumberField.value;
	callToNumberField.innerHTML  = 'получение номера';
	callToStatusField.innerHTML  = 'ожидается';
		
	let identity_type	=	'phone_number',
		identity_item	=	userNumber,
		secret_type		=	'outgoingCall';
	
	let r = new API_Request('token.ask');
	r.setParams({
					'identity_type': identity_type,
					'identity_item': identity_item,
					'secret_type': secret_type
				});
	r.submit(auth_NumberAssigned, console.log);
}

function auth_NumberAssigned(responseJSON)
{
	let userNumber = userNumberField.value,
		callNumber = responseJSON.secret_item,
		identity_type	=	'phone_number',
		identity_item	=	userNumber,
		secret_type		=	'outgoingCall',
		identity_secret = 'checkmycall',
		access_expires = 60;
	
	callToNumberField.innerHTML  = '+' + callNumber;
	callToStatusField.innerHTML  = 'ожидается звонок';
	
	let r = new API_Request('token.get');
	r.setParams({
					"identity_type":	identity_type,
					"identity_item":	identity_item,
					"secret_type":		secret_type,
					"identity_secret":	identity_secret,
					"access_expires":	access_expires
				});
	r.submit(auth_TokenAssigned, console.log);
}

// {
// 	"query": "token.get",
// 	"status": "granted",
// 	"message": "authorization completed, access token successfully assigned",
// 	"userdata": {
// 	"first_name": "User",
// 	"last_name": "Anonymous",
// 	"user_id": "23ce21835d72e7a6124c892064028f09",
// 	"phone_number": "79967979454",
// 	"registration_required": true,
// 	"access_token": "609bb2283f7c3f1f34cc2192ef9bd035902d36ba1ca61468138d6f4a27ae4d86"
// 	}
// 	}


function auth_TokenAssigned(responseJSON)
{
	document.cookie = 'access_token=' + responseJSON.userdata.access_token;
	document.cookie = 'user_id=' + responseJSON.userdata.user_id;
	document.cookie = 'first_name=' + responseJSON.userdata.first_name;
	document.cookie = 'last_name=' + responseJSON.userdata.last_name;
	document.cookie = 'phone_number=' + responseJSON.userdata.phone_number;
	document.cookie = 'registration_required=' + responseJSON.userdata.registration_required;
	// alert(document.cookie);
	document.querySelector('.user__name').innerHTML = responseJSON.userdata.last_name + ' ' + responseJSON.userdata.first_name;
	if (responseJSON.userdata.registration_required) {
		document.querySelector('.popup__register').classList.remove('hide');
		document.querySelector('.popup').classList.add('popup__modified');
		document.querySelector('.popup__enter-button').classList.add('hide');
	} else {
		document.querySelector('.popup__register').classList.add('hide');
		document.querySelector('.popup__enter-button').classList.remove('hide');
	}
	if (document.cookie.registration_required === '1')
		alert('хуй');

	console.log('USERDATA: ' + responseJSON);
	if(responseJSON.status == 'granted')
	{
		callToStatusField.innerHTML 
					= 'Вы авторизованы :)';
	}
	if(responseJSON.status == 'aborted')
	{
		callToStatusField.innerHTML  = 'Таймаут :(';
	}
	API_setGlobalAccessToken(responseJSON.userdata.access_token);
}


export default auth_OutgoingCall;