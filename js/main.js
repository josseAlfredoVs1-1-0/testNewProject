if (typeof window !== "undefined" && typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
        console.log(`DOM CONTENT LOADED OK`);

        //init main function 
        (function () {
            function init() {

                /* *************************************** */
                //BEGIN STATE // BEGIN STATE
                let conf = {
                    min: 1,
                    max: 5,
                    count: 0,
                    modalOn: false,
                    PgraphPrefix: ["min", "max"],
                }
                //END STATE // END STATE
                /* *************************************** */
                //BEGIN LOGIC // BEGIN LOGIC
                function increment() {
                    if (conf.count < conf.max) {
                        conf.count++;
                        renderCounter()
                    }
                }

                function decrement() {
                    if (conf.count >= conf.min) {
                        conf.count--;
                        renderCounter()
                    }
                }

                function toggleMod() {
                    if (conf.count > conf.max || conf.count < conf.min) {
                        conf.modalOn = !conf.modalOn;
                    } else {
                        conf.modalOn == false;
                    }
                }

                function minOrMax(newPrefx) {
                    conf.PgraphPrefix = (conf.PgraphPrefix[0] == newPrefx) ?
                        conf.PgraphPrefix[0] :
                        conf.PgraphPrefix[1];
                }

                function setMin(newV) {
                    conf.min = newV;
                }

                function setMax(newV) {
                    conf.max = newV;
                }

                //END LOGIC // END LOGIC
                /* *************************************** */

                function renderCounter() {
                    let boxNum = document.querySelector(".numberRepresentation");
                    console.log(conf.count);
                    boxNum.textContent = conf.count;
                }

                function showMod() {
                    let mod = document.querySelector(".myModal");
                    console.log(`mod Status: ${conf.modalOn}`);
                    if (conf.modalOn) {
                        mod.showModal();
                    } else {
                        mod.close();
                    }
                }
                //END RENDERS // END RENDERS
                /* *************************************** */

                return {
                    mo: increment,
                    mi: decrement,
                    modSwtch: toggleMod,
                    stMn: setMin,
                    stMx: setMax,
                    rdr: renderCounter,
                    shwMod: showMod,
                }
            }

            let op = init();
            let moB = document.querySelector(".inc");
            let miB = document.querySelector(".dec");

            /* RENDER WITH RESOURCE LOADED */
            window.addEventListener("load", op.rdr);
            document.querySelector(".handleCount").addEventListener("change", op.modSwtch);
            document.querySelector(".handleCount").addEventListener("change", op.shwMod);

            moB.addEventListener("click", op.mo);
            miB.addEventListener("click", op.mi);

            let newMin = document.querySelector("#stMinN");
            let newMax = document.querySelector("#stMaxN");
            console.log(`END FUNCTION IIFE`);
            /* ++++***************************************++++ */

            //BEGIN EVENTS // BEGIN EVENTS
            //END EVENTS // END EVENTS
        })();
        //end init main function




    });
}