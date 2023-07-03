import styled from 'styled-components';

export const ActionsButton = styled.div`
    background: var(--actionsButton);
    width: 334px; 
    height: 56px;
    border-radius: 8px;
    padding: 20px;
    display: flex; 
    justify-content: space-between;
`;

export const StyledTitle = styled.p`
    color: var(--primaryTextColor);
    font-weight: 500; 
    font-size: 14px;
    line-height: 21px;
`;

export const IconButtonWrapper = styled.button`
    background: inherit;
    border: none;
    margin-right: -8px;
    cursor: pointer;
`;

