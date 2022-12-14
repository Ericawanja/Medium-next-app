import Head from "next/head";
import Image from "next/image";
//import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import PostCard from "../components/PostCard";
import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";

const styles = {
  wrapper:'max-auto',
  main:'flex justify-center',
  container:'max-w-7xl flex-1',
  postList:
    "flex flex-col gap-3 p-3 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3",
};
export default function Home() {
  const  {posts, users } = useContext(MediumContext )
 //console.log(posts, 'k')
 // console.log(users)
  return (
    <div className={styles.wrapper}>
      <Header />
      <Banner />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.postList}>
            {posts.map(post=>(
              <PostCard postInfo= {post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
