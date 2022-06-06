import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import "./ProductFilter.style.scss";
import { withRouterHOC } from "../../helpers/routerHOC";
import { compose } from "redux";
import { objToUrlQuery, urlQueryToArr } from "../../utils/formatUtils";
import { getRestAttributes } from "./ProductFilter.component.util";

export class ProductFilter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      colorsAttrValue: [],
      yesNoAttr: [],
      restAttributes: [],
      restAttributeValues: [],
    };
  }

  static propTypes = {
    attributes: PropTypes.arrayOf(PropTypes.object),
    categories: PropTypes.shape({
      selectedCategory: PropTypes.string,
    }),
    category: PropTypes.string,
    colorsAttrValue: PropTypes.arrayOf(PropTypes.string),
    navigate: PropTypes.func,
    location: PropTypes.shape({
      search: PropTypes.string,
    }),
  };

  componentDidMount() {
    const { attributes } = this.props;
    const urlQuery = this.props.location.search.substring(1);
    const urlQueryArr = urlQueryToArr(urlQuery);

    urlQueryArr.forEach((queryParam) => {
      if (queryParam.includes("color=")) {
        this.setState((prevState) => ({
          colorsAttrValue: [
            ...prevState.colorsAttrValue,
            queryParam.split("=")[1],
          ],
        }));
      } else if (queryParam.includes("attribute=")) {
        this.setState((prevState) => ({
          yesNoAttr: [...prevState.yesNoAttr, queryParam.split("=")[1]],
        }));
      } else {
        if (
          queryParam.split("=")[1] !== "" &&
          queryParam.split("=")[0] !== ""
        ) {
          this.setState((prevState) => ({
            restAttributeValues: [
              ...prevState.restAttributeValues,
              queryParam.split("=")[1],
            ],
          }));

          this.setState({
            restAttributes: queryParam.split("=")[0],
          });
        } else {
          this.setState({
            restAttributes: getRestAttributes(attributes)[0].name,
          });
        }
      }
    });
  }

  setFilterColor = (event) => {
    const { colorsAttrValue } = this.state;

    if (colorsAttrValue.includes(event.target.value)) {
      this.setState((prevState) => ({
        colorsAttrValue: prevState.colorsAttrValue.filter(
          (color) => color !== event.target.value
        ),
      }));
    } else {
      this.setState((prevState) => ({
        colorsAttrValue: [...prevState.colorsAttrValue, event.target.value],
      }));
    }
  };

  setYesNoAttrAttributes = (event) => {
    const { yesNoAttr } = this.state;

    if (yesNoAttr.includes(event.target.value)) {
      this.setState((prevState) => ({
        yesNoAttr: prevState.yesNoAttr.filter(
          (yesNoAttr) => yesNoAttr !== event.target.value
        ),
      }));
    } else {
      this.setState((prevState) => ({
        yesNoAttr: [...prevState.yesNoAttr, event.target.value],
      }));
    }
  };

  setRestAttributes = (event) => {
    this.setState({
      restAttributes: [event.target.value],
      restAttributeValues: [],
    });
  };

  setRestAttributeValues = (event) => {
    const { restAttributeValues } = this.state;

    if (restAttributeValues.includes(event.target.value)) {
      this.setState((prevState) => ({
        restAttributeValues: prevState.restAttributeValues.filter(
          (restAttributeValue) => restAttributeValue !== event.target.value
        ),
      }));
    } else {
      this.setState((prevState) => ({
        restAttributeValues: [
          ...prevState.restAttributeValues,
          event.target.value,
        ],
      }));
    }
  };

  showColorAttributes = () => {
    const { attributes } = this.props;
    const { colorsAttrValue } = this.state;

    const attributeColorArr = attributes.filter(
      (attribute) => attribute.name === "Color"
    );

    const attributeColorValueArr = attributeColorArr
      .map((attributeColorValue) => attributeColorValue.items)
      .flat();

    let repeatValuesArr = [];

    const individualColorAttributesArr = attributeColorValueArr.filter(
      (attributeColorValue) => {
        if (!repeatValuesArr.includes(attributeColorValue.value)) {
          repeatValuesArr.push(attributeColorValue.value);
          return true;
        }
        return false;
      }
    );

    return (
      <>
        {attributeColorArr[0]?.name && (
          <div className="color-attribute">
            <div className="color-attribute-name">
              {attributeColorArr[0]?.name}:{" "}
            </div>
            <div className="color-btn-container">
              {individualColorAttributesArr.map((colorAttributeItem, index) => (
                <button
                  value={colorAttributeItem.value}
                  onClick={this.setFilterColor}
                  key={index}
                  className={
                    colorsAttrValue.includes(colorAttributeItem.value)
                      ? "color-selected-btn"
                      : "color-btn"
                  }
                  style={{ backgroundColor: colorAttributeItem.value }}
                />
              ))}
            </div>
          </div>
        )}
      </>
    );
  };

  showYesNoAttrAttributes = () => {
    const { attributes } = this.props;
    const { yesNoAttr } = this.state;

    let yesNoAttrAttributeRepeatArr = [];

    const yesNoAttrAttributeArr = attributes.filter((attribute) => {
      if (
        attribute.items.some((attributeItem) => attributeItem.value === "Yes")
      ) {
        if (yesNoAttrAttributeRepeatArr.includes(attribute.name)) {
          return false;
        } else {
          yesNoAttrAttributeRepeatArr.push(attribute.name);
          return true;
        }
      }
    });

    return (
      <>
        {yesNoAttrAttributeArr.map((yesNoAttrAttribute, index) => (
          <div className="yes-no-attribute" key={index}>
            <div className="yes-attribute-name">
              {yesNoAttrAttribute.name}:{" "}
            </div>
            <input
              className="yes-no-checkbox"
              checked={yesNoAttr.includes(yesNoAttrAttribute.name)}
              value={yesNoAttrAttribute.name}
              type="checkbox"
              onChange={this.setYesNoAttrAttributes}
            />
          </div>
        ))}
      </>
    );
  };

  showRestAttributes = () => {
    const { attributes } = this.props;
    const { restAttributes, restAttributeValues } = this.state;

    let restAttributeItemValueRepeatArr = [];
    let restUniqAttr = [];

    getRestAttributes(attributes).forEach((restAttribute) => {
      restAttribute.items.forEach((restAttributeItem) => {
        if (
          !restAttributeItemValueRepeatArr
            .flat()
            .includes(restAttributeItem.value)
        ) {
          restUniqAttr.push({
            name: restAttribute.name,
            value: restAttributeItem.value,
          });
        }
      });

      restAttributeItemValueRepeatArr.push(
        restAttribute.items.map((restAttributeItem) => restAttributeItem.value)
      );
    });

    const uniqueAttrName = [...new Set(restUniqAttr.map((item) => item.name))];

    return (
      <>
        {restUniqAttr.length !== 0 && (
          <div className="select-attribute">
            <div className="select-options">
              <select
                className="select-attribute-options"
                onChange={this.setRestAttributes}
              >
                {uniqueAttrName.map((restAttributeName, index) => (
                  <option
                    selected={restAttributeName === restAttributes}
                    key={index}
                    value={restAttributeName}
                  >
                    {restAttributeName}:
                  </option>
                ))}
              </select>
            </div>
            <div className="rest-attr-values">
              {restUniqAttr.map(
                (restAttribute, index) =>
                  restAttributes.includes(
                    restAttribute.name || restAttributes[0]
                  ) && (
                    <button
                      key={index}
                      value={restAttribute.value}
                      className={
                        restAttributeValues.includes(restAttribute.value)
                          ? "size-selected-attr-btn"
                          : "size-attr-btn"
                      }
                      onClick={this.setRestAttributeValues}
                    >
                      {restAttribute.value}
                    </button>
                  )
              )}
            </div>
          </div>
        )}
      </>
    );
  };

  componentDidUpdate(prevProps, prevState) {
    const { colorsAttrValue, yesNoAttr, restAttributes, restAttributeValues } =
      this.state;
    const { attributes } = this.props;

    if (attributes !== prevProps.attributes) {
      this.setState({
        restAttributes: getRestAttributes(attributes)[0].name,
      });
    }

    if (
      colorsAttrValue !== prevState.colorsAttrValue ||
      yesNoAttr !== prevState.yesNoAttr ||
      restAttributes !== prevState.restAttributes ||
      restAttributeValues !== prevState.restAttributeValues
    ) {
      const urlObj = {
        color: colorsAttrValue,
        attribute: yesNoAttr,
        [restAttributes]: restAttributeValues,
      };

      const attrUrlQuery = objToUrlQuery(urlObj);

      this.props.navigate.to({
        search: attrUrlQuery,
      });
    }
  }

  render() {
    return (
      <div className="attribute-items">
        {this.showColorAttributes()}
        {this.showYesNoAttrAttributes()}
        {this.showRestAttributes()}
      </div>
    );
  }
}

const mapState = (state) => ({
  categories: state.categories,
});

export default compose(withRouterHOC, connect(mapState, null))(ProductFilter);
