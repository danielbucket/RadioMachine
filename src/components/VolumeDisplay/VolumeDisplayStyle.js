import styled from 'styled-components';

export const VolumeDisplayStyle = styled.div`
	font-size: 2em;
	min-width: 15em;
	display: inline-grid;
	grid-template-column: 3fr 1fr;

	:hover {
	}

	.vol-span {
		margin-left: .5em;
		color: yellow;
	}
`;

VolumeDisplayStyle.defaultProps = {

};