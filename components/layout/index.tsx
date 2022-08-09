import React, {FC} from 'react'
import {Navbar} from '../navbar'
import {Footer} from '../footer'
import styles from './Layout.module.css'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  )
}
