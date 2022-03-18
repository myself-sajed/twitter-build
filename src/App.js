import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import { db } from "./firebase/firebase";

function App() {


  async function fetcher() {
    // validate the user first


    const q = query(collection(db, "users"), where("username", "==", 'rocky'));
    onSnapshot(q, (querySnapshot) => {
      const userArr = [];
      if (querySnapshot.empty === false) {
        console.log(querySnapshot.empty);
        querySnapshot.forEach((doc) => {
          userArr.push({ userId: doc.id, userData: doc.data() });
          const myUser = userArr[0]
          localStorage.setItem("user", JSON.stringify(myUser))
          console.log('User found')

        }
        )
      }
      else {
        console.log('User not found')
      }

    });

  }


  useEffect(() => {
    fetcher()
  })






  return (
    <>
      <Home />
    </>
  );
}

export default App;
