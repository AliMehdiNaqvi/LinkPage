import clientPromise from "@/lib/mongodb"

export async function POST(request) {

   const body= await request.json()
   const client = await clientPromise
   const db= client.db("LinkPage")
   const collection= db.collection("link")
   //if handle is already aclaimed then do not reclaim it .
   const doc= await collection.findOne({linkHandle:body.linkHandle})
if(doc){
  return Response.json({ message: 'This linkPage already exists!', success:false , error:true, result:null})
}
   const result= await collection.insertOne(body)
  return Response.json({ message: 'your linkPage has been generated!', success:true , error:false , result:result})
}