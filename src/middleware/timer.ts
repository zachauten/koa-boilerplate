import { Context } from "koa";

export default async function (ctx: Context, next: any) {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	ctx.set("X-Response-Time", `${ms}ms`);
}
