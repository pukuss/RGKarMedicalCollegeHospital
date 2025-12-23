
import conf from '../conf/conf'
import { Account , Client, ID } from 'appwrite'

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
                .setEndpoint(conf.appwrite_Url)
                .setProject(conf.appwrite_ProjectId);
        this.account = new Account(this.client);
    }
    

    async SingUp({email,passwd,name}) {
        try {
            const user = await this.account.create(ID.unique() , email ,passwd , name);
                if(user){
                    return this.Login({email,passwd})
                }

        } catch (error) {
            throw error
        }
    }

    async Login({email, passwd}){
        try {
            return await this.account.createEmailPasswordSession(email, passwd)
        } catch (error) {
            throw error
        }
    }

    async Password_Recovery({email,secret_Url}){
        try {
            return await this.account.createRecovery(email,secret_Url)
        } catch (error) {
            throw error
        }
    }

    async Update_Password({UserId , secret , passwd}) {
        try {
            return this.account.updateRecovery(UserId,secret,passwd)
        } catch (error) {
            throw error
        }
    }
}