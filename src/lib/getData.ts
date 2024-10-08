export async function getData(endpoint: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/api/${endpoint}`, {
      cache: "no-store",
    });

    // Check if the response status is OK (status 200-299)
    if (!response.ok) {
      if (response.status === 404) {
        console.log("Resource not found (404)");
      } else {
        console.log(`Error: ${response.statusText} (${response.status})`);
      }
    }
 
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
}
