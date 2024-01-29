const MongoClient = require("mongodb").MongoClient
const ServerApiVersion = require("mongodb").ServerApiVersion
const dotenv = require("dotenv")
const path = require("path")

dotenv.config({ path: path.resolve(__dirname, "../../.env") })

const uri = process.env.NEXT_PUBLIC_DATABASE_URL || "" // Ensure uri is defined
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

async function run() {
  console.log("Spinning up DB server.")
  try {
    console.log("Attempting to connect to MongoDB.")
    await client.connect()
    await client.db("admin").command({ ping: 1 })
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    )
  } finally {
    await client.close()
  }
}

run().catch(console.dir)
