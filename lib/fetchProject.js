import { MongoClient } from "mongodb";

export const fetchProject = async (collection, slug) => {
  let project;
  try {
    const client = await MongoClient.connect(process.env.DB_URL);
    const db = client.db();
    const documents = await db.collection(collection).find().toArray();
    project = documents.filter((document) => document.slug === slug);
    client.close();
  } catch (error) {
    console.log(error);
  }

  return project[0];
};
