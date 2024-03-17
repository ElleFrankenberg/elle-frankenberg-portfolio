import { MongoClient } from "mongodb";

export const fetchData = async () => {
  let content;
  try {
    const client = await MongoClient.connect(process.env.DB_URL);
    const db = client.db();
    const documents = await db.collection("content").find().toArray();
    content = documents[0];
    client.close();
  } catch (error) {
    console.log(error);
  }

  return content;
};
