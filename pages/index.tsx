import { Button } from '@nextui-org/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/layouts'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout title={'Pokedex'}>
      <Button color={'error'}>sarasa</Button>
    </Layout>
  )
}

export default Home
