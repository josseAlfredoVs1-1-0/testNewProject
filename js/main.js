if (typeof window !== "undefined" && typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
        console.log(`DOM CONTENT LOADED OK`);

        /* *************************************** */

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
        newMin.addEventListener("change", setMin);
        newMax.addEventListener("change", setMax);

        /***************************************** */

        //BEGIN STATE // BEGIN STATE
        let conf = {
            min: 1,
            max: 5,
            count: 0,
            modalOn: false,
            PgraphPrefix: ["min", "max"],
        }
        console.log(`typeof max: ${typeof conf.max}`);
        //END STATE // END STATE

        /* *********  first render app **********/

        /* *************************************** */
        //BEGIN LOGIC // BEGIN LOGIC

        function setState(updater) {
            updater(conf);
            renderG();
        }

        function increment() {
            if (conf.count < conf.max) {
                setState((s) => s.count++);
            } else {
                toggleMod();
            }
        }

        function decrement() {
            if (conf.count > conf.min) {
                setState((s) => s.count--);
            } else {
                toggleMod();
            }
        }

        function toggleMod() {
            setState((s) => conf.modalOn == false ? s.modalOn = true : s.modalOn = false)
            renderG();
        }

        function minOrMax(newPrefx) {
            conf.PgraphPrefix = (conf.PgraphPrefix[0] == newPrefx) ?
                conf.PgraphPrefix[0] :
                conf.PgraphPrefix[1];
        }

        function setMin(newV) {
            let va = newV.target.value;
            setState((s) => s.min = Number(va));
            console.log(`min set to: ${conf.min} - typeof : ${typeof conf.min}`);
            if (conf.count < conf.min) { setState((s) => s.count = conf.min) }
            if (conf.min > conf.max) { setState((s) => s.max = conf.min + 1) }
        }

        function setMax(newV) {
            let va = newV.target.value;
            setState((s) => s.max = Number(va));
            console.log(`max set to: ${conf.max}`);
            if (conf.count > conf.max) { setState((s) => s.count = conf.max) }
            if (conf.max <= conf.min) { setState((s) => s.min = conf.max - 1) }
        }

        //END LOGIC // END LOGIC
        /* *************************************** */
        function renderG() {
            renderCounter();
            showMod();
            rdrInp();
        }

        function renderCounter() {
            console.log("", conf.count);
            boxNum.textContent = conf.count;
        }

        function showMod() {
            console.log("Modal function ejecuted", conf.modalOn)
            if (conf.modalOn) {
                mod.showModal();
            } else {
                mod.close();
            }
        }

        function rdrInp() {
            console.log(`current values:\nin min: ${conf.min}\nin max: ${conf.max}`);
            newMax.value = conf.max;
            newMin.value = conf.min;
        }
        //END RENDERS // END RENDERS
        /* *************************************** */
        console.log(`END FUNCTION IIFE`);
        /* ++++***************************************++++ */

        //BEGIN EVENTS // BEGIN EVENTS
        //END EVENTS // END EVENTS
        //end init main function
        renderCounter();
    })
}