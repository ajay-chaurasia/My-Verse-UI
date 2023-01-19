import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.scss']
})
export class BmiCalculatorComponent implements OnInit, OnDestroy {

  thisComponentRef = new Subject()
  bmiForm: UntypedFormGroup
  bmiValue: number = 0
  bmiColorStyle: object = {
    'color': 'black'
  }
  disableCalculate = true
  constructor(private _formBuilder: UntypedFormBuilder) {
      this.bmiForm = this._formBuilder.group({
        age: [null, this.getNumericValidators(100)],
        gender: [null, Validators.required],
        height: [null, this.getNumericValidators()],
        weight: [null, this.getNumericValidators()]
      })
    }

  ngOnInit() {
      this.bmiForm.valueChanges.pipe(
        takeUntil(this.thisComponentRef),
        map(formData => {
          this.disableCalculate = this.bmiForm.status !== 'VALID'
        })
      ).subscribe()
    }

  getNumericValidators(maxValue: number = 500): ValidatorFn | null {
      return Validators.compose([
        Validators.min(10),
        Validators.max(maxValue),
        Validators.required,
        Validators.pattern('^[0-9]*')
      ])
    }

  calculateBmi() {
      const { height, weight } = this.bmiForm.getRawValue()
      const intHeight = parseInt(height)
      const intWeight = parseInt(weight)
      this.bmiValue = (intWeight / intHeight / intHeight) * 10000
      this.bmiColorStyle = {
        'color': this.bmiValue > 25
          ? 'red'
          : this.bmiValue > 19
            ? 'green'
            : 'orange'
      }
    }

  ngOnDestroy() {
      this.thisComponentRef.unsubscribe()
    }
  }
