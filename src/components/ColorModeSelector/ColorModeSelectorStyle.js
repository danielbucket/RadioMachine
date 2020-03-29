import styled from 'styled-components';


export const ColorModeSelectorStyle = styled.div`
	grid-column: ColorModeSelector;

	display: grid;
	grid-template-rows: repeat(${p=>p.themeQuantity+1}, 100%);

  overflow-y: scroll;
  cursor: pointer;


  .color-mode-selection {
    text-align: center;
  }

  .drop-menu-cover {

  }

  .drop-menu-cover:hover {
    
  }


`;
