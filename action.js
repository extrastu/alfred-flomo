const content = process.argv[2];
const API = process.env.API || "";
const tag = process.env.TAG || "";

fetch(API, {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		content: `${content} 
            ${tag}`,
	}),
})
	.then((response) => response.json())
	.then((data) => {
		// alfred post notification
		console.log(data.message);
	})
	.catch((error) => {
		console.log(data.message);
	});
