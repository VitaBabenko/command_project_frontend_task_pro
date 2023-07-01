import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoLink = styled.div`
  color: inherit;
`;

export const SidebarBoards = styled.div`
  margin-bottom: auto;
  min-width: 100%;
  display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TitleMin = styled.span`
  margin-bottom: 8px;
  margin-right: auto;
  margin-left: 24px;
      color: var(--addAnotherColumnIconBgColor);
      font-size: 12px;
      display: block;
`;

export const SidebarCreateNew = styled.div`
 color: var(--addAnotherColumnIconBgColor);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    padding: 14px 0;
    font-size: 14px;
    border-top: 1px solid var(--currentProjBgColor);
    border-bottom: 1px solid var(--currentProjBgColor);
    width: 212px;
`;

export const NewBoardBtn = styled.button`
 width: 40px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      border-radius: 6px;
      background: #BEDBB0;
      line-height: 1;
      color: #121212;
      border: none;
      outline: none;
      cursor: pointer;
`;

export const SidebarPrjctList = styled.ul`
width: 100%;
    margin-bottom: 40px;
`;

export const PrjctItemMain = styled.div`
  padding: 20px 20px 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: rgba(255,255,255,0.5);
    position: relative;
    overflow: hidden;
    path{
      stroke: rgba(255,255,255,0.5);
    };
    path.selected{
      color: rgba(255,255,255,1);
      stroke: rgba(255,255,255,1);
    };
    :after{
      content: "";
        width: 4px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background: #BEDBB0;
        border-bottom-left-radius: 2px;
        border-top-left-radius: 2px;
    }
`;

export const FlexElems = styled.div`
 display: flex;
      align-items: center;
      margin-left: 24px;
`;

export const IconWrap = styled.div`
 margin-right: 8px;
      display: inline-block;
`;

export const PrjctActionList = styled.ul`
 display: flex;
      align-items: center;
      li{
        cursor:pointer;
      };
      li:last-child{
        margin-left: 8px;
      };
      margin-right: 24px;

`;

export const Text = styled.p`
 line-height: 21px;
 font-weight: 500;
 font-size: 14px;
 text-decoration: none;
`;

export const Title = styled.h3`
 line-height: 21px;
 font-weight: 500;
 font-size: 14px;
`;

export const ListIcon = styled.svg`
width: 18px;
height: 18px;
margin-right: 8px;
stroke: rgba(255, 255, 255, 0.5);
`

export const LinkWrapper = styled.div`
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const EditDelBtn = styled.button`
padding: 0;
    line-height: 0;
    cursor: pointer;
    background-color: transparent;
    border: none;
`
export const IconServBtn = styled.svg`
width: 16px;
height: 16px;
stroke: var(--passiveBorderColor);
fill: transparent;
`

export const StyledLink = styled(NavLink)`
color :rgba(255, 255, 255, 0.5);
font-size: 14px;
line-height: 1.5;
letter-spacing: -0.02em;
&.active {
  color :#FFFFFF;
  stroke: #FFFFFF;


}
`