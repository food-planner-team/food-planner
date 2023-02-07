<!-- <script setup lang="ts">
import draggable from "vuedraggable";
import { ref } from "vue";

const message = [
    "vue.draggable",
    "draggable",
    "component",
    "for",
    "vue.js 2.0",
    "based",
    "on",
    "Sortablejs",
];

const list = ref(
    message.map((name, index) => {
        return { name, order: index + 1 };
    })
);

const dragOptions = ref({
    animation: 200,
    group: "description",
    disabled: false,
    ghostClass: "ghost",
});

const drag = ref(false);

const sort = () => {
    console.log("here");
    list.value = list.value.sort((a, b) => a.order - b.order);
};
</script>

<template>
    <div class="row">
        <div class="col-2">
            <button class="btn btn-secondary button" @click="sort">
                To original order
            </button>
        </div>

        <div class="col-6">
            <h3>Transition</h3>
            <transition-group>
                <draggable
                    item-key="name"
                    key="dragggable"
                    :list="list"
                    v-bind="dragOptions"
                    @start="drag = true"
                    @end="drag = false"
                    handle=".handle"
                >
                    <template #item="{ element }">
                        <li :key="element.name">
                            <span class="handle">::</span>
                            {{ element.name }}
                            <span class="handle">x</span>
                        </li>
                    </template>
                </draggable>
            </transition-group>
        </div>
    </div>
</template>

<style>
.button {
    margin-top: 35px;
}

.ghost {
    opacity: 0.5;
    background: #c8ebfb;
}
</style> -->
<script setup>
import draggable from "vuedraggable";
import { ref } from "vue";

const message = [
    "vue.draggable",
    "draggable",
    "component",
    "for",
    "vue.js 2.0",
    "based",
    "on",
    "Sortablejs",
];

const list = ref(
    message.map((name, index) => {
        return { name, order: index + 1 };
    })
);

const dragOptions = ref({
    animation: 200,
    group: "description",
    disabled: false,
    ghostClass: "ghost",
});

const drag = ref(false);

const removeAt = (idx) => {
    list.value.splice(idx, 1);
};

const sort = () => {
    console.log("here");
    list.value = list.value.sort((a, b) => a.order - b.order);
};
</script>

<template>
    <div class="row">
        <div class="col-2">
            <button class="btn btn-secondary button" @click="sort">
                To original order
            </button>
        </div>

        <div class="col-6">
            <h3>Transition</h3>
            <draggable
                item-key="name"
                :list="list"
                v-bind="dragOptions"
                @start="drag = true"
                @end="drag = false"
                handle=".handle"
            >
                <template #item="{ element, index }">
                    <div :key="element.name" class="item">
                        <span class="handle"> :: </span>
                        <div>
                            {{ element.name }}
                        </div>
                        <i class="fa fa-times close" @click="removeAt(index)"
                            >remove</i
                        >
                    </div>
                </template>
            </draggable>
        </div>
    </div>
</template>

<style>
/* .button {
    margin-top: 35px;
}

.ghost {
    opacity: 0.5;
    background: #c8ebfb;
    border-left: 5px solid royalblue;
}

.item {
    background-color: lightgray;
    padding: 5px;
    margin: 2px;
    height: 150px;
}

.handle {
    cursor: grab;
} */
</style>
