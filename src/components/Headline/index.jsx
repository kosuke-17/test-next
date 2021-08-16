import styles from "./Headline.module.css"

export function Headline(props) {
  return(
    <>
      <h1 className={styles.title}>{props.title} page</h1>

      <p className={styles.description}>
        アイテムの数は{props.children}個です</p>
      <button onClick={props.handleReduce}>減らす</button>
    </>
  )
}