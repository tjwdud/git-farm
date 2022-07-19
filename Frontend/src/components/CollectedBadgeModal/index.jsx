import React from "react";
import PropTypes from "prop-types";
import { badgesType } from "@/utils/badgesIcon";
import Modal from "@/components/Modal";
import { Wrapper, Body } from "./style";

function CollectedBadgeModal({ setOpenModal, gainedBadges }) {
  const gainedBadgesFirstElement = gainedBadges[0];
  console.log(gainedBadgesFirstElement);
  const badgeIcon = badgesType[gainedBadgesFirstElement];
  const badgeTitle = badgesType[gainedBadgesFirstElement];
  const gainedBadgesLength = gainedBadges.length;
  return (
    <Modal setOpenModal={setOpenModal} title="배지 획득 안내">
      <Wrapper>
        <badgeIcon.icon />
        <Body>
          <p>축하합니다!</p>
          <p>[{badgeTitle.title}]</p>

          <p>
            {" "}
            {gainedBadgesLength > 1 && `외 ${gainedBadgesLength - 1}개의 `}
            배지를 획득하셨습니다!
          </p>

          <p> 획득하신 배지를 확인하시려면 오른쪽 상단 씨앗을 눌러주세요.</p>
        </Body>
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
