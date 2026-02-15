import conf from '../conf/conf'
import { Client , Databases,ID } from 'appwrite'



export class FromDataService{
    client = new Client();
    databases;

    constructor(){
        this.client
        .setEndpoint(conf.appwrite_Url)
        .setProject(conf.appwrite_ProjectId);

        this.databases = new Databases(this.client);
    }

    async SEND_ADMI_DATA({ User_Name,Father_Name,Addhar_UID,HSP_Name,Contact_Number, nationility,category,gender,neet_UID, course}){
        try {
            const res = await this.databases.createDocument(conf.appwrite_DetabaseId,conf.appwrite_CollectionId,ID.unique(),
        { User_Name,Father_Name,Addhar_UID,HSP_Name,Contact_Number, nationility,category,gender,neet_UID, course});
            return res;
        } 
        catch (error) {
            console.log("SEND ADDMITION DATA ERROR", error);
            throw error;
        }
    }


}



const useFromdata = new FromDataService()
export default useFromdata