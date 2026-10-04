import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { App } from './app';
describe('App', () => { it('loads youth mental health case reviews from the API', () => { TestBed.configureTestingModule({ imports: [App], providers: [provideHttpClient(), provideHttpClientTesting()] }); const fixture = TestBed.createComponent(App); const http = TestBed.inject(HttpTestingController); http.expectOne('/api/items').flush([]); fixture.detectChanges(); expect((fixture.nativeElement as HTMLElement).querySelector('h1')?.textContent).toContain('Youth Mental Health Room'); http.verify(); }); });
