import React from "react";
import { Menu, Button, Container } from "semantic-ui-react";

interface IProps {
  openCreateForm: () => void;
}

const NavBar: React.FC<IProps> = ({ openCreateForm }) => {
  return (
    <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item>
            <img
              src='/assets/logo.png'
              alt='logo'
              style={{ marginRight: "10px" }}
            />
            Reactivities
          </Menu.Item>
          <Menu.Item name='Activities' />
          <Menu.Item>
            <Button
              onClick={openCreateForm}
              content='Create Activity'
              positive
            />
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};

export default NavBar;
