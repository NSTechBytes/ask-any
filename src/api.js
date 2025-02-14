async function askOpenRouter(userMessage, model, apiKey, signal) {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "model": model,
        "messages": [{ "role": "user", "content": userMessage }],
      }),
      signal, // Pass the abort signal here.
    });

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "No response.";
  } catch (error) {
    if (error.name === 'AbortError') {
      return "Request cancelled.";
    }
    return "⚠️ Error fetching response. Check your API key or internet connection.";
  }
}

module.exports = { askOpenRouter };
