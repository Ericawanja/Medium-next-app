import { useContext, useState } from "react";
import { MediumContext } from "../context/MediumContext";
import {collection, addDoc, severTimestamp} from 'firebase/firestore'
import {db } from '../firebase'

const styles = {
  wrapper:
    "w-[70rem] h-[50rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll",
  title: "my-[2rem] font-bold text-3xl",
  smallField: "w-full flex  gap-[1rem]",
  fieldTitle: "flex-1 text-end",
  inputContainer: "flex-[5] h-min border-2 border-[#787878] p-[.5rem]",
  inputField: "w-full border-0 outline-none bg-transparent",
  accentBtn:'bg-black text-white py-2 px-4 rounded-full'
};

function PostModal() {

  const { currentUser } = useContext(MediumContext);

const [title, setTitle] = useState(' ')
const [brief, setBrief] = useState(' ')
const [category, setCategory] = useState(' ')
const [postLength, setPostLength] = useState(' ')
const [bannerImage, setBannerImage] = useState(' ')
const [body, setBody] = useState(' ')

const addPostToFirebase = async (event)=>{
  event.preventDefault()

  await addDoc(collection(db, 'articles'), {
    bannerImage:bannerImage,
    body:body,
    category:category,
    brief:brief,
    postedOn:severTimestamp(),
    postLength:Number(postLength),
    title:title,
    author:currentUser.email
  })
}

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Create a New Post</div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Title</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            placeholder="Enter the post title.."
            required
            value={title}
            onChange={ event => setTitle(event.target.value)}
          ></input>
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Brief</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            placeholder="Enter the post brief.."
            required
            value={brief}
            onChange= {event=> setBrief(event.target.value)}
          ></input>
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Banner Image Url</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="url"
            placeholder="Enter the banner image url.."
            required
            value={bannerImage}
            onChange={event=> setBannerImage(event.target.value)}
          ></input>
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Category</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            placeholder="Enter the post category.."
            required
            value={category}
            onChange={event=>setCategory(event.target.value)}
          ></input>
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Estimated Read Length</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="number"
            placeholder="Enter time in minutes.."
            required
            value={postLength}
            onChange={event=>setPostLength(event.target.value)}
          ></input>
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Article Text</span>
        <span className={styles.inputContainer}>
          <textarea
            className={styles.inputField}
            type="text"
            placeholder="Enter the post title.."
            rows={12}
            required
            value={body}
            onChange={event=>setBody(event.target.value)}
          ></textarea>
        </span>
      </div>

      <button onClick={addPostToFirebase} className={styles.accentBtn}>Submit</button>

    </div>
  );
}

export default PostModal;
