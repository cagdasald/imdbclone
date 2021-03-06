import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Carousel, Card } from "antd";
import { IStore } from "../../core/utilities/reducers";
import "./NewReleases.scss";

interface IProps {}

const { Meta } = Card;

const NewReleases = (props: IProps) => {
  return (
    <div id="releases">
      <h2 className="text-primary">New Releases</h2>
      <Carousel>
        <div className="films">
          <Card
            hoverable
            className="cards"
            cover={
              <img
                alt="placeholder"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLnv5c0wq18JR5YRrFI6CC_B9kB5Zqz461ZqK-LyzR6-9RiE_W"
              />
            }
          >
            <Meta title="Minions 2: The Rise of Gru" description="July 1, 2022" />
          </Card>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </Carousel>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({}, dispatch);
};
const mapStateToProps = (store: IStore) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewReleases);
