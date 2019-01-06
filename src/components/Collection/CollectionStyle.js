import styled from 'styled-components';

export const CollectionStyle = styled.div`
		grid-row: 3 / 3;
		grid-column: 1 / span 3;

		border: 2px solid ${p=>p.theme.borderColor};
		font-size: 1.5em;

		display: grid;
		grid-template-columns: repeat(${p=>p.listLength}, 250px);
		overflow: scroll;
		::-webkit-scrollbar {
			display: none;
		}

	.list-container {
		border: 1px solid ${p=>p.theme.borderColor};
	}

	.playlist-name {
		display: flex;
		justify-content: center;
		border-bottom: 1px solid red;
	}
`;

export const playlistItemStyle = styled.div`
	
`;