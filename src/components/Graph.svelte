<script lang="ts">
    let gl : HTMLCanvasElement;
    const rust = import("../../wasm")
    
    rust.then(setSize);
    window.onresize = setSize;

    function setSize () {
        if (gl === undefined) {
            gl = document.querySelector("#gl") as HTMLCanvasElement
        }

        gl.setAttribute("width", gl.offsetWidth.toString());
        gl.setAttribute("height", gl.offsetHeight.toString());
    }
</script>

<canvas id="gl"></canvas>

<style>
    canvas#gl {
        position: fixed;
        top: 0;
        left: 0;
        
        width: 100%;
        height: 100%;
    }
</style>