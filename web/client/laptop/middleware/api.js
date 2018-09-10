'use strict';

/*####################
# JABIL CO.
# TRACKCHAINER
# AUTHOR:MELVYN TIE
###################*/

import fetch from 'isomorphic-fetch';

// show All Laptops
export function showlLaptops() {
  return fetch('/v1/api/show', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(async res => {
	const result = await res.json();
	if (result.error) {
		throw new Error("Could not show laptop");
   }
	return result;
  });
}

// Search the Laptop
export function searchLaptop(id) {
	return fetch('/v1/api/search' , {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/json'
		}),
		body: JSON.stringify({id})
	}).then(async res => {
		const result = await res.json();
		if (result.error) {
			throw new Error("Could not search laptop");
	   }
		return result;
	});
}

// Create new laptop
export function createLaptop(id, sn, employer){
	return fetch('/v1/api/create' , {
		method: 'POST',
		headers: new Headers({
			'Content-Type': ' application/json'
		}),
		body: JSON.stringify({id, sn, employer})
	}).then(async res => {
		let result = await res.json();
		if (result.error) {
		 	throw new Error("Could not create laptop");
		}
		return result;
	});
}

// Edit the laptop
export function editLaptop(id, sn, employer){
	return fetch('/v1/api/edit' , {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/json'
		}),
		body: JSON.stringify({id, sn, employer})
	}).then( async res => {
		let response = await res.json();
		if (response.error) {
			throw new Error("Could not change employer name");
		}
		return response;
	});
}

// Remove the laptop
export function removeLaptop(id){
	return fetch('/v1/api/remove' , {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/json'
		}),
		body: JSON.stringify({id})
	}).then( async res => {
		let response = await res.json();
		if (response.error) {
			throw new Error("Could not remove the laptop");
		}
		return response;
	});
}



