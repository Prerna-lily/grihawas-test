export const calculateFlatCost = (flatType) => {
    switch (flatType) {
        case 'T1':
            return {
                size: '775 Sq. Ft.',
                carpetArea: '553.48 Sq. Ft.',
                basicPrice: 2635000,
                idc: 77500,
                eec: 77500,
                ffc: 77500,
                powerBackup: 20000
            };
        case 'T5':
            return {
                size: '895 Sq. Ft.',
                carpetArea: '639.38 Sq. Ft.',
                basicPrice: 3043000,
                idc: 89500,
                eec: 89500,
                ffc: 89500,
                powerBackup: 20000
            };
        default:
            return {
                size: 0,
                carpetArea: 0,
                basicPrice: 0,
                idc: 0,
                eec: 0,
                ffc: 0,
                powerBackup: 0
            };
    }
};