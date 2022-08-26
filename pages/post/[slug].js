import ReadersNav from "../../components/ReadersNav";
import Recommendations from "../../components/Recommendations";

const styles = {
  wrapper: "flex",
};

function Post() {
  return (
    <div className={styles.wrapper}>
      <div>
        <ReadersNav />
      </div>
      <div>MAin</div>
      <div>
        <Recommendations />
      </div>
    </div>
  );
}
export default Post;
