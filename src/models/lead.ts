export enum TypeOfService {
  OfficeCleaning = 'Office Cleaning',
  ConstructionSiteCleaning = 'Construction Site Cleaning',
  IndustrialCleaning = 'Industrial Cleaning',
  SportsCleaning = 'Sports Cleaning',
  RealEstateCleaning = 'Real Estate Cleaning',
  HospitalityCleaning = 'Hospitality Cleaning',
  CinemaCleaning = 'Cinema Cleaning',
  AirportCleaning = 'Airport Cleaning'
}

export interface Lead {
  id: number;
  leadNumber: string;
  fullname: string;
  email: string;
  phone: string;
  address: string;
  typeOfService: TypeOfService;
  createdAt: string;
}