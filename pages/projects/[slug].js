import {getProject, getProjectsSlugs} from "../../lib/projects";
import Close from "../../public/images/close.svg";
import {useRouter} from "next/router";
import styles from "../../components/layout.module.css";
import Slider from "../../components/slider";
import Image from "next/image";

export async function getStaticPaths() {
    const paths = getProjectsSlugs();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    const projectData = await getProject(params.slug);
    return {
        props: {
            projectData,
        },
    };
}

export default function Project({projectData}) {
    const router = useRouter();

    const closeProject = () => {
        function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }

        document.getElementById("start").classList.add("open-project");
        sleep(400).then(() => {
            router.push("/#projects");
        });
    };

    return (
        <div
            id="start"
            className={`bg-zinc-900 flex flex-col min-h-screen w-full m-0 
                  text-slate-200 py-5 relative ${styles.animateEntranceUp}`}
        >
            <Close
                className="absolute right-4 top-4 w-10 h-10 sm:top-5 sm:right-5 sm:w-12 sm:h-12 md:right-6 md:w-14 md:h-14
                   fill-slate-50 hover:cursor-pointer hover:fill-[#F7768E] transition-all duration-[400]"
                onClick={closeProject}
            />
            <h1 className="text-center text-4xl sm:text-5xl md:text-6xl uppercase text-slate-50">
                {projectData.title}
            </h1>
            <Slider className="mx-2 mt-4 sm:mt-6 md:mx-8 lg:mx-[13%] lg:mt-8">
                {projectData.images.map((image, index) => {
                    return(
                        <img src={image} alt={`screenshot${index}`} key={index} />
                    )
                })}
            </Slider>
        </div>
    );
}
