import Link from 'next/link'
import styles from '@/styles/util.module.css'

function Header() {
  return (
    <header className="bg-gray-800">
      <nav className="flex items-center justify-between h-16 px-6">
        <div className="flex space-x-4">
          <Link href="/reception">
            <a className={styles.header}>Reception</a>
          </Link>
          <Link href="/perio-chart">
            <a className={styles.header}>Perio Chart</a>
          </Link>
          <Link href="/implant-chart">
            <a className={styles.header}>Implant Chart</a>
          </Link>
          <Link href="/lab-chart">
            <a className={styles.header}>Lab Chart</a>
          </Link>
          <Link href="/order">
            <a className={styles.header}>Order</a>
          </Link>
          <Link href="/record">
            <a className={styles.header}>Record</a>
          </Link>
          <Link href="/management">
            <a className={styles.header}>Management</a>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            <a className={styles.logout}>Logout</a>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
