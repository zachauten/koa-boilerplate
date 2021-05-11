import ReactDOMServer from "react-dom/server";
import React from "react";
import Router from "@koa/router";
import { Context } from "koa";
import { App } from "../components/app";

const router = new Router();

router.get("/", async (ctx: Context, next: any) => {
	const title = "Zach";
  const [start, end] = html(title);
	const stream = ReactDOMServer.renderToNodeStream(<App name={title}/>);

  ctx.res.writeHead( 200, { "Content-Type": "text/html" } );
  ctx.res.write(start);
  stream.pipe(ctx.res, { end: false });
  stream.on("end", () => {
    ctx.res.write(end);
    ctx.res.end();
  })

	await next();
});

function html(title: string) {
  const start = `
    <!doctype html>
    <html lang="en">
      <head>
      <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
      <meta charset="utf-8"/>
      <title>${title}</title>
      </head>
      <body>
        <div id=root>`;
    const end = `
      </div>
      <script type="application/javascript" src=""></script>
      <script type="application/javascript">
        ReactDOM.hydrate(React.createElement(App, {}, null),
        document.getElementById('root'));
      </script>
      </body>
    </html>`;
  return [start, end];
}

export default router;