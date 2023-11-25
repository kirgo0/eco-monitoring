"use server"
import fetch from 'node-fetch';
import https from 'https';
import { CustomServerResponse } from '@/types';

const agent = new https.Agent({
    rejectUnauthorized: false
});

export const getCompanies = async () => {
    const fetchOptions = {
        method: 'GET',
        agent,
    };

    try {
        const response = await fetch('https://localhost:7001/api/CompanyData', fetchOptions);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json() as CustomServerResponse;

        return data.result;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};

export const getPassports = async () => {
    const fetchOptions = {
        method: 'GET',
        agent,
    };

    try {
        const response = await fetch('https://localhost:7001/api/PassportData', fetchOptions);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json() as CustomServerResponse;

        return data.result;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}