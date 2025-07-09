import html from './dist/insta-app/browser/index.html';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // API route
    if (url.pathname === "/api/data") {
      return new Response(
        JSON.stringify({ data: "Dynamic!" }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    // Serve index.html for all other routes (Angular SPA routing)
     return new Response(html, {
      headers: { "Content-Type": "text/html" }
    });
  }
};