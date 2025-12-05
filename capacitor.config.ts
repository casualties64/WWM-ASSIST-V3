
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.wwm.companion',
  appName: 'Winds Meet Assistant',
  webDir: 'dist',
  server: {
    // This allows the WebView to load resources from these external domains.
    // It is required for loading the AI engine, logo, chess pieces, and core libraries from CDNs.
    allowNavigation: [
      'aistudiocdn.com',
      'cdn.tailwindcss.com',
      'i.imgur.com',
      'unpkg.com',
      'play-lh.googleusercontent.com',
      'preview.redd.it',
      'mapgenie.io',
      'yysls-map.6fast.com',
      'boarhat.gg'
    ]
  }
};

export default config;
