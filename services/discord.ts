
// Discord integration has been removed.
// This file is kept as a placeholder to avoid breaking any lingering imports, 
// though none should exist.

export async function setupDiscordSdk() {
  console.warn("Discord SDK is disabled.");
  return { sdk: null, auth: null };
}
