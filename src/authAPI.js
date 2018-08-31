import {access_token, API_setGlobalAccessToken, API_setGlobalRequestUrl, API_Request} from './GJAPISDK.js';


API_setGlobalRequestUrl('http://api.urfbookingsystem.fincor.ru/api.php');

// document.querySelector('.popup__auth-button').addEventListener('click', auth_OutgoingCall);

function auth_OutgoingCall(e){
	e.preventDefault();
	let userNumber = document.querySelector('.popup__login').value;
	document.querySelector('.popup__call-num').innerHTML  = 'ожидается';
	document.querySelector('.popup__status').innerHTML  = 'получение номера';
	
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
	let userNumber = document.querySelector('.popup__login').value,
		callNumber = responseJSON.secret_item,
		identity_type	=	'phone_number',
		identity_item	=	userNumber,
		secret_type		=	'outgoingCall',
		identity_secret = 'checkmycall',
		t_secret_item_uniq_id = responseJSON.t_secret_item_uniq_id;
	
	document.querySelector('.popup__call-num').innerHTML  = '+' + callNumber;
	document.querySelector('.popup__status').innerHTML  = 'ожидается звонок';
	
	let r = new API_Request('token.get');
	r.setParams({
					"identity_type":	identity_type,
					"identity_item":	identity_item,
					"secret_type":		secret_type,
					"identity_secret":	identity_secret,
					"t_secret_item_uniq_id": t_secret_item_uniq_id
				});
	r.submit(auth_TokenAssigned, console.log);
}

function auth_TokenAssigned(responseJSON)
{
	console.log('authorize status: ' + responseJSON.status);
	console.log('authorize response message: ' + responseJSON.message);
	console.log('authorize access token: ' + responseJSON.access_token);
	
	if(responseJSON.status == 'granted')
	{
		document.querySelector('.popup__status').innerHTML 
					= 'Вы авторизованы :) AT: ' + responseJSON.access_token;
	}
	if(responseJSON.status == 'aborted')
	{
		document.querySelector('.popup__status').innerHTML  = 'Таймаут :(';
	}
	API_setGlobalAccessToken(responseJSON.access_token);
}

export default auth_OutgoingCall;