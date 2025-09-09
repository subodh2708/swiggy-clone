// netlify/functions/restaurants.js
import fetch from "node-fetch";

export async function handler(event, context) {
  try {
    // Take URL from query param or use default
    const apiUrl =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7855384&lng=80.969182&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const response = await fetch(apiUrl);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch Swiggy data" }),
    };
  }
}
