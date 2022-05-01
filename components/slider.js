import React from "react";
import styles from "./slider.module.css";
import Arrow from "../public/images/arrow.svg";
import Circle from "../public/images/circle.svg";

const Slider = ({className, children}) => {
    // const [loading, setLoading] = React.useState(true);
    const [current, setCurrent] = React.useState(0);

    const inTransition = () => {
        const figure = document.getElementById("sliderFigure");
        const currentLeft = parseFloat(window.getComputedStyle(figure, null).getPropertyValue("left"));
        const imageWidth = figure.offsetWidth / 4 * 0.8;
        return !((Math.abs(currentLeft) + 1) % imageWidth < 2);
    }

    // React.useEffect(() => {
    //     if (loading) {
    //         setLoading(false);
    //     } else {
    //         Array.from(document.getElementsByClassName("hidden")).forEach(element => {
    //             element.classList.remove("hidden");
    //         })
    //     }
    // }, [loading, setLoading]);

    React.useEffect(() => {
        const figure = document.getElementById("sliderFigure");
        const currentLeft = parseFloat(window.getComputedStyle(figure, null).getPropertyValue("left"));
        const animations = figure.getAnimations();
        const imageWidth = figure.offsetWidth / 4 * 0.8;

        let runningAnimation = false;
        animations.some((animation) => {
            runningAnimation = animation.playState === "running" && animation.constructor.name !== "CSSAnimation";
            return runningAnimation;
        });

        let targetLeft = -current * imageWidth;
        if (targetLeft < -3 * imageWidth) {
            targetLeft = 0;
        }
        if (targetLeft > 0) {
            targetLeft = -3 * imageWidth;
        }

        console.log("Going to image:", current)
        if (!runningAnimation && targetLeft !== currentLeft /*&& notInTransition*/) {
            figure.animate(
                [
                    {
                        left: `${currentLeft}px`
                    },
                    {
                        left: `${targetLeft}px`
                    }
                ],
                {
                    fill: "forwards",
                    duration: 1200,
                    easing: "ease",
                }
            )
        }
    }, [current]);

    const goToImage = (n) => {
        if (inTransition())
            return
        setCurrent(n);
    };

    const goToNext = () => {
        if (inTransition())
            return
        if (current === 3)
            setCurrent(0);
        else
            setCurrent(current + 1);
    }

    const goToPrev = () => {
        if (inTransition())
            return
        if (current === 0)
            setCurrent(3);
        else
            setCurrent(current - 1);
    }

    return (
        <div>
            <div id={styles.slider} className={`${className} relative`}>
                <div className={`rounded-b bg-zinc-900 absolute p-4 top-[45%] z-10 -rotate-90 opacity-0 hover:opacity-100
                                ${styles.appear} transition-opacity duration-200 hover:cursor-pointer`}
                     onClick={goToPrev}
                >
                    <Arrow className="w-10 h-10 fill-zinc-200"/>
                </div>
                <div className={`rounded-b bg-zinc-900 absolute p-4 top-[45%] z-10 rotate-90 opacity-0 hover:opacity-100
                                ${styles.appear} transition-opacity duration-200 hover:cursor-pointer right-0`}
                     onClick={goToNext}
                >
                    <Arrow className="w-10 h-10 fill-zinc-200"/>
                </div>
                <figure id="sliderFigure">
                    {children}
                </figure>
                <div className="absolute bottom-2 w-full flex justify-center">
                    <div className={`bg-zinc-900 flex p-3 rounded-xl transition-opacity duration-200
                                    ${styles.appear} opacity-0 hover:opacity-95`}
                         id="indicators"
                    >
                        {[...Array(4).keys()].map((i) => {
                            if (current === i) {
                                return <Circle className="fill-zinc-300 stroke-zinc-200 w-6 mx-1"/>;
                            }
                            return <Circle className="fill-transparent stroke-zinc-200 w-6 mx-1 hover:cursor-pointer"
                                           onClick={() => goToImage(i)}/>;
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;