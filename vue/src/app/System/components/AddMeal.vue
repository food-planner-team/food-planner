<!-- <template>
    <div class="meal-block">
        <p class="meal-block__element">
            <span class="material-symbols-outlined"> add_circle </span>
            Dodaj danie do dnia
        </p>
    </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.meal-block {
    display: flex;
    height: 130px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 1rem;
    padding-top: 0.8rem;
    box-shadow: 2px 3px 12px $alpha-dark;

    &__element {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
}
</style> -->
<template>
    <!-- <div class="">
        <button
            type="button"
            @click="openModal"
            class="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
            Open dialog
        </button>
    </div> -->
    <div class="meal-block">
        <p class="meal-block__element" type="button" @click="openModal">
            <span class="material-symbols-outlined"> add_circle </span>
            Dodaj danie do dnia
        </p>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div
                    class="flex min-h-full items-center justify-center p-4 text-center"
                >
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                        <DialogPanel
                            class="w-full max-w-5xl h-[40rem] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                        >
                            <div class="m-4 flex justify-between items-center">
                                <DialogTitle
                                    as="h3"
                                    class="text-2xl font-bold leading-6 text-gray-900 relative after:absolute after:w-[400px] after:h-px after:bg-grey after:ml-6 after:top-[50%]"
                                >
                                    Wybierz danie
                                </DialogTitle>
                                <button
                                    type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-primary-dark px-12 py-2 text-sm font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="closeModal"
                                >
                                    Powrót
                                </button>
                            </div>
                            <div class="ml-4">
                                Wybierz danie na
                                <span class="font-medium text-grey">
                                    {{ getCurrentDayName(date) }}
                                    ({{ date }})
                                </span>
                            </div>

                            <div class="m-4 mt-10 h-[450px] overflow-auto">
                                <p class="">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Laboriosam, non tenetur.
                                    Modi ex expedita voluptates repellat eum
                                    sint rem facere sit? Quo architecto error
                                    dolor impedit aliquam, eaque repellendus
                                    laboriosam repudiandae quam, aspernatur
                                    voluptate excepturi odio nesciunt iste.
                                    Placeat, consequatur itaque! Numquam,
                                    voluptatibus? Unde voluptatibus impedit
                                    omnis fugit? Architecto, laudantium.
                                    Delectus excepturi possimus doloremque sit
                                    eaque, error at, libero dolore, accusantium
                                    ut dolor praesentium distinctio nihil
                                    inventore labore id saepe ab reiciendis
                                    omnis. Officiis, aspernatur in excepturi
                                    dicta autem cum? Itaque numquam perferendis,
                                    error odit necessitatibus in ab officia
                                    tempora minus voluptatem natus praesentium
                                    deleniti nobis. Numquam itaque maxime fuga
                                    dolore molestias libero nam fugiat mollitia
                                    laborum? Repudiandae id porro impedit
                                    quaerat nobis autem, enim odio praesentium
                                    blanditiis voluptate in officia repellendus
                                    distinctio laudantium voluptatem.
                                    Distinctio, quis aperiam! Enim earum in, et,
                                    rem voluptate odio quas sunt adipisci dolor
                                    aut doloremque tempore perferendis animi
                                    possimus vel sed exercitationem quidem error
                                    assumenda laborum dolores. Repellendus
                                    debitis doloribus quam nesciunt cupiditate
                                    voluptate, saepe, eligendi molestias
                                    voluptatem illum delectus nisi quibusdam
                                    quas voluptates, ex quisquam unde atque
                                    maxime? Cum tenetur temporibus
                                    necessitatibus eos! Ex aliquam tempora quam,
                                    eligendi impedit temporibus doloremque ea et
                                    porro, a accusantium expedita recusandae
                                    officiis. Deleniti deserunt veniam provident
                                    quibusdam est. Sunt temporibus quae
                                    distinctio nemo eos quo molestias alias
                                    aperiam laudantium, harum cum. Sed facere
                                    voluptatum asperiores accusantium officia
                                    ratione impedit unde ab ducimus beatae et
                                    cum voluptatem labore maiores quo vel odit
                                    nulla delectus, tempora earum! Aperiam
                                    laborum, delectus non, cum, accusamus dolore
                                    enim nesciunt quisquam dignissimos maiores
                                    commodi obcaecati sapiente aspernatur at
                                    perspiciatis deleniti eius aliquam
                                    doloremque pariatur! Earum exercitationem,
                                    itaque eius optio facilis atque perferendis
                                    repudiandae aliquid aperiam fugit
                                    consequuntur ipsa? Id ipsam quibusdam
                                    voluptates ipsa expedita nemo dolor? Earum
                                    porro, eius velit eligendi molestias nam
                                    error quos ratione debitis sapiente tempore?
                                    Accusantium quas at cum veritatis corporis
                                    odio et explicabo possimus non vero
                                    similique, maxime consequatur sequi ipsam
                                    expedita commodi quibusdam eveniet vel atque
                                    illo iste ipsum quod. Libero molestias rerum
                                    dolorum tempore adipisci, alias corporis
                                    odio qui sint nisi atque, sed veritatis
                                    tenetur earum at sunt deserunt quae. Commodi
                                    numquam corrupti, maiores, quis officiis
                                    inventore ipsa earum placeat debitis nam ex,
                                    quos voluptate ipsam laudantium itaque natus
                                    illum. Eius qui repudiandae earum sequi! Hic
                                    quam in id accusamus delectus, ullam
                                    expedita porro. Iusto dolores delectus alias
                                    pariatur nostrum veniam deleniti debitis,
                                    enim facilis consequuntur totam unde ratione
                                    perspiciatis. Ea autem, non cupiditate
                                    debitis unde accusamus quidem incidunt
                                    recusandae itaque delectus, harum rerum
                                    nihil rem quas accusantium eum magnam hic
                                    aspernatur similique omnis, eius inventore
                                    dolor. Libero aliquid tempora beatae
                                    aspernatur similique sit sunt eligendi in
                                    provident deleniti. Sit dolores repellendus
                                    voluptates aliquid expedita autem sapiente
                                    dicta reiciendis molestias dignissimos cum
                                    fuga cupiditate dolor deserunt recusandae
                                    tempore, nisi ad, enim qui minus optio saepe
                                    facere nemo cumque! Et harum provident
                                    numquam aperiam. Dolorum ipsa reprehenderit
                                    possimus nulla ut suscipit eum sunt,
                                    voluptate, omnis at tempora. Quisquam qui
                                    porro culpa nisi facere? Aperiam tempore
                                    vel, sit dolor, eos ex soluta ducimus ut
                                    laborum, explicabo excepturi?
                                </p>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from "@headlessui/vue";
import { getCurrentDayName } from "../../common/utils/datesHelpers";

const isOpen = ref(false);

function closeModal() {
    isOpen.value = false;
}
function openModal() {
    isOpen.value = true;
}

const props = defineProps({
    date: String,
});
</script>

<style lang="scss" scoped>
.meal-block {
    display: flex;
    height: 130px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 1rem;
    padding-top: 0.8rem;
    box-shadow: 2px 3px 12px $alpha-dark;

    &__element {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
    }
}
</style>
