import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {MainComponent} from './main.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('MainComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                MainComponent
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(MainComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'ngsound'`, async(() => {
        const fixture = TestBed.createComponent(MainComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('ngsound');
    }));

    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(MainComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('ngsound');
    }));
});
