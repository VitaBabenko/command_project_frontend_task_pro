import styled from 'styled-components';

export const LogoLink = styled.div`
  color: inherit;
`;

export const SidebarBoards = styled.div`
  margin-top: 64px;
`;

export const TitleMin = styled.span`
  margin-bottom: 8px;
      color: var(--addAnotherColumnIconBgColor);
      font-size: 12px;
      display: block;
`;

export const SidebarCreateNew = styled.div`
 color: var(--addAnotherColumnIconBgColor);
    margin-right: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 0;
    font-size: 14px;
    border-top: 1px solid var(--currentProjBgColor);
    border-bottom: 1px solid var(--currentProjBgColor);
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
`;

export const SidebarPrjctList = styled.ul`
  margin-top: 40px;
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
      }
      li:last-child{
        margin-left: 8px;
      }
`;

export const Text = styled.p`
 line-height: 21px;
 font-weight: 500;
 font-size: 14px;
`;

export const Title = styled.h3`
 line-height: 21px;
 font-weight: 500;
 font-size: 14px;
`;



