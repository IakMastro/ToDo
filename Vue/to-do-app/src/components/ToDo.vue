<template>
    <div>
        <ul>
            <div v-for="(task, index) in tasks" :key="index">
                <li>{{task}}</li>
            </div>
        </ul>

        <div>
            <label for="task">Thing To Add:</label>
            <input type="text" name="task" id="task" v-model="task">

            <button title="Add task" @click="addTask()">Add</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() { 
        return {
            task: '',
            tasks: []
        }
    },
    methods: {
        addTask(): void {
            this.tasks.push(this.task)
        }
    }
})
</script>


<style scoped>

</style>