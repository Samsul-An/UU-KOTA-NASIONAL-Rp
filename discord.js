export const config = { runtime: 'edge' };

export default async function handler(req) {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
    }

    const WEBHOOK = process.env.DISCORD_WEBHOOK_URL;
    if (!WEBHOOK) {
      return new Response(JSON.stringify({ error: 'Missing DISCORD_WEBHOOK_URL' }), { status: 500 });
    }

    // Accept multipart/form-data from client
    const inForm = await req.formData();

    // Rebuild a clean FormData to forward to Discord
    const outForm = new FormData();

    // Forward payload_json if present
    const payload = inForm.get('payload_json');
    if (payload) outForm.append('payload_json', payload);

    // Forward any files[*], cap at 3 for safety
    const files = [];
    for (const [key, val] of inForm.entries()) {
      if (key.startsWith('files[') && val instanceof File) {
        files.push([key, val]);
      }
    }
    files.slice(0, 3).forEach(([key, file]) => {
      outForm.append(key, file, file.name);
    });

    const resp = await fetch(WEBHOOK, { method: 'POST', body: outForm });
    if (!resp.ok) {
      const text = await resp.text();
      return new Response(JSON.stringify({ error: 'Discord error', detail: text }), { status: 500 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: e?.message || 'Unknown error' }), { status: 500 });
  }
}
