import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitorCardServiceService {
  public name: string | undefined;
  public licNo: string | undefined;
  public mobile: string | undefined;
  public meetTo: string | undefined;
  public department: string | undefined;
  public purposeGroup: string | undefined;
  public purposeRemark: string | undefined;
  public timeIn: string | undefined;
  public timeOut: string | undefined;
  public otherRemark: string | undefined;
  public visitCard: string | undefined;
  public photo: string | undefined;

  constructor() { }

  setVisitorData(data: any) {
    this.name = data.name;
    this.licNo = data.licNo;
    this.mobile = data.mobile;
    this.meetTo = data.meetTo;
    this.department = data.department;
    this.purposeGroup = data.purposeGroup;
    this.purposeRemark = data.purposeRemark;
    this.timeIn = data.timeIn;
    this.timeOut = data.timeOut;
    this.otherRemark = data.otherRemark;
    this.visitCard = data.visitCard;
    this.photo = data.photo;
  }
}
