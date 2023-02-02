import React from "react";
import styled from "styled-components";

export const Header = () => {
    return (
        <StyledHeader>
            <HeaderLogoname>LOGONAME</HeaderLogoname>
            <HeaderNav>
                <NavElement>
                    <span className="material-symbols-outlined">article</span>
                    Plannery
                    {/* <NavElementDropdown>
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
                    </NavElementDropdown> */}
                </NavElement>
                <NavElement>
                    <span className="material-symbols-outlined">fastfood</span>
                    Potrawy
                </NavElement>
                <NavElement>
                    <span className="material-symbols-outlined">
                        supervisor_account
                    </span>
                    Użytkownicy
                </NavElement>
                <NavElement>
                    <span className="material-symbols-outlined">settings</span>
                    Ustawienia
                    {/* <NavElementDropdown>
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
                    </NavElementDropdown> */}
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
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.06);
    border-radius: 16px;
    display: flex;
    padding: 0 2rem;
    backdrop-filter: blur(25px);
    z-index: 2;
`;

const HeaderLogoname = styled.div`
    height: 100%;
    flex: 1;
    font-weight: 800;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #2f4f4f;
`;

const HeaderNav = styled.div`
    height: 100%;
    flex: 6;
    display: flex;
    align-items: center;
    gap: 4rem;
`;

const NavElement = styled.div`
    font-size: 13px;
    font-weight: 700;
    color: #2f4f4f;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    position: relative;
`;

const NavElementDropdown = styled.div`
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

const DropdownElement = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
`;

const HeaderProfile = styled.div`
    height: 100%;
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: end;
`;

const ProfileBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const ProfileAvatar = styled.div`
    background-color: #2f4f4f;
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const ProfileInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

const ProfileName = styled.div`
    font-size: 15px;
    font-weight: 700;
    color: black;
`;

const ProfileRole = styled.div`
    font-size: 12px;
    color: #888;
`;
