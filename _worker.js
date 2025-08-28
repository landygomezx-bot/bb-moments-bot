export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    // CORS（允许你网页调这个接口）
    const cors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    };
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });

    if (url.pathname === "/ping") {
      return new Response("OK", { headers: cors });
    }

    // 预留：搜索、通知、自动贴子等后面逐步加
    return new Response("bb-moments-bot is alive", { headers: cors });
  }
}
