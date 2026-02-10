export default {
  async fetch(request, env) {

    if (request.method === "POST") {
      const data = await request.json();

      await env.DB.prepare(
        "INSERT INTO tasks (content) VALUES (?)"
      ).bind(data.content).run();

      return new Response("OK");
    }

    const { results } = await env.DB.prepare(
      "SELECT * FROM tasks"
    ).all();

    return new Response(JSON.stringify(results), {
      headers: { "Content-Type": "application/json" }
    });
  }
}
