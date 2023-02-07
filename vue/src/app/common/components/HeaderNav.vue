<template>
    <header class="header">
        <div class="logo-name">LOGONAME</div>
        <div class="header-nav">
            <div class="nav-element">
                <span className="material-symbols-outlined">article</span>
                Plannery
                <!-- <div class="nav-element-dropdown">
                    <div class="dropdown-element">
                        <span className="material-symbols-outlined">
                            add_circle
                        </span>
                        Dodaj produkt
                    </div>
                    <div class="dropdown-element">
                        <span className="material-symbols-outlined">
                            add_circle
                        </span>
                        Dodaj przepis
                    </div>
                    <div class="dropdown-element">
                        <span className="material-symbols-outlined">
                            add_circle
                        </span>
                        Planner tygodniowy
                    </div>
                    <div class="dropdown-element">
                        <span className="material-symbols-outlined">
                            add_circle
                        </span>
                        Lorem ipsum
                    </div>
                </div> -->
            </div>
            <div class="nav-element">
                <span className="material-symbols-outlined">fastfood</span>
                Potrawy
            </div>
            <div class="nav-element">
                <span className="material-symbols-outlined">
                    supervisor_account
                </span>
                Użytkownicy
            </div>
            <div class="nav-element">
                <span className="material-symbols-outlined">settings</span>
                Ustawienia
                <!-- <div class="nav-element-dropdown">
                    <div class="dropdown-element">
                        <span className="material-symbols-outlined">
                            add_circle
                        </span>
                        Ustawienia platformy
                    </div>
                    <div class="dropdown-element">
                        <span className="material-symbols-outlined">
                            add_circle
                        </span>
                        Lorem ipsum
                    </div>
                </div> -->
            </div>
        </div>
        <div class="header-profile">
            <div class="profile-block">
                <div class="profile-avatar"></div>
                <div class="profile-info">
                    <div class="profile-name">Witaj, Adam Kowalski!</div>
                    <div class="profile-role">Administrator</div>
                </div>
                <span className="material-symbols-outlined"> expand_more </span>
            </div>
        </div>
    </header>
</template>
<script></script>
<style lang="scss" scoped>
.header {
    background-color: $alpha;
    box-shadow: 0px 6px 24px $alpha-dark;
    border-radius: 16px;
    display: flex;
    padding: 0 2rem;
    backdrop-filter: blur(25px);
    z-index: 2;
}

.logo-name {
    height: 100%;
    flex: 1;
    font-weight: 800;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: $primary-dark;
}

.header-nav {
    height: 100%;
    flex: 6;
    display: flex;
    align-items: center;
    gap: 4rem;
}

.nav-element {
    font-size: 13px;
    font-weight: 700;
    color: $primary-dark;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    position: relative;
}

.nav-element-dropdown {
    position: absolute;
    padding: 1rem;
    background-color: $white;
    box-shadow: 0px 6px 24px $alpha-dark;
    border-radius: 12px;
    top: calc(100% + 1.5rem);
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 12px;
    border: 1px solid $white-accent;
    cursor: default;
}

.dropdown-element {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
}

.header-profile {
    height: 100%;
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.profile-block {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.profile-avatar {
    background-color: $primary-dark;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.profile-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.profile-name {
    font-size: 15px;
    font-weight: 700;
    color: $black;
}

.profile-role {
    font-size: 12px;
    color: $grey;
}
</style>
