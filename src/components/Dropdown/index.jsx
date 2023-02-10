import P from 'prop-types';
import * as Styled from './styles';

export const Dropdown = ({ isDropdownVisible, onDropdownItemClick }) => {
  return (
    <Styled.Dropdown isVisible={isDropdownVisible}>
      <Styled.DropdownItem onClick={onDropdownItemClick}>
        <Styled.Text>#HTML</Styled.Text>
      </Styled.DropdownItem>
      <Styled.DropdownItem onClick={onDropdownItemClick}>
        <Styled.Text>#UX</Styled.Text>
      </Styled.DropdownItem>
      <Styled.DropdownItem onClick={onDropdownItemClick}>
        <Styled.Text>#Swift</Styled.Text>
      </Styled.DropdownItem>
      <Styled.DropdownItem onClick={onDropdownItemClick}>
        <Styled.Text>#UI</Styled.Text>
      </Styled.DropdownItem>
    </Styled.Dropdown>
  );
};

Dropdown.propTypes = {
  isDropdownVisible: P.bool.isRequired,
  onDropdownItemClick: P.func.isRequired,
};
