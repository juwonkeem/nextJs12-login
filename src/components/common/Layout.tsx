import styles from '@/styles/util.module.css'
import Header from './Header'
import Loading from './Loading'
import Alert from './Alert'

export default function Layout({ children, home }: any) {
  return (
    <div className="bg-pink-50 dark:bg-black text-gray-800 dark:text-gray-200 h-full">
      <div className={styles.container}>
        {/* <Loading /> */}
        <Alert />
        <Header />
        <main>{children}</main>
      </div>
    </div>
  )
}
