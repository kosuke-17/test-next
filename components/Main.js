import styles from './Main.module.css'
import { Links } from '../components/Links'
import { Headline } from '../components/Headline'

export default function Main(props) {
  return (
      <main className={styles.main}>
        <Headline title={props.page}>
          {<code className={styles.code}>pages/{props.page}.js</code>}
        </Headline>
        <Links />
      </main>
  )
}