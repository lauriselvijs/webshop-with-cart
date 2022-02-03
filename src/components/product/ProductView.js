import React, { Component } from "react";
import "../../styles/product/product-view.css";
import { withRouter } from "../helpers/routerHOC";
import { connect } from "react-redux";
import { compose } from "redux";
import { setLoading } from "../../state/actions/loadingActions";
import { addItem } from "../../state/actions/cartActions";
import SizeBtn from "../buttons/SizeBtn";
import RemoveBtn from "../buttons/RemoveBtn";
import ColorBtn from "../buttons/ColorBtn";
import { formatMoney } from "../utils/formatUtils";
import gql from "graphql-tag";
import { Query } from "@apollo/client/react/components";
import {
  findPrice,
  checkIfHasAttribute,
  getAttributeObj,
} from "../utils/reduceUtils";
import parse from "html-react-parser";
import AddBtn from "../buttons/AddBtn";
import Loader from "../helpers/Loader";

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
    this.selectColorBtn = this.selectColorBtn.bind(this);
    this.setMainImage = this.setMainImage.bind(this);

    this.state = {
      selectedSize: "",
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

  selectSizeBtn(size) {
    this.setState({ selectedSize: size });
  }

  selectColorBtn(colorCode) {
    this.setState({ selectedColorCode: colorCode });
  }

  setMainImage(imageUrl) {
    this.setState({ mainImageUrl: imageUrl });
  }

  render() {
    const { chosenCurrencyName } = this.props.currency;

    const { selectedSize, selectedColorCode, itemCount, mainImageUrl } =
      this.state;

    const id = this.props.match.params.id;

    return (
      <Query query={PRODUCT_QUERY} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) console.log(error);
          const { product } = data;

          const price = findPrice(product, chosenCurrencyName);

          const { inStock } = product;

          const textAttrArr = getAttributeObj(product, "text");
          const swatchAttrArr = getAttributeObj(product, "swatch");

          const attrObj = {
            size: selectedSize || textAttrArr?.items[0].displayValue,
            color: selectedColorCode || swatchAttrArr?.items[0].value,
          };

          return (
            <div className="product-view-container">
              <div className="thumbnails">
                {product.gallery.map((image, index) => (
                  <img
                    key={index}
                    className="thumbnail"
                    onClick={this.setMainImage.bind(this, image)}
                    src={image}
                    alt="product"
                  />
                ))}
              </div>
              <img
                className="main-image"
                src={mainImageUrl || product.gallery[0]}
                alt="product"
              />
              <div className="product-view-right-section">
                <div className="product-name">
                  <h1>{product.brand}</h1>
                  <h2>{product.name}</h2>
                </div>
                <div className="text-attribute">
                  {checkIfHasAttribute(product, "text") && (
                    <>
                      <h4>{textAttrArr.name.toUpperCase()}:</h4>
                      {textAttrArr.items.map((size, index) => (
                        <SizeBtn
                          key={index}
                          size={size.displayValue}
                          selectSizeButton={this.selectSizeBtn.bind(
                            this,
                            size.displayValue
                          )}
                          selectedSize={
                            selectedSize || textAttrArr.items[0].displayValue
                          }
                        />
                      ))}
                    </>
                  )}
                </div>
                <div className="swatch-attribute">
                  {checkIfHasAttribute(product, "swatch") && (
                    <>
                      <h4>{swatchAttrArr.name.toUpperCase()}:</h4>
                      {swatchAttrArr.items.map((color, index) => (
                        <ColorBtn
                          key={index}
                          colorCode={color.value}
                          colorName={color.displayValue}
                          selectColorButton={this.selectColorBtn.bind(
                            this,
                            color.value
                          )}
                          selectedColorCode={
                            selectedColorCode || swatchAttrArr.items[0].value
                          }
                        />
                      ))}
                    </>
                  )}
                </div>

                <div className="price-section">
                  <h4>PRICE:</h4>
                  <h4 className="price-value">
                    {formatMoney(price, chosenCurrencyName)}
                  </h4>
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
                    <RemoveBtn productId={product.id} />
                  </div>
                )}
                <div className="info">{parse(product.description)}</div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  currency: state.currency,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    addItem,
    setLoading,
  })
)(ProductView);
