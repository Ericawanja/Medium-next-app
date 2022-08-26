import Link from "next/link";
import Image from "next/image";
import SmallLogo from "../static/SmallLogo.png";
import author from "../static/author.jpg";
import { HiOutlineHome } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import { BiBookmarks } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";

const styles = {
    wrapper:'w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]',
    logoContainer:'cursor-pointer',
    iconsContainer:'flex flex-col justify-center gap-[1.4rem] text-2xl flex-1 text-[#787878]',
    divider:'border-b',
    profileImage:'object-cover',
    profileImage:'w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center'
};

function ReadersNav() {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <Image src={SmallLogo} />
        </div>
      </Link>
      <div className={styles.iconsContainer}>
        <HiOutlineHome/>
        <FiBell/>
        <BiBookmarks/>
        <RiArticleLine/>
        <div className={styles.divider}></div>
        <BsPencilSquare/>
      </div>
      <div className={styles.profileImage}>
        <Image src={author}/>
      </div>
    </div>
  );
}

export default ReadersNav;
