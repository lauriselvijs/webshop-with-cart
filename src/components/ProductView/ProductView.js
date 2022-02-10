import React, { Component } from "react";
import "../../styles/product-view/product-view.css";
import { withRouter } from "../../helpers/routerHOC";
import { connect } from "react-redux";
import { compose } from "redux";
import { addItem } from "../../state/actions/cartActions";
import SizeBtn from "../buttons/SizeBtn";
import ColorBtn from "../buttons/ColorBtn";
import gql from "graphql-tag";
import { Query } from "@apollo/client/react/components";
import {
  findPrice,
  checkIfHasAttribute,
  getAttributeArr,
} from "../../utils/reduceUtils";
import AddBtn from "../buttons/AddBtn";
import Loader from "../Loader";
import ProductThumbnail from "./ProductThumbnail";
import MainProductImage from "../product/MainProductImg";
import ProductName from "../product/ProductName";
import ProductAttrName from "../product/ProductAttrName";
import ProductDesc from "./ProductDesc";
import PropTypes from "prop-types";
import OutOfStock from "../ProductPage/OutOfStock";
import ProductPrice from "../product/ProductPrice";
import OptAttributeBtn from "../buttons/OptAttributeBtn";

const PRODUCT_QUERY = gql`
  query ProductQuery($id: String!) {
    product(id: $id) {
      id
      name
      brand
      inStock
      gallery
      brand
      description
      prices {
        currency {
          label
        }
        amount
      }
      attributes {
        type
        name
        items {
          displayValue
          value
        }
      }
    }
  }
`;

class ProductView extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);

    this.selectSizeBtn = this.selectSizeBtn.bind(this);
    this.selectUsbPort = this.selectUsbPort.bind(this);
    this.selectTouchId = this.selectTouchId.bind(this);

    this.selectColorBtn = this.selectColorBtn.bind(this);
    this.setMainImage = this.setMainImage.bind(this);

    this.state = {
      selectedSize: "",
      usbAttribute: "",
      touchIdAttribute: "",
      selectedColorCode: "",
      itemCount: 1,
      selectedAttributeType: "",
      mainImageUrl: "",
    };
  }

  addToCart(product, attrObj, count) {
    this.props.addItem({
      ...product,
      attrObj,
      count,
    });
  }

  selectSizeBtn(selectedSize) {
    this.setState({ selectedSize });
  }

  selectUsbPort(usbAttribute) {
    this.setState({ usbAttribute });
  }

  selectTouchId(touchIdAttribute) {
    this.setState({ touchIdAttribute });
  }

  selectColorBtn(colorCode) {
    this.setState({ selectedColorCode: colorCode });
  }

  setMainImage(imageUrl) {
    this.setState({ mainImageUrl: imageUrl });
  }

  render() {
    const { chosenCurrencyName } = this.props.currency;

    const {
      selectedSize,
      usbAttribute,
      touchIdAttribute,
      selectedColorCode,
      itemCount,
      mainImageUrl,
    } = this.state;

    const id = this.props.match.params.id;

    return (
      <Query query={PRODUCT_QUERY} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) console.log(error);
          const { product } = data;

          const price = findPrice(product, chosenCurrencyName);

          const { inStock, gallery, brand, name, description } = product;

          const textAttrArr = getAttributeArr(product, "text");
          const swatchAttrArr = getAttributeArr(product, "swatch");

          const attrObj = {
            size: selectedSize || textAttrArr[0]?.items[0].displayValue,
            usbType: usbAttribute || textAttrArr[1]?.items[0].displayValue,
            touchId: touchIdAttribute || textAttrArr[2]?.items[0].displayValue,
            color: selectedColorCode || swatchAttrArr[0]?.items[0].value,
          };

          return (
            <div className="product-view-container">
              <div className="thumbnails">
                {product.gallery.map((image, index) => (
                  <ProductThumbnail
                    key={index}
                    setMainImage={this.setMainImage.bind(this, image)}
                    src={image}
                  />
                ))}
              </div>
              <div className="product-image-container">
                {!inStock && (
                  <OutOfStock className="out-of-stock-product-view" />
                )}
                <MainProductImage
                  className={
                    inStock
                      ? "main-image-product-view"
                      : "product-out-of-stock-product-view"
                  }
                  src={mainImageUrl || gallery[0]}
                />
              </div>
              <div className="product-view-right-section">
                <ProductName name={name} brand={brand} />

                <div className="text-attribute">
                  {checkIfHasAttribute(product, "text") && (
                    <div>
                      {textAttrArr.map((attribute, index) => (
                        <div key={index}>
                          {attribute.name === "Capacity" && (
                            <>
                              <ProductAttrName name={attribute.name} />
                              {attribute.items.map((size, index) => (
                                <SizeBtn
                                  key={index}
                                  size={size.displayValue}
                                  selectSizeButton={this.selectSizeBtn.bind(
                                    this,
                                    size.displayValue
                                  )}
                                  selectedSize={
                                    selectedSize ||
                                    attribute.items[0].displayValue
                                  }
                                />
                              ))}
                            </>
                          )}

                          {attribute.name === "Size" && (
                            <>
                              <ProductAttrName name={attribute.name} />
                              {attribute.items.map((size, index) => (
                                <SizeBtn
                                  key={index}
                                  size={size.displayValue}
                                  selectSizeButton={this.selectSizeBtn.bind(
                                    this,
                                    size.displayValue
                                  )}
                                  selectedSize={
                                    selectedSize ||
                                    attribute.items[0].displayValue
                                  }
                                />
                              ))}
                            </>
                          )}

                          {attribute.name === "With USB 3 ports" && (
                            <>
                              <ProductAttrName name={attribute.name} />
                              {attribute.items.map((optAttribute, index) => (
                                <OptAttributeBtn
                                  key={index}
                                  optionalAttribute={optAttribute.displayValue}
                                  selectOptAttrButton={this.selectUsbPort.bind(
                                    this,
                                    optAttribute.displayValue
                                  )}
                                  selectedOptAttribute={
                                    usbAttribute ||
                                    attribute.items[0].displayValue
                                  }
                                />
                              ))}
                            </>
                          )}

                          {attribute.name === "Touch ID in keyboard" && (
                            <>
                              <ProductAttrName name={attribute.name} />
                              {attribute.items.map((size, index) => (
                                <OptAttributeBtn
                                  key={index}
                                  optionalAttribute={size.displayValue}
                                  selectOptAttrButton={this.selectTouchId.bind(
                                    this,
                                    size.displayValue
                                  )}
                                  selectedOptAttribute={
                                    touchIdAttribute ||
                                    attribute.items[0].displayValue
                                  }
                                />
                              ))}
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="swatch-attribute">
                  {checkIfHasAttribute(product, "swatch") && (
                    <>
                      {swatchAttrArr.map((attribute, index) => (
                        <div key={index}>
                          <ProductAttrName name={attribute.name} />
                          {attribute.items.map((color, index) => (
                            <ColorBtn
                              key={index}
                              colorCode={color.value}
                              colorName={color.displayValue}
                              selectColorButton={this.selectColorBtn.bind(
                                this,
                                color.value
                              )}
                              selectedColorCode={
                                selectedColorCode || attribute.items[0].value
                              }
                            />
                          ))}
                        </div>
                      ))}
                    </>
                  )}
                </div>

                <div className="price-section">
                  <h4>PRICE:</h4>
                  <ProductPrice
                    price={price}
                    chosenCurrencyName={chosenCurrencyName}
                    className="product-price-product-view"
                  />
                </div>
                {inStock && (
                  <div className="add-to-cart-section">
                    <AddBtn
                      addToCart={this.addToCart.bind(
                        this,
                        product,
                        attrObj || {},
                        itemCount
                      )}
                    />
                  </div>
                )}
                <ProductDesc description={description} />
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

ProductView.propTypes = {
  chosenCurrencyName: PropTypes.string,
  id: PropTypes.string,
  product: PropTypes.object,
  addItem: PropTypes.func,
};

ProductView.defaultProps = {
  chosenCurrencyName: "USD",
  id: "1",
  product: {},
  addItem: () => {},
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  currency: state.currency,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    addItem,
  })
)(ProductView);
