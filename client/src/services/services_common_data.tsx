const BaseUrl = 'http://localhost:3030';

export const commonHeaders: Record<string, string> = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*',
};

export const fetchReq = async (url: string, parameters: Record<string, unknown> = {}) => fetch(`${BaseUrl}/${url}`, parameters)
	.then(async response => response.json())
	.catch(err => {
		console.log(err);
	});
