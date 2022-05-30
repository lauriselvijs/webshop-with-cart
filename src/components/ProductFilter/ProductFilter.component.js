import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import "./ProductFilter.style.scss";
import { withRouterHOC } from "../../helpers/routerHOC";
import { compose } from "redux";

export class ProductFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [],
      yesNo: [],
      restAttributes: ["None"],
    };
  }

  static propTypes = {
    attributes: PropTypes.arrayOf(PropTypes.object),
    categories: PropTypes.shape({
      selectedCategory: PropTypes.string,
    }),
    colors: PropTypes.arrayOf(PropTypes.string),
    navigate: PropTypes.func,
  };

  setFilterColor = (event) => {
    const { colors } = this.state;

    if (colors.includes(event.target.value)) {
      this.setState((prevState) => ({
        colors: prevState.colors.filter(
          (color) => color !== event.target.value
        ),
      }));
    } else {
      this.setState((prevState) => ({
        colors: [...prevState.colors, event.target.value],
      }));
    }
  };

  setYesNoAttributes = (event) => {
    const { yesNo } = this.state;

    if (yesNo.includes(event.target.value)) {
      this.setState((prevState) => ({
        yesNo: prevState.yesNo.filter((yesNo) => yesNo !== event.target.value),
      }));
    } else {
      this.setState((prevState) => ({
        yesNo: [...prevState.yesNo, event.target.value],
      }));
    }
  };

  setRestAttributes = (event) => {
    this.setState({
      restAttributes: [event.target.value],
    });
  };

  showColorAttributes = () => {
    const { attributes } = this.props;

    const colorAttributesObj = attributes.find(
      (attribute) => attribute.name === "Color"
    );

    return (
      <>
        {colorAttributesObj && (
          <div className="color-attribute">
            <div className="color-attribute-name">
              {colorAttributesObj?.name}:{" "}
            </div>
            {colorAttributesObj?.items.map((colorAttributeItem, index) => (
              <button
                value={colorAttributeItem.value}
                onClick={this.setFilterColor}
                key={index}
                className="color-btn"
                style={{ backgroundColor: colorAttributeItem.value }}
              />
            ))}
          </div>
        )}
      </>
    );
  };

  showYesNoAttributes = () => {
    const { attributes } = this.props;

    const yesNoAttributeRepeatArr = [];

    const yesNoAttributeArr = attributes.filter((attribute) => {
      if (
        attribute.items.some((attributeItem) => attributeItem.value === "Yes")
      ) {
        if (yesNoAttributeRepeatArr.includes(attribute.name)) {
          return false;
        } else {
          yesNoAttributeRepeatArr.push(attribute.name);
          return true;
        }
      }
    });

    return (
      <>
        {yesNoAttributeArr.map((yesNoAttribute, index) => (
          <div className="yes-no-attribute" key={index}>
            <div className="yes-attribute-name">{yesNoAttribute.name}: </div>
            <input
              value={yesNoAttribute.name}
              type="checkbox"
              onChange={this.setYesNoAttributes}
            />
          </div>
        ))}
      </>
    );
  };

  showRestAttributes = () => {
    const { attributes } = this.props;

    const restAttributeRepeatArr = [];

    const restAttributesArr = attributes.filter((attribute) => {
      if (
        restAttributeRepeatArr.includes(attribute.name) ||
        attribute.name === "Color" ||
        attribute.items.some((attributeItem) => attributeItem.value === "Yes")
      ) {
        return false;
      } else {
        restAttributeRepeatArr.push(attribute.name);
        return true;
      }
    });

    return (
      <>
        {restAttributesArr.length !== 0 && (
          <div className="select-attribute">
            Filter by:
            <select
              className="select-attribute-options"
              onChange={this.setRestAttributes}
            >
              <option>None</option>
              {restAttributesArr.map((restAttribute, index) => (
                <option key={index} value={restAttribute.name}>
                  {restAttribute.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </>
    );
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.colors !== prevState.colors ||
      this.state.yesNo !== prevState.yesNo ||
      this.state.restAttributes !== prevState.restAttributes
    ) {
      const colorSlug =
        this.state.colors.length !== 0
          ? `color=${this.state.colors.join("&color=")}`
          : "";
      const yesNoSlug =
        this.state.yesNo.length !== 0
          ? `attribute=${this.state.yesNo
              .join("&attribute=")
              .replace(/\s/g, "-")}`
          : "";
      const restAttrSlug =
        this.state.restAttributes[0] !== "None"
          ? `rest-attributes=${this.state.restAttributes}`
          : "";

      const attrSlug =
        colorSlug +
        (yesNoSlug && "&") +
        yesNoSlug +
        (restAttrSlug && "&") +
        restAttrSlug;

      this.props.navigate.to({
        search: attrSlug.toLowerCase(),
      });
    }
  }

  render() {
    // const { colors } = this.state;

    // console.log(colors);

    return (
      <div className="attribute-items">
        {this.showColorAttributes()}
        {this.showYesNoAttributes()}
        {this.showRestAttributes()}
      </div>
    );
  }
}

const mapState = (state) => ({
  categories: state.categories,
});

export default compose(withRouterHOC, connect(mapState, null))(ProductFilter);
