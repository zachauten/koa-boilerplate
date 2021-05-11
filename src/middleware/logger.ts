import { Context } from "koa";

export default async function (ctx: Context, next: any) {
	await next();
	const rt = ctx.response.get("X-Response-Time");
	console.log(`${ctx.method} ${ctx.url} - ${rt}`)
}
