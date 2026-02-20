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
                    } else {
                        toggleMod();
                    }
                }

                function decrement() {
                    if (conf.count > conf.min) {
                        conf.count--;
                        renderCounter()
                    } else {
                        toggleMod();
                    }
                }

                function toggleMod() {
                    conf.modalOn = !conf.modalOn;
                    showMod();
                }

                function minOrMax(newPrefx) {
                    conf.PgraphPrefix = (conf.PgraphPrefix[0] == newPrefx) ?
                        conf.PgraphPrefix[0] :
                        conf.PgraphPrefix[1];
                }

                function setMin(newV) {
                    let va = newV.target.value;
                    conf.min = va;
                    console.log(`min set to: ${conf.min}`);
                    if (conf.count < va) { conf.count = va }
                }
                
                function setMax(newV) {
                    let va = newV.target.value;
                    conf.max = va;
                    console.log(`max set to: ${conf.max}`);
                    if (conf.count > va) { conf.count = va }
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
            moB.addEventListener("click", op.mo);
            miB.addEventListener("click", op.mi);

            /* RENDER WITH RESOURCE LOADED INIT PROGRAM*/
            window.addEventListener("load", op.rdr);
            /***************************************** */

            let closMod = document.querySelector(".closeMod");
            closMod.addEventListener("click", op.modSwtch);


            let newMin = document.querySelector("#minN");
            let newMax = document.querySelector("#maxN");
            newMin.addEventListener("input", op.stMn);
            newMax.addEventListener("input", op.stMx);
            newMin.addEventListener("change", op.rdr);
            newMax.addEventListener("change", op.rdr);

            console.log(`END FUNCTION IIFE`);
            /* ++++***************************************++++ */

            //BEGIN EVENTS // BEGIN EVENTS
            //END EVENTS // END EVENTS
        })();
        //end init main function




    });
}