import ArticleMain from "../../components/ArticleMain";
import ReadersNav from "../../components/ReadersNav";
import Recommendations from "../../components/Recommendations";

const styles = {
  wrapper: "flex",
  articleMain:'flex-[3]',
};

function Post() {
  return (
    <div className={styles.wrapper}>
      <div>
        <ReadersNav />
      </div>
      <div className={styles.articleMain}>
        <ArticleMain/>
      </div>
      <div>
        <Recommendations />
      </div>
    </div>
  );
}
export default Post;
