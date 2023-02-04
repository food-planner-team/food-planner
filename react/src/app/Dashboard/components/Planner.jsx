import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthHeader } from "react-auth-kit";
import styled from "styled-components";
import Api from "../../common/services/Api";
import { PlannerBlock } from "./PlannerBlock";

export const Planner = () => {
    const [data, setData] = useState();

    const [dateStart, setDateStart] = useState("2023-02-04");
    const [dateEnd, setDateEnd] = useState("2023-02-06");

    // const token = useAuthHeader();
    // console.log("token: " + token);

    // useEffect(async () => {
    //     const result = await Api.get("/user/recipes", { dateStart, dateEnd });

    //     setData(result.data);
    // }, []);

    // console.log(data);

    // user/recipes?dateStart=2023-02-04&dateEnd=2023-02-06
    // Api.post("/login", { email, password })
    //         .then((response) => {
    //             signIn({
    //                 token: response.data.token,
    //                 expiresIn: response.data.expiresIn || 3600,
    //                 tokenType: "Bearer",
    //                 authState: {},
    //             });
    //             navigate("/");
    //         })
    //         .catch((e) => {
    //             setError("Podane dane są nieprawidłowe");
    //         });

    return (
        <MainPlanner>
            <PlannerContainer>
                <PlannerBlock highlighted />
                <PlannerBlock />
                <PlannerBlock />
                <PlannerBlock />
                <PlannerBlock />
                <PlannerBlock />
                <PlannerBlock />
            </PlannerContainer>
        </MainPlanner>
    );
};

const MainPlanner = styled.div`
    grid-area: planner;
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.06);
    border-radius: 16px;
    backdrop-filter: blur(25px);
    padding: 2rem;
    overflow: hidden;
`;

const PlannerContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    gap: 1rem;
    overflow-x: scroll;
    padding-left: 2rem;
    padding-bottom: 2rem;
`;
