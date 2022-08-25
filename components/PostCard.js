import Link from 'next/link'
import Image from "next/image";
import author from "../static/author.jpg";
import { FiBookmark } from "react-icons/fi";

const styles = {
    wrapper:'flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer',
  authorContainer: "flex gap-[1.4rem]",
  authorImageContainer:
    "grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]",
  authorImage: "",
  authorName: " font-semibold",
  title: "font-bold text-2xl",
  briefing: "text-[#787878]",
  detailsContainer: "flex items-center justify-between text-[#787878]",
  articleDetails: "my-2 text-[.8rem]",
  category: "bg-[#F9F4F6] p-1 rounded-full",
  bookmark: "h-5 w-5",
  thumbContainer:'',
  postDetails: "",
};

function PostCard() {
  return (
    <Link href='post'>
    <div className={styles.wrapper}>
      <div className={styles.postDetails}>
        <div className={styles.authorContainer}>
          <div className={styles.authorImageContainer}>
            <Image
              src={author}
              className={styles.authorImage}
              height={40}
              width={40}
            />
          </div>
          <div className={styles.authorName}>Erica Wanja</div>
        </div>
        <h1 className={styles.title}>
          9 Free Tools That will Make you productive in 2022
        </h1>
        <div className={styles.briefing}>
          Productivity is a skill that anyone can learn
        </div>
        <div className={styles.detailsContainer}>
          <span className={styles.articleDetails}>
            Nov 22 . 5 Min read .{" "}
            <span className={styles.category}>Productivity</span>
          </span>
          <span className={styles.bookmark}>
            <FiBookmark />
          </span>
        </div>
      </div>
      <div className={styles.thumbContainer}>
        <Image src={author} height ={100} width={100} alt='thumb'/>
      </div>
    </div>
    </Link>

  );
}

export default PostCard;
