import dotenv from 'dotenv';

dotenv.config({ path: `./env/.env.${process.env.ENV}`});

export class ConfigReader {

    static readonly url = ConfigReader.getENV('URL');
    static readonly username = ConfigReader.getENV('USERNAME');
    static readonly password = ConfigReader.getENV('PASSWORD');

    private static getENV(key: string): string {
        const value = process.env[key];

        if(!value) {
            throw new Error(`Environment variable ${key} is not available.`);
        }
        
        return value
    }
}