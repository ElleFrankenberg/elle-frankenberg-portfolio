// import { MongoClient } from "mongodb";

// export const fetchData = async (collection) => {
//   let data;
//   try {
//     const client = await MongoClient.connect(process.env.DB_URL);
//     const db = client.db();
//     const documents = await db.collection(collection).find().toArray();
//     collection === "content" ? (data = documents[0]) : (data = documents);
//     client.close();
//   } catch (error) {
//     console.log(error);
//   }

//   return data;
// };
