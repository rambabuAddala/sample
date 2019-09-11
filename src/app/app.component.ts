import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {localStorageService} from "./localStorage.Service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  contactForm: FormGroup;
  title = 'sampleAng2Form';
   constructor(private storageService:localStorageService) {
   this.contactForm = new FormGroup({
	   'firstName': new FormControl('',  [Validators.required]),
	   'lastName': new FormControl('',  [Validators.required]),
	   'age': new FormControl('',  [Validators.required]),
	 })
  }

  onSubmit() {    
	 console.log(this.contactForm.value)
	 // POST request or whatever
	}


  ngOnInit() {
  	let data=this.storageService.get();
  	console.log("data:",data);
    this.contactForm.setValue({
	  firstName: data.firsName, 
	  lastName: data.lastName,
	  age: data.age
	});


  this.contactForm.valueChanges.subscribe(() => {
  	this.store();
 });
  }


  store(): void {
  	let form=this.contactForm.value;
    this.storageService.push({ firsName: form.firstName , lastName: form.lastName, age: form.age });
  }
}
