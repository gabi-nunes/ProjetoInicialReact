import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './Post'
import './global.css'
import styles from './App.module.css';
import { SideBar } from './components/SideBar';

export function App() {

  return (
    <div>  
      <Header></Header>
      <div className={styles.wrapper}>
    <SideBar></SideBar>
      <main>
      <Post 
        author="Gabi" 
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias mollitia dignissimos libero consequatur minus assumenda doloribus inventore explicabo dolorem eaque, hic harum porro ratione nihil autem optio rerum illo quam!">
      </Post>
      </main>
      </div>
   </div>
  )
}



