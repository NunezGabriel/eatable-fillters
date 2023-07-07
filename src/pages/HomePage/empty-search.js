import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import { RiSearchLine } from "react-icons/ri";

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmptySubtitle = styled.p`
  ${typography.size.xl}
  ${typography.weigth.semibold}
`;

const IconEmpty = styled(RiSearchLine)`
  width: 106px;
  height: 118px;
  color: ${colors.gray};
`;

function EmptySearch() {
  return (
    <EmptyContainer>
      <IconEmpty />
      <EmptySubtitle>No products found</EmptySubtitle>
    </EmptyContainer>
  );
}

export default EmptySearch;
