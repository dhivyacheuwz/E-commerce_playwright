
const XLSX = require('xlsx');

class ExcelUtils {

    static getTestData(filePath, sheetName) {

        // Read workbook
        const workbook = XLSX.readFile(filePath);

        // Get sheet
        const sheet = workbook.Sheets[sheetName];

        // Convert sheet to JSON
        const data = XLSX.utils.sheet_to_json(sheet);

        return data;

    }
    

}

module.exports = { ExcelUtils };