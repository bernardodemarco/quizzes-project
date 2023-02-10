import { Dropdown } from '.';

const onClick = () => {
  console.log('clicked me!');
};

export default {
  title: 'Dropdown',
  component: Dropdown,
  args: { isDropdownVisible: false, onDropdownItemClick: onClick },
  argsTypes: {
    isDropdownVisible: 'boolean',
  },
};

export const Template = (args) => (
  <div
    style={{
      width: '50rem',
      height: '50rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <a style={{ display: 'block', position: 'relative' }}>
      Temas <Dropdown {...args} />
    </a>
  </div>
);
