import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { AppConfigService } from './app/services/AppConfigService';
import { HttpClient } from '@angular/common/http';


async function main() {
  // Temporary injector to load config before app starts
  const response = await fetch('/assets/config.json');
  const config = await response.json();
  (window as any).__appConfig = config; // optional global access
 
  await bootstrapApplication(App, appConfig);
}

main().catch(err => console.error(err));

