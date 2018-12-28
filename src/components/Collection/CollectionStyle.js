import styled from 'styled-components';

export const CollectionStyle = styled.div`
		grid-row: 3 / 3;
		grid-column: 1 / span 3;

		border: 2px solid ${p=>p.theme.borderColor};
`;