import { ObjectId } from "mongodb";

export class Agent {
  public _id: ObjectId | string;
  public fname: string;
  public lname: string;
  public description: string;

  constructor(
    _id: ObjectId,
    fname: string,
    lname: string,
    description: string
  ) {
    this._id = _id.toString();
    this.fname = fname;
    this.lname = lname;
    this.description = description;
  }
}
