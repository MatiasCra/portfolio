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
  const errors = {
    NO: 0,
    MISSING_FIELDS: 1,
    SERVER_ERROR: 2,
  }

  const [opened, setOpened] = React.useState(false)
  const [message, setMessage] = React.useState({ color: '', text: '' })
  const openSnackbar = (error) => {
    if (error === errors.NO) {
      setMessage({ color: 'bg-emerald-300', text: 'Email sent successfuly!' })
    } else if (error === errors.MISSING_FIELDS) {
      setMessage({
        color: 'bg-red-400',
        text: 'Make sure all fields are completed.',
      })
    } else if (error === errors.SERVER_ERROR) {
      setMessage({
        color: 'bg-red-400',
        text: 'There was an error. Please try again.',
      })
    }
  }

  const closeSnackbar = () => {
    if (opened)
      setOpened(false)
  }

  React.useEffect(() => {
    console.log(message)
    if (message && !opened) setOpened(true)
  }, [message])

  return (
    <Layout
      openedSnackbar={opened}
      snackBarMessage={message.text}
      snackBarColor={message.color}
      closeSnackbar={closeSnackbar}
    >
      <Head>
        <link rel='icon' href='/icon.png'></link>
        <title>Matías Cravchik | Portfolio</title>
      </Head>
      <Projects projects={allProjectsData} />
      <Contact openSnackbar={openSnackbar} snackBarErrors={errors} />
      <div id='project-opener' className='opener'></div>
    </Layout>
  )
}

export default IndexPage
