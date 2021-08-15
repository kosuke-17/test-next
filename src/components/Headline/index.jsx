import styles from "./Headline.module.css"

export function Headline(props) {
  return(
    <>
      <h1 className={styles.title}>{props.title} page</h1>

      <p className={styles.description}>
        Get started by editing{' '}
        {props.children}
      </p>
    </>
  )
}