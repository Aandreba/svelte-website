<script lang="ts">
    let gl : HTMLCanvasElement;

    const rust = rustImport()
    window.onresize = setSize;

    function setSize () {
        if (gl === undefined) {
            gl = document.querySelector("#gl") as HTMLCanvasElement
        }

        gl.setAttribute("width", gl.offsetWidth.toString());
        gl.setAttribute("height", gl.offsetHeight.toString());
    }

    function rustImport () {
        try {
            return import("../../wasm").finally(() => {
                console.log("a")
            })
        } catch (e) {
            return null;
        }
    }

    $: {
        console.log(rust)
    }
</script>

<canvas id="gl"></canvas>

<style>
    canvas#gl {
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        
        width: 100%;
        height: 100%;
    }
</style>