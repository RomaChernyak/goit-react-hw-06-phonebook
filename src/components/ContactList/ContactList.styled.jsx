import styled from "@emotion/styled";

export const ItemList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0 0 0 20px;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
        background-color: #f0f0f0;
    }
`;

export const Contact = styled.div`
    display: flex;
    gap: 16px;
`;

export const Button = styled.button`
    width: 96px;
    height: 24px;

    background-color: white;
    border: 1px solid gray;
    border-radius: 5px;

    /* opacity: 0.6; */

    cursor: pointer;

    &:hover {
        color: red;
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
        /* opacity: 1; */
    }

    &:focus, :active {
        outline: none;

        background-color: red;
        color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
        /* opacity: 1; */
    }
`;

