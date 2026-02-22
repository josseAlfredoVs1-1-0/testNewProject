if (typeof window !== "undefined" && typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
        console.log(`DOM CONTENT LOADED OK`);

        //init main function 

        /* *************************************** */
        //BEGIN STATE // BEGIN STATE
        let moB = document.querySelector(".inc");
        let miB = document.querySelector(".dec");
        let newMin = document.querySelector("#minN");
        let newMax = document.querySelector("#maxN");
        let closMod = document.querySelector(".closeMod");
        let boxNum = document.querySelector(".numberRepresentation");
        let mod = document.querySelector(".myModal");

        closMod.addEventListener("click", toggleMod);
        moB.addEventListener("click", increment);
        miB.addEventListener("click", decrement);
        newMin.addEventListener("input", setMin);
        newMax.addEventListener("input", setMax);

        /***************************************** */

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
        function renderG() {

        }

        function renderCounter() {
            console.log(conf.count);
            boxNum.textContent = conf.count;
        }

        function showMod() {
            console.log(`mod Status: ${conf.modalOn}`);
            if (conf.modalOn) {
                mod.showModal();
            } else {
                mod.close();
            }
        }
        //END RENDERS // END RENDERS
        /* *************************************** */
        console.log(`END FUNCTION IIFE`);
        /* ++++***************************************++++ */

        //BEGIN EVENTS // BEGIN EVENTS
        //END EVENTS // END EVENTS
        //end init main function
    })
}