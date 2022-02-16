import React from "react";
import PropTypes from "prop-types";
import * as Ranks from "./style";

function Rank({ myRanking, ranking, imgURL, id, point }) {
  return (
    <Ranks.Container myRanking={myRanking}>
      {myRanking && <Ranks.MyRankTitle>나의 순위</Ranks.MyRankTitle>}
      <Ranks.Wrapper myRank={myRanking}>
        {!myRanking && <Ranks.Ranking>{ranking}</Ranks.Ranking>}
        <Ranks.ProfileImg imgURL={imgURL} />
        <Ranks.Detail>
          <Ranks.Id>{id}</Ranks.Id>
          <Ranks.Point>{point} P</Ranks.Point>
        </Ranks.Detail>
      </Ranks.Wrapper>
    </Ranks.Container>
  );
}

Rank.propTypes = {
  myRanking: PropTypes.bool,
  ranking: PropTypes.number,
  imgURL: PropTypes.string,
  id: PropTypes.string,
  point: PropTypes.number,
};

// Rank.defaultProps = {
//   myRank: false,
//   ranking: 1,
//   imgURL: "https://avatars.githubusercontent.com/u/54543013?v=4",
//   id: "teset",
//   point: 10,
// };

export default Rank;