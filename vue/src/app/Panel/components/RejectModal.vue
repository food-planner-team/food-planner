<template>
    <TransitionRoot appear :show="isOpenModal" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-[500px] h-[90dvh] lg:h-[33rem] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all flex flex-col relative">
                            <button class="flex justify-center items-center absolute top-5 right-5 lg:hidden"
                                @click="closeModal">
                                <span class="material-symbols-outlined">
                                    close
                                </span>
                            </button>
                            <div class="m-4 flex justify-between items-center">
                                <DialogTitle as="h3"
                                    class="text-2xl font-bold leading-6 text-gray-900 relative lg:after:absolute after:w-[400px] ">
                                    Odrzucenie
                                </DialogTitle>
                                <button type="button"
                                    class="hidden lg:inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 py-2.5 text-sm font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="closeModal">
                                    Powrót
                                </button>
                            </div>
                            <div class="w-full h-full flex flex-col p-4 mt-10 pb-0">
                                <div class="flex flex-col gap-4">
                                    <div class="flex flex-col">
                                        <label class="mb-2" for="rejectText">Powód odrzucenia</label>
                                        <textarea class="border border-gray-300 rounded-md p-2 min-h-[160px]"
                                            style="resize: none" id="rejectText" placeholder="Powód odrzucenia"
                                            v-model="rejectText" @keypress="errors.rejectText = false" :class="errors.rejectText ? 'bg-red-100 ' : ''
                                                "></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-center sm:justify-end p-4">
                                <button
                                    class="inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 py-2 text-base font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="handleReject">
                                    Odrzuć
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from "@headlessui/vue";

const props = defineProps({
    isOpenModal: {
        type: Boolean,
        default: false,
    },
    rejectValue: {
        type: String,
        default: "",
    },
    reject: {
        type: Function,
        default: () => { },
    },
});

const emit = defineEmits(["update:isOpenModal", "update:rejectValue"]);

const rejectText = ref("");
const errors = reactive({
    name: rejectText,
});

function closeModal() {
    emit("update:isOpenModal", false);
}

function handleReject() {
    if (!rejectText.value) {
        errors.rejectText = true;
        return;
    }

    emit("update:rejectValue", rejectText.value);
    rejectText.value = "";
    props.reject();
    closeModal();
}
</script>

<style lang="scss" scoped>
.meal-block {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 1rem;
    padding-top: 0.8rem;
    box-shadow: 2px 3px 12px $alpha-dark;
    height: 110px;

    &__element {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        height: 100px;
        cursor: pointer;
    }
}
</style>
