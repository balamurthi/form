import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam'; // Import Webcam related classes
import { Subject } from 'rxjs'; // Import Subject from RxJS
import {VisitorCardServiceService} from '../Services/visitor-card-service.service'

@Component({
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.component.html',
  styleUrls: ['./visitor-form.component.css']
})
export class VisitorFormComponent implements OnInit {
  public name:string | undefined;
  public licno:string  | undefined;
  public mobile:string  | undefined;
  public meetTo:string  | undefined;
  public department:string | undefined;
  public purposeremark:string  | undefined;
  public purposegroup:string  | undefined;
  public timein:string  | undefined;
  public timeout:string  | undefined;
  public otherremark:string  | undefined;
  public visitcard:string  | undefined;
  


[x: string]: any;
  public photo: string | undefined;
  public triggerObservable: Subject<void> = new Subject<void>(); // Initialize Subject
FIRST: any;
public service : VisitorCardServiceService| undefined;

// dependancy Injection in angular
  constructor( public vservice: VisitorCardServiceService ) { 

    this.service= vservice;
  }

  ngOnInit(): void {
    
    
    // Initialize webcam
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        if (mediaDevices && mediaDevices.length) {
          this.triggerObservable.next();
        }
      });
  }
  capturePhoto(): void {
    this.triggerObservable.next();
  }

  handleImageCapture(webcamImage: WebcamImage): void {
    this.photo = webcamImage.imageAsDataUrl;
  }

  // Handle webcam errors
  webcamError(error: WebcamInitError): void {
    console.error('Error initializing webcam: ', error);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = form.value; // Assuming form.value contains all the provided data
      this.vservice.setVisitorData(formData);
    }
  }
  currentPage: number = 1;
  totalPages: number = 2; // Total number of pages in the form

  nextPage() {
    // load forms value from first page
    this.vservice.name= this.name;
    this.vservice.licNo= this.licno;
    this.vservice.mobile= this.mobile;
    this.vservice.meetTo= this.meetTo;
    this.vservice.department= this.department;
    this.vservice.purposeRemark= this.purposeremark;
    this.vservice.purposeGroup= this.purposegroup;
    this.vservice.timeIn= this.timein;
    this.vservice.timeOut= this.timeout;
    this.vservice.otherRemark= this.otherremark;
    this.vservice.visitCard= this.visitcard;
    this.vservice.photo= this.photo;

    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.name= this.vservice.name;
    }
  }
  printForm() {
    window.print();
  }
}

