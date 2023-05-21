import { ObjectId } from "mongodb";

export class InsuranceForm {
  public _id: ObjectId | string;
  public fname: string;
  public lname: string;
  public dob: string;
  public phone: string;
  public email: string;
  public addressLine1: string;
  public addressLine2: string;
  public city: string;
  public state: string;
  public zip: number;
  public coverageType: string;
  public coverageAmount: string;
  public beneficiary: string;
  public healthRating: string;
  public medicalConditions: string[];
  public tobaccoUse: boolean;

  constructor(
    _id: ObjectId,
    fname: string,
    lname: string,
    dob: string,
    phone: string,
    email: string,
    addressLine1: string,
    addressLine2: string,
    city: string,
    state: string,
    zip: number,
    coverageType: string,
    coverageAmount: string,
    beneficiary: string,
    healthRating: string,
    medicalConditions: string[],
    tobaccoUse: boolean
  ) {
    this._id = _id.toString();
    this.fname = fname;
    this.lname = lname;
    this.dob = dob;
    this.phone = phone;
    this.email = email;
    this.addressLine1 = addressLine1;
    this.addressLine2 = addressLine2;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.coverageType = coverageType;
    this.coverageAmount = coverageAmount;
    this.beneficiary = beneficiary;
    this.healthRating = healthRating;
    this.medicalConditions = medicalConditions;
    this.tobaccoUse = tobaccoUse;
  }
}
