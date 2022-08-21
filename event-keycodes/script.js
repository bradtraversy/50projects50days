let $ = document;
let title = $.querySelector('title');
let keyCode = $.querySelector('#keyCode');
let eventKey = $.querySelector('#key');
let eventLocation = $.querySelector('#location');
let eventWhich = $.querySelector('#which');
let eventCode = $.querySelector('#code');

$.body.addEventListener('keydown', (event) => {
	event.preventDefault();
	starter.style.display = 'none';
	heading.style.display = 'flex';
	ascii.style.display = 'flex';
	infos.style.display = 'flex';
	let getKey = event.key;
	let getLocation = event.location;
	let getWich = event.which;
	let getCode = event.code;
	title.innerHTML = "key codes : " + getKey;
	keyCode.innerHTML = getKey;
	eventKey.innerHTML = getKey;
	eventLocation.innerHTML = getLocation;
	eventWhich.innerHTML = getWich;
	eventCode.innerHTML = getCode;
});