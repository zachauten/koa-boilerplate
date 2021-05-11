import Koa from "koa";
import logger from "./middleware/logger";
import timer from "./middleware/timer";
import router from "./routes";

const koa = new Koa();

koa.use(timer)
	.use(router.routes())
	.use(router.allowedMethods())
	.use(logger)
	

const port = 3000;
console.log(`koa listening on port ${port}`);
koa.listen(port);
