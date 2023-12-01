import { BodyType } from "@/types";

export const bodyTypesArray: BodyType[] = [
    {
        type: 'Average adult',
        bw: 60,
        tin: 21,
        tout: 1.5,
        vout: 0.9,
        vin: 1.1
    },
    {
        type: 'Average man',
        bw: 70,
        tin: 22,
        tout: 1.2,
        vout: 1,
        vin: 1.15
    },
    {
        type: 'Average woman',
        bw: 58,
        tin: 20,
        tout: 2.3,
        vout: 0.87,
        vin: 1.02
    },
    {
        type: 'Average child',
        bw: 25,
        tin: 18,
        tout: 6,
        vout: 0.45,
        vin: 0.39
    }
]

export const bodyTypesNamesArray = ['Average adult', 'Average man', 'Average woman', 'Average child']