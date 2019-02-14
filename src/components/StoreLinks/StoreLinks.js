import styled from "astroturf";

const StoreLink = styled("a")`
  display: block;
  cursor: pointer;
  width: 13.9285rem;
  height: 4rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  @media (max-width: 991px) {
    width: 10.4285rem;
    height: 3rem;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    width: 9.3571rem;
    height: 2.7142rem;
  }
`;

export const IosStoreLink = styled(StoreLink)`
  background-image: url(../../assets/img/icons/ios.svg);
`;

export const AndroidStoreLink = styled(StoreLink)`
  background-image: url(../../assets/img/icons/android.svg);
`;
