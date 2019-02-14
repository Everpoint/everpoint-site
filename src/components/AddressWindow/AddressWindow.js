import React, { Component } from "react";

import { Portal } from "../../components/Portal/Portal";
import { H2 } from "../../components/Atoms/Atoms";
import { AddressBtn } from "../AddressBtn/AddressBtn";
import animation from "../../components/Transition/animation";
import {
  AddressWindowContainer,
  ModalLink,
  CloseBtn,
  Content,
  AddressBtnContainer,
} from "./styles";

export class AddressWindow extends Component {
  state = {
    isOpen: false,
  };

  render() {
    const { isOpen } = this.state;

    return (
      <>
        <ModalLink as="div" isActive onClick={() => this.setState({ isOpen: true })}>
          Открыть адрес на карте
        </ModalLink>
        {isOpen && (
          <Portal>
            <AddressWindowContainer>
              <CloseBtn isOpen onClick={() => this.setState({ isOpen: false })} />
              <Content className={animation.fadeIn}>
                <H2>Открыть адрес на карте</H2>
                <AddressBtnContainer>
                  <AddressBtn title="Яндекс Карты" name="yandex" />
                  <AddressBtn title="Google maps" name="google" />
                  <AddressBtn title="2GIS Карты" name="gis" />
                </AddressBtnContainer>
              </Content>
            </AddressWindowContainer>
          </Portal>
        )}
      </>
    );
  }
}
