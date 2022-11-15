import alfy from "alfy";

const content = process.argv[2];
const API = process.env.API || "";

let items = [];

if (API == "") {
	items = [
		{
			title: "尚未设置 API",
			subtitle: "请在 workflow 配置中设置 API",
		},
	];
} else {
	items = [
		{
			title: `发送 ${content} 到 flomo`,
			arg: alfy.input,
		},
	];
}

alfy.output(items);
