export default {
  async fetch(request, env) {
    if (request.method === "POST") {
      const data = await request.json();

      await env.DB.prepare(
        "INSERT INTO game_logs (session_id, event_type, event_data) VALUES (?, ?, ?)"
      )
      .bind(data.session_id, data.event_type, data.event_data)
      .run();

      return new Response("OK");
    }

    return new Response("Only POST allowed");
  }
}
