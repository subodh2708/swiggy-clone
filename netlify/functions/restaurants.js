// netlify/functions/restaurants.js
import fetch from "node-fetch";

export async function handler() {
  try {
    const targetUrl =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7855384&lng=80.969182&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Swiggy API failed with ${response.status}`);
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (error) {
    console.error("Netlify function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch Swiggy data" }),
    };
  }
}
