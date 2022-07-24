import React from "react";

const SnackBar = (props) => {
  React.useEffect(() => {
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const snackbar = document.getElementById("snackbar");
    if (props.opened) {
      props.close();

      snackbar.classList.remove("hidden");
      snackbar.animate(
        [
          {
            display: "none",
            visibility: "hidden",
            opacity: 0,
          },
          {
            display: "flex",
            visibility: "visible",
            opacity: 1,
          },
        ],
        {
          fill: "forwards",
          duration: 600,
          easing: "ease",
        }
      );

      sleep(2000).then(() => {
        snackbar.animate(
          [
            {
              display: "flex",
              visibility: "visible",
              opacity: 1,
            },
            {
              display: "none",
              visibility: "hidden",
              opacity: 0,
            },
          ],
          {
            fill: "forwards",
            duration: 300,
            easing: "ease",
          }
        );
      });

      sleep(2600).then(() => {
        snackbar.classList.add("hidden");
      });
    }
  }, [props]);

  return (
    <div
      id="snackbar"
      className="sticky bottom-16 right-1/2 flex flex-col items-center transition-all opacity-0 hidden"
    >
      <div className={`${props.color} w-96 h-16 justify-center items-center flex rounded-lg`}>
        <span className="text-xl text-zinc-900">{props.message}</span>
      </div>
    </div>
  );
};

export default SnackBar;
