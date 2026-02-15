const conf = {
    appwrite_Url: String(import.meta.env.VITE_APPWRITE_URL) || "",
    appwrite_ProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID) || "",
    appwrite_DatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID) || "",
    appwrite_CollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID) || "",  // fixed
    appwrite_BucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID) || ""
};

export default conf;
