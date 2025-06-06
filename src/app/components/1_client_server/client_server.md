https://bytegrad.com/app/professional-react-and-nextjs/nextjs-client-vs-server-overview

**client/server**

- you can wrap a server component with a client component without making it a client component when you are not
  importing server one component into client component. When using children pattern we are actually doing just that.
- Generally what is important - is what is imported where if ther's a server component imported directly to some
  client component - than it becomes a client

'use client'
export const ClientWrapper = ({children}: {children: React.ReactNode}) => {
return (
<button onClick={() => alert('I am a client')}>
{children}
</button>
);
};

In server components `rendering happens on the server` but the result of that rendering is than parsed to the client
and we can see that result there. Thanks to that we can do all the heave lifting on the server.

The 'server' is a computer, or cloud server or whatever where the app is running. For example during development it
is a local machine, onn prod it can be a serverless envorienment like Vercel or some server that you rent.
When the user visits the page, the user's browser - client - is making a request to the server.
In the context of server side code that is where all of it is happening and where you would ideally place all of the
API calls, expensive calculations stuff like this. After running the code the result is generated as HTML CSS and
sometimes JSON, and then it is send to the client.

The server is usually more secure and has more power, it keeps sensitive data from the user thus being more secure,
it reduces the amount of work that needs to be done by the client.

1. Browser requests the page
2. The server runs server side logic
3. Server sends back the rendered HTML
4. The browser displays html to the user
5. If there are any client components they get hydrated and become interactive.
6.

Where is the server?
In development: your own computer.
In production: wherever you deploy your app (Vercel, AWS, DigitalOcean, etc.).
With serverless: each request may spin up a new “server” (function) for a short time.

Summary:

Server = where your app is hosted/running, does heavy lifting.
Client = user’s browser, does UI rendering and interaction.
Do expensive work on the server for speed, security, and scalability.

`Rendering` in web development (including Next.js) means:

Taking your code (React components, data, etc.)
_Running it to produce the final HTML (and sometimes CSS/JS) that the browser can display_
So, rendering = _running code that generates the UI_.

Examples:
`On the server: Rendering means running your React components (with any data) to produce HTML that will be sent to the browser.`
`On the client: Rendering means React takes the JavaScript code and builds the UI in the browser.`
In short:

# Rendering = running code that creates the visible output (HTML, UI) for the user.

- `middleware` - is just the action that runs between the client and the server, so whenever a client is making a
  request - we can do something in between like check aut
