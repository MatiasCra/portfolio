import React from 'react'
import Contact from '../components/contact'
import Layout from '../components/layout'
import Projects from '../components/projects'
import Head from 'next/head'

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/projects')
  const allProjectsData = await res.json()
  return {
    props: {
      allProjectsData,
    },
  }
}

const IndexPage = ({ allProjectsData }) => {
  return (
    <Layout>
      <Head>
        <link rel='icon' href='/icon.png'></link>
        <title>Matías Cravchik | Portfolio</title>
      </Head>
      <Projects projects={allProjectsData} />
      <Contact />
      <div id='project-opener' className='opener'></div>
    </Layout>
  )
}

export default IndexPage
