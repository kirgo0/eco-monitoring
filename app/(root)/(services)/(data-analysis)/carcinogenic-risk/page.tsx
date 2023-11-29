import { getCompanies, getPassports, getPollutions } from '@/actions/basic-actions/actions';
import CarcinogenicRiskContent from './CarcinogenicRiskContent';
import { CompanyType, PassportType, PollutionType, passportsWithCompaniesType } from '@/types';


const CarcinogenicRiskPage = async () => {
    const companies = await getCompanies();
    const passports = await getPassports();
    const pollutions = await getPollutions();

    const companyNames = companies.map(company => (company.name));
    const pollutionNames = pollutions.map(pollution => (pollution.factor_Name));

    const passportsWithCompanies = passports.map(passport => ({
        ...passport,
        company_name: companies.find(company => company.id === passport.company_id).name
    }));

    return (
        <CarcinogenicRiskContent
            companies={companies as CompanyType[]}
            passports={passports as PassportType[]}
            pollutions={pollutions as PollutionType[]}
            companyNames={companyNames as string[]}
            passportsWithCompanies={passportsWithCompanies as passportsWithCompaniesType[]}
            pollutionNames={pollutionNames as string[]}

        />

        // <CarcinogenicRiskContent
        //     companies={[] as CompanyType[]}
        //     passports={[] as PassportType[]}
        //     companyNames={[] as string[]}
        //     passportsWithCompanies={[] as passportsWithCompaniesType[]}
        // />

    )
}

export default CarcinogenicRiskPage

