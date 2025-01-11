const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "c59de1241d66479c9f7698270e0ec86b" // Corrected variable name for consistency
const redirectUri = "http://localhost:3000/"; // Changed to "redirectUri" for consistent naming
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
