import Image from "next/image";
import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";
import Logo from "../static/logo.png";

const styles = {
  Wrapper: "flex justify-center gap-10 p-5 bg-[#FCC017]",
  content: "max-w-7xl flex-1 flex justify-between gap-10",
  logoContainer: "flex items-center flex-start",
  logo: "cursor-pointer object-contain",
  bannerNav: "flex cursor-pointer  items-center space-x-5",
  startedBtn: "text-white bg-black py-2 px-4 rounded-full",
};

function Header() {
  const { currentUser, handleUserAuth } = useContext(MediumContext);
  return (
    <div className={styles.Wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src={Logo} height={40} width={200} />
        </div>
        {currentUser ? (
          <div className={styles.bannerNav}>
            <div>Our Story</div>
            <div>Membership</div>
            <div className={styles.startedBtn}>Write</div>
            <div className={styles.startedBtn}>Get Unlimited access</div>
          </div>
        ) : (
          <div className={styles.bannerNav}>
            <div>Our Story</div>
            <div>Membership</div>
            <div onClick={handleUserAuth}>Sign in</div>
            <div className={styles.startedBtn}>Get Started</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
