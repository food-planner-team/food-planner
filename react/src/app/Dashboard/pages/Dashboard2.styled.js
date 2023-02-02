import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 3rem;
    display: grid;
    grid-template-rows: 80px 1fr 40px;
    gap: 1.5rem;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        width: 960px;
        height: 840px;
        background: linear-gradient(
            37.5deg,
            rgba(47, 79, 79, 0.2) 49.07%,
            rgba(47, 79, 79, 0) 73.29%
        );
        transform: rotate(10deg);
        left: -15%;
        bottom: -20%;
        border-radius: 434px 123px 213px 132px;
        z-index: -1;
    }

    &::after {
        content: "";
        position: absolute;
        width: 590px;
        height: 518px;
        background: linear-gradient(
            37.5deg,
            rgba(47, 79, 79, 0.2) 49.07%,
            rgba(47, 79, 79, 0) 73.29%
        );
        transform: rotate(180deg);
        right: -10%;
        top: -10%;
        border-radius: 434px 123px 213px 132px;
        z-index: -1;
    }
`;

export const Header = styled.header`
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.06);
    border-radius: 16px;
    display: flex;
    padding: 0 2rem;
    backdrop-filter: blur(25px);
    z-index: 2;
`;

export const HeaderLogoname = styled.div`
    height: 100%;
    flex: 1;
    font-weight: 800;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #2f4f4f;
`;

export const HeaderNav = styled.div`
    height: 100%;
    flex: 6;
    display: flex;
    align-items: center;
    gap: 4rem;
`;

export const NavElement = styled.div`
    font-size: 13px;
    font-weight: 700;
    color: #2f4f4f;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    position: relative;
`;

export const NavElementDropdown = styled.div`
    position: absolute;
    padding: 1rem;
    background-color: rgb(252, 252, 252);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    top: calc(100% + 1.5rem);
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 12px;
    border: 1px solid #f2f2f2;
    cursor: default;
`;

export const DropdownElement = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
`;

export const HeaderProfile = styled.div`
    height: 100%;
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: end;
`;

export const ProfileBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const ProfileAvatar = styled.div`
    background-color: #2f4f4f;
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export const ProfileInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

export const ProfileName = styled.div`
    font-size: 15px;
    font-weight: 700;
    color: black;
`;

export const ProfileRole = styled.div`
    font-size: 12px;
    color: #888;
`;

export const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr 380px;
    grid-template-rows: 1fr 380px;
    grid-template-areas:
        "planner stats"
        "planner recommended";
    gap: 1.5rem;
`;

export const MainPlanner = styled.div`
    grid-area: planner;
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.06);
    border-radius: 16px;
    backdrop-filter: blur(25px);
    padding: 2rem;
    overflow: hidden;
`;

export const PlannerContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    gap: 1rem;
    overflow-x: scroll;
    padding-left: 2rem;
    padding-bottom: 2rem;
`;

export const PlannerBlock = styled.div`
    height: 100%;
    min-width: 355px;
    width: 355px;
    margin-right: 2rem;
    border-radius: 8px;
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.06);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;
    overflow: hidden;
    padding-right: 1rem;
`;

export const PlannerBlockHighlighted = styled.div`
    height: 100%;
    min-width: 355px;
    width: 355px;
    margin-right: 2rem;
    border-radius: 8px;
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.06);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;
    overflow: hidden;
    padding-right: 1rem;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 400px;
        background: linear-gradient(to bottom, #2f4f4f25, transparent);
        left: 0;
        top: 0;
        z-index: -1;
    }
`;

export const PlannerBlockHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding-right: 1rem;
`;

export const PlannerTitle = styled.div`
    font-size: 18px;
    font-weight: 800;
`;

export const PlannerText = styled.div`
    font-size: 12px;
    color: #888;
    font-weight: 500;
`;

export const PlannerBlockStats = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-right: 1rem;
`;

export const PlannerStatsElement = styled.div`
    font-size: 10px;
    font-weight: 600;
    border-radius: 24px;
    letter-spacing: 0.3px;
    background-color: #2f4f4f;
    color: white;
    padding: 0.7rem 0;
    flex: 1;
    text-align: center;
    text-transform: uppercase;
`;

export const PlannerStatsElementHighlighted = styled.span`
    color: #86a8a8;
    margin-left: 5px;
`;

export const PlannerBlockContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 400px;
    padding-right: 1rem;
    padding-bottom: 2rem;
    overflow: auto;
`;

export const PlannerMealBlock = styled.div`
    display: grid;
    grid-template-columns: 25% 70%;
    grid-template-rows: auto 1fr;
    gap: 0.85rem 1rem;
    grid-template-areas:
        "meal-settings meal-settings"
        "meal-image meal-information";
    border-radius: 8px;
    padding: 1rem;
    padding-top: 0.8rem;
    box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.06);
`;

export const MealBlockSettings = styled.div`
    grid-area: meal-settings;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

export const MealBlockToolbar = styled.div`
    position: absolute;
    padding: 1rem;
    background-color: rgb(252, 252, 252);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.08);
    border: 1px solid #f2f2f2;
    border-radius: 12px;
    top: 2rem;
    right: 0;
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 12px;
    font-weight: 700;
    color: #2f4f4f;
    z-index: 2;
`;

export const ToolbarElement = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
`;

export const MealBlockImage = styled.div`
    grid-area: meal-image;
    width: 100%;
    aspect-ratio: 1/1;
    background-color: #aaa;
    border-radius: 6px;
`;

export const MealBlockInformation = styled.div`
    grid-area: meal-information;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
`;

export const MealBlockTitle = styled.div`
    font-size: 15px;
    font-weight: 700;
`;

export const MainStats = styled.div`
    grid-area: stats;
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.06);
    border-radius: 16px;
    backdrop-filter: blur(25px);
    padding: 2rem;
    display: flex;
    flex-direction: column;
`;

export const MainStatsHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
`;

export const StatsHeaderTitle = styled.div`
    font-size: 18px;
    font-weight: 800;
`;

export const StatsHeaderText = styled.div`
    font-size: 12px;
    font-weight: 500;
    color: #aaa;
`;

export const MainStatsContainer = styled.div`
    flex: 4;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    padding-bottom: 0;
`;

export const StatsElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    height: 100%;
`;

export const StatsElementBar = styled.div`
    width: 26px;
    height: 100%;
    background-color: #2f4f4f10;
    border-radius: 16px;
    position: relative;
`;

export const StatsElementBarInner = styled.div`
    height: 50%;
    width: 100%;
    background-color: #2f4f4f;
    border-radius: 16px;
    position: absolute;
    bottom: 0;
`;

export const StatsElementText = styled.div`
    font-size: 11px;
    font-weight: 500;
    color: #aaa;
`;

export const MainRecommended = styled.div`
    grid-area: recommended;
    display: flex;
    gap: 3rem;
`;

export const RecommendedCard = styled.div`
    height: 100%;
    background-color: #777;
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
        background: linear-gradient(to bottom, rgb(35, 35, 35), transparent);
        top: 0;
    }
`;

export const RecommendedCardHeader = styled.div`
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
        background-color: #2f4f4f;
    }
`;

export const CardHeaderTitle = styled.div`
    font-size: 11px;
    letter-spacing: 0.8px;
    font-weight: 500;
    color: #aaa;
`;

export const CardHeaderText = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: white;
`;

export const Footer = styled.footer`
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.06);
    border-radius: 16px;
    font-size: 12px;
    color: #aaa;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(25px);
`;
