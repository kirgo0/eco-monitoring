
export interface CustomServerResponse {
    statusCode: number;
    isSuccess: boolean;
    errorMessages: string[];
    result: any[];
}


export interface CompanyType {
    name: string;
    description: string;
    location: string
    id: number;
}

export interface PassportType {
    id: number
    company_id: string,
    year: string
}

export interface passportsWithCompaniesType extends PassportType {
    company_name: string
}