export async function askBackend(userInput: string): Promise<string> {
  const response = await fetch("http://localhost:8000/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input: userInput }),
  });

  if (!response.ok) {
    // If backend returns an error
    const errorText = await response.text();
    throw new Error(`Backend error (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  return data.response ?? "No response received.";
}
