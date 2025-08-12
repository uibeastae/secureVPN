import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.a27968d1f2294f8cb8a67bb07b2e4810',
  appName: 'flow-vpn',
  webDir: 'dist',
  server: {
    url: 'https://a27968d1-f229-4f8c-b8a6-7bb07b2e4810.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#1a1a1a',
      showSpinner: false,
    },
  },
};

export default config;