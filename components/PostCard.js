import Link from "next/link";
import Image from "next/image";
import author from "../static/author.jpg";
import { FiBookmark } from "react-icons/fi";
import { db } from "../firebase";
import { doc, getDoc, collection, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

const styles = {
  wrapper:
    "flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer",
  authorContainer: "flex gap-[1.4rem]",
  authorImageContainer:
    "grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]",
  authorImage: "",
  authorName: " font-semibold capitalize",
  title: "font-bold text-2xl",
  briefing: "text-[#787878]",
  detailsContainer: "flex items-center justify-between text-[#787878]",
  articleDetails: "my-2 text-[.8rem]",
  category: "bg-[#F9F4F6] p-1 rounded-full capitalize",
  bookmark: "h-5 w-5",
  thumbContainer: "flex-1 ",
  postDetails: "flex-[2.5] flex-col",
};

function PostCard({ postInfo }) {
  const [authorData, setAuthorData]= useState(null)

  useEffect(()=>{
    const getAuthorData= async ()=> {
      let retrievedAuthorData = await (await getDoc(doc(db, 'users', postInfo.data?.author))).data()
      console.log(retrievedAuthorData.name)    
      setAuthorData(retrievedAuthorData) 
    }
    getAuthorData()
  }, [])
  return (
    <Link href={`/post/${postInfo.id}`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                src={
                  `https://res.cloudinary.com/demo/image/fetch/${authorData?.imageUrl}`
                }
                className={styles.authorImage}
                height={40}
                width={40}
              />
            </div>
            <div className={styles.authorName}>{authorData?.name}</div>
          </div>
          <h1 className={styles.title}>{postInfo.data?.title}</h1>
          <div className={styles.briefing}>{postInfo.data?.brief}</div>
          <div className={styles.detailsContainer}>
            <span className={styles.articleDetails}>
              {/*console.log(
                postInfo.data?.postedOn.toDate().toLocaleString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
              )*/}
              {postInfo.data?.postedOn.toDate().toLocaleString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
              . {postInfo.data?.postLength} read .{" "}
              <span className={styles.category}>{postInfo.data?.category}</span>
            </span>
            <span className={styles.bookmark}>
              <FiBookmark />
            </span>
          </div>
        </div>
        <div className={styles.thumbContainer}>
          <Image src={`https://res.cloudinary.com/demo/image/fetch/${postInfo.data?.bannerImage}`} height={100} width={100} alt="thumb" />
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
