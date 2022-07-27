import { Header } from './components/Header';
import { Post } from './components/Post';
import { SideBar } from './components/SideBar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/cleltonjm.png',
      name: 'Clelton José Mielke',
      role: 'Web Developer'
    },
    content: [
        { type: 'paragraph', content: 'Fala galera 👋', },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/JulioHartwig.png',
      name: 'Julio Ratowig',
      role: 'Professor'
    },
    content: [
        { type: 'paragraph', content: 'Fala galera 👋', },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
];

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

