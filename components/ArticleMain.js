import Image from "next/image";
import author from "../static/author.jpg";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import Banner from "../static/banner.png";

const styles = {
  wrapper: "flex items-center justify-center flex-[3] border-l border-r",
  content: "h-screen over-flow-scroll p-[2rem]",
  postHeaderContainer:
    "flex justify-between items-center mt-[2.2rem] mb-[1.2rem]",
  authorContainer: "flex gap-[1rem]",
  authorProfileImageContainer:
    "h-[3rem] w-[3rem] grid center rounded-full overflow-hidden",
  column: "flex-1 flex flex-col justify-center",
  postDetails: "flex gap-[1.2rem] text-[#787878]",
  listenButton: "flex items-center gap-[.2rem] text-[#1A8917]",
  socials: " flex gap-[1rem] text-[#787878] cursor-pointer",
  space: "w-[1.5rem]",
  bannerContainer:'h-[18rem] w-full grid center overflow-hidden mb-[2rem]',
  image:'object-cover',
  articleMainContainer:'flex flex-col gap-[1rem]',
  title:'font-bold text-3xl',
  subtitle:'font-mediumSerifItalic text-[1.4rem] text-[#292929]',
  articleText:'font-mediumSerif text-[1.4rem] text-[#292929]',
  
};

function ArticleMain({post, author}) {
  console.log(post, author)
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileImageContainer}>
              <Image
                className={styles.image}
                src={author}
                width={100}
                height={100}
              />
            </div>
            <div className={styles.column}>
              <div>Erica Wanja</div>
              <div className={styles.postDetails}>
                <span>June 15 . 7 min read </span>
                <span className={styles.listenButton}>
                  <AiFillPlayCircle />
                  Listen
                </span>
              </div>
            </div>
          </div>

          <div className={styles.socials}>
            <IoLogoTwitter />
            <FaFacebook />
            <GrLinkedin />
            <HiOutlineLink />
            <div className={styles.space}>
              <BiBookmarks />
              <FiMoreHorizontal />
            </div>
          </div>
        </div>
        <div className={styles.articleMainContainer}>
          <div className={styles.bannerContainer}>
            <Image
              className={styles.image}
              src={Banner}
              height={100}
              width={100}
            />
          </div>
          <h1 className={styles.title}>7 free tools that will make you prosperous</h1>
          <span className={styles.subtitle}>
            <div>Erica wanja, June 15, 2022</div>
            <div>Brief: Productivity</div>
          </span>
          <div className={styles.articleText}>
            Et proident ipsum est elit aliqua anim eiusmod ex. Tempor aliquip
            aliqua anim reprehenderit do veniam eu voluptate laboris adipisicing
            pariatur incididunt. Laboris sit consectetur sunt ipsum id elit
            magna. Quis exercitation amet fugiat mollit proident duis quis qui
            consequat adipisicing esse magna. Voluptate dolor aute aliquip qui
            cupidatat proident qui nulla. Officia consequat nostrud et esse
            eiusmod sint proident laboris. 
            
            Nostrud amet enim eu ullamco sunt.
            Excepteur do fugiat nulla laboris non aliqua mollit esse do
            excepteur aute aliquip reprehenderit. Anim excepteur deserunt culpa
            irure fugiat duis dolore deserunt ad. Quis pariatur ea ut occaecat
            aliquip tempor id tempor officia magna in irure voluptate do.
            Occaecat culpa dolore excepteur aliquip fugiat commodo qui id tempor
            et esse. Reprehenderit esse esse dolor voluptate dolore magna. Qui
            pariatur quis ex fugiat minim nostrud nisi culpa eiusmod do sunt ea
            enim tempor. Deserunt magna esse magna minim labore non nostrud
            incididunt reprehenderit aliqua. Voluptate nisi officia magna et
            nulla. Deserunt adipisicing adipisicing ullamco duis et id consequat
            veniam.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleMain;
