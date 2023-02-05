import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Loader } from "../../common/components/Loader";
import Api, { useAxios } from "../../common/services/Api";
import { PlannerBlock } from "./PlannerBlock";

export const Planner = () => {
    const [dateStart, setDateStart] = useState("2023-02-04");
    const [dateEnd, setDateEnd] = useState("2023-02-06");

    const { response, loading, error } = useAxios({
        method: "get",
        url: `/user/recipes?dateStart=${dateStart}&dateEnd=${dateEnd}`,
    });
    const [data, setData] = useState([]);

    useEffect(() => {
        if (response !== null) {
            setData(response.data);
        }
    }, [response]);

    // console.log(response);

    const setUniqueDates = new Set();

    data.forEach((el) => {
        setUniqueDates.add(el.date);
    });

    console.log(data);

    const uniqueDates = [...setUniqueDates];

    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    return (
        <MainPlanner>
            <PlannerContainer style={loading ? style : null}>
                {loading ? (
                    <Loader />
                ) : (
                    uniqueDates.map((day, index) => (
                        <PlannerBlock
                            key={day}
                            highlighted={index === 0 ? true : false}
                            data={data}
                            date={day}
                        />
                    ))
                )}
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
