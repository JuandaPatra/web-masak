export async function getResepBySearch(query: string) {
    try {
        const response = await fetch(`http://localhost:8000/api/reseps?search=${encodeURIComponent(query)}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching search results:", error);
        return null;
    }
}