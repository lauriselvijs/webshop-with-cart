import React, { Component } from "react";
import "../../styles/product/product-view.css";
import { withRouter } from "../helpers/routerHOC";
import { connect } from "react-redux";
import { compose } from "redux";
import { getClothesItemById } from "../../state/actions/clothesActions";
import { setLoading } from "../../state/actions/loadingActions";
import {
  addItem,
  selectSize,
  selectAttribute,
} from "../../state/actions/cartActions";
import { selectClothesBySize } from "../../state/actions/clothesActions";
import SizeBtn from "../buttons/SizeBtn";
import RemoveBtn from "../buttons/RemoveBtn";
import ColorBtn from "../buttons/ColorBtn";
import { formatMoney } from "../utils/formatUtils";

class ProductView extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.addToCartSwatch = this.addToCartSwatch.bind(this);
    this.selectSizeBtn = this.selectSizeBtn.bind(this);
    this.selectColorBtn = this.selectColorBtn.bind(this);
    this.setMainImage = this.setMainImage.bind(this);

    this.state = {
      selectedSize: "",
      selectedColor: "",
      itemCount: 1,
      selectedAttributeType: "",
      mainImageUrl: "",
    };
  }

  componentDidMount() {
    this.props.setLoading(true);
    const id = this.props.match.params.id;
    this.props.getClothesItemById(id);
    this.props.setLoading(false);
  }

  addToCart(item, selectedAttributeType, selectedSize, count) {
    this.props.addItem({
      ...item,
      selectedSize,
      count,
    });
    this.props.selectAttribute(item.id, selectedAttributeType, selectedSize);
  }

  addToCartSwatch(item, selectedAttributeType, selectedColor, count) {
    this.props.addItem({
      ...item,
      selectedColor,
      count,
    });
    this.props.selectAttribute(item.id, selectedAttributeType, selectedColor);
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
    const { clothesItem } = this.props.clothes;
    const { loading } = this.props.loading;
    const { chosenCurrencyName } = this.props.currency;

    const { selectedSize, selectedColorCode, itemCount, mainImageUrl } =
      this.state;

    return (
      <div className="parent">
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            {clothesItem.img.map((image, index) => (
              <div className={`thumbnail-${index + 1}`}>
                <img
                  onClick={this.setMainImage.bind(this, image)}
                  src={image}
                  alt="product"
                  style={{ width: "20%" }}
                />
              </div>
            ))}
            <div className="white-space"> </div>
            <div className="main-image">
              <img
                src={mainImageUrl || clothesItem.img[0]}
                alt="product"
                style={{ width: "100%" }}
              />
            </div>
            <div className="product-name">
              <h2>{clothesItem.name}</h2>
              <h4>SIZE:</h4>
            </div>
            <div className="size">
              {clothesItem.attributeType === "text" &&
                clothesItem.sizes.map((size, index) => (
                  <SizeBtn
                    key={index}
                    size={size}
                    selectButton={this.selectSizeBtn.bind(this, size)}
                    selectedSize={selectedSize || clothesItem.sizes[0]}
                  />
                ))}

              {clothesItem.attributeType === "swatch" &&
                clothesItem.colors.map((color, index) => (
                  <ColorBtn
                    key={index}
                    colorCode={color.code}
                    colorName={color.color}
                    selectButton={this.selectColorBtn.bind(this, color.code)}
                    selectedColorCode={
                      selectedColorCode || clothesItem.colors[0].code
                    }
                  />
                ))}
            </div>
            <div className="price">
              <h4>PRICE:</h4>
              <h4>{formatMoney(clothesItem.price, chosenCurrencyName)}</h4>
            </div>
            <div className="add-to-cart-section">
              {clothesItem.attributeType === "text" && (
                <button
                  className="add-to-cart"
                  onClick={this.addToCart.bind(
                    this,
                    clothesItem,
                    clothesItem.attributeType,
                    selectedSize || clothesItem.sizes[0],
                    itemCount
                  )}
                >
                  ADD TO CART
                </button>
              )}
              {clothesItem.attributeType === "swatch" && (
                <button
                  className="add-to-cart"
                  onClick={this.addToCartSwatch.bind(
                    this,
                    clothesItem,
                    clothesItem.attributeType,
                    selectedColorCode || clothesItem.colors[0].code,
                    itemCount
                  )}
                >
                  ADD TO CART
                </button>
              )}

              <RemoveBtn productId={clothesItem.id} />
            </div>
            <div className="info">
              <p>{clothesItem.desc}</p>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  clothes: state.clothes,
  loading: state.loading,
  currency: state.currency,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    addItem,
    getClothesItemById,
    setLoading,
    selectClothesBySize,
    selectSize,
    selectAttribute,
  })
)(ProductView);
