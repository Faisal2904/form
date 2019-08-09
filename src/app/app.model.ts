export class AppModel{
  public bookingName:string;
  public plateCount:string;
  public email:string;
  public bookingDate:string;



  
  constructor(bookingName,plateCount,email,bookingDate){
    this.bookingName=bookingName;
    this.plateCount=plateCount;
    this.email=email;
    this.bookingDate=bookingDate;
    

    
  }
}