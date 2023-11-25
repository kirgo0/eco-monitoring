import { getCompanies, getPassports } from '@/actions/basic-actions/actions';
import CarcinogenicRiskContent from './CarcinogenicRiskContent';
import { CompanyType, PassportType, passportsWithCompaniesType } from '@/types';


const CarcinogenicRiskPage = async () => {
    // const companies = await getCompanies();
    // const passports = await getPassports();

    // const companyNames = companies.map(company => (company.name));

    // const companyMap: { [key: number]: string } = {};
    // companies.forEach(company => {
    //     companyMap[company.id] = company.name;
    // });

    // const passportsWithCompanies = passports.map(passport => ({
    //     ...passport,
    //     company_name: companyMap[passport.company_id]
    // }));

    return (
        // <CarcinogenicRiskContent
        //     companies={companies as CompanyType[]}
        //     passports={passports as PassportType[]}
        //     companyNames={companyNames as string[]}
        //     passportsWithCompanies={passportsWithCompanies as passportsWithCompaniesType[]}
        // />

        <CarcinogenicRiskContent
            companies={[] as CompanyType[]}
            passports={[] as PassportType[]}
            companyNames={[] as string[]}
            passportsWithCompanies={[] as passportsWithCompaniesType[]}
        />

    )
}

export default CarcinogenicRiskPage

