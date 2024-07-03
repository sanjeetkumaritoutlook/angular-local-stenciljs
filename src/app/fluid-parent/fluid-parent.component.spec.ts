import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { FluidParentComponent } from './fluid-parent.component';
import {
  formatDisplayNumberWithDecimalWithSpace,
  formatDisplayPercentageOrDecimalWithSpace,
} from './utils/maskingfn';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { DatePipe } from '@angular/common';
describe('FluidParentComponent', () => {
  let component: FluidParentComponent;
  let fixture: ComponentFixture<FluidParentComponent>;
  let elements = [];

  let setPremPayValueSpy: jasmine.Spy;
  let sets1exceptioncountSpy: jasmine.Spy;
  let endoresementValuesSpy: jasmine.Spy;
  let setPremiumValueForHagaueInvoiceSpy: jasmine.Spy;
  let setCurrencyForHagueSpy: jasmine.Spy;
  let setAutoNumberingHeaderGpeSpy: jasmine.Spy;
  let setEndorsementCountDublinFiSPy: jasmine.Spy;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [FluidParentComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: DatePipe },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluidParentComponent);
    component = fixture.componentInstance;
    // elements = component.punctuatedLondonCASConfig.elements;
    // setPremPayValueSpy = spyOn(component, 'setPremPayValue');
    // endoresementValuesSpy = spyOn(component, 'onEndoresementValues');
    // setPremiumValueForHagaueInvoiceSpy = spyOn(
    //   component,
    //   'setPremiumValueForHagaueInvoice'
    // );
    // setCurrencyForHagueSpy = spyOn(component, 'setCurrencyForHagueInvoice');
    // setAutoNumberingHeaderGpeSpy = spyOn(
    //   component,
    //   'setAutoNumberingHeaderGpe'
    // );
    // setEndorsementCountDublinFiSPy = spyOn(
    //   component,
    //   'setEndorsementCountDublinFi'
    // );
    // sets1exceptioncountSpy = spyOn(component, 'sets1exceptioncount');
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Should check component logic and events', () => {
    it('Should load policy data', () => {
      const data = component.initilPolicyData;
      component.initilPolicyData;
      expect(component.initilPolicyData).toEqual(data);
    });

    it('Should handle data : handleValueChanged()', () => {
      const params = { name: 'business_description', value: 'test' };
      // component.setPremPayValue(params.name, params.value, 'formName');
      // component.sets1exceptioncount(params.name, params.value);
      // component.onEndoresementValues(
      //   params.value,
      //   component.punctuatedLondonCASConfig,
      //   'data_path',
      //   component.punctuatedLondArr,
      //   'formName'
      // );
      // component.setCurrencyForHagueInvoice('test', 'formName');
      // component.setEndorsementCountDublinFi(
      //   params.name,
      //   params.value,
      //   'formName'
      // );

      component.handleValueChanged(params, 'formName');

      expect(setPremPayValueSpy).toHaveBeenCalled();
      // expect(component.setPremPayValue).toHaveBeenCalled();
      expect(sets1exceptioncountSpy).toHaveBeenCalled();
      expect(setPremiumValueForHagaueInvoiceSpy).toHaveBeenCalled();
      expect(setCurrencyForHagueSpy).toHaveBeenCalled();
      expect(setEndorsementCountDublinFiSPy).toHaveBeenCalled();
    });

    it('Should set S1 Exception Header : setS1exceptionHeader()', () => {
      // let s1exceptioncount1 = component.setS1exceptionHeader(1);
      // let s1exceptioncount2 = component.setS1exceptionHeader(2);
      // let s1exceptioncount3 = component.setS1exceptionHeader(3);
      // let s1exceptioncount4 = component.setS1exceptionHeader(4);
      // let count = component.setS1exceptionHeader(5);
      // expect(s1exceptioncount1).toBe(
      //   'Exception 4 is added to Exceptions applicable to Section 1 - Employers Liability'
      // );
      // expect(s1exceptioncount2).toBe(
      //   'Exceptions 4 and 5 are added to Exceptions applicable to Section 1 - Employers Liability'
      // );
      // expect(s1exceptioncount3).toBe(
      //   'Exceptions 4, 5 and 6 are added to Exceptions applicable to Section 1 - Employers Liability'
      // );
      // expect(s1exceptioncount4).toBe(
      //   'Exceptions 4, 5, 6 and 7 are added to Exceptions applicable to Section 1 - Employers Liability'
      // );
      // expect(count).toBe('');
    });

    it('Should set General Policy Concition Header: setGeneralPolicyConditionsHeader()', () => {
      // let generalpolicycondcount1 =
      //   component.setGeneralPolicyConditionsHeader(1);
      // let generalpolicycondcount2 =
      //   component.setGeneralPolicyConditionsHeader(2);
      // let generalpolicycondcount3 =
      //   component.setGeneralPolicyConditionsHeader(3);
      // let generalpolicycondcount4 =
      //   component.setGeneralPolicyConditionsHeader(4);
      // expect(generalpolicycondcount1).toBe(
      //   'Condition 21 is added to General Policy Conditions'
      // );
      // expect(generalpolicycondcount2).toBe(
      //   'Conditions 21 and 22 are added to General Policy Conditions'
      // );
      // expect(generalpolicycondcount3).toBe(
      //   'Conditions 21, 22 and 23 are added to General Policy Conditions'
      // );
      // expect(generalpolicycondcount4).toBe(
      //   'Conditions 21, 22, 23 and 24 are added to General Policy Conditions'
      // );
      //expect(component).toBeTruthy();
    });

    it('should update the components validity to true when the event output is true', () => {
      const mockDetail = { valid: true, errors: {}, rawValue: { test: 'one' } };
      component.onFormEvent('formChanged', mockDetail);
      component.eventOutput;
      expect(component.formValid).toEqual(true);
    });
  });

  describe('Should check forms: config file', () => {
    it(`Policy Wording must have Select elementType`, () => {
      for (let i = 0; i < elements.length; i += 1) {
        if (elements[i].controlName == 'policy_wording') {
          expect(elements[i].elementType).toEqual('select');
        }
      }
    });

    it(`Depth Measurement must have combo-box elementType`, () => {
      for (let i = 0; i < elements.length; i += 1) {
        if (elements[i].controlName == 'depth_measurement') {
          expect(elements[i].elementType).toEqual('combo-box');
        }
      }
    });

    it(`Should Select at least one drop down option`, () => {
      for (let i = 0; i < elements.length; i += 1) {
        if (elements[i].controlName == 'policy_wording') {
          elements[i].value = 'Dublin Primary Wording';
          expect(elements[i].value).toEqual('Dublin Primary Wording');
        }
      }
    });

    it('Data Protection Sublimit must be an International Number format', () => {
      let value = '12345';
      let result = formatDisplayNumberWithDecimalWithSpace(value);
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].controlName == 'dp_sublimit') {
          expect(result).toBe('12,345.00');
        }
      }
    });

    it('Must be a numberic Value', () => {
      let value = 12345;
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].controlName == 'dp_sublimit') {
          expect(value).toMatch(/^[0-9]\d*(\.\d+)?$/);
        }
      }
    });

    it(`JCT 21 must have radio-group elementType`, () => {
      for (let i = 0; i < elements.length; i += 1) {
        if (elements[i].controlName == 'jct21') {
          expect(elements[i].elementType).toEqual('radio-group');
        }
      }
    });

    it(`JCT 21 must have initialValue`, () => {
      for (let i = 0; i < elements.length; i += 1) {
        if (elements[i].controlName == 'jct21') {
          expect(elements[i].initialValue).toEqual('false');
        }
      }
    });

    it(`Amount Payable %' must be a 'Percentage' value`, () => {
      let value = '12345';
      let result = formatDisplayPercentageOrDecimalWithSpace(value);
      for (let i = 0; i < elements.length; i += 1) {
        if (elements[i].controlName == 'amount_payable_pct') {
          expect(result).toBe('12345%');
        }
      }
    });
  });
});
