import alfy from "alfy";

const content = process.argv[2];
const API = process.env.API || "";
const tag = process.env.TAG || "";

alfy
	.fetch(API, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		json: {
			content: `${content} 
            ${tag}`,
		},
	})
	.then((data) => {
		// alfred post notification
		console.log(data.message);
	})
	.catch((error) => {
		console.log(data.message);
	});
