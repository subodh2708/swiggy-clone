// netlify/functions/menu.js
import fetch from "node-fetch";

export async function handler(event) {
  const { resId } = event.queryStringParameters;

  if (!resId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing resId" }),
    };
  }

  try {
    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7855384&lng=80.969182&restaurantId=${resId}`;

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Swiggy API error: ${response.status}`);
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.error("Failed to fetch menu:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch Swiggy menu" }),
    };
  }
}
