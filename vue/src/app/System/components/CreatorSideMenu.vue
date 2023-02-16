<template>
    <div class="wrapper">
        <div
            class="flex flex-col w-full h-full items-center gap-3 justify-between"
        >
            <div class="flex">
                <h2 class="font-bold text-2xl">Kreator plannera</h2>
            </div>
            <div class="flex gap-5">
                <div class="flex flex-col">
                    <label for="dateStart">Data początkowa</label>
                    <input
                        type="date"
                        name="dateStart"
                        id="dateStart"
                        class="rounded-md"
                        :max="props.dateEnd"
                        @input="$emit('update:dateStart', $event.target.value)"
                    />
                </div>
                <div class="flex flex-col">
                    <label for="dateEnd">Data końcowa</label>
                    <input
                        type="date"
                        name="dateEnd"
                        id="dateEnd"
                        class="rounded-md"
                        :min="props.dateStart"
                        @input="$emit('update:dateEnd', $event.target.value)"
                    />
                </div>
            </div>
            <div class="flex flex-col w-full">
                <h2 class="font-bold text-xl">Podsumowanie plannera</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla aliquid architecto labore eos voluptatum corporis
                    excepturi, quaerat quo vel quidem fugit suscipit modi qui
                    provident veritatis minima saepe mollitia necessitatibus?
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    dateStart: {
        type: String,
        default: "",
    },
    dateEnd: {
        type: String,
        default: "",
    },
});
</script>
<style lang="scss" scoped>
.wrapper {
    grid-area: side;
    background-color: $alpha;
    box-shadow: 0px 6px 24px $alpha-dark;
    border-radius: 16px;
    backdrop-filter: blur(25px);
    padding: 2rem;
    display: flex;
    flex-direction: column;
}
</style>
