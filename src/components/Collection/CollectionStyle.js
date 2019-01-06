import styled from 'styled-components';

export const CollectionStyle = styled.div`
		grid-row: 3 / 3;
		grid-column: 1 / span 3;

		border: 2px solid ${p=>p.theme.borderColor};

		display: grid;
		grid-template-rows: repeat(${p=>p.listLength}, 100px);
		overflow: scroll;
		::-webkit-scrollbar {
			display: none;
		}

	.list-container {
		border: 1px solid ${p=>p.theme.borderColor};
	}

	.playlist-header {
		border: 1px solid red;
		display: grid;
		grid-template-columns:
			[listName] auto
			[listCount] 20%;
	}

	.playlist-name {
		grid-column: listName;

		display: flex;
		justify-content: center;
	}

	.playlist-song-count {
		grid-column: listCount;
	}

	@media(min-width:${p=>p.theme.minWidthMdScreen}) {
		grid-template-rows: none;
		grid-template-columns: repeat(${p=>p.listLength}, 250px);
	}
`;

export const playlistItemStyle = styled.div`
	
`;