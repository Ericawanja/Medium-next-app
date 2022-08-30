import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ArticleMain from "../../components/ArticleMain";
import ReadersNav from "../../components/ReadersNav";
import Recommendations from "../../components/Recommendations";
import { MediumContext } from "../../context/MediumContext";

const styles = {
  wrapper: "flex",
  articleMain:'flex-[3]',
  recommendationContainer:'hidden  md-block',
};

function Post() {
  const {posts, users} = useContext(MediumContext)
  const [post, setPost] = useState([])
  const [author, setAuthor] = useState([])
  const router = useRouter()
  useEffect(()=>{
    if (posts.length === 0) return;
    //console.log(router.query.slug)
    setPost(posts.find(post=> post.id === router.query.slug))
    setAuthor(users.find(user => user.id === post?.data?.author))
    //console.log(author)
    //console.log(post.data.author)
  }, [post])
  return (
    <div className={styles.wrapper}>
      <div>
        <ReadersNav />
      </div>
      <div className={styles.articleMain}>
        <ArticleMain post={post} author={author}/>
      </div>
      <div className={styles.recommendationContainer}>
        <Recommendations />
      </div>
    </div>
  );
}
export default Post;
