import styled from 'styled-components';
import { reduceEachTrailingCommentRange } from 'typescript';

const NavContainer = styled.div`
  position: fixed;
  left: 380px;
  padding: 0;
  width: calc(100% - 380px);
  height: 100%;
  box-sizing: border-box;

  ul {
    display: flex;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    height: 100%;
    list-style-type: none;

    li:not(:first-child):not(:last-child) {
      position: relative;
      padding: 30px;
      text-align: center;
      cursor: pointer;
      overflow: hidden;

      &:before {
        left: 50%;
        top: 50%;
        content: "";
        position: absolute;
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        box-shadow: 0 0 0 3000px #fff;
        transform: translate(-50%, -50%);
        transition: all 0.6s;
      }

      &:hover {
        &:before {
          width: 180vh;
          height: 180vh;
          transition: all 0.6s .05s cubic-bezier(0.9, 0, 1, 0.6)
        }
      }

      &:nth-child(2):before { 
        top: 50%;
      }
      &:nth-child(3):before { 
        top: 80%;
      }
      &:nth-child(4):before { 
        top: 30%;
      }
    }

    li:first-child {
      flex: 1;
      background-color: #fff;
    }
    li:last-child {
      width: 100px;
      background-color: #fff;
    }
  }
`;

const NAV_LIST: any = [
  {
    title: 'blog',
  },
  {
    title: 'timeline',
  },
  {
    title: 'something',
  },
]

function Nav() {
  const navItems = NAV_LIST.map((nav: any, index: number) => 
    <li key={ index }>{ nav.title }</li>
  );

  return (
    <NavContainer id="nav">
      <ul>
        <li />
        { navItems }
        <li />
      </ul>
    </NavContainer>
  );
}

export default Nav;
