<template>
    <div class="wrapper">
        <div class="stats-header">
            <div class="stats-header__title">
                Statystyki (ilość kalorii dziennie)
            </div>
            <div class="stats-header__text">
                Najbliższy plan tygodniowy (01.01.2020 - 07.01.2020)
            </div>
        </div>
        <div class="stats-container">
            <div class="stats-element">
                <div class="stats-element__bar">
                    <div class="bar__inner" />
                </div>
                <div class="stats-element__text">01/01</div>
            </div>
            <div class="stats-element">
                <div class="stats-element__bar">
                    <div class="bar__inner" />
                </div>
                <div class="stats-element__text">01/01</div>
            </div>
            <div class="stats-element">
                <div class="stats-element__bar">
                    <div class="bar__inner" />
                </div>
                <div class="stats-element__text">01/01</div>
            </div>
            <div class="stats-element">
                <div class="stats-element__bar">
                    <div class="bar__inner" />
                </div>
                <div class="stats-element__text">01/01</div>
            </div>
            <div class="stats-element">
                <div class="stats-element__bar">
                    <div class="bar__inner" />
                </div>
                <div class="stats-element__text">01/01</div>
            </div>
            <div class="stats-element">
                <div class="stats-element__bar">
                    <div class="bar__inner" />
                </div>
                <div class="stats-element__text">01/01</div>
            </div>
            <div class="stats-element">
                <div class="stats-element__bar">
                    <div class="bar__inner" />
                </div>
                <div class="stats-element__text">01/01</div>
            </div>
        </div>
    </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.wrapper {
    grid-area: stats;
    background-color: $alpha;
    box-shadow: 0px 6px 24px $alpha-dark;
    border-radius: 16px;
    backdrop-filter: blur(25px);
    padding: 2rem;
    display: flex;
    flex-direction: column;
}

.stats-header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;

    &__title {
        font-size: 18px;
        font-weight: 800;
    }

    &__text {
        font-size: 12px;
        font-weight: 500;
        color: $typography;
    }
}

.stats-container {
    flex: 4;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    padding-bottom: 0;
}

.stats-element {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    height: 100%;

    &__bar {
        width: 26px;
        height: 100%;
        background-color: $white-accent;
        border-radius: 16px;
        position: relative;
    }

    .bar__inner {
        height: 50%;
        width: 100%;
        background-color: $primary-dark;
        border-radius: 16px;
        position: absolute;
        bottom: 0;
    }

    &__text {
        font-size: 11px;
        font-weight: 500;
        color: $typography;
    }
}
</style>
