import { getCompanies, getPassports, getPollutions } from '@/actions/basic-actions/actions';
import CarcinogenicRiskContent from './CarcinogenicRiskContent';
import { PollutionType, passportsWithCompaniesType } from '@/types';


const CarcinogenicRiskPage = async () => {
    const companies = await getCompanies();
    const passports = await getPassports();
    const pollutions = await getPollutions();

    const companyNames = companies.map(company => (company.name));

    const passportsWithCompanies = passports.map(passport => ({
        ...passport,
        company_name: companies.find(company => company.id === passport.company_id).name
    }));

    return (
        <CarcinogenicRiskContent
            pollutions={pollutions as PollutionType[]}
            companyNames={companyNames as string[]}
            passportsWithCompanies={passportsWithCompanies as passportsWithCompaniesType[]}
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

