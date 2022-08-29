import { createContext, useEffect, useState } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      setUsers(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              ...doc.data(),
            },
          };
        })
      );
    };
    getUsers();
  }, []);
  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "articles"));
      setPosts(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              body: doc.data().body,
              brief: doc.data().brief,
              category: doc.data().category,
              postLength: doc.data().postLength,
              bannerImage: doc.data().bannerImage,
              title: doc.data().title,
              // comments:doc.data().comments,
              postedOn: doc.data().postedOn,
              author: doc.data().author,
            },
          };
        })
      );
    };
    getPosts();
  }, []);

  // adding user to our firebase
  const addUserToFirebase = async (user) => {
    await setDoc(doc(db, "users", user.email), {
      email: user.email,
      name: user.displayName,
      imageUrl: user.photoURL,
      followers: 0,
    });
  };

  //sign in
  const handleUserAuth = async () => {
    const userLoginData = await signInWithPopup(auth, provider);
    setCurrentUser(userLoginData.user);
    addUserToFirebase(userLoginData.user);
  };

  return (
    <MediumContext.Provider value={{ posts, users, handleUserAuth, currentUser }}>
      {children}
    </MediumContext.Provider>
  );
};

export { MediumContext, MediumProvider };
