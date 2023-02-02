import React from "react";
import {
    CardHeaderText,
    CardHeaderTitle,
    Container,
    DropdownElement,
    Footer,
    Header,
    HeaderLogoname,
    HeaderNav,
    HeaderProfile,
    Main,
    MainPlanner,
    MainRecommended,
    MainStats,
    MainStatsContainer,
    MainStatsHeader,
    MealBlockImage,
    MealBlockInformation,
    MealBlockSettings,
    MealBlockTitle,
    MealBlockToolbar,
    NavElement,
    NavElementDropdown,
    PlannerBlock,
    PlannerBlockContainer,
    PlannerBlockHeader,
    PlannerBlockHighlighted,
    PlannerBlockStats,
    PlannerContainer,
    PlannerMealBlock,
    PlannerStatsElement,
    PlannerStatsElementHighlighted,
    PlannerText,
    PlannerTitle,
    ProfileAvatar,
    ProfileBlock,
    ProfileInformation,
    ProfileName,
    ProfileRole,
    RecommendedCard,
    RecommendedCardHeader,
    StatsElement,
    StatsElementBar,
    StatsElementBarInner,
    StatsElementText,
    StatsHeaderText,
    StatsHeaderTitle,
    ToolbarElement,
} from "./Dashboard2.styled";

export const Dashboard2 = () => {
    return (
        <Container>
            <Header>
                <HeaderLogoname>LOGONAME</HeaderLogoname>
                <HeaderNav>
                    <NavElement>
                        <span className="material-symbols-outlined">
                            article
                        </span>
                        Plannery
                        <NavElementDropdown>
                            <DropdownElement>
                                <span className="material-symbols-outlined">
                                    add_circle
                                </span>
                                Dodaj produkt
                            </DropdownElement>
                            <DropdownElement>
                                <span className="material-symbols-outlined">
                                    add_circle
                                </span>
                                Dodaj przepis
                            </DropdownElement>
                            <DropdownElement>
                                <span className="material-symbols-outlined">
                                    add_circle
                                </span>
                                Planner tygodniowy
                            </DropdownElement>
                            <DropdownElement>
                                <span className="material-symbols-outlined">
                                    add_circle
                                </span>
                                Lorem ipsum
                            </DropdownElement>
                        </NavElementDropdown>
                    </NavElement>
                    <NavElement>
                        <span className="material-symbols-outlined">
                            fastfood
                        </span>
                        Potrawy
                    </NavElement>
                    <NavElement>
                        <span className="material-symbols-outlined">
                            supervisor_account
                        </span>
                        Użytkownicy
                    </NavElement>
                    <NavElement>
                        <span className="material-symbols-outlined">
                            settings
                        </span>
                        Ustawienia
                        <NavElementDropdown>
                            <DropdownElement>
                                <span className="material-symbols-outlined">
                                    add_circle
                                </span>
                                Ustawienia platformy
                            </DropdownElement>
                            <DropdownElement>
                                <span className="material-symbols-outlined">
                                    add_circle
                                </span>
                                Lorem ipsum
                            </DropdownElement>
                        </NavElementDropdown>
                    </NavElement>
                </HeaderNav>
                <HeaderProfile>
                    <ProfileBlock>
                        <ProfileAvatar></ProfileAvatar>
                        <ProfileInformation>
                            <ProfileName>Witaj, Adam Kowalski!</ProfileName>
                            <ProfileRole>Administrator</ProfileRole>
                        </ProfileInformation>
                        <span className="material-symbols-outlined">
                            expand_more
                        </span>
                    </ProfileBlock>
                </HeaderProfile>
            </Header>
            <Main>
                <MainPlanner>
                    <PlannerContainer>
                        <PlannerBlockHighlighted>
                            <PlannerBlockHeader>
                                <PlannerTitle>Dziś, Poniedziałek</PlannerTitle>
                                <PlannerText>01.01.2020</PlannerText>
                            </PlannerBlockHeader>
                            <PlannerBlockStats>
                                <PlannerStatsElement>
                                    Kalorie{" "}
                                    <PlannerStatsElementHighlighted>
                                        1234
                                    </PlannerStatsElementHighlighted>
                                </PlannerStatsElement>
                                <PlannerStatsElement>
                                    Dania{" "}
                                    <PlannerStatsElementHighlighted>
                                        4
                                    </PlannerStatsElementHighlighted>
                                </PlannerStatsElement>
                            </PlannerBlockStats>
                            <PlannerBlockContainer>
                                <PlannerMealBlock>
                                    <MealBlockSettings>
                                        <span className="material-symbols-outlined">
                                            drag_indicator
                                        </span>
                                        <span className="material-symbols-outlined">
                                            more_vert
                                        </span>
                                        <MealBlockToolbar>
                                            <ToolbarElement>
                                                <span className="material-symbols-outlined">
                                                    search
                                                </span>
                                                Zobacz danie
                                            </ToolbarElement>
                                            <ToolbarElement>
                                                <span className="material-symbols-outlined">
                                                    delete
                                                </span>
                                                Usuń
                                            </ToolbarElement>
                                        </MealBlockToolbar>
                                    </MealBlockSettings>
                                    <MealBlockImage></MealBlockImage>
                                    <MealBlockInformation>
                                        <MealBlockTitle>
                                            Kurczak z ryżem w sosie
                                            słodkokwaśnym
                                        </MealBlockTitle>
                                    </MealBlockInformation>
                                </PlannerMealBlock>
                                <PlannerMealBlock>
                                    <MealBlockSettings>
                                        <span className="material-symbols-outlined">
                                            drag_indicator
                                        </span>
                                        <span className="material-symbols-outlined">
                                            more_vert
                                        </span>
                                        <MealBlockToolbar>
                                            <ToolbarElement>
                                                <span className="material-symbols-outlined">
                                                    search
                                                </span>
                                                Zobacz danie
                                            </ToolbarElement>
                                            <ToolbarElement>
                                                <span className="material-symbols-outlined">
                                                    delete
                                                </span>
                                                Usuń
                                            </ToolbarElement>
                                        </MealBlockToolbar>
                                    </MealBlockSettings>
                                    <MealBlockImage></MealBlockImage>
                                    <MealBlockInformation>
                                        <MealBlockTitle>
                                            Kurczak z ryżem w sosie
                                            słodkokwaśnym
                                        </MealBlockTitle>
                                    </MealBlockInformation>
                                </PlannerMealBlock>
                                <PlannerMealBlock>
                                    <MealBlockSettings>
                                        <span className="material-symbols-outlined">
                                            drag_indicator
                                        </span>
                                        <span className="material-symbols-outlined">
                                            more_vert
                                        </span>
                                        <MealBlockToolbar>
                                            <ToolbarElement>
                                                <span className="material-symbols-outlined">
                                                    search
                                                </span>
                                                Zobacz danie
                                            </ToolbarElement>
                                            <ToolbarElement>
                                                <span className="material-symbols-outlined">
                                                    delete
                                                </span>
                                                Usuń
                                            </ToolbarElement>
                                        </MealBlockToolbar>
                                    </MealBlockSettings>
                                    <MealBlockImage></MealBlockImage>
                                    <MealBlockInformation>
                                        <MealBlockTitle>
                                            Kurczak z ryżem w sosie
                                            słodkokwaśnym
                                        </MealBlockTitle>
                                    </MealBlockInformation>
                                </PlannerMealBlock>
                                <PlannerMealBlock>
                                    <MealBlockSettings>
                                        <span className="material-symbols-outlined">
                                            drag_indicator
                                        </span>
                                        <span className="material-symbols-outlined">
                                            more_vert
                                        </span>
                                        <MealBlockToolbar>
                                            <ToolbarElement>
                                                <span className="material-symbols-outlined">
                                                    search
                                                </span>
                                                Zobacz danie
                                            </ToolbarElement>
                                            <ToolbarElement>
                                                <span className="material-symbols-outlined">
                                                    delete
                                                </span>
                                                Usuń
                                            </ToolbarElement>
                                        </MealBlockToolbar>
                                    </MealBlockSettings>
                                    <MealBlockImage></MealBlockImage>
                                    <MealBlockInformation>
                                        <MealBlockTitle>
                                            Kurczak z ryżem w sosie
                                            słodkokwaśnym
                                        </MealBlockTitle>
                                    </MealBlockInformation>
                                </PlannerMealBlock>
                                <PlannerMealBlock>
                                    <MealBlockSettings>
                                        <span className="material-symbols-outlined">
                                            drag_indicator
                                        </span>
                                        <span className="material-symbols-outlined">
                                            more_vert
                                        </span>
                                        <MealBlockToolbar>
                                            <ToolbarElement>
                                                <span className="material-symbols-outlined">
                                                    search
                                                </span>
                                                Zobacz danie
                                            </ToolbarElement>
                                            <ToolbarElement>
                                                <span className="material-symbols-outlined">
                                                    delete
                                                </span>
                                                Usuń
                                            </ToolbarElement>
                                        </MealBlockToolbar>
                                    </MealBlockSettings>
                                    <MealBlockImage></MealBlockImage>
                                    <MealBlockInformation>
                                        <MealBlockTitle>
                                            Kurczak z ryżem w sosie
                                            słodkokwaśnym
                                        </MealBlockTitle>
                                    </MealBlockInformation>
                                </PlannerMealBlock>
                            </PlannerBlockContainer>
                        </PlannerBlockHighlighted>
                        <PlannerBlock>
                            <PlannerBlockHeader>
                                <PlannerTitle>Wtorek</PlannerTitle>
                                <PlannerText>02.01.2020</PlannerText>
                            </PlannerBlockHeader>
                            <PlannerBlockStats>
                                <PlannerStatsElement>
                                    Kalorie{" "}
                                    <PlannerStatsElementHighlighted>
                                        1234
                                    </PlannerStatsElementHighlighted>
                                </PlannerStatsElement>
                                <PlannerStatsElement>
                                    Dania{" "}
                                    <PlannerStatsElementHighlighted>
                                        4
                                    </PlannerStatsElementHighlighted>
                                </PlannerStatsElement>
                            </PlannerBlockStats>
                            <PlannerBlockContainer>
                                <PlannerMealBlock>
                                    <MealBlockSettings>
                                        <span className="material-symbols-outlined">
                                            drag_indicator
                                        </span>
                                        <span className="material-symbols-outlined">
                                            more_vert
                                        </span>
                                        <MealBlockToolbar>
                                            <ToolbarElement>
                                                <span className="material-symbols-outlined">
                                                    search
                                                </span>
                                                Zobacz danie
                                            </ToolbarElement>
                                            <ToolbarElement>
                                                <span className="material-symbols-outlined">
                                                    delete
                                                </span>
                                                Usuń
                                            </ToolbarElement>
                                        </MealBlockToolbar>
                                    </MealBlockSettings>
                                    <MealBlockImage></MealBlockImage>
                                    <MealBlockInformation>
                                        <MealBlockTitle>
                                            Kurczak z ryżem w sosie
                                            słodkokwaśnym
                                        </MealBlockTitle>
                                    </MealBlockInformation>
                                </PlannerMealBlock>
                                <PlannerMealBlock>
                                    <MealBlockSettings>
                                        <span className="material-symbols-outlined">
                                            drag_indicator
                                        </span>
                                        <span className="material-symbols-outlined">
                                            more_vert
                                        </span>
                                        <MealBlockToolbar>
                                            <ToolbarElement>
                                                <span className="material-symbols-outlined">
                                                    search
                                                </span>
                                                Zobacz danie
                                            </ToolbarElement>
                                            <ToolbarElement>
                                                <span className="material-symbols-outlined">
                                                    delete
                                                </span>
                                                Usuń
                                            </ToolbarElement>
                                        </MealBlockToolbar>
                                    </MealBlockSettings>
                                    <MealBlockImage></MealBlockImage>
                                    <MealBlockInformation>
                                        <MealBlockTitle>
                                            Kurczak z ryżem w sosie
                                            słodkokwaśnym
                                        </MealBlockTitle>
                                    </MealBlockInformation>
                                </PlannerMealBlock>
                                <PlannerMealBlock>
                                    <MealBlockSettings>
                                        <span className="material-symbols-outlined">
                                            drag_indicator
                                        </span>
                                        <span className="material-symbols-outlined">
                                            more_vert
                                        </span>
                                        <MealBlockToolbar>
                                            <ToolbarElement>
                                                <span className="material-symbols-outlined">
                                                    search
                                                </span>
                                                Zobacz danie
                                            </ToolbarElement>
                                            <ToolbarElement>
                                                <span className="material-symbols-outlined">
                                                    delete
                                                </span>
                                                Usuń
                                            </ToolbarElement>
                                        </MealBlockToolbar>
                                    </MealBlockSettings>
                                    <MealBlockImage></MealBlockImage>
                                    <MealBlockInformation>
                                        <MealBlockTitle>
                                            Kurczak z ryżem w sosie
                                            słodkokwaśnym
                                        </MealBlockTitle>
                                    </MealBlockInformation>
                                </PlannerMealBlock>
                                <PlannerMealBlock>
                                    <MealBlockSettings>
                                        <span className="material-symbols-outlined">
                                            drag_indicator
                                        </span>
                                        <span className="material-symbols-outlined">
                                            more_vert
                                        </span>
                                        <MealBlockToolbar>
                                            <ToolbarElement>
                                                <span className="material-symbols-outlined">
                                                    search
                                                </span>
                                                Zobacz danie
                                            </ToolbarElement>
                                            <ToolbarElement>
                                                <span className="material-symbols-outlined">
                                                    delete
                                                </span>
                                                Usuń
                                            </ToolbarElement>
                                        </MealBlockToolbar>
                                    </MealBlockSettings>
                                    <MealBlockImage></MealBlockImage>
                                    <MealBlockInformation>
                                        <MealBlockTitle>
                                            Kurczak z ryżem w sosie
                                            słodkokwaśnym
                                        </MealBlockTitle>
                                    </MealBlockInformation>
                                </PlannerMealBlock>
                                <PlannerMealBlock>
                                    <MealBlockSettings>
                                        <span className="material-symbols-outlined">
                                            drag_indicator
                                        </span>
                                        <span className="material-symbols-outlined">
                                            more_vert
                                        </span>
                                        <MealBlockToolbar>
                                            <ToolbarElement>
                                                <span className="material-symbols-outlined">
                                                    search
                                                </span>
                                                Zobacz danie
                                            </ToolbarElement>
                                            <ToolbarElement>
                                                <span className="material-symbols-outlined">
                                                    delete
                                                </span>
                                                Usuń
                                            </ToolbarElement>
                                        </MealBlockToolbar>
                                    </MealBlockSettings>
                                    <MealBlockImage></MealBlockImage>
                                    <MealBlockInformation>
                                        <MealBlockTitle>
                                            Kurczak z ryżem w sosie
                                            słodkokwaśnym
                                        </MealBlockTitle>
                                    </MealBlockInformation>
                                </PlannerMealBlock>
                            </PlannerBlockContainer>
                        </PlannerBlock>
                    </PlannerContainer>
                </MainPlanner>
                <MainStats>
                    <MainStatsHeader>
                        <StatsHeaderTitle>
                            Statystyki (ilość kalorii dziennie)
                        </StatsHeaderTitle>
                        <StatsHeaderText>
                            Najbliższy plan tygodniowy (01.01.2020 - 07.01.2020)
                        </StatsHeaderText>
                    </MainStatsHeader>
                    <MainStatsContainer>
                        <StatsElement>
                            <StatsElementBar>
                                <StatsElementBarInner />
                            </StatsElementBar>
                            <StatsElementText>01/01</StatsElementText>
                        </StatsElement>
                        <StatsElement>
                            <StatsElementBar>
                                <StatsElementBarInner />
                            </StatsElementBar>
                            <StatsElementText>02/01</StatsElementText>
                        </StatsElement>
                        <StatsElement>
                            <StatsElementBar>
                                <StatsElementBarInner />
                            </StatsElementBar>
                            <StatsElementText>03/01</StatsElementText>
                        </StatsElement>
                        <StatsElement>
                            <StatsElementBar>
                                <StatsElementBarInner />
                            </StatsElementBar>
                            <StatsElementText>04/01</StatsElementText>
                        </StatsElement>
                        <StatsElement>
                            <StatsElementBar>
                                <StatsElementBarInner />
                            </StatsElementBar>
                            <StatsElementText>05/01</StatsElementText>
                        </StatsElement>
                        <StatsElement>
                            <StatsElementBar>
                                <StatsElementBarInner />
                            </StatsElementBar>
                            <StatsElementText>06/01</StatsElementText>
                        </StatsElement>
                        <StatsElement>
                            <StatsElementBar>
                                <StatsElementBarInner />
                            </StatsElementBar>
                            <StatsElementText>07/01</StatsElementText>
                        </StatsElement>
                    </MainStatsContainer>
                </MainStats>
                <MainRecommended>
                    <RecommendedCard>
                        <RecommendedCardHeader>
                            <CardHeaderTitle>POLECANE</CardHeaderTitle>
                            <CardHeaderText>
                                Lorem ipsum dolor sit amet
                            </CardHeaderText>
                        </RecommendedCardHeader>
                    </RecommendedCard>
                </MainRecommended>
            </Main>
            <Footer>Food Planner 2023</Footer>
        </Container>
    );
};
