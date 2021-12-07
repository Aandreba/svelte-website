<script lang="ts">
	import Graph from "./components/graph.svelte";
	import Nav from "./components/Nav.svelte";
	import Main from "./components/Main.svelte";
</script>

<div id="body">
	<Nav />
	<Graph />
	<Main />
</div>

<style>
	#body {
		margin: 0;
		color: #f5f5f5;
	}
</style>
