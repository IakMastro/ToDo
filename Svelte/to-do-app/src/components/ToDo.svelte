<script>
    let tasks = []
    let task = ''

    function addTask() {
        tasks = [...tasks, task]
    }
</script>

<ul>
    {#each tasks as task}
    <li>{task}</li>
    {/each}
</ul>

<div>
    <label for="task">Thing To Add:</label>
    <input type="text" name="task" id="task" bind:value="{task}">
</div>

<button title="Add task" on:click="{addTask}">Add</button>