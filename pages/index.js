import Head from 'next/head'
import styles from '../styles/someone.module.css'
import { getPeopleData } from '../lib/socials'

export default function Home({ socialsData }) {
  return (
    <div className={styles.container}>
      <div className={styles.sociallinks}>
        <Head>
          <title>Felix's Socials</title>
        </Head>
        <div className={styles.user}>
          <img
            className={styles.userimg}
            src={socialsData.picture}
            height={100}
            width={100}
          />
          <h1 className={styles.userh1}>Félix Pratt</h1>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const socialsData = await getPeopleData("felix")
  return {
    props: {
      socialsData
    }
  }
}