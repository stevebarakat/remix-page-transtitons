import type { MetaFunction } from "@remix-run/node";
import {
    Link,
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import PageTransition from "./components/PageTransition";
import AnimatedOutlet from "./components/AnimatedOutlet";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <PageTransition>
          <AnimatedOutlet/>
          </PageTransition>
          <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
