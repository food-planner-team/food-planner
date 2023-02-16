<template>
    <div class="wrapper">
        <div class="card">
            <div class="card__header">
                <div class="header__title">POLECANE</div>
                <div class="header__text">Lorem ipsum dolor sit amet</div>
            </div>
        </div>
    </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.wrapper {
    grid-area: recommended;
    display: flex;
    gap: 3rem;
}

.card {
    height: 100%;
    background-image: url("https://unsplash.it/650/650");
    background-position: center;
    background-size: cover;
    background-color: $grey;
    border-radius: 16px;
    flex: 1;
    padding: 1.5rem 0;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 245px;
        background: linear-gradient(to bottom, $dark, transparent);
        top: 0;
    }

    &__header {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        width: 85%;
        margin: 0 auto;
        padding-left: 2.5rem;
        position: relative;

        &::before {
            content: "";
            height: calc(100% + 1.5rem);
            width: 25px;
            top: -1.5rem;
            left: 0;
            border-radius: 0px 0px 6px 6px;
            position: absolute;
            background-color: $primary-dark;
        }

        .header__title {
            font-size: 11px;
            letter-spacing: 0.8px;
            font-weight: 500;
            color: $typography;
        }

        .header__text {
            font-size: 18px;
            font-weight: 700;
            color: $white;
        }
    }
}
</style>
