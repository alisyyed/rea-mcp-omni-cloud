/**
 * 555 Universal Cloud MCP Foundry v6.5 - Zero-Cache Edge-Smart Worker Router
 * Engine: Rea OmniNexus (morluto/rea, 28 Tools) (rea)
 */
const GITHUB_API_LIVE_JSON_URL = "https://api.github.com/repos/alisyyed/rea-mcp-omni-cloud/contents/LIVE_MCP_URL.json?ref=main";
const GITHUB_RAW_LIVE_JSON_URL = "https://raw.githubusercontent.com/alisyyed/rea-mcp-omni-cloud/main/LIVE_MCP_URL.json";
const GITHUB_DISPATCH_URL = "https://api.github.com/repos/alisyyed/rea-mcp-omni-cloud/actions/workflows/perpetual_relay.yml/dispatches";
const AUTO_WAKE_GH_TOKEN = "";
const EDGE_CURATED_TOOLS = [{"name": "rea_doctor_and_status", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Verify rea checkout, binaries, and 24/7 Cloud VM health.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_discover_all_hidden_capabilities", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Runtime auto-introspection on the 24/7 Cloud VM: scans --help, Makefile, package.json, pyproject.toml, Cargo.toml, mcp.json, and all scripts/modules.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_run_any_subcommand_or_script", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Universal dynamic executor: invoke any discovered CLI subcommand, flag, or internal script inside rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_native_mcp_manifest_bridge", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Inspect and invoke native MCP definitions from `.codex-plugin/mcp.json`.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_capture", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/agentenv/capture.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_computer", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/agentenv/computer.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_solve", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/agentenv/solve.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_solve_cleanup", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/agentenv/solve_cleanup.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_test_capture", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/agentenv/test_capture.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_test_computer", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/agentenv/test_computer.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_test_solve", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/agentenv/test_solve.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_test_solve_cleanup", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/agentenv/test_solve_cleanup.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_rea_bridge", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/cutter/rea_bridge.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_test_private_acl", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/cutter/test_private_acl.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_hopper_bridge", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/hopper_bridge.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_hexrays_queries", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/ida/hexrays_queries.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_test_hexrays_queries", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/ida/test_hexrays_queries.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_rea_lldb_tracer", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/native/rea_lldb_tracer.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_test_rea_lldb_tracer", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/native/test_rea_lldb_tracer.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_core_context", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/pwndbg/core_context.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_launch", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/pwndbg/launch.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_launch_impl", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/pwndbg/launch_impl.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_test_core_context", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/pwndbg/test_core_context.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_decoder_runtime", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/pwntools/decoder_runtime.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_layout", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/pwntools/layout.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_layout_impl", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/pwntools/layout_impl.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_recorded_crash", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/pwntools/recorded_crash.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_mod_recorded_crash_impl", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Execute or inspect harvested module `bridge/pwntools/recorded_crash_impl.py` inside morluto/rea.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "rea_hexa_engine_bridge", "description": "[Rea OmniNexus (morluto/rea, 28 Tools)] Coordinate multi-engine tasks across Obscura, Radare2, Ghidra, IDA 9.5, LLM4Decompile, and Craft-Anything.", "inputSchema": {"type": "object", "properties": {"target_engine": {"type": "string", "description": "Target engine slug ('obscura', 'radare2', 'llm4decompile', 'ida_hexrays', 'craft_anything', 'ghidra')."}, "payload_json": {"type": "string", "description": "JSON payload to pass across the 6-engine bridge."}}}}];

async function triggerGithubAutoWake() {
  if (!AUTO_WAKE_GH_TOKEN) return false;
  try {
    const r = await fetch(GITHUB_DISPATCH_URL, {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + AUTO_WAKE_GH_TOKEN,
        "Accept": "application/vnd.github+json",
        "User-Agent": "555-Universal-MCP-Worker/3.2",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ref: "main" })
    });
    return r.status === 204 || r.status === 200;
  } catch (_) {
    return false;
  }
}

async function getLatestTunnelUrl() {
  if (AUTO_WAKE_GH_TOKEN) {
    try {
      const apiRes = await fetch(GITHUB_API_LIVE_JSON_URL + "&t=" + Date.now(), {
        headers: {
          "Authorization": "Bearer " + AUTO_WAKE_GH_TOKEN,
          "Accept": "application/vnd.github.raw+json",
          "User-Agent": "555-Universal-MCP-Worker/3.2",
          "X-GitHub-Api-Version": "2022-11-28"
        }
      });
      if (apiRes.ok) {
        return await apiRes.json();
      }
    } catch (_) {}
  }
  const res = await fetch(GITHUB_RAW_LIVE_JSON_URL + "?t=" + Date.now(), {
    headers: { "User-Agent": "555-Universal-MCP-Worker/3.2" }
  });
  if (!res.ok) throw new Error("Could not fetch LIVE_MCP_URL.json: HTTP " + res.status);
  return await res.json();
}

async function handleEdgeFallbackJsonRpc(body, upstreamErr, liveData) {
  const rpcId = body && body.id !== undefined ? body.id : 1;
  const method = (body && body.method) || "";
  const params = (body && body.params) || {};

  if (method === "initialize") {
    return {
      jsonrpc: "2.0",
      id: rpcId,
      result: {
        protocolVersion: "2025-03-26",
        capabilities: { tools: { listChanged: true } },
        serverInfo: { name: "rea-OmniNexus", version: "3.2.0" }
      }
    };
  }

  if (method === "notifications/initialized" || method.startsWith("notifications/")) {
    return { jsonrpc: "2.0", id: rpcId, result: {} };
  }

  if (method === "tools/list") {
    return {
      jsonrpc: "2.0",
      id: rpcId,
      result: { tools: EDGE_CURATED_TOOLS }
    };
  }

  if (method === "tools/call") {
    const tName = params.name || "";
    return {
      jsonrpc: "2.0",
      id: rpcId,
      result: {
        content: [{
          type: "text",
          text: JSON.stringify({
            status: "EDGE_HYBRID_RESPONSE",
            engine: "rea",
            title: "Rea OmniNexus (morluto/rea, 28 Tools)",
            tool_called: tName,
            arguments_received: params.arguments || {},
            obscura_first_bridge: "https://obscura-mcp-forever.forested-lung.workers.dev/mcp",
            live_relay_state: liveData || { status: "BOOTING_OR_WAKING", detail: String(upstreamErr || "Tunnel warming up (~20s)") }
          }, null, 2)
        }]
      }
    };
  }

  return { jsonrpc: "2.0", id: rpcId, result: {} };
}

export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Accept, MCP-Session-Id, Last-Event-ID"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    const url = new URL(request.url);
    let parsedBody = null;
    let rawBodyBuffer = undefined;
    if (request.method !== "GET" && request.method !== "HEAD") {
      rawBodyBuffer = await request.arrayBuffer();
      try {
        parsedBody = JSON.parse(new TextDecoder().decode(rawBodyBuffer));
      } catch (_) {}
    }

    if (parsedBody && parsedBody.method === "tools/call" && parsedBody.params && parsedBody.params.name === "gpu_cloudflare_workers_ai_infer") {
      const rpcId = parsedBody.id !== undefined ? parsedBody.id : 1;
      const args = parsedBody.params.arguments || {};
      const prompt = String(args.query || "Summarize GPU edge inference status in one sentence.");
      let model = "@cf/meta/llama-3.3-70b-instruct-fp8-fast";
      try {
        const parsedOpts = args.options_json ? JSON.parse(args.options_json) : {};
        if (parsedOpts.model) model = parsedOpts.model;
      } catch (_) {}
      if (env && env.AI) {
        try {
          const aiResp = await env.AI.run(model, { prompt: prompt });
          return new Response(JSON.stringify({
            jsonrpc: "2.0",
            id: rpcId,
            result: { content: [{ type: "text", text: JSON.stringify({ status: "CLOUDFLARE_WORKERS_AI_GPU_OK", model: model, output: aiResp }, null, 2) }] }
          }), { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } });
        } catch (aiErr) {
          return new Response(JSON.stringify({
            jsonrpc: "2.0",
            id: rpcId,
            result: { content: [{ type: "text", text: JSON.stringify({ status: "WORKERS_AI_ERROR", model: model, error: String(aiErr) }, null, 2) }] }
          }), { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } });
        }
      }
    }

    if (parsedBody && (
      parsedBody.method === "initialize" ||
      parsedBody.method === "notifications/initialized" ||
      parsedBody.method === "tools/list"
    )) {
      return new Response(JSON.stringify(await handleEdgeFallbackJsonRpc(parsedBody, null, null)), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }

    let live = null;
    try {
      live = await getLatestTunnelUrl();
      const mcpUrl = String((live && live.mcp_url) || "").trim();
      if (!mcpUrl.startsWith("https://")) {
        throw new Error("LIVE_MCP_URL.json mcp_url is warming up: " + JSON.stringify(mcpUrl));
      }
      const targetBase = mcpUrl.replace(/\/mcp\/?$/, "");
      const targetUrl = targetBase + url.pathname + url.search;

      if (request.method === "GET" && (url.pathname === "/status" || url.pathname === "/")) {
        return new Response(JSON.stringify({
          status: "UNIVERSAL_WORKER_ONLINE",
          engine: "rea",
          title: "Rea OmniNexus (morluto/rea, 28 Tools)",
          active_backend_mcp_url: live.mcp_url,
          updated_at: live.updated_at
        }, null, 2), {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders }
        });
      }

      const proxyReq = new Request(targetUrl, {
        method: request.method,
        headers: request.headers,
        body: rawBodyBuffer,
      });
      const resp = await fetch(proxyReq);
      if (resp.status === 530 || resp.status === 502) {
        await triggerGithubAutoWake();
        throw new Error("Upstream tunnel rotated (HTTP " + resp.status + ") - triggered Auto-Wake!");
      }
      const newHeaders = new Headers(resp.headers);
      newHeaders.set("Access-Control-Allow-Origin", "*");
      return new Response(resp.body, { status: resp.status, headers: newHeaders });
    } catch (err) {
      await triggerGithubAutoWake();
      if (parsedBody) {
        return new Response(JSON.stringify(await handleEdgeFallbackJsonRpc(parsedBody, err, live)), {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders }
        });
      }
      return new Response(JSON.stringify({
        status: "AUTO_WAKING_CLOUD_RELAY",
        engine: "rea",
        title: "Rea OmniNexus (morluto/rea, 28 Tools)",
        live_json_state: live,
        message: "Signaled your 24/7 GitHub Cloud Relay to wake (~25s)."
      }, null, 2), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }
  }
};
