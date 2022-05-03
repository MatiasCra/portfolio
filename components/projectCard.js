import React from "react";
import {useRouter} from "next/router";
import styles from "./projectCard.module.css";

const ProjectCard = (props) => {

    const handleKeyPress = (event, slug) => {
        if (event.key === "Enter") {
            props.openProject(slug);
        }
    };

    return (
        <div className="relative">
            <div
                className="bg-center bg-gradient-to-r from-[#7AA2F7] to-indigo-500
                   bg-no-repeat absolute top-0 w-full h-full rounded-sm"
            ></div>
            <div
                id={props.id}
                style={{backgroundImage: `url('${props.banner}')`}}
                className={`bg-center bg-no-repeat bg-contain relative`}
                onClick={() => props.openProject(props.slug)}
                role="button"
                tabIndex="0"
                onKeyPress={e => handleKeyPress(e, props.slug)}
            >
                <div
                    id="#projectOverlay"
                    className={`w-full py-24 transition-all opacity-0 bg-neutral-900 hover:opacity-90 ${styles.overlay}`}
                    onClick={() => props.openProject(props.slug)}
                >
                    <h3 className="text-center text-6xl">{props.title}</h3>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
