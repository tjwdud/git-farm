import React from "react";
import PropTypes from "prop-types";
import { badgesType } from "@/utils/badgesIcon";
import Modal from "@/components/Modal";
import Description from "@/components/Description";
import { Wrapper, Body } from "./style";

function CollectedBadgeModal({ setOpenModal, gainedBadges }) {
  return (
    <Modal setOpenModal={setOpenModal} title="배지 획득 안내">
      <Wrapper>
        {badgesType[gainedBadges[0]].icon}
        <Body>
          축하합니다!
          <br />[{badgesType[gainedBadges[0]].title}]
          <br />
          {gainedBadges.length > 1 && `외 ${gainedBadges.length - 1}개의 `}
          배지를 획득하셨습니다!
        </Body>
        <Description>
          획득하신 배지를 확인하시려면 오른쪽 상단 씨앗을 눌러주세요.
        </Description>
      </Wrapper>
    </Modal>
  );
}

CollectedBadgeModal.defaultProps = {
  gainedBadges: [0, 1],
};

CollectedBadgeModal.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
  gainedBadges: PropTypes.arrayOf(PropTypes.number),
};
export default CollectedBadgeModal;
