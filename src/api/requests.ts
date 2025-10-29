export async function askBackend(userInput: string) {
  const response = await fetch("http://localhost:8000/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input: userInput }),
  });

  const data = await response.json();
  return data.response;
}
