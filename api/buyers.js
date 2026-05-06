module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  try {
    const data = req.body || {};
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) return res.status(500).json({ error: "Telegram env vars are missing" });

    const message =
      "🆕 Новая заявка от покупателя!\n" +
      `Имя: ${data.name || "-"}\n` +
      `Компания: ${data.company || "-"}\n` +
      `Телефон: ${data.phone || "-"}\n` +
      `Email: ${data.email || "-"}\n` +
      `Продукты: ${(data.products || []).join(", ") || "-"}\n` +
      `Объем: ${data.volume || "-"}\n` +
      `Город: ${data.city || "-"}\n` +
      `Комментарий: ${data.comment || "-"}`;

    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: message })
    });
    if (!tgRes.ok) return res.status(502).json({ error: "Telegram send failed" });
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ error: "Server error" });
  }
};
