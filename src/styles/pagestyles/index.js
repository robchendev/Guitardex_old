import styled from "@emotion/styled"
import { v, maxq } from '../globalstyles/variables'
import { COLORS } from '../globalstyles/theme'
import { btnReset } from "../globalstyles/variables"

export const TrashContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 ${v.borderRadius} ${v.borderRadius} 0;
  height: 100%;
  width: 4.5em;
  ${maxq[1]} {
    width: 3.5em;
  }
`
export const Trash = styled.span`
  font-family: 'Fredoka';
  font-size: 22px;
  letter-spacing: .6px;
  height: 100%;
  width: 100%;
  border: none;
  background: var(--color-bg, ${COLORS.bg.light});
  border-radius: ${v.borderRadius};
  margin-bottom: ${v.mdSpacing};
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
`
export const TrashIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: var(--color-checkMarkColor, ${COLORS.checkMarkColor.light});
  font-size: 30px;
  :hover {
    color: var(--color-link, ${COLORS.link.light});
  }
`
export const DexList = styled.ul`
  padding-bottom: 1em;
  list-style-type: none;
  li {
    display: flex;
    align-items: center;
    margin: 0 0 5px 0;
  }
  transition: 0.3s ease padding;
`
export const EmptyList = styled.div`
  div {
    margin: 0 0 5px 0;
  }
`
export const EmptyListEntries = styled.div`
  background-color: var(--color-bg, ${COLORS.bg.light}) !important;
  transition: 0.3s ease margin;
  
  border-radius: ${v.borderRadius};
  user-select: none;
  position: relative;
  h4 {
    margin-bottom: 0;
  }
  cursor: pointer;
`

export const SaveNameInput = styled.div`
  background: var(--color-bg, ${COLORS.bg.light});
  border: 1px solid var(--color-bg3, ${COLORS.bg3.light});
  border-radius: ${v.borderRadius};
  input {
    padding: 0 ${v.mdSpacing} 0 0;
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 18px;
    width: 100%;
    outline: none;
    border: none;
    color: inherit;
    background: transparent;
  }
  display: flex;
  margin-bottom: 1em;
`
export const SaveNameIcon = styled.button`
  ${btnReset};
  padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
  display: flex;
  svg {
    font-size: 20px;
  }
`
export const ExportSave = styled.div`
  background: var(--color-bg, ${COLORS.bg.light});
  border-radius: ${v.borderRadius};
  input {
    resize: none;
    white-space: nowrap;
    width:100%;
    padding: 0 ${v.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    width: 100%;
    outline: none;
    border: none;
    background: transparent;
    color: ${COLORS.placeholder};
    ::-webkit-scrollbar {
      display: none;
    }
    padding: calc(${v.smSpacing} * 1.3);
  }
  button {
    width:30%;
    padding: calc(${v.smSpacing} * 1.3);
    color: #fff;
    background-color: var(--color-primary, ${COLORS.primary.light});
    border: none;
    border-radius: 0 ${v.borderRadius} ${v.borderRadius} 0;
    cursor: pointer;
    transition: 0.3s ease;
    :hover {
      background: #6D28D9;
    }
    position: relative;
    :before {
      content: "";
      position: absolute;
      left: -2em;
      top: 0;
      width: 2em;
      height: 100%;
      background: linear-gradient(to left, var(--color-bg, ${COLORS.bg.light}), transparent); 
    }
  }
  ${maxq[1]} {
    button {
      width: 50%;
    } 
  }
  display: flex;
  align-items:center;
  margin-bottom: ${v.mdSpacing};
`
export const DeleteAllContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const DeleteAll = styled.button`
  width:20%; 
  padding: calc(${v.smSpacing} * 1.3);
  color: #fff;
  background-color: var(--color-primary, ${COLORS.primary.light});
  border: none;
  border-radius: ${v.borderRadius};
  ${maxq[1]} {
    width:32%;
  }
  cursor: pointer;
  transition: 0.3s ease;
  :hover {
    background: #6D28D9;
  }
`
export const HelpLinkDiv = styled.div`
  padding: calc(${v.smSpacing} * 1.5) ${v.mdSpacing};
  p {
    color: ${COLORS.placeholder};
  }
`
export const SavedDexItem = styled.div`
  background-color: var(--color-bg, ${COLORS.bg.light}) !important;
  transition: 0.3s ease;
  transition-property: margin;
  border-radius: ${v.borderRadius};
  user-select: none;
  position: relative;
  width: 100%;
  h4 {
    margin-bottom: 0;
  }
`
export const DragIconContainer = styled.div`
  position: absolute;
  transition: 0.3s ease opacity;
  margin-top: 0.3em;
  color: ${COLORS.placeholder};
  font-size: 1.7em;
  margin-left: -0.25em;
  pointer-events: none;
`
export const MoveableContainer = styled.div`
  display: flex;
  width: 100%;
  :hover, :active {
    ${SavedDexItem} {
      margin-left: 1em;
      ${maxq[1]} {
        margin-left: 0;
      }
    }
  }
`
export const EmptyListEntryContainer = styled.div`
  color: var(--color-text, ${COLORS.text.light});
  :hover {
    ${EmptyListEntries} {
      margin-left: 1em;
      color: var(--color-link, ${COLORS.link.light}) !important;
      ${maxq[1]} {
        margin-left: 0;
      }
    }
  }
`