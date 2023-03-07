const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({origin: true}));

const serviceAccount = require("./banking-crud-firebase-adminsdk-3wojb-81b2dd004f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://banking-crud-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

// create
app.post("/add", (req, res) => {
    (async () => {
      try {
        await db.collection("customer").add(req.body);
        return res.status(200).send({"status": "successfully created"});
      } catch (error) {
        console.log(error);
        return res.status(500).send(error);
      }
    })();
  });

// read all
app.get("/list", (req, res) => {
    (async () => {
      try {
        const query = db.collection("customer");
        const response = [];
        await query.get().then((querySnapshot) => {
          const docs = querySnapshot.docs;
          for (const doc of docs) {
            const selectedItem = {
              id: doc.id,
              data: doc.data(),
            };
            response.push(selectedItem);
          }
          return response;
        });
        return res.status(200).send(response);
      } catch (error) {
        console.log(error);
        return res.status(500).send(error);
      }
    })();
});

// update
app.put("/update/:user_id", (req, res) => {
    (async () => {
      try {
        const document = db.collection("customer").doc(req.params.user_id);
        await document.update(req.body);
        return res.status(200).send();
      } catch (error) {
        console.log(error);
        return res.status(500).send(error);
      }
    })();
  });
  
  
  // delete
  app.delete("/delete/:user_id", (req, res) => {
    (async () => {
      try {
        const document = db.collection("customer").doc(req.params.user_id);
        await document.delete();
        return res.status(200).send();
      } catch (error) {
        console.log(error);
        return res.status(500).send(error);
      }
    })();
  });

  

exports.app = functions.https.onRequest(app);