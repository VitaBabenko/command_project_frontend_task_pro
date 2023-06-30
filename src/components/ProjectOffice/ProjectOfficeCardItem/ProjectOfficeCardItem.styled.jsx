import styled from 'styled-components';

export const CardStyled = styled.p`
    background: var(--cardItem);
    max-width: 334px; 
    height: 154px; 
    border-radius: 8px; 
    margin-top: 25px;
    margin-right: 10px;
    margin-bottom: 15px;
    border-left: 4px solid #8FA1D0;
    padding-bottom: 15px;
`;

export const CardTitle = styled.p`
    color: var(--cardHeaderText);
    font-weight: 600; 
    font-size: 14px;
    line-height: 21px; 
    margin-bottom: 7px;
`;

export const CardText = styled.p`
    color: var(--cardItemText);
    font-weight: 400; 
    font-size: 12px;
    line-height: 16px;
    white-space: nowrap;
    overflow: hidden; 
    text-overflow: ellipsis;
    width: 300px;
`;

export const CardFooterTitle = styled.p`
    color: var(--cardItemText);
    font-weight: 400; 
    font-size: 10px;
    line-height: 12px; 
    padding-top: 5px;
`;

export const DividerStyled = styled.div`
    background: var(--cardItemText);
    width: 300px;
    height: 1px;
`;

export const WrapperFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const WrapperText = styled.p`
    color: var(--cardHeaderText);
    font-weight: 400; 
    font-size: 10px;
    line-height: 15px; 
    padding-top: 8px;
`;

export const StatusWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 4px;
`;

export const StatusStyled = styled.div`
    width: 12px;
    height: 12px;
    background: #8FA1D0;
    border-radius: 50%;
`;