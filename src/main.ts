import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements } from 'stenciljs-components/loader';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
//import { defineCustomElements } from 'stenciljs-cop/loader';
//add stencil local in new file
import { fluidEnvironments } from '../fluid';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
//defineCustomElements();
// Initialize the custom elements
defineCustomElements(window);

const script = document.createElement('script');

/**
 * Set this to dev, test, prod or local to switch environments
 * for the sandbox
 */
export const fluid = fluidEnvironments.external;

if ('noModule' in script) {
  script.type = 'module';
  script.src = fluid.esm;
} else {
  script.type = 'text/javascript';
  script.src = fluid.legacy;
}
document.head.appendChild(script);