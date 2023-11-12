import {CapacitorConfig} from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'de.hsos.wa.recordz',
  appName: 'Recordz',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;
