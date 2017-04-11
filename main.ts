import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { DataService } from './app/services/data.service';

platformBrowserDynamic().bootstrapModule(AppModule);