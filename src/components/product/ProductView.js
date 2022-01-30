import React, { Component } from "react";
import "../../styles/product-view.css";
import { withRouter } from "../helpers/routerHOC";
import { connect } from "react-redux";
import { compose } from "redux";
import { getClothesItemById } from "../../state/actions/clothesActions";
import { setLoading } from "../../state/actions/loadingActions";
import { addItem, selectSize } from "../../state/actions/cartActions";
import { selectClothesBySize } from "../../state/actions/clothesActions";
import SizeBtn from "../buttons/SizeBtn";
import RemoveBtn from "../buttons/RemoveBtn";
class ProductView extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.selectButton = this.selectButton.bind(this);

    this.state = {
      selectedSize: "",
      itemCount: 1,
    };
  }

  componentDidMount() {
    this.props.setLoading(true);
    const id = this.props.match.params.id;
    this.props.getClothesItemById(id);
    this.props.setLoading(false);
  }

  addToCart(item, selectedSize, count) {
    this.props.addItem({ ...item, selectedSize, count });
    this.props.selectSize(item.id, selectedSize);
  }

  selectButton(size) {
    this.setState({ selectedSize: size });
  }

  render() {
    const { clothesItem } = this.props.clothes;
    const { loading } = this.props.loading;

    const { selectedSize, itemCount } = this.state;

    return (
      <div className="parent">
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            <div className="thumbnail-1">
              <img
                src={clothesItem.img}
                alt="product"
                style={{ width: "20%" }}
              />
            </div>
            <div className="thumbnail-2">
              <img
                src={clothesItem.img}
                alt="product"
                style={{ width: "20%" }}
              />
            </div>
            <div className="thumbnail-3">
              <img
                src={clothesItem.img}
                alt="product"
                style={{ width: "20%" }}
              />
            </div>
            <div className="white-space"> </div>
            <div className="main-image">
              <img
                src={clothesItem.img}
                alt="product"
                style={{ width: "100%" }}
              />
            </div>
            <div className="product-name">
              <h2>{clothesItem.name}</h2>
              <h4>SIZE:</h4>
            </div>
            <div className="size">
              {clothesItem.sizes.map((size, index) => (
                <SizeBtn
                  key={index}
                  size={size}
                  selectButton={this.selectButton.bind(this, size)}
                  selectedSize={selectedSize || clothesItem.sizes[0]}
                />
              ))}
            </div>
            <div className="price">
              <h4>PRICE:</h4>
              <h4>${clothesItem.price}</h4>
            </div>
            <div className="add-to-cart-section">
              <button
                className="add-to-cart"
                onClick={this.addToCart.bind(
                  this,
                  clothesItem,
                  selectedSize || clothesItem.sizes[0],
                  itemCount
                )}
              >
                ADD TO CART
              </button>
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
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    addItem,
    getClothesItemById,
    setLoading,
    selectClothesBySize,
    selectSize,
  })
)(ProductView);
