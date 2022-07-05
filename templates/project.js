import React, { Component } from 'react'
import * as projectStyles from './project.module.css'
import Close from '../images/close.svg'
import { navigate } from 'gatsby'
import { Helmet } from 'react-helmet'
import getProjectComponent from '../projects'

const Project = (props) => {
  const closeProject = () => {
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    }

    const container = document.getElementById('projectContainer')
    container.classList.toggle(projectStyles.closeContainer)
    sleep(500).then(() => {
      navigate('/#projects')
    })
  }

  Component = getProjectComponent('generic')

  return (
    <>
      <Helmet
        title={`${props.pageContext.project.title} | Matías Cravchik | Portfolio`}
      />
      <div className={projectStyles.container} id='projectContainer'>
        <div className={projectStyles.overlay} id='projectOverlay'></div>
        <button className={projectStyles.closeMenu} onClick={closeProject}>
          <Close />
        </button>
        <h1 className={projectStyles.title}>
          {props.pageContext.project.title}
        </h1>
        <Component />
      </div>
    </>
  )
}

export default Project
