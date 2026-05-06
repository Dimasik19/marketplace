module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  try {
    const webhookUrl = process.env.GOOGLE_SCRIPT_WEBAPP_URL;
    if (!webhookUrl) return res.status(500).json({ error: "Google webhook env var is missing" });
    const pushRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body || {})
    });
    if (!pushRes.ok) return res.status(502).json({ error: "Google Sheets push failed" });
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ error: "Server error" });
  }
};
