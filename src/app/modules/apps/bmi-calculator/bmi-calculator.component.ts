import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.scss']
})
export class BmiCalculatorComponent implements OnInit, OnDestroy {

  thisComponentRef = new Subject()
  bmiForm: FormGroup
  bmiData: number = 0
  disableCalculate = true
  constructor(private _formBuilder: FormBuilder) {
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
    return Validators.compose([Validators.min(10), Validators.max(maxValue), Validators.required])
  }

  calculateBmi() {
    const { height, weight } = this.bmiForm.getRawValue()
    const intHeight = parseInt(height)
    const intWeight = parseInt(weight)
    this.bmiData = (intWeight / intHeight / intHeight) * 10000
  }

  ngOnDestroy() {
    this.thisComponentRef.unsubscribe()
  }
}
