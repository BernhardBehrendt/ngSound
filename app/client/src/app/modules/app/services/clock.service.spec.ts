import {TestBed, inject} from '@angular/core/testing';

import {ClockService} from './clock.service';

describe('ClockService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ClockService]
        });
    });

    it('should be created', inject([ClockService], (service: ClockService) => {
        expect(service).toBeTruthy();
    }));

    it('should start and stop the clock', inject([ClockService], (service: ClockService) => {
        expect(service.isPlaying()).toBe(false);
        service.start();
        expect(service.isPlaying()).toBe(true);
        service.stop();
        expect(service.isPlaying()).toBe(false);
    }));

    it('should set and provide BPM', inject([ClockService], (service: ClockService) => {
        const bpmCount = 123;

        expect(service.getBpm()).toBeDefined();

        // Test integer values
        service.setBpm(bpmCount);
        expect(service.getBpm()).toEqual(bpmCount);

        service.setBpm(bpmCount / 2);
        expect(service.getBpm()).toEqual(Math.round(bpmCount / 2));

    }));


});
