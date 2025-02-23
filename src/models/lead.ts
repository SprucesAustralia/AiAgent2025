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
  fullname: string;
  email: string;
  phone: string;
  typeOfService: TypeOfService;
  createdAt: string;
}