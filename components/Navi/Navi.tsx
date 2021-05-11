import { NewsResponseSchema } from "type/todo";
import styles from "./Navi.module.scss";
import useSWR from "swr";

export function Navi({ children }) {
  return <nav className={styles.navi}>{children}</nav>;
}

export function NaviButton({ children }) {
  const { data, error } = useSWR("/api/news", async (url) => {
    const res = await fetch(url);
    return NewsResponseSchema.parse(await res.json());
  });

  if (error) return <p>{error}</p>;
  if (!data) return <p>loading</p>;

  console.log(data);

  const handleOnClick = async () => {};

  return (
    <button className={styles.navi__button} onClick={handleOnClick}>
      {children}
    </button>
  );
}
