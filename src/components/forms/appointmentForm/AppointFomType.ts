export interface Root {
    paymentStatus: string
    patientDetails: PatientDetails
    doctorDetails: DoctorDetails
    token: string
  }
  
  export interface PatientDetails {
    firstName: string
    lastName: any
    age: any
    gender: string
    place: string
    phone: any
  }
  
  export interface DoctorDetails {
    dept: string
    name: string
    date: string
    fees: string
  }
  