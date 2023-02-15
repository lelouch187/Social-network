import s from './post.module.css'

const Post = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.imgWrapper}>
        <img
          src="https://pixelbox.ru/wp-content/uploads/2021/06/ava-steam-anime-tyan-19.jpg"
          alt="аватар"
        />
      </div>
      <p className={s.text}>Текст какого-то поста!</p>
    </div>
  );
};
export default Post;
