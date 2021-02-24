import React from "react";
import List from "components/List";
import Icon, { DescIcon } from "components/Icon";
import { BasicProps, SingleWrapperProps } from "types";
import "./SideMenu.scss";

const SideMenuHeader = ({ className }: BasicProps) => {
  return (
    <List className={`SideMenu-header ${className ? className : ""}`}>
      <Icon type="menu" />
      <Icon type="logo" />
    </List>
  );
};

type SideMenuItemProps = SingleWrapperProps & {
  desc: string;
  href: string;
  hasNotification?: boolean;
};
const SideMenuItem = ({
  className,
  children,
  desc,
  href,
  hasNotification,
}: SideMenuItemProps) => {
  // children: image | svg icon
  // desc: channel name | 홈, 인기, 구독 등
  return (
    <div className={`side-menu-item ${className ? className : ""}`}>
      <a href={href}>
        <List className="item-wrapper">
          <Icon>{children}</Icon>
          <div className="desc">{desc}</div>
        </List>
        <div className="notificator" />
      </a>
    </div>
  );
};
SideMenuItem.defaultProps = {
  href: "",
  hasNotification: false,
};

const SideMenu = () => {
  return (
    <div className="SideMenu">
      <List className="general" direction="column">
        <DescIcon desc="홈" type="home" />
        <DescIcon desc="홈" type="home" />
        <DescIcon desc="홈" type="home" />
      </List>
      <List className="personal" direction="column">
        <DescIcon desc="홈" type="home" />
        <DescIcon desc="홈" type="home" />
        <DescIcon desc="홈" type="home" />
        <DescIcon desc="홈" type="home" />
        <DescIcon desc="홈" type="home" />
        <DescIcon desc="홈" type="home" />
        <DescIcon desc="홈" type="home" />
      </List>
      <List className="subscribe" direction="column">
        <div className="menu-desc">구독</div>
        <DescIcon
          desc="홈"
          type="home"
          additionalIcon={<div className="notificator" />}
        />
        <DescIcon desc="홈" type="home" />
        <DescIcon desc="홈" type="home" />
        <DescIcon
          desc="홈"
          type="home"
          additionalIcon={<div className="notificator" />}
        />
        <DescIcon
          desc="홈"
          type="home"
          additionalIcon={<div className="notificator" />}
        />
        <DescIcon desc="홈" type="home" />
      </List>
      <List className="setting" direction="column">
        <DescIcon desc="홈" type="home" />
        <DescIcon desc="홈" type="home" />
        <DescIcon desc="홈" type="home" />
        <DescIcon desc="홈" type="home" />
        <DescIcon desc="홈" type="home" />
        <DescIcon desc="홈" type="home" />
      </List>
      <List className="footer" direction="column">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a ligula
          interdum, malesuada augue eu, ultrices tortor. Etiam a laoreet ex, id
          hendrerit dui.
        </p>
        <p>
          Cras ornare cursus mi et accumsan. Integer ut nisl scelerisque tortor
          lobortis varius vitae ut urna. Curabitur vestibulum elit at ante
          dapibus, in ullamcorper est auctor.
        </p>
        <p>
          Nullam at rhoncus est, mattis venenatis enim. Nulla eu finibus eros.
        </p>
      </List>
    </div>
  );
};

export { SideMenuHeader, SideMenuItem, SideMenu };
