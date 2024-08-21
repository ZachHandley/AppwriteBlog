import { type AppwriteConfig } from "appwrite-utils";

const appwriteConfig: AppwriteConfig = {
  appwriteEndpoint: "https://cloud.appwrite.io/v1",
  appwriteProject: "66c619260011b67a5de5",
  appwriteKey:
    "cb9de9640955a22dbbe569517f63a601e4aa558315fe0c77917890d1211c8a958967ad36e6a0081ae6ca264a36da7d7230563c9b50276cf376ea14636f3c259fb266f905fa736b4f9d479cbeed1eef8ea1f8fe121c370ab54411bd958899600dd7f337f34d7bffa84783d15d74060802637f8ce8351a7710cfe2987889a57ea6",
  enableBackups: true,
  backupInterval: 3600,
  backupRetention: 30,
  enableBackupCleanup: true,
  enableMockData: false,
  documentBucketId: "documents",
  usersCollectionName: "Members",
  databases: [
    {
      $id: "blog",
      name: "Blog",
      bucket: {
        $id: "blog_bucket",
        name: "Blog Bucket",
        enabled: true,
        maximumFileSize: 30000000,
        allowedFileExtensions: [],
        encryption: true,
        antivirus: true,
      },
    },
  ],
  buckets: [
    {
      $id: "global_bucket",
      name: "Global Bucket",
      enabled: true,
      maximumFileSize: 30000000,
      allowedFileExtensions: [],
      encryption: true,
      antivirus: true,
    },
  ],
};

export default appwriteConfig;
