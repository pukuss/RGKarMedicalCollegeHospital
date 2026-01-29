import conf from '../conf/conf'
import { Client , TablesDB , Databases } from 'appwrite'



export class fromdata{
    client = new Client();
    databases;

    constructor(){
        this.client
        .setEndpoint(conf.appwrite_Url)
        .setProject(conf.appwrite_ProjectId);

        this.databases = new Databases(this.client);
    }

    async SEND_DATA(data){
        try {
            const res = await this.databases.createDocument()
        } catch (error) {
            
        }
    }


}



const useFromdata = new fromdata()
export default useFromdata