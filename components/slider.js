import React from "react";
import styles from "./slider.module.css"

const Slider = ({className}) => {

    return (
        <div id={styles.slider} className={className}>
            <figure>
                <img src="/images/projects/bitfunder/banner.png" alt="im1"/>
                <img src="/images/projects/django-blog/banner.png" alt="im2"/>
                <img src="/images/projects/gatsby-blog/banner.png" alt="im3"/>
                <img src="/images/projects/simple-todo-list/banner.png" alt="im4"/>
            </figure>
        </div>)
}

export default Slider;