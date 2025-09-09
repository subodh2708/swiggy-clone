// netlify/functions/menu.js
import fetch from "node-fetch";

export async function handler(event) {
  try {
    const { restaurantId } = event.queryStringParameters;

    if (!restaurantId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "restaurantId query param is required" }),
      };
    }

    const targetUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7855384&lng=80.969182&restaurantId=${restaurantId}`;

    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Swiggy menu API failed with ${response.status}`);
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
    console.error("Menu function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch menu data" }),
    };
  }
}
